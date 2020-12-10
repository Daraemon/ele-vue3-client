<template>
<div class="search">
  <van-nav-bar title="搜索" left-text="返回" left-arrow></van-nav-bar>
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
  >
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NavBar, Search } from 'vant';

export default defineComponent({
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search,
  },
  setup() {
    const searchText = ref<string>('');
    function onSearch() {
      console.log('点击了搜索');
    }
    return {
      searchText,
      onSearch
    }
  },
});
</script>

<style lang="scss">
</style>