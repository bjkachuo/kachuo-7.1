<template>
  <div class="goods-wrap" :style="contentSty">
    <div
      class="order-state-list-wrap"
      v-for="(item,index) in orderData"
      :key="index"
      @click="getGoodsDetails(item.comment.id)"
    >
      <div class="order-state-list-mid">
        <div class="order-state-list-mid-left">
          <img class="goods-img" v-lazy="item.comment.thumb" alt srcset />
          <p class="goods-img-desc">
            <span class="text-overflow-hidden">{{item.comment.title}}</span>
            <!-- <span class="font-12-px">{{item.spec}}</span> -->
            <span style="margin-bottom: 5px;">价格：{{item.comment.marketprice}}元</span>
            <span>
              <div class="left">0人收藏</div>
              <div class="right" @click.stop="addShoppingCart(item.comment.id)">
                <p>加入购物车</p>
              </div>
            </span>
            <!-- <span>收藏时间：{{item.createtime | formDate}}</span> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XButton } from "vux";
import { getLocalTime } from "@/assets/js/tools";
import { SaveShopping } from "@/servers/api";

export default {
  name: "",
  props: ["orderData"],
  data() {
    return {};
  },

  components: {
    XButton
  },
  filters: {
    formDate(val) {
      return getLocalTime(val);
    }
  },
  computed: {
    contentSty() {
      return { height: document.documentElement.clientHeight - 100 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    getGoodsDetails(id) {
      this.$router.push("/goodsdetails?id=" + id);
    },
    // 添加购物车
    addShoppingCart(id) {
      SaveShopping({ gid:id })
        .then(res => {
          if (res.result === 1) {
            this.$vux.toast.show({
              type: "success",
              text: "添加成功",
              time: 1000
            });
          } else {
            this.$vux.toast.show({
              type: "warn",
              text: res.msg,
              time: 1000
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
.goods-wrap {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 56px;
}
.font-12-px {
  font-size: 12px;
  color: #999;
}
.order-state-list-wrap {
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: 10px;
  background: #fff;
}
.order-state-list-top {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.order-state-list-mid {
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border-bottom: 1px solid #eee; */
  box-sizing: border-box;
}
.order-state-list-bot {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.order-state-list-mid-left {
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.order-state-list-mid-right {
  flex: 1;
  text-align: right;
}
.goods-img {
  width: 70px;
  height: 70px;
  display: inline-block;
}
.goods-img-desc {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow: hidden;
}
.order-state-list-bot-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
}
.order-state-list-bot-bot {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.text-overflow-hidden {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
.left {
  float: left;
}
.right {
  float: right;
  width: 92px;
  height: 30px;
  border-radius: 15px;
  background: #ffffff;
  border: 1px solid #3976ff;
}
.right p {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  color: #3976ff;
}
</style>