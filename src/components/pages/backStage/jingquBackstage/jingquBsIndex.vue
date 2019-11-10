<template>
  <div class="jingqu-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="Choice">
      <div class="tlt-wrap">
        <p>信息管理</p>
      </div>
      <div style="width:92%;margin:10px auto 18px;background:#E5E5E5;height:1px"></div>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3" v-for="(item,index) in choiceListOne" :key="index">
          <div class="flex-demo" @click="getItem(item.link)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt />
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="Choice" style="margin:10px auto 0">
      <div class="tlt-wrap">
        <p>服务管理</p>
      </div>
      <div style="width:92%;margin:10px auto 18px;background:#E5E5E5;height:1px"></div>
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3" v-for="(item,index) in choiceListTwo" :key="index">
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
      choiceListOne: [
        {
          name: "景区资料",
          link: "/jingquBsDate",
          imgSrc: require("@/components/pages/backStage/jingquBackstage/jq1.png")
        },
        {
          name: "景区资讯",
          link: "/jingquBsInformation",
          imgSrc: require("@/components/pages/backStage/jingquBackstage/jq2.png")
        },
        {
          name: "留言审核",
          link: "/jingquMessageAudit",
          imgSrc: require("@/components/pages/backStage/jingquBackstage/jq3.png")
        }
      ],
      choiceListTwo: [
        {
          name: "景区商品",
          link: "/jingquBsMall",
          imgSrc: require("@/components/pages/backStage/jingquBackstage/jq4.png")
        },

        {
          name: "景区导游",
          link: "/jingquBsGuide",
          imgSrc: require("@/components/pages/backStage/jingquBackstage/jq5.png")
        },
        {
          name: "全部订单",
          link: "/jingquBsOrder",
          imgSrc: require("@/components/pages/backStage/jingquBackstage/jq6.png")
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
  background: #f0f1f5;
}
.Choice {
  width: 92%;
  height: 152px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  margin: 56px auto 0;
}
.tlt-wrap {
  margin: 12px 0 0 4.35%;
}
.tlt-wrap p {
  font-size: 16px;
  color: #222222;
  font-weight: bold;
}
</style>
<style lang="less" scoped>
.flex-demo {
  text-align: center;
  color: #fff;
  //   background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
  height: 80px;
  width: 72px;
  margin: 0px auto;
}
.img-wrap {
  width: 47px;
  height: 47px;
  margin: 0 auto 5px;
}
.img-wrap img {
  background: none;
  width: 100%;
}
.flex-demo p {
  font-size: 18px;
  color: #333333;
  //   font-family: PingFangSC-Medium;
}
</style>