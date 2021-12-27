<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      search-title="用户管理"
      @resetData="handleResetData"
      @searchData="handleSearchData"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { searchFormConfig } from "./config/search-config";
import { contentTableConfig } from "@/views/main/system/user/config/content-config";
import PageSearch from "components/page-search";
import PageContent from "components/page-content/src/page-content.vue";
import { usePageSearch } from "@/hooks/usePageSearch";

export default defineComponent({
  name: "user",
  components: { PageContent, PageSearch },
  setup() {
    const [pageContentRef, handleResetData, handleSearchData] = usePageSearch();
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetData,
      handleSearchData,
    };
  },
});
</script>

<style scoped></style>
