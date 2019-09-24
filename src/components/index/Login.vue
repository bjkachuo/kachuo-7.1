<template>
  <div class="login-wrap" :style="backSty">
    <p class="login-wrap-title-one">Hi！</p>
    <p class="login-wrap-title">卡戳有你 游园伴侣</p>
    <div style="width:100%;background:none;margin-left:10%;position:relative">
      <x-input title="验证码" style="display:none"></x-input>
      <x-input
        placeholder="请输入手机号"
        class="weui-vcode"
        v-model="phoneValue"
        :max="13"
        is-type="china-mobile"
        :show-clear="false"
        novalidate
      >
        <img
          slot="label"
          style="padding-right:5px;display:block;background:none;margin-left:10px;height:100%; width:60%;"  
          src="../../assets/images/indexZH.png"
          width="38"
          height="38"
        />
      </x-input>
      <div class="wrap-two">
        <x-input
          placeholder="请输入验证码"
          class="input-qr-code"
          novalidate
          v-model="veriValue"
          :show-clear="false"
        >
          <img
            slot="label"
            style="padding-right:6px;display:block;background:none;margin-left:11px;height:100%;width:60%;"
            src="../../assets/images/indexMM.png"
            width="38"
            height="38"
          />
        </x-input>
        <x-button
          :plain="false"
          slot="right"
          type="primary"
          mini
          :disabled="veritfyCode"
          @click.native="sendVeriCode"
          class="veri-btn"
        >{{veritfyCodeTxt}}</x-button>
      </div>
      <!-- <span class="One"></span>
      <span class="Two"></span>-->
    </div>
    <x-button type="primary" class="sub-btn-wrap" @click.native="requestLogin">登录</x-button>

    <div @click="handleWechat">微信登录</div>
  <!-- <p class="visitor-login" @click="visitorLogin">游客登录</p> -->
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from "vux";
import { getVeriCode, login, getUserInfo } from "@/servers/api";
import { CheckByLocation } from "@/servers/api";
import { vueCordovaFunction } from "@/assets/js/vuecordova";
export default {
  name: "",
  props: [""],
  data() {
    return {
      timer: null,
      veritfyCodeTxt: "发送验证码",
      veritfyCode: false,
      phoneValue: "",
      veriValue: "",
      backSty: {
        backgroundImage:
          "url(" + require("@/assets/images/indexImg.jpeg") + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // minHeight:"100%"
      }
    };
  },

  components: {
    XInput,
    XButton,
    Group,
    Cell
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.checkTokenLogin();
    // this.visitorLogin();
  },

  methods: {
    // 游客登录
    // visitorLogin() {
    //   this.$router.push("/indextab");
    //   // this.$router.push({path:'/indextab'})
    // },
    // token存在，直接登录
    checkTokenLogin() {
      let token = localStorage.getItem("token");
      if (token) {
        this.getUserLoginInfo();
        this.getLocationData();
        this.$router.push("/indextab");
      }
    },
    // 获取经纬度信息
    getLocationData() {
      let dataObj = sessionStorage.getItem("positionInfo")
        ? sessionStorage.getItem("positionInfo")
        : "";
      if (dataObj === "") {
        vueCordovaFunction.getLocation();
      }
      let postDataObj = {
        latitude: dataObj ? JSON.parse(dataObj).Latitude : "",
        longitude: dataObj ? JSON.parse(dataObj).Longitude : ""
      };
      CheckByLocation(postDataObj)
        .then(res => {
          if (res.result === 1) {
            sessionStorage.setItem("currentScenic", res.data.scenic_id);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取用户信息
    getUserLoginInfo() {
      getUserInfo({})
        .then(res => {
          if (res.result === 1) {
            this.$store.commit("setUserLoginInfo", res.data);
            this.GLOBAL.setSession("userLoginInfo", res.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 请求登录
    requestLogin() {
      if (this.phoneValue && this.veriValue) {
        // 请求登录
        login({
          tel: this.phoneValue.replace(/\s*/g, ""),
          code: this.veriValue,
          type: 1
        })
          .then(res => {
            if (res.result === 1) {
              localStorage.setItem("token", res.data.accessToken);
              this.$vux.toast.show({
                type: "success",
                text: "登录成功",
                time: 1000,
                onHide: () => {
                  this.getUserLoginInfo();
                  this.getLocationData();
                }
              });
              this.$router.push("/indextab");
            } else {
              if (res.code === 90000) {
                this.showToastInfo("验证码错误或过期");
              } else if (res.code === 10005) {
                this.showToastInfo("手机号不能为空");
              } else if (res.code === "1002" || res.code === 1002) {
              } else if (res.code === 10006) {
                this.showToastInfo("手机号不一致");
              } else {
                this.$router.push("/indextab");
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        if (!this.phoneValue) {
          this.showToastInfo("手机号不能为空");
        } else {
          this.showToastInfo("验证码不能为空");
        }
      }
    },
    // 请求验证码
    requestVeriCode() {
      console.log("requestVeriCode");
      getVeriCode({
        tel: this.phoneValue.replace(/\s*/g, "")
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 发送验证码
    sendVeriCode() {
      this.verifyPhoneCode(this.phoneValue);
    },
    // 验证手机号
    verifyPhoneCode(phoneNum) {
      let regExp = /^[1][3,4,5,7,8][0-9]{9}$/;
      let phone = phoneNum.replace(/\s*/g, "");
      if (regExp.test(phone)) {
        this.showToastInfo("验证码已发送", this.emitVeritfyCode);
      } else {
        this.showToastInfo("手机号有误");
      }
    },
    // 显示提示信息
    showToastInfo(conttentTip, callback) {
      this.$vux.toast.text(conttentTip, "middle");
      setTimeout(() => {
        this.$vux.toast.hide();
        callback ? callback() : "";
      }, 1000);
    },
    // 发送验证码按钮倒计时
    emitVeritfyCode() {
      this.veritfyCode = true;
      let num = 60;
      this.veritfyCodeTxt = num + "s";
      this.requestVeriCode();
      this.timer = setInterval(() => {
        if (num > 0) {
          --num;
          this.veritfyCodeTxt = num + "s";
        } else {
          clearInterval(this.timer);
          this.veritfyCodeTxt = "重新发送";
          this.veritfyCode = false;
        }
      }, 1000);
    },

    handleWechat(){
      Wechat.isInstalled(function (installed) {
        alert("Wechat installed: " + (installed ? "Yes" : "No"));
        let scope = "snsapi_userinfo",
          state = "_" + (+new Date());
          Wechat.auth(scope, state, function (response) {
          // you may use response.code to get the access token.
          alert(JSON.stringify(response));
          login({
            code: response.code,
            type: 2
          }).then(res => {
            alert(JSON.stringify(res));
            localStorage.setItem("token", res.data.accessToken);
            this.$vux.toast.show({
              type: "success",
              text: "登录成功",
              time: 1000,
              onHide: () => {
                this.getUserLoginInfo();
                this.getLocationData();
              }
            });
            this.$router.push("/indextab");


          })
        }, function (reason) {
          alert("Failed: " + reason);
        });
      }, function (reason) {
        alert("Failed: " + reason);
      });
    }
  },

  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang='css' scoped>
body{
  min-height: 100%;
}
.login-wrap {
  width: 100%;
  /* height: 100%; */
  min-height:100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 15px;
  box-sizing: border-box;
}
.login-wrap-title-one {
  margin-top: 92px;
  margin-left: 8%;
  font-size: 60px;
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(57,118,255,1);;
  line-height: 21px;
}
.login-wrap-title {
  font-size: 30px;
  margin-left: 8%;
  margin-top: 40px;
  font-family: PingFang-SC-Heavy;
  color: rgba(57,118,255,1);
  font-weight: 800;
}
.weui-vcode,
.input-qr-code {
  /* width: 100%;
  border-bottom: 1px solid #fff; */
  margin-top: 20px;
  /* padding-left: 12%; */
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  color: rgba(57,118,255,1);
  height: 52px;
  font-size: 16px;
}
.input-qr-code {
  width: 49%;
  float: left;
}
.weui-vcode {
  margin-top: 50px;
  width: 80%;
}
.sub-btn-wrap {
  margin-top: 25px;
  margin-left: 10%;
  background: rgba(255, 255, 255, 0.5);
  color: #000;
  width: 81%;
  height: 46px;
  font-family: PingFang-SC-Medium;
  font-size: 16px;
}

.veri-btn {
  width: 30%;
  height: 52px;
  background: rgba(255, 255, 255, 0.5);
  /* opacity:0.5; */
  border-radius: 8px;
  color: rgba(57,118,255,1);
  float: left;
  margin-top: 20px;
  margin-left: 5px;
  font-size: 10px;
  border: none;
}
/* .veri-btn weui-btn_primary{
    background-color: rgba(255, 255, 255, 0.5);
} */
.wrap-two {
  /* position: relative; */
}
.visitor-login {
  width: 20%;
  height: 16px;
  font-size: 16px;
  text-align: center;
  color: rgba(57,118,255,1);
  margin-top: 30px;
  margin-left: 41%;
}
.wrap-two img {
  /* width: 100%; */
  height: 100%;
  display: block;
  object-fit: cover;
}
/* .One {
  width: 19px;
  height: 19px;
  position: absolute;
  top: 38.4%;
  left: 2.8%;
  background: url("../../assets/images/账号@2x.png") no-repeat;
  background-size: 19px 19px;
}
.Two {
  width: 16px;
  height: 20px;
  position: absolute;
  top: 79.3%;
  left: 3%;
  background: url("../../assets/images/验证码@2x.png") no-repeat;
  background-size: 16px 20px;
} */
</style>
<style lang="less" scoped>
/deep/ .weui-input{
  color: rgba(57,118,255,1);
}
.weui-btn_disabled.weui-btn_primary {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>

