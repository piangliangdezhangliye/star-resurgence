import { requestWithoutToken } from "@/utils";
// 用户名登录
export function userLogin({ username, password }) {
  console.log(username, password);
  return requestWithoutToken("/user/login", "post", { username, password });
}

//注册发送验证码
export function userRegisterCode(mobile) {
  return requestWithoutToken(`/user/code/${mobile}`, "get");
}

// 用户注册
export function userRegister(req) {
  console.log(req);
  return requestWithoutToken(`/user/add`, "post", req);
}
//获取用户信息
export function getUserInfo(id) {
  // console.log(id);
  return requestWithoutToken(`/user/findById/${id}`, "get");
}

//获取用户创作的笔记列表
export function getUserNote(id) {
  return requestWithoutToken(`/note/findByUid/${id}`, "get");
}

//获取用户所喜欢的笔记列表
export function getUserLike(id) {
  // console.log(id);
  return requestWithoutToken(`/userNote/findByUid/${id}`, "get");
}

//获取用户所收藏的笔记列表
export function getUserCol(id) {
  // console.log(id);
  return requestWithoutToken(`/userNote/findCollectNoteByUid/${id}`, "get");
}

//删除用户创作的文章
export function delUserNote(id) {
  return requestWithoutToken(`note/deleteNote/${id}`, "delete");
}

//删除用户喜欢的文章
export function delLikeList(req) {
  return requestWithoutToken(`/userNote/deleteLikeNote`, "delete", req);
}

//删除用户收藏的文章
export function delColList(req) {
  return requestWithoutToken(`/userNote/deleteCollectNote`, "delete", req);
}

//获取用户粉丝列表
export function getUserFans(id) {
  return requestWithoutToken(`fans/findAllFans/${id}`, "get");
}
//获取用户关注列表
export function getUserAttensition(id) {
  return requestWithoutToken(`fans/findAllAttention/${id}`, "get");
}
//修改用户信息
export function editUserInfo(req){
  return requestWithoutToken(`user/editUser`,"put",req)
}
