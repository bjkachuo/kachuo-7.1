<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="content-one">
      <div class="line-one">
        <flexbox>
          <flexbox-item @click.native="showConfirm">
            <div class="flex-demo">
              <div class="img-wrap">
                <img src="./sj1.png" alt="">
              </div>
              <p>输码验证</p>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <div class="img-wrap">
                <img src="./sj2.png" alt="">
              </div>
              <p>扫码验证</p>
            </div>
          </flexbox-item>
          <flexbox-item @click.native="goHistory">
            <div class="flex-demo">
              <div class="img-wrap">
                <img src="./sj3.png" alt="">
              </div>
              <p>历史记录</p>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="card">
        <div class="small-title">
          <div class="dian"></div>
          <div class="dian-two"><p>店铺管理</p></div>
        </div>
        <div class="line-two">
          <flexbox>
            <flexbox-item @click.native="goStoreInfo">
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>店铺信息</p>
              </div>
            </flexbox-item>
            <flexbox-item @click.native="goCashCoupon">
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>代金券</p>
              </div>
            </flexbox-item>
            <flexbox-item @click.native="goRecommend">
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>推荐商品</p>
              </div>
            </flexbox-item>
            <flexbox-item @click.native="goUserReviews">
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>用户评价</p>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
    <confirm
      v-model="isShowConfirm"
      show-input
      ref="confirm5"
      title="代金券数字码"
      placeholder="请输入代金券数字码"
      confirm-text="查询"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide"
      :input-attrs="{type: 'number'}"
    ></confirm>
  </div>
</template>
<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHeaderBlue";
    import {Flexbox, FlexboxItem, Confirm} from 'vux'

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "商家管理后台",
                    showLeftBack: true,
                    showRightMore: false
                },
                //confirm显示或隐藏
                isShowConfirm: false,

            }
        },
        computed: {},
        watch: {},
        methods: {
            //点击显示Confirm
            showConfirm() {
                console.log("我点到了");
                this.isShowConfirm = !this.isShowConfirm;
            },
            //confirm确认操作
            onConfirm(value) {
                console.log('确认:', value);
                if (value != "") {
                    //跳转输入验证码查询页面
                    this.$router.push("/queryResults")
                }
            },
            //confirm取消操作
            onCancel() {
                console.log("取消");
            },
            //confirm显示时
            onShow() {
                console.log("on hide");
            },
            //confirm隐藏时
            onHide() {
                console.log("on cancel");
            },
            //跳转代金券历史
            goHistory() {
                this.$router.push("/historicalRecord")
            },
            //跳转店铺信息
            goStoreInfo() {
                this.$router.push("/storeInfomation")
            },
            //跳转商家推荐
            goRecommend(){
                this.$router.push("/goodsRecommend")
            },
            //跳转用户评论
            goUserReviews(){
                this.$router.push("/UserReviews")
            },
            //跳转代金券
            goCashCoupon(){
                this.$router.push("/cashCoupon")
            }
        },
        components: {
            Header,
            Flexbox,
            FlexboxItem,
            Confirm
        },
        filters: {}
    }
</script>

<style scoped lang="css">
  .index-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .content-one {
    height: 176px;
    width: 100%;
    background: #3976FF;
    margin-top: 46px;
    position: relative;
    display: inline-block;
  }

  .line-one {
    width: 92%;
    height: 90px;
    margin: 25px auto 0;
  }

  .img-wrap {
    height: 64px;
    width: 64px;
    margin: 0 auto 8px;
  }

  .img-wrap img {
    width: 100%;
    background: none;

  }

  .card {
    width: 94%;
    height: 147px;
    margin: 0 auto;
    border-radius: 8px;
    background: #FFFFFF;
    position: absolute;
    bottom: -106px;
    left: 3%;
  }

  .small-title {
    width: 65.5px;
    height: 22px;
    margin: 12px 0 21px 6.9%;
  }

  .dian {
    height: 14px;
    width: 7px;
    background: #3976FF;
    float: left;
    margin-top: 4px;
    margin-right: 2px;
    border-radius: 3.5px;
  }

  .dian-two {
    float: left;
  }

  .dian-two p {
    font-size: 14px;
    color: #222222;
    font-weight: bold;
  }

  .line-two {
    width: 92%;
    height: 72px;
    margin: 0 auto;
    /*background: #0BB20C;*/
  }

  .img-wrap-two {
    height: 50px;
    width: 50px;
    margin: 0 auto 6px;
  }

  .img-wrap-two img {
    width: 100%;
  }
</style>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';

  .flex-demo {
    text-align: center;
    color: #fff;
    /*background-color: #20b907;*/
    border-radius: 4px;
    background-clip: padding-box;
    margin: 0 auto;
  }

  .flex-demo p {
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
  }

  .flex-demoTwo {
    text-align: center;
    color: #fff;
    /*background: #1D72FF;*/
    border-radius: 4px;
    background-clip: padding-box;
  }

  .flex-demoTwo p {
    text-align: center;
    font-size: 12px;
    color: #222222;
  }

  /deep/ .vux-x-dialog-absolute .weui-dialog {
    position: fixed;
  }
</style>
