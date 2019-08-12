<template>
  <div class="tab-item-mall-wrap">
<!--    <TabItemMallHeader></TabItemMallHeader>-->
<!--    <TabItemMallAdvertise></TabItemMallAdvertise>-->
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7" style="float: left;"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>
    <div style="width:92%;margin: 15px auto 30px;" >
      <swiper auto height="100px" class="custom">
        <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      </swiper>
    </div>
    <ul class="goods-type">
      <li v-for="item in cellListTools">
        <div class="goods-type-icon"></div>
        <div style="text-align: center">{{item.title}}</div>
      </li>
    </ul>
<!--    <CellDivider :cellList="cellListTools" class="tab-item-mall-tools-wrap"></CellDivider>-->
    <DividedArea></DividedArea>
<!--    <Divider :content="dividerContent"></Divider>-->
    <GoodsList :goodList="goodsListData"></GoodsList>
    <span class="btn-wrap" @click="classification">
<!--      <p class="btn">分类</p>-->
      <!-- <x-icon type="ios-arrow-down" size="30"></x-icon> -->
    </span>
  </div>
</template>

<script>
//import TabItemMallHeader from "@/components/layout/TabItemMallHeader";
// import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import {Scroller,Swiper,SwiperItem} from 'vux'
import DividedArea from "@/components/common/DividedArea";
import CellDivider from "@/components/common/CellDivider";
// import Divider from "@/components/common/Divider";
import GoodsList from "@/components/layout/GoodsList";
import { goodsBucketRecomm } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      cellListTools: [
        {
          title: "品类视频",
          icon: "iconfont iconpinleishipin",
          link: "/goodsVideoclassify?title=品类视频"
        },
        {
          title: "景区消费",
          icon: "iconfont iconjingquxiaofei",
          link: "/scenceconsum?title=景区消费&carousel=4"
        },
        {
          title: "景区好礼",
          icon: "iconfont iconjingquhaoli",
          link: "/scencegifts?title=景区好礼&carousel=5"
        },
        {
          title: "名家妙藏",
          icon: "iconfont iconmingjiamiaocang",
          link: "/famouscollection?title=名家妙藏&carousel=6"
        }
      ],
      demo01_list:[{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/5.jpg', // 404
        title: '送你一次旅行',
        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
      }],
      dividerContent: "猜你喜欢",
      goodsListData: []
    };
  },

  components: {
    // TabItemMallHeader,
    // TabItemMallAdvertise,
    DividedArea,
    CellDivider,
    // Divider,
    GoodsList,
    Scroller,
    Swiper,
    SwiperItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.getGoodsComm();
  },

  methods: {
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
    classification(){
      this.$router.push("/goodsSlassification")
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
 .box1{
   width: 1000px;
 }
.box1-item{
  margin: 0 20px;
  line-height: 44px;
}
.custom{
  overflow: inherit;
  border-radius: 8px;
    /deep/ .vux-indicator{
      right: 50%;
      margin-right: -32px;
      bottom: -27px;
    }
    /deep/ .vux-icon-dot{
      width: 15px!important;
      height: 3px!important;
    }
 }
.goods-type{
  width: 92%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #fff;
  height: 90px;
  display: flex;
  li{
    flex: 1;
    .goods-type-icon{
      width: 26px;
      height: 26px;
      margin: 0 auto;
    }
  }
}
.tab-item-mall-wrap {
  padding-bottom: 30px;
  box-sizing: border-box;
  position: relative;
  background:rgba(245,245,245,1);
}
.btn-wrap{
  position: absolute;
  top:0px;
  left:10px;
  width: 14%;
  height: 45px;
}
.btn{
  line-height: 45px;
  text-align: center;
  font-size: 16px;
  width: 66%;
  float: left;
  }
 .vux-x-icon{
   float: left;
   width:34%;
   margin-top: 8px;
 }
</style>

