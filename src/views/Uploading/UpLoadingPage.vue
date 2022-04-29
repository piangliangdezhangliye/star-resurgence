<template>
  <div id="uploading">
    <AppHeader />

    <div class="container">
      <div class="article" id="article-mark" style="">
        <form style="">
          <div class="writing">
            <img src="../../assets/img/write_an_article.png" alt="" />
          </div>
          <!--          文章信息-->
          <div class="upload-con-box">
            <div class="writing_title">
              <!--            图片-->
              <div class="write-title write-title-img">
                <!--            上传封面-->
                <div class="writing_img">
                  <img
                    class="write_img"
                    src="../../assets/img/upload_img_text.png"
                    alt=""
                  />
                  <a-upload
                    name="avatar"
                    list-type="picture-card"
                    class="avatar-uploader"
                    :show-upload-list="false"
                    :before-upload="beforeUpload"
                    :customRequest="uploadHeadImg"
                  >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                    <div v-else>
                      <loading-outlined v-if="loading"></loading-outlined>
                      <plus-outlined v-else></plus-outlined>
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </a-upload>
                </div>
                <!--                文章图片-->
                <!--                <div class="write-title-img">-->
                <!--                  <img-->
                <!--                    class="write_img"-->
                <!--                    src="../../assets/img/upload_img_text——2.png"-->
                <!--                    alt=""-->
                <!--                  />-->
                <!--                  <a-upload-->
                <!--                    name="avatar"-->
                <!--                    list-type="picture-card"-->
                <!--                    class="avatar-uploader"-->
                <!--                    :show-upload-list="false"-->
                <!--                    :before-upload="beforeUpload"-->
                <!--                    :customRequest="uploadContenImg"-->
                <!--                  >-->
                <!--                    <img v-if="imageUrlList" :src="imageUrlList" alt="avatar" />-->
                <!--                    <div v-else>-->
                <!--                      <loading-outlined v-if="loading"></loading-outlined>-->
                <!--                      <plus-outlined v-else></plus-outlined>-->
                <!--                      <div class="ant-upload-text">Upload</div>-->
                <!--                    </div>-->
                <!--                  </a-upload>-->
                <!--                </div>-->
              </div>
              <!--            文章标题-->
              <div class="write-title">
                <div class="work-namebox work-title-box">
                  <i class="redwarn left"></i>
                  <div class="worktext-lbox">
                    <input
                      type="text"
                      v-model="title"
                      maxlength="16"
                      autocomplete="off"
                      id="form-data-title"
                      z-ss-track="articleName"
                      placeholder="请输入文章标题"
                      class="text-style work-name"
                    /><span class="count">16</span>
                  </div>
                </div>
              </div>
              <!--            文章标签 类型-->
              <div class="write-title">
                <div class="work-namebox work-title-box">
                  <i class="redwarn left"></i>
                  <div class="worktext-lbox">
                    <a-checkbox-group
                      v-model:value="checkedList"
                      :options="plainOptions"
                      @change="checkboxChange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--          文章内容-->
          <div id="edtiText" style="width: 100%; margin-top: 30px">
            <textarea
              v-model="content"
              id="editor"
              rows="10"
              cols="128"
            ></textarea>
          </div>
          <!--          提交-->
          <div class="articlefoot">
            <input
              type="button"
              class="biz-publish-btn btn-default-main publishbtn"
              value="发布"
              @click="publishbtn"
            />
            <input
              type="button"
              class="biz-draft-btn rough"
              id="upload-auto-draft"
              value="草稿自动保存"
            />
            <a
              href="https://my.zcool.com.cn/draft"
              target="_blank"
              class="drafts zcool-link-color"
              >草稿箱</a
            >
          </div>
        </form>
      </div>
    </div>
    <img
      src="https://img.zcool.cn/event-resource/havalh6/assets/img/skate.png?imgverstion=v45.10.19.0140"
      alt=""
      class="skate"
    />
    <img class="xiang_yun" src="../../assets/img/xiang_yun.png" alt="" />
  </div>
</template>

<script>
import AppHeader from "../../components/AppHeader";
import { ref } from "vue";
import { labelApi, publish, upLoading } from "@/api/upLoading";
import Message from "@/components/library/Message";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import store from "@/store";
import router from "@/router";
export default {
  name: "UpLoadingPage",
  components: { AppHeader, LoadingOutlined, PlusOutlined },
  setup() {
    //文章标题
    const title = ref();
    //文章内容
    const content = ref("");
    //文章所属标签
    const plainOptions = ref([]);
    //获取文章标签
    labelApi().then((res) => {
      res.data.forEach((ele) => {
        plainOptions.value.push({ label: ele.name, value: ele.id });
      });
    });
    //用户选择文章所属标签
    const checkedList = ref([]);

    const loading = ref(false);
    const imageUrl = ref("");
    //图片路径  大小
    const beforeUpload = (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        Message({ type: "error", text: "你只能上传 JPG/PNG 文件!" });
      }
      const isLt2M = file.size / 1024 / 1024 < 9;
      if (!isLt2M) {
        Message({ type: "error", text: "图片大小必须小于 2MB!" });
      }
      return isJpgOrPng && isLt2M;
    };
    //上传图片状态
    const handleChange = (info) => {
      console.log(info);
      if (info.file.status === "uploading") {
        loading.value = true;
        return;
      }
      if (info.file.status === "error") {
        loading.value = false;
        Message({ type: "error", text: "上传失败" });
      }
    };
    //自定义上传封面
    const uploadHeadImg = (info) => {
      let param = new FormData(); // 创建form对象
      param.append("file", info.file); // 通过append向form对象添加数据
      upLoading(param).then((res) => {
        if (res.data.code == 20000) {
          imageUrl.value = res.data.data;
        }
      });
    };
    //文章内容图片列表
    const fileLists = ref([]);
    const imageUrlList = ref();
    //自定义上传文章内容图片
    const uploadContenImg = (info) => {
      let param = new FormData(); // 创建form对象
      param.append("file", info.file); // 通过append向form对象添加数据
      upLoading(param).then((res) => {
        console.log(res.data);
        if (res.data.code == 20000) {
          imageUrlList.value = res.data.data;
        }
      });
    };
    const previewVisible = ref(false);
    const previewImage = ref();
    //预览上传的图片
    const handlePreview = async (file) => {
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
    };
    const handleCancel = () => {
      previewVisible.value = false;
    };
    //发布按钮
    const publishbtn = () => {
      let data = {
        title: title.value,
        content: content.value,
        authorid: store.state.user.profile.id,
        lid: checkedList.value,
        img: imageUrl.value,
        // url: imageUrlList.value,
      };
      console.log(data);
      if (
        title.value == "" ||
        content.value == "" ||
        imageUrl.value == "" ||
        checkedList.value == []
      ) {
        Message({ type: "error", text: "不能为空" });
      } else {
        publish(data).then((res) => {
          console.log(res);
          //  code: 20000
          if (res.code === 20000) {
            title.value = "";
            content.value = "";
            checkedList.value = [];
            imageUrl.value = "";
            router.push(`/userCenter/${store.state.user.profile.id}`)
            // /userCenter/store.state.user.profile.id
            Message({ type: "success", text: "上传成功" });
          }

        });
      }
    };
    return {
      title,
      content,
      plainOptions,
      fileLists,
      loading,
      imageUrl,
      uploadContenImg,
      handleCancel,
      handlePreview,
      previewVisible,
      handleChange,
      publishbtn,
      previewImage,
      uploadHeadImg,
      beforeUpload,
      checkedList,
      imageUrlList,
    };
  },
};
</script>

<style scoped lang="less">
.writing_title {
  display: inline-block;
  width: 950px !important;
  color: #333;
}

#edtiText {
  height: 250px;
  padding: 20px;
  background-image: url("../../assets/img/write_bg_2.png");
  textarea {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    border: none;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-top: 10px;
  }
}
#uploading {
  position: relative;
  height: 100%;
  background: url(https://img.zcool.cn/event-resource/havalh6/assets/img/bgs.jpg)
    center;
  .container {
    padding-top: 70px;
    z-index: 1;
    margin-left: 560px;
  }
  .skate {
    position: absolute;
    left: 4%;
    top: 200px;
    width: 416px;
    height: 450px;
  }
}
.article {
  .writing {
    text-align: center;
  }
  .upload-con-box {
    position: relative;
    padding: 32px;
    margin-top: 30px;
    //background: rgba(255, 255, 255, 0.6);
    background: url("../../assets/img/write_bg_1.png") no-repeat;
    background-size: 100%;
    border-radius: 4px;
    .upload-con-title {
      color: #444444;
      font-size: 14px;
      height: 52px;
      line-height: 52px;
      padding: 0 30px;
      border-bottom: 1px solid #eeeeee;
    }
    .write-title {
      padding: 15px;
      .work-namebox {
        .redwarn {
          display: inline-block;
          width: 4px;
          height: 4px;
          background: #f14538;
          border-radius: 50%;
          margin-top: 19px;
          margin-right: 16px;
        }
        .worktext-lbox {
          position: relative;
          width: 900px;
          height: 42px;
          display: inline-block;
          vertical-align: middle;
          padding-top: 10px;
          zoom: 1;
        }
        .work-name {
          width: 100%;
          line-height: 42px;
        }
        .text-style {
          padding-left: 20px;
          background: #fff;
          box-sizing: border-box;
          border-radius: 4px;
        }
        .count {
          line-height: 1;
          bottom: 15px;
        }
      }
    }
  }
  .redwarn {
    margin-right: 16px;
  }
  .count,
  .counter,
  .worktag-con {
    font-size: 12px;
    color: #999;
  }
  .count,
  .counter,
  .login-close {
    position: absolute;
  }
  .count,
  .counter {
    right: 20px;
    font-style: normal;
  }
}
.publishbtn,
.previewbtn {
  width: 190px;
  height: 42px;
  margin-right: 15px;
  font-size: 14px;
}
.btn-default-main {
  color: #444;
  background: #ffe300;
  border: 1px solid #ffe300;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
}
.rough {
  line-height: 42px;
  background: transparent;
  font-size: 14px;
  color: #666666;
}
.drafts {
  float: right;
  line-height: 42px;
}
.zcool-link-color {
  color: #d36f16;
  cursor: pointer;
}
//上传封面
.workup-con {
  position: relative;
  //padding-top: 20px;
  .coverchar {
    width: 230px;
    position: relative;
    background: #f2f2f2;
    height: 196px;
    display: flex;
    align-items: center;
    overflow: hidden;
    .upcoverbtn {
      cursor: pointer;
      width: 100%;
      height: 196px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .upload-normal-box {
      width: 100%;
      height: 100%;
      text-align: center;
      padding-top: 104px;
      color: #999;
      background-image: url(https://static.zcool.cn/git_z/z/images/svg/add-work-icon.svg);
      background-position: center 65px;
      background-repeat: no-repeat;
      box-sizing: border-box;
    }
  }
}

.write-title {
  position: relative;
  .writing_img {
    display: inline-block;
  }
  .write_img {
    position: absolute;
    top: 30px;
    width: 160px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .write-title-img {
    display: inline-block;
    margin-left: 90px;
  }
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card {
  .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
}
.articlefoot {
  margin-top: 20px;
}
//祥云
.xiang_yun {
  position: absolute;
  left: 50px;
  bottom: 30px;
}
::v-deep .ant-checkbox-inner {
  width: 22px;
  height: 22px;
}
::v-deep .ant-checkbox-group-item {
  font-size: 18px;
}
::v-deep .avatar-uploader {
  width: 200px;
  padding-left: 160px;
}
.write-title-img {
  padding-bottom: 0 !important;
}
::v-deep .ant-upload.ant-upload-select-picture-card {
  margin-bottom: 0;
}
</style>
