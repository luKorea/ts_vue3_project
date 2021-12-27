export const contentTableConfig = {
  columnData: [
    { prop: "name", label: "商品名称" },
    {
      prop: "oldPrice",
      label: "原价格",
      width: "100",
      slotName: "oldPrice",
    },
    { prop: "newPrice", label: "现价格", width: "100" },
    { prop: "imgUrl", label: "商品图片", slotName: "image" },
    { prop: "status", label: "状态", width: "100", slotName: "status" },
    {
      prop: "createAt",
      label: "创建时间",
      slotName: "createAt",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      slotName: "updateAt",
    },
    { label: "操作", slotName: "handler" },
  ],
  columnAlign: "center",
  showColumnIndex: true,
  showColumnSelection: true,
  tableTitle: "商品列表",
};
