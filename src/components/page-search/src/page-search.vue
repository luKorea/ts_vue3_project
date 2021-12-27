<template>
  <div class="page-search">
    <basic-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <div class="title-tip">{{ searchTitle }}</div>
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
    searchTitle: {
      type: String,
      default: "",
    },
  },
  emits: ["resetData", "searchData"],
  setup(props, { emit }) {
    // 数据绑定通过config文件中的field字段决定
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    formItems.forEach((item: any) => (formOriginData[item.field] = ""));
    let formData = ref(formOriginData);

    const resetForm = () => {
      formData.value = formOriginData;
      emit("resetData");
    };
    const searchData = () => emit("searchData", formData.value);
    return {
      formData,
      resetForm,
      searchData,
    };
  },
});
</script>

<style lang="less"></style>
