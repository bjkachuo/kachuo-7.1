<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <p class="Preservation" @click="submit">提交</p>
    <div class="up-avata">
      <p>
        <span class="blod">上传店铺照片</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!photo">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>

  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
    import {StoreBsAddInfo} from "@/servers/api";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "编辑店铺照片",
                    showLeftBack: true,
                    showRightMore: false
                },
                photo:""
            }
        },
        computed: {},
        watch: {},
        methods: {
            //提示框
            showTip(conttentTip) {
                this.$vux.toast.text(conttentTip, "middle");
                setTimeout(() => {
                    this.$vux.toast.hide();
                }, 1000);
            },
            //上传Logo
            getImgVal(val) {
                this.photo = val;
            },
            //提交操作
            submit(){
                StoreBsAddInfo({
                    image:this.photo.split(),
                }).then(res=>{
                    console.log(res);
                    if (res.result == 1){
                        this.showTip("成功");
                        sessionStorage.goback = "yes";
                        this.$router.goBack();
                    }else if(this.photo == "") {
                        this.showTip("请选择照片");
                    }
                })

            }

        },
        components: {
            Header,
            UploadImgOne
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

</style>
<style lang="less" scoped>
  .up-avata {
    padding-bottom: 16px;
    background-color: #fff;
    width: 92%;
    box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
    border-radius: 8px;
    margin: 56px auto 10px;
    p {
      line-height: 45px;
      padding: 0 16px;
      .blod {
        font-weight: 800;
        font-size: 16px;
        color: #222;
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
</style>
