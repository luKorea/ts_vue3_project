import { mapState, createNamespacedHelpers } from 'vuex'
import { useStoreMapper } from './useStoreMapper'

export function useState (moduleName, mapper) {
  let mapperFn = mapState;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  } else {
    mapper = moduleName;
  }
  return useStoreMapper(mapper, mapperFn);
}

