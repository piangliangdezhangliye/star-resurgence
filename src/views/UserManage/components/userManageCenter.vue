<template>
  <div class="userMain">
    <!-- 背景图 -->
    <div class="userBg">
      <div class="bgImg">
        <img
          src="	https://img.zcool.cn/community/010f7e603daf1111013ef90f59e2b4.png@1280w_1l_2o_100sh.png
"
          alt=""
        />
      </div>
      <!-- 信息栏 -->
      <div class="dataWraper">
        <div class="dataWrapBox">
          <p class="dataListBox left">
            等级
            <span title="等级" class="dataNum">{{ userInfo.level }}</span>
          </p>
          <p class="dataListBox left">
            积分
            <span title="积分" class="dataNum">{{ userInfo.exp }}</span>
          </p>
          <p class="dataListBox right">
            粉丝
            <span title="粉丝" class="dataNum">{{ userInfo.fansnum }}</span>
          </p>
          <p class="dataListBox right">
            关注
            <span title="关注" class="dataNum">{{
              userInfo.attentionnum
            }}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 用户信息及头像 -->
    <div class="userInfo" v-if="userInfo != {}">
      <!--信息盒子  -->
      <div class="infoBox">
        <!-- 头像 -->
        <div class="headImg">
          <img v-if="userInfo.avatar" :src="userInfo.avatar" alt="" />
          <img v-else src="@/assets/img/headImg.jpg" alt="" />
        </div>
        <!-- 用户信息 -->
        <div class="infoContent">
          <p class="nickName">{{ userInfo.username }}</p>
          <p class="school">北京|学生</p>
          <div class="logoutBtn">
            <button @click="showToast = true">退出登录</button>
          </div>
        </div>
      </div>
    </div>
    <!-- sub 导航-->
    <div class="subNav">
      <div class="navContBox">
        <div class="navContainer">
          <a-tabs v-model:activeKey="activeKey" class="subNavCont">
            <a-tab-pane key="1" tab="关注的人" class="navItem" name="first">
              <div v-if="attensitionList.length == 0">
                <WorkNull content="您还没有关注其他潮友哦" />
              </div>
              <div v-else class="contarinerWraper">
                <div class="containerArea">
                  <div class="top-content-wrap">
                    <div class="active-filter-down">
                      <span>共关注1人</span>
                      <div class="filter-wrap">
                        <span>全部</span>
                      </div>
                    </div>
                    <div class="designer-list-box">
                      <div
                        class="card-designer-list"
                        v-for="item in attensitionList"
                        :key="item.id"
                      >
                        <div class="avatar-container-80">
                          <a href="" class="avatar"
                            ><img :src="item.avatar" alt=""
                          /></a>
                        </div>
                        <div class="author-info">
                          <!-- 用户名  -->
                          <p class="author-info-tit">{{ item.username }}</p>
                          <!-- 用户信息 -->
                          <div class="info-num">
                            <div class="work">
                              <span
                                >关注
                                <a href="" title="共关注多少人">{{
                                  item.attentionnum
                                }}</a>
                                <i></i
                              ></span>
                            </div>
                            <div class="fans">
                              <span>粉丝</span
                              ><a href="" title="共有多少粉丝">{{
                                item.fansnum
                              }}</a>
                            </div>
                          </div>
                          <div class="btn-area">
                            <div class="js-project-focus-btn">
                              <input
                                type="text"
                                class="btn-default-secondary"
                                value="已关注"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="work-show">
                          <ul class="work-con-box">
                            <li class="work-show-item">
                              <a href="#" class="card-img-hover">
                                <img src="" alt="" />
                              </a>
                            </li>
                          </ul>
                          <div class="seize-box">
                            <div class="work-show-more">
                              <a href="" class="view-more"
                                ><div class="more-icon">
                                  <span></span><span></span><span></span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="粉丝" name="second" force-render>
              <div v-if="fansList.length == 0">
                <WorkNull content="您还没有关注其他潮友哦" />
              </div>
              <div v-else class="contarinerWraper">
                <div class="containerArea">
                  <div class="top-content-wrap">
                    <div class="active-filter-down">
                      <span>共关注1人</span>
                      <div class="filter-wrap">
                        <span>全部</span>
                      </div>
                    </div>
                    <div class="designer-list-box">
                      <div
                        class="card-designer-list"
                        v-for="item in fansList"
                        :key="item.id"
                      >
                        <div class="avatar-container-80">
                          <a href="" class="avatar"
                            ><img :src="item.avatar" alt=""
                          /></a>
                        </div>
                        <div class="author-info">
                          <!-- 用户名  -->
                          <p class="author-info-tit">{{ item.username }}</p>
                          <!-- 用户信息 -->
                          <div class="info-num">
                            <div class="work">
                              <span
                                >关注
                                <a href="" title="共关注多少人">{{
                                  item.attentionnum
                                }}</a>
                                <i></i
                              ></span>
                            </div>
                            <div class="fans">
                              <span>粉丝</span
                              ><a href="" title="共有多少粉丝">{{
                                item.fansnum
                              }}</a>
                            </div>
                          </div>
                          <div class="btn-area">
                            <div class="js-project-focus-btn">
                              <input
                                type="text"
                                class="btn-default-secondary"
                                value="已关注"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="work-show">
                          <ul class="work-con-box">
                            <li class="work-show-item">
                              <a href="#" class="card-img-hover">
                                <img src="" alt="" />
                              </a>
                            </li>
                          </ul>
                          <div class="seize-box">
                            <div class="work-show-more">
                              <a href="" class="view-more"
                                ><div class="more-icon">
                                  <span></span><span></span><span></span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a-tab-pane>
          </a-tabs>
          <!-- 弹框 -->
          <Toast
            content="确定要退出登录吗？"
            v-if="showToast"
            @reset="showToast = false"
            @promise="loginOut()"
          ></Toast>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入组件

import WorkNull from "@/views/UserCenter/components/WorkNull";

import Toast from "@/components/Toast";
import { ref } from "vue";
import { getUserAttensition, getUserFans, getUserInfo } from "@/api/user";
import { useRouter } from "vue-router";

export default {
  name: "UserMain",
  created() {
    this.getusersInfo(this.$route.params.id);
    this.getFansList(this.$route.params.id);
    this.getAttensitonList(this.$route.params.id);
  },
  setup() {
    const userInfo = ref({});
    const showToast = ref(false);
    const router = useRouter();
    const fansList = ref([]);
    const attensitionList = ref([]);
    //获取用户信息
    const getusersInfo = (id) => {
      getUserInfo(id).then((res) => {
        // console.log(res);
        if (res.code === 20000) {
          userInfo.value = res.data;
        }
      });
    };
    //获取用户粉丝列表
    const getFansList = (id) => {
      getUserFans(id).then((res) => {
        if (res.code === 20000) {
          fansList.value = res.data;
        }
        // console.log(fansList.value);
      });
    };
    //获取用户关注列表
    const getAttensitonList = (id) => {
      getUserAttensition(id).then((res) => {
        if (res.code === 20000) {
          attensitionList.value = res.data;
        }
        console.log(attensitionList.value);
      });
    };
    //退出登录
    const loginOut = () => {
      router.push({ path: "/login" });
      window.sessionStorage.clear();
    };
    return {
      userInfo,
      getusersInfo,
      fansList,
      showToast,
      loginOut,
      router,
      getFansList,
      attensitionList,
      getAttensitonList,
    };
  },
  components: {
    WorkNull,
    Toast,
  },
};
</script>

<style lang="less">
.userMain {
  background: #f4f4f4;
  margin-top: 50px;
  margin-bottom: 40px;
  position: relative;
  display: block;
  overflow: hidden;
  min-width: 1200px;
  color: #282828;
  .userBg {
    width: 100%;
    height: 344px;
    line-height: 1;
    margin: 0 auto;
    background: #000000;
    position: relative;
    transition: 2s linear;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    align-self: center;
    .bgImg {
      margin: 0 auto;
      img {
        width: 1700px;
        max-width: 2560px;
        display: block;
      }
    }
    .dataWraper {
      width: 100%;
      margin: 0 auto;
      padding-bottom: 20px;
      position: absolute;
      box-sizing: border-box;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;

      .dataWrapBox {
        width: 1130px;
        margin: 0 auto;
        padding: 0 16px 23px;
        box-sizing: border-box;
        .dataListBox {
          width: 220px;
          height: 100%;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          position: relative;
          text-align: center;
          .dataNum {
            display: block;
            margin-top: 14px;
            color: white;
            font-size: 24px;
          }
        }
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
    }
  }
  .userInfo {
    width: 100%;
    height: 217px;
    background: #fff;
    line-height: 1;
    .infoBox {
      height: 100%;
      margin: 0 auto;
      padding-bottom: 35px;
      position: relative;
      .headImg {
        position: absolute;
        margin-left: -64px;
        overflow: hidden;
        left: 50%;
        top: -65px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 4px solid #ffffff;
        background-color: #ffffff;
        img {
          border: 0;
        }
      }
      .infoContent {
        padding-top: 60px;
        text-align: center;
        .nickName {
          margin-top: 20px;
          font-size: 24px;
          color: #444444;
        }
        .school {
          margin-top: 10px;
          font-size: 12px;
          color: #bbbbbb;
        }
        .logoutBtn {
          margin-top: 20px;
          button {
            padding: 0 20px;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            display: inline-block;
            vertical-align: top;
            zoom: 1;
            min-width: 118px;
            box-sizing: border-box;
            color: #444;
            background: #ffe300;
            border: 1px solid #ffe300;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
          }
        }
      }
    }
  }
  .subNav {
    height: 100%;
    .navContBox {
      position: relative;
      margin: 0 auto;
      z-index: 2;
      width: 100%;
      border-bottom: 1px solid #eee;
      .ant-tabs-nav-wrap {
        margin-bottom: -1px;
        font-size: 16px;
        text-align: center;
        color: #999;
        background: #ffffff;
      }
      //内容
      .contarinerWraper {
        width: 100%;
        position: relative;
        .containerArea {
          margin: 20px auto 0;
          width: 1130px;
          height: 100%;
          .active-filter-down {
            position: relative;
            margin-top: 16px;
            height: 20px;
            box-sizing: border-box;
            span {
              float: left;
              font-size: 18px;
              color: #666;
            }
            .filter-wrap {
              float: right;
              height: 20px;
              align-items: center;
              -webkit-box-align: center;
              display: inline-flex;
              span {
                position: relative;
                margin-top: 16px;
                box-sizing: border-box;
              }
            }
          }
          .designer-list-box {
            margin-top: 25px;
            overflow: hidden;
            -webkit-border-radius: 4px;
            .card-designer-list {
              padding: 30px;
              width: 1130px;
              border-bottom: 1px solid #eee;
              overflow: hidden;
              background: #fff;
              .avatar-container-80 {
                position: relative;
                width: 80px;
                .avatar {
                  float: left;
                  margin-bottom: 10px;
                  img {
                    width: 80px;
                    height: 80px;
                    display: block;
                    border-radius: 50%;
                  }
                }
              }
              .author-info {
                float: left;
                width: 220px;
                height: 150px;
                margin-left: 20px;
                position: relative;
                .author-info-tit {
                  margin-bottom: 2px;
                  color: #333;
                  font-size: 20px;
                  font-weight: 600;
                  vertical-align: middle;
                }
                .info-num {
                  margin-top: 16px;
                  font-size: 18px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  .work {
                    display: inline-block;
                    span {
                      color: #666;
                    }
                    a {
                      color: #333;
                      font-weight: 600;
                    }
                    i {
                      display: inline-block;
                      width: 1px;
                      height: 10px;
                      background: #333;
                      margin: 0 5px;
                    }
                  }
                  .fans {
                    display: inline-block;
                    span {
                      color: #666;
                    }
                  }
                }
                .btn-area {
                  margin-top: 15px;
                  .js-project-focus-btn {
                    position: relative;
                    height: 36px;
                    display: inline-block;
                    .btn-default-secondary {
                      width: 100px;
                      height: 36px;
                      margin-right: 6px;
                      color: #666;
                      background: #fff;
                      border: 1px solid #bbb;
                      border-radius: 4px;
                      cursor: pointer;
                      text-align: center;
                    }
                  }
                }
              }
              .work-show {
                float: right;
                .work-con-box {
                  float: left;
                  width: 630px;
                  height: 150px;
                  overflow: hidden;
                  .work-show-item {
                    float: left;
                    margin-left: 10px;
                    position: relative;
                    list-style-type: none;
                    .card-img-hover {
                      color: inherit;
                      img {
                        vertical-align: middle;
                      }
                    }
                  }
                }
                .seize-box {
                  width: 26px;
                  margin-left: 20px;
                  margin-right: -10px;
                  float: right;
                  .work-show-more {
                    .view-more {
                      width: 6px;
                      height: 150px;
                      padding: 0 10px;
                      display: block;
                      text-align: center;
                      line-height: 180px;
                      position: relative;
                      .more-icon {
                        position: absolute;
                        top: 50%;
                        margin-top: -19px;
                        left: 50%;
                        margin-left: -3px;
                        display: inline-block;
                        span {
                          display: block;
                          width: 6px;
                          height: 6px;
                          margin: 5px 0;
                          background: #ffe300;
                          border-radius: 50%;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
