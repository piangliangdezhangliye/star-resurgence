import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "@/store/user";

const store = createStore({
  modules: {
    user,
  },
  plugins: [
    createPersistedState({
      key: "star-resurgence",
      paths: ["user", "cart"],
    }),
  ],
});

export default store;
