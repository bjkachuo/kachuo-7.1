<template>
  <div class="login-wrap" :style="backSty">
    <p class="login-wrap-title-one">Hi！</p>
    <p class="login-wrap-title">卡戳有你 游园伴侣</p>

    <div @click="handleWechat" class="wx-login"></div>
  <!-- <p class="visitor-login" @click="visitorLogin">游客登录</p> -->
  </div>
</template>

<script>

import { getVeriCode, login, getUserInfo } from "@/servers/api";
import { CheckByLocation } from "@/servers/api";
import { vueCordovaFunction } from "@/assets/js/vuecordova";
export default {
  name: "",
  props: [""],
  data() {
    return {
      timer: null,
      phoneValue: "",
      veriValue: "",
      backSty: {
        backgroundImage: "url(" + require("@/assets/images/indexImg.jpeg") + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // minHeight:"100%"
      }
    };
  },

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
      let dataObj = sessionStorage.getItem("positionInfo") ? sessionStorage.getItem("positionInfo") : "";
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

    handleWechat(){

      Wechat.isInstalled(installed=> {

        let scope = "snsapi_userinfo",
          state = "_" + (+new Date());
          Wechat.auth(scope, state, response=> {
          // you may use response.code to get the access token.

          login({
            code: response.code,
            type: 2
          }).then(res => {

            localStorage.setItem("token", res.data.accessToken);
            if(res.data.mobile){
              this.$vux.toast.show({
                type: "success",
                text: "登录成功",
                time: 1000,
                onHide: () => {
                  this.getUserLoginInfo()
                  this.getLocationData()
                }
              });
              this.$router.push("/indextab")
            }else{
              this.$router.push("/Login2?id="+ res.data.id)
            }
          })
        }, function (reason) {

        });
      }, function (reason) {

      });
    }
  },

  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang='css' scoped>
  .wx-login{
    width: 84%;
    position: fixed;
    bottom: 12.345%;
    left: 8%;
    background-size: 100% 100%;
    height: 50px;
    background-image: url("./wxlogin.png");
  }
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


.wrap-two img {
  /* width: 100%; */
  height: 100%;
  display: block;
  object-fit: cover;
}

</style>
<style lang="less" scoped>
/deep/ .weui-input{
  color: rgba(57,118,255,1);
}
.weui-btn_disabled.weui-btn_primary {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>

