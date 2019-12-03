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
      <x-input title="店铺地址"></x-input>
      <x-textarea placeholder="请填写店铺详细地址" :max="100" v-model="address"></x-textarea>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import { XTextarea ,XInput} from 'vux'

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "编辑店铺地址",
                    showLeftBack: true,
                    showRightMore: false
                },
                address:""
            }
        },
        computed: {},
        watch: {},
        methods: {
            //提交操作
            submit(){
                alert("提交");
            }
        },
        components: {
            Header,
            XTextarea,
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
