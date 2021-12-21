import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElAside,
  ElContainer,
  ElMain,
  ElFooter,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCard,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElDatePicker,
} from "element-plus";

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElAside,
  ElContainer,
  ElMain,
  ElFooter,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCard,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElDatePicker,
];

export default function (app: App): void {
  components.forEach((compnent) => {
    app.component(compnent.name, compnent);
  });
}
