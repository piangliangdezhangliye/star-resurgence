<template>
  <!--  基本信息列表-->
  <div class="msgBox">
    <!--    title-->
    <div class="msgTit">
      基本信息
      <button class="msgChangeBtn">
        <router-link
          :to="`/userCenter/${$store.state.user.profile.id}/UserChange`"
          >修改</router-link
        >
      </button>
    </div>
    <!--    table-->
    <div class="msgTableWrap">
      <table class="msgTable">
        <tbody>
          <tr>
            <th>用户名</th>
            <td>{{ userInfo.username }}</td>
          </tr>
          <tr>
            <th>性别</th>
            <td v-if="userInfo.sex === 1">男</td>
            <td v-else>女</td>
          </tr>
          <tr>
            <th>手机号</th>
            <td>{{ userInfo.phone }}</td>
          </tr>

          <tr>
            <th>职业</th>
            <td>学生</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "personMsg",
  props: {
    userInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.msgBox {
  width: 900px;
  padding: 30px 0;
  margin: 0 auto;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
  .msgTit {
    height: 28px;
    padding: 0 30px;
    color: #444;
    font-size: 20px;
    text-align: left;
    .msgChangeBtn {
      float: right;
      width: 76px;
      height: 28px;
      border: 1px solid #ffe300;
      border-radius: 4px;
      background: #ffe300;
      color: #444;
      font-size: 14px;
      line-height: 26px;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  .msgTableWrap {
    width: 100%;
    padding-top: 5px;
    margin-bottom: -15px;
    overflow: hidden;
    .msgTable {
      width: 100%;
      line-height: 1;
      font-size: 14px;
      color: #bbb;
      th {
        width: 84px;
        padding: 15px 0;
        text-align: right;
        color: #bbb;
        font-weight: normal;
        vertical-align: top;
      }
      td {
        padding: 14px 10px;
        color: #666666;
        vertical-align: top;
      }
    }
  }
}
</style>
