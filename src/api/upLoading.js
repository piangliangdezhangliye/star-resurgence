import { requestWithoutToken } from "@/utils";
//上传文章封面图片
import axios from "axios";

//上传图片
export function upLoading(file) {
  return axios.post("http://49.232.105.126:10050/china/oss/file/upload", file);
}

//获取文章类型
export function labelApi() {
  return requestWithoutToken("label/findAll", "get");
}

//发表文章
export function publish(data) {
  return requestWithoutToken("/note/addNote", "post", data);
}
