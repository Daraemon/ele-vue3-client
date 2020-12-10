<template>
  <van-nav-bar title="我的" left-text="返回" left-arrow></van-nav-bar>
  <user-info-card></user-info-card>
  <van-row>
    <van-col span="8">
      <span>{{100}}</span>元
      <div>我的余额</div>
    </van-col>
    
    <van-col span="8">
      <span>{{100}}</span>个
      <div>我的优惠</div>
    </van-col>
    <van-col span="8">
      <span>{{100}}</span>个
      <div>我的积分</div>
    </van-col>
  </van-row>
  <van-cell-group>
    <van-cell value="我的订单" icon="orders-o" is-link />
    <van-cell value="积分商城" icon="shop" is-link />
    <van-cell value="饿了吗会员卡" icon="vip-card" is-link />
  </van-cell-group>
  <van-cell-group>
    <van-cell value="服务中心" icon="service" is-link />
    <van-cell value="下载饿了吗APP" icon="bag" is-link />
  </van-cell-group>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NavBar, Card, Icon, Row, Col, Cell, CellGroup } from 'vant';
import UserInfoCard from '../../components/profole/UserInfoCard.vue'

export default defineComponent({
  components: {
    [NavBar.name]: NavBar,
    [Card.name]: Card,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    UserInfoCard
  },
  setup() {
    const test = ref(0);
    return {
      test
    }
  },
});
</script>

<style lang="scss">
</style>