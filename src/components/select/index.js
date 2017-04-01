import Select from './src/select';
import Option from './src/option';

/* istanbul ignore next */
export default function (Vue) {
	Vue.component(Select.name, Select);
	Vue.component(Option.name, Option);
};

const components = {
	ElSelect: Select,
	ElOption: Option
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


