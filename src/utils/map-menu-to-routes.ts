import type { RouteRecordRaw } from "vue-router";
import { IBreadcrumb } from "@/base-ui/basic-breadcrumb";

let firstMenu: any = null;

// TODO 将菜单映射为routes, 将routes添加到router->main->children
export function mapMenuToRoutes(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 1. 加载所有默认的routes
  const allRoutes: RouteRecordRaw[] = [];
  const routerFiles = require.context("../router/main", true, /\.ts/);
  routerFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });
  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
        if (!firstMenu) firstMenu = menu;
      } else {
        _recurseGetRoutes(menu.children);
      }
    }
  };
  _recurseGetRoutes(menus);
  return routes;
}

export function pathMapBreadcrumb(menuList: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapToMenu(menuList, currentPath, breadcrumbs);
  return breadcrumbs;
}

export function pathMapToMenu(
  menuList: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of menuList) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({
          name: menu.name,
        });
        breadcrumbs?.push({
          name: findMenu.name,
          path: findMenu.url,
        });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

export { firstMenu };
