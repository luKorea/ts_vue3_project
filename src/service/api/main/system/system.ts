import { request } from "@/service";
import { ISystemQueryType } from "@/service/api/main/system/types";
import { IDataType } from "@/service/api/types";

export const getPageListData = (queryType: ISystemQueryType) => {
  return request.post<IDataType>({
    url: queryType.pageUrl,
    data: queryType.queryInfo,
  });
};
