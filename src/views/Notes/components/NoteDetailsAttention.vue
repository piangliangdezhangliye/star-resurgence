<template>
  <div class="note_title" v-if="data">
    <!--    头部-->
    <div className="note_details_title">
      <!--      标题  笔记相关信息-->
      <div className="card-info">
        <p className="card-info-title">
          <a
            href="https://www.zcool.com.cn/work/ZNDk5ODA2NTI=.html"
            :title="data.title"
            target="_blank"
            className="title-content"
            >{{ data.title }}</a
          >
          <a
            href="javascript:;"
            className="title-icon zcool-card-fire2 title-icon-1"
            title="编辑推荐"
            data-v-6f17cc11=""
          ></a>
        </p>
        <p title="发布时间">
          <span
            className="card-info-type"
            v-for="item in data.labels"
            :key="item.id"
          >
            {{ item.name }}
          </span>
        </p>
        <!--        	https://static.zcool.cn/git_z/build/images/svg/shoucang-middle.svg-->
        <div class="collect-like">
          <i class="collectIcon_sele" v-if="Fflag" @click="collectBtn"></i>
          <i class="collectIcon" v-else @click="collectBtn"></i>
          <span className="card-info-type signa" @click="collectBtn">
            收藏
          </span>
          <i class="likeIcon_sele" v-if="Lflag" @click="likeBtn"></i>
          <i class="likeIcon" v-else @click="likeBtn"></i>
          <span className="card-info-type like signa" @click="likeBtn">
            喜欢
          </span>
        </div>

        <p className="card-info-item">
          <span className="statistics-view" title="共40723人气">4.1w</span>
          <span className="statistics-comment" title="共62评论">62</span>
          <span className="statistics-tuijian" title="共1509推荐">1509</span>
        </p>
      </div>
      <!--      作者信息-->
      <div className="card-item" data-v-6f17cc11="">
        <img
          :src="data.user.avatar"
          width="30"
          height="30"
          alt=""
          data-v-6f17cc11=""
          @click="goUserCener(data.user.id)"
        />


        <div className="author">
          <router-link to="">{{ data.user.username }}</router-link>
          <span className="grade" data-v-6f17cc11="">{{
            data.user.sex == 1 ? "男" : "女"
          }}</span>
          <input
            v-if="Aflag"
            type="button"
            className="author_btn attention followed"
            @click="attentionBtn"
            value="已关注"
          />
          <input
            v-else
            type="button"
            className="author_btn attention"
            @click="attentionBtn"
            value="关注"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <!--    内容-->
    <div className="note_details_content" v-if="data">
      <div class="work-decoration-title">
        <p>{{ data.content }}</p>
      </div>
      <img :src="data.img" alt="" />
    </div>
  </div>
</template>

<script>
import {
  addCollectApi,
  addLiketApi,
  attentionAuthorListApi,
  delColList,
  delLikeList,
  findCollectApi,
  findLikeApi,
  followApi,
} from "@/api/note";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Message from "@/components/library/Message";
import { unFollowApi } from "../../../api/note";

export default {
  name: "NoteDetailsAttention",
  props: {
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  setup(props) {
    // console.log(props.data);
    const store = useStore();
    const route = useRoute();
    //用户id
    const uId = store.state.user.profile.id;
    const aId = route.params.id;
    //开关  是否关注作者
    const Aflag = ref();
    //查看用户是否关注作者
    const attentionAuthorList = () => {
      attentionAuthorListApi(uId).then((res) => {
        // console.log(res.data);
        if (res.code === 20000) {
          if (res.data == []) {
            Aflag.value = false;
          }
          Aflag.value = res.data.some(
            (item) => item.id === props.data.authorid
          );
        }
      });
    };
    attentionAuthorList();
    //关注/取消关注
    const attentionBtn = () => {
      //如果是true取消关注
      if (Aflag.value) {
        console.log(store.state.user.profile);
        console.log(uId);
        console.log(route.params.id);
        console.log(props.data.authorid);
        let obj = {
          id: route.params.id,
          uid: uId,
          aid: props.data.authorid,
          user: store.state.user.profile,
        };
        unFollowApi(obj).then((res) => {
          console.log(res);
          if (res.code == 20000) {
            Aflag.value = false;
            Message({ type: "success", text: res.message });
          }
        });
      } else {
        followApi({ uid: uId, aid: props.data.authorid }).then((res) => {
          console.log(res);
          if (res.code == 20000) {
            Aflag.value = true;
            Message({ type: "success", text: res.message });
          }
        });
      }
    };

    //查看用户是否已经收藏当前文章  findCollectApi
    const Fflag = ref();
    const findCollect = () => {
      findCollectApi(uId).then((res) => {
        if (res.code === 20000) {
          if (res.data == []) {
            Fflag.value = false;
          }
          Fflag.value = res.data.some((item) => item.id == aId);
        }
      });
    };
    findCollect();
    //添加收藏文章
    const collectBtn = () => {
      //如果Fflag为true 取消收藏
      if (Fflag.value) {
        delColList({ uid: uId, collectid: aId }).then((res) => {
          if (res.code === 20000) {
            Fflag.value = false;
            Message({ type: "success", text: res.message });
          }
        });
      } else {
        //  否则添加收藏
        addCollectApi({ uid: uId, collectid: aId }).then((res) => {
          if (res.code === 20000) {
            Fflag.value = true;
            Message({ type: "success", text: res.message });
          }
        });
      }
      //  delColList
    };

    //查看用户是否已经点赞当前文章
    const Lflag = ref();
    const findLike = () => {
      findLikeApi(uId).then((res) => {
        if (res.code === 20000) {
          if (res.data == []) {
            Lflag.value = false;
          }
          Lflag.value = res.data.some((item) => item.id == aId);
        }
      });
    };
    findLike();
    //添加收藏文章
    const likeBtn = () => {
      //如果Lflag为true 取消收藏
      if (Lflag.value) {
        delLikeList({ uid: uId, likeid: aId }).then((res) => {
          if (res.code === 20000) {
            Lflag.value = false;
            Message({ type: "success", text: res.message });
          }
        });
      } else {
        //  否则添加收藏
        addLiketApi({ uid: uId, likeid: aId }).then((res) => {
          if (res.code === 20000) {
            Lflag.value = true;
            Message({ type: "success", text: res.message });
          }
        });
      }
      //  delColList
    };
    const router = useRouter();

    const goUserCener = (id) => {
      router.push({
        path: `/userCenter/${id}`,
      });
    };
    return {
      Aflag,
      Fflag,
      Lflag,
      likeBtn,
      attentionBtn,
      collectBtn,
      findCollect,
      router,
      goUserCener
    };
  },
};
</script>

<style scoped lang="less">
.note_title {
  margin-top: 100px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.note_details_title {
  display: flex;
  width: 1230px;
  margin: auto;
}
.title-content {
  margin-bottom: 13px;
  display: inline-block;
}
//笔记相关信息
.card-info {
  display: inline-block;
  width: 830px;
  height: 140px;
  padding: 20px;
  border-right: 1px solid #eee;
  .card-info-title {
    font-size: 26px;

    .zcool-card-fire2 {
      width: 20px;
      height: 20px;
      margin-left: 10px;
      //margin-top: 3px;
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center top;
      background-image: url(https://static.zcool.cn/git_z/build/images/svg/shouyetuijian.svg?v=1);
      background-size: auto 20px;
    }
  }

  .card-info-type {
    color: #bbbbbb;
    font-size: 14px;
    margin-top: 10px;
    margin-right: 10px;
  }

  .signa {
    float: left;
  }

  .card-info-item {
    float: right;
    color: #bbbbbb;
    font-size: 14px;

    span {
      margin: 0 20px;
    }

    span[class^="statistics"]:before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: top;
      margin-right: 5px;
    }

    .statistics-view:before {
      background: url(https://static.zcool.cn/git_z/build/images/svg/card-liulan.svg?v=1)
        0 4px no-repeat;
      background-size: 16px auto;
    }

    .statistics-comment:before {
      background: url(https://static.zcool.cn/git_z/build/images/svg/card-pinglun.svg?v=1)
        0 2px no-repeat;
      background-size: 16px auto;
    }

    .statistics-tuijian:before {
      background: url(https://static.zcool.cn/git_z/build/images/svg/card-zan.svg?v=1)
        no-repeat;
      background-size: 16px 16px;
    }
  }
}
//用户已关注按钮
.followed {
  background: #fff !important;
  border: 1px solid #bbb !important;
}
.collect-like {
  display: inline-block;
  position: relative;
  padding-left: 24px;
}
.collectIcon_sele {
  position: absolute;
  top: 10px;
  left: 0;
  width: 20px;
  height: 20px;
  background: url("../../../assets/img/collect_Icon_sel.png");
}
.collectIcon {
  position: absolute;
  top: 10px;
  left: 0;
  width: 20px;
  height: 20px;
  background: url("../../../assets/img/collect_Icon.png");
}
.like {
  margin-left: 30px;
}
.likeIcon_sele {
  position: absolute;
  top: 10px;
  left: 70px;
  width: 20px;
  height: 20px;
  background: url("../../../assets/img/like_Icon_sele.png");
}
.likeIcon {
  position: absolute;
  top: 10px;
  left: 70px;
  width: 20px;
  height: 20px;
  background: url("../../../assets/img/like_Icon.png");
}
//作者相关信息
.card-item {
  display: flex;
  width: 400px;
  height: 140px;
  padding: 20px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 10px;
  }

  a {
    color: #444444;
    font-size: 16px;
    font-weight: bold;
  }

  .author {
    display: inline-block;
    margin-left: 20px;

    .grade {
      display: block;
      color: #bbb;
      margin-top: 4px;
    }

    .author_btn {
      width: 100px;
      height: 36px;
      margin-right: 15px;
      font-size: 14px;
      color: #444;
      background: #ffe300;
      border: 1px solid #ffe300;
      border-radius: 4px;
      cursor: pointer;
      text-align: center;
      margin-top: 6px;
    }

    .private_message {
      background: #fff;
      border: 1px solid #bbb;
    }
  }
}

//内容
.note_details_content {
  margin-top: 30px;

  .work-decoration-title {
    padding: 28px 0;
    line-height: 30px;
    color: #666666;
    p {
      width: 800px;
      font-size: 16px;
      margin: 0 auto;
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    width: 750px;
    margin: 10px auto;
  }
}
</style>
