<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <basic-table
      :column-align="'center'"
      :column-data="propsList"
      :show-column-index="true"
      :show-column-selection="true"
      :table-data="userList"
      @selectionChange="deleteAllUser"
    >
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'" size="mini">
          {{ scope.row.enable ? "启动" : "禁用" }}
        </el-tag>
      </template>
      <template #createAt="{ row }">
        <span>{{ $filters.formatTime(row.createAt) }}</span>
      </template>
      <template #handler>
        <el-button icon="el-icon-edit" size="mini" type="text">编辑</el-button>
        <el-button
          class="delete-btn-color"
          icon="el-icon-delete"
          size="mini"
          type="text"
          >删除
        </el-button>
      </template>
    </basic-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
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
        slotName: "createAt",
      },
      {
        label: "操作",
        slotName: "handler",
      },
    ];

    const deleteAllUser = (data: any[]) => {
      let res = data.filter((item) => item.enable !== 1);
      console.log(res);
    };
    return {
      searchFormConfig,
      userList,
      propsList,
      deleteAllUser,
    };
  },
});
</script>

<style scoped></style>
