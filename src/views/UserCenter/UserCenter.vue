<template>
  <div>
    <!-- 个人中心页面 -->
    <div class="user">
      <AppHeader />
      <UserMain />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import UserMain from "@/views/UserCenter/components/UserMain";
import AppFooter from "@/components/AppFooter";
export default {
  name: "UserCenter",
  components: {
    AppHeader,
    UserMain,
    AppFooter,
  },
};
</script>

<style lang="less" scoped>
.user {
  background: #f4f4f4;
}
</style>
