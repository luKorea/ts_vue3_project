import { Module } from "vuex";
import type { IRootState } from "@/store/types";
import type { ISystemState } from "@/store/main/system/types";
import { getPageListData } from "@/service/api/main/system/system";

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
    };
  },
  actions: {
    async getPageList({ commit }, payload: any) {
      const pageName = payload.pageName ?? "";
      payload.pageUrl = `${pageName}/list`;
      const data = await getPageListData(payload);
      const { list, totalCount } = data.data;
      commit(`SET_${pageName.toUpperCase()}_LIST`, list);
      commit(`SET_${pageName.toUpperCase()}_COUNT`, totalCount);
    },
  },
  mutations: {
    SET_USERS_LIST(state, usersList: any[]) {
      state.usersList = usersList;
    },
    SET_USERS_COUNT(state, count: number) {
      state.usersCount = count;
    },
    SET_ROLE_LIST(state, roleList: any[]) {
      state.roleList = roleList;
    },
    SET_ROLE_COUNT(state, count: number) {
      state.roleCount = count;
    },
    SET_GOODS_LIST(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    SET_GOODS_COUNT(state, count: number) {
      state.goodsCount = count;
    },
  },
  getters: {
    getterListData(state) {
      // 将 state转换为any类型，跳过interface检验
      return (pageName: string) => (state as any)[`${pageName}List`] ?? [];
    },
    getterCountData(state) {
      return (pageName: string) => (state as any)[`${pageName}Count`] ?? [];
    },
  },
};

export default systemModule;
