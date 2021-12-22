import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import localCache from "@/utils/cache";
import { firstMenu } from "@/utils/map-menu-to-routes";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },

  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) return "/login";
  }
  // 判断当前路由是不是main，是的话跳转到菜单第一项
  if (to.path === "/main") return firstMenu.url;
});

export default router;
