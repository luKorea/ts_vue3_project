import { computed } from 'vue'
import { useStore } from 'vuex'

/**
 * @description 封装store中常用函数
 * @method useStoreMapper
 * @param mapper
 * @param mapperFunctions
 * @returns {{}}
 */
export function useStoreMapper (mapper, mapperFunctions) {
  const store = useStore();
  const storeTypeFunctions = mapperFunctions(mapper);
  const storeTypeMapper = {};
  Object.keys(storeTypeFunctions).forEach(keys => {
    const fn = storeTypeFunctions[keys].bind({ $store: store });
    storeTypeMapper[keys] = computed(fn);
  })
  return storeTypeMapper;
}
