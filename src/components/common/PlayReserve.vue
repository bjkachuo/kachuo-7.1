<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="form-panel">
        <div class="form-cells">
          <div class="form-header">{{this.$route.query.goodname}}</div>
          <div class="select-body">
            <div class="select-cell">
              <calendar
                v-model="dateTime"
                title="使用日期"
                disable-past
                placeholder="请选择"
                @on-change="onChange"
                @on-show="log('show')"
                @on-hide="log('hide')"
                :highlight-weekend="true"
              ></calendar>
            </div>
          </div>
        </div>
      </div>
      <div class="form-panel">
        <div class="form-cells">
          <div class="form-header">基本信息</div>
          <popup-picker
            class="pickOne"
            title="票数/张"
            :data="menus2"
            v-model="roomNum"
            @on-show="onShow"
            @on-hide="onHide"
            @on-change="onChange"
            placeholder="请选择"
          ></popup-picker>
          <x-input
            title="联系人"
            placeholder="填写真实入住人姓名"
            v-model="name"
            type="text"
            is-type="china-name"
          ></x-input>
          <x-input
            title="手机号"
            placeholder="用于接收预订信息"
            v-model="phone"
            :max="13"
            is-type="china-mobile"
          ></x-input>
        </div>
      </div>
      <div class="form-panel">
        <span @click="useIntegral">
          <check-icon
            :value.sync="demo1"
            label-position="right"
          >可用{{this.startScore}}积分抵用{{this.startScore}}元</check-icon>
        </span>
      </div>
      <div class="form-panel">
        <popup-picker
          class="pickTwo"
          title="发票信息"
          :data="menus"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          placeholder="请选择"
        ></popup-picker>
      </div>
    </div>
    <div class="btm-bar">
      <div class="btm-price">
        实付
        <span class="price">
          ￥
          <i>{{this.endPrice}}</i>
        </span>
      </div>
      <x-button @click.native="submit">提交订单</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { orderReside } from "@/servers/api.js";
import {
  Cell,
  XButton,
  XInput,
  XTextarea,
  Checklist,
  Actionsheet,
  Calendar,
  PopupPicker,
  CheckIcon
} from "vux";
import { type } from "os";
export default {
  props: [""],
  data() {
    return {
      current: 0,
      ppValue: "1张",
      fapvalue: "不需要发票",
      checklist: ["可用100积分抵用100元"],
      TitleObjData: {
        titleContent: "提交订单",
        showLeftBack: true,
        showRightMore: false
      },
      numvalue: "",
      tvalue: "",
      numvalue: "",
      tvalue: "",
      show1: false,
      show2: false,
      //选择发票
      menus: [["开发票", "不需要发票"]],
      //选择票数
      menus2: [["1", "2", "3", "4", "5", "6"]],
      //票数数
      roomNum: ["1"],
      //发票信息
      // invoice: [],
      //姓名
      name: "",
      //手机号
      phone: "",
      //商品id
      storeId: "",
      //商家id
      businessId: "",
      //价格
      price: "",
      //日期
      dateTime: [],
      //最终价格
      endPrice: "",
      //是否使用积分
      demo1: false,
      //全局用户信息
      userInfo: null,
      //下订单中抵扣的积分
      Deduction: 0,
      //下单中订单中抵扣的金额
      Demoney: 0,
      //初始值积分
      startScore: ""
    };
  },
  created() {
    //获取全局用户信息
    this.getUserInfo();
  },

  mounted() {
    console.log(this.$route.query);
    //商品id
    this.storeId = this.$route.query.id;
    //商家id
    this.businessId = this.$route.query.storeId;
    //初始价格
    this.price = this.$route.query.price;
    //最终价格
    this.endPrice = this.price;
    //初始值积分显示
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.shop_integral_itf&type=" +
          1 +
          "&money=" +
          this.endPrice
      )
      .then(({ data }) => {
        console.log(data);
        this.startScore = data.data.decr_integral;
      });
  },
  methods: {
    //获取全局用户信息
    getUserInfo() {
      this.userInfo = this.GLOBAL.getSession("userLoginInfo");
    },

    //显示提示信息
    showTip(conttentTip) {
      this.$vux.toast.text(conttentTip, "middle");
      setTimeout(() => {
        this.$vux.toast.hide();
      }, 1000);
    },
    url(link) {
      this.$router.push(link);
    },
    //积分抵扣
    useIntegral() {
      if (this.demo1 === true) {
        console.log("使用积分");
        this.$http
          .post(
            "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.shop_integral_itf&type=" +
              1 +
              "&money=" +
              this.endPrice
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
        this.endPrice = this.roomNum[0] * this.price * this.dateTime.length;
        this.Deduction = 0;
        this.Demoney = 0;
      }
    },

    //支付提交订单
    submit() {
      orderReside({
        id: this.businessId,
        type: 3,
        mobile: this.phone,
        price: this.endPrice,
        realname: this.name,
        date: this.dateTime,
        integral: this.Deduction,
        integral_money: this.Demoney,
        goods: [this.storeId.toString(), this.roomNum.toString()]
      })
        .then(data => {
          if (data.result == 1) {
            this.showTip("预约成功去支付");
            //填写完整跳转支付页面进行支付
            this.$router.push("/GuidePayment?orderid=" + data.data.result);
            console.log(data);
          } else if (data.result == 2) {
            this.showTip("使用积分抵扣成功")
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
    },
    //选择器显示时触发
    onShow() {
      console.log("on show");
    },
    //选择器关闭时触发
    onHide(type) {
      console.log("on hide", type);
    },
    // onChangedata(val){
    //   this.endPrice = this.roomNum[0] * this.price * this.dataTime.length
    // },
    //当日期或者票数发生改变时重新计算价格
    onChange(val) {
      //价格乘票张数
      this.endPrice = this.roomNum[0] * this.price * this.dateTime.length;
      this.demo1 = false;
      console.log(this.endPrice);
    },
    log(str) {
      console.log(str);
    }
  },

  components: {
    Header,
    Cell,
    XInput,
    XButton,
    XTextarea,
    Checklist,
    Actionsheet,
    Calendar,
    PopupPicker,
    CheckIcon
  },
  computed: {
    conHei() {
      return {
        height: document.documentElement.clientHeight - 45 + "px"
      };
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  height: 88%;
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  margin-bottom: 15px;
  padding: 15px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.select-body {
  position: relative;
  padding: 0px;
}
.select-body:before {
  content: " ";
  position: absolute;
  left: 15px;
  top: 0;
  right: 15px;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.select-txt {
  font-size: 16px;
  color: #666666;
  margin-bottom: 10px;
}
.select-days {
  overflow: hidden;
  margin: 0 -5px;
}
.select-days li {
  padding: 0 5px;
  float: left;
  width: 25%;
}
.select-days .day-item {
  border: 1px solid rgba(225, 234, 255, 1);
  text-align: center;
  line-height: 1.2;
  border-radius: 4px;
  padding: 7px 0;
  height: 50px;
}
.day-item .day {
  font-size: 12px;
  margin-bottom: 3px;
}
.day-item .price {
  font-size: 14px;
  color: #ff3939;
  font-weight: bold;
}
.active .day-item {
  background-color: #3976ff;
}
.active .day-item * {
  color: #ffffff;
}
.item-more {
  display: inline-block;
  position: relative;
  color: #3987ff;
  font-size: 12px;
  padding-right: 10px;
  margin: 10px 0;
}
.item-more:after {
  content: " ";
  display: inline-block;
  height: 8px;
  width: 8px;
  border-width: 1px 1px 0 0;
  border-color: #3987ff;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -4px;
}
.form-panel {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
}
.form-body {
  padding: 15px;
}
.form-header {
  padding: 15px;
  font-weight: bold;
  line-height: 1;
  font-size: 16px;
}
.grid-footer {
  font-size: 12px;
  color: #999;
}
.grid-days {
  margin-bottom: 5px;
}
.weui-cell:before {
  right: 15px;
}
.form-panel /deep/ .weui-cell {
  padding: 15px;
  font-size: 16px;
}
.form-panel /deep/ .weui-cells_checkbox:before {
  display: none;
}
.form-panel /deep/ .weui-cells_checkbox:after {
  display: none;
}
.grid-header {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  margin-bottom: 5px;
}
.grid-title {
  font-size: 18px;
  font-weight: bold;
}
.grid-more {
  position: relative;
  padding-right: 10px;
  font-size: 16px;
  line-height: 1;
}
.grid-more:after {
  content: " ";
  display: inline-block;
  height: 8px;
  width: 8px;
  border-width: 1px 1px 0 0;
  border-color: #222;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -4px;
}
.less-more {
  position: relative;
  padding-right: 20px;
  font-size: 14px;
  line-height: 1;
  color: #3976ff;
}
.less-more:after {
  content: " ";
  display: inline-block;
  height: 8px;
  width: 8px;
  border-width: 1px 1px 0 0;
  border-color: #222;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -4px;
}
.btm-bar {
  position: fixed;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  height: 55px;
}
.btm-bar .weui-btn_default,
.btm-bar .weui-btn_default:active {
  background-color: #3987ff;
  height: 55px;
  width: 120px;
  color: #ffffff;
  border: 0;
  border-radius: 0;
  margin: 0;
}
.btm-price {
  padding: 0 15px;
  font-size: 16px;
}
.btm-price .price {
  font-weight: bold;
  color: #ff3939;
}
.btm-price .price i {
  font-style: normal;
  font-size: 20px;
}
.form-panel
  /deep/
  .weui-cells_checkbox
  .weui-check:checked
  + .vux-checklist-icon-checked:before {
  color: #3987ff;
}

/* 日历 */
.item-more /deep/ .weui-cell {
  padding: 0;
}
.item-more /deep/ .vux-calendar:before {
  display: none;
}
.item-more /deep/ .weui-cell__ft {
  display: none;
}
.item-more /deep/ .vux-label {
  font-size: 12px;
}
.selected-days {
  color: #999;
  width: 90px;
}
</style>
<style lang="less" scoped>
/deep/ .select-body[data-v-7dd8e0b4]:before {
  border-top: none;
}
/deep/ .vux-check-icon {
  display: inline-block;
  padding: 15px 6px;
}
/deep/ .vux-check-icon > .weui-icon-success:before,
.vux-check-icon > .weui-icon-success-circle:before {
  color: #3987ff;
}
</style>