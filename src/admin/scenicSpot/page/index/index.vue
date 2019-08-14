<template>
  <div>
    <div class="tab-item-play-header-title">
      <div class="location-icon text-align-center">
        <x-icon type="ios-arrow-left" size="24" @click="back"></x-icon>
      </div>
      <!--    <div class="search-icon text-align-center" >输入作品/作者/景区</div>-->
      <div class="message-icon text-align-center" >
        <!-- <span class="iconfont iconxiaoxi"></span> -->
      </div>
    </div>
    <div class="banner">
      欢迎来到卡戳APP景区管理后台~
    </div>
    <div class="content">
      <div class="title">景区管理</div>
      <ul>
        <li v-for="item in list">
          <div class="img" @click="routerGo(item.path)"></div>
          <div class="name">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Search } from 'vux'
  export default {
    name: "header",

    data(){
      return{
        scenicName: "",
        list:[{title:'景区信息',path:'/scenicSpot/information'},{title:'景区资讯'},{title:'景区导游'},{title:'景区商城'},{title:'订单管理'},{title:'游客留言'}]
      }
    },

    components:{ Search },

    methods:{
      back() {
        this.$router.goBack();
      },
      routerGo(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="less">
  .tab-item-paly-wrap {
    background: #f5f5f5;
  }
  .tab-item-play-header-title {
    padding-top: 20px;
    width: 100%;
    height: 45px;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background: rgba(0,0,0,0);
  }
  .banner{
    background-image:url("./header.png");
    width: 100%;
    background-size: 100% 100%;
    height: 200px;
    text-align: center;
    line-height: 350px;
    font-size: 12px;
    color: #89BBFF;
  }
  .vux-x-icon {
    fill: #Fff;
  }
  .content{
    .title{
      color: #3C7DFF;
      font-size: 18px;
      font-weight:800;
      padding-left: 15px;
      line-height: 66px;
    }
    ul{
      margin: 0 25px;
      overflow: hidden;
      li{
        float: left;
        width: 30%;
        margin-bottom: 25px;
        margin-right: 5%;
        .img{
          width: 100%;
          padding-bottom:100%;
          height: 0;
          background-image: url("item-icon.png");
          background-size: 100% 100%;
        }
        .name{
          text-align: center;
          font-size: 16px;
          font-weight:500;
          color:rgba(51,51,51,1);
          padding-top: 8px;
        }
      }
      li:nth-child(3n){
        margin-right: 0;
      }
    }
  }
</style>
