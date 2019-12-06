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
      <div class="information">
        <x-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder"></x-input>
      </div>

    </div>


  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { XInput,PopupRadio } from 'vux'
  export default {
    name: "refund",

    components:{ Header,XInput,PopupRadio },

    data(){
      return{
        TitleObjData: {
          titleContent: "申请退款",
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



</style>
