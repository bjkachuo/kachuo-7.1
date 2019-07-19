<template>
  <div class="good-details-boot">
    <p class="goods-action">
      <span style="font-size:14px;" class="iconfont iconkefu"></span>
      <span style="font-size:12px">客服</span>
    </p>
    <p class="goods-action" @click="collectGoods">
      <span v-if="!collectState" style="font-size:14px" class="iconfont iconshoucang1"></span>
      <span
        v-else-if="collectState"
        style="font-size:14px"
        class="iconfont iconshoucang-xuanzhong"
      ></span>
      <span style="font-size:12px">收藏</span>
    </p>
    <p class="goods-action-right" @click="addShoppingCart">
      <span>加入购物车</span>
    </p>
    <p class="goods-action-right-buy" @click="confirmOrder">
      <span>立即购买</span>
    </p>
  </div>
</template>

<script>
  import {  CollectionGoods, SaveShopping } from "@/servers/api";
    export default {
        name: "bottomMenu",

        props:['collectState'],

        methods:{
          // 收藏
          collectGoods() {
            this.$parent.collectState = !this.collectState
            let type = this.collectState === false ? 0 : 1
            this.collectionGoodsMethod(type);
          },
          collectionGoodsMethod(type) {
            CollectionGoods({goodsid: this.$route.query.id, type: 1})
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
              this.$router.push( "/confirmorder?id=" + this.$route.query.id + "&priceback=" + this.$route.query.price );
            } else {
              this.$router.push("/confirmorder?id=" + this.$route.query.id);
            }
          },

          // 添加购物车
          addShoppingCart() {
            SaveShopping({gid: this.$route.query.id})
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
          },
        }

    }
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
    height: 60%;
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
  }
  .goods-action-right-buy {
    height: 100%;
    line-height: 50px;
    flex: 2;
    text-align: center;
    background: #222;
    color: #fff;
  }
</style>
