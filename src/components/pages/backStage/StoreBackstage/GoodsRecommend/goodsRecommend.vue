<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="add-button">
      <div class="button-wrap">
        <div class="img-wrap"><img src="./add.png" alt=""></div>
        <div class="text-wrap" @click="open"><p>添加推荐</p></div>
      </div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt=""
                                                                                     style="width:100%;border-radius:8px;height: 100%;">
        </div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;"
           @click="onDel">
        <p style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p>
      </div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt=""
                                                                                     style="width:100%;border-radius:8px;height: 100%;">
        </div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;" @click="onDel">
        <p
          style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p></div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt=""
                                                                                     style="width:100%;border-radius:8px;height: 100%;">
        </div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;" @click="onDel">
        <p
          style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p></div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt=""
                                                                                     style="width:100%;border-radius:8px;height: 100%;">
        </div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;" @click="onDel">
        <p
          style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p></div>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur
                :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
        <p style="color:#fff;text-align:right;margin-right: 34px;" @click="showDialogStyle = false">
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
        <div class="content">
          <div style="margin-top: 10px;"><h2>添加推荐</h2></div>
          <div style="margin-bottom: 19.5px">
            <div><p style="text-align: left;text-indent: 5%;line-height: 30px;font-size: 14px;color: #222222;">商品名</p>
            </div>
            <x-input placeholder="请输入商品名称" :show-clear="false" v-model="goodsName"></x-input>
          </div>
          <div style="margin-bottom: 10px">
            <div><p style="text-align: left;text-indent: 5%;line-height: 30px;font-size: 14px;color: #222222;">商品照片</p>
            </div>
          </div>
          <div class="up-avata">
            <!--            <p>-->
            <!--              <span class="blod">上传个人照片</span>-->
            <!--            </p>-->
            <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
              <div slot="bg">
                <div class="up-avata-bg" v-if="!goodsPhoto">
                  <div class="camera"></div>
                </div>
              </div>
            </UploadImgOne>
          </div>
          <!--若有一个是空显示灰色按钮-->
          <div class="up-before" v-if="this.goodsName =='' || this.goodsPhoto ==''">提交</div>
          <!--若都已经填写显示蓝色按钮-->
          <div class="up-behind" v-if="this.goodsName !='' && this.goodsPhoto !=''">提交</div>
        </div>
      </x-dialog>
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
    import {XDialog, TransferDomDirective as TransferDom, Group, XInput, Confirm} from 'vux'
    import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";

    export default {
        props: {},
        directives: {
            TransferDom
        },
        data() {
            return {
                TitleObjData: {
                    titleContent: "商家推荐",
                    showLeftBack: true,
                    showRightMore: false
                },
                //显示弹框
                showDialogStyle: false,
                //删除显示隐藏
                isconfirm: false,
                //商品名称
                goodsName: "",
                //商品图片
                goodsPhoto: ""

            }
        },
        computed: {},
        watch: {},
        methods: {
            open() {
                this.showDialogStyle = true;
            },
            //上传商品图片
            getImgVal(val) {
                this.goodsPhoto = val;
            },
            //删除弹窗，方法
            onDel() {
                this.isconfirm = !this.isconfirm;
            },
            //点击取消事件
            onCancel() {
                console.log("我点了取消");

            },
            //点击确认事件
            onConfirm() {
                console.log("我点了确认");
            },

        },
        components: {
            Header,
            XDialog,
            Group,
            XInput,
            UploadImgOne,
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

  .add-button {
    width: 92%;
    height: 45px;
    background: #3976FF;
    margin: 56px auto 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  .button-wrap {
    display: flex;
    margin: 9px auto 0;
    width: 29%;
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
    color: #FFFFFF;
    font-size: 14px;
  }

  .card {
    width: 92%;
    height: 104px;
    background: #FFFFFF;
    margin: 0 auto 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    width: 230px;
    margin: 15px 0 0 4.35%;
  }

  .content {
    width: 300px;
    height: 356px;
    margin: 20px auto 0;
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
  }

  .up-before {
    width: 92%;
    height: 35px;
    background: #CCCCCC;
    border-radius: 17.5px;
    margin: 0 auto;
    color: #FFFFFF;
    line-height: 35px;
  }

  .up-behind {
    width: 92%;
    height: 35px;
    background: #3976FF;
    border-radius: 17.5px;
    margin: 0 auto;
    color: #FFFFFF;
    line-height: 35px;
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
  .weui-cell {
    background: #F5F5F5;
    width: 92%;
    margin: 0 auto;
    border-radius: 8px;
  }

  .up-avata {
    padding-bottom: 16px;
    background-color: #fff;
    width: 92%;
    /*box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);*/
    border-radius: 8px;
    margin: 0px auto 10px;

    p {
      line-height: 45px;
      padding: 0 16px;

      .blod {
        font-weight: 800;
        font-size: 16px;
        color: #222;
        text-align: left;
      }

      span {
        font-size: 14px;
        color: #999;
      }
    }

    .upload-img {
      width: 94px;
      height: 94px;
      display: inline-block;
      object-fit: cover;
      margin: 0 0 0 20px;
    }

    .up-avata-bg {
      width: 90px;
      height: 90px;
      border-radius: 4px;
      background-color: #ebeef5;

      .camera {
        width: 46px;
        height: 46px;
        margin: 0 auto;
        position: relative;
        top: 22px;
        background-image: url("./camera.png");
        background-size: 100% 100%;
      }
    }
  }
  /deep/ .vux-x-dialog-absolute .weui-dialog{
    position: fixed;
  }

</style>
