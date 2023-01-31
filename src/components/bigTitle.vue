<template>
  <p class="big-title" :class="type">
    <span class="main">{{ main }}</span>
    <span class="minor">- {{ minor }} -</span>
  </p>
</template>
<script>
export default {
  name: 'big-title',
  props: {
    main: {
      type: String,
      default: ''
    },
    minor: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.big-title {
  margin: 0;
  padding: 15px 0 10px;
  position: relative;
  text-align: center;

  &.white {
    .main {
      color: #ffffffe0;

      &::before {
        background-color: #ffffff;
      }
    }

    .minor {
      color: #ffffff55;
    }
  }

  .main {
    color: #566ceb;
    font-size: 20px;
    font-style: italic;
    font-family: 'ShuHeiTi';
    position: relative;
    padding: 0 5px;
    line-height: 30px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 10px;
      background-color: #566ceb;
      opacity: 0.4;
    }
  }

  .minor {
    color: #bbb;
    font-size: 12px;
    display: block;
    margin: 2px 0 0;
    transform: scale(0.8);
  }
}
</style>
