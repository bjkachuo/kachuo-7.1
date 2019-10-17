<template>
  <div class="eatDrinkOder-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="eatDrinkOde-content">
      <div class="information-wrap">
        <x-input
          title="联系人 :"
          name="username"
          placeholder="请填写用餐人的姓名"
          is-type="china-name"
          v-model="name"
        ></x-input>
        <x-input
          title="手机号 :"
          name="mobile"
          placeholder="请输入手机号码"
          keyboard="number"
          is-type="china-mobile"
          v-model="phone"
        ></x-input>
        <x-input title="备注 :" name="ohter" placeholder="请填写用餐人数、时间、口味等" v-model="remark"></x-input>
      </div>
      <div class="list-wrap">
        <div class="list-title">
          <p>{{this.$route.query.storeName}}</p>
        </div>
        <div class="Line"></div>
        <div class="list-number">
          <div
            class="list-content"
            v-for="(item,index) in this.storeNum"
            :key="index"
            v-if="item.num > 0"
          >
            <div class="img-wrap">
              <img :src="item.image" alt />
            </div>
            <div class="content-right">
              <div class="top">
                <p>{{item.name}}</p>
                <span style="color:#ff3939;">￥{{item.price * item.num}}</span>
              </div>
              <div class="bottom-num">
                <b>x{{item.num}}</b>
              </div>
            </div>
          </div>
        </div>
        <div class="Line-two"></div>
        <div class="calculation">
          <p>
            小计
            <span style="color:#ff3939;">￥{{this.$route.query.endPrice}}</span>
          </p>
        </div>
      </div>
      <div class="integral">
        <span @click="useIntegral">
          <check-icon
            :value.sync="demo1"
            label-position="right"
          >可用{{this.startScore}}积分抵用{{this.startScore}}元</check-icon>
        </span>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-inner-left">
        <p>实付</p>
        <span style="color:#ff3939;">￥{{this.endPrice}}</span>
      </div>
      <div class="bottom-inner-right" @click="submit">
        <p>支付</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput, CheckIcon } from "vux";
import { orderReside } from "@/servers/api.js";

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
      },
      //预定人姓名
      name: "",
      //预定人手机号
      phone: "",
      //预定备注
      remark: "",
      //选中的商品
      storeNum: {},
      //下单时传递的数量
      storeNumTwo: [],
      //初始值积分
      startScore: "",
      //最后价格
      endPrice: "",
      //下订单中抵扣的积分
      Deduction: 0,
      //下单中订单中抵扣的金额
      Demoney: 0,
      //商家id
      businessId: "",
      //商家tyoe1吃 2喝
      type: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$route.query);
    //将存入的商品和数量取出来
    this.storeNum = JSON.parse(sessionStorage.getItem("storeDetails"));
    console.log(this.storeNum);
    // for (var key in this.storeNum) {
    //   console.log(key, "look");
    // }
    //将num大于0的数组提取出来提交表单
    var newarr = [];
    for (var i = 0; i < this.storeNum.length; i++) {
      var temp = { id: this.storeNum[i]["id"], num: this.storeNum[i]["num"] };
      if (this.storeNum[i]["num"] != 0) {
        newarr.push(temp);
      }
    }
    console.log(newarr);
    this.storeNumTwo = newarr;
    console.log(this.storeNumTwo, 11111111);
    //最终价格等于传来的价格
    this.endPrice = this.$route.query.endPrice;
    //商家id
    this.businessId = this.$route.query.businessId;
    //商家tyoe 1吃 2喝
    this.type = this.$route.query.type;
    //初始值积分显示
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.shop_integral_itf&type=" +
          1 +
          "&money=" +
          this.$route.query.endPrice
      )
      .then(({ data }) => {
        console.log(data);
        this.startScore = data.data.decr_integral;
      });
  },
  watch: {},
  methods: {
    //下单成功后的跳着
    // goEatDrinkSucess() {
    //   this.$router.push("/ReserveResult");
    // },
    //积分抵扣
    //显示提示信息
    showTip(conttentTip) {
      this.$vux.toast.text(conttentTip, "middle");
      setTimeout(() => {
        this.$vux.toast.hide();
      }, 1000);
    },

    useIntegral() {
      if (this.demo1 === true) {
        console.log("使用积分");
        this.$http
          .post(
            "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.shop_integral_itf&type=" +
              1 +
              "&money=" +
              this.$route.query.endPrice
          )
          .then(({ data }) => {
            console.log(data);
            //后台返回传来计算后的价格
            this.endPrice = data.data.real_price;
            //抵扣的积分
            this.Deduction = data.data.decr_integral;
            //抵扣的金额
            this.Demoney = data.data.decr_money;
          });
      } else {
        console.log("不使用积分");
        //不用积分的话显示路由传过来的价格
        this.endPrice = this.$route.query.endPrice;
        this.Deduction = 0;
        this.Demoney = 0;
      }
    },
    //支付提交订单
    submit() {
      orderReside({
        id: this.businessId,
        type: this.type,
        mobile: this.phone,
        price: this.endPrice,
        realname: this.name,
        integral: this.Deduction,
        integral_money: this.Demoney,
        content: this.remark,
        goods: this.storeNumTwo
      })
        .then(data => {
          if (data.result == 1) {
            this.showTip("预约成功去支付");
            //填写完整跳转支付页面进行支付
            this.$router.push("/GuidePayment?orderid=" + data.data.result);
            console.log(data);
          } else if (data.result == 2) {
            this.showTip("使用积分抵扣成功");
            //如果积分大于金额,不需支付直接扣几分跳转订单页>>>>
            this.$router.push("/GardenOrder");
            console.log(data);
          } else {
            this.showTip("请填写完整或检查网络");
            console.log(data);
          }
        })
        .catch(error => {
          console.log(error);
        });
      // console.log( this.dateTime,this.endPrice)
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
  background: rgba(255, 255, 255);
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
  background: rgba(255, 255, 255);
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
  background-color: cornflowerblue;
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
  font-size: 16px;
  color: #222222ff;
  font-weight: 400;
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
  font-size: 18px;
  font-weight: 800;
  font-family: PingFangSC-Heavy;
}
.integral {
  width: 92%;
  height: 55px;
  margin: 0 auto 25px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  padding: 16px 8px;
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
  background: rgba(255, 255, 255);
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
  background: rgba(57, 118, 255);
  float: left;
}
.bottom-inner-right p {
  text-align: center;
  color: rgba(255, 255, 255);
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

