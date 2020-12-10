<template>
<div class="shop-card">
  <div class="shop-card-left">
    <van-image class="shop-card-left-image" :src="shopDetail.image" />
  </div>
  <div class="shop-card-center">
    <div class="shop-card-center-top">
      <span class="shop-card-center-top-icon">品牌</span>
      <span class="shop-card-center-top-name">{{ shopDetail.name }}</span>
    </div>
    <div class="shop-card-center-middle">
      <van-rate v-model="rate" :size="10" readonly color="#ffd21e" />
      <span>月售{{shopDetail.saleNumberInMonth}}单</span>
    </div>
    <div class="shop-card-center-bottom">
      <span>¥{{shopDetail.sendBaseMoney}}起送 / 配送费约¥{{shopDetail.shippingFee}}</span>
    </div>
  </div>
  <div class="shop-card-right">
    <div class="shop-card-right-top">
      <span>保</span>
      <span>准</span>
      <span>票</span>
    </div>
    <div class="shop-card-right-middle">
      <span>蜂鸟专送</span>
      <span>准时达</span>
    </div>
    <div class="shop-card-right-bottom">
      <span>1000公里 / 1小时05分钟</span>
    </div>
  </div>
</div>
<van-divider></van-divider>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { Image as VanImage, Col, Row, Rate, Divider } from 'vant';
import { ShopDetail } from '../../types/shop';

export default defineComponent({
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [VanImage.name]: VanImage,
    [Rate.name]: Rate,
    [Divider.name]: Divider,
  },
  props: {
    shopDetail: {
      type: Object as PropType<ShopDetail>,
      required: true,
    },
  },
  setup(props) {
    const { rate } = toRefs(props.shopDetail);
    return {
      rate,
    }
  },
});
</script>

<style lang="scss">
.shop-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  margin: 0px 6px;
  .shop-card-left {
    .shop-card-left-image {
      width: 80px;
      height: 80px;
    }
  }
  .shop-card-center {
    display: flex;
    margin-left: -8px;
    flex-direction: column;
    align-items: flex-start;
    
    .shop-card-center-top {
      .shop-card-center-top-icon {
        font-size: 12px;
      }
      .shop-card-center-top-name {
        font-size: 20px;
      }
    }
    .shop-card-center-middle {
      span {
        margin-left: 4px;
        font-size: 12px;
      }
    }
    .shop-card-center-bottom {
      font-size: 12px;
    }
  }
  .shop-card-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 12px;
    // margin-right: 6px;
  }
}
</style>