<template>
  <div class="eatDrinkOder-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="eatDrinkOde-content">
      <div class="information-wrap">
        <x-input title="联系人 :" name="username" placeholder="请填写用餐人的姓名" is-type="china-name"></x-input>
        <x-input
          title="手机号 :"
          name="mobile"
          placeholder="请输入手机号码"
          keyboard="number"
          is-type="china-mobile"
        ></x-input>
        <x-input title="备注 :" name="ohter" placeholder="请填写用餐人数、时间、口味等"></x-input>
      </div>
      <div class="list-wrap">
        <div class="list-title">
          <p>成都麻辣串(蓬莱阁店)</p>
        </div>
        <div class="Line"></div>
        <div class="list-number">
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
          <div class="list-content">
            <div class="img-wrap">
              <img src alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>青椒牛肉</p>
                <span>￥15</span>
              </div>
              <div class="bottom-num">
                <b>x10</b>
              </div>
            </div>
          </div>
        </div>
        <div class="Line-two"></div>
        <div class="calculation">
          <p>
            小计
            <span>￥16.5</span>
          </p>
        </div>
      </div>
      <div class="integral">
        <div class="integral-left">
          <p>可用16.5积分抵用16.5元</p>
        </div>
        <div class="integral-right">
          <check-icon :value.sync="demo1"></check-icon>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-inner-left">
        <p>实付</p>
        <span>￥16.5</span>
      </div>
      <div class="bottom-inner-right" @click="goEatDrinkSucess">
        <p>支付</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput, CheckIcon } from "vux";

export default {
  props: {},
  data() {
    return {
      //是否使用积分抵扣按钮！
      demo1: false,
      //头部信息设置
      TitleObjData: {
        titleContent: "订单详情",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
      
  },
  watch: {},
  methods: {
      goEatDrinkSucess(){
          this.$router.push("/ReserveResult")
      }
  },
  components: {
    Header,
    XInput,
    CheckIcon
  }
};
</script>

<style scoped lang="css">
b {
  font-weight: normal;
}
.eatDrinkOder-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5ff;
  position: relative;
  overflow: hidden;
}
.eatDrinkOde-content {
  height: 84%;
  margin-top: 46px;
  /* border-top: 1px solid #eeeeee; */
  background: #f5f5f5;
  overflow-y: scroll;
}
.information-wrap {
  width: 92%;
  height: 145px;
  margin: 0 auto;
  background: #ffffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.list-wrap {
  width: 92%;
  /* height: 92%; */
  /* height: 300px; */
  margin: 0 auto;
  background: #ffffffff;
  margin-bottom: 10px;
}
.list-title {
  height: 56px;
  width: 100%;
}
.list-title p {
  font-size: 16px;
  color: #666666ff;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  line-height: 56px;
  text-indent: 5%;
}
.Line {
  width: 91%;
  height: 1px;
  background: #f5f5f5ff;
  margin: 0 auto;
  margin-bottom: 25px;
}
.list-number {
  width: 91%;
  margin: 0 auto;
}
.list-content {
  height: 55px;
  margin-bottom: 25px;
  /* background: aqua; */
}
.img-wrap {
  width: 55px;
  height: 55px;
  float: left;
}
.img-wrap img {
  background: none;
  background-color: red;
  width: 100%;
}
.content-right {
  width: 74.5%;
  height: 55px;
  /* background: green; */
  float: right;
}
.top {
  width: 100%;
  height: 15px;
}
.top p {
  display: block;
  float: left;
  font-size: 16px;
  color: #222222ff;
  font-weight: 300;
  font-family: PingFangSC-Medium;
}
.top span {
  display: block;
  float: right;
  font-size: 18px;
  color: #222222ff;
  font-weight: 800;
  font-family: PingFangSC-Medium;
}
.bottom-num b {
  font-weight: normal;
  display: block;
  margin-top: 20px;
  font-size: 14px;
  color: #999999ff;
  font-family: PingFangSC-Medium;
}
.Line-two {
  width: 91%;
  height: 1px;
  background: #f5f5f5ff;
  margin: 0 auto;
  margin-bottom: 20px;
}
.calculation {
  width: 91%;
  height: 36px;
  margin: 0 auto;
  /* background: gold; */
}
.calculation p {
  float: right;
  font-size: 16px;
  color: #222222ff;
  font-weight: 500;
  font-family: PingFangSC-Medium;
}
.calculation p span {
  font-size: 24px;
  font-weight: 800;
  font-family: PingFangSC-Heavy;
}
.integral {
  width: 92%;
  height: 55px;
  margin: 0 auto 25px;
  background: #ffffffff;
  border-radius: 8px;
}
.integral-left {
  float: left;
  margin-left: 4.35%;
}
.integral-left p {
  font-size: 16px;
  color: #222222ff;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  line-height: 55px;
}
.integral-right {
  float: right;
  margin-top: 14px;
  margin-right: 4.35%;
}
.bottom {
  height: 60px;
  width: 100%;
  /* background: forestgreen; */
  position: absolute;
  bottom: 0%;
  left: 0%;
  z-index: 100;
}
.bottom-inner-left {
  width: 70%;
  height: 60px;
  background: #ffffffff;
  float: left;
}
.bottom-inner-left p {
  float: left;
  font-size: 16px;
  color: #222222ff;
  font-weight: 400;
  font-family: PingFangSC-Medium;
  margin-left: 52%;
  line-height: 60px;
}
.bottom-inner-left span {
  float: left;
  color: #222222ff;
  font-size: 24px;
  font-family: PingFangSC-Heavy;
  font-weight: 800;
  line-height: 60px;
}
.bottom-inner-right {
  width: 30%;
  height: 60px;
  background: #3976ffff;
  float: left;
}
.bottom-inner-right p {
  text-align: center;
  color: #ffffffff;
  font-size: 16px;
  line-height: 60px;
  font-weight: 800;
  font-family: PingFangSC-Heavy;
}
</style>

<style lang="less" scoped>
/deep/ .vux-header {
  background-color: rgba(255, 255, 255, 0);
}
/deep/ .weui-cell {
  height: 48px;
}
/deep/ .weui-input {
  height: 2.411765em;
}
/deep/ .weui-icon-success-circle {
  color: #3976ff;
}
/deep/ .weui-icon-success {
  color: #3976ff;
}
/deep/ .vux-check-icon > .weui-icon-success:before,
.vux-check-icon > .weui-icon-success-circle:before {
  color: #3976ff;
}
</style>

