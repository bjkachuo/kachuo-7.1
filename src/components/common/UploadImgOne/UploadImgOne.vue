<template>
  <div class="control-form">
    <ul class="upload-imgs">
      <li>
        <input type="file" class="upload" @change="addImg" ref="inputer" accept="image/*">
        <img class="upload-img"  v-if="imgUrl" :src="imgUrl" >
        <a class="add" v-if="!plus">
          <p class="add-icon">+</p>
        </a>
        <slot name="bg"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { imageUpload, setNickName } from "@/servers/api";
export default {
  data() {
    return {
      formData: new FormData(),
      imgs: {},
      imgLen: 0,
      imgUrl:'',
      getImg: "",
      videoUploadUrl:
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=util.uploader.uploadm"
    };
  },

  props:['plus'],

  methods: {
    updataUserImg(val) {
      setNickName({
        avatar: val
      })
        .then(res => {
          if (res.result === 1) {
            this.$vux.toast.show({
              type: "success",
              text: "设置成功",
              time: 1000
            });
          } else {
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
    },
    addImg(event) {
      let inputDOM = this.$refs.inputer;
      this.fil = inputDOM.files;
      let oldLen = this.imgLen;
      let len = this.fil.length + oldLen;
      for (let i = 0; i < this.fil.length; i++) {
        let size = Math.floor(this.fil[i].size / 1024);
        if (size > 10 * 1024 * 1024) {
          this.showToast("请选择10M以内的图片！");
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
    submit() {
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
      axios
        .post(this.videoUploadUrl, this.formData, config)
        .then(res => {
          if (res.data.result === 1) {
            console.log(res);
            this.$vux.toast.show({
              type: "success",
              text: "上传成功",
              time: 1000
            });
            this.getImg = res.data.data.files[0];
            this.imgUrl = res.data.data.files[0].url
            this.$store.commit("changeUserAvatar", res.data.data.files[0].url);
            this.$emit("getHeaderImgUrl", res.data.data.files[0].url);
            this.updataUserImg(res.data.data.files[0].url);
          } else {
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
  mounted() {}
};
</script>
<style lang='css' scoped>
.upload-imgs {
  overflow: hidden;
  font-size: 0;
}
.upload-imgs li {
  position: relative;
  font-size: 14px;
  width: 100%;
  display: inline-block;
  margin-left: 16px;
  text-align: center;
  vertical-align: middle;
}
.upload-imgs .add {
  display: block;
  background-color: #f9f9f9;
  color: #ffffff;
  height: 94px;
  border: 1px solid #eee;
}
.upload-imgs li .upload {
  opacity: 0;
  z-index: 99;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.upload-imgs img {
  position: relative;
  width: 94px;
  height: 94px;
  line-height: 94px;
}
/*身份证正反面用的*/
.cert-flex .upload-imgs img {
  position: relative;
  width: 100%;
  height: 88px;
  line-height: 88px;
}
.cert-flex  .upload-imgs li {
  margin-left: 0;
}
/*身份证正反面用的*/
.upload-imgs .img img {
  vertical-align: middle;
  object-fit: cover;
}
.upload-imgs .img .close {
  display: none;
}
.upload-imgs li .img .close {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px;
  top: -10px;
  line-height: 20px;
  font-size: 20px;
  color: #999;
  background: #f9f9f9;
  border-radius: 50%;
}
.add-icon {
  font-size: 50px;
  color: #999;
}
  .upload-img{
    background-image: none;
    background-color: transparent;
  }
</style>
