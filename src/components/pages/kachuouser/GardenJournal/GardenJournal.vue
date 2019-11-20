<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="normal-content" :style="conHei">
      <tab
        active-color="#222"
        :line-width="2"
        default-color="#999"
        bar-active-color="#3976FF"
        v-model="index"
        custom-bar-width="60px"
      >
        <tab-item
          class="vux-center"
          v-for="(item, index) in tabList"
          :key="index"
          @on-item-click="getItem(index);"
          :class="{active:index == iscur}"
        >
          <div class="tab-item-text">{{item}}</div>
        </tab-item>
      </tab>
      <div class="tab-panel" v-if="this.index == 0">
        <div
          class="tab-card"
          v-for="(item,index) in PicTextList"
          :key="index"
          @click="getDetailsContentDai(item.id,item.type)"
        >
          <cell>
            <template slot="icon">
              <div class="gar-video">
                <img :src="item.video_img" alt />
              </div>
            </template>
            <template slot="after-title">
              <div class="gar-body">
                <div class="gar-header">
                  <div class="gar-title">{{item.title}}</div>
                  <!-- <div class="gar-sm">{{item.ads}}</div> -->
                </div>
                <div class="gar-foot">
                  <div class="gar-attr">{{item.praise_num}}人收藏</div>
                </div>
              </div>
            </template>
          </cell>
        </div>
      </div>
      <div class="tab-panel" v-if="this.index == 1">
        <div class="tab-card" v-for="(item,index) in PicTextList" :key="index"  @click="getDetailsContentLiao(item.id,item.type)">
          <cell>
            <template slot="icon">
              <div class="gar-video">
                <img :src="item.video_img" alt />
              </div>
            </template>
            <template slot="after-title">
              <div class="gar-body">
                <div class="gar-header">
                  <div class="gar-title">{{item.title}}</div>
                  <!-- <div class="gar-sm">{{item.ads}}</div> -->
                </div>
                <div class="gar-foot">
                  <div class="gar-attr">{{item.praise_num}}人收藏</div>
                </div>
              </div>
            </template>
          </cell>
        </div>
      </div>
      <!-- <div class="tab-panel" v-if="this.index == 2">
        <div class="tab-card" v-for="(item,index) in list2">
          <cell>
            <template slot="icon">
              <div class="gar-photo">
                <img :src="item.src" alt />
              </div>
            </template>
            <template slot="after-title">
              <div class="gar-body">
                <div class="gar-header">
                  <div class="gar-title">{{item.title}}</div>
                  <div class="gar-sm">{{item.ads}}</div>
                </div>
                <div class="gar-foot">
                  <div class="gar-attr">{{item.pp}}人收藏</div>
                  <x-button class="add-card">加入购物侧</x-button>
                </div>
              </div>
            </template>
          </cell>
        </div>
      </div>-->
      <div class="tab-panel" v-if="this.index == 2">
        <div
          class="tab-card"
          v-for="(item,index) in PicTextList"
          :key="index"
          @click="getDetailsContent(item.comment.id,item.type)"
        >
          <cell>
            <template slot="icon">
              <div class="gar-photo">
                <img :src="item.comment.video_img[0]" alt />
              </div>
            </template>
            <template slot="after-title">
              <div class="gar-body">
                <div class="gar-header">
                  <div class="gar-title">{{item.comment.title}}</div>
                </div>
                <div class="gar-foot">
                  <div class="gar-attr">{{item.comment.praise_num}}人收藏</div>
                </div>
              </div>
            </template>
          </cell>
        </div>
      </div>
      <div class="tab-panel" v-if="this.index == 3">
        <div
          class="tab-card"
          v-for="(item,index) in PicTextList"
          :key="index"
          @click="getDetailsContent(item.comment.id,item.type)"
        >
          <cell>
            <template slot="icon">
              <div class="gar-video">
                <img :src="item.comment.video_img[0]" alt />
              </div>
            </template>
            <template slot="after-title">
              <div class="gar-body">
                <div class="gar-header">
                  <div class="gar-title">{{item.comment.title}}</div>
                </div>
                <div class="gar-foot">
                  <div class="gar-attr">{{item.comment.praise_num}}人收藏</div>
                </div>
              </div>
            </template>
          </cell>
        </div>
      </div>
      <div class="tab-panel" v-if="this.index == 4">
        <div
          class="tab-card"
          v-for="(item,index) in PicTextList"
          :key="index"
          @click="getDetailsContent(item.comment.id,item.type)"
        >
          <cell>
            <template slot="icon">
              <div class="gar-video">
                <img :src="item.comment.video_img[0]" alt />
              </div>
            </template>
            <template slot="after-title">
              <div class="gar-body">
                <div class="gar-header">
                  <div class="gar-title">{{item.comment.title}}</div>
                  <div class="gar-sm">{{item.ads}}</div>
                </div>
                <div class="gar-foot">
                  <div class="gar-attr">{{item.comment.praise_num}}人收藏</div>
                </div>
              </div>
            </template>
          </cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tab, TabItem, Cell, XButton } from "vux";
import { CollectionList } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "游园日记",
        showLeftBack: true,
        showRightMore: false
      },
      index: 0,
      tabList: ["记住的", "了解的", "图文随记", "视频创作", "百家讲坛"],
      iscur: 0,
      list: [
        {
          src: require("@/assets/images/少林寺.jpg"),
          title: "少林寺一字禅文化",
          ads: "嵩山少林",
          pp: 58
        },
        {
          src: require("@/assets/images/少林寺.jpg"),
          title: "少林寺一字禅文化",
          ads: "嵩山少林",
          pp: 58
        }
      ],
      list1: [
        {
          src: require("@/assets/images/少林寺.jpg"),
          title: "少林寺一字禅文化",
          ads: "嵩山少林",
          pp: 58
        },
        {
          src: require("@/assets/images/少林寺.jpg"),
          title: "少林寺一字禅文化",
          ads: "嵩山少林",
          pp: 58
        }
      ],
      list2: [
        {
          src: require("@/assets/images/少林寺.jpg"),
          title: "蓬莱阁景区文创书法作品",
          ads: "嵩山少林",
          pp: 58
        },
        {
          src: require("@/assets/images/少林寺.jpg"),
          title: "蓬莱阁景区纪念品复古中国风创 意金属书签",
          ads: "嵩山少林",
          pp: 58
        }
      ],
      //各种列表
      PicTextList: []
    };
  },
  mounted() {
    this.getInitData(5);
  },
  methods: {
    onItemClick(index) {
      console.log("on item click:", index);
    },
    //切换tab同时传递不同type值
    getItem(val) {
      this.iscur = val;
      console.log(this.iscur);
      let type = 5;
      if (val === 2) {
        //图文随记
        type = 10;
      } else if (val === 3) {
        //视频创作
        type = 9;
      } else if (val === 4) {
        //百家讲坛
        type = 8;
      } else if (val === 0) {
        //带走的
        type = 5;
      } else if (val === 1) {
        //了解的
        type = 7;
      }
      this.getInitData(type);
    },
    //获取各种列表
    getInitData(type) {
      // this.PicTextList = [];
      CollectionList({
        type: type
      })
        .then(res => {
          if (res.result === 1) {
            this.PicTextList = res.data.result;
            console.log(this.PicTextList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //跳转图文随记、视频创作、百家讲坛详情
    getDetailsContent(id, type) {
      console.log(id, type);
      if (type == 10) {
        //图文随记详情页
        this.$router.push("/imageandtextdetails?type=" + type + "&id=" + id);
      } else if (type == 9 || 8) {
        //百家讲坛、视频创作详情页
        this.$router.push(
          "/informationconsumdetails?type=" + type + "&id=" + id
        );
      }
    },
    //跳转带走的
    getDetailsContentDai(id, type) {
      this.$router.push(
        "/scencestorydetail?type=" + type + "&id=" + id + "&branch=" + 1
      );
    },
    //跳转了解的
    getDetailsContentLiao(id, type) {
      this.$router.push(
        "/scencestorydetail?type=" + type + "&id=" + id + "&branch=" + 2
      );
    }
  },
  components: {
    Header,
    Tab,
    TabItem,
    Cell,
    XButton
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.vux-tab .vux-tab-item {
  background: none;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  font-size: 16px;
  font-weight: bold;
}
.vux-tab-wrap /deep/ .vux-tab-container {
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
}
.tab-panel {
  padding: 15px 0;
}
.tab-card {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 15px 0px rgba(0, 101, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
}
.tab-card .weui-cell {
  padding: 15px;
}
.gar-photo {
  width: 90px;
  height: 90px;
  margin-right: 15px;
}
.gar-photo img {
  width: 90px;
  height: 90px;
  border-radius: 4px;
}
.gar-video {
  position: relative;
  width: 90px;
  height: 90px;
  margin-right: 15px;
}
.gar-video img {
  width: 90px;
  height: 90px;
  border-radius: 4px;
}
.gar-video:after {
  display: block;
  width: 30px;
  height: 30px;
  background: url(../../../../assets/images/plahyicon.png) center no-repeat;
  background-size: contain;
  content: "　";
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  z-index: 2;
}

.tab-card .weui-btn {
  border-radius: 35px;
  height: 35px;
  width: 90px;
  font-size: 14px;
  margin: 0;
}
.tab-card .weui-btn:after {
  display: none;
}
.add-card {
  color: #3976ff;
  border: 1px solid #3976ff;
  background-color: transparent;
}
.btn-blue {
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(57, 118, 255, 1) 0%,
    rgba(57, 150, 255, 1) 100%
  );
}
.btn-failed {
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 57, 57, 1) 0%,
    rgba(255, 89, 56, 1) 100%
  );
}
.btn-disable {
  background: #cccccc;
  color: #ffffff;
}
.gar-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
.gar-sm {
  color: #666;
  font-size: 12px;
}
.gar-attr {
  font-size: 14px;
}
.gar-body {
  height: 90px;
  line-height: 1.4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  flex-direction: column;
}
.gar-foot {
  position: relative;
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
}
</style>
