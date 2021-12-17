import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import { Button, Dialog, Form } from 'element-ui';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
