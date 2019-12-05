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
      <x-input title="商家电话" placeholder="请填写商家电话" mask="999 9999 9999" v-model="phone" :max="13" is-type="china-mobile"></x-input>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import { XInput } from 'vux'
    import {StoreBsAddInfo} from "@/servers/api";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "编辑商家电话",
                    showLeftBack: true,
                    showRightMore: false
                },
                phone:""
            }
        },
        computed: {},
        watch: {},
        methods: {
            //提示框
            showTip(conttentTip) {
                this.$vux.toast.text(conttentTip, "middle");
                setTimeout(() => {
                    this.$vux.toast.hide();
                }, 1000);
            },

            //提交操作
            submit(){
                StoreBsAddInfo({
                    phone:this.phone,
                }).then(res=>{
                    console.log(res);
                    if (res.result == 1){
                        this.showTip("成功");
                        sessionStorage.goback = "yes";
                        this.$router.goBack();
                    }else if(this.phone == "") {
                        this.showTip("请填写电话");
                    }
                })
            }
        },
        components: {
            Header,
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
