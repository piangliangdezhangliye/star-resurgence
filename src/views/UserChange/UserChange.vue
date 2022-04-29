<template>
  <div class="userChange">
    <AppHeader />
    <UserChangeMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import UserChangeMain from "@/views/UserChange/components/UserChangeMain";
import AppFooter from "@/components/AppFooter";
export default {
  name: "UserChange",
  components: {
    AppHeader,
    UserChangeMain,
    AppFooter,
  },
};
</script>

<style lang="less" scoped>
.userChange {
  background: #f4f4f4;
  padding-top: 60px;
  box-sizing: border-box;
}
</style>
