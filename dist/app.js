/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vm = new Vue({
	  el: '#app',
	  name: 'app-hello',

	  render: function render(h) {
	    return h(_App2.default);
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\webfrontend\\github\\vui\\demos\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1263d06c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1263d06c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'app',
	  data: function data() {
	    return {
	      options: [{
	        value: '选项1',
	        label: '黄金糕'
	      }, {
	        value: '选项2',
	        label: '双皮奶'
	      }, {
	        value: '选项3',
	        label: '蚵仔煎'
	      }, {
	        value: '选项4',
	        label: '龙须面'
	      }, {
	        value: '选项5',
	        label: '北京烤鸭'
	      }],
	      value: '选项2',
	      text: '',
	      required: 'required',
	      placeholder: 'qweee',
	      option: { value: '选项3', text: '' }
	    };
	  },

	  methods: {
	    submit: function submit(event) {
	      var button = event.target.value;
	      console.log(button, this.value, this.text, this.option);
	    },
	    change: function change(e) {}
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('el-select', {
	    attrs: {
	      "textField": "text",
	      "valueField": "value",
	      "checkedItem": _vm.option,
	      "placeholder": "placeholder",
	      "required": _vm.required
	    },
	    on: {
	      "change": _vm.change
	    }
	  }, _vm._l((_vm.options), function(item) {
	    return _c('el-option', {
	      attrs: {
	        "text": item.label,
	        "value": item.value
	      }
	    })
	  })), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "button",
	      "value": "获取选中项"
	    },
	    on: {
	      "click": _vm.submit
	    }
	  }), _vm._v(" "), _c('el-select', {
	    attrs: {
	      "textField": "text",
	      "valueField": "value",
	      "placeholder": "placeholder"
	    },
	    on: {
	      "change": _vm.change
	    }
	  }, _vm._l((_vm.options), function(item) {
	    return _c('el-option', {
	      attrs: {
	        "text": item.label,
	        "value": item.value
	      }
	    })
	  })), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "button",
	      "value": "获取value&text"
	    },
	    on: {
	      "click": _vm.submit
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1263d06c", module.exports)
	  }
	}

/***/ }
/******/ ]);