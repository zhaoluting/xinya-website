// https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#9
// https://blog.csdn.net/weixin_43331967/article/details/109640004
// https://juejin.cn/post/7062533098553999391
export function wxCheck() {
  var ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == "micromessenger";
}


export function wxShare({ title, desc, link, imgUrl, success } = {}) {
  let commonShare = {
    title: title || '阿海利用', // 分享标题
    desc: desc || '嘉善鑫亚机械设备有限公司', // 分享描述
    link: link || window.location.href, // 分享链接
    imgUrl: imgUrl || '', // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      success && success()
    }
  };
  wx.ready(() => {
    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
    wx.updateAppMessageShareData(commonShare);
    // 自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容（1.4.0）
    wx.updateTimelineShareData(commonShare);
    // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
    wx.onMenuShareWeibo(commonShare);
  })
  wx.error(res => {
    // config信息验证失败会执行error函数
    console.log(res)
  })
}

export function wxOpenLocation(value) {
  const { longitude, latitude, name, address } = value
  wx.openLocation({
    longitude: parseFloat(longitude), // 经度，浮点数，范围为180 ~ -180。
    latitude: parseFloat(latitude), // 纬度，浮点数，范围为90 ~ -90
    name: name, // 位置名
    address: address, // 地址详情说明
    scale: 28 // 地图缩放级别,整形值,范围从1~28。默认为最大
  });

}


export function wxSetConfig() {
  // 方便从接口中获取配置参数
  let appId = "wx7f963082054fe371";
  let nonceStr = "JrLvVC3ygqSlcBnc";
  let signature = "66c459474ebbea661b38be92149c5f60d91d05ed";
  let timestamp = "1592445883";
  // 配置信息
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature,// 必填，签名
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
  })
}