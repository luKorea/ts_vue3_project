<template>
  <div class="page-search">
    <basic-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <div class="title-tip">用户管理</div>
      </template>
      <template #footer>
        <div class="flex-end">
          <el-button icon="el-icon-refresh-left" @click="resetForm"
            >重置
          </el-button>
          <el-button icon="el-icon-search" type="primary" @click="searchData"
            >搜索
          </el-button>
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
  emits: ["searchData"],
  setup(props, { emit }) {
    let formData = ref({
      id: "",
      name: "",
      cellphone: "",
      enable: "",
      createAt: "",
    });

    const resetForm = () => {
      console.log(formData.value);
    };
    const searchData = () => {
      console.log(formData.value);
    };
    return {
      formData,
      resetForm,
      searchData,
    };
  },
});
</script>

<style lang="less"></style>
