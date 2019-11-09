<template>
  <div class="goodsOrder-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <tab
      :line-width="1"
      custom-bar-width="32px"
      default-color="#222222"
      active-color="#3976FF"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>待接单</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">服务中</tab-item>
      <tab-item @click.native="cur=2" :class="{active:cur==2}">已取消</tab-item>
      <tab-item @click.native="cur=3" :class="{active:cur==3}">已完成</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content">
              <div class="content-top">
                <div class="img-wrap">
                  <img src alt />
                  <div class="num">
                    <p>共2件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：安其拉</p>
                    <p class="state">待发货</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:2019-08-01 19:35</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥400</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-two">
                  <p>发货</p>
                </div>
                <div class="bottom-one">
                  <p>联系买家</p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
        <!-- <div class="order-content">
          <div class="content-top">
            <div class="img-wrap">
              <img src alt />
            </div>
          </div>
          <div class="content-bottom"></div>
        </div>-->
      </b>
      <b v-show="cur==1">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content">
              <div class="content-top">
                <div class="img-wrap">
                  <img src alt />
                  <div class="num">
                    <p>共2件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：安其拉</p>
                    <p class="state">待发货</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:2019-08-01 19:35</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥400</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-two">
                  <p>发货</p>
                </div>
                <div class="bottom-one">
                  <p>联系买家</p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==2">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content">
              <div class="content-top">
                <div class="img-wrap">
                  <img src alt />
                  <div class="num">
                    <p>共2件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：安其拉</p>
                    <p class="state">待发货</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:2019-08-01 19:35</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥400</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-two">
                  <p>发货</p>
                </div>
                <div class="bottom-one">
                  <p>联系买家</p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==3">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content">
              <div class="content-top">
                <div class="img-wrap">
                  <img src alt />
                  <div class="num">
                    <p>共2件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：安其拉</p>
                    <p class="state">待发货</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:2019-08-01 19:35</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥400</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-two">
                  <p>发货</p>
                </div>
                <div class="bottom-one">
                  <p>联系买家</p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
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
        titleContent: "导游订单",
        showLeftBack: true,
        showRightMore: false
      },
      cur: 0 //默认选中第一个tab
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
.goodsOrder-wrap {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;
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
.order-content {
  width: 100%;
  height: 180px;
  background: #ffffff;
  margin-bottom: 10px;
  border-radius: 8px;
}
.content-top {
  height: 105px;
  width: 100%;
  margin-bottom: 18px;
}
.content-bottom {
  height: 55px;
  width: 100%;
}
.img-wrap {
  height: 90px;
  width: 90px;
  border-radius: 8px;
  float: left;
  margin-top: 12px;
  position: relative;
  margin-left: 4%;
}
.img-wrap img {
  width: 100%;
}
.num {
  width: 90px;
  height: 30px;
  background: #000000;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.num p {
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
}
.mid-text {
  width: 66%;
  height: 90px;
  float: right;
  margin-top: 12px;
}
.text-one {
  height: 28px;
}
.name {
  float: left;
  font-size: 16px;
  font-weight: bold;
  color: #222222;
  font-family: PingFangSC-Bold;
}
.state {
  font-size: 14px;
  color: #85a9ff;
  float: right;
  font-family: PingFangSC-Regular;
  margin-right: 4%;
}
.text-two {
  margin-top: 3px;
  height: 18px;
}
.text-two p {
  font-size: 12px;
  color: #999999;
}
.text-three {
  height: 22px;
  margin-top: 22px;
}
.text-three p {
  font-size: 14px;
  color: #666666;
}
.bottom-one {
  float: right;
  border-radius: 18px;
  width: 100px;
  height: 35px;
  border: 1px solid #3976ff;
  background: #ffffff;
  margin-top: 2px;
}
.bottom-one p {
  font-size: 14px;
  color: #3976ff;
  line-height: 35px;
  text-align: center;
}
.bottom-two {
  float: right;
  border-radius: 18px;
  width: 100px;
  height: 35px;
  background: #3976ff;
  margin: 2px 4% 0 4%;
}
.bottom-two p {
  font-size: 14px;
  color: #ffffff;
  line-height: 35px;
  text-align: center;
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
