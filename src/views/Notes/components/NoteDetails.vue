<template>
  <AppHeader />
  <NoteDetailsAttention :data="data" />
  <NoteDetailsComment :dataAuthor="data" />
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import NoteDetailsAttention from "@/views/Notes/components/NoteDetailsAttention";
import NoteDetailsComment from "@/views/Notes/components/NoteDetailsComment";
import { articleDetailsApi } from "@/api/note";
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  name: "NoteDetails",
  components: {
    NoteDetailsComment,
    NoteDetailsAttention,
    AppFooter,
    AppHeader,
  },
  setup() {
    //  获取路由中的id
    const route = useRoute();
    //文章信息
    const data = ref();
    articleDetailsApi(route.params.id).then((res) => {
      if (res.code === 20000) {
        data.value = res.data;
      }
      // console.log(data.value);
    });
    return {
      data,
    };
  },
};
</script>

<style scoped lang="less"></style>
