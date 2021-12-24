<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <basic-table
      :column-align="'center'"
      :column-data="propsList"
      :table-data="userList"
    >
      <template #status="scope">
        {{ scope.row.enable ? "启动" : "禁用" }}
      </template>
    </basic-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { searchFormConfig } from "./config/search-config";
import PageSearch from "components/page-search";
import { useStore } from "@/store";

export default defineComponent({
  name: "user",
  components: { PageSearch },
  setup() {
    const store = useStore();
    store.dispatch("system/getPageList", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 1,
        size: 10,
      },
    });
    const userList = computed(() => store.state.system.userList);
    const propsList = [
      {
        type: "selection",
      },
      {
        label: "用户名",
        prop: "name",
      },
      {
        label: "真实姓名",
        prop: "realname",
      },
      {
        label: "电话",
        prop: "cellphone",
      },
      {
        label: "状态",
        prop: "enable",
        slotName: "status",
      },
      {
        label: "创建时间",
        prop: "createAt",
      },
    ];
    return {
      searchFormConfig,
      userList,
      propsList,
    };
  },
});
</script>

<style scoped></style>
