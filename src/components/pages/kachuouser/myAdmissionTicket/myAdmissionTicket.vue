<template>
  <div class="order-list-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" :hideApp="1"></Header>
    <tab active-color="#222" :line-width="2" default-color="#999" bar-active-color="#3976FF" v-model="index" custom-bar-width="30px" :scroll-threshold="6">
      <tab-item class="vux-center" v-for="(item, index) in tabList" :key="index" :class="{active:index == iscur}">
        <div class="tab-item-text">{{item.name}}</div>
      </tab-item>
    </tab>
    <swiper v-model="index" :height="conSty" :show-dots="false" :threshold="150">
      <swiper-item v-for="(item, index) in tabList" :key="index">
        <scroller scrollbar-y>
          <div class="swiper-item">
            <div class="list-item">
              <div class="list-item-top">
                <div class="list-item-top-left">
                  <img alt="" :src="img">
                </div>
                <div class="list-item-top-right">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </scroller>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { myTicketOrdersList } from "@/servers/api";
  import { timeTodate } from "@/assets/js/tools";
  import { Tab, TabItem, Cell, XButton,Swiper, SwiperItem } from "vux";

  export default {

    name:'myAdmissionTicket',

    data() {
      return {
        TitleObjData: {
          titleContent: "门票订单",
          showLeftBack: true,
          showRightMore: false
        },
        tabList: [{name:"全部",id:''}, {name:'待支付',id: 1},{name:"待出行",id:2}, {name:"退款中",id:5}, {name:"已使用",id:3}, {name:"已取消",id:6}],
        index: 0,
        iscur: 0,
        dataList: [],
        getData: [],
        bigList: [],
        currentTab:{},

        img: require("@/assets/images/indexImg.jpeg")
      };
    },

    components: {
      Header,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Cell,
      XButton
    },

    computed: {
      conSty() {
        return document.documentElement.clientHeight - 90 + "px"
      }
    },

    mounted() {
        this.getStatusData()
    },

    methods: {
      getStatusData(){
        myTicketOrdersList({ Status:this.tabList[1].id ,PageSize : 10,	PageIndex:0}).then(res=>{
          console.log(res);
          // this.dataList.push()
        })
      }
    },

    watch: {
      index:function (to) {

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

  .list-item{
      margin: 10px 15px;
      border-radius: 8px;
      border:1px solid rgba(229,229,229,1);
      padding: 15px;
      background-color: #fff;
      .list-item-top{
        .list-item-top-left{
          width: 74px;
          height: 74px;
        }
      }
  }
</style>
