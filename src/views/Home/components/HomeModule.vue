<template>
  <div id="home_module" class="container">
    <div class="module_item"></div>
    <div class="horn h1"></div>
    <div class="horn h2"></div>
    <div class="item5 now">
      <!--      皇上-->
      <div class="icon2"></div>
      <!--      小三角-->
      <div class="icon3"></div>
      <!--      模块-->
      <div class="arc">
        <div class="arcbox" id="arcbox">
          <div
            class="img"
            v-for="(item, index) in moduleList"
            :key="index"
            :style="moduleListStyle[index + BtnIndex]"
            :class="{ prev: index + BtnIndex < 0, next: index + BtnIndex > 4 }"
            @click="moduleListClick(index)"
          >
            <img
              :title="item.title"
              :alt="item.title"
              class="lazyloaded"
              :src="item.src"
            />
          </div>
        </div>
      </div>
      <!--      左右-->
      <div class="button1">
        <a
          href="javascript:;"
          v-if="BtnIndex > -2"
          class="a prev"
          id="aprev"
          @click="prevBtn"
        ></a>
        <a
          href="javascript:;"
          v-if="BtnIndex < 2"
          class="a next"
          id="anext"
          @click="nextBtn"
        ></a>
      </div>
      <!--      模块内容-->
      <div class="imgtextwarp">
        <div
          class="wrap1"
          v-for="(item, index) in moduleConten"
          :class="{ now: index == McurrentIndex }"
          :key="index"
        >
          <div class="imglist">
            <img
              :title="item.title"
              :alt="item.title"
              class="lazyloaded"
              :src="item.src"
            />
          </div>
          <div class="text">
            <div class="wrap0">
              <div class="textwarp">
                <div class="public-title">
                  <span class="s1"></span>
                  <a href="javascript:;">{{ item.title }}</a>
                  <span class="s2"></span>
                </div>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeModule",
  setup() {
    //模块样式
    const moduleList = ref([
      {
        id: 1,
        style: "top: -41.7324px; left: 279.754px",
        title: "民族精选",
        src: require("../../../assets/img/home_module_mz-1.png"),
      },
      {
        id: 2,
        style: "top: 38.1872px; left: 404.754px",
        title: "文章精选",
        src: require("../../../assets/img/home_module_wz-1.png"),
      },
      {
        id: 3,
        style: "top: 178.5px;left: 452.5px;",
        title: "商城",
        src: require("../../../assets/img/home_module_sc-1.png"),
      },
      {
        id: 4,
        style: "top: 327.813px;left: 413.754px;",
        title: "社交",
        src: require("../../../assets/img/home_module_sj-1.png"),
      },
      {
        id: 5,
        style: "top: 408.732px; left: 279.754px",
        title: "老字号",
        src: require("../../../assets/img/home_module_lzh-1.png"),
      },
    ]);
    const moduleListStyle = ref([
      "top: -41.7324px; left: 279.754px",
      "top: 38.1872px; left: 404.754px",
      "top: 178.5px;left: 452.5px;",
      "top: 327.813px;left: 413.754px;",
      "top: 408.732px; left: 279.754px",
    ]);
    //模块内容
    const moduleConten = ref([
      {
        id: 1,
        title: "民族精选",
        src: require("../../../assets/img/home_module_mz-2.png"),
        content:
          "壮族妇女的服饰端庄得体，朴素大方。她们一般的服饰是一身蓝黑，裤脚稍宽，头上包着彩色印花或提花毛巾，腰间系着精致的围裙。上衣着藏青或深蓝色短领右衽偏襟上衣(有的在颈口、袖口、襟底均绣有彩色花边)，分为对襟和偏襟两种，有无领和有领之别。有一暗兜藏于腹前襟内，随襟边缝置数对布结纽扣。",
      },
      {
        id: 2,
        title: "文章精选",
        src: require("../../../assets/img/home_module_wz-2.png"),
        content: "星回盐选会员，为你严选好内容",
      },
      {
        id: 3,
        title: "商城",
        src: require("../../../assets/img/home_module_sc-2.png"),
        content:
          "集潮流装备社区，通过对服装、配饰、潮玩、美妆等产品进行系统性研究",
      },
      {
        id: 4,
        title: "社交",
        src: require("../../../assets/img/home_module_sj-2.png"),
        content:
          "有个自留地，记录真实的自己，哼自己的歌，恰巧有人在意，无论你是斜杠青年，手工艺人，金融专家还是日常打工魂，你都可以在这里找到属于自己的一群人，帮你找到心灵共鸣的默契灵魂",
      },
      {
        id: 5,
        title: "推广中心",
        src: require("../../../assets/img/home_module_lzh-2.png"),
        content:
          "以老字号和现代时尚话题作为潮流文化的切入点，持续沉淀潮流内容，培育潮流文化沃土，积极拓展符合年轻人消费观的品类内容，深度挖掘年轻人处于萌芽期的兴趣点",
      },
    ]);

    const McurrentIndex = ref(2);
    const BtnIndex = ref(0);
    //左箭头
    const prevBtn = () => {
      BtnIndex.value -= 1;
      McurrentIndex.value += 1;
    };
    //右箭头
    const nextBtn = () => {
      BtnIndex.value += 1;
      McurrentIndex.value -= 1;
    };
    //点击模块
    const moduleListClick = (index) => {
      console.log(index);
      console.log(McurrentIndex.value);
      //
      if (index > McurrentIndex.value) {
        BtnIndex.value += McurrentIndex.value - index;
        McurrentIndex.value = index;
      }
      if (index < McurrentIndex.value) {
        BtnIndex.value += McurrentIndex.value - index;
        McurrentIndex.value = index;
      }
    };
    return {
      moduleList,
      moduleConten,
      moduleListStyle,
      moduleListClick,
      McurrentIndex,
      BtnIndex,
      prevBtn,
      nextBtn,
    };
  },
};
</script>

<style scoped lang="less">
#home_module {
  position: relative;
  padding: 73px 0px;
  overflow: hidden;
  .module_item {
    position: absolute;
    width: 1230px;
    height: 726px;
    animation-name: bg;
    animation-delay: 2s;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game30.png);
    z-index: 9;
  }
  @keyframes bg {
    from {
      top: 0px;
    }
    to {
      top: 200px;
    }
  }
}
.h1 {
  top: 0;
  left: 0;
  background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game2.png)
    no-repeat;
}
.horn {
  position: absolute;
  width: 100%;
  height: 73px;
}
.h1 {
  color: #fff;
  font-size: 26px;
}
.h2 {
  bottom: 0;
  left: 0;
  background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game3.png)
    no-repeat;
}
.item5 {
  height: 580px;
  position: relative;
  background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game6.png);
  .icon2 {
    background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game22-1.png)
      no-repeat;
    width: 230px;
    height: 409px;
    position: absolute;
    top: 15px;
    left: -2px;
  }
  .icon3 {
    background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game42.png)
      no-repeat;
    width: 14px;
    height: 28px;
    position: absolute;
    top: 52%;
    left: 400px;
    margin-top: -35px;
  }
  .button1 {
    position: absolute;
    width: 13px;
    height: 495px;
    left: -20px;
    top: 25px;
    z-index: 10;
    .prev {
      top: 0;
      left: 80px;
    }
    .a {
      position: absolute;
      display: block;
      width: 23px;
      height: 42px;
      background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game39-1.png)
        no-repeat;
    }
    .next {
      bottom: 0;
      left: 80px;
      background-image: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game39-1.png);
    }
  }
  .arc {
    width: 335px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 60px;
    height: 100%;
    .prev {
      top: -92px !important;
      left: 120px !important;
    }
    .next {
      top: 400px !important;
      left: 100px !important;
    }
  }
  .arcbox {
    position: absolute;
    width: 500px;
    height: 440px;
    left: -220px;
    top: 55px;
  }
  .img {
    width: 95px;
    height: 105px;
    overflow: hidden;
    cursor: pointer;
    position: absolute;
    transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    z-index: 10;
    img {
      border: 0;
      outline: 0;
      vertical-align: middle;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .imgtextwarp {
    position: absolute;
    top: 0;
    left: 400px;
    height: 100%;
    width: 720px;
    .wrap1 {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .now {
      z-index: 999;
      .imglist {
        transform: translateY(0);
        opacity: 1;
      }
      .text {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  .imglist {
    width: 280px;
    height: 480px;
    line-height: 480px;
    position: absolute;
    top: 35px;
    left: 50px;
    opacity: 0;
    transform: translateY(-100px);
    transition: all 1s;
    img {
      height: auto;
      width: auto;
      box-shadow: 5px 6px 10px rgb(0 0 0 / 30%);
      border: 0;
      outline: 0;
      vertical-align: middle;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .text {
    position: absolute;
    top: 80px;
    right: 0;
    width: 350px;
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s;
    .public-title {
      position: relative;
      padding: 0 30px;
      font-size: 34px;
      color: #93785b;
      display: inline-block;
      line-height: 36px;
      height: 40px;
      .s1 {
        background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game7.png)
          no-repeat center;
        left: 0;
        top: 0;
      }
      span {
        position: absolute;
        display: block;
        width: 22px;
        height: 100%;
      }
      a {
        text-decoration: none !important;
        color: inherit;
      }
      .s2 {
        background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game8.png)
          no-repeat center;
        right: 0;
        top: 0;
      }
    }
    p {
      font-size: 16px;
      color: #707070;
      margin-top: 18px;
      line-height: 24px;
    }
  }
}
</style>
