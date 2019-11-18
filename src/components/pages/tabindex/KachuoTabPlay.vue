<template>
  <div>
    <FaceToast></FaceToast>
    <div class="tab-item-paly-wrap">
      <TabItemPlayHeader v-if="!isApp"></TabItemPlayHeader>
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
            return {
                //安卓判断是否显示头部
                isApp: false
            };
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
            //呼叫安卓需要用户信息
            dsBridge.call("getUserInfo", "web");
            //获取用户信息
            dsBridge.registerAsyn("loginInfo", function (arg1, responseCallback) {
                localStorage.setItem("token", JSON.parse(arg1).accessToken);
                //     this.$store.commit("setUserLoginInfo", JSON.parse(arg1));
                //    this.GLOBAL.setSession("userLoginInfo", JSON.parse(arg1));

                //   alert();
                //   alert(JSON.stringify(JSON.parse(arg1)));
                //   //   alert(String.parseJSON(arg1));
                //   alert(JSON.parse(arg1).accessToken);
                //
                //   alert("登录信息成功");
                responseCallback("登录信息成功");
            });
            //跳转选择景区
            dsBridge.register("userlocation", r=> {
                this.$router.push("/userlocation");
                alert("xuanze");

    // dsBridge.register("addValue", function(r) {
    //   console.log("安卓传来的r", r);
    // });
    dsBridge.registerAsyn("loginInfo", function(arg1, responseCallback) {
      localStorage.setItem("token", JSON.parse(arg1).accessToken);
      responseCallback("登录信息成功");
    });
            });


            //安卓访问时不显示头部
            bridge.register("yyTab", r => {
                this.isApp = true;
            });

            bridge.register("getUserInfo", r => {
                alert(r);
                localStorage.setItem("token", r);
            });

            // this.getBannerImgFn("2");
            // this.getLocation(); // 调用获取地理位置
        },

        methods: {
        },

        watch: {}
    };
</script>
<style lang='css' scoped>
  .tab-item-paly-wrap {
    background: #f5f5f5;
  }
</style>
