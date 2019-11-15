<template>
  <div class="businessList-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="businessList-content">
      <div
        class="recommend"
        v-for="(item,index) in recommend"
        :key="index"
        @click="details(item.id,item.type)"
      >
        <div class="inLeft">
          <img :src="item.video_image" alt />
          <!-- <p>{{item.typename}}</p> -->
        </div>
        <div class="inMid">
          <p>{{item.name}}</p>
          <i style="color:red;">人均{{item.price}}元</i>
          <span>
            <div class="house">
              <img src="../../assets/images/fangzi.png" alt />
            </div>
            <div class="characteristic">特色:{{item.product}}</div>
          </span>
        </div>
        <div class="inRight">
          <p>{{item.distance}}km</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { PopupRadio } from "vux";
import customerService from "@/components/common/customerService/customerService";

export default {
  props: {},
  data() {
    return {
      //全部分类
      option2: "",
      options2: [
        {
          key: "A",
          value: "label A"
        },
        {
          key: "B",
          value: "label B"
        }
      ],
      //智能排序
      option3: "",
      options3: [
        {
          key: "A",
          value: "label C"
        },
        {
          key: "B",
          value: "label D"
        }
      ],

      //推荐商家列表：
      recommend: [],

      TitleObjData: {
        titleContent: this.$route.query.name,
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$route.query);
    //获取推荐商家：
    this.$http
      .post(
        // "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service"
        "http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service_list&type=" +
          this.$route.query.type
      )
      .then(({ data }) => {
        this.recommend = data.data.list;
        // console.log(this.recommend);
        console.log(data);
      });
  },
  watch: {},
  methods: {
    //跳转详情页
    details(id, type) {
      if (type == 1 || type == 2) {
        this.$router.push({
          path: "/eatDrinkDetails",
          query: {
            idNum: id,
            typeNum: type
          }
        });
      } else if (type == 3) {
        this.$router.push({
          path: "/PlayDetails",
          query: {
            idNum: id,
            typeNum: type
          }
        });

        // alert("跳转玩");
      } else if (type == 4) {
        this.$router.push({
          path: "/ResideDetails",
          query: {
            idNum: id,
            typeNum: type
          }
        });
        // alert("跳转住");
      } else if (type == 5) {
        this.$router.push({
          path: "/TourList",
          query: {
            idNum: id,
            typeNum: type
          }
        });

        // alert("跳转游");
      }
    },
    gengduo(){
      // businessList?type=1&name=吃吧
    }
  },
  components: {
    Header,
    PopupRadio,
    customerService
  }
};
</script>

<style  lang="css" scoped>
.businessList-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5ff;
}
.businessList-content {
  height: 94%;
  margin-top: 56px;
  border-top: 1px solid #eeeeee;
  background: #f5f5f5;
  overflow: hidden scroll;
}
.classificationSorting-wrap {
  width: 100%;
  height: 45px;
  background: #ffffff;
  margin-bottom: 10px;
}
.left {
  width: 110px;
  height: 45px;
  float: left;
  margin-left: -18px;
  background: url(../../assets/images/down@2x.png) right center no-repeat;
  background-size: 12px 6px;
}
.right {
  width: 110px;
  height: 45px;
  float: right;
  background: url(../../assets/images/down@2x.png) right center no-repeat;
  background-size: 12px 6px;
  margin-right: 4%;
}
.recommend {
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}
.inLeft {
  width: 23.19%;
  height: 50px;
  margin: 15px 3.19% 0 4.35%;
  float: left;
  border-radius: 4px;
  position: relative;
}
.inLeft img {
  width: 100%;
  background: none;
  border-radius: 4px;
}
.inLeft p {
  width: 38px;
  height: 20px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(51, 51, 51, 1) 100%
  );
  border-radius: 4px 0px 16px 0px;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  line-height: 20px;
  text-align: center;
  position: absolute;
  top: -7%;
  left: -4%;
}
.inMid {
  width: 41.58%;
  height: 66px;
  float: left;
  margin-top: 14px;
  margin-right: 7.25%;
}
.inMid p {
  font-size: 14px;
  color: #222222ff;
  font-weight: bold;
  font-family: PingFangSC-Heavy;
  /* margin-bottom: 4px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.inMid i {
  font-style: normal;
  font-size: 12px;
  color: #222222ff;
  font-weight: normal;
  font-family: PingFangSC-Medium;
}
.inMid span {
  width: 100%;
  height: 25px;
  display: block;
  /* width: 140px; */
  /* height: 25px; */
  /* background: rgba(245, 245, 245, 1); */
  font-size: 12px;
  color: #666666ff;
  font-weight: normal;
  font-family: PingFangSC-Medium;
  /* text-align: center; */
  /* line-height: 25px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* border-radius: 8px; */
}
.inMid span .house {
  width: 13px;
  height: 12px;
  float: left;
}
.inMid span .house img {
  background: none;
  width: 100%;
}
.inMid span .characteristic {
  float: left;
  line-height: 22px;
  text-indent: 4%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
}
.inRight {
  width: 15.945%;
  height: 22px;
  margin-top: 15px;
  float: left;
  background: #f5f5f5ff;
  border-radius: 4px;
}
.inRight p {
  color: #222222ff;
  font-size: 12px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  line-height: 22px;
}
</style>
<style lang="less" scoped>
.weui-cell {
  //   margin-right: 11px;
}
.weui-cell_access {
  border-style: none;
  //   width: 108px;
}
.weui-cell__ft:after {
  border-style: hidden;
}
/deep/ .weui-cell_access .weui-cell__ft:after {
  height: 0px;
  width: 0px;
  border-width: 0px 0px 0 0;
}
</style>
