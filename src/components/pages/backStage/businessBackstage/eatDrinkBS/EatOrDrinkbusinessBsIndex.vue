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
        <p>商家管理</p>
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
    <div class="swich-warp" v-if="this.busiState == true">
      <group>
        <x-switch title="正在营业中" v-model="busiState"></x-switch>
      </group>
    </div>
    <div class="swich-warp" v-if="this.busiState == false">
      <group>
        <x-switch title="休息中" v-model="busiState"></x-switch>
      </group>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Flexbox, FlexboxItem, XSwitch, Group } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "商家管理后台",
        showLeftBack: true,
        showRightMore: false
      },
      //swich开关：true是营业，false是休息
      busiState: true,
      choiceListOne: [
        {
          name: "店铺信息",
          link: "/EatOrDrinkStoreInformation",
          imgSrc: require("@/components/pages/backStage/businessBackstage/sj1.png")
        },
        {
          name: "商品管理",
          link: "/EatOrDrinkCommodityManagement",
          imgSrc: require("@/components/pages/backStage/businessBackstage/sj2.png")
        },
        {
          name: "订单管理",
          link: "/EatOrDrinkOrderManagement",
          imgSrc: require("@/components/pages/backStage/businessBackstage/sj3.png")
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
    },
  },
  components: {
    Header,
    Flexbox,
    FlexboxItem,
    XSwitch,
    Group
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
  height: 164px;
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
.swich-warp {
  width: 92%;
  height: 50px;
  border-radius: 8px;
  margin: 0 auto;
}
/deep/ .weui-switch:checked,
.weui-switch-cp__input:checked ~ .weui-switch-cp__box {
  border-color: #3976ff;
  background-color: #3976ff;
}
</style>