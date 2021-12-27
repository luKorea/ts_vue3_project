<template>
  <div class="user">
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="goods"
    >
      <template #image="{ row }">
        <el-image
          :preview-src-list="[row.imgUrl]"
          :src="row.imgUrl"
          fit="cover"
          style="width: 60px; height: 60px"
        >
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { contentTableConfig } from "./config/content-config";
import PageContent from "components/page-content/src/page-content.vue";

export default defineComponent({
  name: "user",
  components: { PageContent },
  setup() {
    return {
      contentTableConfig,
    };
  },
});
</script>

<style scoped></style>
