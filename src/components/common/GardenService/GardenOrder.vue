<template>
  <div class="Order-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div style="margin-top:46px;">
      <tab
        :line-width="1"
        custom-bar-width="32px"
        default-color="#222222"
        active-color="#3976FF"
        bar-active-color="#3976FF"
      >
        <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>全部</tab-item>
        <tab-item @click.native="cur=1" :class="{active:cur==1}">服务中</tab-item>
        <tab-item @click.native="cur=2" :class="{active:cur==2}">已取消</tab-item>
        <tab-item @click.native="cur=3" :class="{active:cur==3}">已完成</tab-item>
      </tab>
    </div>
    <div class="tab-content">
      <b v-show="cur==0">0</b>
      <b v-show="cur==1">1</b>
      <b v-show="cur==2">2</b>
      <b v-show="cur==3">3</b>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tab, TabItem, Flexbox, FlexboxItem } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "游园订单",
        showLeftBack: true,
        showRightMore: false
      },
      cur: 0 //默认选中第一个tab,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Header,
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style scoped lang="css">
.Order-wrap {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden scroll;
}
.tab-content {
  width: 100%;
  height: 85%;
  overflow: hidden scroll;
}
.tab-content b {
  font-weight: normal;
  display: block;
  width: 100%;
}
</style>
<style lang="less" scoped>
/deep/ .vux-tab-wrap {
  margin-bottom: 10px;
}
/deep/ .vux-tab .vux-tab-item {
  font-size: 16px;
  font-weight: bold;
}
/deep/ .scrollable .vux-tab-item {
  flex: 0 0 20%;
}
</style>
