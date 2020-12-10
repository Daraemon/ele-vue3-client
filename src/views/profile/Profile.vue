<template>
我的
  <van-row>
    <van-col span="8">left</van-col>
    <van-col span="8">right</van-col>
  </van-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Col, Row} from 'vant';

export default defineComponent({
  components: {
    [Col.name]: Col,
    [Row.name]: Row
  },
  setup() {
    return {
    }
  },
});
</script>

<style lang="scss">
</style>