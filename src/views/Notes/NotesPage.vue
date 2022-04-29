<template>
  <div class="notes">
    <AppHeader />
    <XhgcTitle title="推荐笔记" />
    <div class="btnbox">
      <a href="/classify/exhibition.html" target="_blank" class="btn3 btn"
        >笔记类型
        <div id="line0" style="position: absolute; inset: 0px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="126"
            height="37"
            style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); left: 0px"
          >
            <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
              Created with Raphaël
            </desc>
            <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0)"></defs>
            <path
              fill="none"
              stroke="#d0d0d0"
              d="M0,5L5,5L5,0L121,0L121,5L126,5L126,32L121,32L121,37L5,37L5,32L0,32L0,5"
              stroke-width="2"
              stroke-dasharray="1000,1000"
              style="
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                stroke-width: 2;
                stroke-dashoffset: 0px;
                stroke-dasharray: 500, 500;
              "
            ></path>
          </svg></div
      ></a>
    </div>
    <NoteList />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import NoteList from "@/components/NoteList";
import XhgcTitle from "@/components/library/XhgcTitle";
export default {
  name: "NotesPage",
  components: { XhgcTitle, NoteList, AppFooter, AppHeader },
};
</script>

<style scoped lang="less">
.notes {
  padding-top: 50px;
  background: url("../../assets/img/note_list_bg.jpg") repeat;
}

.btnbox {
  text-align: center;
  margin-bottom: 39px;
  margin-top: 15px;
  .btn3 {
    position: relative;
    display: inline-block;
    color: #333;
    min-width: 80px;
    text-align: center;
    width: 128px;
    height: 37px;
    font-size: 16px;
    line-height: 37px;
    padding: 0 14px;
  }
}
</style>
