<template>
  <div class="jingqu-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="Choice">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3" v-for="(item,index) in choiceList" :key="index">
          <div class="flex-demo" @click="getItem(item.link)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt />
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Flexbox, FlexboxItem } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "景区管理后台",
        showLeftBack: true,
        showRightMore: false
      },
      choiceList: [
        {
          name: "景区资料",
          link: "/jingquBsDate",
          imgSrc: require("@/components/pages/tabindex/KachuoTabIncome/jingquBackstage/jq1.png")
        },
        {
          name: "景区资讯",
          link: "/jingquBsInformation",
          imgSrc: require("@/components/pages/tabindex/KachuoTabIncome/jingquBackstage/jq2.png")
        },
        {
          name: "景区导游",
          link: "/jingquBsGuide",
          imgSrc: require("@/components/pages/tabindex/KachuoTabIncome/jingquBackstage/jq3.png")
        },
        {
          name: "景区商城",
          link: "/jingquBsMall",
          imgSrc: require("@/components/pages/tabindex/KachuoTabIncome/jingquBackstage/jq4.png")
        },
        {
          name: "订单管理",
          link: "/jingquBsOrder",
          imgSrc: require("@/components/pages/tabindex/KachuoTabIncome/jingquBackstage/jq5.png")
        },
        {
          name: "游客留言",
          link: "/jingquMessageAudit",
          imgSrc: require("@/components/pages/tabindex/KachuoTabIncome/jingquBackstage/jq6.png")
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    getItem(link) {
      this.$router.push(link);
    }
  },
  components: {
    Header,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style scoped lang="css">
.jingqu-wrap {
  width: 100%;
  height: 100%;
  background: #f0f1f5ff;
}
.Choice {
  width: 100%;
  height: 233px;
  background: #ffffffff;
  border-radius: 8px;
  margin-top: 56px;
}
</style>
<style lang="less" scoped>
.flex-demo {
  text-align: center;
  color: #fff;
  //   background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
  height: 72px;
  width: 72px;
  margin: 23px auto;
}
.img-wrap {
  width: 47px;
  height: 47px;
  margin: 0 auto;
}
.img-wrap img {
  background: none;
  width: 100%;
}
.flex-demo p {
  font-size: 18px;
  color: #333333ff;
  //   font-family: PingFangSC-Medium;
}
</style>