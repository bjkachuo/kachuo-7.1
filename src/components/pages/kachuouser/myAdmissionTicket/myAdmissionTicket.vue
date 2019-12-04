<template>
  <div class="order-list-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" :hideApp="1"></Header>
    <tab active-color="#222" :line-width="2" default-color="#999" bar-active-color="#3976FF" v-model="index" custom-bar-width="30px" :scroll-threshold="6">
      <tab-item class="vux-center" v-for="(item, index) in tabList" :key="index" :class="{active:index == iscur}">
        <div class="tab-item-text">{{item.name}}</div>
      </tab-item>
    </tab>
    <swiper v-model="index" :height="conSty" :show-dots="false" :threshold="150" >
      <swiper-item v-for="(item, index) in data" :key="index">
        <scroller scrollbar-y @on-scroll-bottom="onScrollBottom" ref="scroll" :height="conSty" :scroll-bottom-offset="200" >
          <div class="swiper-item">
            <div class="list-item" v-for="(item2,index2) in item" :key="index+'_'+index2">
              <div class="list-item-top">
                <div class="list-item-top-left">
                  <img alt="" :src="img">
                </div>
                <div class="list-item-top-right">
                  <div class="title-box">
                    <div class="title">{{item2.TicketName}}</div>
                    <div class="status">{{Status[item2.Status]}}</div>
                  </div>
                  <div class="list-item-top-right-bottom">
                    <div>成人票x{{item2.TotalNum}}</div>
                    <div class="date">游玩日期：{{item2.OrdersDate}}</div>
                    <div class="total"><span>总计</span><span class="price">￥{{item2.Price}}</span></div>
                  </div>
                </div>
              </div>
              <div class="border-box" v-if="item2.Status == 1">
                <div class="btn-menu" @click="refund">申请退款</div>
              </div>
            </div>
          </div>
        </scroller>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import axios from "axios";
  import Header from "@/components/common/Header";
  import { myTicketOrdersList } from "@/servers/api";
  import { timeTodate } from "@/assets/js/tools";
  import { Tab, TabItem, Cell, XButton,Swiper, SwiperItem,Scroller } from "vux";

  export default {

    name:'myAdmissionTicket',

    data() {
      return {
        TitleObjData: {
          titleContent: "门票订单",
          showLeftBack: true,
          showRightMore: false
        },
        tabList: [{name:"全部",id:'',PageIndex:1}, {name:'待支付',id: 1,PageIndex:1},{name:"待出行",id:2,PageIndex:1}, {name:"已使用",id:3,PageIndex:1},{name:"退款中",id:4,PageIndex:1},{name:"已取消",id:5,PageIndex:1}],
        index: 0,
        iscur: 0,
        dataList: [],
        getData: [],
        bigList: [],
        currentTab:{},
        Url:'https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.ticket.orders_list',
        img: require("@/assets/images/indexImg.jpeg"),
        data:[[],[],[],[],[],[]],
        Status: {
          1:'待支付',
          2:'待出行',
          3:'已使用',
          4:'退款中',
          5:'已取消',
        },
        loadingFlag:true
      };
    },

    components: {Header, Tab, TabItem, Swiper, SwiperItem, Cell, Scroller, XButton},

    computed: {
      conSty() {
        return document.documentElement.clientHeight - 90 + "px"
      },
    },

    mounted() {
        this.getStatusData()
    },

    methods: {
      getStatusData(){
        if(this.data[this.index].length !=0 ) return
        axios.post(this.Url, { Status:this.tabList[this.index].id ,PageSize : 10,	PageIndex:this.tabList[this.index].PageIndex }, {timeout: 10000, headers: {"Content-Type": "multipart/form-data", Authorization: '9daf9189546b57613ba56bc2a8e7f41e'}})
          .then(res => {
            res.data.data.Data.OrdersList.forEach(item=>{
              this.data[this.index].push(item)
            })
            this.$nextTick(()=>{
              this.$refs.scroll[this.index].reset()
              this.loadingFlag = true
            })
          })
          .catch(err => {
            console.log(err);
          });
      },

      loadMore(){
        axios.post(this.Url, { Status:this.tabList[this.index].id ,PageSize : 10,	PageIndex:this.tabList[this.index].PageIndex }, {timeout: 10000, headers: {"Content-Type": "multipart/form-data", Authorization: '9daf9189546b57613ba56bc2a8e7f41e'}})
          .then(res => {
            res.data.data.Data.OrdersList.forEach(item=>{
              this.data[this.index].push(item)
            })
            this.$nextTick(()=>{
              this.$refs.scroll[this.index].reset()
              this.loadingFlag = true
            })
          })
          .catch(err => {
            console.log(err);
          });
      },

      onScrollBottom(){
        console.log(1);
        if(this.loadingFlag){
          this.loadingFlag = false
          this.tabList[this.index].PageIndex ++
          this.loadMore()
        }
      },
      refund(){
        this.$router.push()
      }
    },

    watch: {
      index:function (to) {
        this.getStatusData()
      }
    }
  };
</script>
<style lang='less' scoped>
  .order-list-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background:rgba(245,245,245,1);
  }
  .vux-tab {
    .vux-tab-item {
      background: none;
    }
  }
  .vux-tab-item.vux-tab-selected {
    font-size: 16px;
    font-weight: bold;
  }
  .vux-tab-wrap{
    margin-top: 46px;
    /deep/ .vux-tab-container {
      box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
    }
  }
  /*背水一战13移速 体力饱满5 六级速度宝石4 帽子衣服速度4 烹饪10 脱兔10*/
  .list-item{
      margin: 10px 15px;
      border-radius: 8px;
      border:1px solid rgba(229,229,229,1);
      padding: 15px 15px 0 15px;
      background-color: #fff;
      .list-item-top{
        display: flex;
        .list-item-top-left{
          width: 74px;
          height: 74px;
        }
        .list-item-top-right{
          position: relative;
          flex: 1;
          .title-box{
              margin-left: 10px;
              height: 44px;
            .title{
              font-size: 14px;
              font-weight: 500;
              color: #222;
              width: 160px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              float: left;
            }
            .status{
              color: #ccc;
              float: right;
              font-size: 12px;
            }
          }
          .list-item-top-right-bottom{
            margin-left: 10px;
            font-size: 10px;
            color: #999;
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
            }
          }
        }
      }
      .border-box{
        border-top: 1px solid #e5e5e5;
        overflow: hidden;
        margin-top: 15px;
        .btn-menu{
          line-height: 25px;
          padding: 0 10px;
          border: 1px solid #e5e5e5;
          display: inline-block;
          float: right;
          margin: 8px 0;
          border-radius: 4px;
        }
      }
  }
</style>
