// 废弃，公众号要钱
// https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#9
// https://blog.csdn.net/weixin_43331967/article/details/109640004
// https://juejin.cn/post/7062533098553999391

import request from '@/utils/request'
import WechatJSSDK from 'wechat-jssdk/dist/client.umd'
import crypto from 'crypto'

export function wxCheck() {
  var ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == 'micromessenger'
}

export function wxShare({ title, desc, link, imgUrl, success } = {}, wx) {
  let commonShare = {
    title: title || '阿海利用', // 分享标题
    desc: desc || '嘉善鑫亚机械设备有限公司', // 分享描述
    link: link || window.location.href, // 分享链接
    imgUrl: imgUrl || '', // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      success && success()
    }
  }
  wx.ready(() => {
    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
    wx.updateAppMessageShareData(commonShare)
    // 自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容（1.4.0）
    wx.updateTimelineShareData(commonShare)
    // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
    wx.onMenuShareWeibo(commonShare)
  })
  wx.error(res => {
    // config信息验证失败会执行error函数
    console.log(res)
  })
}

export function wxOpenLocation(value, wx) {
  const { longitude, latitude, name, address } = value
  wx.openLocation({
    longitude: parseFloat(longitude), // 经度，浮点数，范围为180 ~ -180。
    latitude: parseFloat(latitude), // 纬度，浮点数，范围为90 ~ -90
    name: name, // 位置名
    address: address, // 地址详情说明
    scale: 28 // 地图缩放级别,整形值,范围从1~28。默认为最大
  })
}

export function wxSetConfig(wx) {
  // 方便从接口中获取配置参数
  let appId = 'wxa7d66fb9df74294f'
  let nonceStr = 'JrLvVC3ygqSlcBnc'
  let signature = '66c459474ebbea661b38be92149c5f60d91d05ed'
  let timestamp = '1592445883'
  // 配置信息
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
  })
}

export function initWechat() {
  let AppSecret = '6327f030da779277a8714bc226bfcb4b'
  let AppId = 'wxa7d66fb9df74294f'
  const config = {
    //前4个是微信验证签名必须的参数，第2-4个参数为类似上面 '/get-signature' 从node端获取的结果
    appId: AppId,
    nonceStr: 'xxx',
    signature: 'xxx',
    timestamp: 'xxx',
    //下面为可选参数
    debug: true, //开启 debug 模式
    jsApiList: [], //设置所有想要使用的微信jsapi列表, 默认值为 ['onMenuShareTimeline', 'onMenuShareAppMessage']，分享到朋友圈及聊天记录
    customUrl: '' //自定义微信js链接
  }
  const wechatObj = new WechatJSSDK(config)
  wechatObj
    .initialize()
    .then(w => {
      //set up your share info, "w" is the same instance as "wechatObj"
    })
    .catch(err => {
      console.error(err)
    })
}

function genSignature(ticket) {
  const timestamp = parseInt(Date.now() / 1000, 10)
  const nonceStr = Math.random().toString(36).slice(-8)
  const url = window.location.origin + window.location.pathname
  // key1=val1&key2=val2 格式，key 的值和顺序必须如下
  // 即按照字段名的ASCII 码从小到大排序
  const str = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`
  const hash = crypto.createHash('sha1', str)
  hash.update(str)
  return hash.digest('hex')
}
