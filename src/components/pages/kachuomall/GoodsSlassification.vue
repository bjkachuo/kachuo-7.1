<template>
  <div class="classification-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="content-box">
      <div class="line-one">
        <li @click="goOne(item.id,item.name)" v-for="(item,index) in List" :key="index">
          <div class="img-wrap">
            <img :src=item.thumb alt />
          </div>
          <p>{{item.name}}</p>
        </li>
        <!-- <li class="mid-box">
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(1).png" alt />
          </div>
          <p>绘画</p>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(2).png" alt />
          </div>
          <p>陶瓷</p>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(2).png" alt />
          </div>
          <p>陶瓷</p>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(2).png" alt />
          </div>
          <p>陶瓷</p>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(2).png" alt />
          </div>
          <p>陶瓷</p>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(2).png" alt />
          </div>
          <p>陶瓷</p>
        </li> -->
      </div>
      <!-- <div class="line-two">
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(3).png" alt />
          </div>
          <p>雕刻</p>
        </li>
        <li class="mid-box">
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(4).png" alt />
          </div>
          <p>陶器</p>
        </li>
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(5).png" alt />
          </div>
          <p>刺绣</p>
        </li>
      </div>
      <div class="line-three">
        <li>
          <div class="img-wrap">
            <img src="../../../assets/images/classification/图@2x(6).png" alt />
          </div>
          <p>非遗</p>
        </li>
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
      List:[],
      // num:"",
      TitleObjData: {
        titleContent: "商城分类",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=shop.show.catelist"
      )
      .then(({ data }) => {
        console.log(data.data);
        this.List = data.data
        // this.num = data.data.id
        console.log(this.List)
      });
  },
  watch: {},
  methods: {
    goOne(num,name) {
      this.$router.push("/CategoryList?id="+num+"&name="+name);
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped lang="css">
li {
  list-style: none;
  height: 116px;
  width: 29%;
}
p {
  text-align: center;
  color: #666666;
  font-size: 16px;
  margin-top: 5px;
}
.classification-wrap {
  background: #f5f5f5;
  height: 100%;
}
.content-box {
  height: 270px;
  width: 92%;
  background: #ffffff;
  margin: 62px auto 0;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  overflow: hidden;
}
.line-one {
  width: 87%;
  /* height: 116px; */
  height: 100%;
  /* margin: 20px auto 12px; */
  margin: 4% auto 2%;
}
.line-one li {
  float: left;
  margin-bottom: 3%;
}
.line-one li:nth-child(3n-1) {
  margin: 0 6.5%;
}
.line-two {
  /* width: 87%; */
  /* height: 116px; */
  /* height: 28%; */
  /* margin: 0 auto 12px; */
  /* margin: 0 auto 2%; */
}
.line-two li {
  /* float:left; */
}
.line-three {
  /* width: 87%; */
  /* height: 116px; */
  /* height: 28%;
  margin: 0 auto; */
}
.img-wrap {
  height: 90px;
}
img {
  width: 100%;
  height: auto;
}
.mid-box {
}
</style>
