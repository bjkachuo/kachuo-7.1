<template>
<div class="wrap">
<Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="set-cells">
        <cell title="关于我们" is-link link="/aboutus"></cell>
        <cell title="意见反馈" is-link link="/opinion"></cell>
      </div>
      <div class="set-cells">
        <cell title="分享APP二维码" is-link></cell>
      </div>
      <div class="set-cells">
        <div class="login-out" @click="loginOut">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell,XInput } from 'vux'
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "设置",
        showLeftBack: true,
        showRightMore: false
      },
    };
  },
  components: {
    Header,
    Cell,
    XInput
  },

  methods:{
    loginOut(){
      localStorage.removeItem("token");
      this.$store.commit("changeTabIndex", 0);
      this.$router.push("/");
    }
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },
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
.set-cells{
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: #FFFFFF;
}
.set-cells .weui-cell{
  padding: 15px;
  font-size: 16px;
}
.login-out{
  text-align: center;
  padding: 15px;
  font-size: 16px;
  text-align: center;
}
</style>
