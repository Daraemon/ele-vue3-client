<template>
  <router-view class="router" />
  <van-tabbar v-model="active" @change="onTabChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="cart-o">订单</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup() {
    const active = ref<number>(0);
    const router = useRouter();
    function onTabChange(active: number) {
      switch(active) {
        case 0:
          router.push('/home');
          break;
        case 1:
          router.push('/search');
          break;
        case 2:
          router.push('/order');
          break;
        case 3:
          router.push('/profile');
          break;
      }
    }
    return {
      active,
      onTabChange
    }
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
