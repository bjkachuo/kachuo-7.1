<template>
  <div class="wrap">
    <HeaderTR></HeaderTR>
    <div class="normal-content" :style="conHei">
      <div class="swiper-main">
        <swiper :list="baseList" height="235px" loop dots-position="center"></swiper>
      </div>
      <div class="kc-panel">
        <cell align-items="start">
          <template slot="after-title">
            <div class="page-title">蓬莱欧乐堡梦幻世界</div>
            <div class="list-flexs">
              <flexbox :gutter="0">
                <flexbox-item>
                  <div class="flex-link">
                    <img src="../../assets/images/dashang.png" alt="">
                    <div class="link-text">31打赏</div>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-link">
                    <img src="../../assets/images/xin.png" alt="">
                    <div class="link-text">31赞</div>
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
          <template slot="default">
            <div class="raty-cell">
              <div class="raty-body">
                <div class="raty-num"><strong>4.1</strong>分</div>
                <div class="comment-item">(12条评价)</div>
              </div>
              <div class="raty-ft">
                <rater v-model="data1" star='<i class="star"></i>' active-color="red" :margin="0" disabled></rater>
              </div>
            </div>
          </template>
        </cell>
      </div>
      <div class="kc-panel">
        <cell title="联系电话:(0535)5666900" link="###">
          <img slot="icon" class="tel-icon" src="../../assets/images/telicon@2x.png">
        </cell>
      </div>
      <div class="kc-panel">
        <cell title="" link="###" >
          <template slot="inline-desc">
            <div class="nav-address">山东省蓬莱市海滨路南区巷6号</div>
          </template>
          <template slot="default">
            <div class="nav-link">地图/导航</div>
          </template>
        </cell>
      </div>
      <div class="kc-list-panel">
        <div class="kc-list-header">
          <div class="kc-title">在线预定</div>
          <div class="kc-toggle" @click="cateClick">筛选</div>
        </div>
        <div class="list-body">
          <cell class="list-cell" align-items="start" :link="item.url" v-for="(item,index) in list" v-if="index < listnumber">
            <template slot="icon">
              <img :src="item.src" alt="">
            </template>
            <template slot="after-title">
              <div class="list-title">{{item.title}}</div>
              <div class="list-desc">{{item.desc}}</div>
              <div class="list-price"><span>￥</span>167</div>
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
          menu1: '白场票',
          menu2:'夜场票',
          menu3:'双人套票'
        },
        show1:false,
        data1:"4",
        toggle:false,
        listnumber:3,
        list: [{
          src: require('../../assets/images/yuding1.jpg'),
          title: '白场票',
          desc: '随时退 官方不可取消',
          url: '/PlayReserve'
        },{
          src: require('../../assets/images/yuding2.jpg'),
          title: '夜场票',
          desc: '随时退 官方不可取消',
          url: '/PlayReserve'
        },{
          src: require('../../assets/images/yuding1.jpg'),
          title: '白场票',
          desc: '随时退 官方不可取消',
          url: '/PlayReserve'
        },{
          src: require('../../assets/images/yuding1.jpg'),
          title: '白场票',
          desc: '随时退 官方不可取消',
          url: '/PlayReserve'
        },{
          src: require('../../assets/images/yuding2.jpg'),
          title: '夜场票',
          desc: '随时退 官方不可取消',
          url: '#####'
        },{
          src: require('../../assets/images/yuding1.jpg'),
          title: '白场票',
          desc: '随时退 官方不可取消',
          url: '/PlayReserve'
        },{
          src: require('../../assets/images/yuding1.jpg'),
          title: '白场票',
          desc: '随时退 官方不可取消',
          url: '/PlayReserve'
        },],
        baseList : [{
          url: 'javascript:',
          img: require('../../assets/images/wanslide.jpg'),
        },{
          url: 'javascript:',
          img: require('../../assets/images/wanslide.jpg'),
        },{
          url: 'javascript:',
          img: require('../../assets/images/wanslide.jpg'),
        }
        ],
      };
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
  .raty-ft /deep/ .vux-rater a{
    width: 14px!important;
    line-height: 1!important;
    height: 14px!important;
    font-size: 0!important;
  }
  .raty-ft /deep/ .star{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(../../assets/images/star_off.png);
    background-size: contain;
  }
  .raty-ft /deep/ .is-active .star{
    background-image: url(../../assets/images/star_on.png);
  }
  .kc-panel{
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 10px 0px rgba(0,101,255,0.04);
    border-radius:8px;
    margin-bottom: 10px;
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
    font-size: 16px;
  }
  .flex-link img{
    width: 22px;
    height: 22px;
  }
  .page-title{
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .kc-panel .weui-cell{
    padding: 15px;
    font-size: 16px;
  }
  .kc-panel /deep/ .list-flexs{
    padding-right: 15%;
  }
  .raty-cell{
    text-align: center;
    border: 1px solid #FFC800;
    border-radius: 4px;
    margin-left: 10px;
  }
  .raty-ft{
    padding:4px;
    line-height:1;
  }
  .raty-body{
    background-color: #FFC800;
    padding: 10px 0;
    line-height: 1;
    color: #222222;
  }
  .raty-num{
    font-size: 20px;
  }
  .comment-item{
    font-size: 12px;
    margin-top: 4px;
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
  .nav-address{
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
    background-color: #FFC800;
    font-size: 16px;
    line-height: 30px;
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
    max-width: 80px;
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
</style>
