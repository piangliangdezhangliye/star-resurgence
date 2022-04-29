<template>
  <div class="container">
    <div class="comment-module article-comments">
      <!--写评论-->
      <div id="detail-add-comment" class="editcomment js-common-comment-wrap">
        <div class="pinlunt">
          <textarea
            type="text"
            id="comment-add-textarea"
            class="textarea-style commentbig textarea"
            style="height: 60px; padding-right: 60px"
            placeholder="说点什么..."
            v-model="commentContnet"
          ></textarea
          ><span class="count">2000</span>
        </div>
        <div class="expression-box">
          <a href="javascript:;" class="biaoqing">添加表情</a>
          <button
            v-if="commentContnet == ''"
            class="btn-current-middle btn-disabled add-comment-btn"
          >
            评论
          </button>
          <button
            v-else
            class="btn-current-middle btn-disabled add-comment-btn"
            style="background: #ffe300; color: #444444"
            @click="publishBtn"
          >
            评论
          </button>
        </div>
      </div>
      <!-- 夸夸 -->
      <div class="kuak-module zc-hide" id="kuak">
        <div class="icon-great kuak-guide js-empty-kua" @click="popupBoast">
          喜欢TA的作品吗？喜欢就快来夸夸TA吧！
        </div>
      </div>
      <!--      夸夸弹出框-->
      <div
        v-if="boast"
        class="pop-up kuak-modal bg-box-radius zc-hide"
        style="display: block"
      >
        <h4 class="f-16">夸夸</h4>
        <div class="bc-f4">
          <p class="f-18 kuak-text" data-id="90">
            {{ data[currentIndex] }}
          </p>
          <input
            type="button"
            value="换一换"
            class="btn-default-secondary switch-btn"
            @click="boastChange"
          />
        </div>
        <input
          type="button"
          value="夸夸TA"
          class="btn-default-main btn-current-middle mt-30"
          @click="addComment"
        />
        <i class="pop-close" @click="closeBoast"></i>
      </div>
      <!--      无评论时-->
      <div
        v-if="commentsList.length == 0"
        id="detail-empty-comment"
        class="allcomment-empy"
      >
        <p class="link js-write-comments">成为第一个评论的人</p>
      </div>
      <!--      评论区-->
      <div v-else id="detail-comment-content">
        <div id="detail-all-comment-title">
          <p class="commenttxt">
            全部评论<span class="ml-10 c-bbb">{{ commentsList.length }}</span>
          </p>
        </div>
        <ul class="commentcon">
          <li class="comment-list" v-for="item in commentsList" :key="item.id">
            <div class="comment-list-item">
              <!--头像-->
              <div class="avatar-container-48 absolute">
                <a href="#" class="userimg">
                  <img :src="item.user.avatar" alt="Z95438019" />
                </a>
              </div>
              <!--用户名-->
              <div>
                <a href="#" title="Z95438019" class="link fwt-800">
                  {{ item.user.username }}</a
                >
              </div>
              <!--内容-->
              <p class="commoncon c-666">{{ item.content }}</p>
              <!--时间-->
              <div class="flex-between mt-10 js-data-box">
                <span
                  class="c-bbb js-create-time"
                  title="2021-10-14 11:02:28"
                  >{{ item.startTime.split("T")[0] }}</span
                >
                <div>
                  <!--举报-->
                  <span class="report comment-report" @click="delBtn(item.id,item.nid,item.user)">
                    删除
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--  夸夸弹出框遮罩-->
  <div
    v-if="boast"
    class="shade hide project-view"
    style="display: block"
  ></div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { addCommentsApi, commentsApi,delCommentsApi  } from "@/api/note";
import { useStore } from "vuex";
import Message from "@/components/library/Message";

export default {
  name: "NoteDetailsComment",
  props: {
    dataAuthor: {
      type: Object,
      default: () => {},
      required: true,
    },

  },
  setup() {
    const boast = ref(false);
    const data = ref([
      "看看大佬再看看自己的作品，我emo了",
      "这是，人类的洗眼液？",
      "给别人条活路吧，别发车了，强到窒息了",
      "这句大佬，我先叫为敬",
      "纵横站酷，你才华猖狂！",
      "今天也为大佬的作品360度原地跳出爱的华尔兹！",
      "会做设计的话，你就多做点！",
      "太强了，默默的夸夸都不敢留言～",
      "感谢作者精妙绝伦的作品！",
      "YYDS!",
      "大佬还是一如既往的稳",
      "多多评论大佬也会变成大佬",
      "朋友，稍微有点才华就行了，倒不必如此满分！",
      "哪来的绝世神作",
      "太牛了，恐龙灭绝一定是因为它们手太短没法为你鼓掌",
      "给大佬跪了，不愧是你！",
      "追不上你，是因为我的电脑不够好吗？",
      "同一时间 你发表作品 我确认脉搏",
      "快门一次，心动千次",
      "实名羡慕你这该死的才华！",
    ]);
    const currentIndex = ref(0);
    //点击换一换
    const boastChange = () => {
      currentIndex.value += 1;
      if (currentIndex.value >= 20) {
        currentIndex.value = 0;
      }
      // console.log(data.value[currentIndex.value]);
    };
    //关闭弹框
    const closeBoast = () => {
      boast.value = false;
      // commentContnet.value = data.value[currentIndex.value];
    };
    const addComment=()=>{
      boast.value=false;
      commentContnet.value = data.value[currentIndex.value];
      publishBtn();
    }
    //弹出夸夸框
    const popupBoast = () => {
      boast.value = true;
    };
    //评论区列表
    const route = useRoute();
    const store = useStore();
    //评论列表数据
    const commentsList = ref([]);
    //渲染评论区
    const comments = () => {
      commentsApi(route.params.id).then((res) => {
        // console.log(res);
        if (res.code === 20000) {
          commentsList.value = res.data.reverse();
          // console.log(res.data);
        }
      });
    };
    comments();
    //用户评论
    const commentContnet = ref("");
    //用户发表评论
    const publishBtn = () => {
      let data = {
        uid: store.state.user.profile.id,
        nid: route.params.id,
        content: commentContnet.value,
      };
      addCommentsApi(data).then((res) => {
        if (res.code === 20000) {
          Message({ type: "success", text: res.message });
          commentContnet.value = "";
          comments();
        }
      });
    };
    //用户删除自己发表的评论
    const delBtn = (id,nid,user) => {
      let data = {
        id: id,
        nid: nid,
        uid:store.state.user.profile.id ,
        user: user
      };
        delCommentsApi(data).then((res) => {
          console.log(res);
          if (res.code == 20000) {
            comments();
          }
          Message({ type: "success", text: res.message });
          console.log(1111);
        });
    };

    return {
      boast,
      data,
      currentIndex,
      boastChange,
      closeBoast,
      popupBoast,
      commentsList,
      commentContnet,
      publishBtn,
      delBtn,
      addComment,

    };
  },
};
</script>

<style scoped lang="less">
.comment-module {
  .editcomment {
    padding: 30px;
  }
  .pinlunt {
    position: relative;
    textarea:focus {
      background: #fff;
      color: #444;
      outline: none;
    }
  }
  .textarea-style {
    display: block;
    width: 100%;
    color: #666;
    font-size: 14px;
    max-height: 134px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 4px;
    background: #f4f4f4;
    padding: 10px 20px;
    overflow: hidden;
    resize: none;
  }
  .count {
    position: absolute;
    right: 20px;
    bottom: 15px;
    color: #999;
    line-height: 1;
    font-size: 12px;
    font-style: normal;
  }
  .expression-box {
    height: 38px;
    line-height: 18px;
    margin-top: 15px;
    font-size: 12px;
    color: #666;
    .biaoqing {
      float: left;
      color: #666;
      padding-left: 30px;
      background-image: url(https://static.zcool.cn/git_z/build/images/svg/biaoqing.svg?v=1);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 18px 18px;
      cursor: pointer;
    }
    a {
      display: inline-block;
      vertical-align: top;
    }
    .add-comment-btn {
      float: right;
      height: 36px;
      font-size: 14px;
      min-width: 100px;
      line-height: 36px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .btn-disabled {
      color: #bbb;
      text-align: center;
      background: #eee;
      border: 1px solid #eee;
      border-radius: 4px;
      cursor: default;
      //pointer-events: none;
    }
  }
  .kuak-module {
    display: block;
    padding: 30px;
    border-top: 1px solid #eee;
    .kuak-guide {
      width: 315px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      cursor: pointer;
      margin: 0 auto;
      padding-left: 40px;
      border-radius: 20px;
      box-sizing: border-box;
      background-color: #444;
      background-position: 5px center;
    }
    .icon-great {
      background-image: url(https://static.zcool.cn/git_z/build/images/svg/icon-great.svg);
      background-repeat: no-repeat;
    }
  }
  .kuak-modal {
    width: 440px;
    padding: 20px 30px 30px;
    text-align: center;
    left: 50%;
    margin-left: -220px;
    margin-top: -152px;
    box-sizing: border-box;
    &:before {
      content: "";
      width: 66px;
      height: 66px;
      background: url(https://static.zcool.cn/git_z/build/images/svg/icon-great.svg)
        center center no-repeat #fff;
      background-size: 56px 56px;
      position: absolute;
      top: -33px;
      left: 50%;
      margin-left: -33px;
      border-radius: 50%;
    }
    h4 {
      margin-top: 18px;
    }
    .f-16 {
      font-size: 16px;
    }
    & > div {
      width: 100%;
      min-height: 102px;
      padding: 15px 20px 20px;
      margin-top: 20px;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .bc-f4 {
      background-color: #f4f4f4;
    }
    .kuak-text {
      height: 52px;
      line-height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      word-break: break-all;
    }
    .f-18 {
      font-size: 18px;
    }
    .btn-default-secondary {
      color: #666;
      text-align: center;
      border: 1px solid #bbb;
      border-radius: 4px;
      background: #fff;
      cursor: pointer;
    }
    .switch-btn {
      width: 66px;
      height: 26px;
      font-size: 12px;
      margin-top: 15px;
      border-radius: 15px;
      &:hover {
        color: #d36f16;
        border: 1px solid #d36f16;
      }
    }
    .btn-current-middle {
      min-width: 118px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .btn-current-middle,
    .btn-current-small {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
    }
    .btn-default-main {
      color: #444;
      text-align: center;
      border: 1px solid #ffe300;
      border-radius: 4px;
      background: #ffe300;
      cursor: pointer;
    }
    .mt-30 {
      margin-top: 30px;
    }
    .pop-close,
    .small-close {
      position: absolute;
      right: 30px;
      top: 20px;
      display: inline-block;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      background: url(https://static.zcool.cn/git_z/build/images/common/guanbi.svg?v=1)
        no-repeat;
      cursor: pointer;
      zoom: 1;
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: -28px;
        left: -320px;
        width: 298px;
        height: 83px;
        margin: auto;
        background: url(https://static.zcool.cn/git_z/build/images/kua-ribbon.png)
          no-repeat;
        background-size: 298px auto;
      }
    }
  }
  .pop-up {
    position: fixed;
    top: 50%;
    color: #444;
    border-radius: 4px;
    box-shadow: 0 0 6px rgb(0 0 0 / 20%);
    background: #fff;
    z-index: 16;
  }
  //无评论时
  .allcomment-empy {
    color: #282828;
    font-size: 14px;
    min-height: 280px;
    text-align: center;
    padding-top: 210px;
    box-sizing: border-box;
    border-top: 1px solid #eeeeee;
    background: #fff url(https://static.zcool.cn/git_z/z/images/qiangsafa.png)
      no-repeat center 50px;
    background-size: 190px auto;
  }
  //  评论区
  #detail-comment-content {
    position: relative;
    padding-top: 30px;
    .commenttxt {
      color: #333;
      padding: 0 30px;
    }
    .c-bbb {
      color: #bbb;
    }
    .ml-10 {
      margin-left: 10px;
    }
    .commentcon {
      padding: 0 30px;
      li {
        padding: 30px 0;
        border-bottom: 1px solid #f1f1f1;
        .comment-list-item {
          position: relative;
          padding-left: 70px;
        }
        .absolute {
          position: absolute;
          left: 0;
          top: 0;
          width: 48px;
          .userimg {
            width: 48px;
            height: 48px;
            display: inline-block;
            vertical-align: middle;
            zoom: 1;
            img {
              border-radius: 50%;
              width: 100%;
              height: 100%;
            }
          }
        }
        .fwt-800 {
          font-weight: 800;
        }
        .commoncon {
          font-size: 14px;
          line-height: 24px;
          margin-top: 8px;
          word-break: break-word;
        }
        .c-666 {
          color: #666;
        }
        .flex-between {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }
        .comment-report,
        .comment-news,
        .comment-zan {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          vertical-align: middle;
          padding-left: 20px;
          margin-left: 32px;
          background-repeat: no-repeat;
          background-position: left center;
          cursor: pointer;
          zoom: 1;
        }
        .report {
          color: #bbbbbb;
          font-size: 12px;
          background-image: url(https://static.zcool.cn/git_z/z/images/svg/shanchu.svg?v=1);
          background-repeat: no-repeat;
          background-size: 16px;
        }
      }
    }
  }
}
.shade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
}
</style>
