<template>
  <basic-table
    v-bind="contentTableConfig"
    v-model:page="pageInfo"
    :table-data="tableData"
    :table-total="tableTotal"
  >
    <template #headerHandler>
      <el-button type="primary">新增用户</el-button>
      <el-button type="danger">删除用户</el-button>
    </template>
    <template #status="scope">
      <el-tag :type="scope.row.enable ? 'success' : 'danger'" size="mini">
        {{ scope.row.enable ? "启动" : "禁用" }}
      </el-tag>
    </template>
    <template #createAt="{ row }">
      <span>{{ $filters.formatTime(row.createAt) }}</span>
    </template>
    <template #updateAt="{ row }">
      <span>{{ $filters.formatTime(row.updateAt) }}</span>
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

    <template
      v-for="item in dynamicSlotList"
      :key="item.prop"
      #[item.slotName]="scope"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </template>
  </basic-table>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { usePageContent } from "components/page-content/hooks/usePageContent";

export default defineComponent({
  props: {
    pageName: {
      type: String,
      require: true,
    },
    contentTableConfig: {
      type: Object,
      require: true,
    },
  },
  setup(props) {
    const { getPageData, tableData, tableTotal, pageInfo } =
      usePageContent(props);

    // 获取动态插槽
    const dynamicSlotList: any[] = [];
    props.contentTableConfig?.columnData.forEach((item: any) => {
      if (item.slotName === "status") return false;
      if (item.slotName === "createAt") return false;
      if (item.slotName === "updateAt") return false;
      if (item.slotName === "handler") return false;
      else dynamicSlotList.push(item);
    });
    console.log(dynamicSlotList);
    return {
      tableData,
      tableTotal,
      pageInfo,
      getPageData,
      dynamicSlotList,
    };
  },
});
</script>

<style lang="less"></style>
