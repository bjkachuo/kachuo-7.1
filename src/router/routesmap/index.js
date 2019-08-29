/*
 * @Description: 
 * @Author: lpb
 * @Github: https://github.com/lpb273
 * @LastEditors: lpb
 * @Date: 2019-02-27 14:46:25
 * @LastEditTime: 2019-05-07 11:10:07
 */
export default [{
    path: '/',
    name: 'login',
    meta: {
      auth: true // 如果此路由需要微信授权请设置为true,默认为false
    },
    component: resolve => require(['@/components/index/Login'], resolve)
  },
  {
    path: '/indextab',
    name: 'indextab',
    meta: {
      auth: true // 如果此路由需要微信授权请设置为true,默认为false
    },
    component: resolve => require(['@/components/index/index'], resolve)
  },
  {
    path: '/userlocation',
    name: 'userlocation',
    component: resolve => require(['@/components/pages/kachuoplay/UserLocation'], resolve),
  },
  {
    path: '/appmessage',
    name: 'appmessage',
    component: resolve => require(['@/components/pages/kachuouser/Message'], resolve),
  },
  {
    path: '/messagelist',
    name: 'messagelist',
    component: resolve => require(['@/components/pages/kachuouser/MessageList'], resolve),
  },
  {
    path: '/messagelistdetails',
    name: 'MessageListDetails',
    component: resolve => require(['@/components/pages/kachuouser/MessageListDetails'], resolve),
  },
  {
    path: '/usersearch',
    name: 'usersearch',
    component: resolve => require(['@/components/pages/kachuoplay/UserSearch'], resolve),
  },
  {
    path: '/ticketsdiscount',
    name: 'ticketsdiscount',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TicketsDiscount'], resolve),
  },
  {
    path: '/intelligentnavigation',
    name: 'intelligentnavigation',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation'], resolve),
  },
  {
    path: '/scencerelease',
    name: 'scencerelease',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/ScenceRelease'], resolve),
  },
  {
    path: '/scencerelease/dynamic',
    name: 'dynamic',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/dynamic/dynamic'], resolve),
  },
  {
    path: '/scencerelease/guideList',
    name: 'guideList',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/guideList/guideList'], resolve),
  },
  //导游详情
  {
    path: '/scencerelease/guideList/guideDetile',
    name: 'guideDetile',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/guideList/guideDetile/guideDetile'], resolve),
  },
  //预约导游
  {
    path: '/scencerelease/guideList/guideDetile/appointment',
    name: 'appointment',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/guideList/guideDetile/appointment/appointment'], resolve),
  },
  //名家入驻
  {
    path: '/checkIn/minjia',
    name: 'checkInminjia',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabIncome/mingjia/mingjia'], resolve),
  },
  //商家入驻
  {
    path: '/checkIn/shangjia',
    name: 'checkInshangjia',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabIncome/shangjia/shangjia'], resolve),
  },
  //景区入驻
  {
    path: '/checkIn/jingqu',
    name: 'checkInjingqu',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabIncome/jingqu/jingqu'], resolve),
  },
  //墨客入驻
  {
    path: '/checkIn/moke',
    name: 'checkInmoke',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabIncome/moke/moke'], resolve),
  },
  {
    path: '/scenceservice',
    name: 'scenceservice',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceService'], resolve),
  },
  {
    path: '/remember',
    name: 'remember',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/Remember'], resolve),
  },
  {
    path: '/understand',
    name: 'understand',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/Understand'], resolve),
  },
  {
    path: '/takeaway',
    name: 'takeaway',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TakeAway'], resolve),
  },
  {
    path: '/servicesurround',
    name: 'servicesurround',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ServiceSurround'], resolve),
  },
  {
    path: '/scencereleasedetals',
    name: 'scencereleasedetals',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceReleaseDetails'], resolve),
  },
  {
    path: '/famousreleasedetails',
    name: 'FamousReleaseDetails',
    component: resolve => require(['@/components/pages/kachuomall/FamousReleaseDetails'], resolve),
  },
  {
    path: '/releasecontent',
    name: 'releasecontent',
    component: resolve => require(['@/components/layout/ReleaseContent'], resolve),
  },
  {
    path: '/scencestorydetail',
    name: 'scencestorydetail',
    component: resolve => require(['@/components/pages/kachuoplay/toollistcontent/ScenceStoryDetail'], resolve),
  },
  {
    path: '/scenceconsumdetails',
    name: 'scenceconsumdetails',
    component: resolve => require(['@/components/pages/kachuomall/ScenceConsumDetails'], resolve),
  },
  {
    path: '/scenceconsum',
    name: 'scenceconsum',
    component: resolve => require(['@/components/pages/kachuomall/ScenceConsum'], resolve),
  },
  {
    path: '/scencegifts',
    name: 'scencegifts',
    component: resolve => require(['@/components/pages/kachuomall/ScenceGifts'], resolve),
  },
  {
    path: '/famouscollection',
    name: 'famouscollection',
    component: resolve => require(['@/components/pages/kachuomall/FamousCollection'], resolve),
  },
  {
    path: '/backleasesale',
    name: 'BackLeaseSale',
    component: resolve => require(['@/components/pages/kachuocash/BackLeaseSale'], resolve),
  },
  {
    path: '/informationconsum',
    name: 'InformationConsumption',
    component: resolve => require(['@/components/pages/kachuocash/InformationConsumption'], resolve),
  },
  {
    path: '/informationconsumdetails',
    name: 'InformationConsumDetails',
    component: resolve => require(['@/components/pages/kachuocash/InformationConsumDetails'], resolve),
  },
  {
    path: '/videocreated',
    name: 'VideoCreated',
    component: resolve => require(['@/components/pages/kachuoincome/VideoCreated'], resolve),
  },
  {
    path: '/imageandtext',
    name: 'ImageAndText',
    component: resolve => require(['@/components/pages/kachuoincome/ImageAndText'], resolve),
  },
  {
    path: '/hundredshall',
    name: 'HundredsHall',
    component: resolve => require(['@/components/pages/kachuoincome/HundredsHall/HundredsHall'], resolve),
  },
  {
    path: '/releasevideo',
    name: 'ReleaseVideo',
    component: resolve => require(['@/components/pages/kachuoincome/ReleaseVideo'], resolve),
  },
  {
    path: '/releaseimgandtext',
    name: 'ReleaseImgAndText',
    component: resolve => require(['@/components/pages/kachuoincome/ReleaseImgAndText'], resolve),
  },
  {
    path: '/imageandtextdetails',
    name: 'ImageAndTextDetails',
    component: resolve => require(['@/components/pages/kachuoincome/ImageAndTextDetails'], resolve),
  },
  {
    path: '/usertoken',
    name: 'UserToken',
    component: resolve => require(['@/components/pages/kachuouser/UserToken'], resolve),
  },
  {
    path: '/userintegral',
    name: 'UserIntegral',
    component: resolve => require(['@/components/pages/kachuouser/UserIntegral'], resolve),
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: resolve => require(['@/components/pages/kachuouser/ShoppingCart'], resolve),
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: resolve => require(['@/components/pages/kachuouser/OrderList'], resolve),
  },
  {
    path: '/collection',
    name: 'Collection',
    component: resolve => require(['@/components/pages/kachuouser/Collection'], resolve),
  },
  {
    path: '/photoalbum',
    name: 'PhotoAlbum',
    component: resolve => require(['@/components/pages/kachuouser/PhotoAlbum'], resolve),
  },
  {
    path: '/tokenqrcode',
    name: 'TokenQrcode',
    component: resolve => require(['@/components/pages/kachuouser/TokenQrcode'], resolve),
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: resolve => require(['@/components/pages/kachuouser/SignIn'], resolve),
  },
  {
    path: '/integraldesc',
    name: 'IntegralDesc',
    component: resolve => require(['@/components/pages/kachuouser/IntegralDesc'], resolve),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: resolve => require(['@/components/pages/kachuouser/Setting'], resolve),
  },
  {
    path: '/realnameauth',
    name: 'RealNameAuth',
    component: resolve => require(['@/components/pages/kachuouser/setting/RealNameAuth'], resolve),
  },
  {
    path: '/address',
    name: 'Address',
    component: resolve => require(['@/components/pages/kachuouser/setting/Address'], resolve),
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: resolve => require(['@/components/pages/kachuouser/setting/AboutUs'], resolve),
  },
  {
    path: '/opinion',
    name: 'Opinion',
    component: resolve => require(['@/components/pages/kachuouser/setting/Opinion'], resolve),
  },
  {
    path: '/realnameauthstate',
    name: 'RealNameAuthState',
    component: resolve => require(['@/components/pages/kachuouser/setting/RealNameAuthState'], resolve),
  },
  {
    path: '/addnewaddress',
    name: 'AddNewAddress',
    component: resolve => require(['@/components/pages/kachuouser/setting/AddNewAddress'], resolve),
  },
  {
    path: '/expressinfo',
    name: 'ExpressInfo',
    component: resolve => require(['@/components/pages/kachuouser/order/ExpressInfo'], resolve),
  },
  {
    path: '/goodsdetails',
    name: 'GoodsDetails',
    component: resolve => require(['@/components/pages/kachuomall/goods/GoodsDetails/GoodsDetails'], resolve),
  },
  {
    path: '/customerService',
    name: 'CustomerService',
    component: resolve => require(['@/components/pages/customerService/customerService'], resolve),
  },
  {
    path: '/confirmorder',
    name: 'ConfirmOrder',
    component: resolve => require(['@/components/pages/kachuomall/goods/ConfirmOrder'], resolve),
  },
  {
    path: '/blockinfoindex',
    name: 'BlockInfoIndex',
    component: resolve => require(['@/components/pages/kachuomall/goods/blockchain/BlockInfoIndex'], resolve),
  },
  {
    path: '/blockchaininfodetails',
    name: 'BlockChainInfoDetails',
    component: resolve => require(['@/components/pages/kachuomall/goods/blockchain/BlockChainInfoDetails'], resolve),
  },
  {
    path: '/backleasedetails',
    name: 'BackLeaseDetails',
    component: resolve => require(['@/components/pages/kachuocash/BackLeaseDetails'], resolve),
  },
  {
    path: '/backbuydetails',
    name: 'BackBuyDetails',
    component: resolve => require(['@/components/pages/kachuocash/BackBuyDetails'], resolve),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: resolve => require(['@/components/pages/kachuomall/goods/Payment'], resolve),
  },
  {
    path: '/confirmordershoppingcart',
    name: 'ConfirmOrderShoppingCart',
    component: resolve => require(['@/components/pages/kachuomall/goods/ConfirmOrderShoppingCart'], resolve),
  },
  {
    path: '/facecheck',
    name: 'facecheck',
    component: resolve => require(['@/components/pages/facerecognition/index'], resolve),
  },
  {
    path: '/face',
    name: 'face',
    component: resolve => require(['@/components/pages/facerecognition/face'], resolve),
  },
  {
    path: '/ticketsorder',
    name: 'TicketsOrder',
    component: resolve => require(['@/components/pages/kachuouser/TicketsOrder'], resolve),
  },
  {
    path: '/ticketsdetails',
    name: 'TicketsDetails',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TicketsDetails'], resolve),
  },
  {
    path: '/goodsVideoclassify',
    name: 'GoodsVideoClassify',
    component: resolve => require(['@/components/pages/kachuomall/GoodsVideoClassify'], resolve),
  },
  {
    path: '/goodsVideoclassifydetails',
    name: 'GoodsVideoClassifyDetails',
    component: resolve => require(['@/components/pages/kachuomall/GoodsVideoClassifyDetails'], resolve),
  },
  {
    path: '/yaoyuechuangzuo',
    name: 'YaoYueChuangZuo',
    component: resolve => require(['@/components/pages/kachuoincome/YaoYueChuangZuo/YaoYueChuangZuo'], resolve),
  },
  {
    path: '/yaoyuechuangzuo/culturalCreativity',
    name: 'culturalCreativity',
    component: resolve => require(['@/components/pages/kachuoincome/YaoYueChuangZuo/culturalCreativity/culturalCreativity'], resolve),
  },
  {
    path: '/yaoyuechuangzuo/art',
    name: 'art',
    component: resolve => require(['@/components/pages/kachuoincome/YaoYueChuangZuo/art/art'], resolve),
  },
  {
    path: '/wenchuangqiangdan',
    name: 'WenChuangQiangdan',
    component: resolve => require(['@/components/pages/kachuoincome/caiyuangongxiang/WenChuangQiangdan'], resolve),
  },
  {
    path: '/yichuangqiangdan',
    name: 'YiChuangQiangdan',
    component: resolve => require(['@/components/pages/kachuoincome/caiyuangongxiang/YiChuangQiangdan'], resolve),
  },
  {
    path: '/yichuangqiangdaninput',
    name: 'YiChuangQiangdanInput',
    component: resolve => require(['@/components/pages/kachuoincome/caiyuangongxiang/YiChuangQiangdanInput'], resolve),
  },
  {
    path: '/suyuanqiangdan',
    name: 'SuYuanQiangdan',
    component: resolve => require(['@/components/pages/kachuoincome/caiyuangongxiang/SuYuanQiangdan'], resolve),
  },
  {
    path: '/orderlistcaiyuan',
    name: 'OrderListCY',
    component: resolve => require(['@/components/pages/kachuoincome/caiyuangongxiang/OrderList'], resolve),
  },
  {
    //游园服务一级表页
    path: '/scenicService',
    name: 'ScenicService',
    component: resolve => require(['@/components/common/ScenicService'], resolve),
  },
  {
    //游园服务二级列表页吃喝玩住行切换
    path: '/businessList',
    name: 'BusinessList',
    component: resolve => require(['@/components/common/businessList'], resolve),

  },
  {
    //吃喝家详情页
    path: '/eatDrinkDetails',
    name: 'EatDrinkDetails',
    component: resolve => require(['@/components/common/eatDrinkDetails'], resolve),
  },
  {
    //吃吧喝吧订单确认页
    path: '/eatDrinkOrders',
    name: 'EatDrinkOrders',
    component: resolve => require(['@/components/common/eatDrinkOrders'], resolve),
  },

  {
    //住详情页
    path: '/hotelDetails',
    name: 'HotelDetails',
    component: resolve => require(['@/components/common/hotelDetails'], resolve),

  },
  {
    //支付订单成功页
    path: '/ordersSucess',
    name: 'OrdersSucess',
    component: resolve => require(['@/components/common/ordersSucess'], resolve),

  },

  // {
  //   //周边服务商家列表页
  //   path: '/suerroundBusiness',
  //   name:'SuerroundBusiness',
  //   component: resolve => require(['@/components/common/suerroundBusiness'], resolve),
  // },
  // {
  //   //周边服务商家详情页
  //   path: '/storeDetails',
  //   name :'StoreDetails',
  //   component: resolve => require(['@/components/common/storeDetails'], resolve),
  // },
  {
    //商品分类页
    path: '/goodsSlassification',
    name: 'GoodsSlassification',
    component: resolve => require(['@/components/pages/kachuomall/GoodsSlassification'], resolve),
  },
  {
    //商品分类列表页面
    path: '/categoryList',
    name: 'CategoryList',
    component: resolve => require(['@/components/common/CategoryList'], resolve)

  },
  {
    //商品足迹页面
    path: '/footprint',
    name: '/FootPrint',
    component: resolve => require(['@/components/common/FootPrint'], resolve)
  },
  //
  {
    path: '/hundredshall/add',
    name: 'hundredshallAdd',
    component: resolve => require(['@/components/pages/kachuoincome/HundredsHall/hundredshallAdd'], resolve),
  },


  //景区后台
  {
    path: '/scenicSpot/index',
    name: 'scenicSpotIndex',
    component: resolve => require(['@/admin/scenicSpot/page/index/index'], resolve),
  },
  //景区信息
  {
    path: '/scenicSpot/information',
    name: 'information',
    component: resolve => require(['@/admin/scenicSpot/page/information/information'], resolve),
  }
]
