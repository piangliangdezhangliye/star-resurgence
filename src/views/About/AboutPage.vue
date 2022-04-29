<template>
  <AppHeader />
  <div class="about">
    <XhgcTitle title="星回国潮介绍" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import XhgcTitle from "@/components/library/XhgcTitle";
export default {
  name: "AboutPage",
  components: { XhgcTitle, AppHeader },
};
</script>

<style scoped lang="less">
.about {
  padding-top: 50px;
}
</style>
