<template>
  <div class="scence-service-wrap">
    <div>
      <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="help-wrap" style="position:absolute;right:15px;top:10px;z-index: 999;">
        <customerService></customerService>
      </div>
    </div>
    <div class="scence-service-content">
      <div class="content-one">
        <div class="swp-wrap">
          <swiper :list="baseList" height="110px" loop auto dots-position="center"></swiper>
        </div>
        <div class="Selected-warp">
          <flexbox>
            <flexbox-item v-for="(item,index) in dataListOne" :key="index">
              <div class="flex-demo" @click="getItem(item.link)">
                <div class="img-wrap">
                  <img :src="item.imgSrc" alt />
                </div>
                <p>{{item.name}}</p>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <div style="width:92%;margin: 15px auto 10px;">
        <swiper auto height="70px" class="custom">
          <swiper-item class="black">
            <img src="../../assets/images/8-min.png" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="../../assets/images/5-min.png" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="../../assets/images/4-min.png" alt />
          </swiper-item>
        </swiper>
      </div>
      <div class="">

        <div class="line-three">
          <div v-for="(reco,index) in recommend" class="recommend">
            <p>
              <i :class="reco[0][0].typename"></i>
              <span>{{reco[0][0].typename}}</span>
            </p>
            <el-amap :vid="reco[0][0].typename" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
            </el-amap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Header from "@/components/common/Header";
import { XButton, Cell, Swiper, SwiperItem,Scroller, Flexbox, FlexboxItem, } from "vux";
import customerService from "@/components/common/customerService/customerService";

export default {
  name: "",
  props: [""],
  data() {
    return {
      baseList: [
        {url: "javascript:", img: require("../../assets/images/yyone.jpg")},
        {url: "javascript:", img: require("../../assets/images/yytwo.jpg")},
        {url: "javascript:", img: require("../../assets/images/yythree.jpg")}
      ],

      dataListOne: [
        {name: "吃吧", link: "/businessList?type=1&name=吃吧", imgSrc: require("@/assets/images/chi.png")},
        {name: "喝吧", link: "/businessList?type=2&&name=喝吧", imgSrc: require("@/assets/images/he.png")},
        {name: "玩吧", link: "/businessList?type=3&&name=玩吧", imgSrc: require("@/assets/images/wan.png")},
        {name: "住吧", link: "/businessList?type=4&name=住吧", imgSrc: require("@/assets/images/zhu.png")},
        {name: "游吧", link: "/TourList", imgSrc: require("@/assets/images/you.png")}
      ],
      //商家type
      typeNum: "",
      //轮播图
      advSwiper: [],
      //推荐商家列表：
      recommend: [],
      //正儿八经商家列表:
      BusinessList: [],
      TitleObjData: {
        titleContent: "游园服务",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {Header, Scroller, Flexbox, FlexboxItem, Swiper, SwiperItem, XButton, Cell, customerService},

  mounted() {
    //商家type值
    this.typeNum = this.$route.query.type;
    //获取推荐商家：
    this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service")
      .then(({ data }) => {
        data.data.recommend_business.forEach((item, i) => {
          this.recommend.push(new Array());
          let arr_index = -1;
          item.forEach((goods, index) => {
            if (index % 3 == 0) {
              arr_index++;
              this.recommend[i][arr_index] = [];
            }
            this.recommend[i][arr_index].push(goods);
          });
        });
        // this.recommend = data.data.recommend_business;
        console.log(this.recommend);
        console.log(data);
      });


  },

  methods: {
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

    //跳转列表页
    getItem(link) {
      this.$router.push(link);
    },

  },

};
</script>
<style lang="css" scoped>
img {
  width: 100%;
  height: 100%;
}
.scence-service-wrap {
  height: 100%;
  overflow: hidden;
}
.scence-service-content {
  height: 94%;
  margin-top: 46px;
  border-top: 1px solid #eeeeee;
  background: #f5f5f5;
  overflow: auto;
}
.scence-service-content .content-one {
  height: 210px;
  margin: 0px auto 20px;
}
.scence-service-content .swp-wrap {
  width: 92%;
  height: 110px;
  margin: 15px auto 28px;
  border-radius: 8px;
}
.scence-service-content .swp-wrap img {
  width: 100%;
  height: 110px;
  margin: 0 auto;
  border-radius: 8px;
}

.scence-service-content .content-one .Selected-warp {
  height: 79px;
  width: 92%;
  margin: 0 auto;
}

</style>
<style lang="less" scoped>

.weui-cell {
  .weui-cell__ft {
    color: #666666;
  }
}
.store-list-warp {
  .vux-rater {
    display: block;
    line-height: 1;
  }
}
.flex-demo {
  text-align: center;
  color: #222222;
  background-clip: padding-box;
  width: 51px;
  height: 72px;
  margin: 0 auto;
  .img-wrap {
    width: 51px;
    height: 51px;
    background: #ffffff;
    border-radius: 16px;
    img {
      background: none;
      width: 31px;
      height: 31px;
      margin: 8px auto 0;
    }
  }
  p {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #222222ff;
    line-height: 2;
  }
}


.custom {
  overflow: inherit;
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
.line-three {
  width: 99%;
  /* height: 208px; */
  border-radius: 5px;
  /* background: darkgreen; */
  overflow: hidden;
  margin-left: 4px;
  margin-top: 10px;
  /deep/.vux-indicator {
    display: none;
  }
  /* margin-bottom: 35px; */
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
}
</style>
