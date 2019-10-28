<template>
  <div v-transfer-dom>
    <popup v-model="isShow" :hide-on-blur="true" @on-hide="hide" v-if="descDetails.siteMsg && descDetails.siteMsg.title">
      <div class="popup2">
        <div class="navigaion-video-detail-wrap">
          <p class="navigaion-video-detail-p">
            <span>{{descDetails.siteMsg.title}}</span>
            <span style="float: right;" @click="goPath">路径规划</span>
          </p>
          <ul>
            <li>
              <img :src="descDetails.siteMsg.scenic_image" alt="" @click="goPlay(descDetails.siteMsg)">
              <div class="content">
                <div class="title">{{ descDetails.siteMsg.scenic_name }}</div>
                <div class="jifen">免费观看</div>
                <div class="bottom"><span>0人点赞</span><span>0条留言</span></div>
              </div>
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

    props:['start','Bmap'],

    directives: {
      TransferDom
    },

    components: {
      Popup,
      // VideoPlayer
    },
    data() {
      return {
        show: true,
        isControls: true,
        descDetails: {},
        label:'',
        path1:{},
        position:''
      };
    },
    methods: {
      getScenicDetails(obj) {
        this.position = obj
        getScenicPointDetails({
          longitude: obj.lng,
          latitude: obj.lat
        }) .then(res => {
          if(!res.data.siteMsg.scenic_video){
            this.$vux.toast.text("暂无相应景点", "middle")
            setTimeout(() => {
              this.$vux.toast.hide()
            }, 1000)
            return
          }
          console.log(res);
          if (res.result === 1) {

            if (res.data) {
              this.$store.commit("changeNavigationDetailsState", true);
              this.descDetails = res.data;
            }
          } else {

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

      goPlay(veido){
        sessionStorage.veido = JSON.stringify(veido)
        this.$router.push('/intelligentnavigation/veidoPlay')
      },

      hide() {
        this.$store.commit("changeNavigationDetailsState", false);
      },
      goPath(){
        console.log(this.start, new BMap.Point(this.position.lng, this.position.lat));
        this.path1.search(this.start , new BMap.Point(this.position.lng, this.position.lat))
        this.hide()
      }
    },

    mounted(){
      setTimeout(()=>{
        this.path1 = new BMap.WalkingRoute(this.Bmap, {
          renderOptions: {
            map: this.Bmap ,
            autoViewport: true
          }
        });
      },2000)
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
      padding: 15px 0;
      img{
        width: 90px;
        height: 90px;
        border-radius: 4px;
      }
      .content{
        flex: 1;
        margin-left: 10px;
        position: relative;
        .title{
          font-weight: bold;
          font-size: 16px;
          color: #222;
        }
        .jifen{
          color: #FFA238;
          font-size: 12px;
        }
        .bottom{
          position: absolute;
          bottom: 0;
          span{
            margin-right: 20px;
            color: #666;
            font-size: 14px;
          }
        }
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
