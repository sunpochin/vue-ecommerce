import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.prototype.$hostname = 'http://localhost:8000';
// Vue.prototype.$hostname = 'https://fastapi-pac.onrender.com';
// Vue.prototype.$hostname = 'http://localhost:8081/v1';
Vue.prototype.$hostname = 'https://pac-backend.onrender.com/v1';

Vue.use(router);
Vue.use(store);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

new Vue({
	beforeCreate: function () {
		console.log('globa: ', this.$hostname);
	},
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
