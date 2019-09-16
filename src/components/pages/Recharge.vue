<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="tab-card">
        <div class="inner">
          <div class="card-header">充值金额</div>
          <checker v-model="demo1" default-item-class="rec-item" selected-item-class="rec-item-selected">
            <checker-item value="10"><span>{{('10积分') }}</span></checker-item>
            <checker-item value="30"><span>{{ ('30积分') }}</span></checker-item>
            <checker-item value="50"><span>{{ ('50积分') }}</span></checker-item>
            <checker-item value="100"><span>{{ ('100积分') }}</span></checker-item>
            <checker-item value="500"><span>{{ ('500积分') }}</span></checker-item>
            <checker-item v-model="maskValue"><span>{{ ('其他金额') }}</span></checker-item>
          </checker>
        </div>
      </div>
      <div class="tab-card input-card">
        <x-input
          title="其它金额:"
          v-model="maskValue"
          placeholder="请输入充值金额(充值比例1:1积分)"
          @on-change="onChange()"
          type="number"
        ></x-input>
        <!-- {{this.maskValue}} -->
      </div>
      <div class="tab-card">
        <div class="inner">
          <div class="card-header">支付方式</div>
          <radio :options="radio001" v-model="style"></radio>
        </div>
      </div>
    </div>
    <div class="end-button">
      <x-button link="/RechargeResult" @click.native="submit">确认充值</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell, XInput, XButton, Radio, Checker, CheckerItem } from "vux";
import { recharge } from "@/servers/api.js";
import { type } from 'os';
export default {
  data() {
    return {
      //选择的积分
      demo1: "",
      TitleObjData: {
        titleContent: "充值",
        showLeftBack: true,
        showRightMore: false
      },
      //其他输入的金额
      maskValue: "",
      //支付方式
      style: "22",
      radio001: [
        {
          icon: "http://www.zxdiv.com/alipay.png",
          key: "22",
          value: "支付宝支付"
        },
        {
          icon: "http://www.zxdiv.com/wxpay.png",
          key: "21",
          value: "微信支付"
        }
      ]
    };
  },
  mounted() {

  },
  methods: {
    payRequest(type) {
      Pay({
        paytype: type,
        order_sn: this.$route.query.orderid,
        isJf: "0"
      })
        .then(res => {
          console.log(res);
          if (res.result === 1) {
            if (type === "21") {
              this.WeixinPay(res.data.url);
            } else {
              this.AliPay(res.data.url);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    errorToast(res) {
      this.$vux.toast.show({
        text: res,
        type: "text",
        width: "15em",
        position: "middle",
        time: 3000
      });
    },

    // 微信支付
    WeixinPay(res) {
      let WXparams = {
        partnerid: res.partnerid, // merchant id
        prepayid: res.prepayid, // prepay id
        noncestr: res.noncestr, // nonce
        timestamp: res.timestamp.toString(), // timestamp
        sign: res.paySign // signed string
      };
      let that = this;
      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
        Wechat.sendPaymentRequest(
          WXparams,
          function () {
            that.successToast();
          }, function (reason) {
            that.errorToast(reason);
          },
        );
      }
    },
    // 支付宝支付
    AliPay(aliInfo) {
      let that = this;
      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
        cordova.plugins.alipay.payment(
          aliInfo,
          function () {
            that.successToast();
          }, function (reason) {
            if(reason.resultStatus == "6001"){
              that.errorToast("您点击取消并返回");
            }
            else{
              that.errorToast(reason.memo);
            }
          },
          /*function success(e) {
            if (e.resultStatus === 9000) {
              that.successToast();
            } else {
              that.errorToast();
            }
          },
          function error(e) {
            console.log(e);
            that.errorToast();
          }*/
        );
      }
    },

    submit() {
      this.payRequest(this.style)
    },
    onChange() {
      if (this.maskValue != "") {
        console.log("1111");
        this.disable001 = false;
      } else {
        console.log("222");
        this.disable001 = true;
      }
    }
  },
  components: {
    Header,
    Cell,
    XInput,
    XButton,
    Radio,
    Checker,
    CheckerItem
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px 0;
  box-sizing: border-box;
}
.tab-card {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.04);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
}
.tab-card .inner {
  padding: 15px;
}
.card-header {
  font-size: 20px;
  margin-bottom: 15px;
  line-height: 1.2;
}
.tab-card /deep/ .weui-cell {
  padding: 15px;
}
.tab-card /deep/ .weui-cells_radio {
  margin-top: -10px;
}
.tab-card /deep/ .weui-cells_radio .weui-cell {
  padding: 15px 0;
}
.tab-card /deep/ .weui-cells_radio .weui-cell:before {
  left: 0;
}

/* button */
.end-button {
  padding: 0 15px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
}
.end-button .weui-btn,
.end-button .weui-btn:active {
  border: 0;
  width: 100%;
  background-color: #3976ff;
  color: #ffffff;
}
.end-button .weui-btn_disabled {
  opacity: 0.5;
}
.tab-card /deep/ .weui-icon-checked {
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 20px;
  border: 1px solid #999999;
}
.tab-card /deep/ .weui-cells_radio .weui-check:checked + .weui-icon-checked {
  background-color: #3976ff;
  border: 1px solid #3976ff;
}
.tab-card
  /deep/
  .weui-cells_radio
  .weui-check:checked
  + .weui-icon-checked:before {
  color: #ffffff;
  font-size: 14px;
}
.rec-item {
  width: 33.33%;
  padding: 4px 8px;
  box-sizing: border-box;
  float: left;
}
.vux-checker-box {
  overflow: hidden;
  margin-left: -8px;
  margin-right: -8px;
}
.rec-item span {
  display: block;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #9ebcff;
  line-height: 50px;
  text-align: center;
}
.rec-item-selected span {
  background: #3976ff;
  color: #fff;
}
.vux-tap-active:active {
  background-color: transparent;
}
</style>
