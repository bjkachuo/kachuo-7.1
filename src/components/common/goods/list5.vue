<template>
  <div>
    <div class="goods-list">
      <div class="list-tt">盘菜</div>
      <div class="lists">
        <cell>
          <img slot="icon" class="order-pic" src="../../../assets/images/dingdan.png">
          <template slot="after-title">
            <div class="cell-title">青椒牛肉</div>
            <div class="list-foot">
              <div class="cell-price"><span>￥</span>1.5</div>
              <x-number width="30px" min="0" class="x-number" v-model="roundValue" button-style="round"></x-number>
            </div>
          </template>
        </cell>
        <cell>
          <img slot="icon" class="order-pic" src="../../../assets/images/dingdan.png">
          <template slot="after-title">
            <div class="cell-title">青椒牛肉</div>
            <div class="list-foot">
              <div class="cell-price"><span>￥</span>1.5</div>
              <x-number width="30px" min="0" class="x-number" v-model="roundValue" button-style="round"></x-number>
            </div>
          </template>
        </cell>
        <cell>
          <img slot="icon" class="order-pic" src="../../../assets/images/dingdan.png">
          <template slot="after-title">
            <div class="cell-title">青椒牛肉</div>
            <div class="list-foot">
              <div class="cell-price"><span>￥</span>1.5</div>
              <x-number width="30px" min="0" class="x-number" v-model="roundValue" button-style="round"></x-number>
            </div>
          </template>
        </cell>
        <cell>
          <img slot="icon" class="order-pic" src="../../../assets/images/dingdan.png">
          <template slot="after-title">
            <div class="cell-title">青椒牛肉</div>
            <div class="list-foot">
              <div class="cell-price"><span>￥</span>1.5</div>
              <x-number width="30px" min="0" class="x-number" v-model="roundValue" button-style="round"></x-number>
            </div>
          </template>
        </cell>
      </div>
    </div>
  </div>
</template>


<script>
  import {Cell,XButton,XInput,Group,XNumber} from 'vux'
  export default {
    methods: {
      url(link) {
        this.$router.push(link);
      },
      onClick(){
        console.log()
      }
    },
    data() {
      return {
      };
    },
    components: {
      Cell,
      XInput,
      XButton,
      Group,
      XNumber
    },
  };
</script>

<style lang='css' scoped>
  .goods-list{
    padding: 20px 15px;
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);
    border-radius:8px 8px 0px 0px;
  }
  .order-pic{
    display: block;
    width: 55px;
    height: 55px;
    border-radius: 4px;
    margin-right: 10px;
  }
  .list-foot{
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
  .cell-price{
    color: #FF3939;
    font-size: 14px;
  }
  .cell-title{
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 15px;
  }
  .cell-number{
    color: #999999;
    font-size: 14px;
    line-height: 1.2;
  }
  .lists .list-tt{
    font-size: 16px;
    line-height: 1.2;
  }
  .lists .weui-cell{
    padding: 15px 0;
  }
  .lists .weui-cell:before{
    display: none;
  }
  .lists .x-number{
    padding: 0;
  }
  .lists .x-number:before{
    display: none;
  }
  .lists /deep/ .vux-number-round .vux-number-selector-sub,
  .lists /deep/ .vux-number-round .vux-number-selector-plus{
    border: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .lists /deep/ .vux-number-round .vux-number-selector-sub{
    background-image: url(../../../assets/images/jian.png);
  }
  .lists /deep/ .vux-number-round .vux-number-selector-plus{
    background-image: url(../../../assets/images/jia.png);
  }
  .lists /deep/ .vux-number-disabled{
     display: none;
   }
  .lists /deep/ .vux-number-round .vux-number-selector-sub *,
  .lists /deep/ .vux-number-round .vux-number-selector-plus *{
    display: none;
  }
</style>
