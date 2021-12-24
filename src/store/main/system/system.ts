import { Module } from "vuex";
import type { IRootState } from "@/store/types";
import type { ISystemState } from "@/store/main/system/types";
import { getPageListData } from "@/service/api/main/system/system";
import { ISystemQueryType } from "@/service/api/main/system/types";

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    };
  },
  actions: {
    async getPageList({ commit }, payload: ISystemQueryType) {
      const data = await getPageListData(payload);
      const { list, totalCount } = data.data;
      commit("SET_USER_LIST", list);
      commit("SET_USER_COUNT", totalCount);
    },
  },
  mutations: {
    SET_USER_LIST(state, userList: any[]) {
      state.userList = userList;
    },
    SET_USER_COUNT(state, count: number) {
      state.userCount = count;
    },
  },
};

export default systemModule;
