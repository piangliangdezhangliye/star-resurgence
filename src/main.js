import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";
import Antd from "ant-design-vue/es";
import "ant-design-vue/dist/antd.less";
import "normalize.css";

import "@/assets/styles/common.less";
import library from "@/components/library";
import CKEditor from "@ckeditor/ckeditor5-vue";
createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(library)
  .use(CKEditor)
  .mount("#app");
