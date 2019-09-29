<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="form-main">
        <x-input title="姓名：" is-type="china-name" placeholder v-model="msgList.name"></x-input>
        <x-input title="联系电话：" placeholder v-model="msgList.phone"></x-input>
        <x-textarea name="description" placeholder="请输入留言..." v-model="msgList.content"></x-textarea>
        <popup-picker
          class="pickOne"
          title="选择人数/人"
          :data="this.numList"
          v-model="msgList.chooseList.numValue"
          @on-show="onShow"
          @on-hide="onHide"
          placeholder="请选择"
        ></popup-picker>
        <popup-picker
          class="pickTwo"
          title="选择时长/小时"
          :data="this.timeList"
          v-model="msgList.chooseList.timeValue"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          placeholder="请选择"
        ></popup-picker>
        <span @click="useIntegral" style="font-size: 3.8vw;">
          <check-icon
            :value.sync="demo1"
            label-position="right"
            style=" background: #fff;display: block; height: 45px;border-radius: 8px;"
          >可用{{this.startScore}}积分抵用{{this.startScore}}元</check-icon>
        </span>
      </div>
    </div>
    <div class="btm-bar">
      <div class="btm-price">
        合计:
        <span class="price">
          ￥
          <i>{{this.msgList.endPrice}}</i>
        </span>
      </div>
      <x-button @click.native="submit">立即预约</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell, XButton, XInput, XTextarea, PopupPicker, CheckIcon } from "vux";
import { yuyueGuide, getUserInfo } from "@/servers/api.js";
export default {
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "预约导游",
        showLeftBack: true,
        showRightMore: false
      },
      test: [1],
      newTest: {},
      //导游id
      gId: "",
      //人数列表
      numList: [["1-5", "5-10", "10以上"]],
      //时间列表
      timeList: [["1", "2", "3", "4", "5", "6", "7", "8"]],
      msgList: {
        //填写姓名
        name: "",
        //填写手机号
        phone: "",
        //填写内容
        content: "",
        endPrice: "",
        chooseList: {
          //选择人数
          numValue: [],
          //选择时间
          timeValue: ["1"]
        }
      },
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
    this.getUserInfo();
    console.log(this.$route.query);
    this.gId = this.$route.query.id;
    this.msgList.endPrice = this.$route.query.price;
    //初始值积分显示
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.shop_integral_itf&type=" +
          4 +
          "&money=" +
          this.msgList.endPrice
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
    //选择器该改变时触发
    onChange(val) {
      this.msgList.endPrice =
        this.msgList.chooseList.timeValue[0] * this.$route.query.price;
      this.demo1 = false;
    },
    //选择器显示时触发
    onShow() {
      console.log("on show");
    },
    //选择器关闭时触发
    onHide(type) {
      console.log("on hide", type);
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
              4 +
              "&money=" +
              this.msgList.endPrice
          )
          .then(({ data }) => {
            console.log(data);
            //后台返回传来计算后的价格
            this.msgList.endPrice = data.data.real_price;
            //抵扣的积分
            this.Deduction = data.data.decr_integral;
            //抵扣的金额
            this.Demoney = data.data.decr_money;
          });
      } else {
        console.log("不使用积分");
        this.msgList.endPrice =
          this.msgList.chooseList.timeValue[0] * this.$route.query.price;
        this.Deduction = 0;
        this.Demoney = 0;
      }
    },

    submit() {
      yuyueGuide({
        id: this.$route.query.id,
        realname: this.msgList.name,
        mobile: this.msgList.phone,
        content: this.msgList.content,
        integral: this.Deduction,
        integral_money: this.Demoney,
        message: {
          people: this.msgList.chooseList.numValue.toString(),
          time: this.msgList.chooseList.timeValue.toString()
        },
        type: 5,
        price: this.msgList.endPrice
      })
        .then(data => {
          console.log(data);
          if (data.result == 1) {
            this.showTip("预约成功去支付");
            //填写完整跳转支付页面进行支付
            this.$router.push("/GuidePayment?orderid=" + data.data);
            console.log(data);
            //如果积分大于金额
          } else if (data.result == 2) {
            this.showTip("使用积分抵扣成功");
            this.$router.push("/orderlist");
            console.log(data);
          } else {
            this.showTip("请填写完整或检查网络");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  components: {
    Header,
    Cell,
    XInput,
    XButton,
    XTextarea,
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
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  padding: 15px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.form-main .weui-cell {
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
}
.form-main .weui-cell:before {
  display: none;
}
.form-main /deep/ .weui-label {
  font-size: 16px;
}
.form-main /deep/ .vux-label {
  font-size: 16px;
}
.form-main /deep/ .weui-textarea {
  font-size: 16px;
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
  color: #ff3939;
}
.btm-price .price i {
  font-style: normal;
  font-size: 20px;
}
</style>
<style lang="less" scoped>
/deep/ .pickOne {
  background: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
}
/deep/ .pickTwo {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
}
/deep/ .vux-check-icon {
  display: inline-block;
  padding: 11px 6px;
}
/deep/ .vux-check-icon > .weui-icon-success:before,
.vux-check-icon > .weui-icon-success-circle:before {
  color: #3987ff;
}
</style>
