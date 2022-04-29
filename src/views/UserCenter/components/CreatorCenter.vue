<template>
  <div class="CreatorCenter">
    <div class="centerBox">
      <router-link
        :to="`/userCenter/${$store.state.user.profile.id}/noteManage`"
      >
        <router-view></router-view>
        <div class="contBox">
          <img src="@/assets/img/creatorCenter_01.png" alt="" />
          <h6>笔记管理</h6>
          <p>对已发布的笔记进行数据管理</p>
        </div>
      </router-link>
      <router-link to="/Promotion">
        <div class="contBox">
          <img src="@/assets/img/creatorCenter_03.png" alt="" />
          <h6>推广广场</h6>
          <p>对老字号进行推广</p>
        </div>
      </router-link>
      <router-link
        :to="`/userCenter/${$store.state.user.profile.id}/userManage`"
      >
        <div class="contBox">
          <img src="@/assets/img/creatorCenter_02.png" alt="" />
          <h6>用户管理</h6>
          <p>用户管理</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatorCenter",
};
</script>

<style lang="less" scoped>
.CreatorCenter {
  margin: 20px auto;
  width: 1000px;
  height: 365px;
  background: linear-gradient(90deg, #ffe2ee, #ffe3a7);
  -webkit-border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;

  .centerBox {
    overflow: hidden;
    position: absolute;
    width: 1000px;
    height: 233px;
    margin-top: 50px;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    .contBox {
      background: #fff;
      width: 192px;
      height: 233px;
      border-radius: 4px;
      margin: 0 70px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 30px 30px 0;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 0 15px;
      }
      h6 {
        font-size: 18px;
        margin: 0 0 10px;
        color: #555;
      }
      p {
        text-align: justify;
        font-size: 15px;
        color: #999;
        margin: 0 0 5px;
      }
    }
  }
}
</style>
