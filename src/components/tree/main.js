import Vue from 'vue'
import App from './App'
var vue_resource = require('./vue-resource.js');

Vue.use(vue_resource);
/* eslint-disable no-new */
var vm = new Vue({
	el: '#app',
	template: '<div class="content"><App/></div>',
	components: { App }
});
