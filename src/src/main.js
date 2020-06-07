import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'yacss/dist/yacss';

/* eslint-disable-next-line */
initTheme({
  primaryColor: 'indigo',
  accentColor: 'red',
  classes: ['all'],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
