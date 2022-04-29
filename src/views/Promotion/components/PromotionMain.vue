<template>
  <div class="promotionMain">
    <div class="banner">
      <img src="@/assets/img/promotionBg.jpg" alt="" />
    </div>
    <div class="promotionBox">
      <div class="boxContainer">
        <div class="boxHeader"></div>
        <div class="boxFooter"></div>
        <div class="boxCont">
          <div class="itemBox">
            <div class="focus">
              <div class="frame">
                <div class="child">
                  <div class="childImg imgLeft">
                    <a href="">
                      <img
                        src="https://img.dpm.org.cn/Uploads/Picture/2022/01/28/s61f3a4d3a9394.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    class="childText textRight"
                    :class="{ nowText: index === currentIndex }"
                  >
                    <div class="public-title">
                      <i class="one"></i>
                      <a href="">故宫中国年童趣贴纸</a>
                      <i class="two"></i>
                    </div>
                    <a href=""
                      ><div class="htwo"></div>
                      <p>
                        《故宫中国年童趣贴纸书》中选取活宜儿童的事件细节,以充满童趣的笔触高还原度的构图尾现了紫禁城里异彩纷呈的中国年。
                      </p></a
                    >
                  </div>
                </div>
              </div>
              <div class="itemBtn btnRight">
                <a href=""
                  ><router-link to="/upLoading">参与推广</router-link>
                </a>
              </div>
            </div>
          </div>
          <div class="itemBox">
            <div class="focus">
              <div class="frame">
                <div class="child">
                  <div class="childImg imgRight">
                    <a href="">
                      <img
                        src="https://img.zcool.cn/community/01ba875f72e2a811013f311075f6ea.jpg@1280w_1l_2o_100sh.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="childText textLeft">
                    <div class="public-title">
                      <i class="one"></i>
                      <a href="">鸣鼓 国潮糕点</a>
                      <i class="two"></i>
                    </div>
                    <a href=""
                      ><div class="htwo"></div>
                      <p>
                        鸣鼓是一家中式糕点烘焙连锁品牌，产品以具有治愈感的元气糕点为主。
                        糕点的来源是古代打胜仗后将军用来犒劳士兵的食品，帮助士兵恢复元气，增加信心。在现代生活中，每个人都信心不足的时刻，在不同场景中、不同时间段内，所以我们在品牌创作上以古代的鸣鼓冲锋作为记忆点，以治愈糕点产品为链接物，让用户信心不足的时候就能想到鸣鼓品牌，想吃鸣鼓的元气糕点。
                      </p></a
                    >
                  </div>
                </div>
              </div>
              <div class="itemBtn btnLeft">
                <a href=""
                  ><router-link to="/upLoading">参与推广</router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionMain",
};
</script>

<style lang="less" scoped>
.promotionMain {
  width: 100%;

  .promotionBox {
    position: relative;
    //margin-bottom: 65px;
    background: url(https://img.zcool.cn/event-resource/tmallgc/assets/img/bg01-1.png?v=111)
      repeat center top;
    background-size: 120% auto;
    .boxContainer {
      margin: 0 auto;
      width: 980px;
      position: relative;
      margin-top: -72px;
      background-color: #fefbfa;
      .boxHeader {
        position: absolute;
        width: 100%;
        height: 73px;
        top: 0;
        left: 0;
        background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game2.png)
          no-repeat;
        color: #fff;
        font-size: 26px;
        background-size: 100% auto;
      }
      .boxFooter {
        position: absolute;
        width: 100%;
        height: 73px;
        bottom: 0;
        left: 0;
        background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game3.png)
          no-repeat;
        background-size: 100% auto;
      }
      .boxCont {
        padding: 70px 60px;
        padding-bottom: 0;
        background-color: #fff5ed;
        .itemBox {
          position: relative;
          padding-bottom: 80px;
          .focus {
            position: relative;
            .frame {
              position: relative;
              height: 420px;
              width: 100%;
              .child {
                float: left;
                width: 100%;
                height: 420px;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                display: block;
                .imgLeft {
                  float: left;
                }
                .imgRight {
                  float: right;
                }
                .childImg {
                  width: 350px;
                  height: 315px;
                  overflow: hidden;
                  display: block;

                  img {
                    border: 0;
                    outline: 0;
                    vertical-align: middle;
                    max-width: 100%;
                    max-height: 100%;
                  }
                }
                .textRight {
                  margin-left: 315px;
                }
                .textLeft {
                  float: right;
                  margin-right: 100px;
                  text-align: right;
                }
                .childText {
                  width: 400px;
                  margin-top: 15px;
                  opacity: 1;
                  //-webkit-transform: translateX(100px);
                  //-webkit-transition: all 2s;
                  .public-title {
                    position: relative;
                    padding: 0 30px;
                    font-size: 26px;
                    display: inline-block;
                    line-height: 36px;
                    height: 40px;
                    color: #b2261a;
                    margin-bottom: 15px;
                    i {
                      position: absolute;
                      display: block;
                      width: 22px;
                      height: 100%;
                    }
                    .one {
                      left: 0;
                      top: 0;
                      background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game7.png)
                        no-repeat center;
                    }
                    .two {
                      background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game8.png)
                        no-repeat center;
                      right: 0;
                      top: 0;
                    }
                  }
                  a {
                    text-decoration: none !important;
                    color: inherit;
                    .htwo {
                      font-size: 20px;
                      color: #0a0509;
                      line-height: 30px;
                      margin-bottom: 15px;
                    }
                    p {
                      font-size: 16px;
                      color: #707070;
                      line-height: 25px;
                      margin-bottom: 15px;
                    }
                  }
                }
              }
            }
            .itemNav {
              position: absolute;
              bottom: 115px;
              left: 430px;
              a {
                background-position: right center;
                display: inline-block;
                background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game25.png)
                  no-repeat left center;
                width: 27px;
                height: 25px;
                margin-right: 15px;
              }
            }
            .btnLeft {
              left: 100px;
              bottom: 35px;
            }
            .btnRight {
              right: -25px;
              bottom: 104px;
            }
            .itemBtn {
              position: absolute;

              a {
                display: inline-block;
                width: 252px;
                height: 48px;
                background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game10.png)
                  no-repeat;
                text-align: center;
                font-size: 20px;
                line-height: 48px;
                vertical-align: middle;
                margin-right: 10px;
              }
              a:hover {
                color: #707070;
              }
            }
          }
        }
      }
    }
  }
}
</style>
