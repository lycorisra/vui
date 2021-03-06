import Vue from 'vue';
// var Vue = require('vue');
import entry from '../examples/app';
import VueRouter from 'vue-router';
import configRouter from '../examples/route.config';
// import Element from 'main/index.js';
// import 'packages/theme-default/src/index.css';
// import demoBlock from './components/demo-block.vue';
import MainFooter from '../examples/components/footer.vue';
import MainHeader from '../examples/components/header.vue';
import SideNav from '../examples/components/side.nav';
// import FooterNav from './components/footer-nav';

// Vue.use(Element);
Vue.use(VueRouter);
// Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
// Vue.component('footer-nav', FooterNav);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: configRouter
});

new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app');
