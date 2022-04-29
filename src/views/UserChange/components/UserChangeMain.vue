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
        <div class="rightTab">
          <p>修改个人资料</p>
        </div>
        <div class="infoForm">
          <div class="nameDatumBox">
            <!--头像-->
            <div class="userAvatars">
              <img src="@/assets/img/headImg.jpg" alt="" />
            </div>
            <!--            form表单-->
            <div class="infoForm">
              <a-form >
                <a-form-item label="用户名" name="name">
                  <a-input type="text" data-cke-caption-placeholder="" v-model:value="userChangeModel.username" />
                </a-form-item>
                <a-form-item label="密码" name="password">
                  <a-input
                    type="textarea"
                    v-model:value="userChangeModel.password"
                  />
                </a-form-item>

                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                  <a-button type="primary" @click="changeUserInfo(userChangeModel)">确定</a-button>
                  <a-button style="margin-left: 10px" @click="cancel">取消</a-button>
                </a-form-item>
              </a-form>
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
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Toast from "@/components/Toast";
import { ref } from "vue";
import { getUserInfo } from "@/api/user";
import { editUserInfo } from "../../../api/user";
import Message from "@/components/library/Message";
export default {
  name: "UserChangeMain",
  created() {
    this.getusersInfo(this.$route.params.id);
  },
  setup() {
    const showToast = ref(false);
    const router = useRouter();
    const userInfo = ref({});
    //表单model
    const userChangeModel = ref({
      username: "",
      password: "",
    });
    //修改个人资料
    const changeUserInfo=(data)=>{
      console.log(data);
      const req={
        id:userInfo.value.id,
        username:data.username,
        password:data.password
      }
      editUserInfo(req).then((res)=>{
        console.log(res);
        if(res.code===20000){
          Message({ type: "success", text: res.message });
          getusersInfo(req.id)
        }
      })
    }
    //取消修改信息
    const cancel=()=>{
      router.go(-1)
    }
    //退出登录
    const loginOut = () => {
      router.push({ path: "/login" });
      window.sessionStorage.clear();
    };
    //获取用户信息
    const getusersInfo = (id) => {
      getUserInfo(id).then((res) => {
        console.log(res);
        if (res.code === 20000) {
          userInfo.value = res.data;
        }
        userChangeModel.value.username = userInfo.value.username;
        userChangeModel.value.password = userInfo.value.password;
      });
    };

    return {
      showToast,
      router,
      userInfo,
      loginOut,
      getusersInfo,
      userChangeModel,
      changeUserInfo,
      cancel
    };
  },
  components: {
    Toast,
  },
};
</script>

<style lang="less">
.container {
  width: 100%;
  margin: 20px 190px;
  .infoChange {
    width: 100%;
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
            }
          }
        }
      }
    }
    .right {
      margin-left: 230px;
      width: 900px;
      height: 500px;
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
      .infoForm {
        padding: 0 30px;
        height: 500px;
        line-height: 1;
        .nameDatumBox {
          position: relative;
          text-align: center;
          .userAvatars {
            text-align: center;
            position: relative;
            width: 120px;
            height: 120px;
            margin: 40px auto 16px;
            cursor: pointer;
            img {
              border-radius: 50%;
            }
          }
          .infoForm {
            .ant-input {
              padding-bottom: 20px;
            }
            .ant-radio-group {
              float: left;
            }
          }
        }
      }
    }
  }
}
</style>
