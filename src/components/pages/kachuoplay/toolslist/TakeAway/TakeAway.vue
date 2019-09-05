<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="swiper-main">
        <swiper :list="baseList" height="110px" loop="true" dots-position="center"></swiper>
      </div>
      <flexbox class="cc-flex" :gutter="10">
        <flexbox-item>
<!--          <router-link class="cc-item" to="/takeaway/takeaList?index=1">-->
          <a class="cc-item"> <img src="./ts_text.png" alt=""></a>

<!--          </router-link>-->
        </flexbox-item>
        <flexbox-item>
<!--          <router-link class="cc-item" to="/takeaway/takeaList?index=2">-->
          <a class="cc-item"><img src="./wc_text.png" alt=""></a>
<!--          </router-link>-->
        </flexbox-item>
      </flexbox>
      <div class="take-list">
        <div class="li" v-for="(item,index) in lists" :key="index">
          <div class="take-card" @click="url(item.id)">
            <div class="take-photo">
              <img :src="item.thumb" alt="">
            </div>
            <div class="take-intro">
              <div class="t-title">{{item.title}}</div>
              <div class="t-price">￥<span>{{item.marketprice}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
  import { Flexbox, FlexboxItem } from 'vux'

  import { TakeAwayGoodsList } from "@/servers/api";

  export default {
    props: [""],
    methods: {
      url(id) {
        this.$router.push('/goodsdetails?id='+id);
      }
    },
    data() {
      return {
        TitleObjData: {
          titleContent: "带走的",
          showLeftBack: true,
          showRightMore: false
        },
        baseList : [{
          url: 'javascript:',
          img: require('./slide.png'),
        },{
          url: 'javascript:',
          img: require('./slide.png'),
        },{
          url: 'javascript:',
          img: require('./slide.png'),
        }
        ],
        lists: [],
      };
    },
    components: {
      Header,
      Swiper,
      SwiperItem,
      Flexbox,
      FlexboxItem
    },
    computed: {
      conHei() {
        return {
          height: document.documentElement.clientHeight - 45 + "px"
        };
      }
    },
    created() {
      TakeAwayGoodsList({
        scenic_id:sessionStorage.currentScenic
      })
        .then(res => {
          if (res.result === 1) {
            console.log(res);
            this.lists = res.data.result
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
</script>
<style lang='css' scoped>
  .normal-content {
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    padding: 15px;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .cc-flex{
    margin-bottom:15px;
  }
  .cc-flex img{
    width: 75px;
    height: 18px;
    background: transparent;
  }
  .cc-flex .cc-item{
    display: block;
    padding: 25px 0;
    text-align: center;
    border-radius: 8px;
    background: #FFFFFF;
    overflow: hidden;
    box-shadow:0px 6px 10px 0px rgba(0,101,255,0.05);
  }
  .take-card{
    background: #FFF;
    color: #222222;
    border-radius: 8px;
    display: block;
    box-shadow:0px 6px 10px 0px rgba(0,101,255,0.04);
    overflow: hidden;
  }
  .take-photo img{
    width: 100%;
    height: 150px;
    border-radius:8px 8px 0px 0px;
  }
  .take-list{
    overflow: hidden;
    margin: 0 -7px;
  }
  .take-list .li{
    width: 50%;
    padding:5px 7px;
    box-sizing: border-box;
    float: left;
  }
  .take-intro{
    padding: 11px;
  }
  .take-card .t-title{
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .take-card .t-price{
    color: #FF3939;
    font-size: 14px;
  }
  .take-card .t-price span{
    font-size: 18px;
    font-weight: bold;
  }
  .swiper-main{
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow:0px 6px 10px 0px rgba(0,0,0,0.1);
  }
  .swiper-main img{
    width: 100%;
    height: 110px;
    border-radius: 8px;
  }
  .swiper-main /deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot,
  .swiper-main /deep/ .vux-slider .vux-indicator-right > a > .vux-icon-dot{
    width:15px;
    height:3px;
    background:rgba(34,34,34,1);
    opacity:0.2;
    border-radius:3px;
  }
  .swiper-main /deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
  .swiper-main /deep/ .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{
    opacity:1;
  }
  .swiper-main /deep/ .vux-slider > .vux-indicator,
  .swiper-main /deep/ .vux-slider .vux-indicator-right{
    bottom: 5px;
  }
</style>
