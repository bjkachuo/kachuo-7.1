<template>
  <div class="AddPhoto-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation">保存</p>
    <!-- <div class="jq-photo-wrap">
      <p>景区照片</p>
      <ImageUploaderBs></ImageUploaderBs>
    </div>-->
    <div class="up-avata">
      <p>
        <span class="blod">上传个人照片</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!form.tour_path">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import ImageUploaderBs from "@/components/common/ImageUploaderBs";
import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "景区照片",
        showLeftBack: true,
        showRightMore: false
      },
      form: {
        tour_path: "",
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    //上传头像
    getImgVal(val) {
      this.form.tour_path = val;
    }
  },
  components: {
    Header,
    UploadImgOne
    // ImageUploaderBs
  }
};
</script>

<style scoped lang="css">
.AddPhoto-wrap {
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
.jq-photo-wrap {
  width: 92%;
  min-height: 170px;
  background: #ffffff;
  margin: 61px auto 0;
  border-radius: 8px;
  overflow: hidden;
}
.jq-photo-wrap p {
  font-size: 16px;
  color: #222222;
  font-weight: bold;
  display: block;
  margin: 5px 0 0 4%;
}
</style>
// <style lang="less" scoped>
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
