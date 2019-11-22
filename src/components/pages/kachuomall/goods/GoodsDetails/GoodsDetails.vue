<template>
  <div class="goods-details-wrap">
<!--    <Header-->
<!--      :titleContent="TitleObjData.titleContent"-->
<!--      :showLeftBack="TitleObjData.showLeftBack"-->
<!--      :showRightMore="TitleObjData.showRightMore"-->
<!--    ></Header>-->
    <div class="goods-details-content" :style="conHei">
    <div class="banner">
      <swiper :options="swiperOption" class="swp-wall" v-if="list.length > 0" >
        <swiper-slide class="swp-warp" v-for="(item,index) in list" :key="index">
            <img :src="item.img" alt="" width="100%" height="100%" class="previewer-delete-icon" @click.prevent.stop="previewImg(index)">
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
      <div class="back" @click="goBack">
        <x-icon type="ios-arrow-left" size="29"></x-icon>
      </div>
      <div class="more" @click="share = true">
        <div class="icon"></div>
      </div>
    </div>
      <previewer ref="previewer" :list="list2" :options="options"></previewer>
      <div class="goods-details-desc">
        <p class="goods-name text-overflow-hidden">{{goodsData.title}}</p>
        <p class="goods-price" v-if="routeQueryPrice">
          <span style="font-size:16px;margin-right:4px">¥</span>  
          {{routeQueryPrice}}
        </p>
        <p class="goods-price" v-if="!routeQueryPrice">
          <span style="font-size:16px;margin-right:4px">¥</span>
          {{goodsData.marketprice}}
        </p>
        <p class="goods-propity">
          <span>运费：包邮</span>
          <span>销量：{{goodsData.sales}}</span>
          <span>库存：{{goodsData.total}}</span>
        </p>
      </div>
      <div class="divider-area-wrap"></div>

      <div class="goods-details-cells">
        <group>
          <cell title="已选" v-if="goodsData.options" is-link @click.native="selOptionFn">{{selName}}</cell>
          <cell title="已选" v-else-if="!goodsData.options" is-link disabled>*1</cell>
        </group>
        <div class="divider-area-wrap"></div>
        <group>
          <cell title="作品参数" is-link @click.native="selOptionFn2">{{selOption}}</cell>
        </group>
<!--        <group>-->
<!--          <cell title="服务" is-link @click.native="selServiceFn">{{selService}}</cell>-->
<!--        </group>-->
        <div class="divider-area-wrap"></div>
        <group>
          <cell title="溯源视频" is-link @click.native="showSourceVideo">{{selService}}</cell>
        </group>
        <div class="divider-area-wrap"></div>
        <group>
          <cell title="文链查证" is-link @click.native="blockChainInfoFn">{{selService}}</cell>
        </group>
        <div class="divider-area-wrap"></div>
      </div>

      <div class="goods-about-copywriter">
        <span>产品文案</span>
      </div>
      <p style="margin-top:10px" v-html="goodsData.content">{{goodsData.content}}</p>

    </div>

    <bottom-menu :collectState="collectState"></bottom-menu>
    <!-- 选择类型弹层 -->
    <div v-transfer-dom>
      <popup v-model="showPopup" position="bottom">
        <div class="box-popup">
          <checker v-model="selModel">
            <x-button
              type="primary"
              mini
              v-for="(item,index) in goodsData.options"
              :key="index"
              class="option-for-item"
              @click.native="setForItem(item.title,item.id)"
            >{{item.title}}</x-button>
          </checker>
        </div>
      </popup>
    </div>
    <!-- 选择参数弹层 -->
    <div v-transfer-dom>
      <popup v-model="showPopupOption" position="bottom">
        <div class="box-popup">
          <checker v-model="selModel">
            <x-button type="primary" mini @click.native="showPopupOption = false">无</x-button>
          </checker>
        </div>
      </popup>
    </div>
    <!-- 溯源视频弹层 -->
    <div v-transfer-dom>
      <x-dialog v-model="showSourceModel" class="dialog-demo">
        <div class="img-box" v-if="this.goodsData.sy_video">
          <!-- <div class="video" id="wrapper"></div> -->
          <video
            ref="videoPlayer"
            :src="this.goodsData.sy_video"
            :poster="this.goodsData.thumb_url[0]"
            controls="controls"
            controlslist="nodownload"
          ></video>
        </div>
        <div @click="closeVideo">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <!--分享-->
    <actionsheet v-model="share" :menus="menus1"  @on-click-menu="shareClick"></actionsheet>
  </div>
</template>

<script>
import ChimeeMobilePlayer from "chimee-mobile-player";
import "chimee-mobile-player/lib/chimee-mobile-player.browser.css";
import Header from "@/components/common/Header";
import VideoPlayer from "@/components/common/VideoPlayer";
// import SwiperImg from "@/components/common/SwiperImgGoodDetails";
import { getDetail } from "@/servers/api";
import Divider from "@/components/common/DividedArea";
import { vueCordovaFunction } from "@/assets/js/vuecordova";
import bottomMenu from './bottomMenu'
import {
  Cell,
  CellBox,
  CellFormPreview,
  Group,
  Badge,
  Previewer,
  TransferDom,
  Popup,
  Checker,
  CheckerItem,
  XButton,
  XDialog,
  Actionsheet
} from "vux";


import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  directives: {
    TransferDom
  },

  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false //触碰后继续轮播
        },
        autoplay:false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            type: 'fraction',
        },
        speed: 600,
        loop: true, //循环模式
        // autoHeight: true, //自动高度
        centeredSlides: true, //设定为true时，active slide会居中，而不是默认状态下的居左
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper        observeParents: false, //修改swiper的父元素时，自动初始化swiper
        direction : 'horizontal',

      },
      options: {
        isClickableElement: function (el) {
          return /previewer-delete-icon/.test(el.className)
        }
      },
      list:[],
      list2:[],
      TitleObjData: {
        titleContent: "商品详情",
        showLeftBack: true,
        showRightMore: true
      },
      selModel: "",
      share:false,
      menus1: {
        0: '分享给好友',
        1: '分享到朋友圈'
      },
      showPopup: false,
      showPopupOption: false,
      showSourceModel: false,
      goodsData: {},
      selName: "",
      selOption: "",
      selService: "",
      collectState: true,
    }
  },
  components: {
    Header,
    VideoPlayer,
    Previewer,
    Divider,
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
    TransferDom,
    Popup,
    Checker,
    CheckerItem,
    XButton,
    XDialog,
    swiper,
    swiperSlide,
    bottomMenu,
    Actionsheet
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    },
    routeQueryPrice() {
      if (this.$route.query.price) {
        return this.$route.query.price;
      } else {
        return null;
      }
    }
  },

  mounted() {
    this.getGoodsDetailsInfo();
    // console.log(this.getGoodsDetailsInfo())
  },

  methods: {
    goBack(){
      this.$router.go(-1)
    },
    shareClick(key){
      console.log(this.$route);

      dsBridge.call("share",JSON.stringify({
        type:key,
        url:this.$route.fullPath,
        imgUrl:this.goodsData.thumb_url[0],
        title:this.goodsData.title
      }))
    },
    previewImg(index){
      this.$refs.previewer.show(index)
    },
    closeVideo() {
      this.showSourceModel = false;
      this.$refs.videoPlayer.pause();
    },
    showSourceVideo() {
      if (this.goodsData.sy_video) {
        this.showSourceModel = true;
      } else {
        this.$vux.toast.show({
          type: "text",
          text: "暂无视频",
          time: 1000,
          position: "middle",
          isShowMask: true
        });
      }
      // this.createVideoDom();
    },
    createVideoDom() {
      if (this.goodsData.sy_video) {
        this.showSourceModel = true;
        new ChimeeMobilePlayer({
          wrapper: "#wrapper",
          src: this.goodsData.sy_video,
          autoplay: false,
          poster: this.goodsData.thumb_url[0],
          controls: true,
          playsInline: true,
          preload: "auto",
          x5VideoPlayerFullscreen: true,
          x5VideoOrientation: "landscape|portrait",
          xWebkitAirplay: true,
          muted: false,
          disableUA: [
            "Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36"
          ]
        });
      } else {
        this.$vux.toast.show({
          type: "text",
          text: "暂无视频",
          time: 1000,
          position: "middle",
          isShowMask: true
        });
      }
      // console.log(this.goodsData);
    },
    blockChainInfoFn() {
      let id = this.$route.query.id;
      let flag = this.goodsData.is_forty;
      let rule = this.goodsData.rule;
      if (flag) {
        this.$router.push(
          "/blockinfoindex?id=" + id + "&flag=" + flag + "&rule=" + rule
        );
      } else {
        this.$vux.toast.text("数据上链中...", "middle");
        setTimeout(() => {
          this.$vux.toast.hide();
        }, 1000);
      }
    },

    setForItem(name, id) {
      this.selName = name;
      setTimeout(() => {
        this.showPopup = false;
      }, 300);
    },
    selOptionFn2() {
      this.showPopupOption = true;
    },
    selServiceFn() {
      this.showPopupOption = true;
    },
    selOptionFn() {
      this.showPopup = true;
    },
    getGoodsDetailsInfo() {
      getDetail({ goods_id: this.$route.query.id  })
        .then(res => {
          let arr = [];
          // console.log(res);
          if (res.result === 1) {
            if (res.data.favorite) {
              this.collectState = true;
            } else {
              this.collectState = false;
            }
            if (res.data.thumb_url.length) {
              for (let i = 0; i < res.data.thumb_url.length; i++) {
                arr.push({
                  img: res.data.thumb_url[i]
                });
              }

              this.list = JSON.parse(JSON.stringify(arr));
              this.list.forEach(item=>{
                this.list2.push({src:item.img})
              })
            }
            this.$nextTick(() => {
              this.goodsData = res.data;
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

};
</script>
<style lang='less' scoped>
@import "~vux/src/styles/close";
.banner{
  position: relative;
  .back{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(255,255,255,.9);
    left: 15px;
    top: 15px;
    z-index: 10;
    /deep/.vux-x-icon-ios-arrow-left {
      fill: #000;
      margin-left: 2px;
      margin-top: 2px;
    }
  }
  .more{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(255,255,255,.9);
    right: 15px;
    top: 15px;
    z-index: 10;
    .icon{
      width: 70%;
      margin-left: 15%;
      margin-top: 15%;
      height: 70%;
      background-image: url("../more.png");
      background-size: 100% 100%;
    }
  }
}

.divider-area-wrap {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
}
.goods-details-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.goods-details-content {
  width: 100%;
  background: rgb(245,245,245);
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}

.goods-details-desc {
  background: #fff;
  width: 100%;
  box-shadow:0px 5px 10px 0px rgba(0,101,255,0.08);
  border-radius:8px;
  .goods-name {
    line-height: 48px;
    font-size: 20px;
    font-weight: bold;
    padding: 0 15px;
  }
  .goods-price {
    font-size: 30px;
    color: rgb(255,57,57);
    margin: 0 15px;
    line-height: .8;
    padding-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid rgb(229,229,229);
  }
  .goods-propity {
    width: 100%;
    line-height: 38px;
    color:rgb(153,153,153);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 0 15px;
    box-sizing: border-box;
  }
}

.goods-details-cells{
  /deep/.weui-cell{
    padding: 15px 15px;
    border-radius: 8px;
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.08);
  }
}

.goods-about-copywriter {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.goods-about-copywriter span {
  width: 60px;
  height: 100%;
  line-height: 44px;
  text-align: center;
  display: inline-block;
  border-bottom: 4px solid #000;
}

.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.box-popup {
  width: 100%;
  height: 300px;
  background: #fff;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
}
.option-for-item {
  width: auto;
  min-height: 20px;
  height: auto;
  font-size: 14px;
  margin: 4px;
  padding: 0 6px;
  box-sizing: border-box;
  border-radius: 4px;
}
.video {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.dialog-demo {
  .weui-dialog {
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 200px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
.swp-wall{
  height: 344px;
  overflow: hidden;
  .swiper-pagination{
    bottom: 10px;
    left: 310px;
    width: 40px;
    background: rgba(0,0,0,0.5);
    color: white;
    border-radius: 40%;
  }
  .swp-warp{
    height: 344px;
    width: 100%;
    img{
      width: 100%;
      height: 344px;
    }
  }
}
</style>
