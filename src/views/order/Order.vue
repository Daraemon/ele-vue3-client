<template>
  <van-nav-bar title="订单" left-text="返回" left-arrow></van-nav-bar>
  <van-empty description="暂无数据"></van-empty>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Empty, NavBar } from 'vant';

export default defineComponent({
  components: {
    [Empty.name]: Empty,
    [NavBar.name]: NavBar,
  },
  setup() {
    return {
    }
  },
});
</script>

<style lang="scss">
</style>