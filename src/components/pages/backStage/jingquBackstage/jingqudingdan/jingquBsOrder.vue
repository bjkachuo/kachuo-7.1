<template>
  <div class="order-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="box-one">
      <div class="title">
        <p>商品订单</p>
        <span @click="goodsOrder">
          查看全部
          <div class="icon-wrap">
            <x-icon type="ios-arrow-right" size="15" class="icon-one"></x-icon>
          </div>
        </span>
      </div>
      <div class="line"></div>
      <div class="content">
        <flexbox>
          <flexbox-item v-for="(item,index) in this.SList" :key="index">
            <div class="flex-demo">
              <div>
                <p>{{item.count}}</p>
              </div>
              <div>
                <span>{{item.name}}</span>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="box-two">
      <div class="title">
        <p>导游订单</p>
        <span @click="guideOrder">
          查看全部
          <div class="icon-wrap">
            <x-icon type="ios-arrow-right" size="15" class="icon-one"></x-icon>
          </div>
        </span>
      </div>
      <div class="line"></div>
      <div class="content">
        <flexbox>
          <flexbox-item v-for="(item,index) in this.GList" :key="index">
            <div class="flex-demo">
              <div>
                <p>{{item.count}}</p>
              </div>
              <div>
                <span>{{item.name}}</span>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
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
        titleContent: "订单管理",
        showLeftBack: true,
        showRightMore: false
      },
        SList:[],
        GList:[],
    };
  },
  computed: {},
  created() {},
  mounted() {
      //获取订单状态列表
      this.$http.post("http://core.kachuo.com//app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.totalOrder").then(({data})=>{
          console.log(data)
          this.SList = data.data.goods;
          this.GList = data.data.goods;
          console.log(this.SList,this.GList)
      })
  },
  watch: {},
  methods: {
    goodsOrder() {
      this.$router.push("/jinquBsGoodsOrder");
    },
    guideOrder() {
      this.$router.push("/jingquBsGuideOrder");
    }
  },
  components: { Header, Flexbox, FlexboxItem }
};
</script>

<style scoped lang="css">
.order-wrap {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;
}
.box-one {
  width: 92%;
  height: 150px;
  background: #ffffff;
  border-radius: 8px;
  margin: 61px auto 15px;
}
.box-two {
  width: 92%;
  height: 150px;
  background: #ffffff;
  border-radius: 8px;
  margin: 0px auto;
}
.title {
  width: 100%;
  height: 45px;
}
.title p {
  font-size: 16px;
  color: #222222;
  font-weight: bold;
  float: left;
  margin: 10px 0 0 4%;
}
.title span {
  font-weight: normal;
  color: #999999;
  font-size: 14px;
  float: right;
  margin: 12px 4% 0 0;
}
.icon-wrap {
  float: right;
  margin-top: 2px;
}
.line {
  width: 92%;
  height: 1px;
  background: #e5e5e5;
  margin: 0 auto;
}
.content {
  height: 105px;
  width: 100%;
}
</style>
<style lang="less" scoped>
/deep/ .icon-one {
  fill: #999999;
}
.flex-demo {
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
  margin: 24px auto;
  height: 60px;
  width: 50px;
}
.flex-demo p {
  font-size: 24px;
  font-weight: bold;
  color: #222222;
}
.flex-demo span {
  font-size: 15px;
  color: #666666;
}
</style>

