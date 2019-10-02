<template>
  <div class="guide-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="addGuide">添加</p>
    <tab
      :line-width="1"
      custom-bar-width="32px"
      default-color="#222222"
      active-color="#3976FF"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>全部</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">空闲</tab-item>
      <tab-item @click.native="cur=2" :class="{active:cur==2}">期满</tab-item>
      <tab-item @click.native="cur=3" :class="{active:cur==3}">休息</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
        <div class="list-one">
          <div class="img-wrap">
            <img src alt />
            <div class="state">空闲</div>
          </div>
          <div class="name-star-wrap">
            <p>李小小</p>
            <div class="star-wrap">
              <rater v-model="data42" active-color="#FF9900" :font-size="10" disabled></rater>
              <span>(121)</span>
            </div>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt />
          </div>
        </div>
      </b>
      <b v-show="cur==1">
        <div class="list-one">
          <div class="img-wrap">
            <img src alt />
            <div class="state">空闲</div>
          </div>
          <div class="name-star-wrap">
            <p>李中中</p>
            <div class="star-wrap">
              <rater v-model="data42" active-color="#FF9900" :font-size="10" disabled></rater>
              <span>(121)</span>
            </div>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt />
          </div>
        </div>
      </b>
      <b v-show="cur==2">
        <div class="list-one">
          <div class="img-wrap">
            <img src alt />
            <div class="state">空闲</div>
          </div>
          <div class="name-star-wrap">
            <p>李哪哪</p>
            <div class="star-wrap">
              <rater v-model="data42" active-color="#FF9900" :font-size="10" disabled></rater>
              <span>(121)</span>
            </div>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt />
          </div>
        </div>
      </b>
      <b v-show="cur==3">
        <div class="list-one">
          <div class="img-wrap">
            <img src alt />
            <div class="state">空闲</div>
          </div>
          <div class="name-star-wrap">
            <p>李大大</p>
            <div class="star-wrap">
              <rater v-model="data42" active-color="#FF9900" :font-size="10" disabled></rater>
              <span>(121)</span>
            </div>
          </div>
          <div class="more-wrap" @click="show">
            <img src="../moremore.png" alt />
          </div>
        </div>
      </b>
    </div>
    <actionsheet
      v-model="show4"
      :menus="menus1"
      :close-on-clicking-mask="false"
      show-cancel
      @onClickMask="console('on click mask')"
    ></actionsheet>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tab, TabItem, Rater, Actionsheet } from "vux";

export default {
  props: {},
  data() {
    return {
      data42: "3",
      cur: 0, //默认选中第一个tab
      TitleObjData: {
        titleContent: "景区导游",
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
    show() {
      this.show4 = !this.show4;
    },
    addGuide() {
      this.$router.push("/jingquBsAddguide");
    }
  },
  components: {
    Header,
    Tab,
    TabItem,
    Rater,
    Actionsheet
  }
};
</script>

<style scoped lang="css">
.guide-wrap {
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
  margin: 15px 4% 0 4%;
  border-radius: 8px;
  position: relative;
}
.img-wrap img {
  width: 100%;
}
.img-wrap .state {
  width: 45px;
  height: 25px;
  background: #6b97ff;
  color: #ffffff;
  font-size: 12px;
  line-height: 25px;
  border-radius: 8px 0 20px 0;
  text-align: center;
  position: absolute;
  top: 0px;
  left: 0px;
}
.name-star-wrap {
  width: 110px;
  height: 40px;
  float: left;
  margin: 20px 0 0 0;
}
.name-star-wrap p {
  font-size: 18px;
  color: #222222;
}
.star-wrap span {
  font-size: 12px;
  color: #999999;
  margin-left: 4px;
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
</style>
<style lang="less" scoped>
/deep/ .vux-tab-wrap {
  margin-bottom: 10px;
}
/deep/ .vux-tab .vux-tab-item {
  font-size: 16px;
  font-weight: bold;
}
</style>

