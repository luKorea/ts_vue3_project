import { request } from "@/service";
import { IDataType } from "@/service/api/types";

export const getPageListData = (queryType: any) => {
  return request.post<IDataType>({
    url: queryType.pageUrl,
    data: queryType.queryInfo,
  });
};
