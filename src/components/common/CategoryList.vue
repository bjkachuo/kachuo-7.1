<template>
  <div class="categoryList-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="categoryList-content">
      <div
        class="classified-box"
        v-for="(item,index) in List"
        :key="index"
        @click="watchGoodsDetails(item.goods_id,item.id,item.rent,item)"
      >
        <div class="img-wrap">
          <img :src="item.thumb" alt />
        </div>
        <p>{{item.goods_name}}</p>
        <span class="left">￥{{item.marketprice}}</span>
        <!-- <span class="right">00</span> -->
      </div>
      <!-- <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>
      <div class="classified-box">
        <div class="img-wrap">
          <img src alt />
        </div>
        <p>书法作品——如意井陉</p>
        <span class="left">￥200.</span>
        <span class="right">00</span>
      </div>-->
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  props: {},
  data() {
    return {
      List: [],
      TitleObjData: {
        titleContent: this.$route.query.name + "专区",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$route.query.id);
    console.log(this.$route.query.name);
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=shop.show.cateshoplist&cateid=" +
          this.$route.query.id
      )
      .then(({ data }) => {
        console.log(data.data.list);
        this.List = data.data.list;
      });
  },
  watch: {},
  methods: {
    watchGoodsDetails(goodsId, id, rent, item) {
      if (!rent) {
        let gid = goodsId ? goodsId : id;
        this.$router.push("/goodsdetails?id=" + gid);
      } else {
        sessionStorage.setItem("backleasedetails", JSON.stringify(item));
        this.$router.push("/backleasedetails");
      }
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped lang="css">
.categoryList-wrap {
  height: 100%;
  background: #ffffff;
}
.categoryList-content {
  height: 96%;
  width: 92%;
  margin: 46px auto 0;
  overflow-y: auto;
}
.classified-box {
  width: 48%;
  height: 33%;
  margin-bottom: 7.2%;
  float: left;
}
.categoryList-content .classified-box:nth-child(odd) {
  margin-right: 4%;
}
.classified-box .img-wrap {
  height: 75%;
  width: 100%;
}
.classified-box .img-wrap img {
  width: 100%;
  /* height: auto; */
}
.classified-box p {
  font-size: 14px;
  color: #222222;
  margin-top: 6%;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.classified-box .left {
  font-size: 18px;
  color: #222222;
  margin-top: 4%;
  font-weight: bold;
}
.classified-box .right {
  font-size: 14px;
  color: #222222;
  margin-top: 6%;
  font-weight: bold;
}
</style>
