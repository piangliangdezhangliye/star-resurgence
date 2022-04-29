<template>
  <div class="xtx-checkbox" @click="toggle">
    <i v-if="isChecked" class="iconfont icon-checked" @click="!isChecked"></i>
    <i v-else class="iconfont icon-unchecked"></i>
    <span><slot /></span>
  </div>
</template>
<script>
import { unref } from "vue";
import { useVModel } from "@vueuse/core";

export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isChecked = useVModel(props, "modelValue", emit);
    const toggle = () => {
      isChecked.value = !unref(isChecked);
    };
    return {
      isChecked,
      toggle,
    };
  },
};
</script>
<style lang="less" scoped>
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;

  .icon-checked {
    //xtxColor
    color: #42b983;

    ~ span {
      //xtxColor
      color: #42b983;
    }
  }

  i {
    position: relative;
    top: 1px;
  }

  span {
    margin-left: 2px;
  }
}
</style>
