<template>
  <main class="position-box" :style="scrollHeight">
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
      <!-- <div style="width:92%;margin: 15px auto 30px;">
        <swiper auto height="100px" class="custom">
          <swiper-item class="black">
            <h2 class="title fadeInUp animated">它无孔不入</h2>
          </swiper-item>
          <swiper-item class="black">
            <h2 class="title fadeInUp animated">你无处可藏</h2>
          </swiper-item>
          <swiper-item class="black">
            <h2 class="title fadeInUp animated">不是它可恶</h2>
          </swiper-item>
        </swiper>
      </div>-->

      <GoodsList :goodList="goodsListData"></GoodsList>
      <!-- <p style="text-align:center" v-show="goodsListData.length===0">暂无数据</p> -->
    </vue-better-scroll>
  </main>
</template>
 
<script>
import { ShopGoodsList, getScenicList } from "@/servers/api";
import GoodsList from "@/components/layout/GoodsListBack";
import { buyBackList } from "@/servers/api";
// import { Swiper, SwiperItem } from "vux";

let totalCount = 0;
export default {
  name: "app",
  components: {
    GoodsList
    // Swiper,
    // SwiperItem
  },
  data() {
    return {
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
      startY: "0",
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      items: [],
      goodsListData: [],
      noData: false,
      page: 1
    };
  },
  computed: {
    scrollHeight() {
      return { height: document.documentElement.clientHeight - 300 + "px" };
    }
  },
  mounted() {
    this.onPullingDown();
  },
  methods: {
    // 滚动到页面顶部
    scrollTo() {
      this.$refs.scroll.scrollTo(
        this.scrollToX,
        this.scrollToY,
        this.scrollToTime
      );
    },
    // 回购数据请求
    getData() {
      return new Promise(resolve => {
        buyBackList({
          page: this.page
        })
          .then(res => {
            if (res.result === 1) {
              totalCount = res.data.totalofnum;
              this.noData =
                res.data.currentpage === res.data.totalpage ? true : false;
              resolve(res.data.result);
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    // 下拉刷新
    onPullingDown() {
      totalCount = 0;
      this.page = 1;
      this.getData().then(res => {
        this.goodsListData = res;
        setTimeout(() => {
          this.$nextTick(() => {
            this.$refs.scroll.forceUpdate(true);
          });
        }, 1000);
      });
    },
    // 加载更多数据
    onPullingUp() {
      if (this.noData) {
        this.$refs.scroll.forceUpdate(false);
        return;
      }
      this.page += 1;
      this.getData().then(res => {
        this.goodsListData = this.goodsListData.concat(res);
        if (this.goodsListData.length < totalCount) {
          this.$refs.scroll.forceUpdate(true);
        } else {
          this.$refs.scroll.forceUpdate(false);
        }
      });
    }
  }
};
</script> 
 
<style>
.position-box {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style> 
