<!--
头部组件
接收三个参数：showBackOptions,showRightOptions,titleContent
showBackOptions（布尔类型）：是否显示左侧返回操作
showRightOptions（布尔类型）：是否显示右侧更多操作
titleContent（string）：标题内容
 -->
<template>
  <div>
    <x-header :left-options="{showBack: false}" style="width: 100%;position: absolute;left: 0;top: 0;z-index: 100;background:none!important;">
      <template slot='left'>
        <div class="back-icon" @click="back()"></div>
      </template>
      <template slot='right'>
        <div class="home-icon" @click="home()"></div>
      </template>
    </x-header>
    <!-- <Popup :showRescue="showRescueP"></Popup> -->
  </div>
</template>

<script>
import { XHeader, TransferDom, Actionsheet } from "vux";
//import Popup from "@/components/common/PupupRescue";
//import { vueCordovaFunction } from "@/assets/js/vuecordova";
export default  {
  props: ["titleContent", "showLeftBack", "showRightMore"],
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    //Popup,
  },
  data() {
    return {
      showRescueP: false,
      showShare: false,
      menus1: {
        menu1: "发送给朋友",
        menu2: "分享到朋友圈"
      }
    };
  },
  mounted() {
  },
  methods: {
    back() {
      this.$router.goBack();
    },
    home() {
      this.$router.push({path:'/'});
    },
  }
};
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
.vuex-header-wrap {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  font-size: 16px;
}
.back-icon{
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0,0,0,.5);
  background-image: url(../../assets/images/back.png);
  background-size: 15px 15px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
.home-icon{
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0,0,0,.5);
  background-image: url(../../assets/images/fangzier.png);
  background-size: 15px 15px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
</style>
