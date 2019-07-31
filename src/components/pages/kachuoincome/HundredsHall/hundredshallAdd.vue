<template>
  <div class="release-video-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="content">
      <popup-radio title="选择分类" :options="options1" v-model="option1" class="popop"></popup-radio>
      <x-input title="描述"  placeholder="说点什么..." class="describe"></x-input>
      <div>
        <p class="video-upload-title">
          <span>上传视频</span>
          <span class="video-upload-weak-tip">( 视频大小不能超过30M )</span>
        </p>
        <VideoUploader></VideoUploader>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import VideoUploader from "@/components/common/VideoUploader";
  import Address from "@/components/common/Address";
  import { PopupRadio ,XInput } from 'vux'
    export default {
        name: "hundredshallAdd",

        components:{ Header,PopupRadio,XInput,VideoUploader },

        data(){
          return{
            TitleObjData: {
              titleContent: "发布",
              showLeftBack: true,
              showRightMore: false
            },
            option1: '0',
            options1: [{
              key: '0',
              value: '视频'
            }, {
              key: '1',
              value: '音频'
            }],
          }
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
</style>
