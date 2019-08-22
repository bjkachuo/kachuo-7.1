<template>
  <div>
    <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <scroller lock-x  class="list-box">
      <ul>
        <li>
          <div class="img">
            <div class="radius"></div>
          </div>
          <div class="content">
            <div style="overflow: hidden">
              <div class="name">马宝宝</div>
              <div class="detile" @click="goDetile"><i></i>详情</div>
            </div>
            <start :size="15" :score="4"></start>
            <div class="evaluate">17人评价</div>
            <div class="title"><span>“资质齐全，价格公开透明”</span></div>
          </div>

        </li>
      </ul>
    </scroller>

  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import start from '@/components/common/start/start'
  import { Scroller } from 'vux'
  export default {
    name: "dynamic",

    components:{ Header,Scroller ,start},

    data(){
      return{
        TitleObjData: {
          titleContent: "在线导游",
          showLeftBack: true,
          showRightMore: false
        },
      }
    },

    methods:{
      goDetile(){
        this.$router.push('/scencerelease/guideList/guideDetile')
      }
    }
  }
</script>

<style scoped lang="less">
  .list-box{
    overflow: hidden;
    position: relative;
    height: calc(100% - 46px);
    background-color: rgba(245,245,245,1);
    ul{
      li{
          margin: 10px 0;
          border-radius: 8px;
          display: flex;
          background-color: #fff;
          padding: 5px 15px;
          box-shadow:0px 0px 15px 0px rgba(0,101,255,0.16);
          .img{
            width: 120px;
            height: 120px;
            background-color: #0BB20C;
            .radius{
              border-radius: 8px 0 20px 0;
            }
            border-radius: 8px;
          }
        .content{
          overflow: hidden;
          flex: 1;
          margin-left: 15px;
          .name{
            color: #222222;
            font-size: 18px;
            float: left;
            line-height: 38px;
            font-weight: 500;

          }
          .detile{
            font-size: 14px;
            float: right;
            line-height: 34px;
            i{
              display: inline-block;
              position: relative;
              top: 1px;
              left: -2px;
              width: 13px;
              height: 13px;
              background-image: url("./detile.png");
              background-size: 100% 100%;
            }
          }
          .evaluate{
            font-size: 12px;
            margin-top: 9px;
            margin-bottom: 11px;
          }
          .title{
            font-size: 0;
            span{
              display: inline-block;
              font-size: 12px;
              line-height:25px;
              background:rgba(245,245,245,1);
              border-radius:8px
            }
          }
        }

      }
    }
  }

</style>
