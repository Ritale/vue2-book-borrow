import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import { Button, DatePicker, Dialog, Form, FormItem, Input, Option, Select } from 'element-ui';
import store from './store';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(DatePicker.name, DatePicker);


new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
