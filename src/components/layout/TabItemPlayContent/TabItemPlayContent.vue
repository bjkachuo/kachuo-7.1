<template>
  <div class="tab-item-paly-content">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.css"
    />
    <div class="line-one">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-one" @click="Ticket">门票认证</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-two" @click="Navigation">智慧导航</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-three" @click="service">游园服务</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-four" @click="Remember">记住的</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-five" @click="Understand">了解的</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-six" @click="TakeAway">带走的</div>
        </flexbox-item>
      </flexbox>

      <!-- <div class="line-one-a">
        <div class="navs">门票认证</div>
        <div class="navs">智慧导航</div>
        <div class="navs">游园服务</div>
      </div>-->
      <!-- <div class="line-one-content"></div> -->
      <!-- <flexbox>
        <flexbox-item v-for="(item,index) in dataList" :key="index">
          <div class="flex-demo" @click="getItem(item.link)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt />
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>-->
      <!-- <div class="line-one-box">
      </div>-->
    </div>
    <div style="width:92%;margin: 15px auto 10px;">
      <swiper auto height="70px" class="custom">
        <swiper-item class="black">
          <img src="../indexone.png" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="../../../assets/images/6-min.png" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="../../../assets/images/1-min.png" alt/>
        </swiper-item>
      </swiper>
    </div>


    <div class="line-three">

      <div v-for="(reco,index) in recommend" class="recommend">
        <p><i :class="reco[0][0].typename"></i><span>{{reco[0][0].typename}}</span><span
          style="float: right;margin-right: 10px;">更多</span></p>
        <swiper auto height="345px" interval="3000">
          <swiper-item v-for="(swiperItem,ii) in reco">
            <div class="goods-box">
              <div v-for="(item,i) in swiperItem" class="goods" @click="details(item.id,item.type)">
                <img :src="item.video_image" alt="">
                <div
                  style="font-size: 14px;color: #000;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;padding-top: 10px;margin: 0 5px">
                  {{item.name}}
                </div>
                <div
                  style="font-size: 10px;color: #666;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;line-height: 35px;margin: 0 5px">
                  {{item.product}}
                </div>
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
    import FunctionAreas from "@/components/layout/FunctionAreas";
    import AdvertiseSwiper from "@/components/layout/AdvertiseSwiper";
    import Cell from "@/components/common/CellNoBorder";
    import SwiperAdvEat from "@/components/common/SwiperAdvEat";
    import {
        Flexbox,
        FlexboxItem,
        Tab,
        TabItem,
        Scroller,
        Swiper,
        SwiperItem
    } from "vux";

    export default {
        name: "",
        props: [""],
        data() {
            return {
                //推荐商家列表：
                recommend: [],
                dataList: [
                    {
                        imgUrl:
                            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "门票认证",
                        link: "/ticketsdiscount",
                        imgSrc: require("@/assets/images/券@2x.png")
                    },
                    {
                        imgUrl:
                            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "智慧导航",
                        link: "/intelligentnavigation",
                        imgSrc: require("@/assets/images/坐标@2x.png")
                    },
                    {
                        imgUrl:
                            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "游园服务",
                        link: "/scenicService",
                        imgSrc: require("@/assets/images/吃喝玩乐@2x.png")
                    },
                    {
                        imgUrl:
                            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "带走的",
                        link: "/takeaway?carousel=2",
                        imgSrc: require("@/assets/images/带走的@2x.png")
                    }
                ],
                dataListTwo: [
                    {
                        imgUrl:
                            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "记住的",
                        link: "/remember?type=5&branch=1",
                        imgSrc: require("@/assets/images/知识1@2x.png"),
                        text: "景区一字文化"
                    },
                    {
                        imgUrl:
                            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "了解的",
                        link: "/understand?type=7&branch=2",
                        imgSrc: require("@/assets/images/攻略@2x.png"),
                        text: "景区符号文化"
                    }
                ]
            };
        },
        components: {
            FunctionAreas,
            AdvertiseSwiper,
            Cell,
            SwiperAdvEat,
            Flexbox,
            FlexboxItem,
            Tab,
            TabItem,
            Scroller,
            Swiper,
            SwiperItem
        },

        mounted() {
            //获取推荐商家：
          bridge.register("selectAddress", function (r) {
            if (r != "" && r == "android") {
              return "userlocation";
            } else {
              return "失败";
            }
          }),
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service")
                .then(({data}) => {

                    data.data.recommend_business.forEach((item, i) => {
                        this.recommend.push(new Array)
                        let arr_index = -1
                        item.forEach((goods, index) => {
                            if (index % 3 == 0) {
                                arr_index++
                                this.recommend[i][arr_index] = []
                            }
                            this.recommend[i][arr_index].push(goods)
                        })
                    })

                    // this.recommend = data.data.recommend_business;

                    console.log(this.recommend);
                    console.log(data);
                });
        },
        methods: {
            //安卓请求跳转选择景区页
            // function: bridge.register("selectAddress", function (r) {
            //     if (r != "" && r == "android") {
            //         return "userlocation";
            //     } else {
            //         return "失败";
            //     }
            // }),

            //跳转门票认证
            Ticket() {
                this.$router.push("/ticketsdiscount")
            },
            //跳转智慧导航
            Navigation() {
                // this.$router.push("/intelligentnavigation");

              dsBridge.call("navigation", "navigation")



              // dsBridge.call("navigation", "navigation")

                //原生安卓 ios 跳转智慧导航
                dsBridge.call("webMap", "web");
                bridge.register("goMap", r => {
                    if (r != "") {
                        return r
                    }
                });

            },
            //跳转游园服务
            service() {
                this.$router.push("/scenicService");
              // dsBridge.call("navigation", "service")
            },
            //跳转记住的
            Remember() {
                this.$router.push("/remember?type=5&branch=1");
            },
            //跳转了解的
            Understand() {
                this.$router.push("/understand?type=7&branch=2");
            },
            //跳转带走的
            TakeAway() {
                this.$router.push("/takeaway?carousel=2");
            },
            //跳转详情页
            details(id, type) {
                if (type == 1 || type == 2) {
                    this.$router.push({
                        path: "/eatDrinkDetails",
                        query: {
                            idNum: id,
                            typeNum: type
                        }
                    });
                } else if (type == 3) {
                    this.$router.push({
                        path: "/PlayDetails",
                        query: {
                            idNum: id,
                            typeNum: type
                        }
                    });
                    // alert("跳转玩");
                } else if (type == 4) {
                    this.$router.push({
                        path: "/ResideDetails",
                        query: {
                            idNum: id,
                            typeNum: type
                        }
                    });
                    // alert("跳转住");
                } else if (type == 5) {
                    this.$router.push({
                        path: "/TourList",
                        query: {
                            idNum: id,
                            typeNum: type
                        }
                    });
                    // alert("跳转游");
                }
            },
            getItem(link) {
                this.$router.push(link);
            },
            onItemClick(index) {
                console.log(index);
            }
        },
        watch: {}
    };
</script>
<style lang="less" scoped>
  .tab-item-paly-content {
    margin-top: 5px;
  }

  .line-one {
    width: 92%;
    height: 142px;
    background: #ffffff;
    margin: 0 auto 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  .line-one-a {
    width: 100%;
    height: 70px;
    margin-bottom: 1px;
    background: red;
  }

  .navs {
  }

  .line-two {
    width: 92%;
    height: 69px;
    /* background: gold; */
    margin: 0 auto;
    border-radius: 8px;
  }

  .recommend {
    width: 92%;
    height: 210px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
    border-radius: 8px;
    /* margin-bottom: 10px; */
    overflow: hidden;
    margin: 0 auto 15px;

    p {
      line-height: 45px;
      padding-left: 15px;
      font-size: 16px;
      color: #000;
    }

    .goods-box {
      .goods {
        border-radius: 4px;
        overflow: hidden;
        background: rgba(245, 245, 245, 1);
        width: 30%;
        float: left;
        margin-left: 2.5%;

        img {
          width: 100%;
          height: 95px;
        }
      }
    }
  }

</style>

<style lang='less' scoped>
  @import "../../../../node_modules/vux/src/styles/1px.less";
  @import "../../../../node_modules/vux/src/styles/center.less";

  .flex-demo {
    // text-align: center;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.24); // background-color: #20b907;
    background-clip: padding-box;
    width: 98%;
    height: 70px;
    margin: 1px;
    // margin-top: 23%;
    background: cadetblue;
    font-size: 16px;
    line-height: 2;
    text-indent: 8px;
  }

  .flex-one {
    background: linear-gradient(90deg,
    rgba(255, 82, 101, 1) 0%,
    rgba(255, 113, 99, 1) 100%);
  }


  .line-three {
    width: 99%;
    /* height: 208px; */
    border-radius: 5px;
    /* background: darkgreen; */
    overflow: hidden;
    margin-left: 4px;
    margin-top: 10px;

    /deep/ .vux-indicator {
      display: none;
    }

    /* margin-bottom: 35px; */
  }

  .flex-two {
    background: linear-gradient(90deg,
    rgba(253, 111, 99, 1) 0%,
    rgba(255, 113, 99, 1) 100%);
  }

  .flex-three {
    background: linear-gradient(90deg,
    rgba(252, 128, 99, 1) 100%,
    rgba(252, 112, 99, 1) 0%);
  }

  .flex-four {
    background: linear-gradient(90deg,
    rgba(98, 144, 255, 1) 0%,
    rgba(48, 168, 255, 1) 100%);
  }

  .flex-five {
    background: linear-gradient(90deg,
    rgba(48, 168, 255, 1) 0%,
    rgba(48, 168, 255, 1) 100%);
  }

  .flex-six {
    background: linear-gradient(90deg,
    rgba(48, 194, 255, 1) 100%,
    rgba(48, 168, 255, 1) 0%);
  }

  .flex-demo .img-wrap {
    width: 28px;
    height: 28px;
    margin-left: 13px;
    margin-bottom: 9px;
  }

  .flex-demo .img-wrap img {
    background: none;
    width: 100%;
  }

  .flex-demo p {
    font-size: 12px;
  }

  .flex-demo-two {
    background-color: #ffffff;
    border-radius: 8px;
    background-clip: padding-box;
    height: 69px;
    overflow: hidden;
  }

  .flex-demo-two-content-wrap {
    width: 134px;
    height: 40px;
    margin: 14px auto 0;
  }

  .flex-demo-two-content-left {
    width: 80px;
    height: 39px;
    // background: violet;
    float: left;
  }

  .flex-demo-two-content-left p {
    font-size: 16px;
    color: #222222;
    line-height: 20px;
  }

  .flex-demo-two-content-left span {
    font-size: 12px;
    color: #999999;
    line-height: 3px;
  }

  .flex-demo-two-content-right {
    width: 44px;
    height: 39px;
    // background: chartreuse;
    float: right;
  }

  .flex-demo-two-content-right img {
    width: 100%;
    background: none;
  }

  .tab-wrap {
    height: 30px;
  }

  /deep/ .vux-tab-wrap {
    margin-top: 20px;
  }

  /deep/ .vux-tab-container {
    height: 30px;
  }

  /deep/ .scrollable {
    height: 30px;
  }

  /deep/ .vux-tab .vux-tab-item.vux-tab-selected {
    height: 30px;
    line-height: 30px;
  }

  /deep/ .scrollable .vux-tab-item {
    height: 30px;
    line-height: 30px;
  }

  .store-wrap {
    height: 122px;
    background: darkcyan;
    margin-top: 15px;
  }

  .tab-item-play-content-tools {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 12px;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
  }

  .tab-item-play-content-tools-line {
    width: 2px;
    height: 16px;
    /* background: #000; */
    display: inline-block;
    /* margin-right: 10px; */
  }

  .tab-item-play-content-title {
    font-weight: bold;
  }

  .tab-item-paly-content /deep/ .weui-cells {
    margin-top: 0;
  }

  .tab-item-play-content-tip-wrap {
    width: 100%;
    height: 50px;
    background: #f5f5f5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
  }

  .tab-item-play-content-tools-wrap {
    width: 100%;
    height: 180px;
    background: #fff;
    position: relative;
    top: -10px;
    border-radius: 10px 10px 0 0;
  }

  .tab-item-play-content-scence {
    width: 100%;
    height: 200px;
  }

  .tab-item-play-content-scence-wrap {
    width: 100%;
    min-height: 210px;
    height: auto;
    padding: 0 0 20px 0;
    box-sizing: border-box;
  }

  .tab-item-play-content-cell-spec span {
    width: 24px;
    height: 24px;
    display: inline-block;
    font-size: 20px;
  }

  .tab-item-play-content-scence-line {
    width: 100%;
    height: 10px;
    background: #f5f5f5;
    margin-top: -10px;
  }

  .swiperadv {
    width: 100%;
    height: 40px;
    background: darkgreen;
    overflow: hidden;
    line-height: 40px;
  }

  .custom {
    overflow: inherit;
    // border-radius: 8px;
    /deep/ .vux-indicator {
      right: 50%;
      margin-right: -32px;
      bottom: -27px;
    }

    /deep/ .vux-icon-dot {
      width: 15px !important;
      height: 3px !important;
    }

    /deep/ .vux-tab-ink-bar {
      display: none;
    }

    /deep/ .vux-tab {
      background: transparent;

      .vux-tab-item {
        background: transparent;
      }
    }
  }

  /deep/ .custom .vux-indicator {
    right: 50%;
    margin-right: -32px;
    bottom: 0px;
  }

  /deep/ .vux-swiper {
    border-radius: 8px;
  }
</style>
