export const contentTableConfig = {
  columnData: [
    {
      label: "角色名",
      prop: "name",
    },
    {
      label: "权限介绍",
      prop: "intro",
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
  tableTitle: "角色列表",
};
