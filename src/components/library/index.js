const importFn = require.context("./", false, /\.vue$/);
const keys = importFn.keys();
const library = {
  install(app) {
    keys.forEach((key) => {
      // 动态导入组件
      const component = importFn(key).default;
      // 注册组件
      app.component(component.name, component);
    });
  },
};
export default library;
