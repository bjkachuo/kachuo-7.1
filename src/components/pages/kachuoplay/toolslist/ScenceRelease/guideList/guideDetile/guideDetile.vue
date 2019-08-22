<template>
  <div>
    <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <scroller lock-x  height="-46" class="detile-content">
      <div>
        <div class="img">
          <div class="fabulous">
            <i></i>
            <span>22</span>
          </div>
        </div>
        <div class="detile">
          <div class="top">
            <div class="name">奔波儿灞</div>
            <div class="evaluate">4.0分&nbsp;&nbsp;17人评价</div>
          </div>
          <start :size="12" class="start" :score="3"></start>
          <div class="charging">计费方式：每小时50元，3小时起订</div>
        </div>
        <div class="introduce">
          <div class="title">导游介绍</div>
          <div class="text" :class="{'nzk': !zk}">
            “资质齐全，价格公开透明”“资质齐全，价格公开透明”“资质齐全，价格公开透明”“资质齐全，价格公开透明”“资质齐全，价格公开透明”“资质齐全，价格公开透明”
          </div>
          <div class="btn-menu" @click="zk = !zk" >{{zk?'收起':'展开'}}</div>
        </div>
        <div class="yuyue">
          <i></i>
          <span>预约导游</span>
        </div>
        <div style="height: 10px;"></div>
      </div>
    </scroller>
  </div>

</template>

<script>
  import Header from "@/components/common/Header";
  import start from '@/components/common/start/start'
  import { Scroller } from 'vux'
    export default {
        name: "guideDetile",

        components:{ Header, Scroller, start },

        data(){
          return{
            TitleObjData: {
              titleContent: "导游详情",
              showLeftBack: true,
              showRightMore: false
            },
            zk:false
          }
        }
    }
</script>

<style scoped lang="less">

  .detile-content{
    overflow: hidden;
    position: relative;
    background-color: #F5F5F5;
    .img{
      width: 92%;
      margin: 10px auto;
      padding-top: 62.3%;
      background-color: #0065FF;
      border-radius: 8px;
      position: relative;
      .fabulous{
        line-height: 30px;
        padding: 0 22px;
        position: absolute;
        right: 15px;
        bottom:15px;
        background-color: #fff;
        box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
        border-radius: 15px;
        i{
          width: 14px;
          height: 13.5px;
          display: inline-block;
          background-image: url("./zan.png");
          background-size: 100% 100%;
          position: relative;
          top: 1px;
        }
      }
    }
    .detile{
        width: 92%;
        margin: 10px auto;
        background-color: #fff;
        padding:20px 15px;
        border-radius: 8px;
        .top{
          overflow: hidden;
          .name{
            font-weight:800;
            font-size: 20px;
            color: #222;
            float:left;
            line-height: 1;
          }
          .evaluate{
            color: #999;
            font-size: 14px;
            float: right;
          }
        }
        .start{
          margin: 13px 0;
        }
        .charging{
          color: #222222;
          font-size: 14px;
          line-height: 25px;
          border-radius:12.5px;
          background-color: #F5F5F5;
          display: inline-block;
          padding: 0 15px;
        }

    }
    .introduce{
      width: 92%;
      margin: 10px auto;
      background-color: #fff;
      padding:20px 15px;
      border-radius: 8px;
      .title{
        font-size: 16px;
        color: #222;
        font-weight: 800;
      }
      .text{
        margin-top: 10px;
      }
      .nzk{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .btn-menu{
        font-weight: bold;
        font-size: 16px;
        color: #222;
        text-align: right;
        margin-top: 9px;
      }
    }
    .yuyue{
      width: 92%;
      height:50px;
      margin: 10px auto;
      line-height: 50px;
      background:rgba(57,118,255,1);
      border-radius:8px;
      color: #fff;
      text-align: center;
    }
  }
</style>
