import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import VueParticles from "vue-particles"; //粒子特效文件

Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
