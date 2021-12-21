import { IForm } from "@/base-ui/basic-form";

export const searchFormConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      type: "input",
      label: "密码",
      placeholder: "请输入密码",
    },
  ],
};
