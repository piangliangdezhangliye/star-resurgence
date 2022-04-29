<template>
  <div class="noteManage">
    <AppHeader />
    <manageCenter></manageCenter>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import manageCenter from "@/views/NoteManage/components/manageCenter";
import AppFooter from "@/components/AppFooter";
export default {
  name: "NoteManage",
  components: {
    AppHeader,
    AppFooter,
    manageCenter,
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
