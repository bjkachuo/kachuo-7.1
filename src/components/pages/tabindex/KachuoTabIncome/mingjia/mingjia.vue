<template>
<<<<<<< HEAD
  <div>
    <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="content">
      <div class="up-avata">
        <p><span class="blod">上传头像</span><span>(温馨提示：照片不能大于1M)</span></p>
        <img class="upload-img" v-if="imgUrl" :src="imgUrl" alt srcset>
        <UploadImgOne v-else-if="!imgUrl" v-on:getHeaderImgUrl="getImgVal" :plus="true">
          <div slot="bg">
            <div class="up-avata-bg">
              <div class="camera"></div>
            </div>
          </div>
        </UploadImgOne>
      </div>
      <div class="information">
        <h2>基本信息</h2>
        <x-input title="姓名:" name="username" placeholder="请输入姓名" is-type="china-name" label-width="5em"></x-input>
        <x-input title="手机号码:" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"  mask="999 9999 9999" label-width="5em"></x-input>
        <Address v-on:selectAddress="getSelAddress"></Address>
        <x-input title="详细地址:" name="username" placeholder="街道、门牌号等" label-width="5em"></x-input>
        <x-input title="身份证号:" name="username" placeholder="请输入证件号码" label-width="5em"></x-input>
      </div>
      <div class="master">
        <h2>师承信息</h2>
      </div>
    </div>

  </div>
=======
  <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>

>>>>>>> 50416cc0f9e2a61401eb29d49e6d42d0a6016436
</template>

<script>
  import Header from "@/components/common/Header";
<<<<<<< HEAD
  import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
  import { XInput,PopupPicker } from 'vux'
  import Address from "@/components/common/Address";
  export default {
      name: "mingjia",

      components:{ Header,UploadImgOne,Address,XInput,PopupPicker },

      data(){
        return{
          TitleObjData: {
            titleContent: "名家入驻",
            showLeftBack: true,
            showRightMore: false
          },
          imgUrl:''
        }
      },

      methods:{
        getImgVal(val) {
          console.log(val);
          this.imgUrl = val;
        },
        getSelAddress(val) {
          this.maskValueAddress = val;
        },
      }
  }
</script>

<style scoped lang="less">
  .content{
    background-color: #f5f5f5;
    overflow: hidden;
    .up-avata{
      padding-bottom: 16px;
      background-color: #fff;
      width: 92%;
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      border-radius:8px;
      margin: 15px auto 10px;
      p{
        line-height: 45px;
        padding: 0 16px;
        .blod{
          font-weight: 800;
          font-size: 16px;
          color: #222;
        }
        span{
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
      .up-avata-bg{
        width: 90px;
        height: 90px;
        border-radius: 4px;
        background-color: #EBEEF5;
        .camera{
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
    .information{
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      border-radius:8px;
      width: 92%;
      margin: 10px auto;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 16px;
      h2{
        color: #222;
        font-weight: 800;
        font-size: 16px;
        line-height: 44px;
      }
      /deep/.weui-cell{
        padding: 16px 15px;
      }
    }
    .master{
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      border-radius:8px;
      width: 92%;
      margin: 10px auto;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 16px;
      h2{
        color: #222;
        font-weight: 800;
        font-size: 16px;
        line-height: 44px;
      }
    }
  }
=======
    export default {
        name: "mingjia",

        components:{ Header },

        data(){
          return{
            TitleObjData: {
              titleContent: "名家入驻",
              showLeftBack: true,
              showRightMore: false
            },
          }
        }
    }
</script>

<style scoped>
>>>>>>> 50416cc0f9e2a61401eb29d49e6d42d0a6016436

</style>
