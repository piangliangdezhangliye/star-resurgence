<template>
  <div class="centerSectionWrap">
    <div class="workNull">
      <div class="workNullInner">
        <span class="nullImages"></span>
        <div class="workNullTips">
          <p class="subjectTit">{{ content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "workNull",
  props: {
    content: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.centerSectionWrap {
  margin: 20px auto 0;
  width: 1130px;
  background: #ffffff;
  -webkit-border-radius: 4px;
  overflow: hidden;
  .workNull {
    max-width: 1130px;
    min-height: 400px;
    margin: 20px auto 0;
    width: 100%;
    text-align: center;
    -webkit-border-radius: 4px;
    background: #fff;
    box-sizing: border-box;
    .workNullInner {
      padding-top: 113.25px;
      //padding: 40px 0;
      .nullImages {
        display: inline-block;
        width: 347px;
        height: 209px;
        background-size: 347px;
        vertical-align: middle;
        background: url("../../../assets/img/nullImage.png") no-repeat;
      }
      .subjectTit {
        margin-top: 10px;
        color: #444;
        font-size: 16px;
      }
    }
  }
}
</style>
