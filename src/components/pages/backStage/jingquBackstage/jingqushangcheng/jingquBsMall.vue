<template>
  <div class="Mall-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="addCommodity">添加</p>
    <x-icon type="ios-search-strong" size="25" class="search-icon"></x-icon>
    <tab
      :line-width="1"
      custom-bar-width="32px"
      default-color="#222222"
      active-color="#3976FF"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>出售中</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">已下架</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
        <div class="list-one" v-for="(item,index) in this.List" :key="index">
          <div class="img-wrap">
            <img :src="item.thumb" alt/>
          </div>
          <div class="title-wrap">
            <p>{{item.title}}</p>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt/>
          </div>
          <div class="bottom-line">
            <span>{{item.marketprice}}</span>
            <p>库存 {{item.total}}</p>
          </div>
          <confirm
            class="confirm-dialog"
            v-model="show2"
            title="确定要删除这件商品？"
            theme="android"
            @on-cancel="onCancel(index)"
            @on-confirm="onConfirm(index)"
          ></confirm>

        </div>
      </b>
      <b v-show="cur==1">
        <div class="list-one">
          <div class="img-wrap">
            <img src alt/>
          </div>
          <div class="title-wrap">
            <p>李几已书法作品蓬莱仙赋 李几已书法作品法作蓬...</p>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt/>
          </div>
          <div class="bottom-line">
            <span>￥300.00</span>
            <p>库存 99</p>
          </div>
        </div>
      </b>
    </div>
    <actionsheet
      v-model="show4"
      :menus="menus1"
      :close-on-clicking-mask="true"
      show-cancel
      @on-click-menu="click"
    ></actionsheet>



  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Tab, TabItem, Actionsheet, Confirm} from "vux";

    export default {
        props: {},
        data() {
            return {
                cur: 0, //默认选中第一个tab
                TitleObjData: {
                    titleContent: "景区商城",
                    showLeftBack: true,
                    showRightMore: false
                },
                //confirm显示隐藏
                show2: false,
                //景区商品列表
                List: [],
                show4: false,
                menus1: {
                    menu1: "下架",
                    menu2: "编辑",
                    menu3: "删除"
                }
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            //调取景区后台商品列表商品
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.goodsList").then(({data}) => {
                console.log(data)
                this.List = data.data
                console.log(this.List)
            })
        },
        watch: {},
        methods: {
            show() {
                this.show4 = !this.show4;
            },
            //跳转添加商品页
            addCommodity() {
                this.$router.push("/jingquBsAddCommodity");
            },
            //点击Actionsheet事件
            click(key, item) {
                console.log(key, item)
                if (item == "删除") {
                    console.log("我点了删除")
                    this.onDel()
                }
            },
            //删除弹窗，方法
            onDel() {
                this.show2 = !this.show2;
            },
            //点击取消事件
            onCancel(index) {
                console.log("我点了取消", index);
            },
            //点击确认事件
            onConfirm(index) {
                console.log("我点了确认", index);
            },


        },
        components: {
            Header,
            Tab,
            TabItem,
            Actionsheet,
            Confirm
        }
    };
</script>

<style scoped lang="css">
  i {
    font-style: normal;
  }

  .Mall-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
    position: relative;
  }

  .Preservation {
    display: block;
    position: absolute;
    top: 10px;
    right: 4%;
    font-size: 16px;
    z-index: 9999;
    color: #333333;
  }

  .tab-content {
    width: 100%;
    height: 85%;
    overflow: hidden scroll;
  }

  .tab-content b {
    font-weight: normal;
    display: block;
    width: 100%;
  }

  .list-one {
    width: 100%;
    height: 120px;
    background: #ffffff;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  .img-wrap {
    width: 90px;
    height: 90px;
    float: left;
    margin: 15px 2% 0 4%;
    border-radius: 8px;
  }

  .img-wrap img {
    width: 100%;
  }

  .title-wrap {
    width: 50%;
    height: 51px;
    /* background: darkcyan; */
    float: left;
    margin-top: 17px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .title-wrap p {
    font-size: 16px;
    color: #222222;
  }

  .more-wrap {
    width: 30px;
    height: 15px;
    float: right;
    margin: 15px 4% 0 0;
  }

  .more-wrap img {
    width: 100%;
  }

  .bottom-line {
    width: 63%;
    height: 28px;
    /* background: darkblue; */
    float: left;
    margin-top: 17px;
  }

  .bottom-line span {
    float: left;
    font-size: 18px;
    color: #ff3939;
    font-weight: 600;
    line-height: 28px;
  }

  .bottom-line p {
    float: right;
    font-weight: 14px;
    color: #999999;
    font-size: 14px;
    font-weight: 300;
    line-height: 28px;
  }

  /* confirm弹窗样式 */
  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__ft {
    text-align: center;
    padding: 0 15px 15px 15px;
  }

  .confirm-dialog /deep/ .weui-dialog__btn {
    width: 110px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #3976ff;
    border-radius: #3976ff;
    text-align: center;
    color: #3976ff;
    font-size: 15px;
    border-radius: 35px;
    margin: 0 5px;
  }

  .confirm-dialog /deep/ .weui-dialog__btn:active {
    background-color: transparent;
  }

  .confirm-dialog /deep/ .weui-dialog__btn_primary,
  .confirm-dialog /deep/ .weui-dialog__btn_primary:active {
    background-color: #3976ff;
    color: #ffffff;
  }

  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__title {
    font-size: 18px;
  }

  .confirm-dialog /deep/ .weui-dialog__hd {
    text-align: center;
    padding: 30px 15px;
  }

  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__bd {
    padding: 5px 15px 0 15px;
    min-height: 10px;
  }

</style>
<style lang="less" scoped>
  /deep/ .search-icon {
    position: absolute;
    z-index: 9999;
    top: 10px;
    right: 16%;
  }

  /deep/ .vux-tab-wrap {
    margin-bottom: 10px;
  }

  /deep/ .vux-tab .vux-tab-item {
    font-size: 16px;
    font-weight: bold;
  }
</style>
