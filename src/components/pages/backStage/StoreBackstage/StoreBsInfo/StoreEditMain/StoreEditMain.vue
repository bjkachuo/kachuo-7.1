<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <p class="Preservation" @click="submit">提交</p>
    <div class="input-wrap" style="margin-top: 56px;background: #fff;">
      <!--      <x-input title="店铺主营类型" placeholder="请填写店铺主营类型"  :show-clear="false" v-model="name"></x-input>-->
      <popup-picker title="选择主营分类" :data="mainList" v-model="main" @on-change="onChange"
                    placeholder="请选择"></popup-picker>

    </div>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import {XInput, PopupPicker} from 'vux'

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "编辑店铺主营类型",
                    showLeftBack: true,
                    showRightMore: false
                },
                mainList: [['1', '2', '3', '4', '5']],
                main: []
            }
        },
        computed: {},
        watch: {},
        methods: {
            onChange(val) {
                console.log('val change', val)
            },
            //提交操作
            submit() {
                alert("提交");
            }
        },
        components: {
            Header,
            XInput,
            PopupPicker
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
    position: relative;
  }

  .Preservation {
    display: block;
    position: absolute;
    top: 10px;
    right: 4%;
    font-size: 16px;
    z-index: 9999;
    color: #333333;
  }

</style>
