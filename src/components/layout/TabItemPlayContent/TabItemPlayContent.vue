<template>
  <div class="tab-item-paly-content" @scroll="scroll($event)">
    <div class="banner"></div>

    <div class="line-one">
      <ul class="goods-type">
        <li v-for="item in cellListTools">
          <div class="goods-type-icon" :class="item.icon" @click="goodsTypeGo(item.link)"></div>
          <div style="text-align: center">{{item.title}}</div>
        </li>
      </ul>
    </div>
    <div class="line-two">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3">
          <div class="flex-demo" @click="Remember">
            <div class="sp1">记住的</div>
            <div class="sp2">一字文化视频</div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo" @click="Understand">
            <div class="sp1">了解的</div>
            <div class="sp2">符号故事视频</div>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo" @click="TakeAway">
            <div class="sp1">带走的</div>
            <div class="sp2">景区自营商城</div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>



    <div style="width:92%;margin: 15px auto 10px;">
      <swiper auto height="70px" class="custom">
        <swiper-item class="black">
          <img src="./swiper.png" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="./swiper.png" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="./swiper.png" alt/>
        </swiper-item>
      </swiper>
    </div>


    <div class="line-three">

      <div v-for="(reco,index) in recommend" class="recommend">
        <p><i :class="reco[0][0].typename"></i><span class="title">{{reco[0][0].typename}}</span><span class="more" @click="more(reco[0][0].typename)">更多<x-icon type="ios-arrow-right" size="10"></x-icon></span></p>
        <swiper auto height="345px" interval="3000">
          <swiper-item v-for="(swiperItem,ii) in reco">
            <div class="goods-box">
              <div v-for="(item,i) in swiperItem" class="goods" @click="details(item.id,item.type)">
                <div class="score">4.5分</div>
                <img :src="item.video_image" alt="">
                <div style="font-size: 14px;color: #000;padding-top: 10px;margin: 0 5px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow: hidden   ">{{item.name}}</div>
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>

    import Cell from "@/components/common/CellNoBorder";

    import { Flexbox, FlexboxItem, Tab, TabItem, Scroller, Swiper, SwiperItem } from "vux";

    export default {
        data() {
            return {
                //推荐商家列表：
                recommend: [],
                cellListTools: [
                  {
                    title: "门票认证",
                    icon: "门票认证",
                    link: "/ticketsdiscount"
                  },
                  {
                    title: "智慧导航",
                    icon: "智慧导航",
                    link: "/intelligentnavigation"
                  },
                  {
                    title: "游园服务",
                    icon: "游园服务",
                    link: "/scenicService"
                  },
                  {
                    title: "景区发布",
                    icon: "景区发布",
                    link: "/scencerelease"
                  }
                ],

                dataList: [
                    {
                        imgUrl: "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "门票认证",
                        link: "/ticketsdiscount",
                        imgSrc: require("@/assets/images/券@2x.png")
                    },
                    {
                        imgUrl: "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "智慧导航",
                        link: "/intelligentnavigation",
                        imgSrc: require("@/assets/images/坐标@2x.png")
                    },
                    {
                        imgUrl: "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
                        name: "游园服务",
                        link: "/scenicService",
                        imgSrc: require("@/assets/images/吃喝玩乐@2x.png")
                    },
                    {
                        imgUrl: "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
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
            Cell,
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


                  console.log(this.recommend);
                  console.log(data);
              });
        },
        methods: {
            //跳转门票认证
            Ticket() {
                this.$router.push("/ticketsdiscount")
            },
            //跳转智慧导航
            Navigation() {
                //原生安卓 ios 跳转智慧导航
                dsBridge.call("webMap", "web");
                bridge.register("goMap", r => {
                    if (r != "") {
                        return r
                    }
                });

            },
            goodsTypeGo(link) {
              if(link == '/intelligentnavigation'){
                console.log(1);
                this.Navigation()
              }else{
                this.$router.push(link);
              }

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
            more(type){
              if(type == '吃吧') this.$router.push('/businessList?type=1&name=吃吧');
              if(type == '喝吧') this.$router.push('/businessList?type=2&name=喝吧');
              if(type == '玩吧') this.$router.push('/businessList?type=3&name=玩吧');
              if(type == '住吧') this.$router.push('/businessList?type=4&name=住吧');
              if(type == '游吧') this.$router.push('/TourList');
            },
            onItemClick(index) {
                console.log(index);
            }
        },
        watch: {
          '$store.state.nativeHead':function (to) {
            dsBridge.call("nativeHead", to);
          }
        }
    };
</script>
<style lang="less" scoped>
  .tab-item-paly-content {
    height: 100%;
    overflow: hidden;
    .banner{
      width: 100%;
      height: 0;
      padding-top: 53.333%;
      background-image: url("index-tab.png");
      background-size: 100% 100%;
    }
    .line-one{
      height: 55px;
      position: relative;
    }
    .goods-type {
      width: 92%;
      margin: 0 auto;
      border-radius: 8px;
      left: 4%;
      background-color: #fff;
      position: absolute;
      top: -40px;
      display: flex;
      box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.06);
      padding-bottom: 15px;
      li {
        flex: 1;
        .goods-type-icon {
          width: 50px;
          height: 50px;
          margin: 15px auto 8px;
          background-size: 100% 100%;
        }
        .门票认证{
          background-image: url("./门票认证.png");
        }
        .景区发布{
          background-image: url("./景区发布.png");
        }
        .智慧导航{
          background-image: url("./智慧导航.png");
        }
        .游园服务{
          background-image: url("./游园服务.png");
        }
      }
    }
  }
  .recommend {
    width: 92%;
    height: 170px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto 15px;
    .title{
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
    .more{
      float: right;
      margin-top: 12px;
      display: inline-block;
      line-height: 23px;
      height:23px;
      width: 60px;
      text-align: center;
      border:1px solid #999;
      border-radius:11px;
      margin-right: 5px;
      color: #999;
      font-size: 12px;
    }
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
        width: 28%;
        float: left;
        font-size: 13px;
        color: #222;
        margin-left: 4%;
        position: relative;
        .score{
          width:40px;
          position: absolute;
          left: 0;
          top: 0;
          text-align: center;
          color: #fff;
          font-size: 10px;
          line-height: 22px;
          background:rgba(57,118,255,1);
          border-radius:4px 0px 8px 0px;
        }
        img {
          width: 100%;
          height: 63px;
        }
      }
    }
  }

</style>

<style lang='less' scoped>
  @import "../../../../node_modules/vux/src/styles/1px.less";
  @import "../../../../node_modules/vux/src/styles/center.less";

  .flex-demo {
    color: rgba(255, 255, 255, 1);
    background-clip: padding-box;
    width: 98%;
    padding-top: 20px;
    margin: 1px;
    font-size: 16px;
    text-align: center;
    .sp1{
      color: #333;
      font-size: 15px;
      font-weight: bold;
      margin-top: 10px;
    }
    .sp2{
      color: #999;
      font-size: 11px;
    }
  }


  .line-three {
    width: 99%;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 4px;
    margin-top: 10px;
    /deep/ .vux-indicator {
      display: none;
    }
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
     display: none;
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
