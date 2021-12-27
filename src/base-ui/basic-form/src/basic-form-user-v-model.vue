<template>
  <basic-container>
    <!--标题插槽-->
    <slot name="header"></slot>
    <el-form ref="form" :label-width="labelWidth + 'px'" class="basic-form">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-bind="item.otherOptions"
                  v-model.trim="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  v-model.trim="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model.trim="formData[`${item.field}`]"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!--底部插槽-->
    <slot name="footer"></slot>
  </basic-container>
</template>
<script lang="ts">
import { ref, defineComponent, PropType, watch } from "vue";
import { IFormItem } from "@/base-ui/basic-form/types";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      require: true,
    },
    labelWidth: {
      type: String,
      default: "100",
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => [],
    },
    itemStyle: {
      type: Object,
      default: () => ({}),
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24,
      }),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 拷贝数据到子组件中
    const formData = ref({ ...props.modelValue });
    // 监听组件数据变化，通知父组件进行修改，不直接修改父组件的数据，实现单一数据流
    watch(formData, (newValue) => emit("update:modelValue", newValue), {
      deep: true,
    });

    return {
      formData,
    };
  },
});
</script>
