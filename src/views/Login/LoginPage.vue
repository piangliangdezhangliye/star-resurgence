<template>
  <div id="login">
    <LoginForm />
  </div>
</template>

<script>
// import LoginHeader from "@/views/Login/components/LoginHeader";
import LoginForm from "@/views/Login/components/LoginForm";
export default {
  name: "LoginPage",
  components: { LoginForm },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login_bg.png") no-repeat;
  background-size: 100%;
  padding-top: 200px;
}
</style>
