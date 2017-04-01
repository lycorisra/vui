import DatePicker from './src/picker/date-picker';

const components = { DatePicker };

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


