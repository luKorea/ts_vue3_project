import { createStore } from "vuex";
import type { IRootState } from "@/store/types";

import login from "@/store/login/login";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "korea",
    };
  },
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    login,
  },
});

export function setupStore() {
  store.dispatch("login/getLocalStorageInit");
}

export default store;
