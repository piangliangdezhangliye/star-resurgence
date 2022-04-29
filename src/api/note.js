import { requestWithoutToken } from "@/utils";

//按分类查询文章
export function classArticleApi(id) {
  return requestWithoutToken(`/note/findByLid/${id}`, "get");
}

//查看文章详情页
export function articleDetailsApi(id) {
  return requestWithoutToken(`/note/findByLid2/${id}`, "get");
}

//查看当前用户关注的作者
export function attentionAuthorListApi(id) {
  return requestWithoutToken(`/fans/findAllAttention/${id}`, "get");
}

//关注作者
export function followApi(data) {
  return requestWithoutToken(`/fans/addFans`, "post", data);
}

//取消关注
export function unFollowApi(data) {
  return requestWithoutToken(`/fans/deleteFans`, "delete", data);
}

//渲染评论区
export function commentsApi(id) {
  console.log(id);
  return requestWithoutToken(`/comment/findAllByNid/${id}`, "get");
}

//发表评论
export function addCommentsApi(data) {
  return requestWithoutToken(`/comment/addComment`, "post", data);
}

//删除自己发表的评论
export function delCommentsApi(data) {
  return requestWithoutToken(`/comment/deleteByUid`, "delete", data);
}

//查看用户是否收藏当前文章
export function findCollectApi(id) {
  return requestWithoutToken(`/userNote/findCollectNoteByUid/${id}`, "get");
}

//用户收藏文章
export function addCollectApi(data) {
  return requestWithoutToken(`/userNote/addCollectNote`, "post", data);
}

//删除用户收藏的文章
export function delColList(req) {
  return requestWithoutToken(`/userNote/deleteCollectNote`, "delete", req);
}

//查看用户是否点赞当前文章
export function findLikeApi(id) {
  return requestWithoutToken(`/userNote/findByUid/${id}`, "get");
}

//用户收藏文章
export function addLiketApi(data) {
  return requestWithoutToken(`/userNote/addLikeNote`, "post", data);
}

//删除用户喜欢的文章
export function delLikeList(req) {
  return requestWithoutToken(`/userNote/deleteLikeNote`, "delete", req);
}
