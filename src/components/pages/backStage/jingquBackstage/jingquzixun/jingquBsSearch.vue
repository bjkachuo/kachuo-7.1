<template>
  <div class="search-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <search
      cancel-text
      placeholder="请输入标题进行搜索"
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </search>
    <div>
      <!--      {{ value }}-->
    </div>
  </div>
</template>

<script>
    import {Search} from "vux";
    import Header from "@/components/common/Header";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "",
                    showLeftBack: true,
                    showRightMore: false
                },
                results: [],
                value: "",
            };
        },
        computed: {},
        created() {
        },
        mounted() {
        },
        watch: {},
        methods: {
            //点击搜索结果弹出（事件）
            resultClick(item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
                //下面加跳转的页面跳转的方法（带这id去编辑发布编辑详情）
                this.$router.push()
            },
            //进行搜索下方出现的搜索框
            getResult(val) {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.msg.scenicInformationList&search=" + this.value).then(({data}) => {
                    console.log(data);
                    this.results = data.data
                })
                console.log('on-change', val)
                this.results = val ? getResult(this.value) : []
            },
            //点击回车时的弹框
            onSubmit() {
                this.$refs.search.setBlur();
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
            },
            //聚焦时
            onFocus() {
                console.log("on focus");
            },
            //取消时
            onCancel() {
                console.log("on cancel");
            },


        },
        components: {
            Search,
            Header
        }
    };

    function getResult(val) {
        let rs = [];
        for (let i = 0; i < 20; i++) {
            rs.push({
                title: `${val}`,
                other: i
            });
        }
        return rs;
    }
</script>

<style scoped lang="css">
  .search-wrap {
    height: 100%;
    /*width: 100;*/
    background: #ffffff;
  }

  .head-wrap {
    width: 100%;
    height: 44px;
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
    background: violet;
    overflow: hidden;
  }

  .back-wrap {
    width: 24px;
    height: 24px;
  }
</style>
