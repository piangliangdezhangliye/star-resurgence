<template>
  <div class="focus">
    <ul class="banner">
      <li
        class="nBannerItem"
        v-for="(item, index) in img"
        :key="index"
        :style="index === currentIndex ? `${item.style}` : ''"
      >
        <a
          data-title="视听馆-陶瓷馆视频"
          href="/auditions/exhibition/detail/256443.html"
          target="_blank"
          :style="`background: url(${item.src}) no-repeat center;background-size: auto 100%;`"
        >
        </a>
        <img src="/img/home_banner-1.jpg" alt="" />
      </li>
    </ul>
    <div class="nav">
      <i
        v-for="item in 5"
        :key="item"
        @click="currentIndex = item - 1"
        :class="{ now: item === currentIndex + 1 }"
      ></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const currentIndex = ref(0);
    const img = ref([
      {
        style:
          "transform: scale(1.05, 1.05);opacity: 1;z-index: 0;transition: transform 5000ms linear 0s;",
        src: require("../../../assets/img/home_banner-1.jpg"),
      },
      {
        style:
          "transform: scale(1.05, 1.05);opacity: 1;z-index: 0;transition: transform 5000ms linear 0s;",
        src: require("../../../assets/img/home_banner-2.jpg"),
      },
      {
        style:
          "transform: scale(1.05, 1.05);opacity: 1;z-index: 0;transition: transform 5000ms linear 0s;",
        src: require("../../../assets/img/home_banner-3.jpg"),
      },
      {
        style:
          "transform: scale(1.05, 1.05);opacity: 1;z-index: 0;transition: transform 5000ms linear 0s;",
        src: require("../../../assets/img/home_banner-4.jpg"),
      },
      {
        style:
          "transform: scale(1.05, 1.05);opacity: 1;z-index: 0;transition: transform 5000ms linear 0s;",
        src: require("../../../assets/img/home_banner-5.jpg"),
      },
    ]);
    // 用于存储定时器
    // eslint-disable-next-line no-unused-vars
    let timer = null;
    // 开启轮播
    const start = () => {
      timer = setInterval(() => {
        // console.log(currentIndex.value);
        toggle(1);
      }, 5000);
    };
    start();
    const toggle = (step) => {
      const nextIndex = currentIndex.value + step;
      // 如果当前没有上一张图片了
      if (nextIndex < 0) {
        // 显示最后一张
        currentIndex.value = 0;
        // 如果没有下一张了
      } else if (nextIndex > 4) {
        // 显示第一张
        currentIndex.value = 0;
      } else {
        currentIndex.value = nextIndex;
      }
    };
    return {
      currentIndex,
      img,
    };
  },
};
</script>

<style scoped lang="less">
.focus {
  .banner {
    overflow: hidden;
    padding-bottom: 47%;
    position: relative;
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .nBannerItem {
      transform: scale(1, 1);
      opacity: 0;
      z-index: -1;
    }
    a {
      display: block;
      height: 100%;
    }
  }
  .nav {
    position: absolute;
    left: 0;
    bottom: 5%;
    width: 100%;
    text-align: center;
    z-index: 2;
    .now {
      background-position: right center;
    }
    i {
      display: inline-block;
      width: 27px;
      height: 24px;
      margin: 0 5px;
      line-height: 3px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      background: url(https://img.dpm.org.cn/Public/static/themes/image/bo/dian2.png)
        no-repeat left center;
    }
  }
}
</style>
