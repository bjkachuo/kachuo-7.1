<template>
    <div class="complete-ticket">
      <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="top">
        <x-icon type="ios-checkmark" size="44" style="fill:#27D42B" class="xicon"></x-icon>
        <div style="font-size: 18px;color: #222;">购票成功</div>
        <p class="describe">订单短信将会发送到{{this.$store.state.userLoginInfo.mobile.slice(0,3)+'****'+this.$store.state.userLoginInfo.mobile.slice(7)}}, 点击“查看订单详情”关注订单进度！</p>
        <div class="link" @click="goList">查看订单详情</div>
      </div>
      <div class="bottom">
        <div class="title">蓬莱阁门票成人票</div>
        <div class="date-of-use">
          <span class="label">使用日期</span>
          <span class="time">{{detile.use_data}}&nbsp;&nbsp;{{detile.week}}</span>
          <span class="today">限当日使用</span>
        </div>
        <div class="retreat">
          <span class="label">退票</span>
          <span class="status">{{detile.isRefund ? '可退':'不可退'}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import { getOrdersInfo } from "@/servers/api";

  import Header from "@/components/common/Header";
    export default {
        name: "completeTicket",

        data(){
           return{
             TitleObjData: {
               titleContent: "订单完成",
               showLeftBack: true,
               showRightMore: false
             },
             detile:{}
           }
        },

        components:{ Header },

        methods:{
          goList(){
            this.$router.push('/myAdmissionTicket')
          }
        },

      mounted() {
        alert(this.$route.query.ordersid)
        getOrdersInfo({ordersid:this.$route.query.ordersid}).then(res=>{
          this.detile = res.data
        })
      }


    }
</script>

<style scoped lang="less">
  .complete-ticket{
    background:rgb(229,229,229);
    .top{
      border-radius: 5px;
      margin: 61px 15px 15px;
      background-color: #fff;
      text-align: center;
      padding-bottom: 27.5px;
      .xicon{
        margin-top: 25px;
      }
      .describe{
        width: 64%;
        margin: 5px auto 0;
        font-size: 12px;
        color: #666;
      }
      .link{
        width: 250px;
        border-radius: 22px;
        line-height: 42px;
        border: 1px solid #222;
        margin: 20px auto 0;
        font-size: 14px;
      }
    }
    .bottom{
      border-radius: 5px;
      margin: 15px 15px;
      background-color: #fff;
      font-size: 16px;
      .title{
        text-indent: 16px;
        line-height: 56px;
        border-bottom: 1px solid #E5E5E5;
        color: #222222;
      }
      .date-of-use{
        text-indent: 16px;
        border-bottom: 1px solid #E5E5E5;
        .time{
          padding-left: 25px;
          color: #222;
        }
        .today{
          float: right;
          border-bottom: 1px solid #E5E5E5;
          line-height: 56px;
          font-size: 12px;
          margin-right: 16px;
        }
      }
      .label{
        color: #666;
        line-height: 56px;
      }
      .retreat{
        text-indent: 16px;
        .status{
          padding-left: 25px;
          color: #222;
        }
      }
    }
  }

</style>
