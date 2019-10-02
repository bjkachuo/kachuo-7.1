<template>
  <div class="search-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
      placeholder="输入关键词进行搜索"
      auto-fixed="true"
    ></search>
    <div>{{this.value}}</div>
    <!-- <div class="head-wrap">
      <div class="back-wrap">
        <x-icon type="ios-arrow-back" size="25"></x-icon>
      </div>
    </div>-->
  </div>
</template>

<script>
import { Search, Group, Cell } from "vux";
import Header from "@/components/common/Header";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "",
        showLeftBack: true,
        showRightMore: false
      },
      results: [],
      value: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      window.alert("you click the result item: " + JSON.stringify(item));
    },
    getResult(val) {
      console.log("on-change", val);
      this.results = val ? getResult(this.value) : [];
      function getResult(val) {
        let rs = [];
        for (let i = 0; i < 20; i++) {
          rs.push({
            title: `${val} result: ${i + 1} `,
            other: i
          });
        }
        return rs;
      }
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: "text",
        position: "top",
        text: "on submit"
      });
    },
    onFocus() {
      console.log("on focus");
    },
    onCancel() {
      console.log("on cancel");
    }
  },
  components: { Search, Group, Cell, Header }
};
</script>

<style scoped lang="css">
.search-wrap {
  height: 100%;
  width: 100;
  background: #ffffff;
}
.head-wrap {
  width: 100%;
  height: 44px;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  background: violet;
  overflow: hidden;
}
.back-wrap {
  width: 24px;
  height: 24px;
}
</style>
