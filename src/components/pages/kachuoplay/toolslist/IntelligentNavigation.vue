<template>
  <div class="amap-page-container">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div id="container" :style="setMapHeight" class="amap-demo"></div>
    <Popup class="content-model" ref="videoWrap" v-show="showModelFlag" :dataPosition="clickPosition"></Popup>
    <NavigationTab :dataList="tabList" v-on:changePath="showPath"></NavigationTab>
  </div>
</template>

<script>
let map = null,walking=null;
let scenicDataObj = {};

import Header from "@/components/common/Header";
import NavigationTab from "@/components/common/NavigationTab";
import Popup from "@/components/common/Popup";
import locationIcon from "@/assets/images/amap-icon/location-icon.png";
import scenicIcon from "@/assets/images/amap-icon/scenic.png";
import sortIcon from '@/assets/images/amap-icon/map-sort-icon@2x .png'
import scenicActiveIcon from "@/assets/images/amap-icon/scenicActive.png";
import inlocationIcon from "@/assets/images/amap-icon/inlocation-icon.png";

import { CheckByLocation } from "@/servers/api";
import { setTimeout } from "timers";

export default {
  name: "amap-page",
  data() {
    return {
      TitleObjData: {
        titleContent: "智慧导航",
        showLeftBack: true,
        showRightMore: true
      },
      navIndex:'0',
      tabList: ["全景图", "登山图", "寻花图", "戏水图", "访仙图", "问佛图", "探古图"],
      scenicList: [
        {
          id: "22",
          name: "苍岩山",
          position: [114.145831, 37.831976]
        },
        {
          id: "23",
          name: "徽州古城",
          position: [118.434598, 29.867]
        },
        {
          id: "24",
          name: "蓬莱",
          position: [120.752564, 37.825461]
        },
        {
          id: "25",
          name: "少林",
          position: [112.941363,34.506982]
        },
        {
          id: "26",
          name: "神垕",
          position: [113.228142, 34.118356]
        },
        {
          id: "27",
          name: "云雾山",
          position: [114.214391, 31.12476]
        },
        {
          id: "35",
          name: "三孔",
          position: [116.989873, 35.590745]
        },
        {
          id: "66",
          name: "云冈石窟",
          position: [113.144103, 40.109236]
        }
      ],
      roadPath: [],
      mapCenter: [],
      path: [],
      SCENICSPOT: [],
      SCENICLINE: [],
      clickPosition:{}
    };
  },
  components: {
    Header,
    Popup,
    NavigationTab
  },
  methods: {

    initLocalData() {
      let scenicId = sessionStorage.getItem("currentScenic");
       //let data = this.importDataSync(scenicId);
      for (let i = 0; i < this.scenicList.length; i++) {
        if (this.scenicList[i].id == scenicId) {
          this.mapCenter = this.scenicList[i].position;
        }
      }

      // this.roadPath = this.SCENICLINE[0].path;
    },
    init() {

      map = new AMap.Map("container", {
        center: this.mapCenter,
        resizeEnable: true,
        zoom: 17,
        features: ["bg","road","building",'point'],
        pitch:30,
        rotateEnable:true,
        pitchEnable:true,
        viewMode:'3D',//开启3D视图,默认为关闭
        buildingAnimation:true,//楼块出现是否带动画
        showBuildingBlock:true,
      });
      console.log(this.mapCenter);
      map.clearMap();

      var options = {
        'showButton': true,//是否显示定位按钮
        'buttonPosition': 'LB',//定位按钮的位置
        'buttonDom':`<img src=${locationIcon} style="width:36px;height:36px;background-color:none"/>`,
        /* LT LB RT RB */
        'buttonOffset': new AMap.Pixel(10, 50),//定位按钮距离对应角落的距离
        'showMarker': true,//是否显示定位点
        'markerOptions':{//自定义定位点样式，同Marker的Options
        'offset': new AMap.Pixel(-18, -36),
        'content':`<img src=${inlocationIcon} style="width:25px;height:32px;background-color:transparent"/>`
        },
      }

      if (this.SCENICLINE.length) {


        this.SCENICLINE.forEach((item, index) => {


            if(this.navIndex == 0){
              var text = new AMap.Text({
                map: map,
                position: [item.position[0], item.position[1]],
                text : item.label,
                offset:  new AMap.Pixel(0,-50)
              })
              var marker = new AMap.Marker({
                map: map,
                icon: new AMap.Icon({
                  image: scenicIcon,
                  size: new AMap.Size(30,35),  //图标大小
                  anchor:[15,35], // 设置锚点方位
                  imageSize: new AMap.Size(30,35),
                }),
                position: [item.position[0], item.position[1]],
                offset: new AMap.Pixel(-15,-35), //设置偏移量
              })


            }else{
              var text = new AMap.Text({
                map: map,
                position: [item.position[0], item.position[1]],
                text : item.label,
                offset:  new AMap.Pixel(0,-52),
                topWhenClick:true
              })
              console.log(text);

              text.Cv.style.border = 'none'
             // text.Cv.style.background = 'transparent'

              var marker = new AMap.Marker({
                map: map,
                // icon: new AMap.Icon({
                //   image: sortIcon,
                //   size: new AMap.Size(30,35),  //图标大小
                //   anchor:[15,35], // 设置锚点方位
                //   imageSize: new AMap.Size(30,35),
                // }),
                content:'<div style="width: 23px;height: 23px;border-radius: 50%;background-color: #e4794b;text-align: center;color: #fff;border: 1px solid #fff;">'+(index+1)+'</div>',
                position: [item.position[0], item.position[1]],
                offset: new AMap.Pixel(-15,-35), //设置偏移量
              })
            }

          text.on('touchend',item2=>{

            let con = item2.label

            this.showModel(con,item2.target.Uh.position)
          })
            marker.on("touchend", item2 => {

              let con = item2.label

              this.showModel( con,item2.target.Uh.position )
            })

        });

        map.plugin(["AMap.ToolBar", "AMap.Scale","AMap.Geolocation","AMap.ControlBar"], function() {
          map.addControl(new AMap.ToolBar({
            // 简易缩放模式，默认为 false
            liteStyle: true
          }));
          map.addControl(new AMap.Scale());

          var geolocation = new AMap.Geolocation(options);
          map.addControl(geolocation);
          //geolocation.getCurrentPosition()
        });
      } else {
        this.$vux.toast.text("暂无相应景点", "middle")
        setTimeout(() => {
          this.$vux.toast.hide()
        }, 1000)
      }
    },
    //绘制路线
    drawMap(Tlng,Tlat) {
      // 专车--画地图
         //构造路线导航类
        if(walking){
          //调用clear()函数清除上一次结果，可以清除地图上绘制的路线以及路径文本结果
            walking.clear();         
        }
        walking = new AMap.Walking({
          map: map,
          hideMarkers: false,
          isOutline: true,
          outlineColor: '#ffeeee',
          autoFitView: true
        });
        walking.search([this.mapCenter[0], this.mapCenter[1]], [Tlng, Tlat], function(status, result) {
           // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
            if (status === 'complete') {
                console.log('绘制路线完成')
            } else {
                console.log('获取数据失败：' + result)
            }
        });
    },
    showPath(index) {
      this.navIndex = index;
      this.getMarkerList(index)
      // this.init(this.mapCenter, index)
    },
    showModel(name,position) {
      this.clickPosition = {
        name:name,
        lat:position.lat,
        lng:position.lng
      }
      this.$refs.videoWrap.getScenicDetails(this.clickPosition);
    },

    getMarkerList(type){
      this.$http.get("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.site.site_list&type="+type)
        .then(({ data }) => {
          var data = data.data
          let arr = []
          if(data == ''){
            data = []
          }

          data.forEach(item=>{
            arr.push({position:[ item.longitude,item.latitude ],label:item.title})
          })

          this.SCENICLINE = arr
          console.log(this.SCENICLINE);
          if(type == '') this.initLocalData()
          else{
            this.mapCenter = arr.length ? arr[0].position : this.mapCenter
          }

          this.init();

        })
    }

  },
  computed: {
    setMapHeight() {
      return { height: document.documentElement.clientHeight - 90 + "px" }
    },
    showModelFlag: {
      get: function() {
        return this.$store.state.navigationDetails;
      },
      set: function() {}
    }
  },
  mounted() {
    this.getMarkerList('')
  }
};
</script>
<style lang="css" scoped>
.amap-demo {
  width: 100%;
  height: 300px;
  margin-top: 50px;
}

.amap-page-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content-model {
  position: relative;
  z-index: 9999;
}

</style>
