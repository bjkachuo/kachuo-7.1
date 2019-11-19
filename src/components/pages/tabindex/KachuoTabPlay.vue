<template>
  <div>
    <FaceToast></FaceToast>
    <div class="tab-item-paly-wrap">
      <TabItemPlayHeader v-if="!$store.state.isApp"></TabItemPlayHeader>
      <TabItemPlayContent></TabItemPlayContent>
    </div>
  </div>
</template>

<script>
    import TabItemPlayHeader from "@/components/layout/TabItemPlayHeader";
    import TabItemPlayContent from "@/components/layout/TabItemPlayContent/TabItemPlayContent";
    import FaceToast from "@/components/layout/FaceToast";
    import {location} from "@/servers/LocationUtil";
    import {isNull} from "util";

    export default {
        name: "",
        props: [""],
        data() {
            return {};
        },
        components: {
            TabItemPlayHeader,
            TabItemPlayContent,
            FaceToast
        },
        computed: {},
        beforeMount() {
        },
        created() {
        },
        mounted() {
            //安卓 ios登录储存token
            dsBridge.call("getUserInfo", "web");
            dsBridge.registerAsyn("loginInfo", function (arg1, responseCallback) {
                localStorage.setItem("token", JSON.parse(arg1).accessToken);
                alert(localStorage.getItem("token"))
                responseCallback("登录信息成功");
            });
            //安卓ios跳转选择景区
            dsBridge.register("userlocation", r => {
                this.$router.push("/userlocation");
                alert("xuanze");
            });

            //安卓访问时不显示头部
            bridge.register("yyTab", r => {
                this.$store.state.isApp = true;
            });
        },
        methods: {},
        watch: {}
    };</script>
<style lang='css' scoped>
  .tab-item-paly-wrap {
    background: #f5f5f5;
  }
</style>
