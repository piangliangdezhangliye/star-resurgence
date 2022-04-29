<template>
  <div class="notes">
    <div class="container">
      <div class="note_list">
        <div
          class="card-box new-card-box"
          v-for="(item, index) in lickList"
          :key="index"
        >
          <div class="card-img">
            <router-link
                :to="`/noteDetails/${item.id}`"
              target="_blank"
              class="card-img-hover"
              title="国潮城市插画"
            >
              <img v-if="item.img" :src="item.img" alt="国潮城市插画" />
              <img
                v-else
                src="https://img.zcool.cn/community/018a9f60b5c2f811013eaf70dd20ab.jpg@520w_390h_1c_1e_2o_100sh.jpg"
                alt="国潮城市插画"
              />
            </router-link>
          </div>
          <div class="card-info">
            <p class="card-info-title">
              <a
                href="https://www.zcool.com.cn/work/ZNDk5ODA2NTI=.html"
                title="国潮城市插画"
                target="_blank"
                class="title-content"
                style="width: 297px"
                >{{ item.title }}</a
              >

              <a
                href="javascript:;"
                class="title-icon zcool-card-fire2 title-icon-1"
                title="编辑推荐"
              ></a>
            </p>

            <p class="card-info-type" title="插画-商业插画">插画-商业插画</p>

            <p class="card-info-item">
              <span class="statistics-view" title="共40723人气">4.1w</span>
              <span class="statistics-comment" title="共62评论">62</span>
              <span class="statistics-tuijian" title="共1509推荐">{{
                item.likenum
              }}</span>
            </p>
          </div>
          <div class="card-item">
            <span class="user-avatar showMemberCard">
              <a
                href="https://www.zcool.com.cn/u/15106177"
                title="authorname"
                target="_blank"
                ><img
                  src="https://img.zcool.cn/community/01be6060dbe4a511013eaf7070a8ae.jpg@160w_160h_1c_1e_1o_100sh.jpg"
                  width="30"
                  height="30"
                  alt=""
                />
                {{ item.authorname }}</a
              >
              <div class="author-info-card hide" data-id="15106177"></div>
            </span>
            <span class="time">三天前</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LikePortfolio",
  props: {
    lickList: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="less">
.notes {
  padding-top: 20px;
}
.container {
}
.note_list {
  padding: 0px 30px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 100%;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
  display: inline-grid;
  list-style: none;
  column-gap: 20px;
  box-sizing: border-box;
  .card-box {
    width: 100%;
    background-color: #fff;
    margin-bottom: 20px;
    .card-img {
      img {
        width: 100%;
      }
    }
    .card-info {
      position: relative;
      height: 100px;
      padding: 11px 16px 13px;
      border-bottom: 1px solid #eee;
      .card-info-type {
        font-size: 12px;
        color: #bbb;
        margin-bottom: 17px;
        height: 18px;
      }
      .card-info-item {
        font-size: 12px;
        color: #bbb;
      }
      span[class^="statistics"] {
        margin-right: 7px;
        cursor: default;
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
    .card-info-title {
      display: flex;
      position: relative;
      height: 20px;
      line-height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      justify-content: space-between;
      overflow: hidden;
      margin-bottom: 1px;
      a {
        font-size: 14px;
        color: #333;
      }
      .title-content {
        display: inline-block;
        float: left;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex: 1;
        max-width: 100%;
        width: 100% !important;
      }
      .title-icon {
        margin-left: 6px;
      }
      .zcool-card-fire2 {
        width: 14px;
        height: 14px;
        float: right;
        margin-top: 3px;
        display: inline-block;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: center top;
        background-image: url(https://static.zcool.cn/git_z/build/images/svg/shouyetuijian.svg?v=1);
        background-size: auto 14px;
      }
    }
    .card-item {
      height: 50px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .user-avatar {
        flex: 1;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        a {
          line-height: 24px;
          font-size: 12px;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          display: block;
          max-width: 100%;
          width: auto;
          img {
            border-radius: 50%;
            margin-right: 10px;
            width: 24px;
            height: 24px;
            border: none;
            vertical-align: middle;
          }
        }
      }
      .time {
        display: inline-block;
        line-height: 50px;
        font-size: 12px;
        float: right;
        color: #bbb;
        white-space: nowrap;
        margin-left: 6px;
      }
    }
  }
}
</style>
