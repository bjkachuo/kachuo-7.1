<template>
  <div class="control-form">

     <input type="file" class="upload" @change="addAudio" multiple="false" ref="inputer" accept="audio/mp3">
     <div class="add">
       <i class="add-icon" :class="{'uploaded': audioUploadStatus}"></i>
       <span>立即上传</span>
     </div>

  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        formData: new FormData(),
        imgs: {},
        imgLen: 0,
        videoUrl: "",
        posterImg: "",
        audioUploadUrl: "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=util.Uploader.uploadm_audio",
        audioUploadStatus :false
      };
    },
    methods: {
      addAudio(event) {
        let inputDOM = this.$refs.inputer;
        this.fil = inputDOM.files;
        let oldLen = this.imgLen;
        let len = this.fil.length + oldLen;
        for (let i = 0; i < this.fil.length; i++) {
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 30 * 1024 * 1024) {
            this.showToast("请选择10M以内的视频！");
            return false;
          }
          this.imgLen++;
          this.$set(
            this.imgs,
            this.fil[i].name + "?" + new Date().getTime() + i,
            this.fil[i]
          );
        }
        this.submit();
      },
      getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      },
      delImg(key) {
        this.$delete(this.imgs, key);
        this.imgLen--;
      },
      showLoading() {
        this.$vux.loading.show({
          text: "上传中"
        });
        setTimeout(() => {
          this.$vux.loading.hide();
        }, 2000);
      },
      showToast(content) {
        this.$vux.toast.text(content, "mid");
        setTimeout(() => {
          this.$vux.toast.hide();
        }, 2000);
      },
      postData() {},
      submit() {
        this.$vux.loading.show({
          text: "正在上传"
        });
        for (let key in this.imgs) {
          let name = key.split("?")[0];
          this.formData.append("file", this.imgs[key]);
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
              this.$vux.toast.show({
                type: "success",
                text: "上传成功",
                time: 1000
              });
              this.videoUrl = res.data.data.files[0].url;
              this.posterImg = res.data.data.files[0].cover_image;
              // console.log(this.videoUrl);
              this.$emit("getVideoUploadUrl", res.data.data.files[0].url);
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
   .upload {
    position: absolute;
    left: 50%;
    margin-left: -97px;
    width: 194px;
    height: 40px;
  }



</style>
