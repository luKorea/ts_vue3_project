import { ref } from "vue";
import PageContent from "components/page-content/src/page-content.vue";

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleResetData = () => pageContentRef.value?.getPageData();
  const handleSearchData = (searchInfo: any) =>
    pageContentRef.value?.getPageData(searchInfo);
  return [pageContentRef, handleResetData, handleSearchData];
}
