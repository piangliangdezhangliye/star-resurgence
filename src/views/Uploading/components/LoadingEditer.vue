<template>
  <div id="editor"></div>
</template>
<script lang="ts">
//在这里申明使用ts进行代码的校验
import WangEditor from "wangeditor"; //引入wangeditor文件夹
import {
  defineComponent,
  onMounted,
  PropType,
  ref,
  toRefs,
  watch,
  onBeforeUnmount,
} from "vue";
export default defineComponent({
  emits: ["passContent"],
  props: {
    isClear: {
      type: Boolean as PropType<boolean>,
    },
  },
  setup(props, { emit }) {
    let instance: any = "";
    let editorContent = ref<string>("");
    let { isClear } = toRefs(props);
    watch(isClear, (newValue, oldValue) => {
      if (newValue) {
        instance.txt.clear();
        emit("passContent", editorContent.value);
      }
    });
    onMounted(() => {
      instance = new WangEditor("#editor");
      instance.config.height = 300;
      instance.config.showFullScreen = false;
      instance.config.menus = [
        "head",
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "indent",
        "lineHeight",
        "foreColor",
        "list",
        "justify",
      ];
      // 配置 onchange 回调函数
      instance.config.onchange = function (newHtml: string): void {
        editorContent.value = instance.txt.text();
        emit("passContent", editorContent.value);
      };
      instance.config.onchangeTimeout = 1000; // 修改为 500ms
      instance.create();
    });
    // 在页面将要卸载的时候，销毁我们创建的实例
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    return {
      instance,
      isClear,
    };
  },
});
</script>
