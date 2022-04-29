<template>
  <div class="store_page">
    <AppHeader />
    <!--    <XhgcTitle title="商城" />-->
    <StoreCommodity />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import StoreCommodity from "@/views/Store/components/StoreCommodity";
export default {
  name: "StorePage",
  components: { StoreCommodity, AppHeader },
};
</script>

<style scoped>
.store_page {
  height: 3020px;
  /*padding-top: 50px;*/
  /*https://img.dpm.org.cn/Public/static/themes/image/lyc/game1.jpg*/
  /*background: url("https://img.dpm.org.cn/Public/static/themes/image/lyc/game1.jpg");*/
  background: #fdf6da;
}
</style>
