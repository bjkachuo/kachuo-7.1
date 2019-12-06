<template>
    <div class="detile-waper">
      <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" :hideApp="1"></Header>
      <div :style="conSty" class="detile">
        <div class="list-item">
          <div class="list-item-top">
            <div class="list-item-top-left">
              <img alt="" :src="img">
            </div>
            <div class="list-item-top-right">
              <div class="title-box">
                <div class="title">成都麻辣串(蓬莱阁店)代金券</div>
              </div>
              <div class="list-item-top-right-bottom">
                <div>单次可叠加2张</div>
                <div class="date">数量x1</div>
                <div class="total"><span class="price">￥90</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="code-box">
          <div class="dd">向商家出示卷码或二维码即可消费</div>
          <div class="code"></div>
          <div class="coiling-code">卷码：5132 4567 2132</div>
        </div>
        <div class="information">
          <div class="head">订单信息</div>
          <div class="cell"><span class="label">订单编号：</span><span class="in">1211093871</span></div>
          <div class="cell"><span class="label">付款时间：</span><span class="in">2019-11-28</span></div>
        </div>
      </div>
      <div class="bottom-btn">
        <div class="btn">申请退款</div>
        <div class="btn">联系商家</div>
      </div>

    </div>
</template>

<script>
  import Header from "@/components/common/Header";

    export default {
        name: "detile",

        components:{ Header },

        data(){
          return{
            TitleObjData: {
              titleContent: "代金券详情",
              showLeftBack: true,
              showRightMore: false
            },
            img:require("@/assets/images/indexImg.jpeg")
          }
        },

      computed: {
        conSty() {
          return document.documentElement.clientHeight - 90 + "px"
        },
      },
    }
</script>

<style scoped lang="less">
  .detile-waper{
    background-color: #f5f5f5;
  }
  .list-item{
    margin: 10px 15px;
    border-radius: 8px;
    padding: 15px;
    background-color: #fff;
    .list-item-top{
      display: flex;
      .list-item-top-left{
        overflow: hidden;
        border-radius: 4px;
        width: 74px;
        height: 74px;
      }
      .list-item-top-right{
        position: relative;
        flex: 1;
        .title-box{
          margin-left: 10px;
          .title{
            font-size: 14px;
            font-weight: 500;
            color: #222;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
        .list-item-top-right-bottom{
          margin-left: 10px;
          font-size: 10px;
          color: #999;
          .date{
            margin-top: 15px;
          }
        }
        .total{
          color: #222;
          position: absolute;
          display:table-cell;
          vertical-align:bottom;
          right: 0;
          bottom: 0;
          .price{
            font-size: 18px;
            color: #ff3300;
          }
        }
      }
    }
  }
  .detile{
    margin-top: 56px;
  }
  .code-box{
    padding: 20px 0;
    border-radius: 8px;
    margin: 10px 15px;
    background-color: #fff;
    .dd{
      color: #999;
      font-size: 10px;
      text-align: center;
    }
    .code{
      width: 105px;
      height: 105px;
      margin: 18px auto 15px;
    }
    .coiling-code{
      text-align: center;
    }
  }
  .information{
    border-radius: 8px;
    margin: 10px 15px;
    background-color: #fff;
    padding-bottom: 1px;
    .head{
      margin: 0 15px;
      font-size: 14px;
      color: #222222;
      border-bottom: 1px solid #e5e5e5;
      line-height: 40px;
    }
    .cell{
      margin: 15px;
      .label{
        color: #999;
      }
      .in{
        color: #222;
      }
    }
  }
  .bottom-btn{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: #fff;
    .btn{
      float: right;
      margin-right: 15px;
      line-height: 33px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-top: 8px;
      padding: 0 18px;
    }
  }
</style>
