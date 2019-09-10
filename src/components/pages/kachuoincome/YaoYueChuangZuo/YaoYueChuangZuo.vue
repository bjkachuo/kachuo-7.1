<template>
  <div class="photo-album-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="photo-album-content" :style="conHei">
      <tab :line-width="3" custom-bar-width="50px">
        <tab-item selected @on-item-click="onItemClick">文创征集</tab-item>
        <tab-item @on-item-click="onItemClick">艺品创作</tab-item>
        <tab-item @on-item-click="onItemClick">产品溯源</tab-item>
<!--        <tab-item @on-item-click="onItemClick">名家妙藏</tab-item>-->
      </tab>
      <div>
        <InitMap ref="map" :tabIndex="tabIndex"></InitMap>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import InitMap from "@/components/pages/kachuoincome/YaoYueChuangZuo/InitMap";
import { Tab, TabItem } from "vux";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "要约创作",
        showLeftBack: true,
        showRightMore: false
      },
      tabIndex: 1
    };
  },

  components: {
    Header,
    Tab,
    TabItem,
    InitMap
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  methods: {
    onItemClick(index) {

      this.tabIndex = index + 1;
      if (index === 2) {
        this.$refs.map.getSYData();
      } else if(index === 3){

      }else{
        this.$refs.map.init()
      }
    }
  },

  created() {

  }

};
</script>
<style lang='less' scoped>

.photo-album-content{
  /deep/ .vux-tab-bar-inner{
    background-color :#3976FF
  }
}


.photo-album-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.photo-album-content {
  width: 100%;
  background: #f9f9f9;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.tip {
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
</style>
