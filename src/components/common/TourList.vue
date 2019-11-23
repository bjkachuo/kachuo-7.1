<template>
  <div class="wrap">
    <!-- <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>-->
    <!-- <div class="list-filter"> -->
    <!-- <div class="list-click" @click="cateClick">全部</div> -->
    <!-- <div class="list-click" @click="odsClick">智能排序</div>
    </div>-->
    <div class="head">
      <div class="head-left" style="float:left;margin-top:8px;" @click="goback">
        <x-icon type="ios-arrow-back" size="28"></x-icon>
      </div>
      <div class="help-wrap" style="position:absolute;right:15px;top:10px;z-index: 999;">
        <customerService></customerService>
      </div>

      <div class="head-right" style="float:right;font-size:16px;margin-top:10px;margin-right: 40px;" @click="goRegister">导游注册</div>

      <!-- <div class="head-right" style="float:right;font-size:16px;margin-top:10px;margin-right:8px;" @click="goTourBs">导游后台</div> -->
    </div>
    <div class="normal-content" :style="conHei">
      <div class="guide-list">
        <div
          class="guide-cell"
          v-for="(item,index) in TList"
          :key="index"
          @click="details(item.id)"
        >
          <div class="guide-photo">
            <img :src="item.tour_path" alt />

            <div :class="'g-tag-'+item.status" v-if="item.status=='0'">空闲</div>
            <div :class="'g-tag-'+item.status" v-if="item.status=='1'">期满</div>
            <div :class="'g-tag-'+item.status" v-if="item.status=='2'">休息</div>
          </div>
          <div class="guide-cell-bd">
            <div class="g-name">{{item.name}}</div>
            <div class="g-raty">
              <rater
                v-model="item.score"
                active-color="#ffc800"
                :margin="0"
                disabled
                :font-size="15"
              ></rater>
            </div>
            <div class="g-comment">{{item.total}}人评论</div>
            <div class="g-str">
              {{item.price}}
              <p style="font-size:12px;display:inline-block;">元/时</p>
            </div>
          </div>
          <div class="g-right">
            <div class="g-more">{{item.lowest_time}}小时起订</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <actionsheet v-model="show1" :menus="menus" @on-click-menu="click" show-cancel></actionsheet> -->
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Actionsheet, GroupTitle, SwiperItem, XButton, Cell } from "vux";
import { Panel } from "vux";
import { Rater } from "vux";
import customerService from "@/components/common/customerService/customerService";

export default {
  props: [""],
  methods: {
    //去导演后台管理页面
    // goTourBs(){
    //   this.$router.push("/TourBsIndex")
    // },
    //导演注册页面
    goRegister(){
      this.$router.push("/TourRegister")
    },
    //返回
    goback() {
      this.$router.back(-1);
    },
    //跳转导游详情
    details(id) {
      this.$router.push({
        path: "/GuideContent",
        query: {
          idNum: id
        }
      });
    },
    url(link) {
      this.$router.push(link);
    },
    // // 分类
    // cateClick () {
    //   this.show1 = !this.show1
    // },
    // 排序
    odsClick() {
      this.show2 = !this.show2;
    },
    click(key) {
      console.log(key);
    }
  },
  data() {
    return {
      TitleObjData: {
        titleContent: "游吧",
        showLeftBack: true,
        showRightMore: false
      },
      // show1:false,
      show2: false,
      menus: {
        menu1: "吃吧",
        menu2: "喝吧"
      },
      menus2: {
        menu1: "距离最近",
        menu2: "评论排序"
      },
      list: [
        {
          src: require("../../assets/images/daoyou.jpg"),
          tag: "normal",
          name: "李晓晓",
          raty: 4,
          desc: "资质齐全，价格公开透明",
          url: "/"
        },
        {
          src: require("../../assets/images/daoyou.jpg"),
          tag: "normal",
          name: "李晓晓",
          raty: 4,
          desc: "资质齐全，价格公开透明",
          url: "/"
        },
        {
          src: require("../../assets/images/daoyou.jpg"),
          tag: "full",
          name: "李晓晓",
          raty: 4,
          desc: "资质齐全，价格公开透明",
          url: "/"
        },
        {
          src: require("../../assets/images/daoyou.jpg"),
          tag: "disable",
          name: "李晓晓",
          raty: 4,
          desc: "资质齐全，价格公开透明",
          url: "/"
        }
      ],
      TList: []
    };
  },
  mounted() {
    //获取导游列表
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=tourguide.index.getlist&scenic_id=" +
          JSON.parse(sessionStorage.getItem("currentScenic"))
      )
      .then(({ data }) => {
        console.log(data);
        this.TList = data.data.list;
        console.log(this.TList);
      });
  },
  components: {
    Header,
    Actionsheet,
    Rater,
    Cell,
    customerService
  },
  computed: {
    // conHei() {
    //   return {
    //     height: document.documentElement.clientHeight - 90 + "px"
    //   };
    // }
  }
};
</script>
<style lang='css' scoped>
.head {
  height: 45px;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
}
.normal-content {
  height: 94%;
  width: 100%;
  background: #f5f5f5;
  margin-top: 50px;
  overflow: hidden;
  padding: 15px 0;
  overflow-y: scroll;
  box-sizing: border-box;
}
.list-filter {
  position: absolute;
  top: 45px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  background-color: #ffffff;
  height: 45px;
  padding: 0 15px;
}
.list-click {
  position: relative;
  padding-right: 20px;
  line-height: 1.4;
  color: #222222;
  font-size: 14px;
  background: url(../../assets/images/down@2x.png) right center no-repeat;
  background-size: 14px 8px;
}
.guide-list {
  overflow: hidden;
}
.guide-cell:first-child {
  margin-top: 0;
}
.guide-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.04);
  border-radius: 8px;
  padding: 5px 15px;
  margin-top: 15px;
}
.guide-photo {
  position: relative;
  width: 90px;
  height: 90px;
  margin-right: 15px;
  overflow: hidden;
  border-radius: 6px;
}
.g-tag-0 {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  border-bottom-right-radius: 25px;
  color: #ffffff;
  font-size: 12px;
  width: 40px;
  height: 25px;
  line-height: 25px;
  box-sizing: border-box;
  padding-right: 10px;
  background-color: #6b97ff;
}
.g-tag-1 {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  border-bottom-right-radius: 25px;
  color: #ffffff;
  font-size: 12px;
  width: 40px;
  height: 25px;
  line-height: 25px;
  box-sizing: border-box;
  padding-right: 10px;

  background-color: #ff4d4d;
}
.g-tag-2 {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  border-bottom-right-radius: 25px;
  color: #ffffff;
  font-size: 12px;
  width: 50px;
  height: 25px;
  line-height: 25px;
  box-sizing: border-box;
  padding-right: 10px;

  background-color: #999;
}
.guide-photo img {
  border-radius: 6px;
  width: 100%;
}
.g-name {
  font-size: 18px;
}
.g-comment {
  font-size: 12px;
  margin-bottom: 2px;
}
.g-more {
  font-size: 3.7vw;
  line-height: 30px;
  /* background: url(../../assets/images/info@2x.png) left center no-repeat; */
  padding-left: 14px;
  text-align: start;
  color: #222222;
}
.g-str {
  /* background-color: #F5F5F5; */
  border-radius: 6px;
  /* padding: 4px 4px; */
  font-size: 18px;
  color: #ff6b6b;
  /* text-align: center; */
}
.guide-cell-bd {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.guide-cell /deep/ .star {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../../assets/images/star_off.png);
  background-size: contain;
}
.guide-cell /deep/ .is-active .star {
  background-image: url(../../assets/images/star_on.png);
}
.g-right {
  height: 30px;
  width: 23.7%;
  background: linear-gradient(
    90deg,
    rgba(255, 202, 0, 1) 0%,
    rgba(244, 224, 43, 1) 100%
  );
  border-radius: 15px 0px 0px 15px;
  position: absolute;
  right: -7px;
  top: 40%;
}
.guide-cell /deep/ .vux-rater-box {
  width: 20px !important;
}
</style>
