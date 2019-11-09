<template>
  <div class="information-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation">发布</p>
    <x-icon type="ios-search-strong" size="25" class="search-icon" @click="jumpSearch"></x-icon>
    <div class="line-one">
      <p class="operation" @click="show">...</p>
      <div class="title">蓬莱阁旅游景区，是国家级5A级风景 区位于山东省蓬莱市，小城在蓬市，小城在蓬市，小城在蓬市，小城在蓬莱...</div>
      <div class="img-list">
        <div class="img-wrap">
          <img src alt />
        </div>
        <div class="img-wrap">
          <img src alt />
        </div>
        <div class="img-wrap">
          <img src alt />
        </div>
      </div>
    </div>
    <actionsheet
      v-model="show4"
      :menus="menus1"
      :close-on-clicking-mask="true"
      show-cancel
      @onClickMask="console('on click mask')"
    ></actionsheet>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Search from "@/components/common/Search";
import { Actionsheet } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "景区资讯",
        showLeftBack: true,
        showRightMore: false
      },
      show4: false,
      menus1: {
        menu1: "置顶",
        menu2: "编辑",
        menu3: "删除"
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    jumpSearch() {
      this.$router.push("/jingquBsSearch");
    },
    show() {
      this.show4 = !this.show4;
    }
  },
  components: {
    Header,
    Actionsheet
  }
};
</script>

<style scoped lang="css">
.information-wrap {
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
.line-one {
  width: 100%;
  height: 170px;
  background: #ffffff;
  margin-top: 56px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.operation {
  display: block;
  width: 30px;
  height: 15px;
  background: #f5f5f5;
  color: #222222;
  font-size: 24px;
  text-align: center;
  line-height: 1px;
  border-radius: 8px;
  position: absolute;
  right: 5%;
  top: 12px;
}
.title {
  width: 70%;
  height: 44px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin: 12px 0 12px 5%;
  font-size: 18px;
  color: #333333;
  height: 54px;
}
.img-list {
  width: 92%;
  height: 72px;
  margin: 0 auto;
}
.img-wrap {
  width: 32%;
  height: 72px;
  float: left;
  margin: 0 0.66%;
}
.img-wrap img {
  width: 100%;
}
</style>
<style lang="less" scoped>
/deep/ .search-icon {
  position: absolute;
  z-index: 9999;
  top: 10px;
  right: 16%;
}
</style>

