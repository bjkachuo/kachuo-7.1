<template>
    <div class="box">
      <div class="header">绑定手机号</div>
      <div class="content">
              <x-input title="手机号" placeholder="请输入手机号" class="weui-vcode" v-model="phoneValue" :max="13" is-type="china-mobile" :show-clear="false" novalidate></x-input>
              <div class="wrap-two">
                <x-input title="验证码" placeholder="请输入验证码" class="input-qr-code" novalidate v-model="veriValue" :show-clear="false" :max="6"></x-input>
                <x-button :plain="false" slot="right" type="primary" mini :disabled="veritfyCode" @click.native="sendVeriCode" class="veri-btn">{{veritfyCodeTxt}}</x-button>
              </div>
      </div>
      <x-button type="primary" class="btnn" @click.native="requestLogin" :disabled="!veriValue">完成</x-button>
    </div>
</template>

<script>
    import { XInput, Group, XButton, Cell } from "vux";
    import { getVeriCode, login, getUserInfo } from "@/servers/api";
    export default {
        name: "Login2",

        components: {XInput, XButton, Group, Cell},

        data(){
          return{
            veritfyCodeTxt: "发送验证码",
            veritfyCode: false,
            phoneValue:'',
            veriValue:''
          }
        },

        methods:{
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
          // 显示提示信息
          showToastInfo(conttentTip, callback) {
            this.$vux.toast.text(conttentTip, "middle");
            setTimeout(() => {
              this.$vux.toast.hide();
              callback ? callback() : "";
            }, 1000);
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
          // 请求登录
          requestLogin() {
            if (this.phoneValue && this.veriValue) {
              // 请求登录
              login({
                tel: this.phoneValue.replace(/\s*/g, ""),
                code: this.veriValue,
                type: 1,
                ins_id:this.$route.query.id
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
        }
    }
</script>

<style scoped lang="less">
  .box{
    background-color: #F5F5F5;
    .header{
      line-height: 44px;
      background-color: #fff;
      text-align: center;
      font-size: 18px;
      color: #333;
      text-align: center;
    }
    .content{
      background-color: #fff;
      margin-top: 10px;
      border-radius: 8px;
      position: relative;
      /deep/.weui-cell{
        padding:16.5px 15px;
        font-size: 16px;
      }
      .veri-btn {
        position: absolute;
        right: 0;
        bottom: 0;
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
      }
      .weui-btn::after{
        border: none;
      }
    }
  }
  .btnn{
    width: 92%;
    margin: 25px auto 0;
    background-color: #3976FF;
    color: #fff;
  }
  .weui-btn_disabled.weui-btn_primary{
    background-color: #9EBBFF;
  }

</style>
