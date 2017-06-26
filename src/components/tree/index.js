import vueZtree from './src/vue-ztree';

/* istanbul ignore next */
export default function (Vue) {
	Vue.component(vueZtree.name, vueZtree);
};

const components = {
	vueZtree: vueZtree
}
const install = function (Vue, option) {
	Object.keys(components).forEach((key) => {
		Vue.component(key, components[key]);
	})
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

module.exports = Object.assign(components, { install });   // eslint-disable-line no-undef

