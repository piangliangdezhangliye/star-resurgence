<template>
  <div class="noteManage">
    <AppHeader />
    <userManageCenter></userManageCenter>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import userManageCenter from "@/views/UserManage/components/userManageCenter";
import AppFooter from "@/components/AppFooter";
export default {
  name: "UserManage",
  components: {
    AppHeader,
    AppFooter,
    userManageCenter,
  },
};
</script>

<style lang="less" scoped>
.noteManage {
  background: #f4f4f4;
  margin-top: 50px;
  box-sizing: border-box;
}
</style>
