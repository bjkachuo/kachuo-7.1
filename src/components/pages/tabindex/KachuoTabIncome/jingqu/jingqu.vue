<template>
    <div>
      <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="content">
        <div class="up-avata">
          <p><span class="blod">上传头像</span><span>(温馨提示：照片不能大于1M)</span></p>

          <UploadImgOne  v-on:getHeaderImgUrl="getImgVal" :plus="true">
            <div slot="bg">
              <div class="up-avata-bg">
                <div class="camera"></div>
              </div>
            </div>
          </UploadImgOne>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
    export default {
        name: "scenicSpot",

        components:{Header,UploadImgOne},

        data(){
          return{
            TitleObjData: {
              titleContent: "景区入驻",
              showLeftBack: true,
              showRightMore: false
            },
          }
        },

        methods:{
          getImgVal(val) {
            console.log(val);
            this.imgUrl = val;
          },
        }
    }
</script>

<style scoped lang="less">
  .content{
    background-color: #f5f5f5;
    overflow-y: scroll;
    h2{
      color: #222;
      font-weight: 800;
      font-size: 16px;
      line-height: 44px;
    }
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
  }
</style>
