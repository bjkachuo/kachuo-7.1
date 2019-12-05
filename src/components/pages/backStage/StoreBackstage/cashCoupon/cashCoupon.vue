<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <tab
      :line-width="1"
      custom-bar-width="180px"
      default-color="#222222"
      active-color="#3976FF"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>出售中</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">已删除</tab-item>
    </tab>
    <div class="tab-content">
        <b v-show="cur==0">

          <div class="card" v-for="(item,index) in List" :key="index">
            <div style="margin: 10px 0 0 4.51%;">
              <div class="line-one">{{item.coupon_type}}代金券</div>
              <div class="line-two">{{item.use_date}}可用 {{item.use_range}} {{item.use_number}}</div>
              <div class="line-three"><span style="color: #222222;font-size: 10px;float: left;visibility: hidden">有效期至2019-12-30</span><span
                style="color: #FFA238;font-size: 18px;float: right;font-weight: bold;line-height: 12px;">￥{{item.price}}</span>
              </div>
            </div>
            <div class="up"></div>
            <div class="down"></div>
            <div class="del" @click="onDel(item)"><p
              style="font-size: 14px;color: #222222;line-height: 30px;text-align: center;">删除</p></div>
          </div>


        </b>
        <b v-show="cur==1">
          <div class="card" v-for="(item,index) in ListTwo" :key="index">
            <div style="margin: 10px 0 0 4.51%;">
              <div class="line-one">{{item.coupon_type}}元代金券</div>
              <div class="line-two">{{item.use_date}}可用 {{item.use_range}} {{item.use_number}}</div>
              <div class="line-three"><span style="color: #222222;font-size: 10px;float: left;visibility: hidden;">有效期至2019-12-30</span>
              </div>
            </div>
            <div class="up"></div>
            <div class="down"></div>
            <div class="del-two"><p
              style="font-size: 18px;color: #CCCCCC;line-height: 30px;text-align: center;font-weight: bold;">
              ￥{{item.price}}</p></div>
          </div>
        </b>
    </div>
    <div class="add">
      <div class="button-wrap">
        <div class="img-wrap"><img src="./add.png" alt=""></div>
        <div class="text-wrap" @click="open"><p>添加推荐</p></div>
      </div>
    </div>
    <confirm
      class="confirm-dialog"
      v-model="isconfirm"
      title="确定要删除此推荐商品？"
      theme="android"
      @on-cancel="onCancel()"
      @on-confirm="onConfirm()"
    ></confirm>

  </div>
</template>
<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import {Tab, TabItem, Confirm, Scroller, LoadMore} from "vux";

    export default {
        props: {},
        data() {
            return {
                cur: 0, //默认选中第一个tab
                TitleObjData: {
                    titleContent: "代金券",
                    showLeftBack: true,
                    showRightMore: false
                },
                //删除显示隐藏
                isconfirm: false,
                //上架数据
                List: [],
                //下架数据
                ListTwo: [],
                //用于删除的活动ID
                activeId: "",
                //分页
            }
        },
        computed: {
        },
        mounted() {
            //调取优惠券上架列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=business.coupon.index&status=" + '1').then(({data}) => {
                console.log(data);
                this.List = data.data.list;
                //转换面额
                this.List.forEach(item => {
                    switch (item.coupon_type) {
                        case '1':
                            item.coupon_type = '10元'
                            break;
                        case '2':
                            item.coupon_type = '20元'
                            break;
                        case '3':
                            item.coupon_type = '30元'
                            break;
                        case '4':
                            item.coupon_type = '50元'
                            break;
                        case '5':
                            item.coupon_type = '100元'
                    }

                })
                //转换使用时间
                this.List.forEach(item => {
                    switch (item.use_date) {
                        case '1':
                            item.use_date = '周一至周五'
                            break;
                        case '2':
                            item.use_date = '周六、周日'
                            break;
                        case '3':
                            item.use_date = '周一至周日'
                    }

                });
                //转换使用张数
                this.List.forEach(item => {
                    switch (item.use_number) {
                        case '1':
                            item.use_number = '不限张数'
                            break;
                        case '2':
                            item.use_number = '单次可使用1张'
                            break;
                        case '3':
                            item.use_number = '单次可使用2张'
                            break;
                        case '4':
                            item.use_number = '单次可使用3张'
                    }

                });
                //转换使用范围
                this.List.forEach(item => {
                    switch (item.use_range) {
                        case '1':
                            item.use_range = '全场可用'
                            break;
                        case '2':
                            item.use_range = '部分商品可用'
                    }

                });
                console.log('购物券上架列表：', this.List)
            });
            //调取优惠券删除列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=business.coupon.index&status=" + '-1').then(({data}) => {
                this.ListTwo = data.data.list;
                //转换面额
                this.ListTwo.forEach(item => {
                    switch (item.coupon_type) {
                        case '1':
                            item.coupon_type = '10元'
                            break;
                        case '2':
                            item.coupon_type = '20元'
                            break;
                        case '3':
                            item.coupon_type = '30元'
                            break;
                        case '4':
                            item.coupon_type = '50元'
                            break;
                        case '5':
                            item.coupon_type = '100元'
                    }

                })
                //转换使用时间
                this.ListTwo.forEach(item => {
                    switch (item.use_date) {
                        case '1':
                            item.use_date = '周一至周五'
                            break;
                        case '2':
                            item.use_date = '周六、周日'
                            break;
                        case '3':
                            item.use_date = '周一至周日'
                    }

                });
                //转换使用张数
                this.ListTwo.forEach(item => {
                    switch (item.use_number) {
                        case '1':
                            item.use_number = '不限张数'
                            break;
                        case '2':
                            item.use_number = '单次可使用1张'
                            break;
                        case '3':
                            item.use_number = '单次可使用2张'
                            break;
                        case '4':
                            item.use_number = '单次可使用3张'
                    }

                });
                //转换使用范围
                this.ListTwo.forEach(item => {
                    switch (item.use_range) {
                        case '1':
                            item.use_range = '全场可用'
                            break;
                        case '2':
                            item.use_range = '部分商品可用'
                    }

                });
                console.log('购物券已删除列表：', this.ListTwo)
            });
        },
        methods: {

            //去添加页
            open() {
                this.$router.push('/addCash')
            },
            //删除弹窗，方法
            onDel(item) {
                this.isconfirm = !this.isconfirm;
                console.log(item)
                this.activeId = item.id;
            },
            //点击取消事件
            onCancel() {
                console.log("我点了取消");

            },
            //点击确认事件
            onConfirm() {
                console.log("我点了确认");
                //确认删除代金券
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=business.coupon.del&id=" + this.activeId).then(({data}) => {
                    console.log('删除操作打印：', data);
                    this.$vux.toast.show({
                        type: "text",
                        text: '删除成功',
                        position: "middle",
                        time: 1000
                    });
                    this.Refresh();
                })

            },
            //刷新方法
            Refresh() {
                //刷新上架列表
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=business.coupon.index&status=" + '1').then(({data}) => {
                    this.List = data.data.list;
                    //转换面额
                    this.List.forEach(item => {
                        switch (item.coupon_type) {
                            case '1':
                                item.coupon_type = '10元'
                                break;
                            case '2':
                                item.coupon_type = '20元'
                                break;
                            case '3':
                                item.coupon_type = '30元'
                                break;
                            case '4':
                                item.coupon_type = '50元'
                                break;
                            case '5':
                                item.coupon_type = '100元'
                        }

                    })
                    //转换使用时间
                    this.List.forEach(item => {
                        switch (item.use_date) {
                            case '1':
                                item.use_date = '周一至周五'
                                break;
                            case '2':
                                item.use_date = '周六、周日'
                                break;
                            case '3':
                                item.use_date = '周一至周日'
                        }

                    });
                    //转换使用张数
                    this.List.forEach(item => {
                        switch (item.use_number) {
                            case '1':
                                item.use_number = '不限张数'
                                break;
                            case '2':
                                item.use_number = '单次可使用1张'
                                break;
                            case '3':
                                item.use_number = '单次可使用2张'
                                break;
                            case '4':
                                item.use_number = '单次可使用3张'
                        }

                    });
                    //转换使用范围
                    this.List.forEach(item => {
                        switch (item.use_range) {
                            case '1':
                                item.use_range = '全场可用'
                                break;
                            case '2':
                                item.use_range = '部分商品可用'
                        }

                    });
                    console.log('我刷新了上架列表：', this.List)
                });
                //刷新删除列表
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=business.coupon.index&status=" + '-1').then(({data}) => {
                    this.ListTwo = data.data.list;
                    //转换面额
                    this.ListTwo.forEach(item => {
                        switch (item.coupon_type) {
                            case '1':
                                item.coupon_type = '10元'
                                break;
                            case '2':
                                item.coupon_type = '20元'
                                break;
                            case '3':
                                item.coupon_type = '30元'
                                break;
                            case '4':
                                item.coupon_type = '50元'
                                break;
                            case '5':
                                item.coupon_type = '100元'
                        }

                    })
                    //转换使用时间
                    this.ListTwo.forEach(item => {
                        switch (item.use_date) {
                            case '1':
                                item.use_date = '周一至周五'
                                break;
                            case '2':
                                item.use_date = '周六、周日'
                                break;
                            case '3':
                                item.use_date = '周一至周日'
                        }

                    });
                    //转换使用张数
                    this.ListTwo.forEach(item => {
                        switch (item.use_number) {
                            case '1':
                                item.use_number = '不限张数'
                                break;
                            case '2':
                                item.use_number = '单次可使用1张'
                                break;
                            case '3':
                                item.use_number = '单次可使用2张'
                                break;
                            case '4':
                                item.use_number = '单次可使用3张'
                        }

                    });
                    //转换使用范围
                    this.ListTwo.forEach(item => {
                        switch (item.use_range) {
                            case '1':
                                item.use_range = '全场可用'
                                break;
                            case '2':
                                item.use_range = '部分商品可用'
                        }

                    });
                    console.log('我刷新了删除列表：', this.ListTwo)
                });


            }
        },
        components: {
            Header,
            Tab,
            TabItem,
            Confirm,
            Scroller,
            LoadMore
        },
        filters: {},
        watch: {
            '$route': function (to) {
                if (sessionStorage.goback == "yes") {
                    //清空sessionStorage.goback；
                    sessionStorage.goback = ''
                    //例如重新调取一下列表页接口(或自定义刷新接口)；
                    this.Refresh();
                }
            }
        }
    }
</script>

<style scoped lang="css">
  .index-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .tab-content {
    width: 100%;
    height: 80%;
    overflow: hidden scroll;
    padding-top: 10px;
  }

  .tab-content b {
    font-weight: normal;
    display: block;
    width: 100%;
  }

  .card {
    width: 92%;
    height: 104px;
    background: #FFFFFF;
    margin: 0 auto 10px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }

  .up {
    position: absolute;
    background: #F5F5F5;
    top: 0;
    right: 18%;
    height: 10px;
    width: 20px;
    border-radius: 0 0 100px 100px;
  }

  .down {
    position: absolute;
    background: #F5F5F5;
    bottom: 0;
    right: 18%;
    height: 10px;
    width: 20px;
    border-radius: 100px 100px 0 0;
  }

  .del {
    width: 65px;
    height: 30px;
    border: 1px solid #CCCCCC;
    border-radius: 15px;
    position: absolute;
    right: 4%;
    top: 37px;
  }

  .del-two {
    position: absolute;
    right: 5%;
    top: 37px;
    width: 65px;
    height: 30px;

  }

  .line-one {
    font-size: 14px;
    color: #222222;
    font-weight: bold;
    margin-bottom: 7.5px;
  }

  .line-two {
    font-size: 0.8rem;
    color: #999999;
    font-weight: normal;
    margin-bottom: 18px;
  }

  .line-three {
    width: 70%;
    height: 25px;
  }

  .add {
    width: 100%;
    height: 45px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
  }

  .button-wrap {
    display: flex;
    margin: 9px auto 0;
    width: 22%;
  }

  .img-wrap {
    width: 16.5px;
    height: 16.5px;
    margin-right: 6px;
  }

  .img-wrap img {
    width: 100%;
  }

  .text-wrap {
    margin-top: 1.4px;
  }

  .text-wrap p {
    color: #666666;
    font-size: 14px;
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
  /deep/ .vux-tab-wrap {
    margin-top: 46px;
  }

  /deep/ .vux-tab .vux-tab-item {
    font-size: 16px;
    font-weight: bold;
  }

  /deep/ .vux-x-dialog-absolute .weui-dialog {
    position: fixed;
  }

</style>
