<template>
  <div class="tab-item-mall-wrap">
    <TabItemCashHeader v-if="!$store.state.isApp"></TabItemCashHeader>
    <!--    <TabItemMallAdvertise></TabItemMallAdvertise>-->
    <div style="width:92%;margin: 59px auto 10px;">
      <swiper auto height="110px" class="custom">
        <swiper-item class="black">
          <img src="./bianone.jpg" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="./biantwo.jpg" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="./bianthree.jpg" alt/>
        </swiper-item>
      </swiper>
    </div>

    <ul class="goods-type">
      <li v-for="item in cellListTools">
        <div class="goods-type-icon" :class="item.icon" @click="goodsTypeGo(item.link)"></div>
        <div style="text-align: center">{{item.title}}</div>
      </li>
    </ul>
    <div style="width:92%;margin: 0px auto 10px;">
      <swiper auto height="70px" class="custom">
        <swiper-item class="black">
          <img src="./9-min.png" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="./9-min.png" alt/>
        </swiper-item>
        <swiper-item class="black">
          <img src="./9-min.png" alt/>
        </swiper-item>
      </swiper>
    </div>

    <div class="guess-you">
      <div class="guess-you-bgc"></div>
      <span>猜你喜欢</span>
    </div>

    <GoodsList :goodList="goodsListData"></GoodsList>

    <!--    <CellDivider :cellList="cellListTools" class="tab-item-mall-tools-wrap"></CellDivider>-->
  </div>
</template>

<script>
    import TabItemCashHeader from "@/components/layout/TabItemCashHeader";
    import DividedArea from "@/components/common/DividedArea";
    import CellDivider from "@/components/common/CellDivider";
    import GoodsList from "@/components/layout/GoodsList/GoodsList";
    import {goodsBucketRecomm} from "@/servers/api";

    import {Swiper, SwiperItem} from "vux";

    export default {
        name: "",
        props: [""],
        data() {
            return {
                //判断是否显示头部
                cellListTools: [
                    {
                        title: "艺品回购",
                        icon: "huigou",
                        link: "/backleasesale?title=艺品回购&carousel=8"
                    },
                    {
                        title: "艺品租赁",
                        icon: "zulin",
                        link: "/backleasesale?title=艺品租赁&carousel=9"
                    },
                    {
                        title: "艺品寄卖",
                        icon: "jimai",
                        link: "/backleasesale?title=艺品寄卖&carousel=10"
                    },
                    {
                        title: "信息消费",
                        icon: "xinxi",
                        link: "/informationconsum?carousel=11"
                    }
                ],
                goodsListData: []
            };
        },

        components: {
            TabItemCashHeader,

            DividedArea,
            CellDivider,
            Swiper,
            SwiperItem,
            GoodsList
        },

        computed: {},

        beforeMount() {
        },

        mounted() {
            //安卓判断是否显示头部

            this.getBannerImgFn("7");
            this.getGoodsComm();
        },

        methods: {
            previewMethod() {
            },
            addImageMethod() {
            },
            removeImageMethod() {
            },
            goodsTypeGo(link) {
                this.$router.push(link);
            },
            // 商品推荐
            getGoodsComm() {
                goodsBucketRecomm({
                    type: 2
                })
                    .then(res => {
                        if (res.result === 1) {
                            this.goodsListData = res.data.result;
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            goodsTypeGo(link) {
                this.$router.push(link);
                // console.log(link);
            }
        },

        watch: {}
    };
</script>
<style lang='less' scoped>
  .tab-item-mall-wrap {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }

  .guess-you {
    width: 100px;
    margin: 10px auto 10px;

    .guess-you-bgc {
      display: inline-block;
      width: 17px;
      height: 20px;
      background-image: url("./guess-you.png");
      background-size: 100% 100%;
      position: relative;
      top: 9px;
    }
  }

  /deep/ .vux-swiper {
    border-radius: 8px;
  }

  .custom {
    overflow: inherit;
    // border-radius: 8px;
    /deep/ .vux-indicator {
      right: 50%;
      margin-right: -32px;
      bottom: 0px;
    }

    /deep/ .vux-icon-dot {
      width: 15px !important;
      height: 3px !important;
    }
  }

  .goods-type {
    width: 92%;
    margin: 0 auto 10px;
    border-radius: 8px;
    background-color: #fff;
    height: 100px;
    display: flex;

    li {
      flex: 1;

      .goods-type-icon {
        width: 44px;
        height: 44px;
        margin: 12px auto 8px;
      }

      .huigou {
        background-image: url("./huigou.png");
        background-size: 100% 100%;
      }

      .zulin {
        background-image: url("./zulin.png");
        background-size: 100% 100%;
      }

      .jimai {
        background-image: url("./jimai.png");
        background-size: 100% 100%;
      }

      .xinxi {
        background-image: url("./xinxi.png");
        background-size: 100% 100%;
      }
    }
  }
</style>
