<template>
  <div class="control-form">
     <input type="file" class="upload" @change="addAudio" multiple="false" ref="inputer" accept="audio/mp3" :disabled="audioFlag">
     <div class="add " :class="{'uploaded': audioFlag}">
       <i class="add-icon" ></i>
       <span>{{audioFlag ? '已上传' : '立即上传'}}</span>
     </div>
     <audio src="" @canplaythrough="audioReady" ref="audio"></audio>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        formData: new FormData(),
        imgs: {},
        audioFlag:false,
        audioUploadUrl: "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=util.Uploader.uploadm_audio",
      };
    },
    methods: {
      //当音频文件可以被播放的时候获取音频时长
      audioReady(){
        console.log(this.$refs.audio.duration);
        if(this.$refs.audio.duration <= 1800){
          this.submit();
        }else{
          this.$vux.loading.show({
            text: "音频时长不能超过30分钟"
          });
          setTimeout(() => {
            this.$vux.loading.hide();
          }, 2000);
        }
      },
      addAudio() {
        let inputDOM = this.$refs.inputer;
        this.fil = inputDOM.files;
        let url = URL.createObjectURL(this.fil[0])

        this.$set(this.imgs, this.fil[0].name + "?" + new Date().getTime() + 0, this.fil[0])

        this.$refs.audio.src = url
      },

      showLoading() {
        this.$vux.loading.show({ text: "上传中"  });

        setTimeout(() => {
          this.$vux.loading.hide()
        }, 2000);
      },
      showToast(content) {
        this.$vux.toast.text(content, "mid");
        setTimeout(() => {
          this.$vux.toast.hide();
        }, 2000);
      },

      submit() {
        this.$vux.loading.show({ text: "正在上传"  })

        for (let key in this.imgs) {
          this.formData.append("file", this.imgs[key])
        }
        let config = {
          timeout: 10000,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token")
          }
        };
        axios.post(this.audioUploadUrl, this.formData, config)
          .then(res => {
            if (res.data.result === 1) {
              this.$vux.loading.hide();
              this.$vux.toast.show({type: "success", text: "上传成功", time: 1000})

              this.$emit("getVideoUploadUrl", res.data.data.files[0].url);
              this.audioFlag = true
            } else {
              this.$vux.loading.hide();
              this.$vux.toast.show({
                type: "warn",
                text: "失败请重试",
                time: 1000
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() {
      // this.showLoading();
      // this.showToast();
    }
  };
</script>
<style lang='less' scoped>
  .upload {
    opacity: 0;
  }
  .control-form{
    overflow: hidden;
    font-size: 0;
    position: relative;
    margin: 0 auto;
  }
   .add {
     width: 194px;
     height: 40px;
     margin: 0 auto;
     text-align: center;
     border:1px solid rgba(204,204,204,1);
     line-height: 40px;
     .add-icon {
       display: inline-block;
       height: 18px;
       width: 12px;
       background-size: 100% 100%;
       background-image: url("./audio-icon1.png");
       position: relative;
       top: 4px;
     }
     span{
       font-size: 14px;
       padding-left: 4px;
     }
  }
   .add.uploaded{
      .add-icon{
        background-image: url("./audio-icon2.png");
      }
     span{
       color:rgba(204,204,204,1);
     }
   }


   .upload {
    position: absolute;
    left: 50%;
    margin-left: -97px;
    width: 194px;
    height: 40px;
  }



</style>
