<template>
  <div class="userMain">
    <!-- 背景图 -->
    <div class="userBg">
      <div class="bgImg">
        <img
          src="../../../assets/img/user_bg.png"
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
            <a-tab-pane key="1" tab="创作历程" class="navItem" name="first">
              <div v-if="noteList.length == 0">
                <WorkNull content="还没有上传过笔记哦" />
              </div>
              <div v-else>
                <MyPortfolio :userInfo="userInfo" :noteList="noteList" />
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="赞过" name="second" force-render>
              <div v-if="lickList.length == 0">
                <WorkNull content="还没有赞过笔记哦" />
              </div>
              <div v-else>
                <LikePortfolio :lickList="lickList" />
              </div>
            </a-tab-pane>
            <a-tab-pane key="3" tab="收藏夹" name="third">
              <div v-if="collectList.length == 0">
                <WorkNull content="还没有收藏过笔记哦" />
              </div>
              <div v-else>
                <ColPortfolio :collectList="collectList" /></div
            ></a-tab-pane>
            <a-tab-pane key="4" tab="创作者服务中心" name="forth">
              <CreatorCenter />
            </a-tab-pane>
            <a-tab-pane key="5" tab="资料" name="fifth">
              <PersonMsg :userInfo="userInfo" />
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
import ColPortfolio from "@/views/UserCenter/components/ColPortfolio";
import LikePortfolio from "@/views/UserCenter/components/LikePortfolio";
import WorkNull from "@/views/UserCenter/components/WorkNull";
import PersonMsg from "@/views/UserCenter/components/PersonMsg";
import CreatorCenter from "@/views/UserCenter/components/CreatorCenter";
import Toast from "@/components/Toast";
import { ref } from "vue";
import { getUserCol, getUserInfo, getUserLike, getUserNote } from "@/api/user";
import { useRouter } from "vue-router";
import MyPortfolio from "@/views/UserCenter/components/MyPortfolio";

export default {
  name: "UserMain",
  created() {
    this.getusersInfo(this.$route.params.id);
    this.getusersLike(this.$route.params.id);
    this.getusersCol(this.$route.params.id);
    this.getusersNote(this.$route.params.id);
  },
  setup() {
    const noteList = ref([]);
    const lickList = ref([]);
    const collectList = ref([]);
    const userInfo = ref({});
    const showToast = ref(false);
    const router = useRouter();

    //获取用户信息
    const getusersInfo = (id) => {
      getUserInfo(id).then((res) => {
        // console.log(res);
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
          console.log(noteList.value);
        }

      });
    };
    //获取用户喜欢的笔记列表
    const getusersLike = (id) => {
      getUserLike(id).then((res) => {
        // console.log(res);
        if (res.code === 20000) {
          lickList.value = res.data;
        }
        console.log(lickList.value);
      });
    };
    //获取用户收藏的笔记列表
    const getusersCol = (id) => {
      getUserCol(id).then((res) => {
        // console.log(res);
        if (res.code === 20000) {
          collectList.value = res.data;
        }
      });
    };
    //退出登录
    const loginOut = () => {
      router.push({ path: "/login" });
      window.sessionStorage.clear();
    };
    return {
      noteList,
      lickList,
      collectList,
      userInfo,
      getusersInfo,
      getusersLike,
      getusersCol,
      showToast,
      loginOut,
      router,
      getusersNote,
    };
  },
  components: {
    MyPortfolio,
    ColPortfolio,
    LikePortfolio,
    WorkNull,
    PersonMsg,
    CreatorCenter,
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
      height: 100%;
      margin: 0 auto;
      img {
        width: 100% !important;
        height: 100%;
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
    }
  }
}
</style>
