<template>
  <div class="give-a-like-wrap">
    <span class="like-wrap">
      <span @click="giveLike">
        <span style="margin-right:10px">{{praiseNum}}</span>
        <span v-if="!clickState" class="iconfont iconzan"></span>
        <span v-else-if="clickState" class="iconfont icondianzan"></span>
      </span>
      <span class="line-grad"></span>
      <span class="collection" @click="collectionFn">
        <span v-if="isCollection ===1" class="iconfont iconshoucang-xuanzhong"></span>
        <span v-if="isCollection !=1" class="iconfont iconshoucang1"></span>
        <span>收藏</span>
      </span>
    </span>
  </div>
</template>

<script>
import { NewsKachuoInpraise } from "@/servers/api";
import { GetCollectionInit, CollectionGoods } from "@/servers/api";
import { Confirm } from "vux";

export default {
  name: "",
  props: ["praiseNum", "clickState", "praiseNum"],
  data() {
    return {
      isCkick: false,
      isCollection: 1,
      show2: false
    };
  },

  components: {
    Confirm
  },

  computed: {},

  beforeMount() {},
  created() {},
  mounted() {
    this.getCollectionInitState();
  },

  methods: {
    // 获取收藏初始状态
    getCollectionInitState() {
      GetCollectionInit({
        goodsid: this.$route.query.id,
        type: this.$route.query.type
      })
        .then(res => {
          if (res.result) {
            this.isCollection = parseInt(res.data.result, 10);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // collectionFn() {
    //   this.show2 = !this.show2;
    // },
    // 点击收藏
    collectionFn() {
      if(this.isCollection){
        return
      }
      CollectionGoods({
        goodsid: this.$route.query.id,
        type: this.$route.query.type
      })
        .then(res => {
          if (res.result === 1) {
            this.isCollection = res.data.result;
            if (res.data.result === 0) {
              this.$vux.toast.show({
                type: "success",
                text: "收藏成功扣除0.3积分",
                time: 1000
              });
            } else {
              this.$vux.toast.show({
                type: "success",
                text: "取消收藏",
                time: 1000
              });
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    giveLike() {
      let flag = this.$parent.clickState;
      let type = flag === 0 ? 1 : 0;
      NewsKachuoInpraise({
        id: this.$route.query.id,
        type: type,
        branch: this.$route.query.type
      })
        .then(res => {
          if (res.result === 1) {
            this.$vux.toast.show({
              type: "success",
              text: "感谢评价",
              time: 1000,
              onHide: () => {
                this.$emit("changePhriseState", type);
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.like-wrap {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.give-a-like-wrap {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #999;
  position: relative;
  z-index: 999;
  background: #fff;
}
.collection {
  width: 60px;
  height: 20px;
  display: inline-block;
  margin-left: 10px;
  position: relative;
  top: -2px;
}
.line-grad {
  width: 1px;
  height: 18px;
  display: inline-block;
  border-left: 1px solid #eee;
  margin-left: 10px;
}
</style>
