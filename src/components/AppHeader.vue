<template>
  <div class="p-header blk" id="header">
    <div class="x-wrap">
      <div class="logo">
        <a href="/home"><img src="../assets/img/logo_2.png" /></a>
      </div>
      <div class="nav_main">
        <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/notes">发现</router-link></li>
          <li><router-link to="/store">商城</router-link></li>
          <li><router-link to="/Promotion">推广中心</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </div>
      <div class="tools">
        <ul>
          <li
            class="login_1 head"
            @click="goUserCener($store.state.user.profile.id)"
          >
            <img
              v-if="$store.state.user.profile.avatar"
              :src="$store.state.user.profile.avatar"
              alt="头像"
            />
            <img
              v-else
              src="https://img.zcool.cn/community/01be6060dbe4a511013eaf7070a8ae.jpg@160w_160h_1c_1e_1o_100sh.jpg"
              alt=""
            />
          </li>
          <li class="tz">
            <a></a>
            <div class="search" style="display: none">
              <input
                type="text"
                class="kw"
                value="搜索关键词..."
                onfocus="if(this.value=='搜索关键词...'){this.value=''}"
                onblur="if(this.value=''){this.value='搜索关键词...'}"
              />
              <input type="button" class="ok" />
            </div>
          </li>
          <li class="sc">
            <router-link to="/uploading"></router-link>
            <div class="search" style="display: none">
              <input
                type="text"
                class="kw"
                value="搜索关键词..."
                onfocus="if(this.value=='搜索关键词...'){this.value=''}"
                onblur="if(this.value=''){this.value='搜索关键词...'}"
              />
              <input type="button" class="ok" />
            </div>
          </li>
        </ul>
        <a class="menu1"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "AppHeader",
  setup() {
    const router = useRouter();

    const goUserCener = (id) => {
      console.log(id);
      router.push({
        path: `/userCenter/${id}`,
      });
    };
    return {
      router,
      goUserCener,
    };
  },
};
</script>

<style scoped lang="less">
.p-header.blk {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  left: 0;
  top: 0;
  right: 0;
  .tools {
    color: #fff;
    ul {
      .ul {
        border-color: rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
}
.p-header {
  z-index: 9999;
  height: 50px;
  .x-wrap {
    width: auto;
    margin: 0 40px;
    position: relative;
    height: 100%;
    z-index: 5;
  }
  .logo {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    a {
      height: 70%;
      display: block;
      text-decoration: none !important;
      color: inherit;
      img {
        margin-top: 10px;
        height: 70%;
        width: auto;
      }
      .p-header.blk .logo a img.wht {
        display: block;
      }
    }
  }
  .nav_main {
    font-size: 18px;
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    margin-left: -400px;
    ul {
      height: 100%;
      li {
        position: relative;
        float: left;
        line-height: 50px;
        a {
          padding: 0 1.8em;
          height: 100%;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          white-space: nowrap;
          text-decoration: none !important;
          color: inherit;
        }
        &.cur:after {
          content: "";
          border: 6px solid transparent;
          border-bottom-color: rgba(151, 115, 67, 0.7);
          position: absolute;
          left: 50%;
          bottom: 0;
          margin-left: -6px;
        }
      }
    }
  }
  .tools {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    ul {
      height: 100%;
      li {
        width: 76px;
        float: left;
        position: relative;
        font-size: 16px;
        cursor: pointer;
        height: 100%;
        padding: 14px 0;
        box-sizing: border-box;

        &:nth-child(n + 2):before {
          content: "";
          border-left: 1px solid #ccc;
          position: absolute;
          left: -25px;
          top: 30%;
          height: 40%;
        }
      }
      .login_1 {
        img {
          display: inline-block;

          border-radius: 50%;
        }
        &:hover {
          .ul {
            display: block;
          }
        }
      }
      .head {
        padding-top: 10px;
      }
      .tz {
        a {
          display: inline-block;
          width: 24px;
          height: 24px;
          color: #fff;
          background: url(../assets/img/lingdang.png) no-repeat center top/100%
            auto;
        }
      }
      .sc {
        a {
          display: inline-block;
          width: 24px;
          height: 24px;
          color: #fff;
          background: url(../assets/img/shangchuan.png) no-repeat center
            top/100% auto;
        }
        .search.s {
          display: flex !important;
          opacity: 0;
          visibility: visible;
        }
        .search {
          position: absolute;
          right: 25px;
          top: 100%;
          border: 1px solid #ddd;
          width: 240px;
          height: 40px;
          transition: all 0.2s ease-out 0s;
          padding-left: 10px;
          background: #fff;
          border-radius: 3px;
          overflow: hidden;
          margin-top: 5px;
          .kw {
            -webkit-box-flex: 1;
            flex: 1;
            display: block;
            color: #707070;
            font-size: 14px;
          }
          .ok {
            display: block;
            width: 40px;
            background: url(https://img.dpm.org.cn/Public/static/themes/image/header/ico_search.png)
              no-repeat center center;
            cursor: pointer;
            border: 0;
          }
        }
        &:hover {
          .search.s {
            opacity: 1;
          }
        }
      }
      .ul {
        position: absolute;
        width: 100%;
        top: 100%;
        left: 0;
        border: 1px solid #ddd;
        border-radius: 3px;
        display: none;
        text-align: center;
        min-width: 60px;
        background: rgba(255, 255, 255, 0.05);
        span {
          display: block;
          padding: 5px 0;
          font-size: 14px;
          &:nth-child(n + 2) {
            border-top: 1px solid #ddd;
          }
        }
      }
    }
  }
}

.item.s {
  height: 50px;
  transition: height 0.15s ease-out 0s;
}
</style>
