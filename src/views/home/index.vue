<template>
  <div class="home-page">
    <!-- 头部 -->
    <div class="logo-card">
      <img class="desc-image" src="~assets/images/background/home.png" />
      <div class="top-logo">
        <img class="logo" src="~assets/images/logo/logo_xinya_0.png" />
        <h1 class="title">嘉善鑫亚机械设备有限公司</h1>
      </div>
      <div class="desc-panel">
        <p class="big-title">阿海利用</p>
        <p class="introduction">
          <b class="title">经营范围</b>
          电机、各种减速箱、车刨床、钻床、吊机、储气筒、化工设备、电动葫芦、风机、链轮、链条、钢丝绳、皮带盘、轴承、五金工具及各种车床附件、清仓物资等。
        </p>
      </div>
      <div class="big-btn" @click="scrollToConcatUs">欢迎联系洽谈</div>
    </div>

    <div class="pic-wells" v-for="(well, outindex) in introWell" :key="outindex" :class="{ white: !(outindex / 2) }">
      <div class="wells-item">
        <BigTitle :main="well.title.main" :minor="well.title.minor" :type="outindex / 2 ? 'white' : ''"></BigTitle>
        <div v-for="(item, index) in well.images" :key="index">
          <p v-if="item.desc" class="desc">{{ item.desc }}</p>
          <div v-if="well.type == 'waterfall'" @click="handleWellsClick($event, item)">
            <vue-seamless-scroll class="waterfall_warp" :data="item.list" :class-option="item.classOption">
              <div class="waterfall_container">
                <img
                  class="waterfall-image"
                  v-for="(image, idx) in item.list"
                  :key="index + '_' + idx"
                  :src="image"
                  :data-imageidx="idx"
                />
              </div>
            </vue-seamless-scroll>
          </div>
          <van-swipe v-else-if="item.type == 'swipe'" class="swipe-warp" :autoplay="5000" indicator-color="white">
            <van-swipe-item v-for="(source, idx) in item.list" :key="idx">
              <img @click="openImages(item.list, idx)" class="wells-image" v-lazy="source" />
            </van-swipe-item>
          </van-swipe>
          <van-swipe v-else-if="item.type == 'video'" class="swipe-warp" :autoplay="5000" indicator-color="white">
            <van-swipe-item v-for="(source, idx) in item.list" :key="idx">
              <video :src="source" class="wells-image" muted controls></video>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <common-footer ref="pageFooter"></common-footer>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import { ImagePreview } from 'vant'
import BigTitle from '@/components/bigTitle'
import CommonFooter from '@/components/footer'
export default {
  title: 'Home',
  components: {
    vueSeamlessScroll,
    BigTitle,
    CommonFooter
  },
  data() {
    return {
      introStr:
        '电机、各种减速箱、车刨床、钻床、吊机、储气筒、化工设备、电动葫芦、风机、链轮、链条、钢丝绳、皮带盘、轴承、五金工具及各种车床附件、清仓物资等。',
      introWell: [
        {
          title: { main: '公司简介', minor: 'COMPANY PROFILE' },
          images: [
            {
              desc: '',
              type: 'swipe',
              list: [require('assets/images/banner/home_1.png'), require('assets/images/banner/home_2.png')]
            },
            {
              desc: '种类繁多',
              type: 'video',
              list: [
                // require('assets/images/media/goods_1.mp4'),
                require('assets/images/media/goods.mp4')
              ]
            },
            {
              desc: '远销海外',
              type: 'swipe',
              list: [
                require('assets/images/oversea/oversea_1.jpeg'),
                require('assets/images/oversea/oversea_2.jpeg'),
                require('assets/images/oversea/oversea_3.jpeg')
              ]
            }
          ]
        },
        {
          title: { main: '商品介绍', minor: 'PRODUCT INTRODUCTION' },
          type: 'waterfall',
          images: [
            {
              // desc: '大型货物',
              classOption: {
                direction: 2,
                step: 0.2
              },
              list: [
                require('assets/images/goods/goods_big_3.jpeg'),
                require('assets/images/goods/goods_big_4.jpeg'),
                require('assets/images/goods/goods_big_5.jpeg'),
                require('assets/images/goods/goods_big_7.jpeg'),
                require('assets/images/goods/goods_big_1.jpeg'),
                require('assets/images/goods/goods_big_2.jpeg'),
                require('assets/images/goods/goods_big_6.jpeg'),
                require('assets/images/goods/goods_big_8.jpeg')
              ]
            },
            {
              // desc: '中型货物',
              classOption: {
                direction: 3,
                step: 0.2
              },
              list: [
                require('assets/images/goods/goods_middle_1.jpeg'),
                require('assets/images/goods/goods_middle_2.jpeg'),
                require('assets/images/goods/goods_middle_3.jpeg'),
                require('assets/images/goods/goods_middle_4.jpeg'),
                require('assets/images/goods/goods_middle_5.jpeg'),
                require('assets/images/goods/goods_middle_6.jpeg')
              ]
            },
            {
              // desc: '小型货物',
              classOption: {
                direction: 2,
                step: 0.2
              },
              list: [
                require('assets/images/goods/goods_small_1.jpeg'),
                require('assets/images/goods/goods_small_2.jpeg'),
                require('assets/images/goods/goods_small_3.jpeg'),
                require('assets/images/goods/goods_small_4.jpeg'),
                require('assets/images/goods/goods_small_5.jpeg')
              ]
            }
          ]
        }
      ]
    }
  },
  created() {
  },
  methods: {
    handleWellsClick(el, item) {
      let target = el.target
      if (target.tagName == 'IMG' && !isNaN(target.dataset.imageidx)) {
        this.openImages(item.list, Number(target.dataset.imageidx))
      }
    },
    openImages(list, startPosition) {
      ImagePreview(list, startPosition || 0)
    },
    scrollToConcatUs() {
      const rollingItem = this.$refs.pageFooter.$el
      rollingItem && this.scrollInto(rollingItem)
    },
    scrollInto(domEl, option = {}) {
      if (domEl) {
        this.$nextTick(() => {
          if (domEl.scrollIntoView) {
            let config = Object.assign(
              {},
              {
                behavior: 'smooth',
                block: 'start'
              },
              option
            )
            domEl.scrollIntoView(config)
          } else {
            domEl.scrollIntoViewIfNeeded(true)
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  padding: 0;
  font-family: 'PuHuiTi';
  min-height: 100vh;
  /* background-image: linear-gradient(105deg, #6611d8, #6148e2, #566ceb, #3e8cf5); */
  background-image: linear-gradient(145deg, #3e8cf5, #6148e2, #566ceb, #75a9d5);
  text-align: center;

  .logo-card {
    color: #fff;
    font-size: 12px;
    padding: 0 0 64px;
    background-image: url('assets/images/background/liner_bg_7.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top;
    position: relative;

    .top-logo {
      text-align: left;
      padding: 20px 0 0 26px;
      z-index: 1;
      position: relative;
      .logo {
        width: auto;
        height: 24px;
        margin: 0 6px 0 0;
        vertical-align: middle;
      }

      .title {
        font-size: 16px;
        line-height: 30px;
        display: inline-block;
        margin: 0;
        padding: 0;
        vertical-align: middle;
        color: #ffffffe6;
      }
    }

    .desc-panel {
      padding: 22px 30px;
      text-align: left;
      font-size: 14px;
      z-index: 1;
      position: relative;
      .big-title {
        font-size: 42px;
        text-align: left;
        font-family: 'PuHuiTi_Heavy';
        margin: 0;
        padding: 10px 0;
      }

      .introduction {
        font-size: 12px;
        text-align: left;
        margin: 0 0 10px;
        line-height: 20px;

        .title {
          font-size: 15px;
          font-family: 'ShuHeiTi';
          padding-right: 2px;
        }
      }
    }

    .desc-image {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 80%;
      height: auto;
    }
  }

  .pic-wells {
    width: 100%;
    position: relative;
    background: #1567ff40;

    &.white {
      background: linear-gradient(rgb(239, 244, 255) 0%, rgba(255, 255, 255, 90%) 100%);
    }

    .wells-item {
      margin: 0 auto;
      padding: 0 0 30px 0;

      .desc {
        margin: 0;
        padding: 10px 0;
        font-size: 15px;
        text-align: center;
        color: #9292a6;
        line-height: 20px;
      }

      .swipe-warp {
        font-size: 0;
        border-radius: 15px;
        margin-bottom: 20px;
        width: 80%;
        margin: 0 auto;
        ::v-deep .van-swipe__track {
          align-items: center;
        }
      }

      .wells-image {
        width: 100%;
      }

      .waterfall_warp {
        width: 100%;
        height: 200px;
        overflow: hidden;
        margin-bottom: 20px;
      }

      .waterfall_container {
        font-size: 0;
        width: 100vw;
        height: 200px;
        position: relative;
        overflow-x: auto;
        white-space: nowrap;
        display: flex;

        .waterfall-image {
          height: 200px;
        }
      }
    }
  }
}
</style>
