<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFoldClick"
    ></i>
    <div class="nav-bread">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UserInfo from "components/nav-header/src/cpns/user-info.vue";

export default defineComponent({
  components: { UserInfo },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref<boolean>(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    return {
      isFold,
      handleFoldClick,
    };
  },
});
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    margin-right: 10px;
  }

  .nav-bread {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    color: #606266;
    font-size: 16px;
  }
}
</style>
