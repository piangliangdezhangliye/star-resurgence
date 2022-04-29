<template>
  <div class="swiper-box-container container">
    <div class="swiper-wrapper">
      <div class="cate-slide cate-slide-active" data-cateid="0">
        <a class="now" href="javascript:void(0);" id="get_all" cid="">全部</a>
      </div>

      <div
        class="cate-slide"
        v-for="item in label"
        :key="item.id"
        data-cateid="8"
      >
        <a class="now" href="javascript:void(0);" cid="">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { labelApi } from "@/api/upLoading";
import { ref } from "vue";

export default {
  name: "NodeCategory",
  setup() {
    //获取文章所属标签
    const label = ref();
    labelApi().then((res) => {
      console.log(res.data);
      label.value = res.data;
    });
    return {
      label,
    };
  },
};
</script>

<style scoped lang="less">
.container {
  height: 42px;
}
.swiper-box-container {
  position: relative;
  margin-bottom: 20px;
  .swiper-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    .cate-slide.cate-slide-active,
    .cate-slide:hover {
      font-weight: 500;
      color: #282828;
    }
    .cate-slide.cate-slide-active {
      //background-color: #f5f5f5;
    }
    .cate-slide {
      font-size: 16px;
      color: #666666;
      height: 42px;
      min-height: 42px;
      padding: 10px 15px 0px;
      box-sizing: border-box;
      border-radius: 4px 4px 0 0;
      background-color: transparent;
      cursor: pointer;
      span {
        padding-bottom: 8px;
        border-bottom: 2px solid transparent;
        line-height: 22px;
      }
      &:hover {
        span {
          border-bottom-color: #282828;
        }
      }
      a {
        background: url(https://img.dpm.org.cn/Public/static/themes/image/xf/list_dragon4.png)
          left -7px no-repeat;
        padding-left: 35px;
        display: inline-block;
        height: 100%;
        //margin: 0 35px;
        font-size: 20px;
        color: #474747;
      }
    }
  }
}
</style>
