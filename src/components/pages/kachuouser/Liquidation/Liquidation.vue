<template>
  <div class="wrap">


    <div class="normal-content" :style="conHei">
      <orderList v-if="tabIndex == 0"></orderList>
      <cartment v-if="tabIndex == 1"></cartment>
      <consignment v-if="tabIndex == 2"></consignment>
    </div>


    <tabbar @on-index-change="tabChange">
      <tabbar-item  selected>
<!--        <img slot="icon" src="../../../assets/images/tabbar/file.png">-->
<!--        <img slot="icon-active" src="../../../assets/images/tabbar/file_h.png">-->
        <span slot="label">订单管理</span>
      </tabbar-item>
      <tabbar-item >
<!--        <img slot="icon" src="../../../assets/images/tabbar/cart.png">-->
<!--        <img slot="icon-active" src="../../../assets/images/tabbar/cart_h.png">-->
        <span slot="label">购物车</span>
      </tabbar-item>

      <tabbar-item>
<!--        <img slot="icon" src="../../../assets/images/tabbar/key.png">-->
<!--        <img slot="icon-active" src="../../../assets/images/tabbar/key_h.png">-->
        <span slot="label">一键寄卖</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import orderList from './orderList'
  import cartment from './Cartment'
  import Consignment from './Consignment'
  import { Tab, TabItem,Tabbar, TabbarItem} from 'vux'
  export default {
    name: "",

    data() {
      return {
        tabIndex:0,
      };
    },
    methods: {
      tabChange (index) {
        this.tabIndex = index
        console.log('on item click:', index)
      },
    },
    components: {
      Header,
      Tab,
      TabItem,Tabbar, TabbarItem,
      orderList,cartment,Consignment
    },
    computed: {
      conHei() {
        return { height: document.documentElement.clientHeight - 45 + "px" };
      }
    },
  };
</script>
<style lang='css' scoped>
  .normal-content{
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    margin-bottom: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }








</style>
