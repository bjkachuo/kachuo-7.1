<template>
  <div v-transfer-dom>
    <popup v-model="isShow" :hide-on-blur="true" @on-hide="hide">
      <div class="popup2" v-show="showBottom">
<!--        <div class="video" id="wrapper" v-if=""></div>-->
        <div class="navigaion-video-detail-wrap">
          <p class="navigaion-video-detail-p">{{descDetails.scenic_name}}</p>
          <ul>
            <li>
              <img :src="descDetails.scenic_image" alt="">
              <div class="content"></div>
            </li>
          </ul>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
  import ChimeeMobilePlayer from "chimee-mobile-player";
  import { TransferDom, Popup } from "vux";
  // import VideoPlayer from "@/components/common/VideoPlayer";
  import { getScenicPointDetails } from "@/servers/api";

  export default {
    directives: {
      TransferDom
    },

    components: {
      Popup,
      // VideoPlayer
    },
    data() {
      return {
        show: false,
        isControls: true,
        content: "",
        descDetails: {},
        showBottom: true,
        label:'',
      };
    },
    methods: {
      getScenicDetails(obj) {

        getScenicPointDetails({
          longitude: obj.lng,
          latitude: obj.lat
        }) .then(res => {
          if(!res.data.scenic_video){
            this.$vux.toast.text("暂无相应景点", "middle")
            setTimeout(() => {
              this.$vux.toast.hide()
            }, 1000)
            return
          }

          if (res.result === 1) {
            this.showBottom = true;
            if (res.data) {
              this.$store.commit("changeNavigationDetailsState", true);
              this.descDetails = res.data;
              this.content = res.data.content;
              this.createVideoDom(true, res.data);
            }
          } else {
            this.showBottom = false;
            this.$vux.toast.show({
              type: "text",
              text: "暂无介绍",
              time: 1000
            })
          }
        })
          .catch(err => {
            console.log(err);
          });
      },
      hide() {
        this.$store.commit("changeNavigationDetailsState", false);
      },
      createVideoDom(flag, videoObj) {
      //   new ChimeeMobilePlayer({
      //     wrapper: "#wrapper",
      //     src: videoObj.scenic_video,
      //     autoplay: false,
      //     poster: videoObj.scenic_image,
      //     controls: flag,
      //     playsInline: true,
      //     preload: "auto",
      //     x5VideoPlayerFullscreen: true,
      //     x5VideoOrientation: "landscape|portrait",
      //     xWebkitAirplay: true,
      //     muted: false
      //   });
      }
    },
    computed: {
      isShow: {
        get: function() {
          return this.$store.state.navigationDetails;
        },
        set: function() {}
      }
    },

  };
</script>

<style lang="less" scoped>
  @import "~vux/src/styles/close.less";
  .vux-popup-dialog{
    border-radius: 8px 8px 0 0;
    box-shadow:0px -5px 10px 0px rgba(0,101,255,0.16);
  }

  .navigaion-video-detail-wrap{
    li{
      display: flex;
      width: 92%;
      margin: 0 auto;
      img{
        width: 90px;
        height: 90px;
        border-radius: 4px;
      }
      .content{

      }
    }
  }

  .popup2 {
    padding-bottom: 15px;
    height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    background: #fff;
    box-sizing: border-box;
  }
  .navigaion-video-detail-p {
    width: 92%;
    margin: 0 auto;
    font-size: 16px;
    font-weight: bold;
    line-height: 55px;
    border-bottom: 1px solid #E5E5E5;
  }

  .video {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
</style>
