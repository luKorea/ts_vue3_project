<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFoldClick"
    ></i>
    <div class="nav-bread">
      <basic-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import UserInfo from "components/nav-header/src/cpns/user-info.vue";
import BasicBreadcrumb from "@/base-ui/basic-breadcrumb";
import { pathMapBreadcrumb } from "@/utils/map-menu-to-routes";
import { useStore } from "@/store";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { BasicBreadcrumb, UserInfo },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const store = useStore();
    const isFold = ref<boolean>(false);
    let breadcrumbs = computed(() => {
      const route = useRoute();
      const menuList = store.state.login.menuList;
      return pathMapBreadcrumb(menuList, route.path);
    });
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    return {
      isFold,
      handleFoldClick,
      breadcrumbs,
    };
  },
});
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    margin-right: 10px;
  }

  .nav-bread {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    color: #606266;
    font-size: 16px;
  }
}
</style>
