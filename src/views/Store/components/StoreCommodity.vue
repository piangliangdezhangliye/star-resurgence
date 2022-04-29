<template>
  <div>
    <img src="../../../assets/img/store_bg.jpg" alt="" />
  </div>
  <div class="box1">
    <div class="wrap clearfix">
      <div class="img">
        <img
          alt=""
          src="https://img.dpm.org.cn/Uploads/Picture/2020/02/26/s5e567fc1a143c.png"
        />
      </div>
      <div class="text">
        <div class="tit">
          <img src="../../../assets/img/store_goods_recommend.png" alt="" />
          <div class="pubc-audio paused">
            <div class="i i1"></div>
            <div class="i i2"></div>
          </div>
        </div>
        <div class="desc">
          “我要去故宫”微课堂
          “是一套由故宫博物院和中信出版集团精心为孩子们准备的线上故宫课程，以新颖的形式，深入浅出的讲解，带你了解故宫的宫廷建筑、历史文化、文物精品。与其同名的系列童书也已经出版，会让更多的小朋友通过它走入故宫，爱上故宫，爱上中华优秀传统文化。”
        </div>
        <div class="button">
          <a
            href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.11.465d5cceG8sHJa&id=612435299973&areaId=321300&user_id=288902762&cat_id=2&is_b=1&rn=880188c234e5d96f4436c4f02ee86907"
            target="_blank"
            >立即购买</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="box1 box2">
    <div class="wrap clearfix">
      <div class="text">
        <div class="tit">
          <img src="../../../assets/img/store_goods_recommend_2.png" alt="" />
          <div class="pubc-audio paused">
            <div class="i i1"></div>
            <div class="i i2"></div>
          </div>
        </div>
        <div class="desc">
          当这些具有代表性的贵州民族传统的活文化：苗族、侗族、布依族、彝族、仡佬族的人物形象与冷冰、沉默的白纸相遇，在同童真、几何、趣味性的色彩造型摩擦、提炼，每一片白纸仿佛被唤醒，变身为一款款民族趣味书签
          活灵活现 打开书即是栩栩生辉 可爱万千
        </div>
        <div class="button">
          <a
            href="https://detail.tmall.com/item.htm?id=641172864266&ali_refid=a3_430673_1006:1246530090:N:MvHKURGqF6xpYZKwZ5BljQ==:8cc651a401e1932e066859d8ceda6a44&ali_trackid=1_8cc651a401e1932e066859d8ceda6a44&spm=a2e0b.20350158.31919782.7"
            target="_blank"
            >立即购买</a
          >
        </div>
      </div>
      <div class="img">
        <img alt="" src="../../../assets/img/store_goods_2.png" />
      </div>
    </div>
  </div>
  <div class="box1">
    <div class="wrap clearfix">
      <div class="img">
        <img alt="" src="../../../assets/img/store_goods_3.png" />
      </div>
      <div class="text">
        <div class="tit">
          <img src="../../../assets/img/store_goods_recommend_3.png" alt="" />
          <div class="pubc-audio paused">
            <div class="i i1"></div>
            <div class="i i2"></div>
          </div>
        </div>
        <div class="desc">
          稻香村始创于1773年，也就是清朝乾隆三十八年，是国家首批命名的中华老字号，”青团告白“将春天的翠绿凝固在这一枚枚笑笑的团子中，伴着清甜的味道，仿佛吃掉了整个春天，才不辜负这十里春光。
          愿你每个好日子,都有稻香村!
        </div>
        <div class="button">
          <a
            href="https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-14847653622.52.1b2a6f51X6ynHg&id=669210059645&rn=4c7d6f6de3cfa6a9099dee8f657b204b&abbucket=15"
            target="_blank"
            >立即购买</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="fot"></div>
</template>

<script>
// import { ref } from "vue";

export default {
  name: "StoreCommodity",
};
</script>

<style scoped lang="less">
.box1 {
  min-height: 488px;
  margin-top: 128px;
  margin-bottom: 108px;
  background: #fdf6da;
  .wrap {
    width: 1230px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .img {
      width: 649px;
      height: 488px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .text {
      width: 435px;
      float: right;
      margin-right: 52px;
      padding-top: 130px;
      .tit {
        font-size: 30px;
        color: #4b72be;
        position: relative;
        .pubc-audio {
          position: absolute;
          bottom: 0;
          left: 240px;
          width: 97px;
          height: 82px;
          max-height: none;
          cursor: pointer;
          background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/wyqggzt-1.png)
            no-repeat center top;
          cursor: pointer;
          transform-origin: left bottom;
          .i {
            height: 62px;
            width: 100%;
            position: absolute;
            left: 4px;
            top: 0;
            transform-origin: bottom;
          }
          .i:before,
          .i:after {
            content: "";
            display: block;
            background-color: #4fbac4;
            position: absolute;
            width: 9px;
            bottom: 0;
            border-radius: 200px;
            left: 50%;
          }
          .i1:before {
            height: 41px;
            margin-left: -24px;
          }
          .i1:after {
            height: 33px;
            margin-left: 0;
          }
          .i2:before {
            height: 21px;
            margin-left: 12px;
          }
          .i2:after {
            height: 25px;
            margin-left: -12px;
          }
        }
        .pubc-audio.paused {
          animation: pubc 2s ease 0s infinite;
        }
        @keyframes pubc {
          0% {
            transform: rotate(0);
          }
          10% {
            transform: rotate(-5deg);
          }
          20% {
            transform: rotate(5deg);
          }
          30% {
            transform: rotate(-5deg);
          }
          40% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(0);
          }
        }
      }
      .desc {
        color: #333333;
        font-size: 18px;
        line-height: 28px;
        margin-top: 20px;
      }
    }
  }
}
.box2 {
  .text {
    float: left !important;
  }
  .img {
    left: 600px !important;
  }
  .button {
    left: 70px;
  }
}
.fot {
  background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/wyqggzt-5.jpg)
    no-repeat center top;
  height: 180px;
}
.button {
  position: absolute;
  right: 130px;
  bottom: -110px;
  z-index: 12;
  font-size: 0;
  a {
    position: relative;
    display: inline-block;
    width: 252px;
    height: 48px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
    vertical-align: middle;
    margin: 5px 0;
    margin-right: 20px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game10.png)
      no-repeat;
  }
}
</style>
