<template>
    <div>
      <div class="head" style="position: absolute;z-index: 9999999;">
        <span @click="back" style="line-height: 45px;margin-left: 15px;color: #fff;">返回</span>
<!--        <span>返回</span>-->
      </div>
      <div class="video" id="wrapper" v-if=""></div>
    </div>
</template>

<script>

  import VideoPlayer from "@/components/common/VideoPlayer";
  import ChimeeMobilePlayer from "chimee-mobile-player";
    export default {
        name: "veidoDetile",

        components:{ VideoPlayer },

        methods:{
          createVideoDom(flag, videoObj) {

            new ChimeeMobilePlayer({
              wrapper: "#wrapper",
              src: videoObj.scenic_video,
              autoplay: false,
              poster: videoObj.scenic_image,
              controls: flag,
              playsInline: true,
              preload: "auto",
              x5VideoPlayerFullscreen: true,
              x5VideoOrientation: "landscape|portrait",
              xWebkitAirplay: true,
              muted: false
            });

          },
          back(){
            this.$router.go(-1)
          }


        },

        created() {

          this.$nextTick(()=>{
            this.createVideoDom(true,JSON.parse(sessionStorage.veido))
          })
        }
    }
</script>

<style scoped>

</style>
