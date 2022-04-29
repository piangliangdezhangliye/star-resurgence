<template>
  <div class="title1">
    <span class="tit-span"
      ><img
        src="https://img.dpm.org.cn/Public/static/themes/image/public-icon3.png" /></span
    >{{ title
    }}<span class="tit-span"
      ><img
        src="https://img.dpm.org.cn/Public/static/themes/image/public-icon4.png"
    /></span>
  </div>
</template>

<script>
export default {
  name: "XhgcTitle",
  props: ["title"],
};
</script>

<style scoped lang="less">
.title1 {
  text-align: center;
  height: 65px;
  line-height: 65px;
  font-size: 26px;
  font-weight: normal;
  color: #474747;
  margin: 20px 0;
  .tit-span {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    line-height: 1;
    img {
      height: 32px;
      width: 22px;
      max-width: 100px;
    }
  }
}
</style>
