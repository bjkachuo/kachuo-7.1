<template>
  <div class="Audit-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="line-one">
      <div class="name-wrap">
        <div class="img-wrap">
          <img src alt />
        </div>
        <div class="txt-wrap">
          <p>木子菲菲</p>
        </div>
        <!-- <div class="tong-wrap">
          <img src="./lajitong.png" alt />
        </div> -->
      </div>
      <div class="liuyan-wrap">
        <p>
          蓬莱阁旅游景区，是国家级5A级风景区，位于山
          东省蓬莱市，小城在海边。
        </p>
      </div>
    </div>
    <div class="line-two"></div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "留言审核",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Header
  }
};
</script>

<style scoped lang="css">
.Audit-wrap {
  background: #f5f5f5;
}
.line-one {
  width: 100%;
  height: 264px;
  background: #ffffff;
  border-radius: 8px;
  margin: 56px auto 10px;
  overflow: hidden;
  border-radius: 12px;
}
.line-two {
  width: 100%;
  height: 178px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}
.name-wrap {
  height: 35px;
  width: 92%;
  margin-top: 20px;
  margin: 20px auto 10px;
}
.img-wrap {
  width: 35px;
  height: 35px;
  float: left;
  margin-right: 4%;
}
.img-wrap img {
  width: 100%;
}
.txt-wrap {
  height: 35px;
  width: 47%;
  float: left;
}
.txt-wrap p {
  line-height: 35px;
}
/* .tong-wrap {
  width: 24px;
  height: 24px;
  float: right;
  margin-top: 3px;
}
.tong-wrap img {
  width: 100%;
} */
.liuyan-wrap {
  width: 92%;
  height: 40px;
  margin: 0 auto;
  height: 48px;
}
.liuyan-wrap p {
  font-size: 16px;
  color: #333333;
}
</style>
