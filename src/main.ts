import { createApp } from "vue";

import router from "./router";
import store from "./store";
import { globalRegister } from "./global";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(globalRegister);
app.mount("#app");
