import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'yacss/dist/yacss';

Vue.config.productionTip = false;

Vue.directive('escape', {
  bind(el) {
    /* eslint-disable-next-line */
    el.innerHTML = el.innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

const heroImages = document.getElementsByClassName('hero-img');
for (let i = 0; i < heroImages.length; i += 1) {
  const dataImage = heroImages[i].getAttribute('data-image');
  if (dataImage) {
    const heroImage = heroImages[i];
    heroImage.style.background = `url('${dataImage}')`;
    heroImage.style.backgroundSize = 'cover';
    heroImage.style.backgroundRepeat = 'no-repeat';
  }
}

/* eslint-disable-next-line */
initTheme({
  primaryColor: 'indigo',
  accentColor: 'red',
  classes: ['all'],
});
