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
                  :model-value="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  style="width: 100%"
                  @update:modelValue="handleValueChange($event, item.field)"
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
import { defineComponent, PropType } from "vue";
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
    const handleValueChange = (value: any, field: string) => {
      emit("update:modelValue", {
        ...props.modelValue,
        [field]: value,
      });
    };
    return {
      handleValueChange,
    };
  },
});
</script>
