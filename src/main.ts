import { createApp } from "vue";

import "normalize.css";
import "./assets/css/index.less";

import router from "./router";
import store, { setupStore } from "./store";
import { globalRegister } from "./global";
import App from "./App.vue";

// 全局公用组件
import basicContainer from "./base-ui/basic-container";
import basicForm from "./base-ui/basic-form";

const app = createApp(App);

// 初始化store，一定不能放到使用router之后
setupStore();
app.use(router);
app.use(store);
app.use(globalRegister);
app.component("basicContainer", basicContainer);
app.component("basicForm", basicForm);
app.mount("#app");
