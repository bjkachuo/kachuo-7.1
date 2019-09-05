<template>
  <div class="tab-item-mall-header-wrap">
    <div class="tab-item-mall-left flex-wrap-center-wrap" @click="showLeftModel">
      <div class="tab-item-play-header-title">
        <div class="location-icon" @click="locationSelf">
          <span class="scenic-name">{{scenicName}}</span>
          <x-icon type="ios-arrow-down" size="13" color="#222222"></x-icon>
        </div>
      </div>
    </div>
    <div class="tab-item-mall-mid" @click="searchScence"><icon type="search"></icon>输入作品/作者/景区</div>
<!--    <div class="tab-item-mall-right flex-wrap-center-wrap">-->
<!--      <span class="iconfont iconxiaoxi" @click="appMessageCenter"></span>-->
<!--    </div>-->
    <customerService style="margin-right: 15px"></customerService>
    <Popup :showModelFlag="showModel"></Popup>
  </div>
</template>

<script>
import Popup from "@/components/layout/Popup";
import { getScenicNameByScenicId } from "@/assets/js/common";
import customerService from '@/components/common/customerService/customerService'
import { vueCordovaFunction } from "@/assets/js/vuecordova";
import {Icon} from 'vux'
export default {
  name: "",
  props: [""],
  data() {
    return {
      showModel: false,
      scenicName:''
    };
  },

  components: {
    Popup,Icon,customerService
  },

  mounted() {
    this.getScenicName();
  },

  methods: {
    getScenicName() {
      this.scenicName = getScenicNameByScenicId(
        sessionStorage.getItem("currentScenic")
      );
    },
    searchScence() {
      this.$router.push("/usersearch");
    },
    showLeftModel() {
      // this.$store.commit("showMallLeftOptionState", true);
    },
    locationSelf() {
      if (!sessionStorage.getItem("positionInfo")) {
        this.$vux.confirm.show({
          title: "提示",
          content: "为了提供更好的服务，请在设置中打开允许卡戳获取您的位置信息。",
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
    appMessageCenter() {
      this.$router.push("/appmessage");
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.tab-item-mall-header-wrap {
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.tab-item-mall-left {

}
.tab-item-mall-mid {
  width: 230px;
  height: 28px;
  line-height: 28px;
  border-radius: 20px;
  font-size: 12px;
  color: #999;
  text-align: center;
  background:rgba(229,229,229,1);
}
.tab-item-mall-right {
  flex: 1;
}
.location-icon{
  margin-left: 15px;
}
.scenic-name{
  font-size: 16px;
}
</style>
