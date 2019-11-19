<template>
  <div class="wrap">
    <x-header :left-options="{showBack: showLeftBack,preventGoBack:true}" @on-click-back="back" slot="header" style="width: 100%;position: absolute;left: 0;top: 0;z-index: 100;font-size: 20px;">
      {{titleContent}}
      <div slot="right">
        <div class="x-txt" v-if="toggle" @click="onEdit()">{{rText}}</div>
        <div class="x-txt" v-if="!toggle" @click="onOver()">{{rText}}</div>
      </div>
    </x-header>
    <div class="normal-content" :style="conHei">
      <div class="cart-panel" v-for="(item,index) in this.ListOne" :key="index">
        <div class="cart-header">
          <span @click="itemChange(item)"><check-icon :value.sync="item.checked" ></check-icon></span>
          <span class="shop-name">{{ item.name }}</span>
        </div>
        <cell v-for="good in item.arr">
          <template slot="icon">
            <span @click="goodsChange(item)"><check-icon :value.sync="good.checked"></check-icon></span>
            <div class="gar-photo">
              <img :src="good.goods_sx.thumb" alt />
            </div>
          </template>
          <template slot="after-title">
            <div class="gar-body">
              <div class="gar-header">
                <div class="gar-title">{{good.goods_sx.title}}</div>
              </div>
              <div class="gar-foot">
                <div class="gar-price">￥<span>{{good.marketprice}}</span></div>
                <inline-x-number :min="0" width="30px" v-model="good.total"></inline-x-number>
              </div>
            </div>
          </template>
        </cell>
      </div>
    </div>
    <div class="cart-tabbar">
      <label class="check-box">
        <div>
          <check-icon :value.sync="checkAll"></check-icon>
        </div>
        <span>全选</span>
      </label>
      <div class="total-price" v-if="toggle">
        合计:
        <span>{{this.price}}</span>
      </div>
      <div class="button" v-if="toggle">去结算</div>
      <div class="button del-button" v-if="!toggle">删除</div>
    </div>
  </div>
</template>

<script>
import { ShopList, goodsBucketRecomm, goodsBucketSubmit } from "@/servers/api";
import {
  XHeader,
  Tabbar,
  TabbarItem,
  Cell,
  XButton,
  InlineXNumber,
  CheckIcon
} from "vux";
export default {
  name: "",
  props: [""],
  data() {
    return {
      toggle: true,
      titleContent: "购物车",
      showLeftBack: true,
      rText: "编辑",
      checkAll: true,
      ListOne: [],
      num: "",
    };
  },
  methods: {
    itemChange(item){
      console.log(item);
      let itemFlag = item.checked
      this.goodsAllChecked(item,itemFlag)
      this.itemIsAllChecked()
    },
    goodsChange(item){
      item.checked = this.goodsIsAllChecked(item)
      this.itemIsAllChecked()
    },
    goodsIsAllChecked(item){
      let flag = true
      item.arr.forEach(good=>{
        good.checked == false ? flag = false : null
      })
      return flag
    },
    itemIsAllChecked(){
      let flag = true
      this.ListOne.forEach(item=>{
        item.checked == false ? flag = false : null
      })
      this.checkAll = flag
    },
    goodsAllChecked(item,flag){
      item.arr.forEach(good=>{
        good.checked = flag
      })
    },


    onEdit() {
      this.rText = "完成";
      this.toggle = !this.toggle;
    },
    back() {
      this.$router.go(-1);
    },
    onOver() {
      this.rText = "编辑";
      this.toggle = !this.toggle;
    },
    getDataList() {
      ShopList({ page: 1 })
        .then(res => {
          console.log(res);
          let obj = {}

          res.data.result.forEach(item=>{
            item.checked = true
            obj[item.goods_sx.goods_owner] ? obj[item.goods_sx.goods_owner].arr.push(item) : obj[item.goods_sx.goods_owner] = { name:item.goods_sx.goods_owner,arr:[],checked:true }
          })

          let arr = Object.values(obj)
          //模拟数据
          arr.push({
                arr:[{
                      createtime: "1563240493",
                      goods_sx:{
                        decr_integral_pre: "20",
                        decr_max_rate: "5",
                        goods_owner: "微商城",
                        incr_integral_pre: "20",
                        marketprice: "570.00",
                        scenic_id: "0",
                        thumb: "https://core.kachuo.com/attachment/images/5/2019/10/yL1X6MR1mrRFvQxrzpR13uMmK7W103.jpg",
                        title: "青花手绘盖碗-仙",
                        type: "1"
                      },
                      integral:{
                        decr_integral: 0,
                        decr_money: 0,
                        incr_integral: 13,
                        real_price: 268
                      },
                      goodsid: "2754",
                      id: "803",
                      marketprice: "268.00",
                      merch_pcate: "38",
                      total: "1",
                      checked:true,
                }],
                checked:true,
                name:'前端模拟数据'
              })
          console.log('数组',arr);

          this.ListOne = arr
          this.ListOne.forEach(item=>{
            item.arr.forEach(good=>{
              good.total = 1
            })
          })



          console.log("购物车列表", this.ListOne);

        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    XHeader,
    XButton,
    Tabbar,
    TabbarItem,
    Cell,
    InlineXNumber,
    CheckIcon
  },
  mounted() {
    this.$nextTick(() => {
      console.log(1);
      this.getDataList();
    });
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 90 + "px" };
    },
    price(){
        let price = 0
        this.ListOne.forEach(item=>{
          item.arr.forEach(good=>{
            if(good.checked == true){
              price += good.marketprice * good.total
            }
          })
        })
        return price
    }
  },

};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px 0;
  box-sizing: border-box;
}
.cart-tabbar {
  background-color: #ffffff;
  position: absolute;
  padding: 10px 15px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
.cart-tabbar .button {
  width: 100px;
  height: 35px;
  line-height: 35px;
  background-color: #3976ff;
  border-radius: 35px;
  color: #ffffff;
  text-align: center;
  float: right;
}
.cart-tabbar .del-button {
  color: #3976ff;
  background-color: transparent;
  box-shadow: 0 0 0 1px #3976ff;
}
.cart-tabbar .check-box {
  float: left;
}
.check-box {
  padding: 5px 0;
  font-size: 16px;
}
.check-box /deep/ .weui-icon {
  margin-top: -3px;
}
.check-box /deep/ * {
  display: inline-block;
  vertical-align: middle;
}
.check-box /deep/ .vux-check-icon > .weui-icon-success:before,
.check-box /deep/ .vux-check-icon > .weui-icon-success-circle:before {
  color: #3976ff;
}
.cart-tabbar .total-price {
  float: left;
  line-height: 35px;
  font-size: 14px;
  margin-left: 20px;
}
.cart-tabbar .total-price span {
  font-weight: bold;
  font-size: 16px;
}

.x-txt {
  color: #222;
  font-size: 16px;
}
.cart-panel {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 15px 0px rgba(0, 101, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
  padding: 15px 0;
}
.cart-panel .weui-cell {
  padding: 8px 15px;
}
.gar-photo {
  width: 90px;
  height: 90px;
  margin-right: 15px;
}
.gar-photo img {
  width: 90px;
  height: 90px;
  border-radius: 4px;
}
.gar-body {
  height: 90px;
  line-height: 1.4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  flex-direction: column;
}
.gar-foot {
  position: relative;
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
.cart-panel /deep/ .weui-cell__hd {
  position: relative;
  padding-left: 30px;
}
.cart-panel /deep/ .weui-cell__hd .vux-check-icon {
  position: absolute;
  left: -5px;
  top: 50%;
  margin-top: -11px;
}
.cart-panel /deep/ .vux-check-icon > .weui-icon-success:before,
.cart-panel /deep/ .vux-check-icon > .weui-icon-success-circle:before {
  color: #3976ff;
}
.cart-panel /deep/ .vux-number-selector {
  width: 25px;
  height: 25px;
  padding: 0;
  text-align: center;
  line-height: 25px;
  background-color: #ebeef5;
  border-radius: 3px;
  margin: 0;
}
.cart-panel /deep/ .vux-number-selector svg {
  fill: #999;
}
.cart-panel /deep/ .vux-number-input {
  height: 25px;
  line-height: 25px;
  border: 0;
}
.cart-panel /deep/ .vux-inline-x-number {
  padding: 1px;
  border: 1px solid #ebeef5;
  border-radius: 3px;
}
.weui-cell:before {
  display: none;
}
.cart-header {
  padding: 0 10px;
  margin-bottom: 10px;
}
.cart-header .shop-name {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding-right: 20px;
  background: url(./rt_arrow2.png) right center no-repeat;
  background-size: 12px 12px;
}
.gar-price {
  color: #ff3939;
  font-size: 12px;
}
.gar-price span {
  font-size: 15px;
  font-weight: bold;
}
</style>
