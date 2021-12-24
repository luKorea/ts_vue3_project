import { App } from "vue";
import registerElement from "./register-element";
import registerProperties from "@/global/register-properties";

export function globalRegister(app: App): void {
  app.use(registerElement);
  app.use(registerProperties);
}
