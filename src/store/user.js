const user = {
  namespaced: true,
  state() {
    return {
      profile: {
        // 用户id
        id: "",
        // 用户头像
        avatar: "",
        // 用户昵称
        username: "",
        // 用户手机号
        phone: "",
      },
    };
  },
  mutations: {
    setUser(state, payload) {
      if (Object.keys(payload).length !== 0) {
        state.profile = {
          ...state.profile,
          ...payload,
        };
      } else {
        return (state.profile = {});
      }
    },
  },
};
export default user;
