import axios from "axios";
import store from "@/store";
import router from "@/router";

const baseURL = "http://49.232.105.126:10050/china";

//请求拦截含token  axios实例对象
const instanceWithToken = axios.create({ baseURL });
//请求拦截不含token  axios实例对象
const instanceWithoutToken = axios.create({ baseURL });

//请求拦截
instanceWithToken.interceptors.request.use((config) => {
  const token = store.state.user.profile.token;
  //判断是否有token
  if (token) {
    //把token存到请求头中
    config.headers.Authorization = `Bearer ${token}`;
  }
  //返回  如果不返回相当于没修改
  return config;
});

//响应拦截
instanceWithToken.interceptors.response.use(
  (response) => {
    //只把响应的数据返回
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      router
        .push("/Login")
        .then(console.log("跳转成功"))
        .catch(console.log("跳转失败"));
      store.commit("user/setUser", {});
    }
    return Promise.reject(error);
  }
);

//不包含token响应拦截
instanceWithoutToken.interceptors.response.use((response) => response.data);

//生成请求配置函数
function generateRequestConfig(url, methods, data) {
  return {
    url,
    method: methods,
    [methods.toLowerCase() === "get" ? "params" : "data"]: data,
  };
}

//发送请求
export function requestWithToken(url, methods, data) {
  return instanceWithToken(generateRequestConfig(url, methods, data));
}

// 不含tolen 发送请求
export function requestWithoutToken(url, methods, data) {
  return instanceWithoutToken(generateRequestConfig(url, methods, data));
}
