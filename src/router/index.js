import { createRouter, createWebHashHistory } from "vue-router";
import authGuard from "@/router/authGuard";
import LoginPage from "../views/Login/LoginPage";
import HomePage from "../views/Home/HomePage";
import UpLoading from "../views/Uploading/UpLoadingPage";
import NotesPage from "../views/Notes/NotesPage";
import NoteDetails from "../views/Notes/components/NoteDetails";
import StorePage from "../views/Store/StorePage";
import AboutPage from "../views/About/AboutPage";
import UserCenter from "../views/UserCenter/UserCenter.vue";
import UserChange from "../views/UserChange/UserChange.vue";
import NoteManage from "../views/NoteManage/NoteManage";
import Promotion from "@/views/Promotion/Promotion";
import UserManage from "@/views/UserManage/UserManage";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  //首页
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  //登录注册
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  //上传作品
  {
    path: "/upLoading",
    name: "UpLoading",
    component: UpLoading,
  },
  //笔记
  {
    path: "/notes",
    name: "NotesPage",
    component: NotesPage,
    children: [],
  },
  //  笔记详情页
  {
    path: "/noteDetails/:id",
    name: "NoteDetails",
    component: NoteDetails,
  },
  //  商城
  {
    path: "/store",
    name: "StorePage",
    component: StorePage,
  },
  //  关于我们
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  // 个人中心
  {
    path: "/userCenter/:id",
    name: "UserCenter",
    component: UserCenter,
  },
  //创作者服务中心-笔记管理
  {
    path: "/userCenter/:id/noteManage",
    name: "NoteManage",
    component: NoteManage,
  },
  //创作者服务中心-用户管理
  {
    path: "/userCenter/:id/userManage",
    name: "UserManage",
    component: UserManage,
  },
  //个人中心-修改资料
  {
    path: "/userCenter/:id/UserChange",
    name: "UserChange",
    component: UserChange,
  },

  //创作者服务中心-推广中心
  {
    path: "/Promotion",
    name: "Promotion",
    component: Promotion,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(authGuard);
export default router;
