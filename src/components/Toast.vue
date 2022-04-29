<template>
  <!-- 弹窗 -->
  <div class="toast">
    <div class="content">
      <!-- 提示信息 -->
      <div class="text">{{ content }}</div>
      <!-- 按钮 -->
      <div class="btnGroup">
        <!-- 取消 -->
        <div class="reset" @click="reset">取消</div>
        <!-- 确定 -->
        <div class="promise" @click="promise">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // 父给子传值 接收content
  props: {
    content: {
      type: String,
    },
  },
  setup(props, { emit }) {
    // 子向父传值
    // 取消
    const reset = () => {
      emit("reset");
    };
    // 确定
    const promise = () => {
      emit("promise");
    };
    return {
      reset,
      promise,
    };
  },
};
</script>

<style lang="less" scoped>
.toast {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .content {
    overflow: hidden;
    padding: 20px;
    width: 340px;
    text-align: center;
    border: 1px solid #ffe300;
    border-radius: 6px;
    background: #fff;

    .bar {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-weight: 700;
      background: #ffe300;
    }
    .text {
      padding: 30px;
      color: #ffe300;
      font-size: 18px;
      font-weight: 700;
    }
    .btnGroup {
      display: flex;
      justify-content: center;
      .reset,
      .promise {
        margin: 10px;
        width: 80px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        background: #ffe300;
        border-radius: 5px;
        cursor: pointer;
      }
      .promise {
        background: #ffe300;
      }
    }
  }
}
</style>
