<template>
  <div class="ol-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" style="top:-43px"></Header>
    <b>
      <div class="t-content" v-for="(item,index) in dataListOne" :key="index">
        <div class="t-left">
          <div class="img-wrap">
            <img :src="item.ImgUrl" alt />
          </div>
          <div class="txt-wrap">
            <div class="t-one">
              <p>{{item.Name}}</p>
            </div>
            <div class="t-two">
              <p>当前景区</p>
            </div>
            <div class="t-three">
              <p>¥{{item.MarketPrice}}</p>
            </div>
          </div>
        </div>
        <div class="t-right" @click="order(item.Id)">
          <p>购票</p>
        </div>
      </div>
    </b>
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "在线购票",
        showLeftBack: true,
        showRightMore: false
      },
      dataListOne: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    //获取票列表
    this.$http
      .post(
        "http://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.ticket.getlist"
      )
      .then(({ data }) => {
        console.log(data);
        this.dataListOne = data.data;
        console.log(this.dataListOne);
      });
  },
  methods: {
    order(Id){
      this.$router.push('/onlineTicketing/orderCompletion?id='+Id)
    }
  },

  components: {
    Header
  }
};
</script>

<style scoped lang="css">
.ol-wrap {
  background: #f5f5f5;
}
b {
  font-weight: normal;
  display: block;
  width: 100%;
  margin-top: 56px;
}
.t-content {
  width: 92%;
  height: 110px;
  background: #ffffff;
  margin: 0 auto 15px;
  border-radius: 8px;
}
.t-left {
  width: 66%;
  height: 90px;
  float: left;
  margin: 8px 0 0 4%;
}
.img-wrap {
  height: 90px;
  width: 90px;
  float: left;
}
.img-wrap img {
  width: 100%;
}
.txt-wrap {
  width: 96px;
  height: 101px;
  float: left;
  margin-left: 4%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.t-one p {
  font-size: 12px;
  color: #222222;
  font-weight: 600;
}
.t-two {
  width: 60px;
  height: 20px;
  background: #b8cdff;
  border-radius: 8px;
  margin: 6px 0 11px;
}
.t-two p {
  color: #ffffff;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
}
.t-three p {
  font-size: 20px;
  color: #ff3939;
  font-weight: 800;
}
.t-right {
  float: right;
  width: 75px;
  height: 30px;
  border-radius: 15px;
  background: #3976ff;
  margin: 38px 4% 0 0;
}
.t-right p {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}
.explain-wrap {
  width: 92%;
  height: 110px;
  margin: 0 auto 10px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
</style>
