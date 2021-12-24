<template>
  <div class="basic-table">
    <basic-container>
      <el-table :data="tableData" border style="width: 100%">
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
    tableData: {
      type: Array,
      require: true,
    },
    columnData: {
      type: Array,
      require: true,
    },
    columnAlign: {
      type: String,
      default: "left",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less"></style>
