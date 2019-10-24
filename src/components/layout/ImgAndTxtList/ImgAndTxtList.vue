<template>
  <div>
    <p style="text-align:center;" v-if="!dataList.length && dataList.length!=0">
      <inline-loading></inline-loading>
      <span style="vertical-align:middle;display:inline-block;font-size:14px;">加载中</span>
    </p>
    <p style="text-align:center;" v-if="dataList.length === 0">
      <span style="vertical-align:middle;display:inline-block;font-size:14px;">加载中</span>
    </p>
    <main class="position-box" v-else-if="dataList.length">
      <vue-better-scroll
        class="wrapper"
        ref="scroll"
        :scrollbar="scrollbarObj"
        :pullDownRefresh="pullDownRefreshObj"
        :pullUpLoad="pullUpLoadObj"
        :startY="parseInt(startY)"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp"
      >
        <div style="overflow: hidden">
          <div class="dataList" ref="col1">
            <div v-for="item in dataList1" class="card">
              <div class="img" @click="getDetailsContent(item.id)">
                <img :src="item.video_img[0]" width="100%" />
                <div class="address">
                  <i></i>
                  {{item.address}}
                </div>
              </div>
              <div class="summary">{{item.summary}}</div>
              <div class="bottom">
                <div class="avata">
                  <img :src="item.release_img" alt />
                </div>
                <div
                  class="name"
                  style="overflow: hidden;text-overflow: ellipsis;white-space:nowrap;width: 120px;"
                >{{item.release_name}}</div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="dataList" ref="col2" style=" margin-left: 0;">
            <div v-for="item in dataList2" class="card">
              <div class="img" @click="getDetailsContent(item.id)">
                <img :src="item.video_img[0]" width="100%" />
                <div class="address">
                  <i></i>
                  {{item.address}}
                </div>
              </div>
              <div class="summary">{{item.summary}}</div>
              <div class="bottom">
                <div class="avata">
                  <img :src="item.release_img" alt />
                </div>
                <div
                  class="name"
                  style="overflow: hidden;text-overflow: ellipsis;white-space:nowrap;width: 120px;"
                >{{item.release_name}}</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <!--        <div v-for="(item,index) in dataList" :key="index" >-->
        <!--          <Divider></Divider>-->

        <!--          <div class="img-and-txt-list-for" @click="getDetailsContent(item.id)">-->
        <!--            <div class="img-and-txt-left">-->
        <!--              <p class="img-and-txt-left-top text-show-line3">{{item.summary}}</p>-->
        <!--              <p class="img-and-txt-left-bot">-->
        <!--                <img :src="item.release_img" alt srcset class="img-and-txt-left-header">-->
        <!--                <span class="img-and-txt-left-name">{{item.release_name}}</span>-->
        <!--                <span class="img-and-txt-left-place" style="color:#999">-->
        <!--                  <span class="iconfont icondingwei text-overflow-hidden"></span>-->
        <!--                  {{item.address | stringToArr}}-->
        <!--                </span>-->
        <!--              </p>-->
        <!--            </div>-->
        <!--            <div class="img-and-txt-right">-->
        <!--              <img :src="item.video_img[0]" alt srcset class="img-and-txt-right-img">-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </vue-better-scroll>
    </main>
  </div>
</template>

<script>
let totalCount = 0;
import { InlineLoading } from "vux";
import { SeourceCreatedList } from "@/servers/api";
import Divider from "@/components/common/DividedArea";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dataList: [],
      dataList1: [],
      dataList2: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据",
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 70,
        stop: 40
      },
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: "加载更多",
          noMore: "没有更多数据了"
        }
      },
      startY: 45,
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      items: [],
      page: 1
    };
  },

  components: {
    InlineLoading,
    Divider
  },
  filters: {
    stringToArr(str) {
      if (str) {
        return str.split(",")[0].substring(0, str.split(",")[0].length - 1);
      } else {
        return "未知";
      }
    }
  },

  mounted() {
    this.onPullingDown();
  },

  methods: {
    getDetailsContent(id) {
      let type = this.$route.query.branch;
      this.$router.push("/imageandtextdetails?type=" + type + "&id=" + id);
    },
    // 滚动到页面顶部
    scrollTo() {
      this.$refs.scroll.scrollTo(
        this.scrollToX,
        this.scrollToY,
        this.scrollToTime
      );
    },

    mount(arg) {
      let temp = this.dataList;
      let index = arg || 0;
      let refName = this.selectCol();
      if (temp.length > index) {
        this[refName].push(this.dataList[index]);
        this.$nextTick(() => {
          this.mount(index + 1);
        });
      }
    },
    selectCol() {
      let getHeight = ref => {
        return this.$refs[ref].offsetHeight;
      };
      let height1 = getHeight("col1");
      let height2 = getHeight("col2");

      switch (Math.min(height1, height2)) {
        case height1:
          return "dataList1";
        case height2:
          return "dataList2";
      }
    },
    // 数据初始化
    getData() {
      return new Promise(resolve => {
        let arr = [];
        SeourceCreatedList({
          type: 10,
          page: this.page
        })
          .then(res => {
            if (res.result === 1) {
              totalCount = res.data.totalofnum;
              setTimeout(() => {
                if (res.data.comment.length) {
                  arr = res.data.comment;
                  resolve(res.data.comment);
                } else {
                  this.$refs.scroll.forceUpdate(false);
                }
              }, 1000);
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    onPullingDown() {
      // this.$router.push('/')
      totalCount = 0;
      this.page = 1;
      this.getData().then(res => {
        this.dataList = res;
        this.$nextTick(() => {
          this.$refs.scroll.forceUpdate(true);
          this.mount();
        });
      });
    },
    onPullingUp() {
      this.page += 1;
      this.getData().then(res => {
        this.dataList = this.dataList.concat(res);
        if (this.dataList.length < totalCount) {
          this.$refs.scroll.forceUpdate(true);
        } else {
          this.$refs.scroll.forceUpdate(false);
        }
        this.mount();
      });
    },
    back() {
      this.$router.goBack();
    },
    releaseContent() {
      this.$router.push("/releaseimgandtext");
    }
  },

  watch: {}
};
</script>
<style scoped>
.dataList {
  width: calc(50% - 15px);
}
</style>
<style lang='less' scoped>
.scroll-wrapper {
  background-color: #f5f5f5;
}
.dataList {
  margin: 10px;
  float: left;
  .card {
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.08);
    .img {
      position: relative;
      .address {
        position: absolute;
        line-height: 20px;
        padding: 0 10px;
        background-color: rgba(0, 0, 0, 0.5);
        left: 10px;
        bottom: 15px;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        i {
          display: inline-block;
          width: 9px;
          height: 11px;
          margin-right: 3px;
          top: 1px;
          position: relative;
          background-size: 100% 100%;
          background-image: url("./pisition.png");
        }
      }
    }
    .summary {
      padding: 0 10px;
      margin: 5px 0;
      font-size: 14px;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .bottom {
      margin: 0 10px;
      .avata {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}
.img-and-txt-list-wrap {
  background: #f9f9f9;
}
.position-box {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
