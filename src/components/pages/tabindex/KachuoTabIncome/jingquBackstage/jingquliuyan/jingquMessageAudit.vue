<template>
  <div class="Audit-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="list" style="margin-top:56px;">
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
          </div>-->
        </div>
        <div class="liuyan-wrap">
          <p>
            蓬莱阁旅游景区，是国家级5A级风景区，位于山
            东省蓬莱市，小城在海边。
          </p>
        </div>
        <div class="img-list">
          <div class="images-wrap">
            <img src alt />
          </div>
          <div class="images-wrap">
            <img src alt />
          </div>
        </div>
        <div class="bottom-wrap">
          <div class="no">
            <p>不合格</p>
          </div>
          <div class="yes">
            <p>合格</p>
          </div>
        </div>
      </div>
      <div class="line-one">
        <div class="name-wrap">
          <div class="img-wrap">
            <img src alt />
          </div>
          <div class="txt-wrap">
            <p>木子菲菲</p>
          </div>
        </div>
        <div class="liuyan-wrap">
          <p>
            蓬莱阁旅游景区，是国家级5A级风景区，位于山
            东省蓬莱市，小城在海边。
          </p>
        </div>
        <div class="bottom-wrap">
          <div class="no">
            <p>不合格</p>
          </div>
          <div class="yes">
            <p>合格</p>
          </div>
        </div>
      </div>
    </div>
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
  min-height: 178px;
  background: #ffffff;
  border-radius: 8px;
  margin: 0 auto 10px;
  overflow: hidden;
  border-radius: 12px;
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
  margin: 0 auto 15px;
  height: 48px;
}
.liuyan-wrap p {
  font-size: 16px;
  color: #333333;
}
.img-list {
  height: 71px;
  width: 92%;
  margin: 0 auto 15px;
}
.images-wrap {
  height: 100%;
  width: 113px;
  float: left;
  margin-right: 3px;
}
.images-wrap img {
  width: 100%;
}
.bottom-wrap {
  height: 35px;
  width: 100%;
  margin-bottom: 10px;
}
.no {
  float: left;
  width: 100px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #ff8585;
  border-radius: 16px;
  margin: 0 10px 0 40%;
}
.no p {
  line-height: 35px;
  color: #ff8585;
  text-align: center;
  font-size: 14px;
}
.yes {
  float: left;
  width: 100px;
  height: 35px;
  background: #3976ff;
  border-radius: 16px;
}
.yes p {
  line-height: 35px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
}
</style>
