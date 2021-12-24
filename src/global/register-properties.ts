import { App } from "vue";
import { formatUTCToString } from "@/utils/date-format";

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string, format = "YYYY/MM/DD HH:mm:ss") {
      return formatUTCToString(value, format);
    },
  };
}
