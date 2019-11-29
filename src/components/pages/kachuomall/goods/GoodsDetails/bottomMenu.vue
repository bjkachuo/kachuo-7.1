<template>
  <div class="good-details-boot">
    <p class="goods-action" @click="iframeShow = true">
      <span style="font-size:14px;" class="kefu"></span>
      <span style="font-size:12px">客服</span>
    </p>
    <p class="goods-action" @click="collectGoods">
      <span  class="shoucang"></span>
      <span style="font-size:12px">购物车</span>
    </p>
    <p class="goods-action-right" @click="addShoppingCart">
      <span>加入购物车</span>
    </p>
    <p class="goods-action-right-buy" @click="confirmOrder">
      <span>立即购买</span>
    </p>

    <iframe
      v-if="iframeShow"
      :src="usermobile"
      style="position: fixed;z-index: 99998;top: 0;left: 0;width: 100%;height: 100%;"
    ></iframe>
    <div
      style="position: fixed;line-height: 50px;right: 20px;z-index: 999999;top: 0;color: #fff"
      v-if="iframeShow"
      @click="iframeShow = false"
    >关闭</div>
  </div>
</template>

<script>
import { CollectionGoods, SaveShopping } from "@/servers/api";
export default {
  name: "bottomMenu",

  data() {
    return {
      iframeShow: false,
      usermobile: ""
    };
  },

  props: ["collectState"],

  methods: {
    // 收藏
    collectGoods() {
      this.$router.push('/Cartment')
    },
    collectionGoodsMethod(type) {
      CollectionGoods({ goodsid: this.$route.query.id, type: 1 })
        .then(res => {
          if (res.result === 1) {
            if (type === 1) {
              this.$vux.toast.show({
                type: "success",
                text: "收藏成功",
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
    // 确认清单
    confirmOrder() {
      if (this.$route.query.price) {
        this.$router.push("/confirmorder?id=" + this.$route.query.id + "&priceback=" + this.$route.query.price);
      } else {
        this.$router.push("/confirmorder?id=" + this.$route.query.id);
      }
    },
    // 添加购物车
    addShoppingCart() {
      SaveShopping({ gid: this.$route.query.id })
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

  created() {
    this.usermobile =
      "https://webchat.7moor.com/wapchat.html?accessId=2afa4960-b1df-11e9-9f4b-b35872e70bca&fromUrl=&urlTitle=" +
      this.GLOBAL.getSession("userLoginInfo").mobile;
  }
};
</script>

<style scoped>
.good-details-boot {
  width: 100%;
  height: 50px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  box-sizing: border-box;
}
.goods-action {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid #eee;
}
.goods-action span {
  font-size: 12px;
}
.goods-action-right {
  flex: 2;
  text-align: center;
  height: 100%;
  background-color: #000;
  color: #fff;
  line-height: 50px;
}
.goods-action-right-buy {
  height: 100%;
  line-height: 50px;
  flex: 2;
  text-align: center;
  background: #222;
  color: #fff;
  background: #3976ff;
}
.shoucang{
  width: 22px;
  height: 22px;
  display: inline-block;
  background-image: url("../../../../../assets/images/car.png");
  background-size: 100% 100%;
}
.kefu{
  width: 22px;
  height: 22px;
  display: inline-block;
  background-image: url("../../../../../assets/images/kefu.png");
  background-size: 100% 100%;
}
</style>
