export const contentTableConfig = {
  columnData: [
    {
      label: "用户名",
      prop: "name",
    },
    {
      label: "真实姓名",
      prop: "realname",
    },
    {
      label: "电话",
      prop: "cellphone",
    },
    {
      label: "状态",
      prop: "enable",
      slotName: "status",
    },
    {
      label: "创建时间",
      prop: "createAt",
      slotName: "createAt",
    },
    {
      label: "操作",
      slotName: "handler",
    },
  ],
  columnAlign: "center",
  showColumnIndex: true,
  showColumnSelection: true,
  tableTitle: "用户列表",
};
