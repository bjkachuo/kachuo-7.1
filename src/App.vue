<template>
  <div id="#app-box" class="app-box" v-show="!$store.state.loadingWhite">

      <navigation>
        <router-view class="router-animate"/>
      </navigation>

    <loading v-model="isLoading"></loading>
    <confirm
      v-model="showModel"
      title="版本更新"
      :show-cancel-button="isForceUpdata"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
    >
      <p style="text-align:center;">{{modelContent}}</p>
    </confirm>
    <toast
      v-model="showToastFn.show"
      position="middle"
      is-show-mask
      :type="showToastFn.type"
      :text="showToastFn.text"
      :time="showToastFn.time"
    ></toast>
  </div>
</template>

<script>
import { vueCordovaFunction } from "@/assets/js/vuecordova";
import { Loading, Confirm, Toast } from "vux";
import { CheckByLocation } from "@/servers/api";
import { appVersion, updateAPPVersion } from "@/assets/js/common";
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right",
    };
  },
  components: {
    Loading,
    Confirm,
    Toast
  },

  created(){
    let id
    id = sessionStorage.currentScenic ?  sessionStorage.currentScenic : 24
    // alert(id)
    this.$http.get("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.change_scenic&scenic_id="+id)
      .then(data=>{
        // alert(data)
      })
  },

  mounted() {
    //安卓 ios登录储存token
    dsBridge.call("getUserInfo", "web");
    dsBridge.registerAsyn("loginInfo", function (arg1, responseCallback) {
      localStorage.setItem("token", JSON.parse(arg1).accessToken);
      alert(localStorage.getItem("token"))
      responseCallback("登录信息成功");
    });
    bridge.register("yyTab", r => {
      this.$store.state.isApp = true;
    });
    dsBridge.registerAsyn("myTab", (arg1, responseCallback)=> {
      this.$store.state.loadingWhite = true
      responseCallback("隐藏成功");
    });
    bridge.register("myMethod", r => {
      if(r != ""){

        this.$router.push(r)

        setTimeout(()=>{
          this.$store.state.loadingWhite = false

        },300)
        // this.$router.push("/GardenJournal")
        return "跳转成功！"
        // }
      }
    });

    vueCordovaFunction.getLocation();
    this.checkUserLocationInfo();
    appVersion();
    sessionStorage.setItem("closeFace", 0);




  },

  beforeRouteUpdate(to, from, next) {
    console.log(to);
    next(vm => {
      console.log(vm);
    });
  },

  computed: {
    showToastFn() {
      return this.$store.state.toastInfo;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    showModel: {
      get: function() {
        return this.$store.state.showActionDialog;
      },
      set: function() {}
    },
    isForceUpdata: {
      get: function() {
        return this.$store.state.appUpdateInfo.isForce;
      }
    },
    modelContent: {
      get: function() {
        return this.$store.state.appUpdateInfo.content;
      }
    }
  },
  methods: {
    onCancel() {},
    onConfirm() {
      updateAPPVersion();
    },
    postLocation(dataObj) {
      let postDataObj = {
        latitude: dataObj ? dataObj.Latitude : "",
        longitude: dataObj ? dataObj.Longitude : ""
      };
      CheckByLocation(postDataObj)
        .then(res => {
          if (res.result === 1) {
            sessionStorage.setItem("currentScenic", res.data.scenic_id);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkUserLocationInfo() {
      let dataObj = sessionStorage.getItem("positionInfo")
        ? sessionStorage.getItem("positionInfo")
        : "";
      if (dataObj === "") {
        vueCordovaFunction.getLocation();
        return;
      } else {
        this.postLocation(JSON.parse(sessionStorage.getItem("positionInfo")));
      }
    }
  },
  watch: {
    $route(to, from) {
      if(to.name == 'indextab'){
        dsBridge.call("isIndexTab",true );
      }else{
        dsBridge.call("isIndexTab",false );
      }

      let isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
.app-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.router-animate {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease;
}

/*.slide-left-enter,*/
/*.slide-right-leave-active {*/
/*  opacity: 0;*/
/*  -webkit-transform: translate(100%, 0);*/
/*  transform: translate(100%, 0);*/
/*}*/

/*.slide-left-leave-active,*/
/*.slide-right-enter {*/
/*  opacity: 0.5;*/
/*  -webkit-transform: translate(-100%, 0);*/
/*  transform: translate(-100% 0);*/
/*}*/
</style>
