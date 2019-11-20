<template>
  <div class="goodsOrder-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="receive" style="overflow:hidden;position: relative;">
      <div style="margin:10px 0px 10px 4.35%;">
        <p style="color: #222222;font-size: 16px;font-weight: bold">收货人：对不对 18728979012</p>
      </div>
      <div style="margin:0 0 0 4.35%;"><p style="color: #222222;font-size: 12px;font-weight: 300;">吉林市二道区城区
        吉林大路2888号卡戳网公司</p></div>
      <div style="width:100%;height: 3px;position:absolute;bottom: 12px;"><img src="./xian.png" alt=""
                                                                               style="width: 100%"></div>
    </div>
    <div class="number">
      <div style=" margin: 10px 0px 0px 4.35%;">
        <p style="color: #222222;font-size:16px;">快递单号</p>
      </div>
      <div>
        <x-input placeholder="请输入快递单号" :show-clear="false"  type="number"></x-input>
      </div>
    </div>
    <div class="f-one">
      <div class="proInformation">
        <div class="tit-wrap">
          <p>商品信息</p>
        </div>
        <div style="width:92%;margin:0 auto 15px;height:1px;background:#E5E5E5;"></div>
        <div class="pro-infor">
          <div class="img-wrap">
            <img src alt/>
          </div>
          <div class="pro-mid">
            <div>
              <p>李几已书法作品蓬莱仙阁赋李 几已书法作品蓬莱</p>
            </div>
            <div style="margin-top:25px;">
              <p>￥600</p>
            </div>
          </div>
          <div class="pro-right">
            <p>x1</p>
          </div>
        </div>
        <div class="pro-infor">
          <div class="img-wrap">
            <img src alt/>
          </div>
          <div class="pro-mid">
            <div>
              <p>李几已书法作品蓬莱仙阁赋李 几已书法作品蓬莱</p>
            </div>
            <div style="margin-top:25px;">
              <p>￥600</p>
            </div>
          </div>
          <div class="pro-right" style="margin-top:38px;">
            <p>x1</p>
          </div>
        </div>
        <cell title="本单金额" class="mid">
          <div>
            <span>¥1200</span>
          </div>
        </cell>
      </div>
    </div>
    <div class="button" @click="confirmGoods"><p>确认发货</p></div>

  </div>
</template>

<script>


    import Header from "@/components/common/Header";
    import {Cell, XInput} from "vux";

    export default {
        data() {
            return {
                TitleObjData: {
                    titleContent: "发货信息",
                    showLeftBack: true,
                    showRightMore: false
                },

            }
        },
        components: {
            Header,
            Cell,
            XInput
        },
        methods: {
            confirmGoods() {
                alert("发货")
            }
        },
    }
</script>

<style lang="css" scoped>
  .goodsOrder-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .receive {
    height: 81px;
    width: 92%;
    margin: 56px auto 0;
    background: #FFFFFF;
    border-radius: 8px;
  }

  .number {
    height: 100px;
    width: 92%;
    margin: 15px auto;
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
  }

  .f-one {
    width: 92%;
    min-height: 45px;
    margin: 0 auto 20px;
    overflow: hidden;
  }

  .proInformation {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
  }

  .tit-wrap {
    margin: 15px 0 14.5px 4.64%;
  }

  .pro-infor {
    width: 92%;
    height: 90px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-around;
  }

  .img-wrap {
    width: 90px;
    height: 90px;
  }

  .img-wrap img {
    width: 100%;
  }

  .pro-mid {
    width: 185.5px;
    height: 90px;
  }

  .mid {
    border-radius: 8px;
  }

  .button {
    width: 92%;
    height: 50px;
    margin: 0 auto 10px;
    background: #3976FF;
    border-radius: 8px;
  }

  .button p {
    font-size: 16px;
    color: #FFFFFF;
    line-height: 50px;
    text-align: center;
  }
</style>
<style lang="css" scoped>
  /deep/ .weui-input {
    border-radius: 4px;
    height: 2.411765em;
    line-height: 2.411765;
    background-color: #F5F5F5;
    color: #999999;
    width: 92%;
    text-indent: 6%;
  }
</style>
