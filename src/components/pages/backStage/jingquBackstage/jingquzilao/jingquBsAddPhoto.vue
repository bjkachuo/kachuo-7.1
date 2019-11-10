<template>
  <div class="AddPhoto-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation">保存</p>
    <div class="jq-photo-wrap">
      <p>景区照片</p>
      <ImageUploaderBs></ImageUploaderBs>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import ImageUploaderBs from "@/components/common/ImageUploaderBs";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "景区照片",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Header,
    ImageUploaderBs
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
