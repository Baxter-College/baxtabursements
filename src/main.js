import Vue from "vue";
import "buefy/dist/buefy.css"; // import before app.vue so cascading works
import App from "./App.vue";
import Buefy from "buefy";

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
