<template>
  <div class="user">
    <basic-form v-bind="searchFormConfig"></basic-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { searchFormConfig } from "./config/search-config";

export default defineComponent({
  name: "user",
  setup() {
    return {
      searchFormConfig,
    };
  },
});
</script>

<style scoped></style>
