<template>
  <div class="release-video-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="content">
      <popup-radio title="选择分类" :options="options1" v-model="option1" class="popop"></popup-radio>
      <x-input title="描述"  placeholder="说点什么..." class="describe"></x-input>
      <div class="video-box">
        <p class="video-upload-title">
          <span>上传视频</span>
          <span class="video-upload-weak-tip">( 视频大小不能超过30M )</span>
        </p>
        <VideoUploader></VideoUploader>
      </div>
      <div class="audio-box">
        <p class="audio-upload-title">
          <span>上传音频</span>
          <span class="video-upload-weak-tip">( 音频大小不能超过30分钟 )</span>
          <span style="color: #1D72FF;">删除</span>
        </p>
        <AudioUploader></AudioUploader>
      </div>
      <Address @selectAddress="getVideoAddress" class="address"></Address>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import VideoUploader from "@/components/common/VideoUploader";
  import AudioUploader from "@/components/common/AudioUploader/AudioUploader";
  import Address from "@/components/common/Address";
  import { PopupRadio ,XInput } from 'vux'
    export default {
        name: "hundredshallAdd",

        components:{ Header,PopupRadio,XInput,VideoUploader,AudioUploader,Address },

        data(){
          return{
            TitleObjData: {titleContent: "发布", showLeftBack: true, showRightMore: false},
            option1: '0',
            options1: [{key: '0', value: '视频'}, {key: '1', value: '音频'}],
            arressVal:''
          }
        },

      methods:{
        getVideoAddress(val) {
          this.arressVal = val;
        },
      }
    }
</script>

<style scoped lang="less">
  .release-video-wrap{
    background:rgba(245,245,245,1);
    height: 100%;
  }
  .content {
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding: 14px 15px 0;
    box-sizing: border-box;
    margin-top: 50px;
  }
  .popop{
    background-color: #fff;
    box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius:8px;
    padding: 17px 15px;
    .vux-label{
      font-size: 16px;
    }
  }

  .describe{
    background-color: #fff;
    box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius:8px;
    padding: 17px 15px;
    margin-top: 14px;
  }

  .video-box{
    background-color: #fff;
    box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius:8px;
    margin-top: 14px;
    padding-bottom: 14px;
    height: 159px;
    .video-upload-title{
      padding: 10px 15px 0;
      span{
        font-size: 16px;
        color: #222;
      }
      .video-upload-weak-tip{
        font-size: 14px;
        color: #999;
      }
    }
    /deep/.upload-imgs {
      .add{
        background-color: #e5e5e5 !important;
      }
    }
  }

  .audio-box{
    background-color: #fff;
    box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    border-radius:8px;
    margin-top: 14px;
    .audio-upload-title{
      padding: 10px 15px;
      span{
        font-size: 16px;
        color: #222;
      }
      .video-upload-weak-tip{
        font-size: 14px;
        color: #999;
      }
    }
  }

  .address{
    /deep/.weui-cell{
      background-color: #fff;
      box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.04);
      border-radius:8px;
      padding: 17px 15px;
      margin-top: 14px;
    }
  }


</style>
