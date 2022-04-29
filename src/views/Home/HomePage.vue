<template>
  <div id="home">
    <AppHeader />
    <HomeBanner />
    <HomeModule />
    <AppFooter />
  </div>
</template>

<script>
import HomeBanner from "@/views/Home/components/HomeBanner";
import HomeModule from "@/views/Home/components/HomeModule";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: "HomePage",
  components: { AppFooter, AppHeader, HomeModule, HomeBanner },
};
</script>

<style scoped lang="less">
#home {
  background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/game1.jpg);
  overflow: hidden;
}
</style>
