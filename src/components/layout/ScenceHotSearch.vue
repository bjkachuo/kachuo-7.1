<template>
  <div class="search-hot-wrap">
    <p class="search-hot-title">全部景区</p >
    <div class="search-hot-list-wrap">
      <!-- <div
        class="list-item"
        v-for="(item,index) in dataList"
        :key="index"
        @click="selectScenic(item)"
      > -->
      <div
        class="list-item"
        v-for="(item,index) in dataList"
        :key="index"
        @click="selectScenic(item)"
      >
        <div class="img">
          < img :src="item.imgSrc" alt />
        </div>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { setTimeout } from "timers";
  export default {
    name: "",
    props: [""],
    data() {
      return {
        changeAreadata: {},
        dataList: [
          {
            id: "22",
            name: "苍岩山",
            position: [114.145831, 37.831976],
            imgSrc: require("@/assets/images/苍岩山.jpg")
          },
          {
            id: "23",
            name: "徽州古城",
            position: [118.434598, 29.867],
            imgSrc: require("@/assets/images/徽州古城.jpg")
          },
          {
            id: "24",
            name: "蓬莱",
            position: [120.752564, 37.825461],
            imgSrc: require("@/assets/images/蓬莱阁.jpg")
          },
          {
            id: "25",
            name: "少林",
            position: [112.95978, 34.520026],
            imgSrc: require("@/assets/images/少林寺.jpg")
          },
          {
            id: "26",
            name: "神垕",
            position: [113.228142, 34.118356],
            imgSrc: require("@/assets/images/神垕.jpg")
          },
          {
            id: "27",
            name: "云雾山",
            position: [114.214391, 31.12476],
            imgSrc: require("@/assets/images/云雾山.jpg")
          },
          {
            id: "35",
            name: "三孔",
            position: [116.989873, 35.590745],
            imgSrc: require("@/assets/images/三孔.jpg")
          },
          {
            id: "66",
            name: "云冈石窟",
            position: [113.144103, 40.109236],
            imgSrc: require("@/assets/images/云冈石窟.jpg")
          },
          {
            id: "87",
            name: "卡戳网",
            position: [113.144103, 40.109236],
            imgSrc: require("@/assets/images/云冈石窟.jpg")
          }
        ]
      };
    },

    mounted() {
      this.$http
        .post(
          "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.get_recommend_business&scenic_id=24&scenic.index.change_scenic"
        )
        .then(({ data }) => {
          this.changeAreadata = data.data;
        });
    },

    methods: {
      // 传递给安卓选择的 景区id

      //选择景区
      selectScenic(item) {
        //
        var ret = dsBridge.call("jingqu.syn", {
          msg: " I am echoSyn call",
          tag: 1
        });
        alert(JSON.stringify(ret));
        sessionStorage.setItem("currentScenic", item.id);
        setTimeout(() => {
          this.$router.push("/indextab");
        }, 300);
        this.changeArea(item.id);
      },
      changeArea(id) {
        this.$http
          .get("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.change_scenic&scenic_id=" + id)
          .then(({ data }) => {
            this.changeAreadata = data;
          });
      }
    }
  };
</script>
<style lang='less' scoped>
  .list-item {
    width: 30%;
    margin-right: 5%;
    margin-bottom: 15px;
    text-align: center;
    .img {
      border-radius: 4px;
      height: 62.6%;
      overflow: hidden;
    }
    span {
      line-height: 30px;
      background-color: transparent;
    }
  }
  .list-item:nth-child(3n) {
    margin-right: 0;
  }
  .search-hot-wrap {
    width: 100%;
    // padding: 55px 15px;
    padding: 0px 15px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .search-hot-title {
    width: 100%;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    color: #333;
  }
  .search-hot-list-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 10px;
  }
</style>
