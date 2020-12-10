<template>
<van-row class="user-info-card" align="center" jus>
  <van-col span="6">
    <van-icon name="user-circle-o" size="70" />
  </van-col>
  <van-col class="user-info-card-center" span="14">
    <div class="user-info-card-center-top">
      登陆/注册
    </div>
    <div class="user-info-card-center-bottom">
      <van-icon name="phone-o" size="20"></van-icon>
      <span>暂无绑定手机号</span>
    </div>
  </van-col>
  <van-col span="4">
    <van-icon name="arrow"></van-icon>
  </van-col>
</van-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon, Col, Row } from 'vant';

export default defineComponent({
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
  },
  setup() {
    return {
    }
  },
});
</script>

<style lang="scss">
.user-info-card {
  .user-info-card-center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .user-info-card-center-bottom {
      display: flex;
      justify-content: center;
    }
  }
  .user-info-card-bottom {
  }
}
</style>