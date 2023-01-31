<template>
  <footer class="common-footer">
    <img class="bg-image" src="~assets/images/background/liner_bg_2.png" />
    <BigTitle main="联系我们" minor="CONTACT US"></BigTitle>
    <div class="contact-info">
      <div class="contact-item">
        <p class="sub-title">
          <span class="name">公司地址</span>
          <span class="en-name">Company<br />Address</span>
        </p>
        <p class="detail">
          <b>办公：</b>
          <span class="dashed">嘉善县陶庄镇华顽特钢有限公司门卫右侧</span>
        </p>
        <p class="detail">
          <b>仓储：</b>
          <span class="dashed">嘉善县陶庄镇二创中心A区9幢8号、16幢14号</span>
        </p>
      </div>
      <div class="contact-item">
        <p class="sub-title">
          <span class="name">联系方式</span>
          <span class="en-name">Phone<br />Number</span>
        </p>
        <p class="detail">
          <b>门市部：</b>
          <a class="dashed" href="tel:0573-84581689">0573-84581689</a>
        </p>
        <p class="detail">
          <b>赵金海(阿海)</b>
          <span class="sub-item">
            <span>手机号：<a class="dashed" href="tel:13705832392">13705832392</a></span>
            <span>天凝网：<a class="dashed" href="tel:582392">582392</a></span>
          </span>
        </p>
        <p class="detail">
          <b>严乐勤（老板娘）</b>
          <span class="sub-item">
            <span>手机号：<a class="dashed" href="tel:13506832811">13506832811</a></span>
            <span>天凝网:<a class="dashed" href="tel:532811">532811</a></span>
          </span>
        </p>
      </div>
      <div class="contact-item">
        <p class="sub-title">
          <span class="name">支付方式</span>
          <span class="en-name">Payment<br />Method</span>
        </p>
        <p class="detail">
          <b>中国农业银行</b>
          <span class="sub-item">
            <span>账号：19330701040003703</span>
            <span>支行：农行嘉善陶庄支行</span>
          </span>
        </p>
        <p class="detail">
          <b>支付宝</b>
          <span class="sub-item">
            <span>账号：13705832392</span>
            <span>姓名：赵金海</span>
          </span>
        </p>
      </div>
      <div class="qrcode_warp">
        <img class="qrcode wx" @click="openQrcode(wxQrcode)" :src="wxQrcode[0]" />
      </div>
    </div>
    <p class="copyright">2023 版权所有 © 嘉善鑫亚机械设备有限公司</p>
  </footer>
</template>
<script>
import { ImagePreview } from 'vant'
import BigTitle from '@/components/bigTitle'
export default {
  components: {
    BigTitle
  },
  name: 'common-footer',
  data() {
    return {
      wxQrcode: [require('assets/images/qrcode/Wechat_blue.png')]
    }
  },
  methods: {
    openQrcode(list) {
      ImagePreview(list)
    }
  }
}
</script>
<style scoped lang="scss">
.common-footer {
  position: relative;
  background-image: linear-gradient(rgb(239, 244, 255) 0%, rgba(255, 255, 255, 90%) 100%);
  color: #666;
  text-align: left;
  padding: 0 0 20px;
  font-size: 13px;
  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
  }

  .contact-info {
    z-index: 1;
    position: relative;

    .contact-item {
      padding-bottom: 10px;
    }

    .dashed {
      border-bottom: 1px dashed;
      color: #666;
    }

    .detail {
      margin: 0;
      padding: 0 10px;
      line-height: 24px;

      b {
        color: #333;
      }

      .sub-item {
        display: flex;
        padding-left: 20px;
        margin-bottom: 5px;
        justify-content: center;
        text-align: left;
        span {
          flex: 1;
        }
      }
    }

    .qrcode_warp {
      padding-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      .qrcode {
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

        &.wx {
          width: 80%;
        }
      }
    }
  }

  .copyright {
    z-index: 1;
    text-align: center;
    color: #777;
    margin: 0;
    font-size: 12px;
    line-height: 30px;
    position: relative;
  }
}
</style>
