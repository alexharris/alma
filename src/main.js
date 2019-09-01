import Vue from "vue";
import App from "./App.vue";
import router from "./router";

console.log(process.env.NODE_ENV)
console.log(process.env.BASE_URL)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
