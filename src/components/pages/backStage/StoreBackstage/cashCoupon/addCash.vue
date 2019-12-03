<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="line-one">
      <cell title="价格信息"></cell>
      <popup-picker title="券面额" :data="list1" v-model="facePrice" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
      <x-input title="卷售价" placeholder="请输入代金券出售价格" :show-clear="false" v-model="price"><template slot="right">元</template></x-input>
    </div>
    <div class="line-two">
      <cell title="使用条件"></cell>
      <popup-picker title="使用时间" :data="list2" v-model="time" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
      <popup-picker title="适用范围" :data="list3" v-model="range" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
      <popup-picker title="使用限制" :data="list4" v-model="limit" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="请选择"></popup-picker>
    </div>
    <div class="line-three">
      <cell title="有效期" value="自售出日起一年"></cell>
    </div>
    <div class="button-wrap" v-if="facePrice =='' || price ==''|| time ==''||range ==''||limit ==''">添加</div>
    <div class="button-wrap-two" v-else @click="Submit">添加</div>
  </div>
</template>
<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import {Cell, Group, PopupPicker,XInput} from 'vux'

    export default {
        props: {},
        data() {
            return {
                cur: 0, //默认选中第一个tab
                TitleObjData: {
                    titleContent: "添加",
                    showLeftBack: true,
                    showRightMore: false
                },
                //券面额选项
                list1: [['10元','20元','30元','50元','100元']],
                //券面额
                facePrice:[],
                //输入的券售价
                price:"",
                //使用时间选项
                list2:[['周一至周五','周六、周日','周一至周日']],
                //时间选项
                time:[],
                //适用范围选项
                list3:[['全场可用','部分商品可用']],
                //适用范围
                range:[],
                //使用限制选项
                list4:[['不限张数','单次可使用1张 、单次可使用2张 ','单次可使用3张']],
                //使用限制
                limit:[],


            }
        },
        computed: {},
        watch: {},
        methods: {
            onChange(val) {
                console.log('val change', val)
            },
            onShow() {
                console.log('on show')
            },
            onHide(type) {
                console.log('on hide', type)
            },
            //提交
            Submit(){
                alert("可以提交啦！！！")
            }
        },
        components: {
            Header,
            Cell,
            Group,
            PopupPicker,
            XInput
        },
        filters: {}
    }
</script>

<style scoped lang="css">
  .index-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .line-one {
    width: 92%;
    height: 135px;
    background: #FFFFFF;
    margin: 56px auto 10px;
    border-radius: 8px;
  }

  .line-two {
    width: 92%;
    height: 180px;
    background: #FFFFFF;
    margin: 0px auto 10px;
    border-radius: 8px;
  }

  .line-three {
    width: 92%;
    height: 44.5px;
    background: #FFFFFF;
    margin: 0px auto 10px;
    border-radius: 8px;
  }
  .button-wrap{
    width: 92%;
    height: 45px;
    color: #FFFFFF;
    background: #CCCCCC;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    position: fixed;
    bottom: 15px;
    left: 4%;
    border-radius: 8px;
  }
  .button-wrap-two{
    background: #3976FF;
    width: 92%;
    height: 45px;
    color: #FFFFFF;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    position: fixed;
    bottom: 15px;
    left: 4%;
    border-radius: 8px;
  }
</style>
<style scoped lang="less">
  /deep/ .weui-cell{
    padding: 12px 15px;
  }
</style>
