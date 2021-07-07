// import {
// 	flyio,
// 	url
// } from './config.js';
// //公共链接
// export const Url = url;
// //接口列表
// export class Api {
// 	//获取token
// 	wxLogin = async (params) => {
// 		return flyio.post('/addons_user_api/user/miniprogram_login',params)
// 	}
// 	// 数据解密
// 	wxDecryptData = async(params) => {
// 		return flyio.post('/addons_user_api/user/decrypt_data', params);
// 	}
// 	// 绑定手机号
// 	wxBindPhone = async(params) => {
// 		return flyio.post('/addons_user_api/user/decrypt_data_phone', params);
// 	}
// 	// 获取用户信息
// 	getUserInfo = async (params) => {
// 		return flyio.post('/addons_user_api/user/read', params);
// 	}
// 	//栏目列表
// 	getCatList = async (params) => {
// 		return flyio.get('/cat/list',params)
// 	}
// 	//栏目点赞
// 	zanCat = async (params) => {
// 		return flyio.post('/cat/like',params)
// 	}
// 	//栏目点赞
// 	catInfo = async (params) => {
// 		return flyio.post('/cat/info',params)
// 	}
// 	//获取文章列表
// 	getArticleList = async (params) => {
// 		return flyio.post('/api/news/list',params)
// 	}
// 	//获取文章列表
// 	getNewsList = async (params) => {
// 		return flyio.post('/news/list',params)
// 	}
// 	//获取文章详情
// 	getNewsDetail = async (params) => {
// 		return flyio.get('/news/info', params)
// 	}
// 	//获取文章详情带部门
// 	getApiNewsDetail = async (params) => {
// 		return flyio.get('/api/news/info', params)
// 	}
// 	//分享接口
// 	getSharaInfo = async (params) => {
// 		return flyio.get('/wechatAddons/getWechatJssdk', params)
// 	}
// 	//帖子列表
// 	getTopicList = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/fetchThreadList',params)
// 	}
// 	//发帖
// 	pushTopic = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/submitThread',params)
// 	}
// 	//帖子点赞
// 	zanTopic = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/submitThreadRecode',params)
// 	}

// 	//帖子点赞
// 	zanTopicNouser = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/likeThread',params)
// 	}
// 	//帖子的评论列表
// 	getCommentTopic = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/fetchThreadCommentList',params)
// 	}
// 	//帖子评论/回复
// 	replyCommentTopic = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/submitThreadComment',params)
// 	}
// 	//我的帖子列表
// 	getMineCommentTopic = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/fetchUserThreadList',params)
// 	}
// 	//帖子分类列表
// 	getTopicTypeList = async (params) => {
// 		return flyio.post('/addons_moments_api/moments/fetchThreadCatList',params)
// 	}
// 	//获取oss信息
// 	getOssInfo = async (params) => {
// 		return flyio.get('/addons_attachment_api/attachment/getOssPolicy',params)
// 	}
// 	//app配置
// 	getConfig = async (params) => {
// 		return flyio.get('/config/app_config',params)
// 	}
// 	//积分明细
// 	getPointsList = async (params) => {
// 		return flyio.post('/addons_user_api/user/points_list',params)
// 	}
// 	//发帖排行
// 	getUserPublishRank = async (params) => {
// 		return flyio.get('/addons_moments_api/moments/getUserPublishRank',params)
// 	}
// 	//积分排行
// 	getUserPointsRank = async (params) => {
// 		return flyio.get('/addons_moments_api/moments/getUserPointsRank',params)
// 	}
// 	//发帖数
// 	getPushNum = async (params) => {
// 		return flyio.get('/user/current_user_info',params)
// 	}
// 	//帖子详情
// 	getThreadInfo = async (params) => {
// 		return flyio.get('/addons_moments_api/moments/getThreadInfo',params)
// 	}
// 	//获取部门组织
// 	getGroupList = async (params) => {
// 		return flyio.get('/user/user_group_list',params)
// 	}
// 	//修改用户信息（部门组织）
// 	editModify = async (params) => {
// 		return flyio.post('/user/modify_user_info',params)
// 	}
// 	//获取用户信息
// 	getUserInfo = async (params) => {
// 		return flyio.post('/addons_user_api/user/read',params)
// 	}
// 	//图片验证码
// 	getCaptcha = async (params) => {
// 		return flyio.post('/addons_user_api/user/get_captcha',params)
// 	}
// 	//发送验证码
// 	getSms = async (params) => {
// 		return flyio.post('/addons_user_api/user/get_sms',params)
// 	}
// 	//手机号登录
// 	phoneLogin = async (params) => {
// 		return flyio.post('/addons_user_api/user/code_login',params)
// 	}
// 	//手机号登录
// 	phoneLogin = async (params) => {
// 		return flyio.post('/addons_user_api/user/code_login',params)
// 	}
// 	//更新用户信息
// 	updateUser = async (params) => {
// 		return flyio.post('/addons_user_api/user/update',params)
// 	}
// 	//第三方登录
// 	thirdLogin = async (params) => {
// 		return flyio.post('/addons_user_api/user/third_login',params)
// 	}
// 	//发布文章
// 	newsPublish = async (params) => {
// 		return flyio.post('/api/news/publish',params)
// 	}
// 	//获取微信授权信息
// 	wechatAuth = async (params) => {
// 		return flyio.get('/api/UserController/wechatAuth',params)
// 	}

// 	// 获取签到的所属媒体
// 	getPlatformList = async (params) => {
// 		return flyio.get('/cat/list', params)
// 	}

// 	// 判断是否已经签到
// 	hasSignIn = async (params) => {
// 		return flyio.get('/api/user/isSign', params)
// 	}

// 	// 签到的接口
// 	signIn = async (params) => {
// 		return flyio.get('/api/user/sign', params)
// 	}

// 	// 获取签到的信息
// 	getMineInfo = async (params) => {
// 		return flyio.get('/api/user/info', params)
// 	}

// 	// 请求拿到已加入的媒体列表
// 	getMediaList = async (params) => {
// 		return flyio.get('/api/user/signList', params)
// 	}

// 	//提交素材
// 	publishAssets = async (params) => {
// 		return flyio.post('/api/news/assets',params)
// 	}
// 	//文章点赞
// 	newsLike = async (params) => {
// 		return flyio.post('/news/like',params)
// 	}
// 	//文章添加评论
// 	addNewsComment = async (params) => {
// 		return flyio.post('/news_comment/add',params)
// 	}
// 	//文章评论列表
// 	getCommentList = async (params) => {
// 		return flyio.post('/news_comment/list',params)
// 	}
// 	//文章操作
// 	doUserBehave = async (params) => {
// 		return flyio.post('/user_behave/add',params)
// 	}
// 	//相关文章列表
// 	getRelatNews = async (params) => {
// 		return flyio.post('/news/relate_news',params)
// 	}
// 	//评论点赞
// 	commentLike = async (params) => {
// 		return flyio.post('/news_comment/like',params)
// 	}
// 	//阅读人数
// 	catView = async (params) => {
// 		return flyio.post('/cat/view', params)
// 	}
// }
// export default new Api();

import request from '@/plugins/axios'

export const getNewsList = (data) => {
  return request({
    url: '/news/list',
    method: 'post',
    params: data
  })
}
