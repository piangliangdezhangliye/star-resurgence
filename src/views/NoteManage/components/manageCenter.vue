<template>
  <div class="container">
    <div class="infoChange">
      <div class="left">
        <div class="cardMedia personalCard">
          <!--      头像-->
          <div class="avatar">
            <a href="">
              <img :src="userInfo.avatar" alt="" />
            </a>
          </div>
          <!--        用户名-->
          <div class="personalInfo">
            <a href="" class="authorName" title="狍狍哇">{{
              userInfo.username
            }}</a>
          </div>
          <!--        用户信息-->
          <div class="positionInfo">
            <span v-if="userInfo.sex == 1">男</span>
            <span v-else>女</span>
          </div>
          <!--        按钮区域-->
          <div class="btnArea">
            <button class="cardBtn uploadNote" @click="goUploading">
              上传笔记
            </button>
            <button class="cardBtn logout" @click="showToast = true">
              退出登录
            </button>
          </div>
        </div>
        <div class="cardMedia personalMenu">
          <ul class="menuList">
            <li>
              <router-link
                :to="`/userCenter/${$store.state.user.profile.id}`"
                ><a href="#">个人中心</a></router-link
              >
            </li>
            <li>
              <router-link
                :to="`/userCenter/${$store.state.user.profile.id}/noteManage`"
                ><a href="#">笔记管理</a></router-link
              >
            </li>
            <li>
              <router-link to="/Promotion"
                ><a href="#">推广中心</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="我的笔记">
            <div v-if="noteList.length == 0">
              <WorkNull content="还没有赞过笔记哦" />
            </div>
            <div v-else class="manage_list">
              <div
                class="card-box new-card-box"
                v-for="(item, index) in noteList"
                :key="index"
              >
                <div class="card-img">
                  <a
                    href="javascript:;"
                    target="_blank"
                    class="card-img-hover"
                    title="国潮城市插画"
                  >
                    <img :src="item.img" alt="" />
                  </a>
                </div>
                <div class="card-info">
                  <p class="card-info-title">
                    <a
                      href="javascript:;"
                      target="_blank"
                      class="title-content"
                      style="width: 297px"
                      >{{ item.title }}</a
                    >

                    <a
                      href="javascript:;"
                      class="title-icon zcool-card-fire2 title-icon-1"
                      title="编辑推荐"
                    ></a>
                  </p>
                  <!--作者-->
                  <p class="card-info-type">{{ item.authorname }}</p>

                  <p class="card-info-item">
                    <span class="statistics-view" title="共0人气">0w</span>
                    <span class="statistics-comment" title="共0评论">0</span>
                    <span class="statistics-tuijian" title="共0推荐">0</span>
                  </p>
                </div>
                <div class="card-item">
                  <button class="delBtn" @click="delusersNote(item.id)">
                    删除
                  </button>
                  <button class="editBtn">编辑</button>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="我的喜欢" force-render>
            <div v-if="lickList.length == 0">
              <WorkNull content="还没有赞过笔记哦" />
            </div>
            <div v-else class="manage_list">
              <div
                class="card-box new-card-box"
                v-for="(item, index) in lickList"
                :key="index"
              >
                <div class="card-img">
                  <a
                    href="javascript:;"
                    target="_blank"
                    class="card-img-hover"
                    title="国潮城市插画"
                  >
                    <img :src="item.img" alt="" />
                  </a>
                </div>
                <div class="card-info">
                  <p class="card-info-title">
                    <a
                      href="javascript:;"
                      target="_blank"
                      class="title-content"
                      style="width: 297px"
                      >{{ item.title }}</a
                    >

                    <a
                      href="javascript:;"
                      class="title-icon zcool-card-fire2 title-icon-1"
                      title="编辑推荐"
                    ></a>
                  </p>
                  <!--作者-->
                  <p class="card-info-type">{{ item.authorname }}</p>

                  <p class="card-info-item">
                    <span class="statistics-view" title="共0人气">0w</span>
                    <span class="statistics-comment" title="共0评论">0</span>
                    <span class="statistics-tuijian" title="共0推荐">0</span>
                  </p>
                </div>
                <div class="card-item">
                  <button class="delBtn" @click="delUserLikes(item.id)">
                    删除
                  </button>
                  <button class="editBtn">编辑</button>
                </div>
              </div>
            </div></a-tab-pane
          >
          <a-tab-pane key="3" tab="收藏夹">
            <div v-if="collectList.length == 0">
              <WorkNull content="还没有赞过笔记哦" />
            </div>
            <div class="manage_list" v-else>
              <div
                class="card-box new-card-box"
                v-for="(item, index) in collectList"
                :key="index"
              >
                <div class="card-img">
                  <a
                    href="javascript:;"
                    target="_blank"
                    class="card-img-hover"
                    title="国潮城市插画"
                  >
                    <img :src="item.img" alt="" />
                  </a>
                </div>
                <div class="card-info">
                  <p class="card-info-title">
                    <a
                      href="javascript:;"
                      target="_blank"
                      class="title-content"
                      style="width: 297px"
                      >{{ item.title }}</a
                    >

                    <a
                      href="javascript:;"
                      class="title-icon zcool-card-fire2 title-icon-1"
                      title="编辑推荐"
                    ></a>
                  </p>
                  <!--作者-->
                  <p class="card-info-type">{{ item.authorname }}</p>

                  <p class="card-info-item">
                    <span class="statistics-view" title="共0人气">0w</span>
                    <span class="statistics-comment" title="共0评论">0</span>
                    <span class="statistics-tuijian" title="共0推荐">0</span>
                  </p>
                </div>
                <div class="card-item">
                  <button class="delBtn" @click="delUserCol(item.id)">
                    删除
                  </button>
                  <button class="editBtn">编辑</button>
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
</template>

<script>
import { useRouter } from "vue-router";
import Toast from "@/components/Toast";
import { ref } from "vue";
import WorkNull from "@/views/UserCenter/components/WorkNull";
import {
  delColList,
  delLikeList,
  delUserNote,
  getUserCol,
  getUserInfo,
  getUserLike,
  getUserNote,
} from "@/api/user";

export default {
  name: "manageCenter",
  components: {
    Toast,
    WorkNull,
  },
  created() {
    this.getusersInfo(this.$route.params.id);
    this.getusersLike(this.$route.params.id);
    this.getusersCol(this.$route.params.id);
    this.getusersNote(this.$route.params.id);
  },
  setup() {
    const showToast = ref(false);
    const router = useRouter();
    const lickList = ref([]);
    const collectList = ref([]);
    const userInfo = ref({});
    const noteList = ref([]);
    //退出登录
    const loginOut = () => {
      router.push({ path: "/login" });
      window.sessionStorage.clear();
    };
    //获取用户信息
    const getusersInfo = (id) => {
      getUserInfo(id).then((res) => {
        if (res.code === 20000) {
          userInfo.value = res.data;
        }
        console.log(userInfo.value);
      });
    };
    //获取用户笔记列表
    const getusersNote = (id) => {
      getUserNote(id).then((res) => {
        if (res.code === 20000) {
          noteList.value = res.data;
        }
        console.log(noteList.value);
      });
    };
    //获取用户喜欢的笔记列表
    const getusersLike = (id) => {
      getUserLike(id).then((res) => {
        if (res.code === 20000) {
          lickList.value = res.data;
        }
      });
    };
    //获取用户收藏的笔记列表
    const getusersCol = (id) => {
      getUserCol(id).then((res) => {
        if (res.code === 20000) {
          collectList.value = res.data;
        }
      });
    };
    //删除用户创作的笔记列表
    const delusersNote = (id) => {
      const uid = userInfo.value.id;
      delUserNote(id).then((res) => {
        console.log(res);
        if (res.code === 20000) {
          //  如果删除成功重新获取用户创作笔记列表
          getusersNote(uid);
        }
      });
    };
    //删除用户喜欢的笔记列表
    const delUserLikes = (likeid) => {
      const uid = userInfo.value.id;
      const req = { uid, likeid };
      delLikeList(req).then((res) => {
        if (res.code === 20000) {
          //  重新获取收藏列表
          getusersLike(uid);
        }
      });
    };
    //删除用户收藏的笔记列表
    const delUserCol = (collectid) => {
      // console.log(collectid);
      const uid = userInfo.value.id;
      const req = { uid, collectid };
      delColList(req).then((res) => {
        // console.log(res);
        if (res.code === 20000) {
          //  重新获取收藏列表
          getusersCol(uid);
        }
      });
    };
    //跳转到上传作品
    const goUploading = () => {
      router.push({ path: "/upLoading" });
    };
    return {
      showToast,
      router,
      lickList,
      collectList,
      userInfo,
      noteList,
      loginOut,
      getusersLike,
      getusersCol,
      goUploading,
      getusersInfo,
      delUserLikes,
      delUserCol,
      getusersNote,
      delusersNote,
    };
  },
};
</script>

<style lang="less">
.container {
  width: 100%;
  margin: 20px 190px;
  .infoChange {
    width: 100%;
    padding: 20px 0px;
    margin-bottom: 200px;
    .left {
      float: left;
      .cardMedia {
        width: 210px;
      }
      .personalCard {
        margin-bottom: 10px;
        padding: 30px 0 20px;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
        text-align: center;
        .avatar {
          margin: 0 auto;
          position: relative;
          width: 80px;

          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
        }
        .personalInfo {
          margin: 16px 0 0;
          .authorName {
            font-size: 16px;
            font-weight: 600;
          }
        }
        .positionInfo {
          margin-bottom: 24px;
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          padding: 0 16px;
          span {
            font-size: 12px;
            color: #bbb;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .btnArea {
          padding: 0 20px;
          .cardBtn {
            display: inline-block;
            vertical-align: top;
            zoom: 1;
            width: 160px;
            height: 36px;
            line-height: 34px;
            font-size: 14px;
            box-sizing: border-box;
            color: #444;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
          }
          .uploadNote {
            background: #ffe300;
            border: 1px solid #ffe300;
            margin-bottom: 10px;
          }
          .logout {
            color: #666;
            background: #fff;
            border: 1px solid #bbb;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
          }
        }
      }
      .personalMenu {
        width: 210px;
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
        .menuList {
          border-bottom: 1px solid #eee;
          li {
            background: #fff;
            position: relative;
            a {
              display: block;
              color: #333;
              height: 52px;
              line-height: 52px;
              padding: 0 30px;
              font-weight: 500;
              position: relative;
              text-align: center;
            }
          }
        }
      }
    }
    .right {
      margin-left: 230px;
      width: 1050px;
      height: 100%;
      border-radius: 4px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      background: #fff;
      .rightTab {
        position: relative;
        width: 900px;
        height: 64px;
        border-radius: 4px;
        background: #fff;
        border-bottom: 1px solid #eee;
        p {
          position: relative;
          padding: 0 30px;
          float: left;
          height: 65px;
          line-height: 64px;
          border-bottom: 2px solid #444;
          font-size: 16px;
          color: #444;
        }
      }
      .manage_list {
        padding: 30px 30px;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        max-width: 100%;
        margin-right: 0px;
        margin-left: 0px;
        margin-bottom: 0px;
        display: inline-grid;
        list-style: none;
        column-gap: 20px;
        box-sizing: border-box;
        .card-box {
          width: 210px;
          background-color: #f4f4f4;
          margin-bottom: 20px;
          border: 1px solid #eee;
          .card-img {
            img {
              width: 100%;
            }
          }
          .card-info {
            position: relative;
            height: 100px;
            padding: 11px 16px 13px;
            border-bottom: 1px solid #eee;
            .card-info-type {
              font-size: 12px;
              color: #bbb;
              margin-bottom: 17px;
              height: 18px;
            }
            .card-info-item {
              font-size: 12px;
              color: #bbb;
            }
            span[class^="statistics"] {
              margin-right: 7px;
              cursor: default;
            }
            span[class^="statistics"]:before {
              content: "";
              display: inline-block;
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 5px;
            }
            .statistics-view:before {
              background: url(https://static.zcool.cn/git_z/build/images/svg/card-liulan.svg?v=1)
                0 4px no-repeat;
              background-size: 16px auto;
            }
            .statistics-comment:before {
              background: url(https://static.zcool.cn/git_z/build/images/svg/card-pinglun.svg?v=1)
                0 2px no-repeat;
              background-size: 16px auto;
            }
            .statistics-tuijian:before {
              background: url(https://static.zcool.cn/git_z/build/images/svg/card-zan.svg?v=1)
                no-repeat;
              background-size: 16px 16px;
            }
          }
          .card-info-title {
            display: flex;
            position: relative;
            height: 20px;
            line-height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            justify-content: space-between;
            overflow: hidden;
            margin-bottom: 1px;
            a {
              font-size: 14px;
              color: #333;
            }
            .title-content {
              display: inline-block;
              float: left;
              vertical-align: middle;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              flex: 1;
              max-width: 100%;
              width: 100% !important;
            }
            .title-icon {
              margin-left: 6px;
            }
            .zcool-card-fire2 {
              width: 14px;
              height: 14px;
              float: right;
              margin-top: 3px;
              display: inline-block;
              vertical-align: middle;
              background-repeat: no-repeat;
              background-position: center top;
              background-image: url(https://static.zcool.cn/git_z/build/images/svg/shouyetuijian.svg?v=1);
              background-size: auto 14px;
            }
          }
          .card-item {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            button {
              width: 50%;
              height: 100%;
              border: #f4f4f4 1px solid;
              color: #333;
              background: #fffff9;
            }
          }
        }
      }
    }
  }
}
</style>
