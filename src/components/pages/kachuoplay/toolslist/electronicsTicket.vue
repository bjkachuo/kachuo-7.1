<template>
  <div class="electronicsTicket-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" style="top:-43px"></Header>

    <div class="tab-content">
      <b>
        <div class="explain-wrap">
          <div class="explain-one">
            <img src="./yanpiao.png" alt />
          </div>
          <div class="text-wrap">
            <div>
              <p>1.通过APP扫描人脸数据和门票识别码(二维码等)</p>
            </div>
            <div>
              <p>&nbsp;&nbsp;2.门票和人脸信息绑定，可通过景区闸机快速入园</p>
            </div>
          </div>
        </div>
        <div class="face-wrap">
          <div class="f-left">
            <img src="./renlian.png" alt />
          </div>
        </div>
        <div class="binding-wrap">
          <div class="explain-one">
            <img src="./bangding.png" alt />
          </div>
          <div class="text-bind">
            <p>扫描或输入其它平台购买的景区门票二维码、条形码或数字串码信息进行门票信息绑定</p>
          </div>
          <div v-if="!flag">
            <div class="scann" @click="scanning">
              <p>扫码识别</p>
            </div>
            <div class="num" @click="write">
              <p>门票编号</p>
            </div>
          </div>
          <div v-if="flag">
            <div class="numTwo">
              <p>已绑定</p>
            </div>
          </div>
        </div>
      </b>
    </div>
    <div class="CheckTickets" v-if="this.text == ''">
      <p>立即验票</p>
    </div>
    <div class="CheckTicketsTwo" v-if="this.text !=''" @click="tip">
      <p>立即验票</p>
    </div>
    <confirm
      v-model="show5"
      show-input
      ref="confirm5"
      title="请输入门票编号"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      :input-attrs="{type: 'text'}"
    ></confirm>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tab, TabItem, Flexbox, FlexboxItem, Confirm } from "vux";
import axios from "axios";
const FACEUPLOADCONFIG = {
  timeout: 10000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: localStorage.getItem("token")
  }
};

import { getUserInfo,verification } from "@/servers/api";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "电子票",
        showLeftBack: true,
        showRightMore: false
      },
      show5: false,
      //输入的信息状态
      text: "",
      flag :false,
      videoUploadUrl:
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=member.realname.ticket_qrcode"
    };
  },

  mounted() {
    //获取全局用户信息
    // getUserInfo({}).then(res => {
    //   this.$store.commit("setUserLoginInfo", res.data);
    //   this.GLOBAL.setSession("userLoginInfo", res.data);
    //   console.log(res);
    // });

    // if (JSON.parse(sessionStorage.getItem("userLoginInfo")).is_face == 0) {
    //   this.$router.push("/facecheck");
    // } else {
    // }
  },

  methods: {
    write() {
      this.show5 = !this.show5;
      console.log("11111");
    },
    onCancel() {
      console.log("on cancel");
    },
    onShow5() {
      this.$refs.confirm5.setInputValue("");
    },
    onConfirm5() {
     this.text = this.$refs.confirm5.msg
    },
    scanning() {
      dsBridge.call("scanning", "web");
      bridge.register("scanning", r => {
        alert(r)
      });
    },
    tip() {
      this.$vux.toast.show({
        type: "success",
        text: "验票成功",
        time: 1000
      });
      setTimeout(() => {
        this.$router.push("/indextab");
      }, 2000);

    }
  },
  components: {Header, Tab, TabItem, Flexbox, FlexboxItem, Confirm}
}
</script>
<style scoped lang="css">
.electronicsTicket-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  /* position: relative; */
}
.tab-content {
  width: 100%;
  height: 85%;
  overflow: hidden scroll;
  background: #f5f5f5;
}
.tab-content b {
  font-weight: normal;
  display: block;
  width: 100%;
  margin-top: 56px;
}

.img-wrap img {
  width: 100%;
}

.explain-wrap {
  width: 92%;
  height: 110px;
  margin: 0 auto 10px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
.face-wrap {
  width: 92%;
  height: 56px;
  margin: 0 auto 10px;
  background: #ffffff;
  border-radius: 8px;
}
.binding-wrap {
  width: 92%;
  height: 225px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
.explain-one {
  width: 81px;
  height: 14px;
  margin: 15px auto;
}
.explain-one img {
  width: 100%;
  background: none;
}
.text-wrap {
  width: 92%;
  height: auto;
  margin: 0 auto 10px;
}
.text-wrap p {
  font-size: 3.6vw;
  color: #999faa;
  text-align: center;
}
.f-left {
  width: 81px;
  height: 14px;
  float: left;
  margin: 20px 0 0 4%;
}
.f-left img {
  background: none;
  width: 100%;
}
.f-right {
  height: 15px;
  float: right;
  margin: 20px 4% 0 0;
}
.f-right span {
  color: #999faa;
  font-size: 14px;
  float: right;
}
.i-warp {
  float: left;
  margin-top: 2px;
}
.text-bind {
  width: 92%;
  height: auto;
  margin: 0 auto 10px;
}
.text-bind p {
  font-size: 3.6vw;
  color: #999faa;
}
.scann {
  width: 85%;
  height: 44px;
  background: #3976ff;
  box-shadow: 0px 10px 20px 0px rgba(57, 118, 255, 0.5);
  border-radius: 8px;
  margin: 0 auto 15px;
}
.scann p {
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  font-size: 16px;
}
.num {
  width: 85%;
  height: 44px;
  background: #ffffff;
  border: 1px solid rgba(57, 118, 255, 1);
  border-radius: 8px;
  margin: 0 auto;
}
.num p {
  text-align: center;
  line-height: 44px;
  color: #3976ff;
  font-size: 16px;
}
.numTwo {
  width: 85%;
  height: 44px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 8px;
  margin: 0 auto;
}
.numTwo p {
  text-align: center;
  line-height: 44px;
  color: #999999;
  font-size: 16px;
}

.CheckTickets {
  height: 60px;
  width: 100%;
  position: absolute;
  background: #cccccc;
  bottom: 0px;
}
.CheckTickets p {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}
.CheckTicketsTwo {
  height: 60px;
  width: 100%;
  position: absolute;
  background: rgba(57, 118, 255, 1);
  bottom: 0px;
}
.CheckTicketsTwo p {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}
</style>
<style scoped lang="less">
/deep/ .vux-tab-wrap {
  margin-top: 46px;
  margin-bottom: 10px;
}
/deep/ .vux-tab .vux-tab-item {
  font-size: 16px;
  font-weight: bold;
}
/deep/ .scrollable .vux-tab-item {
  flex: 0 0 20%;
}
.flex-demo {
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
  width: 60px;
  height: 68px;
}
.flex-demo p {
  font-size: 14px;
  color: #999faa;
}
/deep/ .yes {
  fill: #2ecc33;
}
/deep/ .no {
  fill: #ccc;
}
</style>
