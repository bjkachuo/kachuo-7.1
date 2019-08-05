<template>
  <div class="footprint-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="footprint-content">
      <div class="footprint-list">
        <div class="footprint-list-one" v-for="(item,index) in List" :key="index">
          <div class="data">{{item.date}}</div>
          <div
            class="footprint-detils"
            v-for="(item2,index) in item.list"
            :key="index"
            @click="watchGoodsDetails(item2.goods_id,item2.id,item2.rent,item2)"
          >
            <div class="left">
              <img :src="item2.thumb" alt />
            </div>
            <div class="right">
              <div class="top">
                <p>{{item2.title}}</p>
              </div>
              <div class="bottom">
                <p>￥{{item2.marketprice}}</p>
                <button @click.stop="addShoppingCart(item2.id)">加入购物车</button>
              </div>
            </div>
          </div>
          <!-- <div class="footprint-detils">
            <div class="left">
              <img src="" alt />
            </div>
            <div class="right">
              <div class="top">
                <p>书法作品——如意井陉</p>
              </div>
              <div class="bottom">
                <p>￥200.00</p>
                <button>加入购物车</button>
              </div>
            </div>
          </div>
          <div class="footprint-detils">
            <div class="left">
              <img src="" alt />
            </div>
            <div class="right">
              <div class="top">
                <p>书法作品——如意井陉</p>
              </div>
              <div class="bottom">
                <p>￥200.00</p>
                <button>加入购物车</button>
              </div>
            </div>
          </div>-->
        </div>
        <!-- <div class="footprint-list-one">
          <div class="data">7月20日</div>
          <div class="footprint-detils">
            <div class="left">
              <img src="" alt />
            </div>
            <div class="right">
              <div class="top">
                <p>书法作品——如意井陉</p>
              </div>
              <div class="bottom">
                <p>￥200.00</p>
                <button>加入购物车</button>
              </div>
            </div>
          </div>
          <div class="footprint-detils">
            <div class="left">
              <img src="" alt />
            </div>
            <div class="right">
              <div class="top">
                <p>书法作品——如意井陉</p>
              </div>
              <div class="bottom">
                <p>￥200.00</p>
                <button>加入购物车</button>
              </div>
            </div>
          </div>
          <div class="footprint-detils">
            <div class="left">
              <img src="" alt />
            </div>
            <div class="right">
              <div class="top">
                <p>书法作品——如意井陉</p>
              </div>
              <div class="bottom">
                <p>￥200.00</p>
                <button>加入购物车</button>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { getDetail, CollectionGoods, SaveShopping } from "@/servers/api";
export default {
  props: {},
  data() {
    return {
      //足迹列表
      List: [],
      // ListTwo:[],
      num: [],
      TitleObjData: {
        titleContent: "商品足迹",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=goods.details.user_record"
      )
      .then(({ data }) => {
        // console.log(data.data.data);
        this.List = data.data.data;
        // this.num = data.data.data[item].id

        console.log(this.List);
        // console.log(this.num)
        // console.log(this.ListTwo)
      });
    //测试积分
    // this.$http
    //   .post(
    //     "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=integral.user_integral&category=1&module_id=92"
    //   )
    //   .then(({ data }) => {
    //     console.log(data);
    //   });
  },
  watch: {},
  methods: {
    addShoppingCart(id) {
      SaveShopping({
        gid: id
      })
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
    watchGoodsDetails(goodsId, id, rent, item) {
      if (!rent) {
        let gid = goodsId ? goodsId : id;
        this.$router.push("/goodsdetails?id=" + gid);
      } else {
        sessionStorage.setItem("backleasedetails", JSON.stringify(item));
        this.$router.push("/backleasedetails");
      }
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped lang='css'>
.footprint-wrap {
  height: 100%;
  overflow: hidden;
}
.footprint-content {
  margin-top: 46px;
  height: 93%;
  background: #f5f5f5;
  overflow-y: auto;
}
.footprint-list {
  width: 100%;
  /* height: 100%; */
  background: #ffffff;
}
.footprint-list-one {
  width: 100%;
  height: 43%;
  /* background: darkgoldenrod; */
}
.data {
  /* height: 15%; */
  height: 45px;
  background: #ffffff;
  color: #222222;
  font-size: 16px;
  text-indent: 4%;
  padding-top: 2%;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #e5e5e5;
}
.footprint-detils {
  /* height: 40%; */
  height: 120px;
  /* background: chartreuse; */
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.left {
  height: 76%;
  width: 24%;
  margin-left: 4%;
  margin-top: 2%;
  float: left;
}
.left img {
  width: 100%;
  /* height: 90px; */
}
.right {
  width: 64%;
  /* height: 75%; */
  height: 90px;
  /* background: blanchedalmond; */
  float: left;
  margin-left: 4%;
  margin-top: 2%;
}
.top p {
  font-size: 12px;
  color: #333333;
  font-weight: bold;
}
.bottom {
  /* height: 34%; */
  height: 30px;
  margin-top: 18%;
}
.bottom p {
  float: left;
  font-size: 18px;
  color: #222222;
  font-weight: bold;
}
.bottom button {
  width: 41%;
  /* height: 80%; */
  height: 30px;
  float: right;
  border-radius: 15px;
  border: 1px solid rgba(51, 51, 51, 1);
  font-size: 12px;
  color: #333333;
  /* font-weight: bold; */
  background: rgba(255, 255, 255, 1);
  cursor: none;
}
</style>

