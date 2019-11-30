<template>
  <div class="tab-personal-center-wrap" :style="heightSty">
    <TabPersonCenterHeader ref="header"></TabPersonCenterHeader>
    <!-- <AppUserInfo></AppUserInfo> -->
    <div class="content-card">
      <div class="content-card-top">
        <div class="content-card-top-left">
          <p>
            <img class="content-card-top-left-img" :src="userInfo.avatar" @click="goCenter"/>
          </p>
          <div class="content-card-top-left-txt">
            <p class="p-one">{{userInfo.nickname}}</p>
            <p class="p-two">{{userInfo.levelname}}</p>
          </div>
        </div>
        <!-- <div class="content-card-top-right">
          <span
            class="iconfont iconerweima"
            @click="getQRcode"
            style="font-size:45px;margin-left:10px;color:#80BFFF"
          ></span>
        </div>-->
      </div>
      <div class="content-card-mid">
        <span class="token-num">ID:{{userInfo.usercode.slice(0,19)}}...</span>
        <span
          class="iconfont iconliulan"
          @click="watchAllCode"
          style="font-size:12px;margin-left:10px"
        ></span>
      </div>
      <div class="content-card-bot">
        <span>积分：{{userInfo.credit1}}</span>
        <i @click="showjifen"></i>
      </div>
      <XDialog style="display:none" :showDialog="showDialogFlag" ref="dialogCon"></XDialog>
    </div>
    <div class="line-one">
      <flexbox>
        <flexbox-item v-for="(item,index) in dataListOne" :key="index">
          <div class="flex-demo" @click="getItem(item.link)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt/>
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="line-three">
      <flexbox :gutter="0">
        <flexbox-item v-for="(item,index) in dataListThree" :key="index" :span="1/4">
          <div class="flex-demo" @click="getItem(item.link,index)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt/>
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/4" style="display:none" v-if="this.tourState == 0">
          <div class="flex-demo">
            <div class="img-wrap">
              <img src="../../../../assets/images/daoyouht.png" alt/>
            </div>
            <p>导游后台</p>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/4" v-if="this.tourState != 0">
          <div class="flex-demo" @click="getItem('/TourBsIndex')">
            <div class="img-wrap">
              <img src="../../../../assets/images/daoyouht.png" alt/>
            </div>
            <p>导游后台</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="line-two">
      <flexbox>
        <flexbox-item v-for="(item,index) in dataListTwo" :key="index">
          <div class="flex-demo" @click="getItem(item.link)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt/>
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="line-two">
      <flexbox>
        <flexbox-item v-for="(item,index) in dataListFour" :key="index">
          <div class="flex-demo" @click="getItem(item.link)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt/>
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>

    <IntegralDesc ref="alert"></IntegralDesc>
  </div>
</template>

<script>
    import TabPersonCenterHeader from "@/components/layout/TabItemPersonHeader.vue";
    import AppUserInfo from "@/components/layout/AppUserInfo.vue";
    import IntegralDesc from "./IntegralDesc";
    import DividedArea from "@/components/common/DividedArea.vue";
    import Cell from "@/components/common/Cell.vue";
    import XDialog from "@/components/common/XDialog";
    import {Flexbox, FlexboxItem} from "vux";
    import {getUserInfo} from "@/servers/api";

    export default {
        name: "",
        data() {
            return {
                showDialogFlag: false,

                showJiFfen: false,

                dataListOne: [
                    {
                        name: "游园日记",
                        link: "/GardenJournal",
                        imgSrc: require("@/assets/images/订单1@2x.png")
                    },
                    {
                        name: "我的资产",
                        link: "/userintegral",
                        imgSrc: require("@/assets/images/赠送@2x.png")
                    },
                    {
                        name: "我的评论",
                        link: "/MyMessage",
                        imgSrc: require("@/assets/images/留言@2x.png")
                    },
                    {
                        name: "商品收藏",
                        link: "/collection",
                        imgSrc: require("@/assets/images/标星@2x.png")
                    },
                    {
                      name: "我的门票",
                      link: "/myAdmissionTicket",
                      imgSrc: require("@/assets/images/标星@2x.png")
                    }
                ],
                dataListTwo: [
                    {
                        name: "购物车",
                        link: "/Cartment",
                        imgSrc: require("@/assets/images/购物袋@2x.png")
                    },
                    {
                      name: "商品订单",
                      link: "/orderlist",
                      imgSrc: require("@/assets/images/购物袋@2x.png")
                    },
                    {
                        name: "变现管理",
                        link: "/Liquidation",
                        imgSrc: require("@/assets/images/变现管理@2x.png")
                    },
                    {
                        name: "创收管理",
                        link: "/CreateIncome",
                        imgSrc: require("@/assets/images/创收管理@2x.png")
                    },
                    {
                        name: "地址管理",
                        link: "/address",
                        imgSrc: require("@/assets/images/地址管理@2x.png")
                    }
                ],
                dataListThree: [
                    {
                        name: "我的客服",
                        link: "kefu",
                        imgSrc: require("@/assets/images/客服@2x.png")
                    },
                    {
                        name: "云相册",
                        link: "/photoalbum",
                        imgSrc: require("@/assets/images/图片@2x.png")
                    },
                    {
                        name: "游园订单",
                        link: "/GardenOrder",
                        imgSrc: require("@/assets/images/daoyouht.png")
                    }
                ],
                dataListFour: [
                    {
                        name: "景区后台",
                        link: "/jingquBsIndex",
                        imgSrc: require("@/assets/images/图片@2x.png")
                    },
                    // {
                    //     name: "商家后台",
                    //     // link: "/businessBsIndex",
                    //     link: "/SjLinShiNavigation",
                    //     imgSrc: require("@/assets/images/daoyouht.png")
                    // },
                    {
                        name: "名家后台",
                        link: "/famousPersonBsIndex",
                        imgSrc: require("@/assets/images/daoyouht.png")
                    },
                    {
                        name: "商家后台(改)",
                        link: "/",
                        imgSrc: require("@/assets/images/daoyouht.png")
                    }
                ],
                tourState: 0
            };
        },
        mounted() {
            //安卓 ios我的页面二级页面跳转

            // bridge.register("myMethod", function (r){
            //     if(r != ""){
            //         var str = JSON.stringify(r);
            //         // if (str instanceof String){
            //         //     alert(typeof str)
            //         this.$router.push('/GardenJournal')
            //         // }
            //     }
            //
            // });

            getUserInfo({}).then(res => {
                this.$store.commit("setUserLoginInfo", res.data);
                this.GLOBAL.setSession("userLoginInfo", res.data);
                console.log(res.data);
                this.tourState = res.data.tourguide_id;
                console.log(this.tourState);
            });

        },
        components: {
            TabPersonCenterHeader,
            AppUserInfo,
            DividedArea,
            IntegralDesc,
            Cell,
            XDialog,
            Flexbox,
            FlexboxItem
        },

        computed: {
            heightSty() {
                return {
                    height: document.documentElement.clientHeight - 45 + "px"
                };
            },
            userInfo() {
                return this.$store.state.userLoginInfo;
            }
        },

        methods: {
            showjifen() {
                this.$refs.alert.show = true;
            },

            goCenter() {
                this.$router.push("/Ucenter");
            },

            watchAllCode() {
                this.$refs.dialogCon.showToastFn(this.userInfo.usercode);
            },
            getQRcode() {
                this.$router.push("/tokenqrcode");
            },
            getItem(link, index) {
                if (link == "kefu") {
                    this.$refs.header.$refs.service.iframeShow = true;
                } else {
                    this.$router.push(link);
                }
            }
        }
    };
</script>
<style lang='less' scoped>
  .tab-personal-center-wrap {
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    background: #f5f5f5;
    padding-bottom: 10px;
    box-sizing: border-box;
  }

  .margin-top-10px {
    margin-top: 10px;
  }

  .vux-label {
    font-weight: 300;
  }

  .content-card {
    width: 92%;
    height: 180px;
    background: linear-gradient(90deg,
    rgba(31, 100, 255, 1),
    rgba(39, 141, 255, 1));
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin: 28px auto 20px;
    box-shadow: 0px 10px 25px 0px rgba(57, 118, 255, 0.5);
  }

  .content-card {
    display: flex;
    flex-direction: column;
  }

  .content-card-top {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .content-card-mid {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #80bfff;
    overflow: hidden;
    font-size: 14px;
  }

  .content-card-bot {
    flex: 1;
    position: relative;

    i {
      position: absolute;
      bottom: 0;
      width: 28px;
      height: 28px;
      background-image: url("./icon.png");
      background-size: 100% 100%;
      right: 0;
    }

    span {
      position: absolute;
      bottom: 0;
      height: 25px;
      border-radius: 13px;
      opacity: 0.7;
      background: rgba(25, 94, 242, 1);
      color: #80bfff;
      padding: 0 16px;
      line-height: 25px;
      font-size: 14px;
    }
  }

  .content-card-top-left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .content-card-top-left-img {
    width: 50px;
    height: 50px;
    display: inline-block;
    border-radius: 50%;
  }

  .content-card-top-left-txt {
    color: #ffebb5;
    font-size: 12px;
    margin-left: 8px;
  }

  .content-card-top-left-txt .p-one {
    font-size: 18px;
    color: #ffffff;
    font-family: PingFangSC-Heavy;
  }

  .content-card-top-left-txt .p-two {
    font-size: 12px;
    color: #80bfff;
    font-family: PingFangSC-Regular;
  }

  .line-one {
    width: 92%;
    height: 90px;
    border-radius: 8px;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
  }

  .line-two {
    width: 92%;
    height: 90px;
    border-radius: 8px;
    background: #ffffff;
    margin: 0 auto 10px;
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
  }

  .line-three {
    width: 92%;
    height: 90px;
    border-radius: 8px;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
  }
</style>
<style lang="less" scoped>
  .flex-demo {
    text-align: center;
    color: #222222;
    // background-color: #20b907;
    background-clip: padding-box;
    width: 55px;
    height: 50px;
    margin: 0 auto;
    margin-top: 23%;
  }

  .flex-demo .img-wrap {
    width: 30px;
    height: 30px;
    margin-bottom: 9px;
    margin: 0 auto 9px;
  }

  .flex-demo .img-wrap img {
    background: none;
    width: 100%;
  }

  .flex-demo p {
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #222222;
  }
</style>
