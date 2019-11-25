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
        <div class="list-one" v-for="(item,index) in List" :key="index">
          <div class="top" style="height:115px;margin-bottom: 5px;">
            <div class="img-wrap">
              <img :src="item.thumb" alt/>
            </div>
            <div class="title-wrap">
              <p>{{item.title}}</p>
            </div>
            <div class="bottom-line">
              <span>{{item.marketprice}}</span>
              <p>库存 {{item.total}}</p>
            </div>
          </div>
          <div class="bottom" style="height:34px">
            <div class="bottom-two" @click="goEdit(item.id)">
              <p>编辑</p>
            </div>
            <div class="bottom-one" @click="LowerShelf(index,item)">
              <p>下架</p>
            </div>
          </div>
          <!--          <div class="more-wrap" @click="show(index)">-->
          <!--            <img src="../moremore.png" alt/>-->
          <!--          </div>-->
        </div>
      </b>
      <b v-show="cur==1">
        <div class="list-one" v-for="(item,index) in ListTwo" :key="index">
          <div class="top" style="height:115px;margin-bottom: 5px;">
            <div class="img-wrap">
              <img :src="item.thumb" alt/>
            </div>
            <div class="title-wrap">
              <p>{{item.title}}</p>
            </div>
            <div class="bottom-line">
              <span>￥{{item.marketprice}}</span>
              <p>库存 {{item.total}}</p>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-two" @click="onDel(item.id)">
              <p>删除</p>
            </div>
            <div class="bottom-one" @click="goEdit(item.id)">
              <p>编辑</p>
            </div>
            <div class="bottom-one" @click="UpShelf(index,item)">
              <p>上架</p>
            </div>
          </div>
          <!--          <div class="more-wrap" @click="show">-->
          <!--            <img src="../moremore.png" alt/>-->
          <!--          </div>-->

        </div>
      </b>
    </div>
    <confirm
      class="confirm-dialog"
      v-model="isconfirm"
      title="确定要删除这件商品？"
      theme="android"
      @on-cancel="onCancel()"
      @on-confirm="onConfirm()"
    ></confirm>

    <!--    <actionsheet-->
    <!--      v-model="isactionsheet"-->
    <!--      :menus="menus1"-->
    <!--      :close-on-clicking-mask="true"-->
    <!--      show-cancel-->
    <!--      @on-click-menu="click"-->
    <!--    ></actionsheet>-->
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
                //isconfirm显示隐藏
                isconfirm: false,
                //comfirm选择的item
                chooseItem: "",
                //景区商品上架列表
                List: [],
                //景区商品下架列表
                ListTwo: [],
                //isactionsheet显示隐藏
                // isactionsheet: false,
                // menus1: {
                //     menu1: "下架",
                //     menu2: "编辑",
                //     menu3: "删除"
                // },
                // currentItem: {}
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            //调取景区后台商品上架列表
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.goodsList&status=" + 1).then(({data}) => {
                console.log(data)
                this.List = data.data
                console.log(this.List)
            })
            //调取景区后台商品下架列表
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.goodsList&status=" + 0).then(({data}) => {
                console.log(data)
                this.ListTwo = data.data
                console.log(this.ListTwo)
            })
        },
        methods: {
            //商品下架
            LowerShelf(index, item) {
                console.log(index, item);
                //商品下架！
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.editGoodsStatus&status=" + 0 + "&id=" + item.id).then(({data}) => {
                    console.log(data)
                    this.RefreshList();
                });
            },
            //商品上架
            UpShelf(index, item) {
                console.log(index, item);
                //商品下架！
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.editGoodsStatus&status=" + 1 + "&id=" + item.id).then(({data}) => {
                    console.log(data)
                    this.RefreshList();
                });
            },
            //跳转添加商品页
            addCommodity() {
                this.$router.push("/jingquBsAddCommodity");
            },
            //跳转编辑页面
            goEdit(id) {
                this.$router.push("/jingquBsEditCommodity?id=" + id);
            },
            //删除弹窗，方法
            onDel(id) {
                this.isconfirm = !this.isconfirm;
                this.chooseItem = id;
                console.log(this.chooseItem)
            },
            //点击取消事件
            onCancel() {
                console.log("我点了取消", this.chooseItem);

            },
            //点击确认事件
            onConfirm() {
                console.log("我点了确认", this.chooseItem);
                //确认删除操作
                this.$http.post("http://core.kachuo.com//app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.delGoods&id=" + this.chooseItem).then(({data}) => {
                    console.log(data);
                    this.RefreshList();
                })
            },
            //点击显示actionsheet
            // show(item) {
            //     console.log(item);
            //     this.currentItem = item
            //     this.isactionsheet = !this.isactionsheet;
            //     // var a = item;
            //     // console.log(a);
            // },
            //点击Actionsheet事件
            // click(key, item) {
            //     console.log(key, item)
            //     console.log(this.currentItem)
            //     if (key == "menu3") {
            //         this.onDel()
            //     }
            // },

            //动作完成刷新列表使用
            RefreshList() {
                //刷新上架
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.goodsList&status=" + 1).then(({data}) => {
                    this.List = data.data
                    console.log('刷新上架列表');
                })
                //刷新下架
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.goodsList&status=" + 0).then(({data}) => {
                    this.ListTwo = data.data
                    console.log('刷新下架列表');
                })

            }

        },
        components: {
            Header,
            Tab,
            TabItem,
            Actionsheet,
            Confirm
        },
        watch: {
            '$route': function (to) {
                if (sessionStorage.goback == "yes") {
                    sessionStorage.goback = ''
                    this.Refresh();
                }
            }
        },

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
    height: 160px;
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

  .bottom-one {
    float: right;
    border-radius: 18px;
    width: 20%;
    height: 30px;
    border: 1px solid #3976ff;
    background: #ffffff;
    margin: 2px 2% 0 0;
  }

  .bottom-one p {
    font-size: 14px;
    color: #3976ff;
    line-height: 30px;
    text-align: center;
  }

  .bottom-two {
    float: right;
    border-radius: 18px;
    width: 20%;
    height: 30px;
    background: #3976ff;
    margin: 2px 4% 0 2%;
  }

  .bottom-two p {
    font-size: 14px;
    color: #ffffff;
    line-height: 30px;
    text-align: center;
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
