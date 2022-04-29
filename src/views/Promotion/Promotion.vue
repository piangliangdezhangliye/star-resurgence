<template>
  <div class="promotion">
    <AppHeader />
    <PromotionMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import PromotionMain from "@/views/Promotion/components/PromotionMain";
export default {
  name: "Promotion",
  components: {
    AppHeader,
    AppFooter,
    PromotionMain,
  },
};
</script>

<style lang="less" scoped>
.promotion {
  overflow: hidden;
}
</style>
