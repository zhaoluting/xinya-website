<template>
  <div class="xinya-website">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view class="xinya-container"></router-view>
    </keep-alive>
    <router-view v-else class="xinya-container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '关于我',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {},
  methods: {}
}
</script>
<style lang="scss">
.xinya-website {
  font-family: 'PuHuiTi';
  background-image: linear-gradient(145deg, #3e8cf5, #6148e2, #566ceb, #75a9d5);
  .xinya-container {
    max-width: 750px;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  }
}
</style>
