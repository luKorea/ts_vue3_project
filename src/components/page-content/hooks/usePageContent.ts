import { useStore } from "@/store";
import { computed, ref, watch } from "vue";

export function usePageContent(props: any) {
  const store = useStore();
  const pageInfo = ref({
    currentPage: 0,
    pageSize: 10,
  });
  watch(pageInfo, () => getPageData());
  const getPageData = (searchInfo: any = {}) => {
    store.dispatch("system/getPageList", {
      pageName: props.pageName,
      queryInfo: {
        offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
        size: pageInfo.value.pageSize,
        ...searchInfo,
      },
    });
  };
  getPageData();
  const tableData = computed(() =>
    store.getters["system/getterListData"](props.pageName)
  );
  const tableTotal = computed(() =>
    store.getters["system/getterCountData"](props.pageName)
  );

  return { getPageData, tableData, tableTotal, pageInfo };
}
