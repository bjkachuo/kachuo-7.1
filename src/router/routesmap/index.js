const _import = require('../_import_' + process.env.NODE_ENV);

// export default [{

export default [
  {
    path: '/',
    name: 'login',
    component: resolve => require(['@/components/index/Login'], resolve)
  },
  {
    path: '/registrationAgreement',
    name: 'registrationAgreement',
    component: resolve => require(['@/components/index/registrationAgreement'], resolve)
  },
  //关于我们
  {
    path: '/aboutUsTwo',
    name: 'aboutUsTwo',
    component: resolve => require(['@/components/common/aboutUsTwo'], resolve)

  },
  {
    path: '/login2',
    name: 'login2',
    component: resolve => require(['@/components/index/Login2'], resolve)
  },
  {
    path: '/indextab',
    name: 'indextab',
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
  //智慧导航
  {
    path: '/intelligentnavigation',
    name: 'intelligentnavigation',
    // component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation/IntelligentNavigation'], resolve),
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation/Bmap/Bmap'], resolve),
  },
  //景点列表
  {
    path: '/intelligentnavigation/listShow',
    name: 'intelligentnavigationListShow',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation/scenicSpot'], resolve),
  },
  //景点视频列表
  {
    path: '/intelligentnavigation/veidoList',
    name: 'intelligentnavigationVeidoList',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation/veidoList'], resolve),
  },
  //视频播放
  {
    path: '/intelligentnavigation/veidoPlay',
    name: 'VeidoPlay',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation/veidoPlay'], resolve),
  },
  //景区发布
  {
    path: '/scencerelease',
    name: 'scencerelease',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/ScenceRelease'], resolve),
  },
  //景区动态
  {
    path: '/scencerelease/dynamic',
    name: 'dynamic',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/dynamic/dynamic'], resolve),
  },
  //动态详情
  {
    path: '/scencerelease/dynamic/DynamicDetails',
    name: 'DynamicDetails',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/dynamic/DynamicDetails/DynamicDetails'], resolve),
  },
  //景区介绍
  {
    path: '/scencerelease/dynamic/ScenicContent',
    name: 'ScenicContent',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease/dynamic/ScenicContent/ScenicContent'], resolve),
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
  //带走的
  {
    path: '/takeaway',
    name: 'takeaway',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TakeAway/TakeAway'], resolve),
  },
  //地方特色，自营文创
  {
    path: '/takeaway/takeaList',
    name: 'takeaList',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TakeAway/takeList'], resolve),
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

  //购物车
  {
    path: '/Cartment',
    name: 'Cartment',
    component: resolve => require(['@/components/pages/kachuouser/Cartment/Cartment'], resolve),
  },
  //购物车确认订单
  {
    path: '/Cartment/goodsOlder',
    name: 'goodsOlder',
    component: resolve => require(['@/components/pages/kachuouser/Cartment/goodsOlder'], resolve),
  },
  //商品订单

  {
    path: '/OrderList',
    name: 'OrderList',
    component: resolve => require(['@/components/pages/kachuouser/OrderList/OrderList'], resolve),
  },

  //我的门票
  {
    path: '/myAdmissionTicket',
    name: 'myAdmissionTicket',
    component: resolve => require(['@/components/pages/kachuouser/myAdmissionTicket/myAdmissionTicket'], resolve),
  },
  //门票申请退款
  {
    path: '/myAdmissionTicket/refund',
    name: 'ticketRefund',
    component: resolve => require(['@/components/pages/kachuouser/myAdmissionTicket/refund'], resolve),
  },
  //变现管理
  {
    path: '/Liquidation',
    name: 'Liquidation',
    component: resolve => require(['@/components/pages/kachuouser/Liquidation/Liquidation'], resolve),
  },
  //我要寄卖
  {
    path: '/Liquidation/ConsignContent',
    name: 'ConsignContent',
    component: resolve => require(['@/components/pages/kachuouser/Liquidation/ConsignContent'], resolve),
  },
  //商品收藏
  {
    path: '/collection',
    name: 'Collection',
    component: resolve => require(['@/components/pages/kachuouser/Collection'], resolve),
  },
  //我的代金券
  {
    path: '/myCashCoupon',
    name: 'MyCashCoupon',
    component: resolve => require(['@/components/pages/kachuouser/myCashCoupon/myCashCoupon'], resolve),
  },
  //代金券详情
  {
    path: '/cashCoupon/detile',
    name: 'CashCouponDetile',
    component: resolve => require(['@/components/pages/kachuouser/myCashCoupon/detile'], resolve),
  },
  //代金券详情
  {
    path: '/cashCoupon/refund',
    name: 'CashCouponRefund',
    component: resolve => require(['@/components/pages/kachuouser/myCashCoupon/refund'], resolve),
  },
  //云相册
  {
    path: '/photoalbum',
    name: 'PhotoAlbum',
    component: resolve => require(['@/components/pages/kachuouser/PhotoAlbum'], resolve),
  },
  //创收管理
  {
    path: '/CreateIncome',
    name: 'CreateIncome',
    component: resolve => require(['@/components/pages/kachuouser/CreateIncome/CreateIncome'], resolve),
  },
  //我的创作
  {
    path: '/CreateIncome/MyCreation',
    name: 'MyCreation',
    component: resolve => require(['@/components/pages/kachuouser/CreateIncome/MyCreation'], resolve),
  },
  //创作收集
  {
    path: '/CreateIncome/CreationCollection',
    name: 'CreationCollection',
    component: resolve => require(['@/components/pages/kachuouser/CreateIncome/CreationCollection'], resolve),
  },
  //游园日记
  {
    path: '/GardenJournal',
    name: 'GardenJournal',
    component: resolve => require(['@/components/pages/kachuouser/GardenJournal/GardenJournal'], resolve),
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
    path: '/checkIn/agreement',
    name: 'agreement',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabIncome/agreement'], resolve),
  },
  {
    path: '/integraldesc',
    name: 'IntegralDesc',
    component: resolve => require(['@/components/pages/kachuouser/IntegralDesc'], resolve),
  },
  //个人中心
  {
    path: '/Ucenter',
    name: 'Ucenter',
    component: resolve => require(['@/components/pages/kachuouser/Ucenter/Ucenter'], resolve),
  },
  //昵称修改
  {
    path: '/Ucenter/ModifyNicknames',
    name: 'SetingNickName',
    component: resolve => require(['@/components/pages/kachuouser/Ucenter/ModifyNicknames'], resolve),
  },
  //实名认证未认证
  {
    path: '/Ucenter/Certification',
    name: 'Certification',
    component: resolve => require(['@/components/pages/kachuouser/Ucenter/Certification'], resolve),
  },
  // {
  //   path: '/setting',
  //   name: 'Setting',
  //   component: resolve => require(['@/components/pages/kachuouser/Setting'], resolve),
  // },
  {
    path: '/seting',
    name: 'Seting',
    component: resolve => require(['@/components/pages/kachuouser/Seting/Seting'], resolve),
  },
  {
    path: '/realnameauth',
    name: 'RealNameAuth',
    component: resolve => require(['@/components/pages/kachuouser/setting/RealNameAuth'], resolve),
  },
  //地址列表
  {
    path: '/address',
    name: 'Address',
    component: resolve => require(['@/components/pages/kachuouser/address/Address'], resolve),
  },
  //我的留言
  {
    path: '/MyMessage',
    name: 'MyMessage',
    component: resolve => require(['@/components/pages/kachuouser/MyMessage/MyMessage'], resolve),
  },
  //关于我们
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: resolve => require(['@/components/pages/kachuouser/setting/AboutUs'], resolve),
  },
  //意见反馈
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
  //添加新地址
  {
    path: '/addnewaddress',
    name: 'AddNewAddress',
    component: _import('pages/kachuouser/setting/AddNewAddress')
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
    component: resolve => require(['@/components/pages/kachuomall/GoodsVideoClassify/GoodsVideoClassify'], resolve),
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
  //名家入驻
  {
    path: '/checkIn/minjia',
    name: 'minjia',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabIncome/mingjia/mingjia'], resolve),
  },
  /***************************************景区后台*******************************************************/
  //景区后台首页
  {
    path: '/jingquBsIndex',
    name: 'JingquBsIndex',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquBsIndex'], resolve),
  },
  //景区后台资料页
  {
    path: '/jingquBsDate',
    name: 'JingquBsDate',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsDate'], resolve),
  },

  //景区照片添加页+
  {
    path: '/jingquBsAddPhoto',
    name: 'JingquBsAddPhoto',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsAddPhoto'], resolve),
  },
  //景区照片编辑页*
  {
    path: '/jingquBsEditPhoto',
    name: 'jingquBsEditPhoto',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsEditPhoto'], resolve),
  },

  //景区介绍添加页+
  {
    path: '/jingquBsAddIntroduce',
    name: 'JingquBsAddIntroduce',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsAddIntroduce'], resolve),

  },
  //景区介绍编辑页*
  {
    path: '/jingquBsEditIntroduce',
    name: 'jingquBsEditIntroduce',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsEditIntroduce'], resolve),

  },
  //景区服务项添加页+
  {
    path: '/jingquBsAddService',
    name: 'JingquBsAddService',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsAddService'], resolve),
  },
  //景区服务项编辑页*
  {
    path: '/jingquBsEditService',
    name: 'jingquBsEditService',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsEditService'], resolve),
  },
  //景区安全提示添加页+
  {
    path: '/jingquBsAddSecurity',
    name: 'JingquBsAddSecurity',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsAddSecurity'], resolve),

  },
  //景区安全提示编辑页*
  {
    path: '/jingquBsEditSecurity',
    name: 'jingquBsEditSecurity',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzilao/jingquBsEditSecurity'], resolve),

  },
  //景区后台景区讯息页
  {
    path: '/jingquBsInformation',
    name: 'JingquBsInformation',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzixun/jingquBsInformation'], resolve),
  },
  //景区资讯搜索页面
  {
    path: '/jingquBsSearch',
    name: 'JingquBsSearch',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzixun/jingquBsSearch'], resolve),

  },
  //景区资讯发布页面+
  {
    path: '/jingquBSInfoRelease',
    name: 'jingquBSInfoRelease',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzixun/jingquBSInfoRelease'], resolve),

  },
  //景区资讯发布后编辑页面*
  {
    path: '/jingquBSInfoEdit',
    name: 'jingquBSInfoEdit',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquzixun/jingquBSInfoEdit'], resolve),

  },
  // 景区后台导游
  {
    path: '/jingquBsGuide',
    name: 'JingquBsGuide',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudaoyou/jingquBsGuide'], resolve),
  },
  //景区后台添加导游
  {
    path: '/jingquBsAddguide',
    name: 'JingquBsAddguide',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudaoyou/jingquBsAddguide'], resolve),
  },
  //景区后台编辑导游
  {
    path: '/jingquBsEditguide',
    name: 'JingquBsEditguide',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudaoyou/jingquBsEditguide'], resolve),
  },
  //景区后台商城
  {
    path: '/jingquBsMall',
    name: 'JingquBsMall',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqushangcheng/jingquBsMall'], resolve),

  },
  //景区后台商城添加商品页
  {
    path: '/jingquBsAddCommodity',
    name: 'JingquBsAddCommodity',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqushangcheng/jingquBsAddCommodity'], resolve),
  },
  //景区后台商城编辑商品页
  {
    path: '/jingquBsEditCommodity',
    name: 'jingquBsEditCommodity',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqushangcheng/jingquBsEditCommodity'], resolve),
  },
  //景区后台订单管理
  {
    path: '/jingquBsOrder',
    name: 'JingquBsOrder',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/jingquBsOrder'], resolve),

  },
  //景区后台商品订单
  {
    path: '/jinquBsGoodsOrder',
    name: 'JinquBsGoodsOrder',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/jinquBsGoodsOrder'], resolve),

  },
  //景区后台商品订单发货页
  {
    path: '/jinquBsSendGoods',
    name: 'jinquBsSendGoods',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/jinquBsSendGoods'], resolve),
  },
  //景区后台商品订单查看物流页
  {
    path: '/jinquBsGoodsLogistics',
    name: 'jinquBsGoodsLogistics',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/jinquBsGoodsLogistics'], resolve),
  },
  //景区后台商品订单详情：待发货
  {
    path: '/orderWaitPro',
    name: 'orderWaitPro',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/productOrderDetails/orderWaitPro'], resolve),

  },
  //景区后台商品订单详情：已发货
  {
    path: '/orderAlreadyPro',
    name: 'orderAlreadyPro',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/productOrderDetails/orderAlreadyPro'], resolve),

  },
  //景区后台商品订单详情：退款中
  {
    path: '/orderReturnPro',
    name: 'orderReturnPro',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/productOrderDetails/orderReturnPro'], resolve),

  },
  //景区后台商品订单详情：已退款
  {
    path: '/orderReturnedPro',
    name: 'orderReturnedPro',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/productOrderDetails/orderReturnedPro'], resolve),

  },
  //景区后台商品订单详情：已完成
  {
    path: '/orderFinishPro',
    name: 'orderFinishPro',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/productOrderDetails/orderFinishPro'], resolve),

  },
  //景区后台导游订单
  {
    path: '/jingquBsGuideOrder',
    name: 'jingquBsGuideOrder',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/jingquBsGuideOrder'], resolve),
  },
  //景区后台导游订单详情
  {
    path: '/jingquBsGuideOrderDetails',
    name: 'jingquBsGuideOrderDetails',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingqudingdan/guideOrderDetails/jingquBsGuideOrderDetails'], resolve),
  },
  //景区后台游客留言
  {
    path: '/jingquMessageAudit',
    name: 'jingquMessageAudit',
    component: resolve => require(['@/components/pages/backStage/jingquBackstage/jingquliuyan/jingquMessageAudit'], resolve),
  },
  //***********************************商家管理后台(新)***********************************************
  //商家管理后台首页（新）
  {
    path: '/StoreBsIndex',
    name: 'StoreBsIndex',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsIndex'], resolve),
  },
  //商家管理后台输入码后查询结果（新）
  {
    path: '/queryResults',
    name: 'queryResults',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsQueryResults/queryResults'], resolve),
  },
  //商家管理后台代金券历史记录（新）
  {
    path: '/historicalRecord',
    name: 'historicalRecord',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsHistorical/historicalRecord'], resolve),
  },
  //商家管理后台代店铺信息页（新）
  {
    path: '/storeInfomation',
    name: 'storeInfomation',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/storeInfomation'], resolve),
  },
  //商家管理后台编辑店铺名称（新）
  {
    path: '/StoreEditName',
    name: 'StoreEditName',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/StoreEditName/StoreEditName'], resolve),
  },
  //商家管理后台编辑店铺LOGO（新）
  {
    path: '/StoreEditLogo',
    name: 'StoreEditLogo',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/StoreEditLogo/StoreEditLogo'], resolve),
  },
  //商家管理后台编辑店铺照片（新）
  {
    path: '/StoreEditPhoto',
    name: 'StoreEditPhoto',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/StoreEditPhoto/StoreEditPhoto'], resolve),
  },
  //商家管理后台编辑店铺电话（新）
  {
    path: '/StoreEditPhone',
    name: 'StoreEditPhone',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/StoreEditPhone/StoreEditPhone'], resolve),
  },
  //商家管理后台编辑店铺地址（新）
  {
    path: '/StoreEditAddress',
    name: 'StoreEditAddress',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/StoreEditAddress/StoreEditAddress'], resolve),
  },
  //商家管理后台主营分类（新）
  {
    path: '/StoreEditMain',
    name: 'StoreEditMain',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/StoreEditMain/StoreEditMain'], resolve),
  },
  //商家管理后台店铺介绍（新）
  {
    path: '/StoreEditIntroduce',
    name: 'StoreEditIntroduce',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/StoreBsInfo/StoreEditIntroduce/StoreEditIntroduce'], resolve),
  },
  //商家管理后台商家推荐页（新）
  {
    path: '/goodsRecommend',
    name: 'goodsRecommend',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/GoodsRecommend/goodsRecommend'], resolve),
  },
  //商家管理后台用户评论页（新）
  {
    path: '/UserReviews',
    name: 'UserReviews',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/UserReviews/UserReviews'], resolve),
  },
  //商家管理后台代金券（新）
  {
    path: '/cashCoupon',
    name: 'cashCoupon',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/cashCoupon/cashCoupon'], resolve),
  },
  //商家管理后台添加代金券（新）
  {
    path: '/addCash',
    name: 'addCash',
    component: resolve => require(['@/components/pages/backStage/StoreBackstage/cashCoupon/addCash'], resolve),
  },
  /*******************************************名家后台***************************************************/
  //名家后台首页
  {
    path: '/famousPersonBsIndex',
    name: 'famousPersonBsIndex',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonBsIndex'], resolve),

  },
  //名家后台个人信息页
  {
    path: '/famousPersonInformation',
    name: 'famousPersonInformation',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonInformation/famousPersonInformation'], resolve),

  },
  //名家后台名家动态页
  {
    path: '/famousPersonDynamic',
    name: 'famousPersonDynamic',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonDynamic/famousPersonDynamic'], resolve),

  },
  //名家后台发布动态页
  {
    path: '/famousPersonRelease',
    name: 'famousPersonRelease',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonDynamic/famousPersonRelease'], resolve),

  },
  //名家后台留言审核页
  {
    path: '/famousPersonMessageAudit',
    name: 'famousPersonMessageAudit',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonMessageAudit/famousPersonMessageAudit'], resolve),

  },
  //名家后台商品管理页
  {
    path: '/famousPersonManagement',
    name: 'famousPersonManagement',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonManagement/famousPersonManagement'], resolve),

  },
  //名家后台商品添加页
  {
    path: '/famousPersonManagementAdd',
    name: 'famousPersonManagementAdd',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonManagement/famousPersonManagementAdd'], resolve),

  },
  //名家后台商品订单管理页
  {
    path: '/famousPersonOrder',
    name: 'famousPersonOrder',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonOrder/famousPersonOrder'], resolve),

  },

  /*******************************************名家后台***************************************************/
  //名家后台首页
  {
    path: '/famousPersonBsIndex',
    name: 'famousPersonBsIndex',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonBsIndex'], resolve),

  },
  //名家后台个人信息页
  {
    path: '/famousPersonInformation',
    name: 'famousPersonInformation',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonInformation/famousPersonInformation'], resolve),

  },
  //名家后台名家动态页
  {
    path: '/famousPersonDynamic',
    name: 'famousPersonDynamic',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonDynamic/famousPersonDynamic'], resolve),

  },
  //名家后台发布动态页
  {
    path: '/famousPersonRelease',
    name: 'famousPersonRelease',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonDynamic/famousPersonRelease'], resolve),

  },
  //名家后台留言审核页
  {
    path: '/famousPersonMessageAudit',
    name: 'famousPersonMessageAudit',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonMessageAudit/famousPersonMessageAudit'], resolve),

  },
  //名家后台商品管理页
  {
    path: '/famousPersonManagement',
    name: 'famousPersonManagement',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonManagement/famousPersonManagement'], resolve),

  },
  //名家后台商品添加页
  {
    path: '/famousPersonManagementAdd',
    name: 'famousPersonManagementAdd',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonManagement/famousPersonManagementAdd'], resolve),

  },
  //名家后台商品订单管理页
  {
    path: '/famousPersonOrder',
    name: 'famousPersonOrder',
    component: resolve => require(['@/components/pages/backStage/FamousPersonBackstage/famousPersonOrder/famousPersonOrder'], resolve),

  },

  /*******************************************************************************************/
  {
    path: '/understand',
    name: 'understand',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/Understand'], resolve),
  },

  {
    path: '/servicesurround',
    name: 'servicesurround',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ServiceSurround'], resolve),
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
    //住吧详情页二
    path: '/ResideDetails',
    name: 'ResideDetails',
    component: resolve => require(['@/components/common/ResideDetails'], resolve),

  },
  {
    //住吧预定下单详情
    path: '/ResideReserve',
    name: 'ResideReserve',
    component: resolve => require(['@/components/common/ResideReserve'], resolve),

  },
  {
    //支付订单成功页外包 兼容好
    path: '/ReserveResult',
    name: 'ReserveResult',
    component: resolve => require(['@/components/common/ReserveResult'], resolve),

  },
  {
    //支付订单成功页
    path: '/ordersSucess',
    name: 'OrdersSucess',
    component: resolve => require(['@/components/common/ordersSucess'], resolve),

  },
  {
    //游吧列表页
    path: '/TourList',
    name: 'TourList',
    component: resolve => require(['@/components/common/TourList'], resolve),
  },
  {
    //游吧导游注册页
    path: '/TourRegister',
    name: 'TourRegister',
    component: resolve => require(['@/components/common/TourRegister'], resolve),
  },
  {
    //游吧导游详情页
    path: '/GuideContent',
    name: 'GuideContent',
    component: resolve => require(['@/components/common/GuideContent'], resolve),

  },
  {
    //预约导游订单页面
    path: '/GuideForm',
    name: 'GuideForm',
    component: resolve => require(['@/components/common/GuideForm'], resolve),

  },
  {
    //吃吧喝吧营业资质
    path: '/Qualifications',
    name: 'Qualifications',
    component: resolve => require(['@/components/common/Qualifications'], resolve),

  },
  {
    //玩吧详情页
    path: '/PlayDetails',
    name: 'PlayDetails',
    component: resolve => require(['@/components/common/PlayDetails'], resolve),

  },
  {
    //玩吧订详情页
    path: '/PlayReserve',
    name: 'PlayReserve',
    component: resolve => require(['@/components/common/PlayReserve'], resolve),

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
  },
  {
    //票务系统在线购票
    path: '/onlineTicketing',
    name: 'onlineTicketing',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/onlineTicketing/onlineTicketing'], resolve),
  },
  //购票须知
  {
    path: '/onlineTicketing/OrdersSubstance',
    name: 'OrdersSubstance',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/onlineTicketing/OrdersSubstance'], resolve),
  },
  //购票订单完成
  {
    path: '/completeTicket',
    name: 'completeTicket',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/onlineTicketing/completeTicket'], resolve),
  },
  //购票订单填写
  {
    path: '/onlineTicketing/orderCompletion',
    name: 'orderCompletion',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/onlineTicketing/orderCompletion'], resolve),
  },
  {
    //票务系统电子票
    path: '/electronicsTicket',
    name: '/electronicsTicket',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/electronicsTicket'], resolve),

  },
  {
    //票务系统纸质票
    path: '/paperTicket',
    name: '/paperTicket',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/paperTicket'], resolve),

  },
  {
    //票务系统免费票
    path: '/freeTickets',
    name: '/freeTickets',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/freeTickets'], resolve),

  },
  //票务系统现场票
  {
    path: '/onsiteTickets',
    name: '/onsiteTickets',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/onsiteTickets'], resolve),
  },
  //积分充值
  {
    path: '/Recharge',
    name: '/Recharge',
    component: resolve => require(['@/components/pages/Recharge'], resolve),
  },
  //吃喝玩住导演支付页面
  {
    path: '/GuidePayment',
    name: '/GuidePayment',
    component: resolve => require(['@/components/common/GuidePayment'], resolve),
  },
  {
    //导游后台首页
    path: '/TourBsIndex',
    name: '/TourBsIndex',
    component: resolve => require(['@/components/common/TourBackstage/TourBsIndex'], resolve),

  },
  {
    //导游后台个人资料页
    path: '/personMsgBs',
    name: '/personMsgBs',
    component: resolve => require(['@/components/common/TourBackstage/personMsgBs'], resolve),

  },
  {
    //导游后台订单管理页
    path: '/GuideOrderBs',
    name: '/GuideOrderBs',
    component: resolve => require(['@/components/common/TourBackstage/GuideOrderBs'], resolve),

  },
  {
    //等待审核页面
    path: '/waitingAudit',
    name: 'waitingAudit',
    component: resolve => require(['@/components/common/waitingAudit'], resolve),
  },
  {
    //订单详情页面
    path: '/orderDetails',
    name: 'orderDetails',
    component: resolve => require(['@/components/common/orderDetails'], resolve),
  },
  {
    //游园订单
    path: '/GardenOrder',
    name: 'GardenOrder',
    component: resolve => require(['@/components/common/GardenService/GardenOrder'], resolve),
  },
  {
    //积分提现
    path: '/drawIntegral',
    name: 'drawIntegral',
    component: resolve => require(['@/components/pages/kachuouser/drawIntegral'], resolve),
  },
  {
    //积分提现完成页
    path: '/drawDone',
    name: 'drawDone',
    component: resolve => require(['@/components/pages/kachuouser/drawDone'], resolve),
  },
  /************************************安卓跳转****************************************************/
  {
    //安卓游园首页
    path: '/KachuoTabPlay',
    name: 'KachuoTabPlay',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabPlay'], resolve),

  },
  {
    //安卓游园商城
    path: '/KachuoTabMall',
    name: 'KachuoTabMall',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabMall/KachuoTabMall'], resolve),
  },
  {
    //安卓游园变现
    path: '/KachuoTabCash',
    name: 'KachuoTabCash',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabCash/KachuoTabCash'], resolve),
  },
  {
    //安卓游园创收
    path: '/KachuoTabIncome',
    name: 'KachuoTabIncome',
    component: resolve => require(['@/components/pages/tabindex/KachuoTabIncome/KachuoTabIncome'], resolve),
  },
  /****************************************************************************************/


]
