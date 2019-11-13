<template>
  <div class="Mall-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="addCommodity">添加</p>
    <x-icon type="ios-search-strong" size="25" class="search-icon"></x-icon>
    <tab
      :line-width="1"
      custom-bar-width="32px"
      default-color="#222222"
      active-color="#222222"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>出售中</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">已下架</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
        <div class="list-one">
          <div class="img-wrap">
            <img src alt />
          </div>
          <div class="title-wrap">
            <p>大床房</p>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt />
          </div>
          <div class="bottom-line">
            <span>￥300.00</span>
            <p>库存 99</p>
          </div>
        </div>
      </b>
      <b v-show="cur==1">
        <div class="list-one">
          <div class="img-wrap">
            <img src alt />
          </div>
          <div class="title-wrap">
            <p>标间</p>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt />
          </div>
          <div class="bottom-line">
            <span>￥260.00</span>
            <p>库存 99</p>
          </div>
        </div>
      </b>
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
import { Tab, TabItem, Actionsheet } from "vux";

export default {
  props: {},
  data() {
    return {
      cur: 0, //默认选中第一个tab
      TitleObjData: {
        titleContent: "商品管理",
        showLeftBack: true,
        showRightMore: false
      },
      show4: false,
      menus1: {
        menu1: "下架",
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
    show() {
      this.show4 = !this.show4;
    },
    //跳转添加商品页
    addCommodity() {
      this.$router.push("/SjAddCommodity");
    }
  },
  components: {
    Header,
    Tab,
    TabItem,
    Actionsheet
  }
};
</script>

<style scoped lang="css">
i {
  font-style: normal;
}
.Mall-wrap {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;
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
.tab-content {
  width: 100%;
  height: 85%;
  overflow: hidden scroll;
}
.tab-content b {
  font-weight: normal;
  display: block;
  width: 100%;
}
.list-one {
  width: 100%;
  height: 120px;
  background: #ffffff;
  margin-bottom: 10px;
  border-radius: 8px;
}
.img-wrap {
  width: 90px;
  height: 90px;
  float: left;
  margin: 15px 2% 0 4%;
  border-radius: 8px;
}
.img-wrap img {
  width: 100%;
}
.title-wrap {
  width: 50%;
  height: 51px;
  /* background: darkcyan; */
  float: left;
  margin-top: 17px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.title-wrap p {
  font-size: 16px;
  color: #222222;
}
.more-wrap {
  width: 30px;
  height: 15px;
  float: right;
  margin: 15px 4% 0 0;
}
.more-wrap img {
  width: 100%;
}
.bottom-line {
  width: 63%;
  height: 28px;
  /* background: darkblue; */
  float: left;
  margin-top: 17px;
}
.bottom-line span {
  float: left;
  font-size: 18px;
  color: #ff3939;
  font-weight: 600;
  line-height: 28px;
}
.bottom-line p {
  float: right;
  font-weight: 14px;
  color: #999999;
  font-size: 14px;
  font-weight: 300;
  line-height: 28px;
}
</style>
<style lang="less" scoped>
/deep/ .search-icon {
  position: absolute;
  z-index: 9999;
  top: 10px;
  right: 16%;
}
/deep/ .vux-tab-wrap {
  margin-bottom: 10px;
}

/deep/ .vux-tab .vux-tab-item {
  font-size: 16px;
  font-weight: bold;
}
</style>
