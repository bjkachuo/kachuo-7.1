import http from './server-config'

// 获取验证码
export const getVeriCode = (data) => http.post('sms.changemobile', data);


// 登录
export const login = (data) => http.post('login.logintel', data);
   // 获取用户信息
export const getUserInfo = (data) => http.post('member.realname.login', data);

//panhuisen 2019.07.17
//上传推送RegistrationID
export const uploadRegistrationID = (data) => http.post('member.realname.get_reg_id', data);

// 名家商城首页
export const getFamousMallDate = () => http.post('home.celebrity');

// 景区商城首页
export const getScenicMallDate = () => http.post('home.Scenic');

//景区商城列表
export const getScenicList = (data) => http.post("goods.index.get_list", data)

//app新闻动态
export const getKaChuoNews = (data) => http.post("dynamic.index", data)

//商品详情
export const getDetail = (data) => http.post("shop.index.detail", data)

//防伪查询
export const Anti = (data) => http.post("goods.details.get_fw", data);

//添加购物车
export const SaveShopping = (data) => http.post("goods.details.save_shopping", data)

//添加订单
export const AddShop = (data) => http.post("goods.buy.add_shopOrder", data);

// 获取用户默认收货地址
export const getAddressDefault = (data) => http.post("goods.buy.getAddress", data);

//用户地址列表
export const getAddressList = (data) => http.post("member.address.getList", data);

//获取收货地址详细信息
export const getAddressDetail = (data) => http.post("member.address.getDetail", data);

//添加、修改收货地址
export const updateAddress = (data) => http.post("member.address.submit", data);

//购物车列表
export const ShopList = (data) => http.post("goods.details.get_iShopList", data)
//删除购物车
export const deletCar = (data) => http.post("goods.details.del_shop", data)

//我的订单
export const GoodsList = (data) => http.post("goods.buy.get_IShopOrder", data);

//订单操作
export const Operation = (data) => http.post("goods.buy.cancel_order", data);

//支付
export const Pay = (data) => http.post("goods.buy.orderPay", data);

//查询微信支付完成订单状态状态
export const Notify = (data) => http.post("goods.buy.notify", data);

//查询支付宝支付完成订单状态状态
export const aliNotify = (data) => http.post("goods.buy.aliNotify", data);

//频类首页图
export const Frequency = (data) => http.post("video.index", data);

//频类详情
export const FrequencyDetail = (data) => http.post("video.index.getvideo", data);

//频类评论
export const FrequencyComment = (data) => http.post("video.index.subcomment", data)

//实名认证
export const RealName = (data) => http.post("member.realname.isSmAuth", data);

//景区名家视频
export const getVideo = (data) => http.post("video.show", data);

//文化梳理
export const Culture = (data) => http.post("index.culture", data);

//艺品创作
export const Author = (data) => http.post("index.author", data);

//艺品溯源
export const Suyuan = (data) => http.post("index.suyuan", data);

//艺品防伪
export const Attestation = (data) => http.post("index.attestation", data);

// 首页频类列表
export const VideoListIndex = (data) => http.post("video.index", data);

// 动态详情页
export const newsDetails = (data) => http.post("dynamic.index.dynamic_details", data);

// 回购
export const buyBack = (data) => http.post("goods.repurchase.slide_list", data);

// 回购列表
export const buyBackList = (data) => http.post("buyback.index.activity", data);

// 申请回购
export const buyBackSubmit = (data) => http.post("goods.repurchase.submit", data);

// 购物车下单
export const goodsBucketSubmit = (data) => http.post("goods.buy.add_gwcOrder", data);
//
export const order_pay = (data) => http.post("goods.buy.order_pay", data);

// 购物车删除
export const goodsBucketDelete = (data) => http.post("goods.details.del_shop", data);

// 购物推荐
export const goodsBucketRecomm = (data) => http.post("goods.details.PickShop", data);

// 文链查证列表未售
export const blockChainList = (data) => http.post("index", data);

// 文链查证列表已售
export const blockChainInfoGoods = (data) => http.post("verify.index.sold", data);

// 查看商品详情
export const blockChainInfo = (data) => http.post("verify.index.info", data);

// 版本更新信息
export const getUpdateInfo = (data) => http.post("renovate", data);

// 通知中心
export const kachuoMessageCenter = (data) => http.post("renovate.appnewslist", data);

//确认收货
export const Confirmation = (data) => http.post("goods.buy.is_Confirmation", data);

//寄卖列表
export const marketList = () => http.post("goods.market.slide_list");

// 租赁列表
export const LeasetList = (data) => http.post("lease.index.lease_list", data);

//一件寄卖
export const shotMarket = () => http.post("goods.market.OneShotMarket");

// 寄卖确认收货
export const confirmPress = (data) => http.post("goods.market.confirmOrder", data);

//租赁轮播
export const leaseCarousel = () => http.post("goods.lease.slide_list")

//租赁列表
export const leaseList = () => http.post("goods.lease.lease_list");

// 我的订单确认收货
export const orderConfirm = (data) => http.post("goods.buy.is_Confirmation", data);

// 申请寄卖
export const jm_addOrder = (data) => http.post("goods.buy.jm_addOrder", data);

// 寄卖商品列表
export const sendGoodsList = (data) => http.post("goods.buy.jm_goods", data);

// 设置默认收获地址
export const setDefaultAddr = (data) => http.post("member.address.setDefault", data);

//提现
export const Putforward = (data) => http.post("member.withdraw.submit", data);

// 数据规则
export const getUserRule = (data) => http.post("login.getUserCode2");

// 获取实名认证状态
export const GetAuthState = (data) => http.post("login.getuserauth", data);

// 实名认证提交
export const AuthSubmit = (data) => http.post("login.saveuserauth", data);

//提交名家入驻
export const postMingjia = (data) => http.post('enter.celebrity', data);

//提交景区入驻
export const postJingqu = (data) => http.post('enter.scenic', data);

//商家入驻
export const postShangjia = (data) => http.post('enter.business', data);

//拍客入驻
export const postPaike = (data) => http.post('enter.photogApply', data)
//匠人入驻
export const postJiangren = (data) => http.post('enter.artisanApply', data)
//墨客入驻
export const postMoke = (data) => http.post('enter.schloarApply', data)


// 图片上传
export const imageUpload = (data) => http.post("util.uploader.uploadm", data);

// 朋友圈图片上传
export const imageUploadTimeline = (data) => http.post("util.uploader.uploadtow", data);

// 收藏,分享
export const CollectionGoods = (data) => http.post("member.realname.member_favorite", data);

// 搜索
export const SearchGoodsList = (data) => http.post("index.sel_list", data);

// 视频点赞
export const VideoPraise = (data) => http.post("index.praise", data);

// 视频评论
export const VideoComment = (data) => http.post("index.subcomment", data);

// 分销商申请
export const JoinKachuo = (data) => http.post("member.realname.save_distributor", data);

// 分销商信息查询
export const KachuoJoinInfo = (data) => http.post("member.realname.get_distributor", data);

// 物流信息查询
export const orderExpressInfo = (data) => http.post("goods.details.get_logistics", data);

// 用户提交个人动态
export const userSubmitNews = (data) => http.post("index.friendadd", data);

// 获取朋友圈列表
export const userFriendTimeLine = (data) => http.post("index.friendlist", data);

// 获取朋友圈列表详细
export const userFriendTimeLineDetails = (data) => http.post("index.friendcon", data);

// 景区故事列表
export const scenceStoryList = (data) => http.post("dynamic.dynamiclist", data);

// 景区故事详情
export const scenceStoryDetalis = (data) => http.post("index.seasoncon", data);

// 商品区块链信息
export const verifyGoodsDetalis = (data) => http.post("verify.index.getDetail", data);

// 查询商品编码
export const GoodsBianMa = (data) => http.post("cygx.real.GoodsBianMa", data);

// 自定义景区故事
export const scenceStoryAdd = (data) => http.post("index.seasonadd", data);

// 景区故事列表
export const seasonIndexList = (data) => http.post("index.seasonlist", data);

// 上传视频
export const VideoUpload = (data) => http.post("util.Uploader.uploadm", data);

// 视频创作
export const VideoCreditList = (data) => http.post("video.show.videolist_dff", data);

// 用户视频列表
export const UserVideoList = (data) => http.post("video.show.videoi", data);

// 用户提交视频
export const UserVideoSubmit = (data) => http.post("video.show.videoadd", data);

// 景区四季视频详情
export const ScenceVideoDetails = (data) => http.post("video.show.videodet", data);

// 文化动态评论
export const NewsKachuoTopic = (data) => http.post("friend.Interaction.incomment", data);

// 文化动态点赞
export const NewsKachuoInpraise = (data) => http.post("friend.Interaction.inpraise", data);

// 删除视频
export const VideoListDeaete = (data) => http.post("video.show.videodel", data);

// 名家视频列表
export const FamousVideoList = (data) => http.post("video.Artist.artistlist", data);

// 名家视频详情
export const FamousVideoDetails = (data) => http.post("video.Artist.artistdet", data);

// 创收列表
export const SeourceCreatedList = (data) => http.post("video.show.videolist_dff", data);

// 创收列表提交
export const SeourceCreatedSubmit = (data) => http.post("video.show.videoAdd1", data);

// 创收列表详情
export const SeourceCreatedListDetails = (data) => http.post("video.show.videodet", data);

// 商品列表
export const ShopGoodsList = (data) => http.post("shop.index.get_list_by_category", data);

// 推荐商品
export const ShopGoodsListPush = (data) => http.post("shop.index.get_home_list", data);

// 景区消费分类
export const ScenceGoodsClass = () => http.post("shop.index.get_category");

// 景区发布列表
export const ScenceReleaseList = (data) => http.post("release.index.index", data);

// 景区发布列表详情
export const ScenceReleaseListDetails = (data) => http.post("release.index.show", data);

// 记住的了解的
export const ScenceRememberAndLearn = (data) => http.post("videoservice.remknow.remknowlist", data);

// 记住的了解的详情
export const ScenceRememberAndLearnDetails = (data) => http.post("videoservice.remknow.remknowshow", data);

// 广告轮播图
export const AdvertiseLoop = (data) => http.post("carousel", data);

// 带走的商品列表
export const TakeAwayGoodsList = (data) => http.post("shop.index.get_goods_by_scenic", data);

// 分类列表
export const GoodsClassList = (data) => http.post("goods.details.getGoodsCode", data);

// 信息消费
export const InformationConsum = (data) => http.post("video.index.Information_list", data);

// 根据用户经纬度判断当前用户位置
export const CheckByLocation = (data) => http.post("index.current_scenic", data);

// 获取景区景点对应的详情
export const getScenicPointDetails = (data) => http.post("scenic.site", data);

// 设置昵称
export const setNickName = (data) => http.post("member.realname.upd_member_information", data);

// 获取景区商家数据列表
export const getScenicMerchants = (data) => http.post("scenic.index", data);

// 获取景区商家数据详情
export const getScenicMerchantsDetails = (data) => http.post("scenic.index.business_info", data);

// 门票列表
export const TicketsList = (data) => http.post("goods.buy.getDoorList", data);

// 我的收藏列表
export const CollectionList = (data) => http.post("member.realname.getMember_favorite", data);

// 获取收藏初始状态
export const GetCollectionInit = (data) => http.post("member.realname.get_favoriteState", data);

// 意见反馈
export const OpinionBack = (data) => http.post("index.YjFk_save", data);

// 文创/艺创列表接口
export const GetSoliciList = (data) => http.post("goods.real.get_soliciList", data);

// 文创抢单
export const SaveWcOrder = (data) => http.post("goods.real.save_WcOrder", data);

// 艺创分类列表
export const YcList = (data) => http.post("goods.details.getGoodsCode", data);

// 艺创抢单
export const SaveYcOrder = (data) => http.post("goods.real.save_YcOrder", data);

// 艺创抢单提交
export const SYorderList = (data) => http.post("goods.real.get_SourceList", data);

// 溯源提交
export const SaveSyOrder = (data) => http.post("goods.real.save_SyOrder", data);

// 才源共享订单
export const CYGXorderList = (data) => http.post("goods.real.get_OrderList", data);

// 获取名家数据列表
export const FamousListData = (data) => http.post("home.celebrity", data);

// 云相册上传图片获取链接
export const CloudUploadImg = (data) => http.post("album.index", data);

// 获取相册列表
export const GetCloudUploadImg = (data) => http.post("album.album_list", data);

//预约导游
export const yuyueGuide = (data) => http.post("tourguide.show.addorder", data);

//住吧房间预约订单下单
export const orderReside = (data) => http.post("scenic.index.addOrder", data);

//充值积分
export const recharge = (data) => http.post("integral.recharge_int", data);

//导游点赞
export const LikeGuide = (data) => http.post("tourguide.index.like", data);

//获取导游列表
export const GuideList = (data) => http.post("tourguide.index.detail", data);

//导游订单支付
export const guidePay = (data) => http.post("tourguide.show.pay", data);

//个人导游注册
export const guideRegister = (data) => http.post("enter.tourguideRegister", data);

//个人导游资料提交
export const guideInfor = (data) => http.post("tourguide.index.save", data);

//积分提现
export const drawIntegral = (data) => http.post("integral.withdraw_int", data);

//单票
export const getTicketDetail = (data) => http.post("scenic.ticket.get_ticket_detail", data);

//购票
export const buyTicket = (data) => http.post("scenic.ticket.buy_ticket", data);

//购票支付
export const buyTicketHd = (data) => http.post("scenic.ticket.hd", data);

//景区后台商家商品管理添加商品
export const JqBsAddGoods = (data) => http.post("scenic.shop.addGoods", data);

//景区后台商家商品管理编辑商品提交
export const JqBsEditGoods = (data) => http.post("scenic.shop.saveGoods", data);

//景区后台添加导游
export const JqBsAddGuide = (data) => http.post("tourguide.index.add", data);

//景区后台编辑导游
export const JqBsEditGuide = (data) => http.post("tourguide.index.save", data);

//景区后台景区资料各种添加照片、介绍、服务项、安全提示手机号
export const JqBsAddDate = (data) => http.post("scenic.manage.scenicSet", data);

//景区后台景区资料各种更新(修改)照片、介绍、服务项、安全提示手机号
export const JqBsEditDate = (data) => http.post("scenic.msg.saveScenic", data);

//扫码验票
export const verification = (data) => http.post("scenic.ticket.verification", data);

//我的门票列表
export const myTicketOrdersList = (data) => http.post("scenic.ticket.orders_list", data);

//获取购票订单详情
export const getOrdersInfo = (data) => http.post("scenic.ticket.getOrdersInfo", data);

//购物车订单下单
export const createOrder = (data) => http.post("goods.buy.create_order", data);

//景区资讯发布(添加)
export const JqBsAddInfo = (data) => http.post("scenic.msg.setScenicInformation", data);

//景区后台商品发货
export const JqBsSendGoods = (data) => http.post("scenic.shop.sendOrder", data);

//商家后台添加代金券
export const StoreBsAddCash = (data) => http.post("business.coupon.add", data);

//商家后上传基本信息图片（传不同参数）
export const StoreBsAddInfo = (data) => http.post("business.index.save", data);

//商家后台添加商品推荐
export const StoreBsAddGoods = (data) => http.post("business.goods.add", data);
