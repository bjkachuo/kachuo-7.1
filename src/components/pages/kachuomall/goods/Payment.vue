<template>
  <div class="scence-gifts-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-gifts-content" :style="scenceGiftsContent">
      <x-button type="default" @click.native="aliPay" class="ali">支付宝支付</x-button>
      <x-button type="default" @click.native="weixinPay" class="wechat">微信支付</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XButton } from "vux";
import { Pay } from "@/servers/api";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "支付",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    XButton
  },

  computed: {
    scenceGiftsContent() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    // 下单
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
    aliPay() {
      this.payRequest("22");
    },
    weixinPay() {
      this.payRequest("21");
    },
    // 支付失败回调
    errorToast(res) {
      this.$vux.toast.show({
        text: res,
        type: "text",
        width: "15em",
        position: "middle",
        time: 3000
      });
    },
    // 支付成功回调
    successToast() {
      this.$vux.toast.show({
        text: "支付成功",
        type: "success",
        width: "15em",
        position: "middle",
        time: 3000,
        onHide: () => {
          this.$router.push("/orderlist");
        }
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
          function() {
            that.successToast();
          },
          function(reason) {
            that.errorToast(reason);
          }
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
          function() {
            that.successToast();
          },
          function(reason) {
            if (reason.resultStatus == "6001") {
              that.errorToast("您点击取消并返回");
            } else {
              that.errorToast(reason.memo);
            }
          }
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
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-gifts-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scence-gifts-content {
  width: 100%;
  margin-top: 50px;
  background: #F5F5F5;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 50px 15px 0;
}
</style>
<style lang="less" scoped>
/deep/ .weui-btn_primary {
  background-color: #3976ff;
}
/deep/ .ali {
  background: url(./ali.png) no-repeat;
  background-color: #fff;
  background-position: 20% 6px;
  background-size: 30px 30px;
  color: #000;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
}
/deep/ .wechat {
  background: url(./wechat.png) no-repeat;
  background-color: #fff;
  background-position: 20% 6px;
  background-size: 30px 30px;
  color: #000;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
}

</style>