<template>
<div class="home">
  <van-nav-bar title="首页">
    <template #left>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in swipeImages" :key="image">
      <img :src="image" alt="">
    </van-swipe-item>
  </van-swipe>
  <div class="home-divider"></div>
  <div class="home-content">
    <div class="home-content-title">
      <van-icon name="shop-o"></van-icon>
      <span>附近商家</span>
    </div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list 
        class="home-content-list"
        v-model:loading="loading"
        v-model:error="error"
        :finished="finished"
        finished-text="我也是有底线的～"
        error-text="请求失败，点击重新加载"
        @load="loadShops"
      >
        <shop-card 
          v-for="shop in shops" 
          :key="shop.id" 
          :shopDetail="shop"
        ></shop-card>
      </van-list>
    </van-pull-refresh>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { NavBar, Icon, Swipe, SwipeItem, Divider, List, PullRefresh } from 'vant';
import ShopCard from '../../components/home/ShopCard.vue';
import { ShopDetail } from '../../types/shop';

export default defineComponent({
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Divider.name]: Divider,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    ShopCard
  },
  setup(props) {
    const swipeImages = reactive([
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg',
      'https://img.yzcdn.cn/vant/apple-4.jpg',
    ])
    const testData = reactive<ShopDetail>({
      id: 0,
      name: '串串香', //名称
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',  //商铺图片
      rate: 3, //评分
      saleNumberInMonth: 88,  //月售数量
      sendBaseMoney: 20,  //起送金额
      shippingFee: 5,  //配送费
    })

    const loading = ref<boolean>(true);
    const finished = ref<boolean>(false);
    const error = ref<boolean>(false);
    const refreshing = ref<boolean>(false);
    let shops: Array<ShopDetail> = reactive([]);
    function loadShops() {
      setTimeout(() => {
        if (refreshing.value) {
          shops = [];
          refreshing.value = false;
        }
        for (let index = 0; index < 10; index++) {
          const id = shops.length;
          const test = {
            id,
            name: '串串香', //名称
            image: 'https://img.yzcdn.cn/vant/cat.jpeg',  //商铺图片
            rate: 3, //评分
            saleNumberInMonth: 88,  //月售数量
            sendBaseMoney: 20,  //起送金额
            shippingFee: 5,  //配送费
          } as ShopDetail
          shops.push(test);
        }
        loading.value = false;
        if(shops.length >= 40) {
          finished.value = true;
        }
      }, 500);
    }

    function onRefresh() {
      finished.value = false;
      loading.value = true;
      loadShops();
    }

    onMounted(() => {
      loadShops();
    })
    return {
      swipeImages,
      testData,
      loading,
      finished,
      error,
      refreshing,
      shops,
      loadShops,
      onRefresh
    }
  },
});
</script>

<style lang="scss">
.home {
  .van-swipe {
    height: 200px;
  }
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .home-divider {
    height: 20px;
    background-color: #eee;
  }
  .home-content {
    .home-content-title {
      margin-left: 20px;
      display: flex;
      align-items: center;

      span {
        margin-top: 2px;
        margin-left: 6px;
      }
    }
  }
}
</style>