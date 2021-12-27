<template>
  <div class="basic-table">
    <basic-container>
      <!--更多信息-->
      <div class="table-header">
        <slot name="tableHeader">
          <div class="title">{{ tableTitle }}</div>
          <div class="btn-wrap">
            <slot name="headerHandler"></slot>
          </div>
        </slot>
      </div>
      <el-table
        :data="tableData"
        :stripe="stripe"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-if="showColumnSelection"
          :align="columnAlign"
          type="selection"
        />
        <el-table-column
          v-if="showColumnIndex"
          :align="columnAlign"
          label="序号"
          type="index"
          width="80"
        />
        <!--动态数据-->
        <template v-for="item in columnData" :key="item.prop">
          <el-table-column
            v-bind="item"
            :align="columnAlign"
            show-overflow-tooltip
          >
            <template #default="scope">
              <!--动态设置插槽名，设置作用域插槽-->
              <slot :name="item.slotName" :row="scope.row"
                >{{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <!--分页器-->
      <slot name="tableFooter">
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
      </slot>
    </basic-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tableTitle: {
      type: String,
      default: "",
    },
    // 表格数据
    tableData: {
      type: Array,
      require: true,
    },
    // 表格列数据
    columnData: {
      type: Array,
      require: true,
    },
    // 列对齐方式
    columnAlign: {
      type: String,
      default: "left",
    },
    // 是否显示序号
    showColumnIndex: {
      type: Boolean,
      default: false,
    },
    // 是否显示多选框
    showColumnSelection: {
      type: Boolean,
      default: false,
    },
    // 是否显示斑马线
    stripe: {
      type: Boolean,
      default: true,
    },
    // 分页器数据配置
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
  emits: ["selectionChange", "update:page"],
  setup(props, { emit }) {
    // 监听选中的状态并将选中的数据返回给父组件处理
    const handleSelectionChange = (e: any) => emit("selectionChange", e);
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
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>

<style lang="less"></style>
