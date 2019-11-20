<template>
  <div class="tab-bar-wrap">
    <div v-for="(item,index) in tabItem" :key="index" class="tab-bar-item" @click="changeTabIndex(index)">
      <span :class="[{'active' : item.isActive},item.classd]" class="iconb"></span>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";

export default {

  data() {
    return {
      tabItem: [
        {
          title: "游园",
          isActive: true,
          classd: "youyuan",
        },
        {
          title: "商城",
          isActive: false,
          classd: "shangcheng",
        },
        {
          title: "变现",
          isActive: false,
          classd: "bianxian",
        },
        {
          title: "创收",
          isActive: false,
          classd: "chuangshou",
        },
        {
          title: "我的",
          isActive: false,
          classd: "wode",
        }
      ],
      tabIndex: 0
    };
  },

  components: {
    Tabbar,
    TabbarItem
  },

  computed: {
    getCurrentTabIndex() {
      return this.$store.state.tabIndex;
    },
    setTabBarClass() {
      return this.$store.state.tabIndex === this.tabIndex
        ? "tab-bar-item-title-normal"
        : "tab-bar-item-title-active";
    }
  },

  mounted() {
    this.setStoreStateTabIndex();
  },

  methods: {
    // 获取用户信息
    setStoreStateTabIndex() {
      let indexFlag = this.$store.state.tabIndex;
      for (let i = 0; i < this.tabItem.length; i++) {
        this.tabItem[i].isActive = false;
        this.tabItem[i].class = this.tabItem[i].normal;
      }
      this.tabItem[indexFlag].isActive = true;
      this.tabItem[indexFlag].class = this.tabItem[indexFlag].classActive;
    },
    changeTabIndex(index) {

      this.$store.commit("changeTabIndex", index);
      for (let i = 0; i < this.tabItem.length; i++) {
        this.tabItem[i].isActive = false;
        this.tabItem[i].class = this.tabItem[i].normal;
      }
      this.tabItem[index].isActive = true;
      this.tabItem[index].class = this.tabItem[index].classActive;
    }
  },
  computed: {
    stateTabIndex() {
      return this.$store.state.tabIndex;
    }
  },

  watch: {
    stateTabIndex: function(val, oldval){
      this.changeTabIndex(val);
    }
  }
};
</script>
<style lang='css' scoped>
.tab-bar-wrap {
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  padding-top: 3px;
  background: #fff;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  position: relative;
  z-index: 9999;
}
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.iconb{
  width:22px;
  height:22px;
  display:inline-block;
  font-size:20px;
  background-repeat: no-repeat;
}
.youyuan{
  background-image: url("./youyuan.png");
  background-size: 100% 90%;
  background-position: 0 2px;
}
.youyuan.active{
  background-image: url("./youyuan-active.png");
}
.shangcheng{
  background-image: url("./shangcheng.png");
  background-size: 100% 90%;
  background-position: 0 2px;
}
.shangcheng.active{
  background-image: url("./shangcheng-active.png");
}
.bianxian{
  background-size: 90% 90%;
  background-position: 1px 2px;
  background-image: url("./bianxian.png");
}
.bianxian.active{
  background-image: url("./bianxian-active.png");
}
.chuangshou{
  background-size: 100% 80%;
  background-position: 0 4px;
  background-image: url("./chuangshou.png");
}
.chuangshou.active{
  background-image: url("./chuangshou-active.png");
}
.wode{
  background-size: 80% 80%;
  background-position: 2px 4px;
  background-image: url("./wode.png");
}
.wode.active{
  background-image: url("./wode-active.png");
}
.tab-bar-item-img {
  width: 22px;
  height: 22px;
  display: block;
}
.normal {
  font-size: 12px;
  margin-top: 2px;
  color: #999;
}

</style>
