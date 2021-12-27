<template>
  <div class="table-footer">
    <el-pagination
      :current-page="page.currentPage"
      :layout="layout"
      :page-size="page.pageSize"
      :page-sizes="pageSizes"
      :total="tableTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    // 分页器数据
    tableTotal: {
      type: Number,
      default: 0,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40],
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10,
      }),
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
  },
  emits: ["update:page"],
  setup(props, { emit }) {
    const handleSizeChange = (pageSize: number) => {
      console.log(pageSize, props.page);
      emit("update:page", {
        ...props.page,
        pageSize,
      });
    };
    const handleCurrentChange = (currentPage: number) =>
      emit("update:page", {
        ...props.page,
        currentPage,
      });
    return {
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>

<style lang="less"></style>
`
