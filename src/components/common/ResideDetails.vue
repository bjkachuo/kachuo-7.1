<template>
  <div class="wrap">
    <HeaderTR></HeaderTR>
    <div class="normal-content" :style="conHei">
      <div class="swiper-main">
        <video
          :src="this.storeDetails.video"
          :poster="this.storeDetails.video_image"
          controls="controls"
          controlslist=”nodownload”
        ></video>

        <!-- <swiper :list="baseList" height="235px" loop dots-position="center"></swiper> -->
      </div>
      <div class="kc-panel">
        <cell align-items="start">
          <template slot="after-title">
            <div class="page-title">{{this.storeDetails.name}}<span class="rec-tag">推荐</span></div>
            <div class="cat-item">类型：经济连锁</div>
            <div class="raty-cell">
              <div class="raty-body">
                <div class="raty-num"><span>{{this.storeDetails.score}}</span>分</div>
                <rater v-model="data1" star='<i class="star"></i>' active-color="red" :margin="0" disabled></rater>
                <div class="comment-item">(12条评价)</div>
              </div>
            </div>
            <div class="list-flexs">
              <flexbox :gutter="0">
                <flexbox-item>
                  <div class="flex-link" style="display:none">
                    <img src="../../assets/images/dashang.png" alt="">
                    <div class="link-text">31打赏</div>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-link">
                    <img src="../../assets/images/xin.png" alt="">
                    <div class="link-text">{{this.storeDetails.comment_count}}赞</div>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-link">
                    <img src="../../assets/images/xignxing.png" alt="">
                    <div class="link-text">收藏</div>
                  </div>
                </flexbox-item>
              </flexbox>
            </div>
          </template>
        </cell>
      </div>
      <div class="kc-panel">
        <cell title="联系电话:" is-link value-align="right">
          <img slot="icon" class="tel-icon" src="../../assets/images/telicon@2x.png">
              <span>
                <a :href="'tel:'+ this.storeDetails.phone">{{this.storeDetails.phone}}</a>
            </span>
        </cell>
      </div>
      <div class="kc-panel">
        <cell title="">
          <template slot="inline-desc">
            <div class="nav-address">{{this.storeDetails.address}}</div>
          </template>
          <template slot="default">
            <div class="nav-link"><a :href="'https://uri.amap.com/marker?position='+this.storeDetails.latitude+','+this.storeDetails.longitude+'&name='+this.storeDetails.address">地图/导航</a></div>
          </template>
        </cell>
      </div>
      <div class="kc-panel">
        <cell title="" link="###" >
          <template slot="inline-desc">
            <div class="zhu-icon">入住时间-退房时间</div>
          </template>
          <template slot="default">
            <div class="nav-days">共1晚</div>
          </template>
        </cell>
      </div>
      <div class="kc-list-panel">
        <div class="kc-list-header">
          <div class="kc-title">在线预定</div>
          <div class="kc-toggle" @click="cateClick">筛选</div>
        </div>
        <div class="list-body">
          <cell class="list-cell" align-items="start" :link="{path:'/ResideReserve',query:{id:item.id,type:item.type,price:item.price,goodname:item.name,total:item.total,businessId:item.business_id}}" v-for="(item,index) in goodsList" :key="index" v-if="index < listnumber">
            <template slot="icon">
              <img :src="item.image" alt="">
            </template>
            <template slot="after-title">
              <div class="list-title">{{item.name}}</div>
              <div class="list-desc">{{item.is_morning}}、{{item.is_window}}</div>
              <div class="list-price"><span>￥</span>{{item.price}}</div>
            </template>
            <template slot="default">
              <x-button class="btn-link">预定</x-button>
            </template>
          </cell>
        </div>
        <div class="list-footer">
          <div class="list-more" @click="clickMore()">查看剩余服务</div>
        </div>
      </div>
    </div>
    <actionsheet v-model="show1" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
  import HeaderTR from "@/components/common/HeaderTR";
  import {Cell,XButton,Flexbox, FlexboxItem,Rater,Actionsheet,Swiper,SwiperItem} from 'vux'
  export default {
    props: [""],
    methods: {
      url(link) {
        this.$router.push(link);
      },

      cateClick () {
        this.show1 = !this.show1
      },click (key) {
        console.log(key)
      },
      clickMore () { //查看剩余服务
        this.listnumber += this.listnumber
      },
    },
    data() {
      return {
        menus: {
          menu1: '大床房',
          menu2:'双床房',
          menu3:'其它特色床'
        },
        //获取到的商家id
        idNum: "",
        //商家详情
        storeDetails: [],
        //商品详情
        goodsList:[],
        show1:false,
        data1:0,
        toggle:false,
        listnumber:3,
        list: [{
          src: require('../../assets/images/zhu.jpg'),
          title: '自主大床房',
          desc: '不含早  大床  有窗 不可取消',
          url: '/ResideReserve'
        },{
          src: require('../../assets/images/zhu.jpg'),
          title: '经济大床房',
          desc: '不含早  大床  有窗 不可取消',
          url: '/ResideReserve'
        },{
          src: require('../../assets/images/zhu.jpg'),
          title: '自主大床房',
          desc: '不含早  大床  有窗 不可取消',
          url: '/ResideReserve'
        },{
          src: require('../../assets/images/zhu.jpg'),
          title: '经济大床房',
          desc: '不含早  大床  有窗 不可取消',
          url: '/ResideReserve'
        },{
          src: require('../../assets/images/zhu.jpg'),
          title: '自主大床房',
          desc: '不含早  大床  有窗 不可取消',
          url: '/ResideReserve'
        },{
          src: require('../../assets/images/zhu.jpg'),
          title: '自主大床房',
          desc: '不含早  大床  有窗 不可取消',
          url: '/ResideReserve'
        },{
          src: require('../../assets/images/zhu.jpg'),
          title: '经济大床房',
          desc: '不含早  大床  有窗 不可取消',
          url: '/ResideReserve'
        },],
        baseList : [{
          url: 'javascript:',
          img: require('../../assets/images/zhuslide.jpg'),
        },{
          url: 'javascript:',
          img: require('../../assets/images/zhuslide.jpg'),
        },{
          url: 'javascript:',
          img: require('../../assets/images/zhuslide.jpg'),
        }
        ],
      };
    },
    mounted(){
    //查看传来的id
    console.log(this.$route.query);
    this.idNum = this.$route.query.idNum;
    //获取商家详情！
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.business_info&id=" +
          this.idNum
      )
      .then(({ data }) => {
        console.log(data);
        this.storeDetails = data.data;
        this.goodsList = data.data.goods_msg;
        console.log(this.goodsList);
        console.log(this.storeDetails);
        this.data1 = parseFloat(this.storeDetails.score)
      });
    },

    components: {
      HeaderTR,
      Cell,
      XButton,
      Flexbox,
      FlexboxItem,
      Actionsheet,
      Rater,
      Swiper,
      SwiperItem,
    },
    computed: {
      conHei() {
        return {
          height: document.documentElement.clientHeight+ "px"
        };
      }
    },
  };
</script>
<style lang='css' scoped>
a {
  text-decoration: none;
  color: #111111;
}

video{
  object-fit:fill;
    height: 206px;
    width: 100%;
    }

  .normal-content {
    width: 100%;
    background: #F5F5F5;
    margin-top: 0;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  img{
    background: none;
  }
  .raty-cell /deep/ .vux-rater a{
    width: 14px!important;
    line-height: 1!important;
    height: 14px!important;
    font-size: 0!important;
  }
  .raty-cell /deep/ .star{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(../../assets/images/star_off.png);
    background-size: contain;
  }
  .raty-cell /deep/ .is-active .star{
    background-image: url(../../assets/images/star_on.png);
  }
  .raty-body *{
    display: inline-block;
    vertical-align: middle;
  }
  .kc-panel{
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 10px 0px rgba(0,101,255,0.04);
    border-radius:8px;
    margin-bottom: 10px;
  }
  .cat-item{
    line-height: 1;
    color: #666666;
    padding-left: 20px;
    background: url(../../assets/images/dianpu.png) left center no-repeat;
    background-size: contain;
    font-size: 12px;
  }
  .kc-list-panel{
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 10px 0px rgba(0,101,255,0.04);
    border-radius:8px;
    margin-bottom: 10px;
    padding: 15px 0;
  }
  .flex-link{
    text-align: center;
    color: #666666;
    font-size: 15px;
  }
  .flex-link img{
    width: 22px;
    height: 22px;
  }
  .page-title{
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  .kc-panel .weui-cell{
    padding: 15px;
    font-size: 16px;
  }
  .kc-panel /deep/ .list-flexs{
    padding-left: 50%;
    margin-top: 10px;
  }
  .raty-cell{
    overflow: hidden;
  }
  .raty-num{
    font-size:12px;
  }
  .comment-item{
    font-size: 12px;
    color: #999;
  }
  .tel-icon{
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  .nav-link{
    color: #3976FF;
    font-size: 16px;
    line-height: 1;
    background: url(../../assets/images/dizhiicon@2x.png) left center no-repeat;
    background-size: contain;
    padding-left: 20px;
  }
  .nav-days{
    position: relative;
    padding-right: 10px;
    color: #3976FF;
    font-size: 16px;
    line-height: 1;
  }
  .nav-days:after{
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 1px 1px 0 0;
    border-color: #222;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -4px;
  }
  .nav-address{
    font-size: 14px;
  }
  .zhu-icon{
    color: #222222;
    line-height: 1;
    padding-left: 20px;
    background: url(../../assets/images/buildicon@2x.png) left center no-repeat;
    background-size: contain;
    font-size: 16px;
  }
  .kc-list-header{
    position: relative;
    padding: 0 15px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .kc-list-header .kc-title{
     font-size: 18px;
     font-weight: bold;
  }
  .kc-toggle{
    position: relative;
    padding-right: 20px;
    line-height: 1.4;
    color: #222222;
    font-size: 14px;
    background: url(../../assets/images/down@2x.png) right center no-repeat;
    background-size: 14px 8px;
  }
  .list-body .weui-cell{
    padding: 20px 15px;
  }
  .btn-link{
    height: 34px;
    border-radius: 4px;
    width: 70px;
    background-color: #3976FF;
    font-size: 16px;
    line-height: 30px;
    color: #FFFFFF;
  }
  .weui-btn:after{
    display: none;
  }
  .list-cell{
    line-height: 1;
  }
  .list-cell:before{
    display: none;
  }
  .list-cell img{
    width: 75px;
    height: 75px;
    border-radius: 4px;
    display: block;
    margin-right: 10px;
  }
 .list-cell .list-title{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
 .list-cell .list-desc{
    font-size: 14px;
    color: #999999;
    max-width: 130px;
    margin-bottom: 5px;
    line-height: 1.2;
  }
 .list-cell .list-price{
    font-size: 16px;
    color: #FF3939;
  }
  .list-price span{
    font-size: 13px;
  }
  .list-footer{
    padding: 0 15px;
  }
  .list-more{
    position: relative;
    display: inline-block;
    padding-right: 20px;
    line-height: 1.4;
    color: #222222;
    font-size: 14px;
    background: url(../../assets/images/down@2x.png) right center no-repeat;
    background-size: 14px 8px;
  }
  .swiper-main{
    margin-bottom: 5px;
  }
	.swiper-main img{
    width: 100%;
    height: 235px;
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
  .rec-tag{
    display: inline-block;vertical-align: middle;
    padding: 0 8px;
    font-weight: normal;
    height:20px;
    font-size: 13px;
    line-height: 20px;
    background:linear-gradient(90deg,rgba(255,202,0,1) 0%,rgba(244,224,43,1) 100%);
    border-radius:8px 8px 8px 4px;
  }
</style>
