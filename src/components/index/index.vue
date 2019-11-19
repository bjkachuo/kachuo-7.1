<template>
  <div class="view-box-wrap">
    <TabContent></TabContent>
    <Kachuo-Bottom-Tab v-if="!$store.state.isApp"></Kachuo-Bottom-Tab>
  </div>
</template>

<script>
    import {XHeader, TransferDom} from "vux";
    import TabContent from "@/components/layout/TabContent";
    import Header from "@/components/common/Header";
    import KachuoBottomTab from "@/components/pages/tabindex/KachuoBottomTab/KachuoBottomTab";
    import Vue from "vue";
    import {getLocation} from "@/assets/js/tools";
    import {uploadRegistrationID} from "@/servers/api";

    export default {
        directives: {
            TransferDom
        },
        name: "app",
        data() {
            return {
                title: "",
                showBackOptions: false,
                showRightOptions: false,
                cordova: Vue.cordova,
                badgeNum: 0,
                timer: '',

            };
        },
        components: {
            XHeader,
            Header,
            KachuoBottomTab,
            TabContent
        },
        methods: {
            // 判断当前路由，浏览器刷新路由不变
            changeVuexCurrentRoute() {
                this.$store.commit("changeCurrentRouteVal", this.$route.path);
            },

            //panhuisen 2019.07.17
            getRegistrationID: function () {
                console.log(window.plugins);
                document.addEventListener("deviceready", onDeviceReady, false);
                let that = this;

                function onDeviceReady() {
                    window.JPush.getRegistrationID(
                        function (registrationID) {
                            try {
                                console.log("JPushPlugin:registrationID is " + registrationID);
                                if (registrationID.length == 0) {
                                    that.timer = setTimeout(that.getRegistrationID, 2000);
                                }
                                uploadRegistrationID({
                                    reg_id: registrationID
                                })
                                    .then(res => {
                                        console.log(res);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                            } catch (exception) {
                                console.log(exception);
                            }
                        }
                    );
                }
            },
            getAPNSBadge: function () {
                console.log(window.plugins);
                document.addEventListener("deviceready", onDeviceReady, false);
                let that = this;

                function onDeviceReady() {
                    window.JPush.getApplicationIconBadgeNumber(
                        function (badgeNum) {
                            try {
                                console.log("JPushPlugin:IconBadgeNumber is " + badgeNum);
                                that.badgeNum = badgeNum;
                                that.setAPNSBadge();
                            } catch (exception) {
                                console.log(exception);
                            }
                        }
                    );
                }
            },
            setAPNSBadge: function () {
                console.log(window.plugins);
                let that = this;
                document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {
                    if (that.badgeNum > 0) {
                        that.badgeNum = that.badgeNum - 1;
                        window.JPush.setApplicationIconBadgeNumber(that.badgeNum);
                    }
                }
            }
            //end
        },
        created() {
        },
        mounted() {

            //安卓判断是否显示底部
            bridge.register("youyuan", r => {
                this.$store.state.isApp = true
            });


            this.changeVuexCurrentRoute();

            this.getRegistrationID();
            this.getAPNSBadge();
        },
        /*this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=member.realname.get_reg_id")
        .then(({data})=>{
          // console.log(data);
        });
        },*/
        beforeDestroy() {
            clearTimeout(this.timer);
        },
        computed: {
            showCurrentTitle() {
                return this.$store.state.titleObj;
            }
        },
        watch: {}
    };
</script>

<style lang="less">
  .view-box-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
