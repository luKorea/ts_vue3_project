<template>
  <div class="page-search">
    <basic-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <div class="title-tip">用户管理</div>
      </template>
      <template #footer>
        <div class="flex-end">
          <el-button icon="el-icon-refresh-left">重置</el-button>
          <el-button icon="el-icon-search" type="primary">搜索</el-button>
        </div>
      </template>
    </basic-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      cellphone: "",
      enable: "",
      createAt: "",
    });
    return {
      formData,
    };
  },
});
</script>

<style lang="less"></style>
