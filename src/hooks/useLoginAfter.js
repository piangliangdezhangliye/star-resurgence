import store from "@/store";
import router from "@/router";
import Message from "@/components/library/Message";

export default function useLoginAfter() {
  //注册  登录成功
  function loginSuccess(user) {
    store.commit("user/setUser", {
      // 用户id
      id: user.id,
      // 用户头像
      avatar: user.avatar,
      // 用户昵称
      username: user.username,
      // 用户账号
      phone: user.phone,
    });
    console.log("/home");
    router.push("/home");
  }
  //注册登录失败
  function loginFail() {
    Message({ type: "error", text: "登录失败" });
  }
  return { loginSuccess, loginFail };
}
