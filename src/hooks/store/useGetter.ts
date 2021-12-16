import { createNamespacedHelpers, mapGetters } from "vuex";
import { useStoreMapper } from "./useStoreMapper";

export function useGetter(moduleName, mapper) {
  let mapperFn = mapGetters;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  } else {
    mapper = moduleName;
  }
  return useStoreMapper(mapper, mapperFn);
}
