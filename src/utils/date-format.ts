import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const DEFAULT_FORMAT = " ";
export const formatUTCToString = (
  utcString: string,
  format: string = DEFAULT_FORMAT
) => {
  return dayjs.utc(utcString).format(format);
};
