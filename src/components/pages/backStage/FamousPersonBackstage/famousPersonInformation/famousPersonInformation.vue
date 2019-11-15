<template>
  <div class="information-warp">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="submit">提交</p>
    <div class="up-avata">
      <p>
        <span class="blod">头像管理<span>(用于名家商城个人页展示)</span></span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!form.tour_path">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>

    </div>
    <div class="price">
      <x-input title="擅长领域" placeholder="请输入擅长领域"></x-input>
      <x-input title="所属流派" placeholder="请输入所在领域所属流派"></x-input>
    </div>

  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
    import {XInput, XTextarea, PopupPicker} from "vux";

    export default {
        data() {
            return {
                TitleObjData: {
                    titleContent: "个人信息",
                    showLeftBack: true,
                    showRightMore: false
                },
                form: {
                    tour_path: "",
                    introduce: "",
                    price: "",
                    lowest_time: [],
                    phone: ""
                }


            }
        },
        methods: {
            submit() {
                console.log("我点击了提交按钮")
            },
            //上传头像
            getImgVal(val) {
                this.form.tour_path = val;
            },

        },
        components: {
            Header,
            UploadImgOne,
            XInput,
            XTextarea,
            PopupPicker
        }

    }
</script>

<style scoped lang="css">
  .information-warp {
    background: #f0f1f5;
    position: relative;
    overflow: hidden scroll;
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

  .price {
    width: 92%;
    mmin-height: 55px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 auto 10px;
    padding: 8px 2px;
  }


</style>
<style lang="less" scoped>
  // /deep/ .weui-cell {
  //   padding: 17px 15px;
  // }
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
