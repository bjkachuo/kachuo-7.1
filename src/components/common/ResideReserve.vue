<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="form-panel">
        <div class="form-body">
          <div class="grid-header">
            <div class="grid-title">{{this.$route.query.goodname}}</div>
            <div class="grid-more">房型详情</div>
          </div>
          <div class="grid-days">入住({{this.liveData}})/离店({{this.leaveData}})共{{this.dayNum}}晚</div>
          <div class="grid-attr">{{this.$route.query.isMorning}} 大床 {{this.$route.query.isWindow}}</div>
          <div class="grid-footer">该订单支付成功后不可取消或者变更</div>
        </div>
      </div>
      <div class="form-panel">
        <div class="form-cells">
          <div class="form-header">入住信息</div>
          <popup-picker
            class="pickOne"
            title="房间数/间"
            :data="menus2"
            v-model="roomNum"
            @on-show="onShow"
            @on-hide="onHide"
            @on-change="onChange"
            placeholder="请选择"
          ></popup-picker>

          <!-- <cell>
            <template slot="icon">
              <div class="room-text" style="margin-right: 15px;">房间数</div>
            </template>
            <template slot="after-title">
              <div class="room-value">{{roomValue}}</div>
            </template>
            <template slot="default">
              <div class="less-more">仅剩{{this.$route.query.total}}间了</div>
            </template>
          </cell>-->

          <x-input
            title="入住人"
            placeholder="填写真实入住人姓名"
            is-type="china-name"
            type="text"
            v-model="name"
          ></x-input>
          <x-input
            title="手机号"
            placeholder="用于接收预订信息"
            :max="13"
            is-type="china-mobile"
            v-model="phone"
          ></x-input>
        </div>
      </div>
      <div class="form-panel">
        <checklist label-position="left" :options="checklist"></checklist>
      </div>
      <div class="form-panel">
        <!-- <cell is-link title="发票信息" :value="fapvalue" @click.native="infoClick"></cell> -->
        <popup-picker
          class="pickTwo"
          title="发票信息"
          :data="menus"
          v-model="invoice"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          placeholder="请选择"
        ></popup-picker>
      </div>
    </div>
    <div class="btm-bar">
      <div class="btm-price">
        实付
        <span class="price">
          ￥
          <i>{{this.endPrice}}</i>
        </span>
      </div>
      <x-button link="/ReserveResult" @click.native="submit">立即支付</x-button>
    </div>
    <!-- <actionsheet v-model="show1" :menus="menus"  @on-click-menu="Click" show-cancel></actionsheet>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="roomSelect" show-cancel></actionsheet>-->
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import {
  Cell,
  XButton,
  XInput,
  XTextarea,
  Checklist,
  Actionsheet,
  PopupPicker
} from "vux";
import { orderReside } from "@/servers/api.js";

export default {
  props: [""],
  data() {
    return {
      // roomValue: "1间房",
      // fapvalue: "不需要发票",
      checklist: ["可用100积分抵用100元"],
      TitleObjData: {
        titleContent: "提交订单",
        showLeftBack: true,
        showRightMore: false
      },
      // numvalue: "",
      // tvalue: "",
      // show1: false,
      // show2: false,
      //选择房间数
      menus2: [["1", "2", "3", "4", "5", "6"]],
      //选择发票
      menus: [["开发票", "不需要发票"]],
      //实付价格
      scorePrice: [],
      //房间数
      roomNum: [],
      //发票信息
      invoice: [],
      //姓名
      name: "",
      //手机号
      phone: "",
      //商品id
      storeId: "",
      //商家id
      businessId: "",
      //价格
      price: "",
      //入住日期
      liveData: "",
      //离店日期
      leaveData: "",
      dayNum:"",
      endPrice:"",
    };
  },
  beforeMount() {
  },
  mounted() {
    console.log(this.$route.query);
    this.storeId = this.$route.query.id;
    this.businessId = this.$route.query.businessId;
    this.price = this.$route.query.price;
    console.log(this.storeId);
    console.log(this.businessId);
    //取出入住时间
    // this.liveData = JSON.parse(sessionStorage.getItem("liveData"));
    // //取出离店时间
    // this.leaveData = JSON.parse(sessionStorage.getItem("leaveData"));
    // console.log(this.liveData);
    // console.log(this.leaveData);
    //////
    //取出入住时间
    this.liveData = JSON.parse(sessionStorage.getItem("liveData"));
    //取出离店时间
    this.leaveData = JSON.parse(sessionStorage.getItem("leaveData"));
    console.log(this.liveData);
    console.log(this.leaveData);
    //计算入住天数
    function DateMinus(date1, date2) {
      //date1:小日期   date2:大日期
      var sdate = new Date(date1);
      var now = new Date(date2);
      var days = now.getTime() - sdate.getTime();
      var day = parseInt(days / (1000 * 60 * 60 * 24));
      return day;
    }
    let arg = DateMinus(this.liveData,this.leaveData);
    console.log(arg);
    this.dayNum = arg;
    console.log(this.dayNum);
    //最终价格
    this.endPrice = this.price * this.dayNum;
    console.log(this.roomNum)
  },
  methods: {
    //积分抵扣
    // integral(value, label) {
    //   // this.$http
    //   //   .post(
    //   //     "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.shop_integral_itf&type="+this.$route.query.type+"&money="+this.$route.query.price
    //   //   )
    //   //   .then(({ data }) => {
    //   //     console.log(data);
    //   //     this.scorePrice = data.data;
    //   //     console.log(this.scorePrice)
    //   //   });
    //   console.log(value, label);
    // },
    url(link) {
      this.$router.push(link);
    },
    // Click(key, item) {
    //   console.log(key, item);
    //   this.fapvalue = item;
    // },
    // infoClick() {
    //   this.show1 = !this.show1;
    // },
    // roomClick() {
    //   this.show2 = !this.show2;
    // },
    // roomSelect(key, item) {
    //   console.log(key, item);
    //   this.roomValue = item;
    // },
    //支付提交订单
    submit() {
      orderReside({
        id: this.businessId,
        type: 4,
        mobile: this.phone,
        price: this.endPrice,
        realname: this.name,
        goods: [this.storeId, this.roomNum.toString()]
      }).then(({ data }) => {
        console.log(data);
        
      });
    },
    //选择器显示时触发
    onShow() {
      console.log("on show");
      
    },
    //选择器关闭时触发
    onHide(type) {
      console.log("on hide", type);
    },
    onChange(val) {
      console.log(this.roomNum)
      this.endPrice = this.roomNum[0] * this.price * this.dayNum;
      
      
    }
  },

  components: {
    Header,
    Cell,
    XInput,
    XButton,
    XTextarea,
    Checklist,
    Actionsheet,
    PopupPicker
  },
  computed: {
    conHei() {
      return {
        height: document.documentElement.clientHeight - 45 + "px"
      };
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  margin-bottom: 45px;
  padding: 15px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.form-panel {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
}
.form-body {
  padding: 15px;
}
.form-header {
  padding: 15px;
  font-weight: bold;
  line-height: 1;
  font-size: 16px;
}
.grid-footer {
  font-size: 12px;
  color: #999;
}
.grid-days {
  margin-bottom: 5px;
}
.weui-cell:before {
  right: 15px;
}
.form-panel /deep/ .weui-cell {
  padding: 15px;
  font-size: 16px;
}
.form-panel /deep/ .weui-cells_checkbox:before {
  display: none;
}
.form-panel /deep/ .weui-cells_checkbox:after {
  display: none;
}
.grid-header {
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
  margin-bottom: 5px;
}
.grid-title {
  font-size: 18px;
  font-weight: bold;
}
.grid-more {
  position: relative;
  padding-right: 10px;
  font-size: 16px;
  line-height: 1;
}
.grid-more:after {
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
.less-more {
  position: relative;
  padding-right: 20px;
  font-size: 14px;
  line-height: 1;
  color: #3976ff;
}
.less-more:after {
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
.btm-bar {
  position: fixed;
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
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  height: 55px;
}
.btm-bar .weui-btn_default,
.btm-bar .weui-btn_default:active {
  background-color: #3987ff;
  height: 55px;
  width: 120px;
  color: #ffffff;
  border: 0;
  border-radius: 0;
  margin: 0;
}
.btm-price {
  padding: 0 15px;
  font-size: 16px;
}
.btm-price .price {
  font-weight: bold;
}
.btm-price .price i {
  font-style: normal;
  font-size: 20px;
}
.form-panel
  /deep/
  .weui-cells_checkbox
  .weui-check:checked
  + .vux-checklist-icon-checked:before {
  color: #3987ff;
}
</style>
