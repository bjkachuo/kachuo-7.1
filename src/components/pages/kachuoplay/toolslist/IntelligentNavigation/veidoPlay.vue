<template>
    <div>
      <div class="head" @click="back">
          <x-icon type="ios-arrow-left" size="30"></x-icon>
      </div>
      <div class="video" id="wrapper" ></div>
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
              muted: false,
            });

          },
          back(){
            this.$router.go(-1)
          }

        },

        created() {

          this.$nextTick(()=>{
            this.createVideoDom( true,JSON.parse(sessionStorage.veido) )
          })

        }
    }
</script>

<style scoped>
  .vux-x-icon {
    fill: #Fff;
    margin-top: 2px;
    margin-left: 2px;
  }
.head{
  position: absolute;
  z-index: 9999999;
  background-color: rgba(0,0,0,.5);
  width: 35px;
  height:35px;
  border-radius: 50%;
  top: 15px;
  left: 15px;
}
</style>
