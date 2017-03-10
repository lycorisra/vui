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

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	exports.default = function (Vue) {
		Vue.component(_select2.default.name, _select2.default);
		Vue.component(_option2.default.name, _option2.default);
	};

	var _select = __webpack_require__(42);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(49);

	var _option2 = _interopRequireDefault(_option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

	var components = {
		ElSelect: _select2.default,
		ElOption: _option2.default
	};
	var install = function install(Vue, option) {
		(0, _keys2.default)(components).forEach(function (key) {
			Vue.component(key, components[key]);
		});
	};

	if (typeof window !== 'undefined' && window.Vue) {
		install(window.Vue);
	}

	module.exports = (0, _assign2.default)(components, { install: install });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Object.assign;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(19) });

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5),
	    core = __webpack_require__(6),
	    ctx = __webpack_require__(7),
	    hide = __webpack_require__(9),
	    PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE],
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(8);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(10),
	    createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(14) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(11),
	    IE8_DOM_DEFINE = __webpack_require__(13),
	    toPrimitive = __webpack_require__(17),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(14) && !__webpack_require__(15)(function () {
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function () {
	  return Object.defineProperty({}, 'a', { get: function () {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12),
	    document = __webpack_require__(5).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(12);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)

	var getKeys = __webpack_require__(20),
	    gOPS = __webpack_require__(35),
	    pIE = __webpack_require__(36),
	    toObject = __webpack_require__(37),
	    IObject = __webpack_require__(24),
	    $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(15)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  }return T;
	} : $assign;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(21),
	    enumBugKeys = __webpack_require__(34);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var has = __webpack_require__(22),
	    toIObject = __webpack_require__(23),
	    arrayIndexOf = __webpack_require__(27)(false),
	    IE_PROTO = __webpack_require__(31)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(24),
	    defined = __webpack_require__(26);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(23),
	    toLength = __webpack_require__(28),
	    toIndex = __webpack_require__(30);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(32)('keys'),
	    uid = __webpack_require__(33);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 35 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 36 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	module.exports = __webpack_require__(6).Object.keys;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(37),
	    $keys = __webpack_require__(20);

	__webpack_require__(41)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4),
	    core = __webpack_require__(6),
	    fails = __webpack_require__(15);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(43)

	/* template */
	var __vue_template__ = __webpack_require__(48)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\select\\select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28f479d6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-28f479d6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] select.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dom = __webpack_require__(44);

	var _emitter = __webpack_require__(45);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _clickoutside = __webpack_require__(46);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _colorBrewer = __webpack_require__(47);

	var _colorBrewer2 = _interopRequireDefault(_colorBrewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_emitter2.default],
	    name: 'ElSelect',
	    componentName: 'ElSelect',
	    props: {
	        clear: Boolean,
	        filter: Boolean,
	        checkeditem: [String, Number, Array, Object],
	        tagfield: [Boolean, String, Number, Array, Object],
	        valuefield: String,
	        textfield: String,
	        multiple: Boolean
	    },
	    data: function data() {
	        return {
	            text: String,
	            value: [String, Number, Array],
	            visible: false,
	            options: [],
	            cachedOptions: []
	        };
	    },

	    computed: {
	        styles: function styles() {
	            var style = {
	                'z-index': -1,
	                opacity: 0,
	                display: 'block'
	            };
	            if (this.visible == true) {
	                style = {
	                    'z-index': 20,
	                    opacity: 1,
	                    display: 'block'
	                };
	            }
	            return style;
	        }
	    },

	    directives: { Clickoutside: _clickoutside2.default },
	    watch: {
	        value: function value(val) {
	            if (this.multiple) {
	                this.setSelected();
	            }
	        }
	    },
	    methods: {
	        getOption: function getOption(value) {
	            for (var i = 0, option; option = this.options[i]; i++) {
	                if (option.value == value) {
	                    return option;
	                }
	            }

	            var label = typeof value === 'string' || typeof value === 'number' ? value : '';
	            var newOption = {
	                value: value,
	                text: label
	            };
	            if (this.multiple) {
	                newOption.hitState = false;
	            }
	            return newOption;
	        },
	        setSelected: function setSelected() {
	            if (!this.multiple) {
	                var option = this.getOption(this.value);
	            }
	        },
	        toggleMenu: function toggleMenu(visible) {
	            this.visible = !this.visible;
	            if (this.visible) {
	                var i = 0,
	                    ul = document.querySelector('.dropdown ul.options', this.$el);

	                (0, _dom.setPos)(ul);
	            }
	        },
	        closeMenu: function closeMenu() {
	            this.visible = false;
	        },
	        selectOption: function selectOption(option) {
	            if (!this.multiple) {
	                var item = {
	                    value: option.value,
	                    text: option.text
	                };
	                this.$emit('change', item);

	                this.text = option.text;
	                this.value = option.value;
	                this.visible = false;

	                var obj = this.checkeditem ? this.checkeditem : this.$parent;

	                this.$parent.$set(obj, this.valuefield, option.value);
	                this.$parent.$set(obj, this.textfield, option.text);
	                this.$parent.$set(obj, this.tagfield, option.tag);
	            } else {
	                var index = -1;
	                this.value.forEach(function (item, i) {
	                    if (item === option.value) {
	                        index = i;
	                    }
	                });
	                if (index > -1) {
	                    this.value.splice(index, 1);
	                } else {
	                    this.value.push(option.value);
	                }
	            }
	        }
	    },
	    created: function created() {
	        this.$on('selectOption', this.selectOption);
	    },
	    mounted: function mounted() {
	        var obj = this.checkeditem ? this.checkeditem : this.$parent,
	            value = obj[this.valuefield];

	        var option = this.getOption(value);
	        this.text = option.text;
	        console.log(this.styles);
	    }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var trim = function trim(string) {
		return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	};

	var on = exports.on = function on(el, event, handler) {
		if (el && event && handler) {
			if (el.addEventListener) {
				el.addEventListener(event, handler, false);
			} else if (el.attachEvent) {
					el.attachEvent('on' + event, handler);
				} else {
						el['on' + event] = event;
					}
		}
	};

	var off = exports.off = function off(el, event, handler) {
		if (el && event && handler) {
			if (el.removeEventListener) {
				el.removeEventListener(event, handler, false);
			} else if (el.detachEvent) {
					el.detachEvent('on' + event, handler);
				} else {
						el['on' + event] = null;
					}
		}
	};
	var hasClass = exports.hasClass = function hasClass(el, cls) {
		if (!el || !cls) return false;
		if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
		if (el.classList) {
			return el.classList.contains(cls);
		} else {
			return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
		}
	};
	var addClass = exports.addClass = function addClass(el, cls) {
		if (!el) return;
		var curClass = el.className;
		var classes = (cls || '').split(' ');

		for (var i = 0, j = classes.length; i < j; i++) {
			var clsName = classes[i];
			if (!clsName) continue;

			if (el.classList) {
				el.classList.add(clsName);
			} else {
				if (!hasClass(el, clsName)) {
					curClass += ' ' + clsName;
				}
			}
		}
		if (!el.classList) {
			el.className = curClass;
		}
	};
	var removeClass = exports.removeClass = function removeClass(el, cls) {
		if (!el || !cls) return;
		var classes = cls.split(' ');
		var curClass = ' ' + el.className + ' ';

		for (var i = 0, j = classes.length; i < j; i++) {
			var clsName = classes[i];
			if (!clsName) continue;

			if (el.classList) {
				el.classList.remove(clsName);
			} else {
				if (hasClass(el, clsName)) {
					curClass = curClass.replace(' ' + clsName + ' ', ' ');
				}
			}
		}
		if (!el.classList) {
			el.className = trim(curClass);
		}
	};

	var isIE = exports.isIE = function isIE() {
		var ua = navigator.userAgent.toLowerCase();
		var result = ua.match(/msie ([\d.]+)/) || ua.match(/rv:([\d.]+)\) like gecko/);
		return !!result && result.length > 0;
	};

	var getOffsetParent = exports.getOffsetParent = function getOffsetParent(el) {
		var parent = null,
		    parents = $(el).parents();

		parents.each(function (i, e) {
			if ($(e).css('position') === 'fixed') {
				parent = e;
				return parent;
			}
		});
		return parent;
	};
	var getPos = exports.getPos = function getPos(el) {
		var rec = el.getBoundingClientRect();

		return {
			top: rec.top,
			left: rec.left,
			right: rec.right,
			bottom: rec.bottom
		};
		var offset = {
			top: el.offsetTop,
			left: el.offsetLeft
		};
		if (el.offsetParent) {
			var pos = getPos(el.offsetParent);
			offset.top += pos.top;
			offset.left += pos.left;
		}
		return offset;
	};
	var setPos = exports.setPos = function setPos(el) {
		$(el).css({
			right: '',
			bottom: ''
		});
		var parent = $(el).parent()[0],
		    offset = getPos(parent),
		    winW = $(window).width(),
		    winH = $(window).height(),
		    right = 0,
		    bottom = 0,
		    isReset = false,
		    style = {};

		bottom = winH - offset.bottom - el.offsetHeight;
		right = winW - offset.right - el.offsetWidth;

		if (bottom < 0) {
			isReset = true;
			style.top = offset.top - el.offsetHeight + 'px';
		}
		if (right < 0) {
			isReset = true;
			style.left = offset.left - el.offsetWidth + 'px';
		}
		isReset && $(el).css(style);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function _broadcast(componentName, eventName, params) {
	  this.$children.forEach(function (child) {
	    var name = child.$options.componentName;

	    if (name === componentName) {
	      child.$emit.apply(child, [eventName].concat(params));
	    } else {
	      _broadcast.apply(child, [componentName, eventName].concat([params]));
	    }
	  });
	}
	exports.default = {
	  methods: {
	    dispatch: function dispatch(componentName, eventName, params) {
	      var parent = this.$parent || this.$root;
	      var name = parent.$options.componentName;

	      while (parent && (!name || name !== componentName)) {
	        parent = parent.$parent;

	        if (parent) {
	          name = parent.$options.componentName;
	        }
	      }
	      if (parent) {
	        parent.$emit.apply(parent, [eventName].concat(params));
	      }
	    },
	    broadcast: function broadcast(componentName, eventName, params) {
	      _broadcast.call(this, componentName, eventName, params);
	    }
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _dom = __webpack_require__(44);

	var nodeList = [];
	var ctx = '@@clickoutsideContext';

	(0, _dom.on)(document, 'click', function (e) {
		nodeList.forEach(function (node) {
			return node[ctx].documentHandler(e);
		});
	});
	exports.default = {
		bind: function bind(el, binding, vnode) {
			var id = nodeList.push(el) - 1;
			var documentHandler = function documentHandler(e) {
				if (!vnode.context || el.contains(e.target) || vnode.context.popperElm && vnode.context.popperElm.contains(e.target)) return;

				if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
					vnode.context[el[ctx].methodName]();
				} else {
					el[ctx].bindingFn && el[ctx].bindingFn();
				}
			};
			el[ctx] = {
				id: id,
				documentHandler: documentHandler,
				methodName: binding.expression,
				bindingFn: binding.value
			};
		},
		update: function update(el, binding) {
			el[ctx].methodName = binding.expression;
			el[ctx].bindingFn = binding.value;
		},
		unbind: function unbind(el) {
			var len = nodeList.length;

			for (var i = 0; i < len; i++) {
				if (nodeList[i][ctx].id === el[ctx].id) {
					nodeList.splice(i, 1);
					break;
				}
			}
		}
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.closeMenu),
	      expression: "closeMenu"
	    }],
	    staticClass: "dropdown",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.toggleMenu($event)
	      }
	    }
	  }, [_c('span', {
	    staticClass: "inputwrap"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.text),
	      expression: "text"
	    }],
	    attrs: {
	      "type": "text",
	      "readonly": !_vm.filter || _vm.multiple,
	      "placeholder": "请选择项"
	    },
	    domProps: {
	      "value": _vm._s(_vm.text)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.text = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "arrow"
	  })]), _vm._v(" "), _c('ul', {
	    staticClass: "options",
	    style: (_vm.styles)
	  }, [_vm._t("default", [_c('span')])], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-28f479d6", module.exports)
	  }
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(50)

	/* template */
	var __vue_template__ = __webpack_require__(51)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\select\\option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-44f12e62", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-44f12e62", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] option.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _emitter = __webpack_require__(45);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_emitter2.default],
	    name: 'ElOption',
	    componentName: 'ElOption',
	    props: {
	        value: {
	            required: true
	        },
	        text: [String, Number],
	        tag: [Boolean, String, Number, Array, Object]
	    },
	    data: function data() {
	        return {
	            index: -1,
	            groupDisabled: false,
	            visible: true,
	            hitState: false
	        };
	    },

	    computed: {
	        parent: function parent() {
	            var result = this.$parent;

	            return result;
	        },
	        selected: function selected() {
	            var result = false;
	            if (!this.parent.multiple) result = this.value == this.parent.value;else result = this.parent.value.indexOf(this.value) > -1;
	            return result;
	        }
	    },
	    methods: {
	        selectOption: function selectOption() {
	            this.dispatch('ElSelect', 'selectOption', this);
	        }
	    },
	    created: function created() {
	        this.parent.options.push(this);
	    }
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    staticClass: "dropdown",
	    class: {
	      'selected': _vm.selected
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.selectOption($event)
	      }
	    }
	  }, [_vm._t("default", [_c('span', [_vm._v(_vm._s(_vm.text))])])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-44f12e62", module.exports)
	  }
	}

/***/ }
/******/ ]);