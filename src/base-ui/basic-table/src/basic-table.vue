<template>
  <div class="basic-table">
    <basic-container>
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
          <el-table-column v-bind="item" :align="columnAlign">
            <template #default="scope">
              <!--动态设置插槽名，设置作用域插槽-->
              <slot :name="item.slotName" :row="scope.row"
                >{{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </basic-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
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
  },
  emits: ["selectionChange"],
  setup(props, { emit }) {
    // 监听选中的状态并将选中的数据返回给父组件处理
    const handleSelectionChange = (e: any) => emit("selectionChange", e);
    return {
      handleSelectionChange,
    };
  },
});
</script>

<style lang="less"></style>
