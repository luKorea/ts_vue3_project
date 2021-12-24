<template>
  <div class="app">
    <!--国际化处理-->
    <el-config-provider :locale="zhCN">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCN from "element-plus/es/locale/lang/zh-cn";

export default defineComponent({
  name: "App",
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zhCN,
    };
  },
});
</script>

<style lang="less">
.app {
  height: 100%;
  width: 100%;
}
</style>
