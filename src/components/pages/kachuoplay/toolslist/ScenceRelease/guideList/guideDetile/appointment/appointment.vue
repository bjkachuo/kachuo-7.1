<template>
    <div>
      <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="from">
          <x-input title='姓名：' ></x-input>
          <x-input title='联系电话：' mask="999 9999 9999" :max="13" is-type="china-mobile"></x-input>
          <x-textarea :max="200" name="detail" placeholder="请输入留言..." :show-counter="false"></x-textarea>
          <popup-picker title="选择人数" :data="personNumList" v-model="personNum" placeholder="123" :columns="1" show-name class="pop"></popup-picker>
          <popup-picker title="选择时长" :data="timeList" v-model="timeNum" placeholder="123" :columns="1" show-name class="pop"></popup-picker>
      </div>
      <div class="bottom-btn-menu">
        <div class="left-menu"><span  style="color: #222;">合计：</span><span>￥</span><span>200.</span><span>00</span></div>
        <div class="right-menu">立即预约</div>
      </div>
    </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { XInput,XTextarea,PopupPicker } from 'vux'

    export default {
        name: "appointment",

        components:{ Header,XInput,XTextarea,PopupPicker },

        data(){
          return{
            TitleObjData: {
              titleContent: "预约导游",
              showLeftBack: true,
              showRightMore: false
            },
            personNumList:[{
              name: '1-9',
              value: '1',
              parent: 0
            },{
              name: '10-19',
              value: '2',
              parent: 0
            }],
            timeList:[
              {
                name: '1小时',
                value: '1',
                parent: 0
              },{
                name: '2小时',
                value: '2',
                parent: 0
              }
            ],
            personNum:[]
          }
        }
    }
</script>

<style scoped lang="less">
  .from{
    background-color: #F5F5F5;
    overflow: hidden;
    .vux-x-input{
      border-radius: 8px;
      width: 92%;
      margin: 10px auto;
      background-color: #fff;
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      /deep/.weui-label{
        font-size: 16px;
        font-weight: 800;
        line-height: 35px;
      }
    }
    .vux-x-textarea{
      border-radius: 8px;
      background-color: #fff;
      margin: 10px auto;
      width: 92%;
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      /deep/.weui-textarea::placeholder{
        font-size: 16px;
        font-weight: 800;
      }
    }
    .pop{
      border-radius: 8px;
      width: 92%;
      margin: 10px auto;
      background-color: #fff;
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      /deep/.weui-label{
        font-size: 16px;
        font-weight: 800;
        line-height: 35px;
      }
    }
  }
  .bottom-btn-menu{
    position: fixed;
    height: 55px;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    box-shadow:0px 5px 15px 0px rgba(0, 0, 0, 0.06);
    .left-menu{
      flex: 1;
      span{
        color: #FF3939;
      }
    }
    .right-menu{
      width: 150px;
      line-height: 55px;
      background-color: #3987FF;
      color: #fff;
      font-size: 16px;
      text-align: center;
    }
  }
</style>
<style scoped>
  .from{
    min-height: calc(100% - 46px);
  }
</style>
