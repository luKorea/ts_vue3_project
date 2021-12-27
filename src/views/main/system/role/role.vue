<template>
  <div class="role">
    <page-search
      :search-form-config="searchFormConfig"
      search-title="角色管理"
    ></page-search>
    <page-content
      :content-table-config="contentTableConfig"
      page-name="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContent from "components/page-content/src/page-content.vue";
import { searchFormConfig } from "@/views/main/system/role/config/search-config";
import { contentTableConfig } from "@/views/main/system/role/config/content-config";
import PageSearch from "components/page-search/src/page-search.vue";

export default defineComponent({
  name: "role",
  components: { PageSearch, PageContent },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig,
    };
  },
});
</script>

<style scoped></style>
