<template>
  <div class="tab-item-play-header-wrap">
    <div class="tab-item-play-header-title">
      <!-- <div class="head-img" @click="setting">
        <img class="content-card-top-left-img" :src="userInfo.avatar ? userInfo.avatar : ''" />
      </div>-->
      <div class="location-icon" @click="locationSelf">
        <!-- <span class=""></span> -->
        <span class="scenic-name">{{scenicName}}</span>
        <x-icon type="ios-arrow-down" size="13" color="#222222"></x-icon>
        <!-- <i class="el-icon-arrow-down"></i> -->
      </div>
      <div class="help-wrap" style="margin-left=25px;">
        <customerService></customerService>
        <!-- <div class="setUp-img">
          <img src="../../assets/images/帮助中心@2x.png" alt />
        </div>
        <span>帮助</span>-->
      </div>

      <!-- <div class="weather"> -->
      <iframe
        scrolling="no"
        src="https://tianqiapi.com/api.php?style=tv&skin=sogou"
        frameborder="0"
        width="135"
        height="45"
        allowtransparency="true"
      ></iframe>
      <!-- </div> -->
      <!-- <div class="message-icon text-align-center" @click="appMessageCenter">
        <span class="iconfont iconxiaoxi"></span>
      </div>-->
    </div>
    <div class="white">
      <div class="server-wrap" @click="goScencerelease">
        <img src="../../assets/images/fabu.png" alt />
      </div>
    </div>
    <!-- <div>
      <div class="search-icon text-align-center" @click="searchScence">输入作品/作者/景区</div>
    </div>-->
    <!-- <SwiperImg class="tab-item-play-swiper"></SwiperImg> -->
  </div>
</template>

<script>
import SwiperImg from "@/components/common/SwiperImgIndex";
import { vueCordovaFunction } from "@/assets/js/vuecordova";
import { getScenicNameByScenicId } from "@/assets/js/common";
import customerService from "@/components/common/customerService/customerService";

export default {
  name: "",
  props: [""],
  data() {
    return {
      userInfo: null,
      scenicName: ""
    };
  },

  components: {
    SwiperImg,
    customerService
  },
  created() {
    this.getUserInfo();
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.getScenicName();
    console.log(this.GLOBAL.getSession("userLoginInfo"));
  },

  methods: {
    //点击头像跳转个人设置
    setting() {
      this.$router.push("/setting");
    },
    //vuex中获取个人信息
    getUserInfo() {
      this.userInfo = this.GLOBAL.getSession("userLoginInfo");
    },

    getScenicName() {
      this.scenicName = getScenicNameByScenicId(
        sessionStorage.getItem("currentScenic")
      );
    },
    locationSelf() {
      if (!sessionStorage.getItem("positionInfo")) {
        this.$vux.confirm.show({
          title: "提示",
          content:
            "为了提供更好的服务，请在设置中打开允许卡戳获取您的位置信息。",
          showCancelButton: false,
          onCancel: () => {
            console.log(this);
          },
          onConfirm: () => {
            vueCordovaFunction.getLocation();
            this.$router.push("/userlocation");
          }
        });
      } else {
        this.$router.push("/userlocation");
      }
    },
    searchScence() {
      this.$router.push("/usersearch");
    },
    appMessageCenter() {
      this.$router.push("/appmessage");
    },
    goScencerelease() {
      // this.$router.push('/scencerelease')
    }
  },

  watch: {
    $route(to, from) {
      this.getScenicName()
    }
  }
};
</script>
<style lang='css' scoped>
.tab-item-play-header-wrap {
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  /* background: #ffffff; */
  background: #f5f5f5ff;
  /* margin-bottom: 10px; */
}
.tab-item-play-header-title {
  width: 100%;
  height: 45px;
   position: fixed;
  z-index: 9999;
  /*
  top: 0;
  left: 0; */
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  color: #222222;
  background: #ffffff;
}
.head-img {
  width: 30px;
  height: 30px;
  float: left;
  /* background: aquamarine; */
  margin: 7px 4% 0 4%;
  border-radius: 50%;
}
.head-img img {
  width: 35px;
  height: 35px;
  display: inline-block;
  border-radius: 50%;
  background: none;
}
.location-icon {
  /* margin-right: 4%; */
  width: 19%;
  height: 45px;
  width: 70px;
  float: left;
  margin-left: 5%;
}
iframe {
  margin-top: 13px;
}
.help-wrap {
  width: 24px;
  height: 38px;
  float: right;
  margin-right: 4.2%;
  margin-top: 8px;
}
.setUp-img {
  width: 18px;
  height: 18px;
  /* margin: 0 auto; */
  margin-left: 1px;
}
.setUp-img img {
  width: 100%;
  background: none;
}
.help-wrap span {
  font-size: 10px;
}

/* .weather {
  float: left;
  height: 45px;
  width: 36%;
} */
.white {
  width: 100%;
  background: #ffffff;
  height: 50px;
  top: 50px;
  border-radius: 0px 0px 10px 10px;
  position: relative;
}
.server-wrap {
  width: 92%;
  height: 110px;
  /* background: darkgreen; */
  margin: 0 auto;
  border-radius: 8px;
  position: absolute;
  top: 4px;
  left: 4.4%;
}
.server-wrap img {
  width: 100%;
  background: none;
  border-radius: 8px;
}
.text-align-center {
  text-align: center;
}
/* .location-icon {
  flex: 1;
  margin-left: 16px;
} */
.weather {
  float: left;
  height: 45px;
  width: 15%;
}

.message-icon {
  /* flex: 1; */
}
.search-icon {
  flex: 3;
  width: 92%;
  height: 28px;
  line-height: 28px;
  background: #e5e5e5;
  border-radius: 20px;
  font-size: 12px;
  color: #66666699;
  margin: 0 auto;
}
.tab-item-play-swiper {
  width: 92%;
  height: 50%;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.tab-item-play-content {
  width: 100%;
  min-height: 200px;
  height: auto;
  background: #999;
}
.scenic-name {
  font-size: 16px;
  line-height: 45px;
  font-weight: 800;
}
.vux-x-icon {
  fill: #222222;
}
</style>
