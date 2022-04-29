<template>
  <div class="account-box">
    <div class="form">
      <div class="login_title">
        <img src="../../../assets/img/logo.png" alt="" />
      </div>
      <!-- 账户登录 -->
      <form v-if="!isRegLogin" @submit="onAccountForm">
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input
              type="text"
              placeholder="请输入用户名"
              v-model="accountField"
            />
          </div>
          <div class="error" v-if="accountError">
            <i class="iconfont icon-warning"></i>{{ accountError }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="passwordField"
            />
          </div>
          <div class="error" v-if="passwordError">
            <i class="iconfont icon-warning"></i>{{ passwordError }}
          </div>
        </div>
        <div class="form-item">
          <div class="agree">
            <XhgcCheckbox v-model="isAgreeField" />
            <span>我已同意</span>
            <a href="javascript:">《隐私条款》</a>
            <span>和</span>
            <a href="javascript:">《服务条款》</a>
          </div>
          <div class="error" v-if="isAgreeError">
            <i class="iconfont icon-warning"></i>{{ isAgreeError }}
          </div>
        </div>
        <button type="submit" class="btn">登录</button>
        <router-link to="" class="forget-password" @click="isRegLogin = true"
          >没有账号？</router-link
        >
      </form>
      <!--  注册    -->
      <form v-if="isRegLogin" @submit="onRegisterForm">
        <div class="form-item sexItemInput">
          <div class="input sexInput">
            <a-radio-group name="radioGroup" v-model:value="value">
              <a-radio value="0">女</a-radio>
              <a-radio value="1">男</a-radio>
            </a-radio-group>
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input
              type="text"
              placeholder="请输入用户名"
              v-model="rAccountField"
            />
          </div>
          <div class="error" v-if="rAccountError">
            <i class="iconfont icon-warning"></i>{{ rAccountError }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="rPasswordField"
            />
          </div>
          <div class="error" v-if="rPasswordError">
            <i class="iconfont icon-warning"></i>{{ rPasswordError }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <a-space direction="vertical">
              <a-date-picker
                v-model:value="dataValue"
                placeholder="请选择您的出生日期"
                style="width: 360px; height: 50px"
              />
            </a-space>
          </div>
          <div class="error" v-if="passwordError">
            <i class="iconfont icon-warning"></i>{{ passwordError }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input
              type="text"
              placeholder="请输入手机号"
              v-model="mobileField"
            />
          </div>
          <div class="error" v-if="mobileError">
            <i class="iconfont icon-warning"></i>{{ mobileError }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-code"></i>
            <input type="text" placeholder="请输入验证码" v-model="codeField" />
            <span class="code" @click="getCode" :class="{ disabled: isActive }">
              {{ isActive ? `剩余${count}秒` : "发送验证码" }}
            </span>
          </div>
          <div class="error" v-if="codeError">
            <i class="iconfont icon-warning"></i>{{ codeError }}
          </div>
        </div>
        <button type="submit" class="btn">注册</button>
        <router-link to="" class="forget-password" @click="isRegLogin = false"
          >已有账号？</router-link
        >
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

import {
  username,
  isAgree,
  password,
  code,
  mobile,
} from "@/utils/vee-validate-schema";
import { useField, useForm } from "vee-validate";
import { userLogin, userRegister, userRegisterCode } from "@/api/user";
import XhgcCheckbox from "@/components/library/XhgcCheckbox";
import router from "@/router";
import Message from "@/components/library/Message";
import useCountDown from "@/hooks/useCountDown";
import useLoginAfter from "@/hooks/useLoginAfter";
export default {
  name: "LoginForm",
  components: { XhgcCheckbox },
  setup() {
    const isRegLogin = ref(false);
    const currentTab = ref("accountForm");
    const currentDate = ref();
    const dataValue = ref();
    const value = ref(0);
    //账号登录
    const { handleAccountSubmit, ...accountFormValidate } =
      useAccountFormValidate();
    //点击登录按钮
    const { loginSuccess } = useLoginAfter();
    const onAccountForm = handleAccountSubmit(({ username, password }) => {
      userLogin({ username, password })
        .then((data) => {
          console.log(data);
          if (data.code === 20000) {
            loginSuccess(data.data);
            Message({ type: "success", text: data.message });
          } else {
            console.log(3333);
            Message({ type: "error", text: data.message });
          }
        })
        .catch(() => {
          Message({ type: "error", text: "密码或用户名错误" });
        });
    });
    //用户注册
    const {
      handleRegisterFormSubmit,
      mobileIsValidate,
      ...registerFormValidate
    } = useRegisterFormValidate();
    const { count, start, isActive } = useCountDown();
    //获取验证码
    const getCode = async () => {
      const { isvalid, mobile } = await mobileIsValidate();
      //如果用户输入手机号
      if (isvalid && !isActive.value) {
        try {
          await userRegisterCode(mobile);
          Message({ type: "success", text: "获取验证码成功" });
          start(60);
        } catch (err) {
          Message({ type: "error", text: "获取验证码失败" });
        }
      }
    };
    //点击注册
    const onRegisterForm = handleRegisterFormSubmit(
      ({ username, password, mobile, code }) => {
        let obj = {
          username,
          password,
          sex: value.value,
          birthday: dataValue.value,
          phone: mobile,
          code,
        };
        console.log(obj);
        userRegister(obj).then((data) => {
          if (data.code === 20000) {
            router.push("/");
            Message({ type: "success", text: data.message });
          } else {
            Message({ type: "error", text: data.message });
          }
        });
      }
    );
    return {
      isRegLogin,
      currentTab,
      currentDate,
      dataValue,
      onAccountForm,
      count,
      isActive,
      getCode,
      ...accountFormValidate,
      value,
      onRegisterForm,
      ...registerFormValidate,
    };
  },
};

//账号登录
function useAccountFormValidate() {
  //定义验证规则
  const { handleSubmit: handleAccountSubmit } = useForm({
    validationSchema: {
      username,
      password,
      isAgree,
    },
  });
  //对用户名  密码进行验证
  const { value: accountField, errorMessage: accountError } =
    useField("username");
  const { value: passwordField, errorMessage: passwordError } =
    useField("password");
  const { value: isAgreeField, errorMessage: isAgreeError } =
    useField("isAgree");
  return {
    accountField,
    accountError,
    passwordField,
    passwordError,
    isAgreeField,
    isAgreeError,
    handleAccountSubmit,
  };
}
//注册登录
function useRegisterFormValidate() {
  //定义验证规则
  const { handleSubmit: handleRegisterFormSubmit } = useForm({
    validationSchema: {
      username,
      password,
      mobile,
      code,
    },
  });
  //对用户名  密码进行验证
  const { value: rAccountField, errorMessage: rAccountError } =
    useField("username");
  const { value: rPasswordField, errorMessage: rPasswordError } =
    useField("password");
  const {
    value: mobileField,
    errorMessage: mobileError,
    validate: mobileValidate,
  } = useField("mobile");
  const { value: codeField, errorMessage: codeError } = useField("code");
  //单独验证用户是否输入手机号
  const mobileIsValidate = async () => {
    const { valid } = await mobileValidate();
    return { isvalid: valid, mobile: mobileField.value };
  };
  return {
    rAccountField,
    rAccountError,
    rPasswordField,
    rPasswordError,
    mobileField,
    mobileError,
    mobileIsValidate,
    codeField,
    codeError,
    handleRegisterFormSubmit,
  };
}
</script>
<style lang="less">
.login_title {
  height: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.router-link-active {
  text-align: center;
}
.ant-input {
  height: 50px;
}
.account-box {
  width: 400px;
  border-radius: 16px;
  background-color: #fff;
  margin: auto;
  .toggle {
    padding: 15px 40px;
    text-align: center;
    button {
      color: @xhgcColor;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
      padding: 10px 10px;
      i {
        font-size: 18px;
      }
    }
  }
  .form {
    padding: 20px 20px;
    border-radius: 10px;
    background-color: #fdf0d0;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 50px;
        > i {
          width: 34px;
          height: 50px;
          color: #95c1c0;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 50px;
          font-size: 20px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 50px;
          line-height: 50px;
          width: 100%;
          &.error {
            //priceColor
            border-color: #42b983;
          }
          &.active,
          &:focus {
            //xtxColor
            border-color: #27ba9bff;
          }
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        //priceColor
        color: red;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .btn {
      display: block;
      width: 150px;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      //xtxColor
      background: #95c1c0;
      border: none;
      margin: auto;
      &.disabled {
        background: #cfcdcd;
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .forget-password {
      display: block;
      margin-top: 20px;
    }
    .sexItemInput {
      margin-bottom: 10px;
    }
    .sexInput {
      height: 34px !important;
    }
    .code {
      position: absolute;
      right: 1px;
      top: 1px;
      text-align: center;
      line-height: 50px;
      font-size: 14px;
      background: #f5f5f5;
      color: #666;
      width: 90px;
      height: 50px;
      cursor: pointer;
    }
    .code.disabled {
      cursor: wait;
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
