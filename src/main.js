import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import Meta from "vue-meta";
import store from "@/store"
import Notifications from "vue-notification"

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
