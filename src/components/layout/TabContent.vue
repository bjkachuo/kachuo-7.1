<template>
  <div :style="conHeight"  @scroll="scroll">
    <KachuoTabPlay v-if="getCurrentTabItem === 0"></KachuoTabPlay>
    <KachuoTabMall v-if="getCurrentTabItem === 1"></KachuoTabMall>
    <KachuoTabCash v-if="getCurrentTabItem === 2"></KachuoTabCash>
    <KachuoTabIncome v-if="getCurrentTabItem === 3"></KachuoTabIncome>
    <KachuoTabPersonalCenter v-show="getCurrentTabItem === 4"></KachuoTabPersonalCenter>
  </div>
</template>

<script>
import store from "@/store/index";
import { Tabbar, TabbarItem, Group, Cell } from "vux";
import KachuoTabPlay from "@/components/pages/tabindex/KachuoTabPlay";
import KachuoTabMall from "@/components/pages/tabindex/KachuoTabMall/KachuoTabMall";
import KachuoTabCash from "@/components/pages/tabindex/KachuoTabCash/KachuoTabCash";
import KachuoTabIncome from "@/components/pages/tabindex/KachuoTabIncome/KachuoTabIncome";
import KachuoTabPersonalCenter from "@/components/pages/tabindex/KachuoTabPersonalCenter/KachuoTabPersonalCenter";

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    KachuoTabPlay,
    KachuoTabMall,
    KachuoTabCash,
    KachuoTabIncome,
    KachuoTabPersonalCenter
  },
  data() {
    return {
      conHeight:{
        width:'100%',
        height:'200px',
        overflow:'hidden',
        overflowY:'scroll'
      },
      getCurrentTabItem:0
    };
  },
  created() {
    bridge.register("setCurrentTabItem", r => {
      setTimeout(()=>{
        this.$store.state.loadingWhite = false
      },300)
      this.getCurrentTabItem = r
    });

    this.getContentHeight();

  },

  methods: {
    getContentHeight(){
      this.conHeight.height = document.documentElement.clientHeight - 46 + 'px';
    },
    scroll(e){
      if(e.target.scrollTop > 136){
        this.$store.state.nativeHead = 'white'
        //bottom
      }else{
        this.$store.state.nativeHead = 'transparent'
      }
    }
  },
  computed: {
    haha() {
      this.getCurrentTabItem = this.$store.state.tabIndex
      return this.$store.state.tabIndex;
    }
  },
  watch: {
    haha: (to, from) => {
      this.getCurrentTabItem = to
    }
  }
};
</script>
<style lang="css" scoped>
</style>
