<template>
<div class="wrap">
    <x-header
      :left-options="{showBack: showLeftBack,preventGoBack:true}"
      slot="header"
      style="width: 100%;position: absolute;left: 0;top: 0;z-index: 100;font-size: 20px;"
      @on-click-back="goBack"
    >{{titleContent}}
    <div slot="right"><div class="x-txt" @click="setNickNameFn">{{rText}}</div></div>
    </x-header>
    <div class="normal-content" :style="conHei">
      <div class="mod-cell">
        <x-input v-model="userInfo.nickname"></x-input>
      </div>
      <div class="mod-text">2-20个字符，可由中英文、数字、“_”组成</div>
    </div>
  </div>
</template>

<script>
import { XInput,XHeader  } from 'vux'
import { setNickName } from "@/servers/api";
export default {
  name: "",

  data() {
    return {
      titleContent: "修改昵称",
      showLeftBack: true,
      rText: "确定",
    };
  },
  components: {
    XHeader,
    XInput
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    },
    userInfo() {
      return this.$store.state.userLoginInfo
    },
  },
  methods:{
    goBack(){
      this.$router.goBack();
    },
    setNickNameFn() {
      setNickName({
        nickname: this.userInfo.nickname
      })
        .then(res => {
          if (res.result === 1) {
            this.$vux.toast.show({
              type: "success",
              text: "设置成功",
              time: 1000,
              onHide: () => {
                this.updateNickName()
              }
            });
          } else {
            this.$vux.toast.show({
              type: "warn",
              text: "失败请重试",
              time: 1000
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateNickName() {
      let userinfo = JSON.parse(sessionStorage.getItem("userLoginInfo"));
      userinfo.nickname = this.userInfo.nickname;
      this.$store.commit("updateUserNickName", userinfo.nickname);
      sessionStorage.removeItem("userLoginInfo");
      sessionStorage.setItem("userLoginInfo", JSON.stringify(userinfo));
      this.$router.goBack();
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #F5F5F5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px 0;
  box-sizing: border-box;
}
.mod-cell{
  background-color: #FFFFFF;
  overflow: hidden;
  border-radius:8px;
}
.mod-cell .weui-cell{
  padding: 15px;
}
.mod-text{
  font-size: 12px;
  color: #999999;
  padding: 10px 15px;
}
.x-txt{
  color: #222;
  font-size: 16px;
}
</style>
