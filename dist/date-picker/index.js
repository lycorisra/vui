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
/******/ 	__webpack_require__.p = "../../../dist/date-picker";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	var _keys = __webpack_require__(38);

	var _keys2 = _interopRequireDefault(_keys);

	var _datePicker = __webpack_require__(42);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var components = { DatePicker: _datePicker2.default };

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _picker = __webpack_require__(43);

	var _picker2 = _interopRequireDefault(_picker);

	var _date = __webpack_require__(54);

	var _date2 = _interopRequireDefault(_date);

	var _dateRange = __webpack_require__(126);

	var _dateRange2 = _interopRequireDefault(_dateRange);

	var _assist = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getPanel = function getPanel(type) {
	    if (type === 'daterange' || type === 'datetimerange') {
	        return _dateRange2.default;
	    }
	    return _date2.default;
	};

	exports.default = {
	    mixins: [_picker2.default],
	    props: {
	        type: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
	            },

	            default: 'date'
	        },
	        value: {
	            defalue: ''
	        }
	    },
	    created: function created() {
	        this.panel = getPanel(this.type);
	    }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(133)

	/* script */
	__vue_exports__ = __webpack_require__(44)

	/* template */
	var __vue_template__ = __webpack_require__(53)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\picker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2ee003b3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2ee003b3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] picker.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dropdown = __webpack_require__(45);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _clickoutside = __webpack_require__(50);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _assist = __webpack_require__(47);

	var _util = __webpack_require__(51);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'date-picker';

	var DEFAULT_FORMATS = {
	    date: 'yyyy-MM-dd',
	    month: 'yyyy-MM',
	    year: 'yyyy',
	    datetime: 'yyyy-MM-dd HH:mm:ss',
	    time: 'HH:mm:ss',
	    timerange: 'HH:mm:ss',
	    daterange: 'yyyy-MM-dd',
	    datetimerange: 'yyyy-MM-dd HH:mm:ss'
	};

	var RANGE_SEPARATOR = ' - ';

	var DATE_FORMATTER = function DATE_FORMATTER(value, format) {
	    return (0, _util.formatDate)(value, format);
	};
	var DATE_PARSER = function DATE_PARSER(text, format) {
	    return (0, _util.parseDate)(text, format);
	};
	var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
	    if (Array.isArray(value) && value.length === 2) {
	        var start = value[0];
	        var end = value[1];

	        if (start && end) {
	            return (0, _util.formatDate)(start, format) + RANGE_SEPARATOR + (0, _util.formatDate)(end, format);
	        }
	    }
	    return '';
	};
	var RANGE_PARSER = function RANGE_PARSER(text, format) {
	    var array = text.split(RANGE_SEPARATOR);
	    if (array.length === 2) {
	        var range1 = array[0];
	        var range2 = array[1];

	        return [(0, _util.parseDate)(range1, format), (0, _util.parseDate)(range2, format)];
	    }
	    return [];
	};

	var TYPE_VALUE_RESOLVER_MAP = {
	    default: {
	        formatter: function formatter(value) {
	            if (!value) return '';
	            return '' + value;
	        },
	        parser: function parser(text) {
	            if (text === undefined || text === '') return null;
	            return text;
	        }
	    },
	    date: {
	        formatter: DATE_FORMATTER,
	        parser: DATE_PARSER
	    },
	    datetime: {
	        formatter: DATE_FORMATTER,
	        parser: DATE_PARSER
	    },
	    daterange: {
	        formatter: RANGE_FORMATTER,
	        parser: RANGE_PARSER
	    },
	    datetimerange: {
	        formatter: RANGE_FORMATTER,
	        parser: RANGE_PARSER
	    },
	    timerange: {
	        formatter: RANGE_FORMATTER,
	        parser: RANGE_PARSER
	    },
	    time: {
	        formatter: DATE_FORMATTER,
	        parser: DATE_PARSER
	    },
	    month: {
	        formatter: DATE_FORMATTER,
	        parser: DATE_PARSER
	    },
	    year: {
	        formatter: DATE_FORMATTER,
	        parser: DATE_PARSER
	    },
	    number: {
	        formatter: function formatter(value) {
	            if (!value) return '';
	            return '' + value;
	        },
	        parser: function parser(text) {
	            var result = Number(text);

	            if (!isNaN(text)) {
	                return result;
	            } else {
	                return null;
	            }
	        }
	    }
	};

	exports.default = {
	    components: { drop: _dropdown2.default },
	    directives: { clickoutside: _clickoutside2.default },
	    props: {
	        format: {
	            type: String
	        },
	        readonly: {
	            type: Boolean,
	            default: false
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        editable: {
	            type: Boolean,
	            default: true
	        },
	        clearable: {
	            type: Boolean,
	            default: true
	        },
	        confirm: {
	            type: Boolean,
	            default: false
	        },
	        open: {
	            type: Boolean,
	            default: null
	        },
	        size: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['small', 'large']);
	            }
	        },
	        placeholder: {
	            type: String,
	            default: ''
	        },
	        placement: {
	            validator: function validator(value) {
	                return (0, _assist.oneOf)(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
	            },

	            default: 'bottom-start'
	        },
	        options: {
	            type: Object
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            showClose: false,
	            visible: false,
	            picker: null,
	            internalValue: '',
	            disableClickOutSide: false };
	    },

	    computed: {
	        opened: function opened() {
	            return this.open === null ? this.visible : this.open;
	        },
	        iconType: function iconType() {
	            var icon = 'ios-calendar-outline';
	            if (this.type === 'time' || this.type === 'timerange') icon = 'ios-clock-outline';
	            if (this.showClose) icon = 'ios-close';
	            return icon;
	        },
	        transition: function transition() {
	            if (this.placement === 'bottom-start' || this.placement === 'bottom' || this.placement === 'bottom-end') {
	                return 'slide-up';
	            } else {
	                return 'slide-down';
	            }
	        },
	        selectionMode: function selectionMode() {
	            if (this.type === 'month') {
	                return 'month';
	            } else if (this.type === 'year') {
	                return 'year';
	            }

	            return 'day';
	        },

	        visualValue: {
	            get: function get() {
	                var value = this.internalValue;
	                if (!value) return;
	                var formatter = (TYPE_VALUE_RESOLVER_MAP[this.type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;
	                var format = DEFAULT_FORMATS[this.type];

	                return formatter(value, this.format || format);
	            },
	            set: function set(value) {
	                if (value) {
	                    var type = this.type;
	                    var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;
	                    var parsedValue = parser(value, this.format || DEFAULT_FORMATS[type]);
	                    if (parsedValue) {
	                        if (this.picker) this.picker.value = parsedValue;
	                    }
	                    return;
	                }
	                if (this.picker) this.picker.value = value;
	            }
	        }
	    },
	    methods: {
	        handleClose: function handleClose() {
	            if (this.open !== null) return;
	            if (!this.disableClickOutSide) this.visible = false;
	            this.disableClickOutSide = false;
	        },
	        handleFocus: function handleFocus() {
	            if (this.readonly) return;
	            this.visible = true;
	        },
	        handleInputChange: function handleInputChange(event) {
	            var oldValue = this.visualValue;
	            var value = event.target.value;

	            var correctValue = '';
	            var correctDate = '';
	            var type = this.type;
	            var format = this.format || DEFAULT_FORMATS[type];

	            if (type === 'daterange' || type === 'timerange' || type === 'datetimerange') {
	                var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;

	                var formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;

	                var parsedValue = parser(value, format);

	                if (parsedValue[0] instanceof Date && parsedValue[1] instanceof Date) {
	                    if (parsedValue[0].getTime() > parsedValue[1].getTime()) {
	                        correctValue = oldValue;
	                    } else {
	                        correctValue = formatter(parsedValue, format);
	                    }
	                } else {
	                    correctValue = oldValue;
	                }

	                correctDate = parser(correctValue, format);
	            } else if (type === 'time') {
	                var parsedDate = (0, _util.parseDate)(value, format);

	                if (parsedDate instanceof Date) {
	                    if (this.disabledHours.length || this.disabledMinutes.length || this.disabledSeconds.length) {
	                        var hours = parsedDate.getHours();
	                        var minutes = parsedDate.getMinutes();
	                        var seconds = parsedDate.getSeconds();

	                        if (this.disabledHours.length && this.disabledHours.indexOf(hours) > -1 || this.disabledMinutes.length && this.disabledMinutes.indexOf(minutes) > -1 || this.disabledSeconds.length && this.disabledSeconds.indexOf(seconds) > -1) {
	                            correctValue = oldValue;
	                        } else {
	                            correctValue = (0, _util.formatDate)(parsedDate, format);
	                        }
	                    } else {
	                        correctValue = (0, _util.formatDate)(parsedDate, format);
	                    }
	                } else {
	                    correctValue = oldValue;
	                }

	                correctDate = (0, _util.parseDate)(correctValue, format);
	            } else {
	                var _parsedDate = (0, _util.parseDate)(value, format);

	                if (_parsedDate instanceof Date) {
	                    var options = this.options || false;
	                    if (options && options.disabledDate && typeof options.disabledDate === 'function' && options.disabledDate(new Date(_parsedDate))) {
	                        correctValue = oldValue;
	                    } else {
	                        correctValue = (0, _util.formatDate)(_parsedDate, format);
	                    }
	                } else {
	                    correctValue = oldValue;
	                }

	                correctDate = (0, _util.parseDate)(correctValue, format);
	            }

	            this.visualValue = correctValue;
	            event.target.value = correctValue;
	            this.internalValue = correctDate;

	            if (correctValue !== oldValue) this.emitChange(correctDate);
	        },
	        handleInputMouseenter: function handleInputMouseenter() {
	            if (this.readonly || this.disabled) return;
	            if (this.visualValue && this.clearable) {
	                this.showClose = true;
	            }
	        },
	        handleInputMouseleave: function handleInputMouseleave() {
	            this.showClose = false;
	        },
	        handleIconClick: function handleIconClick() {
	            if (!this.showClose) return;
	            this.handleClear();
	        },
	        handleClear: function handleClear() {
	            this.visible = false;
	            this.internalValue = '';
	            this.value = '';

	            this.$dispatch('on-form-change', '');
	        },
	        showPicker: function showPicker() {
	            var _this = this;

	            if (!this.picker) {
	                var type = this.type;

	                this.picker = new Vue(this.panel).$mount(this.$refs.picker);
	                if (type === 'datetime' || type === 'datetimerange') {
	                    this.confirm = true;
	                    this.picker.showTime = true;
	                }
	                this.picker.value = this.internalValue;
	                this.picker.confirm = this.confirm;
	                this.picker.selectionMode = this.selectionMode;
	                if (this.format) this.picker.format = this.format;

	                if (this.disabledHours) this.picker.disabledHours = this.disabledHours;
	                if (this.disabledMinutes) this.picker.disabledMinutes = this.disabledMinutes;
	                if (this.disabledSeconds) this.picker.disabledSeconds = this.disabledSeconds;
	                if (this.hideDisabledOptions) this.picker.hideDisabledOptions = this.hideDisabledOptions;

	                var options = this.options;
	                for (var option in options) {
	                    this.picker[option] = options[option];
	                }

	                this.picker.$on('on-pick', function (date) {
	                    var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	                    if (!_this.confirm) _this.visible = visible;
	                    _this.value = date;
	                    _this.picker.value = date;
	                    _this.picker.resetView && _this.picker.resetView();
	                    _this.emitChange(date);
	                });

	                this.picker.$on('on-pick-clear', function () {
	                    _this.handleClear();
	                });
	                this.picker.$on('on-pick-success', function () {
	                    _this.visible = false;
	                    _this.$emit('on-ok');
	                });
	                this.picker.$on('on-pick-click', function () {
	                    return _this.disableClickOutSide = true;
	                });
	            }
	            if (this.internalValue instanceof Date) {
	                this.picker.date = new Date(this.internalValue.getTime());
	            } else {
	                this.picker.value = this.internalValue;
	            }
	            this.picker.resetView && this.picker.resetView();
	        },
	        emitChange: function emitChange(date) {
	            var type = this.type;
	            var format = this.format || DEFAULT_FORMATS[type];
	            var formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;

	            var newDate = formatter(date, format);
	            if (type === 'daterange' || type === 'timerange') {
	                newDate = [newDate.split(RANGE_SEPARATOR)[0], newDate.split(RANGE_SEPARATOR)[1]];
	            }

	            this.$emit('on-change', newDate);
	            this.$dispatch('on-form-change', newDate);
	        }
	    },
	    watch: {
	        visible: function visible(val) {
	            if (val) {
	                this.showPicker();
	                this.$refs.drop.update();
	                if (this.open === null) this.$emit('on-open-change', true);
	            } else {
	                if (this.picker) this.picker.resetView && this.picker.resetView(true);
	                this.$refs.drop.destroy();
	                if (this.open === null) this.$emit('on-open-change', false);
	            }
	        },
	        internalValue: function internalValue(val) {
	            if (!val && this.picker && typeof this.picker.handleClear === 'function') {
	                this.picker.handleClear();
	            }
	        },

	        value: {
	            immediate: true,
	            handler: function handler(val) {
	                var type = this.type;
	                var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;

	                if (val && type === 'time' && !(val instanceof Date)) {
	                    val = parser(val, this.format || DEFAULT_FORMATS[type]);
	                } else if (val && type === 'timerange' && Array.isArray(val) && val.length === 2 && !(val[0] instanceof Date) && !(val[1] instanceof Date)) {
	                    val = val.join(RANGE_SEPARATOR);
	                    val = parser(val, this.format || DEFAULT_FORMATS[type]);
	                }

	                this.internalValue = val;
	            }
	        },
	        open: function open(val) {
	            if (val === true) {
	                this.visible = val;
	                this.$emit('on-open-change', true);
	            } else if (val === false) {
	                this.$emit('on-open-change', false);
	            }
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.picker) {
	            this.picker.$destroy();
	        }
	    },
	    ready: function ready() {
	        if (this.open !== null) this.visible = this.open;
	    },
	    created: function created() {
	        this.$on('on-form-blur', function () {
	            return false;
	        });
	        this.$on('on-form-change', function () {
	            return false;
	        });
	    }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(46)

	/* template */
	var __vue_template__ = __webpack_require__(49)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\select\\dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1dbc242a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1dbc242a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assist = __webpack_require__(47);

	var _popper = __webpack_require__(48);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        placement: {
	            type: String,
	            default: 'bottom-start'
	        }
	    },
	    data: function data() {
	        return {
	            popper: null,
	            width: ''
	        };
	    },

	    computed: {
	        styles: function styles() {
	            var style = {};
	            if (this.width) style.width = this.width + 'px';
	            return style;
	        }
	    },
	    methods: {
	        update: function update() {
	            var _this = this;

	            if (this.popper) {
	                this.$nextTick(function () {
	                    _this.popper.update();
	                });
	            } else {
	                this.$nextTick(function () {
	                    _this.popper = new _popper2.default(_this.$parent.$refs.reference, _this.$el, {
	                        gpuAcceleration: false,
	                        placement: _this.placement,
	                        boundariesPadding: 0,
	                        forceAbsolute: true,
	                        boundariesElement: 'body',
	                        onCreate: function onCreate() {
	                            _this.resetTransformOrigin(_this.popper);
	                        }
	                    });
	                });
	            }
	        },
	        destroy: function destroy() {
	            var _this2 = this;

	            if (this.popper) {
	                this.resetTransformOrigin(this.popper);
	                setTimeout(function () {
	                    _this2.popper.destroy();
	                    _this2.popper = null;
	                }, 300);
	            }
	        },
	        resetTransformOrigin: function resetTransformOrigin(popper) {
	            var placementMap = { top: 'bottom', bottom: 'top' };
	            var placement = popper.popper.getAttribute('x-placement').split('-')[0];
	            var origin = placementMap[placement];
	            popper.popper.style.transformOrigin = 'center ' + origin;
	        }
	    },
	    compiled: function compiled() {
	        this.$on('on-update-popper', this.update);
	        this.$on('on-destroy-popper', this.destroy);
	    },
	    beforeDestory: function beforeDestory() {
	        if (this.popper) {
	            this.popper.destroy();
	        }
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.oneOf = oneOf;
	exports.camelcaseToHyphen = camelcaseToHyphen;
	exports.getScrollBarSize = getScrollBarSize;
	exports.getStyle = getStyle;
	exports.warnProp = warnProp;
	exports.scrollTop = scrollTop;
	function oneOf(value, validList) {
	    for (var i = 0; i < validList.length; i++) {
	        if (value === validList[i]) {
	            return true;
	        }
	    }
	    return false;
	}

	function camelcaseToHyphen(str) {
	    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	var cached = void 0;
	function getScrollBarSize(fresh) {
	    if (fresh || cached === undefined) {
	        var inner = document.createElement('div');
	        inner.style.width = '100%';
	        inner.style.height = '200px';

	        var outer = document.createElement('div');
	        var outerStyle = outer.style;

	        outerStyle.position = 'absolute';
	        outerStyle.top = 0;
	        outerStyle.left = 0;
	        outerStyle.pointerEvents = 'none';
	        outerStyle.visibility = 'hidden';
	        outerStyle.width = '200px';
	        outerStyle.height = '150px';
	        outerStyle.overflow = 'hidden';

	        outer.appendChild(inner);

	        document.body.appendChild(outer);

	        var widthContained = inner.offsetWidth;
	        outer.style.overflow = 'scroll';
	        var widthScroll = inner.offsetWidth;

	        if (widthContained === widthScroll) {
	            widthScroll = outer.clientWidth;
	        }

	        document.body.removeChild(outer);

	        cached = widthContained - widthScroll;
	    }
	    return cached;
	}

	var MutationObserver = exports.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;

	function camelCase(name) {
	    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
	        return offset ? letter.toUpperCase() : letter;
	    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
	}
	function getStyle(element, styleName) {
	    if (!element || !styleName) return null;
	    styleName = camelCase(styleName);
	    if (styleName === 'float') {
	        styleName = 'cssFloat';
	    }
	    try {
	        var computed = document.defaultView.getComputedStyle(element, '');
	        return element.style[styleName] || computed ? computed[styleName] : null;
	    } catch (e) {
	        return element.style[styleName];
	    }
	}

	function firstUpperCase(str) {
	    return str.toString()[0].toUpperCase() + str.toString().slice(1);
	}
	exports.firstUpperCase = firstUpperCase;
	function warnProp(component, prop, correctType, wrongType) {
	    correctType = firstUpperCase(correctType);
	    wrongType = firstUpperCase(wrongType);
	    console.error('[iView warn]: Invalid prop: type check failed for prop ' + prop + '. Expected ' + correctType + ', got ' + wrongType + '. (found in component: ' + component + ')');
	}

	function typeOf(obj) {
	    var toString = Object.prototype.toString;
	    var map = {
	        '[object Boolean]': 'boolean',
	        '[object Number]': 'number',
	        '[object String]': 'string',
	        '[object Function]': 'function',
	        '[object Array]': 'array',
	        '[object Date]': 'date',
	        '[object RegExp]': 'regExp',
	        '[object Undefined]': 'undefined',
	        '[object Null]': 'null',
	        '[object Object]': 'object'
	    };
	    return map[toString.call(obj)];
	}

	function deepCopy(data) {
	    var t = typeOf(data);
	    var o = void 0;

	    if (t === 'array') {
	        o = [];
	    } else if (t === 'object') {
	        o = {};
	    } else {
	        return data;
	    }

	    if (t === 'array') {
	        for (var i = 0; i < data.length; i++) {
	            o.push(deepCopy(data[i]));
	        }
	    } else if (t === 'object') {
	        for (var _i in data) {
	            o[_i] = deepCopy(data[_i]);
	        }
	    }
	    return o;
	}

	exports.deepCopy = deepCopy;
	function scrollTop(el) {
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var to = arguments[2];
	    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;

	    if (!window.requestAnimationFrame) {
	        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	            return window.setTimeout(callback, 1000 / 60);
	        };
	    }
	    var difference = Math.abs(from - to);
	    var step = Math.ceil(difference / duration * 50);

	    function scroll(start, end, step) {
	        if (start === end) return;

	        var d = start + step > end ? end : start + step;
	        if (start > end) {
	            d = start - step < end ? end : start - step;
	        }

	        if (el === window) {
	            window.scrollTo(d, d);
	        } else {
	            el.scrollTop = d;
	        }
	        window.requestAnimationFrame(function () {
	            return scroll(d, end, step);
	        });
	    }
	    scroll(from, to, step);
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.0.7
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	(function (global, factory) {
	     true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Popper = factory();
	})(this, function () {
	    'use strict';

	    /**
	     * Returns the offset parent of the given element
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */

	    function getOffsetParent(element) {
	        // NOTE: 1 DOM access here
	        var offsetParent = element.offsetParent;
	        var nodeName = offsetParent && offsetParent.nodeName;

	        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	            return window.document.documentElement;
	        }

	        return offsetParent;
	    }

	    /**
	     * Get CSS computed property of the given element
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Eement} element
	     * @argument {String} property
	     */
	    function getStyleComputedProperty(element, property) {
	        if (element.nodeType !== 1) {
	            return [];
	        }
	        // NOTE: 1 DOM access here
	        var css = window.getComputedStyle(element, null);
	        return property ? css[property] : css;
	    }

	    /**
	     * Returns the parentNode or the host of the element
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Element} element
	     * @returns {Element} parent
	     */
	    function getParentNode(element) {
	        if (element.nodeName === 'HTML') {
	            return element;
	        }
	        return element.parentNode || element.host;
	    }

	    /**
	     * Returns the scrolling parent of the given element
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Element} element
	     * @returns {Element} scroll parent
	     */
	    function getScrollParent(element) {
	        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	        if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
	            return window.document.body;
	        }

	        // Firefox want us to check `-x` and `-y` variations as well

	        var _getStyleComputedProp = getStyleComputedProperty(element),
	            overflow = _getStyleComputedProp.overflow,
	            overflowX = _getStyleComputedProp.overflowX,
	            overflowY = _getStyleComputedProp.overflowY;

	        if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	            return element;
	        }

	        return getScrollParent(getParentNode(element));
	    }

	    /**
	     * Check if the given element is fixed or is inside a fixed parent
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Element} element
	     * @argument {Element} customContainer
	     * @returns {Boolean} answer to "isFixed?"
	     */
	    function isFixed(element) {
	        var nodeName = element.nodeName;
	        if (nodeName === 'BODY' || nodeName === 'HTML') {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'position') === 'fixed') {
	            return true;
	        }
	        return isFixed(getParentNode(element));
	    }

	    /**
	     * Helper used to get the position which will be applied to the popper
	     * @method
	     * @memberof Popper.Utils
	     * @param {HTMLElement} element - popper element
	     * @returns {String} position
	     */
	    function getPosition(element) {
	        var container = getOffsetParent(element);

	        // Decide if the popper will be fixed
	        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
	        var isParentFixed = isFixed(container);
	        return isParentFixed ? 'fixed' : 'absolute';
	    }

	    /*
	     * Helper to detect borders of a given element
	     * @method
	     * @memberof Popper.Utils
	     * @param {CSSStyleDeclaration} styles - result of `getStyleComputedProperty` on the given element
	     * @param {String} axis - `x` or `y`
	     * @return {Number} borders - the borders size of the given axis
	     */

	    function getBordersSize(styles, axis) {
	        var sideA = axis === 'x' ? 'Left' : 'Top';
	        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

	        return Number(styles['border' + sideA + 'Width'].split('px')[0]) + Number(styles['border' + sideB + 'Width'].split('px')[0]);
	    }

	    /**
	     * Get bounding client rect of given element
	     * @method
	     * @memberof Popper.Utils
	     * @param {HTMLElement} element
	     * @return {Object} client rect
	     */
	    function getBoundingClientRect(element) {
	        var isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
	        var rect = void 0;

	        // IE10 10 FIX: Please, don't ask, the element isn't
	        // considered in DOM in some circumstances...
	        // This isn't reproducible in IE10 compatibility mode of IE11
	        if (isIE10) {
	            try {
	                rect = element.getBoundingClientRect();
	            } catch (err) {
	                rect = {};
	            }
	        } else {
	            rect = element.getBoundingClientRect();
	        }

	        var result = {
	            left: rect.left,
	            top: rect.top,
	            right: rect.right,
	            bottom: rect.bottom,
	            width: rect.right - rect.left,
	            height: rect.bottom - rect.top
	        };

	        // IE10 FIX: `getBoundingClientRect`, when executed on `documentElement`
	        // will not take in account the `scrollTop` and `scrollLeft`
	        if (element.nodeName === 'HTML' && isIE10) {
	            var _window$document$docu = window.document.documentElement,
	                scrollTop = _window$document$docu.scrollTop,
	                scrollLeft = _window$document$docu.scrollLeft;

	            result.top -= scrollTop;
	            result.bottom -= scrollTop;
	            result.left -= scrollLeft;
	            result.right -= scrollLeft;
	        }

	        // subtract scrollbar size from sizes
	        var horizScrollbar = rect.width - (element.clientWidth || rect.right - rect.left);
	        var vertScrollbar = rect.height - (element.clientHeight || rect.bottom - rect.top);

	        // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	        // we make this check conditional for performance reasons
	        if (horizScrollbar || vertScrollbar) {
	            var styles = getStyleComputedProperty(element);
	            horizScrollbar -= getBordersSize(styles, 'x');
	            vertScrollbar -= getBordersSize(styles, 'y');
	        }

	        result.right -= horizScrollbar;
	        result.width -= horizScrollbar;
	        result.bottom -= vertScrollbar;
	        result.height -= vertScrollbar;

	        return result;
	    }

	    function getScroll(element) {
	        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

	        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	        var nodeName = element.nodeName;

	        if (nodeName === 'BODY' || nodeName === 'HTML') {
	            var html = window.document.documentElement;
	            var scrollingElement = window.document.scrollingElement || html;
	            return scrollingElement[upperSide];
	        }

	        return element[upperSide];
	    }

	    /*
	     * Sum or subtract the element scroll values (left and top) from a given rect object
	     * @method
	     * @memberof Popper.Utils
	     * @param {Object} rect - Rect object you want to change
	     * @param {HTMLElement} element - The element from the function reads the scroll values
	     * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	     * @return {Object} rect - The modifier rect object
	     */
	    function includeScroll(rect, element) {
	        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	        var scrollTop = getScroll(element, 'top');
	        var scrollLeft = getScroll(element, 'left');
	        var modifier = subtract ? -1 : 1;
	        rect.top += scrollTop * modifier;
	        rect.bottom += scrollTop * modifier;
	        rect.left += scrollLeft * modifier;
	        rect.right += scrollLeft * modifier;
	        return rect;
	    }

	    /**
	     * Given an element and one of its parents, return the offset
	     * @method
	     * @memberof Popper.Utils
	     * @param {HTMLElement} element
	     * @param {HTMLElement} parent
	     * @return {Object} rect
	     */
	    function getOffsetRectRelativeToCustomParent(element, parent) {
	        var fixed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	        var transformed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	        var scrollParent = getScrollParent(parent);
	        var elementRect = getBoundingClientRect(element);
	        var parentRect = getBoundingClientRect(parent);

	        var rect = {
	            top: elementRect.top - parentRect.top,
	            left: elementRect.left - parentRect.left,
	            bottom: elementRect.top - parentRect.top + elementRect.height,
	            right: elementRect.left - parentRect.left + elementRect.width,
	            width: elementRect.width,
	            height: elementRect.height
	        };

	        if (fixed && !transformed) {
	            rect = includeScroll(rect, scrollParent, true);
	        }
	        // When a popper doesn't have any positioned or scrollable parents, `offsetParent.contains(scrollParent)`
	        // will return a "false positive". This is happening because `getOffsetParent` returns `html` node,
	        // and `scrollParent` is the `body` node. Hence the additional check.
	        else if (getOffsetParent(element).contains(scrollParent) && scrollParent.nodeName !== 'BODY') {
	                rect = includeScroll(rect, parent);
	            }

	        // subtract borderTopWidth and borderTopWidth from final result
	        var styles = getStyleComputedProperty(parent);
	        var borderTopWidth = Number(styles.borderTopWidth.split('px')[0]);
	        var borderLeftWidth = Number(styles.borderLeftWidth.split('px')[0]);

	        rect.top -= borderTopWidth;
	        rect.bottom -= borderTopWidth;
	        rect.left -= borderLeftWidth;
	        rect.right -= borderLeftWidth;

	        return rect;
	    }

	    function getWindowSizes() {
	        var body = window.document.body;
	        var html = window.document.documentElement;
	        return {
	            height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
	            width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
	        };
	    }

	    /**
	     * Get the position of the given element, relative to its offset parent
	     * @method
	     * @memberof Popper.Utils
	     * @param {Element} element
	     * @return {Object} position - Coordinates of the element and its `scrollTop`
	     */
	    function getOffsetRect(element) {
	        var elementRect = void 0;
	        if (element.nodeName === 'HTML') {
	            var _getWindowSizes = getWindowSizes(),
	                width = _getWindowSizes.width,
	                height = _getWindowSizes.height;

	            elementRect = {
	                width: width,
	                height: height,
	                left: 0,
	                top: 0
	            };
	        } else {
	            elementRect = {
	                width: element.offsetWidth,
	                height: element.offsetHeight,
	                left: element.offsetLeft,
	                top: element.offsetTop
	            };
	        }

	        elementRect.right = elementRect.left + elementRect.width;
	        elementRect.bottom = elementRect.top + elementRect.height;

	        // position
	        return elementRect;
	    }

	    function getOffsetRectRelativeToViewport(element) {
	        // Offset relative to offsetParent
	        var relativeOffset = getOffsetRect(element);

	        if (element.nodeName !== 'HTML') {
	            var offsetParent = getOffsetParent(element);
	            var parentOffset = getOffsetRectRelativeToViewport(offsetParent);
	            var offset = {
	                width: relativeOffset.offsetWidth,
	                height: relativeOffset.offsetHeight,
	                left: relativeOffset.left + parentOffset.left,
	                top: relativeOffset.top + parentOffset.top,
	                right: relativeOffset.right - parentOffset.right,
	                bottom: relativeOffset.bottom - parentOffset.bottom
	            };
	            return offset;
	        }

	        return relativeOffset;
	    }

	    function getTotalScroll(element) {
	        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

	        var scrollParent = getScrollParent(element);
	        var scroll = getScroll(scrollParent, side);

	        if (['BODY', 'HTML'].indexOf(scrollParent.nodeName) === -1) {
	            return scroll + getTotalScroll(getParentNode(scrollParent), side);
	        }
	        return scroll;
	    }

	    /**
	     * Computed the boundaries limits and return them
	     * @method
	     * @memberof Popper.Utils
	     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
	     * @param {Number} padding - Boundaries padding
	     * @param {Element} boundariesElement - Element used to define the boundaries
	     * @returns {Object} Coordinates of the boundaries
	     */
	    function getBoundaries(popper, padding, boundariesElement) {
	        // NOTE: 1 DOM access here
	        var boundaries = { top: 0, left: 0 };
	        var offsetParent = getOffsetParent(popper);

	        // Handle viewport case
	        if (boundariesElement === 'viewport') {
	            var _getOffsetRectRelativ = getOffsetRectRelativeToViewport(offsetParent),
	                left = _getOffsetRectRelativ.left,
	                top = _getOffsetRectRelativ.top;

	            var _window$document$docu = window.document.documentElement,
	                width = _window$document$docu.clientWidth,
	                height = _window$document$docu.clientHeight;

	            if (getPosition(popper) === 'fixed') {
	                boundaries.right = width;
	                boundaries.bottom = height;
	            } else {
	                var scrollLeft = getTotalScroll(popper, 'left');
	                var scrollTop = getTotalScroll(popper, 'top');

	                boundaries = {
	                    top: 0 - top,
	                    right: width - left + scrollLeft,
	                    bottom: height - top + scrollTop,
	                    left: 0 - left
	                };
	            }
	        }
	        // Handle other cases based on DOM element used as boundaries
	        else {
	                var boundariesNode = void 0;
	                if (boundariesElement === 'scrollParent') {
	                    boundariesNode = getScrollParent(getParentNode(popper));
	                } else if (boundariesElement === 'window') {
	                    boundariesNode = window.document.body;
	                } else {
	                    boundariesNode = boundariesElement;
	                }

	                // In case of BODY, we need a different computation
	                if (boundariesNode.nodeName === 'BODY') {
	                    var _getWindowSizes = getWindowSizes(),
	                        _height = _getWindowSizes.height,
	                        _width = _getWindowSizes.width;

	                    boundaries.right = _width;
	                    boundaries.bottom = _height;
	                }
	                // for all the other DOM elements, this one is good
	                else {
	                        boundaries = getOffsetRectRelativeToCustomParent(boundariesNode, offsetParent, isFixed(popper));
	                    }
	            }

	        // Add paddings
	        boundaries.left += padding;
	        boundaries.top += padding;
	        boundaries.right -= padding;
	        boundaries.bottom -= padding;

	        return boundaries;
	    }

	    /**
	     * Utility used to transform the `auto` placement to the placement with more
	     * available space.
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Object} data - The data object generated by update method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function computeAutoPlacement(placement, refRect, popper) {
	        if (placement.indexOf('auto') === -1) {
	            return placement;
	        }

	        var boundaries = getBoundaries(popper, 0, 'scrollParent');

	        var sides = {
	            top: refRect.top - boundaries.top,
	            right: boundaries.right - refRect.right,
	            bottom: boundaries.bottom - refRect.bottom,
	            left: refRect.left - boundaries.left
	        };

	        var computedPlacement = Object.keys(sides).sort(function (a, b) {
	            return sides[b] - sides[a];
	        })[0];
	        var variation = placement.split('-')[1];

	        return computedPlacement + (variation ? '-' + variation : '');
	    }

	    var nativeHints = ['native code', '[object MutationObserverConstructor]' // for mobile safari iOS 9.0
	    ];

	    /**
	     * Determine if a function is implemented natively (as opposed to a polyfill).
	     * @argument {Function | undefined} fn the function to check
	     * @returns {boolean}
	     */
	    var isNative = function (fn) {
	        return nativeHints.some(function (hint) {
	            return (fn || '').toString().indexOf(hint) > -1;
	        });
	    };

	    var isBrowser = typeof window !== 'undefined';
	    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	    var timeoutDuration = 0;
	    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	        if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	            timeoutDuration = 1;
	            break;
	        }
	    }

	    function microtaskDebounce(fn) {
	        var scheduled = false;
	        var i = 0;
	        var elem = document.createElement('span');

	        // MutationObserver provides a mechanism for scheduling microtasks, which
	        // are scheduled *before* the next task. This gives us a way to debounce
	        // a function but ensure it's called *before* the next paint.
	        var observer = new MutationObserver(function () {
	            fn();
	            scheduled = false;
	        });

	        observer.observe(elem, { attributes: true });

	        return function () {
	            if (!scheduled) {
	                scheduled = true;
	                elem.setAttribute('x-index', i);
	                i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
	            }
	        };
	    }

	    function taskDebounce(fn) {
	        var scheduled = false;
	        return function () {
	            if (!scheduled) {
	                scheduled = true;
	                setTimeout(function () {
	                    scheduled = false;
	                    fn();
	                }, timeoutDuration);
	            }
	        };
	    }

	    // It's common for MutationObserver polyfills to be seen in the wild, however
	    // these rely on Mutation Events which only occur when an element is connected
	    // to the DOM. The algorithm used in this module does not use a connected element,
	    // and so we must ensure that a *native* MutationObserver is available.
	    var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

	    /**
	    * Create a debounced version of a method, that's asynchronously deferred
	    * but called in the minimum time possible.
	    *
	    * @method
	    * @memberof Popper.Utils
	    * @argument {Function} fn
	    * @returns {Function}
	    */
	    var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

	    /**
	     * Mimics the `find` method of Array
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Array} arr
	     * @argument prop
	     * @argument value
	     * @returns index or -1
	     */
	    function find(arr, check) {
	        // use native find if supported
	        if (Array.prototype.find) {
	            return arr.find(check);
	        }

	        // use `filter` to obtain the same behavior of `find`
	        return arr.filter(check)[0];
	    }

	    /**
	     * Return the index of the matching object
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Array} arr
	     * @argument prop
	     * @argument value
	     * @returns index or -1
	     */
	    function findIndex(arr, prop, value) {
	        // use native findIndex if supported
	        if (Array.prototype.findIndex) {
	            return arr.findIndex(function (cur) {
	                return cur[prop] === value;
	            });
	        }

	        // use `find` + `indexOf` if `findIndex` isn't supported
	        var match = find(arr, function (obj) {
	            return obj[prop] === value;
	        });
	        return arr.indexOf(match);
	    }

	    var classCallCheck = function (instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    };

	    var createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    var defineProperty = function (obj, key, value) {
	        if (key in obj) {
	            Object.defineProperty(obj, key, {
	                value: value,
	                enumerable: true,
	                configurable: true,
	                writable: true
	            });
	        } else {
	            obj[key] = value;
	        }

	        return obj;
	    };

	    var _extends = Object.assign || function (target) {
	        for (var i = 1; i < arguments.length; i++) {
	            var source = arguments[i];

	            for (var key in source) {
	                if (Object.prototype.hasOwnProperty.call(source, key)) {
	                    target[key] = source[key];
	                }
	            }
	        }

	        return target;
	    };

	    /**
	     * Given the popper offsets, generate an output similar to getBoundingClientRect
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Object} popperOffsets
	     * @returns {Object} ClientRect like output
	     */
	    function getClientRect(popperOffsets) {
	        return _extends({}, popperOffsets, {
	            right: popperOffsets.left + popperOffsets.width,
	            bottom: popperOffsets.top + popperOffsets.height
	        });
	    }

	    /**
	     * Get the outer sizes of the given element (offset size + margins)
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Element} element
	     * @returns {Object} object containing width and height properties
	     */
	    function getOuterSizes(element) {
	        var styles = window.getComputedStyle(element);
	        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	        var result = {
	            width: element.offsetWidth + y,
	            height: element.offsetHeight + x
	        };
	        return result;
	    }

	    /**
	     * Get the opposite placement of the given one/
	     * @method
	     * @memberof Popper.Utils
	     * @argument {String} placement
	     * @returns {String} flipped placement
	     */
	    function getOppositePlacement(placement) {
	        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	        return placement.replace(/left|right|bottom|top/g, function (matched) {
	            return hash[matched];
	        });
	    }

	    /**
	     * Get offsets to the popper
	     * @method
	     * @memberof Popper.Utils
	     * @param {Object} position - CSS position the Popper will get applied
	     * @param {HTMLElement} popper - the popper element
	     * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	     * @param {String} placement - one of the valid placement options
	     * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	     */
	    function getPopperOffsets(position, popper, referenceOffsets, placement) {
	        placement = placement.split('-')[0];

	        // Get popper node sizes
	        var popperRect = getOuterSizes(popper);

	        // Add position, width and height to our offsets object
	        var popperOffsets = {
	            position: position,
	            width: popperRect.width,
	            height: popperRect.height
	        };

	        // depending by the popper placement we have to compute its offsets slightly differently
	        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	        var mainSide = isHoriz ? 'top' : 'left';
	        var secondarySide = isHoriz ? 'left' : 'top';
	        var measurement = isHoriz ? 'height' : 'width';
	        var secondaryMeasurement = !isHoriz ? 'height' : 'width';

	        popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	        if (placement === secondarySide) {
	            popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	        } else {
	            popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	        }

	        return popperOffsets;
	    }

	    /**
	     * Get offsets to the reference element
	     * @method
	     * @memberof Popper.Utils
	     * @param {Object} state
	     * @param {Element} popper - the popper element
	     * @param {Element} reference - the reference element (the popper will be relative to this)
	     * @returns {Object} An object containing the offsets which will be applied to the popper
	     */
	    function getReferenceOffsets(state, popper, reference) {
	        var isParentFixed = state.position === 'fixed';
	        var isParentTransformed = state.isParentTransformed;
	        var offsetParent = getOffsetParent(isParentFixed && isParentTransformed ? reference : popper);

	        return getOffsetRectRelativeToCustomParent(reference, offsetParent, isParentFixed, isParentTransformed);
	    }

	    /**
	     * Get the prefixed supported property name
	     * @method
	     * @memberof Popper.Utils
	     * @argument {String} property (camelCase)
	     * @returns {String} prefixed property (camelCase)
	     */
	    function getSupportedPropertyName(property) {
	        var prefixes = [false, 'ms', 'webkit', 'moz', 'o'];
	        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

	        for (var i = 0; i < prefixes.length - 1; i++) {
	            var prefix = prefixes[i];
	            var toCheck = prefix ? '' + prefix + upperProp : property;
	            if (typeof window.document.body.style[toCheck] !== 'undefined') {
	                return toCheck;
	            }
	        }
	        return null;
	    }

	    /**
	     * Check if the given variable is a function
	     * @method
	     * @memberof Popper.Utils
	     * @argument {*} functionToCheck - variable to check
	     * @returns {Boolean} answer to: is a function?
	     */
	    function isFunction(functionToCheck) {
	        var getType = {};
	        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	    }

	    /**
	     * Helper used to know if the given modifier is enabled.
	     * @method
	     * @memberof Popper.Utils
	     * @returns {Boolean}
	     */
	    function isModifierEnabled(modifiers, modifierName) {
	        return modifiers.some(function (_ref) {
	            var name = _ref.name,
	                enabled = _ref.enabled;
	            return enabled && name === modifierName;
	        });
	    }

	    /**
	     * Helper used to know if the given modifier depends from another one.
	     * It checks if the needed modifier is listed and enabled.
	     * @method
	     * @memberof Popper.Utils
	     * @param {Array} modifiers - list of modifiers
	     * @param {String} requestingName - name of requesting modifier
	     * @param {String} requestedName - name of requested modifier
	     * @returns {Boolean}
	     */
	    function isModifierRequired(modifiers, requestingName, requestedName) {
	        var requesting = find(modifiers, function (_ref) {
	            var name = _ref.name;
	            return name === requestingName;
	        });

	        return !!requesting && modifiers.some(function (modifier) {
	            return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	        });
	    }

	    /**
	     * Tells if a given input is a number
	     * @method
	     * @memberof Popper.Utils
	     * @param {*} input to check
	     * @return {Boolean}
	     */
	    function isNumeric(n) {
	        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	    }

	    /**
	     * Check if the given element has transforms applied to itself or a parent
	     * @method
	     * @memberof Popper.Utils
	     * @param  {Element} element
	     * @return {Boolean} answer to "isTransformed?"
	     */
	    function isTransformed(element) {
	        if (element.nodeName === 'BODY') {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'transform') !== 'none') {
	            return true;
	        }
	        return getParentNode(element) ? isTransformed(getParentNode(element)) : element;
	    }

	    /**
	     * Remove event listeners used to update the popper position
	     * @method
	     * @memberof Popper.Utils
	     * @private
	     */
	    function removeEventListeners(reference, state) {
	        // NOTE: 1 DOM access here
	        window.removeEventListener('resize', state.updateBound);
	        if (state.scrollElement) {
	            state.scrollElement.removeEventListener('scroll', state.updateBound);
	        }
	        state.updateBound = null;
	        state.scrollElement = null;
	        state.eventsEnabled = false;
	        return state;
	    }

	    /**
	     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
	     * @method
	     * @memberof Popper.Utils
	     * @param {Object} data
	     * @param {Array} modifiers
	     * @param {Function} ends
	     */
	    function runModifiers(modifiers, data, ends) {
	        var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

	        modifiersToRun.forEach(function (modifier) {
	            if (modifier.enabled && isFunction(modifier.function)) {
	                data = modifier.function(data, modifier);
	            }
	        });

	        return data;
	    }

	    /**
	     * Set the attributes to the given popper
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Element} element - Element to apply the attributes to
	     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	     */
	    function setAttributes(element, attributes) {
	        Object.keys(attributes).forEach(function (prop) {
	            var value = attributes[prop];
	            if (value !== false) {
	                element.setAttribute(prop, attributes[prop]);
	            } else {
	                element.removeAttribute(prop);
	            }
	        });
	    }

	    /**
	     * Set the style to the given popper
	     * @method
	     * @memberof Popper.Utils
	     * @argument {Element} element - Element to apply the style to
	     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	     */
	    function setStyles(element, styles) {
	        Object.keys(styles).forEach(function (prop) {
	            var unit = '';
	            // add unit if the value is numeric and is one of the following
	            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	                unit = 'px';
	            }
	            element.style[prop] = styles[prop] + unit;
	        });
	    }

	    /**
	     * Setup needed event listeners used to update the popper position
	     * @method
	     * @memberof Popper.Utils
	     * @private
	     */
	    function setupEventListeners(reference, options, state, updateBound) {
	        // NOTE: 1 DOM access here
	        state.updateBound = updateBound;
	        window.addEventListener('resize', state.updateBound, { passive: true });
	        var target = getScrollParent(reference);
	        if (target.nodeName === 'BODY') {
	            target = window;
	        }
	        target.addEventListener('scroll', state.updateBound, { passive: true });
	        state.scrollElement = target;
	        state.eventsEnabled = true;

	        return state;
	    }

	    /** @namespace Popper.Utils */
	    var Utils = {
	        computeAutoPlacement: computeAutoPlacement,
	        debounce: debounce,
	        findIndex: findIndex,
	        getBordersSize: getBordersSize,
	        getBoundaries: getBoundaries,
	        getBoundingClientRect: getBoundingClientRect,
	        getClientRect: getClientRect,
	        getOffsetParent: getOffsetParent,
	        getOffsetRect: getOffsetRect,
	        getOffsetRectRelativeToCustomParent: getOffsetRectRelativeToCustomParent,
	        getOuterSizes: getOuterSizes,
	        getParentNode: getParentNode,
	        getPopperOffsets: getPopperOffsets,
	        getPosition: getPosition,
	        getReferenceOffsets: getReferenceOffsets,
	        getScroll: getScroll,
	        getScrollParent: getScrollParent,
	        getStyleComputedProperty: getStyleComputedProperty,
	        getSupportedPropertyName: getSupportedPropertyName,
	        getTotalScroll: getTotalScroll,
	        getWindowSizes: getWindowSizes,
	        includeScroll: includeScroll,
	        isFixed: isFixed,
	        isFunction: isFunction,
	        isModifierEnabled: isModifierEnabled,
	        isModifierRequired: isModifierRequired,
	        isNative: isNative,
	        isNumeric: isNumeric,
	        isTransformed: isTransformed,
	        removeEventListeners: removeEventListeners,
	        runModifiers: runModifiers,
	        setAttributes: setAttributes,
	        setStyles: setStyles,
	        setupEventListeners: setupEventListeners
	    };

	    /**
	     * Apply the computed styles to the popper element
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @argument {Object} data.styles - List of style properties - values to apply to popper element
	     * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The same data object
	     */
	    function applyStyle(data, options) {
	        // apply the final offsets to the popper
	        // NOTE: 1 DOM access here
	        var styles = {
	            position: data.offsets.popper.position
	        };

	        var attributes = {
	            'x-placement': data.placement
	        };

	        // round top and left to avoid blurry text
	        var left = Math.round(data.offsets.popper.left);
	        var top = Math.round(data.offsets.popper.top);

	        // if gpuAcceleration is set to true and transform is supported,
	        //  we use `translate3d` to apply the position to the popper we
	        // automatically use the supported prefixed version if needed
	        var prefixedProperty = getSupportedPropertyName('transform');
	        if (options.gpuAcceleration && prefixedProperty) {
	            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	            styles.top = 0;
	            styles.left = 0;
	            styles.willChange = 'transform';
	        }
	        // othwerise, we use the standard `left` and `top` properties
	        else {
	                styles.left = left;
	                styles.top = top;
	                styles.willChange = 'top, left';
	            }

	        // any property present in `data.styles` will be applied to the popper,
	        // in this way we can make the 3rd party modifiers add custom styles to it
	        // Be aware, modifiers could override the properties defined in the previous
	        // lines of this modifier!
	        setStyles(data.instance.popper, _extends({}, styles, data.styles));

	        // any property present in `data.attributes` will be applied to the popper,
	        // they will be set as HTML attributes of the element
	        setAttributes(data.instance.popper, _extends({}, attributes, data.attributes));

	        // if the arrow style has been computed, apply the arrow style
	        if (data.offsets.arrow) {
	            setStyles(data.arrowElement, data.offsets.arrow);
	        }

	        return data;
	    }

	    /**
	     * Set the x-placement attribute before everything else because it could be used to add margins to the popper
	     * margins needs to be calculated to get the correct popper offsets
	     * @method
	     * @memberof Popper.modifiers
	     * @param {HTMLElement} reference - The reference element used to position the popper
	     * @param {HTMLElement} popper - The HTML element used as popper.
	     * @param {Object} options - Popper.js options
	     */
	    function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	        // compute reference element offsets
	        var referenceOffsets = getReferenceOffsets(state, popper, reference);

	        // compute auto placement, store placement inside the data object,
	        // modifiers will be able to edit `placement` if needed
	        // and refer to originalPlacement to know the original value
	        options.placement = computeAutoPlacement(options.placement, referenceOffsets, popper);

	        popper.setAttribute('x-placement', options.placement);
	        return options;
	    }

	    /**
	     * Modifier used to move the arrowElements on the edge of the popper to make sure them are always between the popper and the reference element
	     * It will use the CSS outer size of the arrowElement element to know how many pixels of conjuction are needed
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by update method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function arrow(data, options) {
	        // arrow depends on keepTogether in order to work
	        if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	            console.warn('WARNING: `keepTogether` modifier is required by arrow modifier in order to work, be sure to include it before `arrow`!');
	            return data;
	        }

	        var arrowElement = options.element;

	        // if arrowElement is a string, suppose it's a CSS selector
	        if (typeof arrowElement === 'string') {
	            arrowElement = data.instance.popper.querySelector(arrowElement);

	            // if arrowElement is not found, don't run the modifier
	            if (!arrowElement) {
	                return data;
	            }
	        } else {
	            // if the arrowElement isn't a query selector we must check that the
	            // provided DOM node is child of its popper node
	            if (!data.instance.popper.contains(arrowElement)) {
	                console.warn('WARNING: `arrow.element` must be child of its popper element!');
	                return data;
	            }
	        }

	        var placement = data.placement.split('-')[0];
	        var popper = getClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	        var len = isVertical ? 'height' : 'width';
	        var side = isVertical ? 'top' : 'left';
	        var altSide = isVertical ? 'left' : 'top';
	        var opSide = isVertical ? 'bottom' : 'right';
	        var arrowElementSize = getOuterSizes(arrowElement)[len];

	        //
	        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
	        //

	        // top/left side
	        if (reference[opSide] - arrowElementSize < popper[side]) {
	            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	        }
	        // bottom/right side
	        if (reference[side] + arrowElementSize > popper[opSide]) {
	            data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	        }

	        // compute center of the popper
	        var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

	        // Compute the sideValue using the updated popper offsets
	        var sideValue = center - getClientRect(data.offsets.popper)[side];

	        // prevent arrowElement from being placed not contiguously to its popper
	        sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

	        data.arrowElement = arrowElement;
	        data.offsets.arrow = {};
	        data.offsets.arrow[side] = sideValue;
	        data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

	        return data;
	    }

	    /**
	     * Get the opposite placement variation of the given one/
	     * @method
	     * @memberof Popper.Utils
	     * @argument {String} placement variation
	     * @returns {String} flipped placement variation
	     */
	    function getOppositeVariation(variation) {
	        if (variation === 'end') {
	            return 'start';
	        } else if (variation === 'start') {
	            return 'end';
	        }
	        return variation;
	    }

	    /**
	     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
	     * Requires the `preventOverflow` modifier before it in order to work.
	     * **NOTE:** data.instance modifier will run all its previous modifiers everytime it tries to flip the popper!
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by update method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function flip(data, options) {
	        // if `inner` modifier is enabled, we can't use the `flip` modifier
	        if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	            return data;
	        }

	        if (data.flipped && data.placement === data.originalPlacement) {
	            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	            return data;
	        }

	        var boundaries = getBoundaries(data.instance.popper, options.padding, options.boundariesElement);

	        var placement = data.placement.split('-')[0];
	        var placementOpposite = getOppositePlacement(placement);
	        var variation = data.placement.split('-')[1] || '';

	        var flipOrder = [];

	        if (options.behavior === 'flip') {
	            flipOrder = [placement, placementOpposite];
	        } else {
	            flipOrder = options.behavior;
	        }

	        flipOrder.forEach(function (step, index) {
	            if (placement !== step || flipOrder.length === index + 1) {
	                return data;
	            }

	            placement = data.placement.split('-')[0];
	            placementOpposite = getOppositePlacement(placement);

	            var popperOffsets = getClientRect(data.offsets.popper);
	            var refOffsets = data.offsets.reference;

	            // using floor because the reference offsets may contain decimals we are not going to consider here
	            var floor = Math.floor;
	            var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

	            var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	            var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	            var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	            var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

	            var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

	            // flip the variation if required
	            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	            var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

	            if (overlapsRef || overflowsBoundaries || flippedVariation) {
	                // this boolean to detect any flip loop
	                data.flipped = true;

	                if (overlapsRef || overflowsBoundaries) {
	                    placement = flipOrder[index + 1];
	                }

	                if (flippedVariation) {
	                    variation = getOppositeVariation(variation);
	                }

	                data.placement = placement + (variation ? '-' + variation : '');
	                data.offsets.popper = getPopperOffsets(data.instance.state.position, data.instance.popper, data.offsets.reference, data.placement);

	                data = runModifiers(data.instance.modifiers, data, 'flip');
	            }
	        });
	        return data;
	    }

	    /**
	     * Modifier used to make sure the popper is always near its reference element
	     * It cares only about the first axis, you can still have poppers with margin
	     * between the popper and its reference element.
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by update method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function keepTogether(data) {
	        var popper = getClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var placement = data.placement.split('-')[0];
	        var floor = Math.floor;
	        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	        var side = isVertical ? 'right' : 'bottom';
	        var opSide = isVertical ? 'left' : 'top';
	        var measurement = isVertical ? 'width' : 'height';

	        if (popper[side] < floor(reference[opSide])) {
	            data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	        }
	        if (popper[opSide] > floor(reference[side])) {
	            data.offsets.popper[opSide] = floor(reference[side]);
	        }

	        return data;
	    }

	    /**
	     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
	     * The offsets will shift the popper on the side of its reference element.
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by update method
	     * @argument {Object} options - Modifiers configuration and options
	     * @argument {Number|String} options.offset=0
	     *      Basic usage allows a number used to nudge the popper by the given amount of pixels.
	     *      You can pass a percentage value as string (eg. `20%`) to nudge by the given percentage (relative to reference element size)
	     *      Other supported units are `vh` and `vw` (relative to viewport)
	     *      Additionally, you can pass a pair of values (eg. `10 20` or `2vh 20%`) to nudge the popper
	     *      on both axis.
	     *      A note about percentage values, if you want to refer a percentage to the popper size instead of the reference element size,
	     *      use `%p` instead of `%` (eg: `20%p`). To make it clearer, you can replace `%` with `%r` and use eg.`10%p 25%r`.
	     *      > **Heads up!** The order of the axis is relative to the popper placement: `bottom` or `top` are `X,Y`, the other are `Y,X`
	     * @returns {Object} The data object, properly modified
	     */
	    function offset(data, options) {
	        var placement = data.placement;
	        var popper = data.offsets.popper;

	        var offsets = void 0;
	        if (isNumeric(options.offset)) {
	            offsets = [options.offset, 0];
	        } else {
	            // split the offset in case we are providing a pair of offsets separated
	            // by a blank space
	            offsets = options.offset.split(' ');

	            // itherate through each offset to compute them in case they are percentages
	            offsets = offsets.map(function (offset, index) {
	                // separate value from unit
	                var split = offset.match(/(\d*\.?\d*)(.*)/);
	                var value = +split[1];
	                var unit = split[2];

	                // use height if placement is left or right and index is 0 otherwise use width
	                // in this way the first offset will use an axis and the second one
	                // will use the other one
	                var useHeight = placement.indexOf('right') !== -1 || placement.indexOf('left') !== -1;

	                if (index === 1) {
	                    useHeight = !useHeight;
	                }

	                var measurement = useHeight ? 'height' : 'width';

	                // if is a percentage relative to the popper (%p), we calculate the value of it using
	                // as base the sizes of the popper
	                // if is a percentage (% or %r), we calculate the value of it using as base the
	                // sizes of the reference element
	                if (unit.indexOf('%') === 0) {
	                    var element = void 0;
	                    switch (unit) {
	                        case '%p':
	                            element = data.offsets.popper;
	                            break;
	                        case '%':
	                        case '$r':
	                        default:
	                            element = data.offsets.reference;
	                    }

	                    var rect = getClientRect(element);
	                    var len = rect[measurement];
	                    return len / 100 * value;
	                }
	                // if is a vh or vw, we calculate the size based on the viewport
	                else if (unit === 'vh' || unit === 'vw') {
	                        var size = void 0;
	                        if (unit === 'vh') {
	                            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	                        } else {
	                            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	                        }
	                        return size / 100 * value;
	                    }
	                    // if is an explicit pixel unit, we get rid of the unit and keep the value
	                    else if (unit === 'px') {
	                            return +value;
	                        }
	                        // if is an implicit unit, it's px, and we return just the value
	                        else {
	                                return +offset;
	                            }
	            });
	        }

	        if (data.placement.indexOf('left') !== -1) {
	            popper.top += offsets[0];
	            popper.left -= offsets[1] || 0;
	        } else if (data.placement.indexOf('right') !== -1) {
	            popper.top += offsets[0];
	            popper.left += offsets[1] || 0;
	        } else if (data.placement.indexOf('top') !== -1) {
	            popper.left += offsets[0];
	            popper.top -= offsets[1] || 0;
	        } else if (data.placement.indexOf('bottom') !== -1) {
	            popper.left += offsets[0];
	            popper.top += offsets[1] || 0;
	        }
	        return data;
	    }

	    /**
	     * Modifier used to prevent the popper from being positioned outside the boundary.
	     *
	     * An scenario exists where the reference itself is not within the boundaries. We can
	     * say it has "escaped the boundaries" — or just "escaped". In this case we need to
	     * decide whether the popper should either:
	     *
	     * - detach from the reference and remain "trapped" in the boundaries, or
	     * - if it should be ignore the boundary and "escape with the reference"
	     *
	     * When `escapeWithReference` is `true`, and reference is completely outside the
	     * boundaries, the popper will overflow (or completely leave) the boundaries in order
	     * to remain attached to the edge of the reference.
	     *
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function preventOverflow(data, options) {
	        var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
	        var boundaries = getBoundaries(data.instance.popper, options.padding, boundariesElement);
	        options.boundaries = boundaries;

	        var order = options.priority;
	        var popper = getClientRect(data.offsets.popper);

	        var check = {
	            primary: function primary(placement) {
	                var value = popper[placement];
	                if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	                    value = Math.max(popper[placement], boundaries[placement]);
	                }
	                return defineProperty({}, placement, value);
	            },
	            secondary: function secondary(placement) {
	                var mainSide = placement === 'right' ? 'left' : 'top';
	                var value = popper[mainSide];
	                if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	                    value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	                }
	                return defineProperty({}, mainSide, value);
	            }
	        };

	        order.forEach(function (placement) {
	            var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	            popper = _extends({}, popper, check[side](placement));
	        });

	        data.offsets.popper = popper;

	        return data;
	    }

	    /**
	     * Modifier used to shift the popper on the start or end of its reference element side
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function shift(data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var shiftvariation = placement.split('-')[1];

	        // if shift shiftvariation is specified, run the modifier
	        if (shiftvariation) {
	            var reference = data.offsets.reference;
	            var popper = getClientRect(data.offsets.popper);
	            var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	            var side = isVertical ? 'left' : 'top';
	            var measurement = isVertical ? 'width' : 'height';

	            var shiftOffsets = {
	                start: defineProperty({}, side, reference[side]),
	                end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
	            };

	            data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	        }

	        return data;
	    }

	    /**
	     * Modifier used to hide the popper when its reference element is outside of the
	     * popper boundaries. It will set an x-hidden attribute which can be used to hide
	     * the popper when its reference is out of boundaries.
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by update method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function hide(data) {
	        if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	            console.warn('WARNING: preventOverflow modifier is required by hide modifier in order to work, be sure to include it before hide!');
	            return data;
	        }

	        var refRect = data.offsets.reference;
	        var bound = find(data.instance.modifiers, function (modifier) {
	            return modifier.name === 'preventOverflow';
	        }).boundaries;

	        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	            // Avoid unnecessary DOM access if visibility hasn't changed
	            if (data.hide === true) {
	                return data;
	            }

	            data.hide = true;
	            data.attributes['x-out-of-boundaries'] = '';
	        } else {
	            // Avoid unnecessary DOM access if visibility hasn't changed
	            if (data.hide === false) {
	                return data;
	            }

	            data.hide = false;
	            data.attributes['x-out-of-boundaries'] = false;
	        }

	        return data;
	    }

	    /**
	     * Modifier used to make the popper flow toward the inner of the reference element.
	     * By default, when this modifier is disabled, the popper will be placed outside
	     * the reference element.
	     * @method
	     * @memberof Modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @argument {Object} options - Modifiers configuration and options
	     * @returns {Object} The data object, properly modified
	     */
	    function inner(data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var popper = getClientRect(data.offsets.popper);
	        var reference = getClientRect(data.offsets.reference);
	        var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

	        var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

	        popper[isHoriz ? 'left' : 'top'] = reference[placement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

	        data.placement = getOppositePlacement(placement);
	        data.offsets.popper = getClientRect(popper);

	        return data;
	    }

	    /**
	     * Modifiers are plugins used to alter the behavior of your poppers.
	     * Popper.js uses a set of 7 modifiers to provide all the basic functionalities
	     * needed by the library.
	     *
	     * Each modifier is an object containing several properties listed below.
	     * @namespace Modifiers
	     * @param {Object} modifier - Modifier descriptor
	     * @param {Integer} modifier.order
	     *      The `order` property defines the execution order of the modifiers.
	     *      The built-in modifiers have orders with a gap of 100 units in between,
	     *      this allows you to inject additional modifiers between the existing ones
	     *      without having to redefine the order of all of them.
	     *      The modifiers are executed starting from the one with the lowest order.
	     * @param {Boolean} modifier.enabled - When `true`, the modifier will be used.
	     * @param {Modifiers~modifier} modifier.function - Modifier function.
	     * @param {Modifiers~onLoad} modifier.onLoad - Function executed on popper initalization
	     * @return {Object} data - Each modifier must return the modified `data` object.
	     */
	    var modifiers = {
	        shift: {
	            order: 100,
	            enabled: true,
	            function: shift
	        },
	        offset: {
	            order: 200,
	            enabled: true,
	            function: offset,
	            // nudges popper from its origin by the given amount of pixels (can be negative)
	            offset: 0
	        },
	        preventOverflow: {
	            order: 300,
	            enabled: true,
	            function: preventOverflow,
	            // popper will try to prevent overflow following these priorities
	            //  by default, then, it could overflow on the left and on top of the boundariesElement
	            priority: ['left', 'right', 'top', 'bottom'],
	            // amount of pixel used to define a minimum distance between the boundaries and the popper
	            // this makes sure the popper has always a little padding between the edges of its container
	            padding: 5,
	            boundariesElement: 'scrollParent'
	        },
	        keepTogether: {
	            order: 400,
	            enabled: true,
	            function: keepTogether
	        },
	        arrow: {
	            order: 500,
	            enabled: true,
	            function: arrow,
	            // selector or node used as arrow
	            element: '[x-arrow]'
	        },
	        flip: {
	            order: 600,
	            enabled: true,
	            function: flip,
	            // the behavior used to change the popper's placement
	            behavior: 'flip',
	            // the popper will flip if it hits the edges of the boundariesElement - padding
	            padding: 5,
	            boundariesElement: 'viewport'
	        },
	        inner: {
	            order: 700,
	            enabled: false,
	            function: inner
	        },
	        hide: {
	            order: 800,
	            enabled: true,
	            function: hide
	        },
	        applyStyle: {
	            order: 900,
	            enabled: true,
	            // if true, it uses the CSS 3d transformation to position the popper
	            gpuAcceleration: true,
	            function: applyStyle,
	            onLoad: applyStyleOnLoad
	        }
	    };

	    /**
	     * Modifiers can edit the `data` object to change the beheavior of the popper.
	     * This object contains all the informations used by Popper.js to compute the
	     * popper position.
	     * The modifier can edit the data as needed, and then `return` it as result.
	     *
	     * @callback Modifiers~modifier
	     * @param {dataObject} data
	     * @return {dataObject} modified data
	     */

	    /**
	     * The `dataObject` is an object containing all the informations used by Popper.js
	     * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	     * @name dataObject
	     * @property {Object} data.instance The Popper.js instance
	     * @property {String} data.placement Placement applied to popper
	     * @property {String} data.originalPlacement Placement originally defined on init
	     * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	     * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
	     * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	     * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
	     * @property {Object} data.boundaries Offsets of the popper boundaries
	     * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
	     * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	     * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	     * @property {Object} data.offsets.arro] `top` and `left` offsets, only one of them will be different from 0
	     */

	    // Utils
	    // Modifiers
	    // default options
	    var DEFAULTS = {
	        // placement of the popper
	        placement: 'bottom',

	        // whether events (resize, scroll) are initially enabled
	        eventsEnabled: true,

	        /**
	         * Callback called when the popper is created.
	         * By default, is set to no-op.
	         * Access Popper.js instance with `data.instance`.
	         * @callback createCallback
	         * @static
	         * @param {dataObject} data
	         */
	        onCreate: function onCreate() {},

	        /**
	         * Callback called when the popper is updated, this callback is not called
	         * on the initialization/creation of the popper, but only on subsequent
	         * updates.
	         * By default, is set to no-op.
	         * Access Popper.js instance with `data.instance`.
	         * @callback updateCallback
	         * @static
	         * @param {dataObject} data
	         */
	        onUpdate: function onUpdate() {},

	        // list of functions used to modify the offsets before they are applied to the popper
	        modifiers: modifiers
	    };

	    /**
	     * Create a new Popper.js instance
	     * @class Popper
	     * @param {HTMLElement} reference - The reference element used to position the popper
	     * @param {HTMLElement} popper - The HTML element used as popper.
	     * @param {Object} options
	     * @param {String} options.placement=bottom
	     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
	     *      left(-start, -end)`
	     *
	     * @param {Boolean} options.eventsEnabled=true
	     *      Whether events (resize, scroll) are initially enabled
	     * @param {Boolean} options.gpuAcceleration=true
	     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
	     *      browser to use the GPU to accelerate the rendering.
	     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
	     *
	     * @param {Boolean} options.removeOnDestroy=false
	     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
	     *
	     * @param {Object} options.modifiers
	     *      List of functions used to modify the data before they are applied to the popper (see source code for default values)
	     *
	     * @param {Object} options.modifiers.arrow - Arrow modifier configuration
	     * @param {String|HTMLElement} options.modifiers.arrow.element='[x-arrow]'
	     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
	     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
	     *      reference element.
	     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
	     *
	     * @param {Object} options.modifiers.offset - Offset modifier configuration
	     * @param {Number} options.modifiers.offset.offset=0
	     *      Amount of pixels the popper will be shifted (can be negative).
	     *
	     * @param {Object} options.modifiers.preventOverflow - PreventOverflow modifier configuration
	     * @param {Array} [options.modifiers.preventOverflow.priority=['left', 'right', 'top', 'bottom']]
	     *      Priority used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
	     *      this means that the last one will never overflow
	     * @param {String|HTMLElement} options.modifiers.preventOverflow.boundariesElement='scrollParent'
	     *      Boundaries used by the modifier, can be `scrollParent`, `window`, `viewport` or any DOM element.
	     * @param {Number} options.modifiers.preventOverflow.padding=5
	     *      Amount of pixel used to define a minimum distance between the boundaries and the popper
	     *      this makes sure the popper has always a little padding between the edges of its container.
	     *
	     * @param {Object} options.modifiers.flip - Flip modifier configuration
	     * @param {String|Array} options.modifiers.flip.behavior='flip'
	     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
	     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
	     *      its axis (`right - left`, `top - bottom`).
	     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
	     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
	     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
	     * @param {String|HTMLElement} options.modifiers.flip.boundariesElement='viewport'
	     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
	     *      of the defined boundaries (except if `keepTogether` is enabled)
	     *
	     * @param {Object} options.modifiers.inner - Inner modifier configuration
	     * @param {Number} options.modifiers.inner.enabled=false
	     *      Set to `true` to make the popper flow toward the inner of the reference element.
	     *
	     * @param {Number} options.modifiers.flip.padding=5
	     *      Amount of pixel used to define a minimum distance between the boundaries and the popper
	     *      this makes sure the popper has always a little padding between the edges of its container.
	     *
	     * @param {createCallback} options.onCreate - onCreate callback
	     *      Function called after the Popper has been instantiated.
	     *
	     * @param {updateCallback} options.onUpdate - onUpdate callback
	     *      Function called on subsequent updates of Popper.
	     *
	     * @return {Object} instance - The generated Popper.js instance
	     */

	    var Popper = function () {
	        function Popper(reference, popper) {
	            var _this = this;

	            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	            classCallCheck(this, Popper);

	            this.scheduleUpdate = function () {
	                return requestAnimationFrame(_this.update);
	            };

	            // make update() debounced, so that it only runs at most once-per-tick
	            this.update = debounce(this.update.bind(this));

	            // with {} we create a new object with the options inside it
	            this.options = _extends({}, Popper.Defaults, options);

	            // init state
	            this.state = {
	                isDestroyed: false,
	                isCreated: false
	            };

	            // get reference and popper elements (allow jQuery wrappers)
	            this.reference = reference.jquery ? reference[0] : reference;
	            this.popper = popper.jquery ? popper[0] : popper;

	            // refactoring modifiers' list (Object => Array)
	            this.modifiers = Object.keys(Popper.Defaults.modifiers).map(function (name) {
	                return _extends({ name: name }, Popper.Defaults.modifiers[name]);
	            });

	            // assign default values to modifiers, making sure to override them with
	            // the ones defined by user
	            this.modifiers = this.modifiers.map(function (defaultConfig) {
	                var userConfig = options.modifiers && options.modifiers[defaultConfig.name] || {};
	                return _extends({}, defaultConfig, userConfig);
	            });

	            // add custom modifiers to the modifiers list
	            if (options.modifiers) {
	                this.options.modifiers = _extends({}, Popper.Defaults.modifiers, options.modifiers);
	                Object.keys(options.modifiers).forEach(function (name) {
	                    // take in account only custom modifiers
	                    if (Popper.Defaults.modifiers[name] === undefined) {
	                        var modifier = options.modifiers[name];
	                        modifier.name = name;
	                        _this.modifiers.push(modifier);
	                    }
	                });
	            }

	            // get the popper position type
	            this.state.position = getPosition(this.reference);

	            // sort the modifiers by order
	            this.modifiers = this.modifiers.sort(function (a, b) {
	                return a.order - b.order;
	            });

	            // modifiers have the ability to execute arbitrary code when Popper.js get inited
	            // such code is executed in the same order of its modifier
	            // they could add new properties to their options configuration
	            // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	            this.modifiers.forEach(function (modifierOptions) {
	                if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
	                    modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	                }
	            });

	            // determine how we should set the origin of offsets
	            this.state.isParentTransformed = isTransformed(this.popper.parentNode);

	            // fire the first update to position the popper in the right place
	            this.update();

	            var eventsEnabled = this.options.eventsEnabled;
	            if (eventsEnabled) {
	                // setup event listeners, they will take care of update the position in specific situations
	                this.enableEventListeners();
	            }

	            this.state.eventsEnabled = eventsEnabled;
	        }

	        //
	        // Methods
	        //

	        /**
	         * Updates the position of the popper, computing the new offsets and applying the new style
	         * Prefer `scheduleUpdate` over `update` because of performance reasons
	         * @method
	         * @memberof Popper
	         */

	        createClass(Popper, [{
	            key: 'update',
	            value: function update() {
	                // if popper is destroyed, don't perform any further update
	                if (this.state.isDestroyed) {
	                    return;
	                }

	                var data = {
	                    instance: this,
	                    styles: {},
	                    attributes: {},
	                    flipped: false,
	                    offsets: {}
	                };

	                // make sure to apply the popper position before any computation
	                this.state.position = getPosition(this.reference);
	                setStyles(this.popper, { position: this.state.position });

	                // compute reference element offsets
	                data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

	                // compute auto placement, store placement inside the data object,
	                // modifiers will be able to edit `placement` if needed
	                // and refer to originalPlacement to know the original value
	                data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper);

	                // store the computed placement inside `originalPlacement`
	                data.originalPlacement = this.options.placement;

	                // compute the popper offsets
	                data.offsets.popper = getPopperOffsets(this.state, this.popper, data.offsets.reference, data.placement);

	                // run the modifiers
	                data = runModifiers(this.modifiers, data);

	                // the first `update` will call `onCreate` callback
	                // the other ones will call `onUpdate` callback
	                if (!this.state.isCreated) {
	                    this.state.isCreated = true;
	                    this.options.onCreate(data);
	                } else {
	                    this.options.onUpdate(data);
	                }
	            }

	            /**
	             * Schedule an update, it will run on the next UI update available
	             * @method scheduleUpdate
	             * @memberof Popper
	             */

	        }, {
	            key: 'destroy',

	            /**
	             * Destroy the popper
	             * @method
	             * @memberof Popper
	             */
	            value: function destroy() {
	                this.state.isDestroyed = true;

	                // touch DOM only if `applyStyle` modifier is enabled
	                if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	                    this.popper.removeAttribute('x-placement');
	                    this.popper.style.left = '';
	                    this.popper.style.position = '';
	                    this.popper.style.top = '';
	                    this.popper.style[getSupportedPropertyName('transform')] = '';
	                }

	                this.disableEventListeners();

	                // remove the popper if user explicity asked for the deletion on destroy
	                // do not use `remove` because IE11 doesn't support it
	                if (this.options.removeOnDestroy) {
	                    this.popper.parentNode.removeChild(this.popper);
	                }
	                return this;
	            }

	            /**
	             * it will add resize/scroll events and start recalculating
	             * position of the popper element when they are triggered
	             * @method
	             * @memberof Popper
	             */

	        }, {
	            key: 'enableEventListeners',
	            value: function enableEventListeners() {
	                if (!this.state.eventsEnabled) {
	                    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	                }
	            }

	            /**
	             * it will remove resize/scroll events and won't recalculate
	             * popper position when they are triggered. It also won't trigger onUpdate callback anymore,
	             * unless you call 'update' method manually.
	             * @method
	             * @memberof Popper
	             */

	        }, {
	            key: 'disableEventListeners',
	            value: function disableEventListeners() {
	                if (this.state.eventsEnabled) {
	                    window.cancelAnimationFrame(this.scheduleUpdate);
	                    this.state = removeEventListeners(this.reference, this.state);
	                }
	            }

	            /**
	             * Collection of utilities useful when writing custom modifiers
	             * @memberof Popper
	             */

	            /**
	             * List of accepted placements to use as values of the `placement` option
	             * @memberof Popper
	             */

	            /**
	             * Default Popper.js options
	             * @memberof Popper
	             */

	        }]);
	        return Popper;
	    }();

	    Popper.Utils = Utils;
	    Popper.placements = ['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];
	    Popper.Defaults = DEFAULTS;

	    return Popper;
	});
	//# sourceMappingURL=popper.es5.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "select-dropdown"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1dbc242a", module.exports)
	  }
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var nodeList = [];
	var ctx = '@@clickoutsideContext';
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.initTimeDate = exports.nextMonth = exports.prevMonth = exports.getFirstDayOfMonth = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.toDate = undefined;

	var _date = __webpack_require__(52);

	var _date2 = _interopRequireDefault(_date);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var toDate = exports.toDate = function toDate(date) {
	    date = new Date(date);
	    if (isNaN(date.getTime())) return null;
	    return date;
	};

	var formatDate = exports.formatDate = function formatDate(date, format) {
	    date = toDate(date);
	    if (!date) return '';
	    return _date2.default.format(date, format || 'yyyy-MM-dd');
	};

	var parseDate = exports.parseDate = function parseDate(string, format) {
	    return _date2.default.parse(string, format || 'yyyy-MM-dd');
	};

	var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	        return 30;
	    }

	    if (month === 1) {
	        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
	            return 29;
	        } else {
	            return 28;
	        }
	    }

	    return 31;
	};

	var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
	    var temp = new Date(date.getTime());
	    temp.setDate(1);
	    return temp.getDay();
	};

	var prevMonth = exports.prevMonth = function prevMonth(src) {
	    var year = src.getFullYear();
	    var month = src.getMonth();
	    var date = src.getDate();

	    var newYear = month === 0 ? year - 1 : year;
	    var newMonth = month === 0 ? 11 : month - 1;

	    var newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
	    if (newMonthDayCount < date) {
	        src.setDate(newMonthDayCount);
	    }

	    src.setMonth(newMonth);
	    src.setFullYear(newYear);

	    return new Date(src.getTime());
	};

	var nextMonth = exports.nextMonth = function nextMonth(src) {
	    var year = src.getFullYear();
	    var month = src.getMonth();
	    var date = src.getDate();

	    var newYear = month === 11 ? year + 1 : year;
	    var newMonth = month === 11 ? 0 : month + 1;

	    var newMonthDayCount = getDayCountOfMonth(newYear, newMonth);
	    if (newMonthDayCount < date) {
	        src.setDate(newMonthDayCount);
	    }

	    src.setMonth(newMonth);
	    src.setFullYear(newYear);

	    return new Date(src.getTime());
	};

	var initTimeDate = exports.initTimeDate = function initTimeDate() {
	    var date = new Date();
	    date.setHours(0);
	    date.setMinutes(0);
	    date.setSeconds(0);
	    return date;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	(function (main) {
	    'use strict';

	    var fecha = {};
	    var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
	    var twoDigits = /\d\d?/;
	    var threeDigits = /\d{3}/;
	    var fourDigits = /\d{4}/;
	    var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	    var noop = function noop() {};

	    function shorten(arr, sLen) {
	        var newArr = [];
	        for (var i = 0, len = arr.length; i < len; i++) {
	            newArr.push(arr[i].substr(0, sLen));
	        }
	        return newArr;
	    }

	    function monthUpdate(arrName) {
	        return function (d, v, i18n) {
	            var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
	            if (~index) {
	                d.month = index;
	            }
	        };
	    }

	    function pad(val, len) {
	        val = String(val);
	        len = len || 2;
	        while (val.length < len) {
	            val = '0' + val;
	        }
	        return val;
	    }

	    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	    var monthNamesShort = shorten(monthNames, 3);
	    var dayNamesShort = shorten(dayNames, 3);
	    fecha.i18n = {
	        dayNamesShort: dayNamesShort,
	        dayNames: dayNames,
	        monthNamesShort: monthNamesShort,
	        monthNames: monthNames,
	        amPm: ['am', 'pm'],
	        DoFn: function DoFn(D) {
	            return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
	        }
	    };

	    var formatFlags = {
	        D: function D(dateObj) {
	            return dateObj.getDay();
	        },
	        DD: function DD(dateObj) {
	            return pad(dateObj.getDay());
	        },
	        Do: function Do(dateObj, i18n) {
	            return i18n.DoFn(dateObj.getDate());
	        },
	        d: function d(dateObj) {
	            return dateObj.getDate();
	        },
	        dd: function dd(dateObj) {
	            return pad(dateObj.getDate());
	        },
	        ddd: function ddd(dateObj, i18n) {
	            return i18n.dayNamesShort[dateObj.getDay()];
	        },
	        dddd: function dddd(dateObj, i18n) {
	            return i18n.dayNames[dateObj.getDay()];
	        },
	        M: function M(dateObj) {
	            return dateObj.getMonth() + 1;
	        },
	        MM: function MM(dateObj) {
	            return pad(dateObj.getMonth() + 1);
	        },
	        MMM: function MMM(dateObj, i18n) {
	            return i18n.monthNamesShort[dateObj.getMonth()];
	        },
	        MMMM: function MMMM(dateObj, i18n) {
	            return i18n.monthNames[dateObj.getMonth()];
	        },
	        yy: function yy(dateObj) {
	            return String(dateObj.getFullYear()).substr(2);
	        },
	        yyyy: function yyyy(dateObj) {
	            return dateObj.getFullYear();
	        },
	        h: function h(dateObj) {
	            return dateObj.getHours() % 12 || 12;
	        },
	        hh: function hh(dateObj) {
	            return pad(dateObj.getHours() % 12 || 12);
	        },
	        H: function H(dateObj) {
	            return dateObj.getHours();
	        },
	        HH: function HH(dateObj) {
	            return pad(dateObj.getHours());
	        },
	        m: function m(dateObj) {
	            return dateObj.getMinutes();
	        },
	        mm: function mm(dateObj) {
	            return pad(dateObj.getMinutes());
	        },
	        s: function s(dateObj) {
	            return dateObj.getSeconds();
	        },
	        ss: function ss(dateObj) {
	            return pad(dateObj.getSeconds());
	        },
	        S: function S(dateObj) {
	            return Math.round(dateObj.getMilliseconds() / 100);
	        },
	        SS: function SS(dateObj) {
	            return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
	        },
	        SSS: function SSS(dateObj) {
	            return pad(dateObj.getMilliseconds(), 3);
	        },
	        a: function a(dateObj, i18n) {
	            return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
	        },
	        A: function A(dateObj, i18n) {
	            return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
	        },
	        ZZ: function ZZ(dateObj) {
	            var o = dateObj.getTimezoneOffset();
	            return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
	        }
	    };

	    var parseFlags = {
	        d: [twoDigits, function (d, v) {
	            d.day = v;
	        }],
	        M: [twoDigits, function (d, v) {
	            d.month = v - 1;
	        }],
	        yy: [twoDigits, function (d, v) {
	            var da = new Date(),
	                cent = +('' + da.getFullYear()).substr(0, 2);
	            d.year = '' + (v > 68 ? cent - 1 : cent) + v;
	        }],
	        h: [twoDigits, function (d, v) {
	            d.hour = v;
	        }],
	        m: [twoDigits, function (d, v) {
	            d.minute = v;
	        }],
	        s: [twoDigits, function (d, v) {
	            d.second = v;
	        }],
	        yyyy: [fourDigits, function (d, v) {
	            d.year = v;
	        }],
	        S: [/\d/, function (d, v) {
	            d.millisecond = v * 100;
	        }],
	        SS: [/\d{2}/, function (d, v) {
	            d.millisecond = v * 10;
	        }],
	        SSS: [threeDigits, function (d, v) {
	            d.millisecond = v;
	        }],
	        D: [twoDigits, noop],
	        ddd: [word, noop],
	        MMM: [word, monthUpdate('monthNamesShort')],
	        MMMM: [word, monthUpdate('monthNames')],
	        a: [word, function (d, v, i18n) {
	            var val = v.toLowerCase();
	            if (val === i18n.amPm[0]) {
	                d.isPm = false;
	            } else if (val === i18n.amPm[1]) {
	                d.isPm = true;
	            }
	        }],
	        ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
	            var parts = (v + '').match(/([\+\-]|\d\d)/gi),
	                minutes;

	            if (parts) {
	                minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
	                d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
	            }
	        }]
	    };
	    parseFlags.DD = parseFlags.DD;
	    parseFlags.dddd = parseFlags.ddd;
	    parseFlags.Do = parseFlags.dd = parseFlags.d;
	    parseFlags.mm = parseFlags.m;
	    parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
	    parseFlags.MM = parseFlags.M;
	    parseFlags.ss = parseFlags.s;
	    parseFlags.A = parseFlags.a;

	    fecha.masks = {
	        'default': 'ddd MMM dd yyyy HH:mm:ss',
	        shortDate: 'M/D/yy',
	        mediumDate: 'MMM d, yyyy',
	        longDate: 'MMMM d, yyyy',
	        fullDate: 'dddd, MMMM d, yyyy',
	        shortTime: 'HH:mm',
	        mediumTime: 'HH:mm:ss',
	        longTime: 'HH:mm:ss.SSS'
	    };

	    fecha.format = function (dateObj, mask, i18nSettings) {
	        var i18n = i18nSettings || fecha.i18n;

	        if (typeof dateObj === 'number') {
	            dateObj = new Date(dateObj);
	        }

	        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
	            throw new Error('Invalid Date in fecha.format');
	        }

	        mask = fecha.masks[mask] || mask || fecha.masks['default'];

	        return mask.replace(token, function ($0) {
	            return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
	        });
	    };

	    fecha.parse = function (dateStr, format, i18nSettings) {
	        var i18n = i18nSettings || fecha.i18n;

	        if (typeof format !== 'string') {
	            throw new Error('Invalid format in fecha.parse');
	        }

	        format = fecha.masks[format] || format;

	        if (dateStr.length > 1000) {
	            return false;
	        }

	        var isValid = true;
	        var dateInfo = {};
	        format.replace(token, function ($0) {
	            if (parseFlags[$0]) {
	                var info = parseFlags[$0];
	                var index = dateStr.search(info[0]);
	                if (!~index) {
	                    isValid = false;
	                } else {
	                    dateStr.replace(info[0], function (result) {
	                        info[1](dateInfo, result, i18n);
	                        dateStr = dateStr.substr(index + result.length);
	                        return result;
	                    });
	                }
	            }

	            return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
	        });

	        if (!isValid) {
	            return false;
	        }

	        var today = new Date();
	        if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
	            dateInfo.hour = +dateInfo.hour + 12;
	        } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
	            dateInfo.hour = 0;
	        }

	        var date;
	        if (dateInfo.timezoneOffset != null) {
	            dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
	            date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
	        } else {
	            date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
	        }
	        return date;
	    };

	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = fecha;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return fecha;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        main.fecha = fecha;
	    }
	})(undefined);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleClose),
	      expression: "handleClose"
	    }],
	    class: [_vm.prefixCls]
	  }, [_c('div', {
	    ref: "reference",
	    class: [_vm.prefixCls + '-rel']
	  }, [_vm._t("default", [_c('input', {
	    attrs: {
	      "icon": _vm.iconType
	    },
	    domProps: {
	      "value": _vm.visualValue
	    },
	    on: {
	      "change": _vm.handleInputChange,
	      "focus": _vm.handleFocus,
	      "click": _vm.handleIconClick,
	      "mouseenter": _vm.handleInputMouseenter,
	      "mouseleave": _vm.handleInputMouseleave
	    }
	  })])], 2), _vm._v(" "), _c('drop', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.opened),
	      expression: "opened"
	    }],
	    ref: "drop",
	    attrs: {
	      "placement": _vm.placement,
	      "transition": _vm.transition
	    }
	  }, [_c('div', {
	    ref: "picker"
	  })])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2ee003b3", module.exports)
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(55)

	/* template */
	var __vue_template__ = __webpack_require__(125)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\panel\\date.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5164a9aa", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5164a9aa", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] date.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(60);

	var _icon2 = _interopRequireDefault(_icon);

	var _dateTable = __webpack_require__(63);

	var _dateTable2 = _interopRequireDefault(_dateTable);

	var _yearTable = __webpack_require__(66);

	var _yearTable2 = _interopRequireDefault(_yearTable);

	var _monthTable = __webpack_require__(69);

	var _monthTable2 = _interopRequireDefault(_monthTable);

	var _time = __webpack_require__(72);

	var _time2 = _interopRequireDefault(_time);

	var _confirm = __webpack_require__(78);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _mixin = __webpack_require__(81);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _locale = __webpack_require__(83);

	var _locale2 = _interopRequireDefault(_locale);

	var _util = __webpack_require__(51);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-picker-panel';
	var datePrefixCls = 'ivu-date-picker';

	exports.default = {
	    name: 'DatePicker',
	    mixins: [_mixin2.default, _locale2.default],
	    components: { icon: _icon2.default, DateTable: _dateTable2.default, YearTable: _yearTable2.default, MonthTable: _monthTable2.default, TimePicker: _time2.default, confirm: _confirm2.default },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            datePrefixCls: datePrefixCls,
	            shortcuts: [],
	            currentView: 'date',
	            date: (0, _util.initTimeDate)(),
	            value: '',
	            showTime: false,
	            selectionMode: 'day',
	            disabledDate: '',
	            year: null,
	            month: null,
	            confirm: false,
	            isTime: false,
	            format: 'yyyy-MM-dd'
	        };
	    },

	    computed: {
	        classes: function classes() {
	            return [prefixCls + '-body-wrapper', (0, _defineProperty3.default)({}, prefixCls + '-with-sidebar', this.shortcuts.length)];
	        },
	        yearLabel: function yearLabel() {
	            var tYear = '年';
	            var year = this.year;
	            if (!year) return '';
	            if (this.currentView === 'year') {
	                var startYear = Math.floor(year / 10) * 10;
	                return '' + startYear + tYear + ' - ' + (startYear + 9) + tYear;
	            }
	            return '' + year + tYear;
	        },
	        monthLabel: function monthLabel() {
	            var month = this.month + 1;
	            return this.t('i.datepicker.month' + month);
	        }
	    },
	    watch: {
	        value: function value(newVal) {
	            if (!newVal) return;
	            newVal = new Date(newVal);
	            if (!isNaN(newVal)) {
	                this.date = newVal;
	                this.year = newVal.getFullYear();
	                this.month = newVal.getMonth();
	            }
	            if (this.showTime) this.$refs.timePicker.value = newVal;
	        },
	        date: function date(val) {
	            if (this.showTime) this.$refs.timePicker.date = val;
	        },
	        format: function format(val) {
	            if (this.showTime) this.$refs.timePicker.format = val;
	        },
	        currentView: function currentView(val) {
	            if (val === 'time') this.$refs.timePicker.updateScroll();
	        }
	    },
	    methods: {
	        resetDate: function resetDate() {
	            this.date = new Date(this.date);
	        },
	        handleClear: function handleClear() {
	            this.date = new Date();
	            this.$emit('on-pick', '');
	            if (this.showTime) this.$refs.timePicker.handleClear();
	        },
	        resetView: function resetView() {
	            var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            if (this.currentView !== 'time' || reset) {
	                if (this.selectionMode === 'month') {
	                    this.currentView = 'month';
	                } else if (this.selectionMode === 'year') {
	                    this.currentView = 'year';
	                } else {
	                    this.currentView = 'date';
	                }
	            }

	            this.year = this.date.getFullYear();
	            this.month = this.date.getMonth();
	            if (reset) this.isTime = false;
	        },
	        prevYear: function prevYear() {
	            if (this.currentView === 'year') {
	                this.$refs.yearTable.prevTenYear();
	            } else {
	                this.year--;
	                this.date.setFullYear(this.year);
	                this.resetDate();
	            }
	        },
	        nextYear: function nextYear() {
	            if (this.currentView === 'year') {
	                this.$refs.yearTable.nextTenYear();
	            } else {
	                this.year++;
	                this.date.setFullYear(this.year);
	                this.resetDate();
	            }
	        },
	        prevMonth: function prevMonth() {
	            this.month--;
	            if (this.month < 0) {
	                this.month = 11;
	                this.year--;
	            }
	        },
	        nextMonth: function nextMonth() {
	            this.month++;
	            if (this.month > 11) {
	                this.month = 0;
	                this.year++;
	            }
	        },
	        showYearPicker: function showYearPicker() {
	            this.currentView = 'year';
	        },
	        showMonthPicker: function showMonthPicker() {
	            this.currentView = 'month';
	        },
	        handleToggleTime: function handleToggleTime() {
	            if (this.currentView === 'date') {
	                this.currentView = 'time';
	                this.isTime = true;
	            } else if (this.currentView === 'time') {
	                this.currentView = 'date';
	                this.isTime = false;
	            }
	        },
	        handleYearPick: function handleYearPick(year) {
	            var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            this.year = year;
	            if (!close) return;

	            this.date.setFullYear(year);
	            if (this.selectionMode === 'year') {
	                this.$emit('on-pick', new Date(year, 0, 1));
	            } else {
	                this.currentView = 'month';
	            }

	            this.resetDate();
	        },
	        handleMonthPick: function handleMonthPick(month) {
	            this.month = month;
	            var selectionMode = this.selectionMode;
	            if (selectionMode !== 'month') {
	                this.date.setMonth(month);
	                this.currentView = 'date';
	                this.resetDate();
	            } else {
	                this.date.setMonth(month);
	                this.year && this.date.setFullYear(this.year);
	                this.resetDate();
	                var value = new Date(this.date.getFullYear(), month, 1);
	                this.$emit('on-pick', value);
	            }
	        },
	        handleDatePick: function handleDatePick(value) {
	            if (this.selectionMode === 'day') {
	                this.$emit('on-pick', new Date(value.getTime()));
	                this.date.setFullYear(value.getFullYear());
	                this.date.setMonth(value.getMonth());
	                this.date.setDate(value.getDate());
	            }

	            this.resetDate();
	        },
	        handleTimePick: function handleTimePick(date) {
	            this.handleDatePick(date);
	        }
	    },
	    compiled: function compiled() {
	        if (this.selectionMode === 'month') {
	            this.currentView = 'month';
	        }

	        if (this.date && !this.year) {
	            this.year = this.date.getFullYear();
	            this.month = this.date.getMonth();
	        }
	        if (this.showTime) {
	            this.$refs.timePicker.date = this.date;
	            this.$refs.timePicker.value = this.value;
	            this.$refs.timePicker.format = this.format;
	            this.$refs.timePicker.showDate = true;
	        }
	    }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(57);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var $Object = __webpack_require__(6).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(10).f });

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(61)

	/* template */
	var __vue_template__ = __webpack_require__(62)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\icon\\icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4a006e14", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4a006e14", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] icon.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});


	var prefixCls = 'ivu-icon';

	exports.default = {
	    props: {
	        type: String,
	        size: [Number, String],
	        color: String
	    },
	    computed: {
	        classes: function classes() {
	            return prefixCls + ' ' + prefixCls + '-' + this.type;
	        },
	        styles: function styles() {
	            var style = {};

	            if (this.size) {
	                style['font-size'] = this.size + 'px';
	            }

	            if (this.color) {
	                style.color = this.color;
	            }

	            return style;
	        }
	    }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('i', {
	    class: _vm.classes,
	    style: (_vm.styles)
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4a006e14", module.exports)
	  }
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(64)

	/* template */
	var __vue_template__ = __webpack_require__(65)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\base\\date-table.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-530b6385", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-530b6385", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] date-table.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _util = __webpack_require__(51);

	var _assist = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-date-picker-cells';
	var clearHours = function clearHours(time) {
	    var cloneDate = new Date(time);
	    cloneDate.setHours(0, 0, 0, 0);
	    return cloneDate.getTime();
	};

	exports.default = {
	    props: {
	        date: {},
	        minDate: {},
	        maxDate: {},
	        month: {},
	        year: {},
	        value: '',
	        disabledDate: {},
	        selectionMode: {
	            default: 'day'
	        },
	        rangeState: {
	            default: function _default() {
	                return {
	                    endDate: null,
	                    selecting: false
	                };
	            }
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            readCells: []
	        };
	    },

	    watch: {
	        'rangeState.endDate': function rangeStateEndDate(newVal) {
	            this.markRange(newVal);
	        },
	        minDate: function minDate(newVal, oldVal) {
	            if (newVal && !oldVal) {
	                this.rangeState.selecting = true;
	                this.markRange(newVal);
	            } else if (!newVal) {
	                this.rangeState.selecting = false;
	                this.markRange(newVal);
	            } else {
	                this.markRange();
	            }
	        },
	        maxDate: function maxDate(newVal, oldVal) {
	            if (newVal && !oldVal) {
	                this.rangeState.selecting = false;
	                this.markRange(newVal);
	            }
	        },

	        cells: {
	            handler: function handler(cells) {
	                this.readCells = cells;
	            },

	            immediate: true
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls];
	        },
	        cells: function cells() {
	            var date = new Date(this.year, this.month, 1);
	            var day = (0, _util.getFirstDayOfMonth)(date);
	            day = day === 0 ? 7 : day;
	            var today = clearHours(new Date());
	            var selectDay = clearHours(new Date(this.value));
	            var minDay = clearHours(new Date(this.minDate));
	            var maxDay = clearHours(new Date(this.maxDate));

	            var dateCountOfMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth());
	            var dateCountOfLastMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

	            var disabledDate = this.disabledDate;

	            var cells = [];
	            var cell_tmpl = {
	                text: '',
	                type: '',
	                selected: false,
	                disabled: false,
	                range: false,
	                start: false,
	                end: false
	            };
	            if (day !== 7) {
	                for (var i = 0; i < day; i++) {
	                    var cell = (0, _assist.deepCopy)(cell_tmpl);
	                    cell.type = 'prev-month';
	                    cell.text = dateCountOfLastMonth - (day - 1) + i;

	                    var prevMonth = this.month - 1;
	                    var prevYear = this.year;
	                    if (this.month === 0) {
	                        prevMonth = 11;
	                        prevYear -= 1;
	                    }
	                    var time = clearHours(new Date(prevYear, prevMonth, cell.text));
	                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
	                    cells.push(cell);
	                }
	            }

	            for (var _i = 1; _i <= dateCountOfMonth; _i++) {
	                var _cell = (0, _assist.deepCopy)(cell_tmpl);
	                var _time = clearHours(new Date(this.year, this.month, _i));
	                _cell.type = _time === today ? 'today' : 'normal';
	                _cell.text = _i;
	                _cell.selected = _time === selectDay;
	                _cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(_time));
	                _cell.range = _time >= minDay && _time <= maxDay;
	                _cell.start = this.minDate && _time === minDay;
	                _cell.end = this.maxDate && _time === maxDay;

	                cells.push(_cell);
	            }

	            var nextMonthCount = 42 - cells.length;
	            for (var _i2 = 1; _i2 <= nextMonthCount; _i2++) {
	                var _cell2 = (0, _assist.deepCopy)(cell_tmpl);
	                _cell2.type = 'next-month';
	                _cell2.text = _i2;

	                var nextMonth = this.month + 1;
	                var nextYear = this.year;
	                if (this.month === 11) {
	                    nextMonth = 0;
	                    nextYear += 1;
	                }
	                var _time2 = clearHours(new Date(nextYear, nextMonth, _cell2.text));
	                _cell2.disabled = typeof disabledDate === 'function' && disabledDate(new Date(_time2));
	                cells.push(_cell2);
	            }

	            return cells;
	        }
	    },
	    methods: {
	        getDateOfCell: function getDateOfCell(cell) {
	            var year = this.year;
	            var month = this.month;
	            var day = cell.text;

	            var date = this.date;
	            var hours = date.getHours();
	            var minutes = date.getMinutes();
	            var seconds = date.getSeconds();

	            if (cell.type === 'prev-month') {
	                if (month === 0) {
	                    month = 11;
	                    year--;
	                } else {
	                    month--;
	                }
	            } else if (cell.type === 'next-month') {
	                if (month === 11) {
	                    month = 0;
	                    year++;
	                } else {
	                    month++;
	                }
	            }

	            return new Date(year, month, day, hours, minutes, seconds);
	        },
	        handleClick: function handleClick(event) {
	            var target = event.target;
	            if (target.tagName === 'SPAN') {
	                var cell = this.cells[parseInt(event.target.getAttribute('index'))];
	                if (cell.disabled) return;

	                var newDate = this.getDateOfCell(cell);

	                if (this.selectionMode === 'range') {
	                    if (this.minDate && this.maxDate) {
	                        var minDate = new Date(newDate.getTime());
	                        var maxDate = null;
	                        this.rangeState.selecting = true;
	                        this.markRange(this.minDate);

	                        this.$emit('on-pick', { minDate: minDate, maxDate: maxDate }, false);
	                    } else if (this.minDate && !this.maxDate) {
	                        if (newDate >= this.minDate) {
	                            var _maxDate = new Date(newDate.getTime());
	                            this.rangeState.selecting = false;

	                            this.$emit('on-pick', { minDate: this.minDate, maxDate: _maxDate });
	                        } else {
	                            var _minDate = new Date(newDate.getTime());

	                            this.$emit('on-pick', { minDate: _minDate, maxDate: this.maxDate }, false);
	                        }
	                    } else if (!this.minDate) {
	                        var _minDate2 = new Date(newDate.getTime());
	                        this.rangeState.selecting = true;
	                        this.markRange(this.minDate);

	                        this.$emit('on-pick', { minDate: _minDate2, maxDate: this.maxDate }, false);
	                    }
	                } else {
	                    this.$emit('on-pick', newDate);
	                }
	            }
	            this.$emit('on-pick-click');
	        },
	        handleMouseMove: function handleMouseMove(event) {
	            if (!this.rangeState.selecting) return;

	            this.$emit('on-changerange', {
	                minDate: this.minDate,
	                maxDate: this.maxDate,
	                rangeState: this.rangeState
	            });

	            var target = event.target;
	            if (target.tagName === 'SPAN') {
	                var cell = this.cells[parseInt(event.target.getAttribute('index'))];
	                this.rangeState.endDate = this.getDateOfCell(cell);
	            }
	        },
	        markRange: function markRange(maxDate) {
	            var _this = this;

	            var minDate = this.minDate;
	            if (!maxDate) maxDate = this.maxDate;

	            var minDay = clearHours(new Date(minDate));
	            var maxDay = clearHours(new Date(maxDate));

	            this.cells.forEach(function (cell) {
	                if (cell.type === 'today' || cell.type === 'normal') {
	                    var time = clearHours(new Date(_this.year, _this.month, cell.text));
	                    cell.range = time >= minDay && time <= maxDay;
	                    cell.start = minDate && time === minDay;
	                    cell.end = maxDate && time === maxDay;
	                }
	            });
	        },
	        getCellCls: function getCellCls(cell) {
	            var _ref;

	            return [prefixCls + '-cell', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-cell-selected', cell.selected || cell.start || cell.end), (0, _defineProperty3.default)(_ref, prefixCls + '-cell-disabled', cell.disabled), (0, _defineProperty3.default)(_ref, prefixCls + '-cell-today', cell.type === 'today'), (0, _defineProperty3.default)(_ref, prefixCls + '-cell-prev-month', cell.type === 'prev-month'), (0, _defineProperty3.default)(_ref, prefixCls + '-cell-next-month', cell.type === 'next-month'), (0, _defineProperty3.default)(_ref, prefixCls + '-cell-range', cell.range && !cell.start && !cell.end), _ref)];
	        }
	    }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.classes,
	    on: {
	      "click": _vm.handleClick,
	      "mousemove": _vm.handleMouseMove
	    }
	  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.readCells), function(cell, index) {
	    return _c('span', {
	      class: _vm.getCellCls(cell),
	      attrs: {
	        "index": index
	      }
	    }, [_vm._v(_vm._s(cell.text))])
	  })], 2)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "date-picker-header"
	  }, [_c('span', [_vm._v("日")]), _vm._v(" "), _c('span', [_vm._v("一")]), _vm._v(" "), _c('span', [_vm._v("二")]), _vm._v(" "), _c('span', [_vm._v("三")]), _vm._v(" "), _c('span', [_vm._v("四")]), _vm._v(" "), _c('span', [_vm._v("五")]), _vm._v(" "), _c('span', [_vm._v("六")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-530b6385", module.exports)
	  }
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(67)

	/* template */
	var __vue_template__ = __webpack_require__(68)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\base\\year-table.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dc925558", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-dc925558", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] year-table.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-date-picker-cells';

	exports.default = {
	    props: {
	        date: {},
	        year: {},
	        disabledDate: {},
	        selectionMode: {
	            default: 'year'
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, prefixCls + '-year'];
	        },
	        startYear: function startYear() {
	            return Math.floor(this.year / 10) * 10;
	        },
	        cells: function cells() {
	            var cells = [];
	            var cell_tmpl = {
	                text: '',
	                selected: false,
	                disabled: false
	            };

	            for (var i = 0; i < 10; i++) {
	                var cell = (0, _assist.deepCopy)(cell_tmpl);
	                cell.text = this.startYear + i;

	                var date = new Date(this.date);
	                date.setFullYear(cell.text);
	                cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date) && this.selectionMode === 'year';

	                cell.selected = Number(this.year) === cell.text;
	                cells.push(cell);
	            }

	            return cells;
	        }
	    },
	    methods: {
	        getCellCls: function getCellCls(cell) {
	            var _ref;

	            return [prefixCls + '-cell', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-cell-selected', cell.selected), (0, _defineProperty3.default)(_ref, prefixCls + '-cell-disabled', cell.disabled), _ref)];
	        },
	        nextTenYear: function nextTenYear() {
	            this.$emit('on-pick', Number(this.year) + 10, false);
	        },
	        prevTenYear: function prevTenYear() {
	            this.$emit('on-pick', Number(this.year) - 10, false);
	        },
	        handleClick: function handleClick(event) {
	            var target = event.target;
	            if (target.tagName === 'EM') {
	                var cell = this.cells[parseInt(event.target.getAttribute('index'))];
	                if (cell.disabled) return;

	                this.$emit('on-pick', cell.text);
	            }
	            this.$emit('on-pick-click');
	        }
	    }
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.classes,
	    on: {
	      "click": _vm.handleClick
	    }
	  }, _vm._l((_vm.cells), function(cell, index) {
	    return _c('span', {
	      class: _vm.getCellCls(cell)
	    }, [_c('em', {
	      attrs: {
	        "index": index
	      }
	    }, [_vm._v(_vm._s(cell.text))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dc925558", module.exports)
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(70)

	/* template */
	var __vue_template__ = __webpack_require__(71)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\base\\month-table.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d6199eca", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d6199eca", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] month-table.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assist = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-date-picker-cells';

	exports.default = {
	    props: {
	        date: {},
	        month: {
	            type: Number
	        },
	        disabledDate: {},
	        selectionMode: {
	            default: 'month'
	        }
	    },
	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, prefixCls + '-month'];
	        },
	        cells: function cells() {
	            var cells = [];
	            var cell_tmpl = {
	                text: '',
	                selected: false,
	                disabled: false
	            };

	            for (var i = 0; i < 12; i++) {
	                var cell = (0, _assist.deepCopy)(cell_tmpl);
	                cell.text = i + 1;

	                var date = new Date(this.date);
	                date.setMonth(i);
	                cell.disabled = typeof this.disabledDate === 'function' && this.disabledDate(date) && this.selectionMode === 'month';

	                cell.selected = Number(this.month) === i;
	                cells.push(cell);
	            }

	            return cells;
	        }
	    },
	    methods: {
	        getCellCls: function getCellCls(cell) {
	            var _ref;

	            return [prefixCls + '-cell', (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-cell-selected', cell.selected), (0, _defineProperty3.default)(_ref, prefixCls + '-cell-disabled', cell.disabled), _ref)];
	        },
	        handleClick: function handleClick(event) {
	            var target = event.target;
	            if (target.tagName === 'EM') {
	                var index = parseInt(event.target.getAttribute('index'));
	                var cell = this.cells[index];
	                if (cell.disabled) return;

	                this.$emit('on-pick', index);
	            }
	            this.$emit('on-pick-click');
	        },
	        tCell: function tCell(cell) {
	            return this.t('i.datepicker.months.m' + cell);
	        }
	    }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.classes,
	    on: {
	      "click": _vm.handleClick
	    }
	  }, _vm._l((_vm.cells), function(cell, index) {
	    return _c('span', {
	      class: _vm.getCellCls(cell)
	    }, [_c('em', {
	      attrs: {
	        "index": index
	      }
	    }, [_vm._v(_vm._s(cell.text))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d6199eca", module.exports)
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(73)

	/* template */
	var __vue_template__ = __webpack_require__(82)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\panel\\time.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ebf326c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1ebf326c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] time.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _timeSpinner = __webpack_require__(74);

	var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

	var _confirm = __webpack_require__(78);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _mixin = __webpack_require__(81);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _util = __webpack_require__(51);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-picker-panel';
	var timePrefixCls = 'ivu-time-picker';

	exports.default = {
	    mixins: [_mixin2.default],
	    components: { TimeSpinner: _timeSpinner2.default, Confirm: _confirm2.default },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            timePrefixCls: timePrefixCls,
	            date: (0, _util.initTimeDate)(),
	            value: '',
	            showDate: false,
	            format: 'HH:mm:ss',
	            hours: '',
	            minutes: '',
	            seconds: '',
	            disabledHours: [],
	            disabledMinutes: [],
	            disabledSeconds: [],
	            hideDisabledOptions: false,
	            confirm: false
	        };
	    },

	    computed: {
	        showSeconds: function showSeconds() {
	            return (this.format || '').indexOf('ss') !== -1;
	        },
	        visibleDate: function visibleDate() {
	            var date = this.date;
	            var month = date.getMonth() + 1;
	            var tYear = '年';
	            var tMonth = this.t('i.datepicker.month' + month);
	            return '' + date.getFullYear() + tYear + ' ' + tMonth;
	        }
	    },
	    watch: {
	        value: function value(newVal) {
	            if (!newVal) return;
	            newVal = new Date(newVal);
	            if (!isNaN(newVal)) {
	                this.date = newVal;
	                this.handleChange({
	                    hours: newVal.getHours(),
	                    minutes: newVal.getMinutes(),
	                    seconds: newVal.getSeconds()
	                }, false);
	            }
	        }
	    },
	    methods: {
	        handleClear: function handleClear() {
	            this.date = (0, _util.initTimeDate)();
	            this.hours = '';
	            this.minutes = '';
	            this.seconds = '';
	        },
	        handleChange: function handleChange(date) {
	            var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            if (date.hours !== undefined) {
	                this.date.setHours(date.hours);
	                this.hours = this.date.getHours();
	            }
	            if (date.minutes !== undefined) {
	                this.date.setMinutes(date.minutes);
	                this.minutes = this.date.getMinutes();
	            }
	            if (date.seconds !== undefined) {
	                this.date.setSeconds(date.seconds);
	                this.seconds = this.date.getSeconds();
	            }
	            if (emit) this.$emit('on-pick', this.date, true);
	        },
	        updateScroll: function updateScroll() {
	            this.$refs.timeSpinner.updateScroll();
	        }
	    },
	    compiled: function compiled() {
	        if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
	    }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(75)

	/* template */
	var __vue_template__ = __webpack_require__(77)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\base\\time-spinner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b4ddd2f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4b4ddd2f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] time-spinner.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _timeMixins = __webpack_require__(76);

	var _timeMixins2 = _interopRequireDefault(_timeMixins);

	var _assist = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-time-picker-cells';

	exports.default = {
	    mixins: [_timeMixins2.default],
	    props: {
	        hours: {
	            type: [Number, String],
	            default: 0
	        },
	        minutes: {
	            type: [Number, String],
	            default: 0
	        },
	        seconds: {
	            type: [Number, String],
	            default: 0
	        },
	        showSeconds: {
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            compiled: false
	        };
	    },

	    computed: {
	        classes: function classes() {
	            return ['' + prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-with-seconds', this.showSeconds)];
	        },
	        hoursList: function hoursList() {
	            var hours = [];
	            var hour_tmpl = {
	                text: 0,
	                selected: false,
	                disabled: false,
	                hide: false
	            };

	            for (var i = 0; i < 24; i++) {
	                var hour = (0, _assist.deepCopy)(hour_tmpl);
	                hour.text = i;

	                if (this.disabledHours.length && this.disabledHours.indexOf(i) > -1) {
	                    hour.disabled = true;
	                    if (this.hideDisabledOptions) hour.hide = true;
	                }
	                if (this.hours === i) hour.selected = true;
	                hours.push(hour);
	            }

	            return hours;
	        },
	        minutesList: function minutesList() {
	            var minutes = [];
	            var minute_tmpl = {
	                text: 0,
	                selected: false,
	                disabled: false,
	                hide: false
	            };

	            for (var i = 0; i < 60; i++) {
	                var minute = (0, _assist.deepCopy)(minute_tmpl);
	                minute.text = i;

	                if (this.disabledMinutes.length && this.disabledMinutes.indexOf(i) > -1) {
	                    minute.disabled = true;
	                    if (this.hideDisabledOptions) minute.hide = true;
	                }
	                if (this.minutes === i) minute.selected = true;
	                minutes.push(minute);
	            }

	            return minutes;
	        },
	        secondsList: function secondsList() {
	            var seconds = [];
	            var second_tmpl = {
	                text: 0,
	                selected: false,
	                disabled: false,
	                hide: false
	            };

	            for (var i = 0; i < 60; i++) {
	                var second = (0, _assist.deepCopy)(second_tmpl);
	                second.text = i;

	                if (this.disabledSeconds.length && this.disabledSeconds.indexOf(i) > -1) {
	                    second.disabled = true;
	                    if (this.hideDisabledOptions) second.hide = true;
	                }
	                if (this.seconds === i) second.selected = true;
	                seconds.push(second);
	            }

	            return seconds;
	        }
	    },
	    methods: {
	        getCellCls: function getCellCls(cell) {
	            var _ref2;

	            return [prefixCls + '-cell', (_ref2 = {}, (0, _defineProperty3.default)(_ref2, prefixCls + '-cell-selected', cell.selected), (0, _defineProperty3.default)(_ref2, prefixCls + '-cell-disabled', cell.disabled), _ref2)];
	        },
	        handleClickHours: function handleClickHours(event) {
	            this.handleClick('hours', event);
	        },
	        handleClickMinutes: function handleClickMinutes(event) {
	            this.handleClick('minutes', event);
	        },
	        handleClickSeconds: function handleClickSeconds(event) {
	            this.handleClick('seconds', event);
	        },
	        handleClick: function handleClick(type, event) {
	            var target = event.target;
	            if (target.tagName === 'LI') {
	                var cell = this[type + 'List'][parseInt(event.target.getAttribute('index'))];
	                if (cell.disabled) return;
	                var data = {};
	                data[type] = cell.text;
	                this.$emit('on-change', data);
	            }
	            this.$emit('on-pick-click');
	        },
	        scroll: function scroll(type, index) {
	            var from = this.$els[type].scrollTop;
	            var to = 24 * this.getScrollIndex(type, index);
	            (0, _assist.scrollTop)(this.$els[type], from, to, 500);
	        },
	        getScrollIndex: function getScrollIndex(type, index) {
	            var Type = (0, _assist.firstUpperCase)(type);
	            var disabled = this['disabled' + Type];
	            if (disabled.length && this.hideDisabledOptions) {
	                (function () {
	                    var _count = 0;
	                    disabled.forEach(function (item) {
	                        return item <= index ? _count++ : '';
	                    });
	                    index -= _count;
	                })();
	            }
	            return index;
	        },
	        updateScroll: function updateScroll() {
	            var _this = this;

	            var times = ['hours', 'minutes', 'seconds'];
	            this.$nextTick(function () {
	                times.forEach(function (type) {
	                    _this.$els[type].scrollTop = 24 * _this.getScrollIndex(type, _this[type]);
	                });
	            });
	        },
	        formatTime: function formatTime(text) {
	            return text < 10 ? '0' + text : text;
	        }
	    },
	    watch: {
	        hours: function hours(val) {
	            if (!this.compiled) return;
	            this.scroll('hours', val);
	        },
	        minutes: function minutes(val) {
	            if (!this.compiled) return;
	            this.scroll('minutes', val);
	        },
	        seconds: function seconds(val) {
	            if (!this.compiled) return;
	            this.scroll('seconds', val);
	        }
	    },
	    compiled: function compiled() {
	        var _this2 = this;

	        this.updateScroll();
	        this.$nextTick(function () {
	            return _this2.compiled = true;
	        });
	    }
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        disabledHours: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        disabledMinutes: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        disabledSeconds: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        hideDisabledOptions: {
	            type: Boolean,
	            default: false
	        }
	    }
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.classes
	  }, [_c('div', {
	    ref: "hours",
	    class: [_vm.prefixCls + '-list']
	  }, [_c('ul', {
	    class: [_vm.prefixCls + '-ul'],
	    on: {
	      "click": _vm.handleClickHours
	    }
	  }, _vm._l((_vm.hoursList), function(item, index) {
	    return _c('li', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (!item.hide),
	        expression: "!item.hide"
	      }],
	      class: _vm.getCellCls(item),
	      attrs: {
	        "index": index
	      }
	    }, [_vm._v(_vm._s(_vm.formatTime(item.text)))])
	  }))]), _vm._v(" "), _c('div', {
	    ref: "minutes",
	    class: [_vm.prefixCls + '-list']
	  }, [_c('ul', {
	    class: [_vm.prefixCls + '-ul'],
	    on: {
	      "click": _vm.handleClickMinutes
	    }
	  }, _vm._l((_vm.minutesList), function(item, index) {
	    return _c('li', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (!item.hide),
	        expression: "!item.hide"
	      }],
	      class: _vm.getCellCls(item),
	      attrs: {
	        "index": index
	      }
	    }, [_vm._v(_vm._s(_vm.formatTime(item.text)))])
	  }))]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showSeconds),
	      expression: "showSeconds"
	    }],
	    ref: "seconds",
	    class: [_vm.prefixCls + '-list']
	  }, [_c('ul', {
	    class: [_vm.prefixCls + '-ul'],
	    on: {
	      "click": _vm.handleClickSeconds
	    }
	  }, _vm._l((_vm.secondsList), function(item, index) {
	    return _c('li', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (!item.hide),
	        expression: "!item.hide"
	      }],
	      class: _vm.getCellCls(item),
	      attrs: {
	        "index": index
	      }
	    }, [_vm._v(_vm._s(_vm.formatTime(item.text)))])
	  }))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4b4ddd2f", module.exports)
	  }
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(79)

	/* template */
	var __vue_template__ = __webpack_require__(80)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\base\\confirm.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f734c2cc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f734c2cc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] confirm.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-picker';

	exports.default = {
	    props: {
	        showTime: false,
	        isTime: false,
	        timeDisabled: false
	    },
	    data: function data() {
	        return {
	            prefixCls: prefixCls
	        };
	    },

	    computed: {
	        timeClasses: function timeClasses() {
	            return (0, _defineProperty3.default)({}, prefixCls + '-confirm-time-disabled', this.timeDisabled);
	        }
	    },
	    methods: {
	        handleClear: function handleClear() {
	            this.$emit('on-pick-clear');
	        },
	        handleSuccess: function handleSuccess() {
	            this.$emit('on-pick-success');
	        },
	        handleToggleTime: function handleToggleTime() {
	            if (this.timeDisabled) return;
	            this.$emit('on-pick-toggle-time');
	        }
	    }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-confirm']
	  }, [(_vm.showTime) ? _c('span', {
	    class: _vm.timeClasses,
	    on: {
	      "click": _vm.handleToggleTime
	    }
	  }, [(_vm.isTime) ? [_vm._v("选择日期")] : [_vm._v("选择时间")]], 2) : _vm._e(), _vm._v(" "), _c('button', {
	    attrs: {
	      "size": "small",
	      "type": "text"
	    },
	    on: {
	      "click": _vm.handleClear
	    }
	  }, [_vm._v("清空")]), _vm._v(" "), _c('button', {
	    attrs: {
	      "size": "small",
	      "type": "primary"
	    },
	    on: {
	      "click": _vm.handleSuccess
	    }
	  }, [_vm._v("确定")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f734c2cc", module.exports)
	  }
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var prefixCls = 'picker-panel';
	var datePrefixCls = 'date-picker';

	exports.default = {
	    methods: {
	        iconBtnCls: function iconBtnCls(direction) {
	            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	            return [prefixCls + '-icon-btn', datePrefixCls + '-' + direction + '-btn', datePrefixCls + '-' + direction + '-btn-arrow' + type];
	        },
	        handleShortcutClick: function handleShortcutClick(shortcut) {
	            shortcut.value && this.$emit('on-pick', shortcut.value());
	            shortcut.onClick && shortcut.onClick(this);
	        },
	        handlePickClear: function handlePickClear() {
	            this.$emit('on-pick-clear');
	        },
	        handlePickSuccess: function handlePickSuccess() {
	            this.$emit('on-pick-success');
	        },
	        handlePickClick: function handlePickClick() {
	            this.$emit('on-pick-click');
	        }
	    }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-body-wrapper']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-body']
	  }, [(_vm.showDate) ? _c('div', {
	    class: [_vm.timePrefixCls + '-header']
	  }, [_vm._v(_vm._s(_vm.visibleDate))]) : _vm._e(), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-content']
	  }, [_c('time-spinner', {
	    ref: "time-spinner",
	    attrs: {
	      "show-seconds": _vm.showSeconds,
	      "hours": _vm.hours,
	      "minutes": _vm.minutes,
	      "seconds": _vm.seconds,
	      "disabled-hours": _vm.disabledHours,
	      "disabled-minutes": _vm.disabledMinutes,
	      "disabled-seconds": _vm.disabledSeconds,
	      "hide-disabled-options": _vm.hideDisabledOptions
	    },
	    on: {
	      "on-change": _vm.handleChange,
	      "on-pick-click": _vm.handlePickClick
	    }
	  })], 1), _vm._v(" "), (_vm.confirm) ? _c('Confirm', {
	    on: {
	      "on-pick-clear": _vm.handlePickClear,
	      "on-pick-success": _vm.handlePickSuccess
	    }
	  }) : _vm._e()], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1ebf326c", module.exports)
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _locale = __webpack_require__(84);

	exports.default = {
	    methods: {
	        t: function t() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            return _locale.t.apply(this, args);
	        }
	    }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.i18n = exports.use = exports.t = undefined;

	var _getPrototypeOf = __webpack_require__(85);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _zhCN = __webpack_require__(89);

	var _zhCN2 = _interopRequireDefault(_zhCN);

	var _format = __webpack_require__(90);

	var _format2 = _interopRequireDefault(_format);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var format = (0, _format2.default)(Vue);
	var lang = _zhCN2.default;
	var merged = false;
	var i18nHandler = function i18nHandler() {
	    var vuei18n = (0, _getPrototypeOf2.default)(this || Vue).$t;
	    if (typeof vuei18n === 'function') {
	        if (!merged) {
	            merged = true;
	            Vue.locale(Vue.config.lang);
	        }
	        return vuei18n.apply(this, arguments);
	    }
	};

	var t = exports.t = function t(path, options) {
	    var value = i18nHandler.apply(this, arguments);
	    if (value !== null && value !== undefined) return value;

	    var array = path.split('.');
	    var current = lang;

	    for (var i = 0, j = array.length; i < j; i++) {
	        var property = array[i];
	        value = current[property];
	        if (i === j - 1) return format(value, options);
	        if (!value) return '';
	        current = value;
	    }
	    return '';
	};

	var use = exports.use = function use(l) {
	    lang = l || lang;
	};

	var i18n = exports.i18n = function i18n(fn) {
	    i18nHandler = fn || i18nHandler;
	};

	exports.default = { use: use, t: t, i18n: i18n };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	module.exports = __webpack_require__(6).Object.getPrototypeOf;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(37),
	    $getPrototypeOf = __webpack_require__(88);

	__webpack_require__(41)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(22),
	    toObject = __webpack_require__(37),
	    IE_PROTO = __webpack_require__(31)('IE_PROTO'),
	    ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    i: {
	        select: {
	            placeholder: '请选择',
	            noMatch: '无匹配数据'
	        },
	        table: {
	            noDataText: '暂无数据',
	            noFilteredDataText: '暂无筛选结果',
	            confirmFilter: '筛选',
	            resetFilter: '重置',
	            clearFilter: '全部'
	        },
	        datepicker: {
	            selectDate: '选择日期',
	            selectTime: '选择时间',
	            startTime: '开始时间',
	            endTime: '结束时间',
	            clear: '清空',
	            ok: '确定',
	            month: '月',
	            month1: '1 月',
	            month2: '2 月',
	            month3: '3 月',
	            month4: '4 月',
	            month5: '5 月',
	            month6: '6 月',
	            month7: '7 月',
	            month8: '8 月',
	            month9: '9 月',
	            month10: '10 月',
	            month11: '11 月',
	            month12: '12 月',
	            year: '年',
	            weeks: {
	                sun: '日',
	                mon: '一',
	                tue: '二',
	                wed: '三',
	                thu: '四',
	                fri: '五',
	                sat: '六'
	            },
	            months: {
	                m1: '1月',
	                m2: '2月',
	                m3: '3月',
	                m4: '4月',
	                m5: '5月',
	                m6: '6月',
	                m7: '7月',
	                m8: '8月',
	                m9: '9月',
	                m10: '10月',
	                m11: '11月',
	                m12: '12月'
	            }
	        },
	        transfer: {
	            titles: {
	                source: '源列表',
	                target: '目的列表'
	            },
	            filterPlaceholder: '请输入搜索内容',
	            notFoundText: '列表为空'
	        },
	        modal: {
	            okText: '确定',
	            cancelText: '取消'
	        },
	        poptip: {
	            okText: '确定',
	            cancelText: '取消'
	        },
	        page: {
	            prev: '上一页',
	            next: '下一页',
	            total: '共',
	            item: '条',
	            items: '条',
	            prev5: '向前 5 页',
	            next5: '向后 5 页',
	            page: '条/页',
	            goto: '跳至',
	            p: '页'
	        },
	        rate: {
	            star: '星',
	            stars: '星'
	        },
	        tree: {
	            emptyText: '暂无数据'
	        }
	    }
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(91);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports.default = function (Vue) {
	    var hasOwn = Vue.util.hasOwn;


	    function template(string) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        if (args.length === 1 && (0, _typeof3.default)(args[0]) === 'object') {
	            args = args[0];
	        }

	        if (!args || !args.hasOwnProperty) {
	            args = {};
	        }

	        return string.replace(RE_NARGS, function (match, prefix, i, index) {
	            var result = void 0;

	            if (string[index - 1] === '{' && string[index + match.length] === '}') {
	                return i;
	            } else {
	                result = hasOwn(args, i) ? args[i] : null;
	                if (result === null || result === undefined) {
	                    return '';
	                }

	                return result;
	            }
	        });
	    }

	    return template;
	};

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(92);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(111);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	__webpack_require__(106);
	module.exports = __webpack_require__(110).f('iterator');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $at = __webpack_require__(95)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(96)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29),
	    defined = __webpack_require__(26);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(97),
	    $export = __webpack_require__(4),
	    redefine = __webpack_require__(98),
	    hide = __webpack_require__(9),
	    has = __webpack_require__(22),
	    Iterators = __webpack_require__(99),
	    $iterCreate = __webpack_require__(100),
	    setToStringTag = __webpack_require__(104),
	    getPrototypeOf = __webpack_require__(88),
	    ITERATOR = __webpack_require__(105)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';

	var returnThis = function () {
	  return this;
	};

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var create = __webpack_require__(101),
	    descriptor = __webpack_require__(18),
	    setToStringTag = __webpack_require__(104),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(105)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(11),
	    dPs = __webpack_require__(102),
	    enumBugKeys = __webpack_require__(34),
	    IE_PROTO = __webpack_require__(31)('IE_PROTO'),
	    Empty = function () {/* empty */},
	    PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(103).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(10),
	    anObject = __webpack_require__(11),
	    getKeys = __webpack_require__(20);

	module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f,
	    has = __webpack_require__(22),
	    TAG = __webpack_require__(105)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var store = __webpack_require__(32)('wks'),
	    uid = __webpack_require__(33),
	    Symbol = __webpack_require__(5).Symbol,
	    USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	var global = __webpack_require__(5),
	    hide = __webpack_require__(9),
	    Iterators = __webpack_require__(99),
	    TO_STRING_TAG = __webpack_require__(105)('toStringTag');

	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var addToUnscopables = __webpack_require__(108),
	    step = __webpack_require__(109),
	    Iterators = __webpack_require__(99),
	    toIObject = __webpack_require__(23);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(96)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = function () {/* empty */};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(105);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	module.exports = __webpack_require__(6).Symbol;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim

	var global = __webpack_require__(5),
	    has = __webpack_require__(22),
	    DESCRIPTORS = __webpack_require__(14),
	    $export = __webpack_require__(4),
	    redefine = __webpack_require__(98),
	    META = __webpack_require__(114).KEY,
	    $fails = __webpack_require__(15),
	    shared = __webpack_require__(32),
	    setToStringTag = __webpack_require__(104),
	    uid = __webpack_require__(33),
	    wks = __webpack_require__(105),
	    wksExt = __webpack_require__(110),
	    wksDefine = __webpack_require__(115),
	    keyOf = __webpack_require__(116),
	    enumKeys = __webpack_require__(117),
	    isArray = __webpack_require__(118),
	    anObject = __webpack_require__(11),
	    toIObject = __webpack_require__(23),
	    toPrimitive = __webpack_require__(17),
	    createDesc = __webpack_require__(18),
	    _create = __webpack_require__(101),
	    gOPNExt = __webpack_require__(119),
	    $GOPD = __webpack_require__(121),
	    $DP = __webpack_require__(10),
	    $keys = __webpack_require__(20),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(120).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(36).f = $propertyIsEnumerable;
	  __webpack_require__(35).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(97)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) wks(symbols[i++]);

	for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function () {
	    setter = true;
	  },
	  useSimple: function () {
	    setter = false;
	  }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var META = __webpack_require__(33)('meta'),
	    isObject = __webpack_require__(12),
	    has = __webpack_require__(22),
	    setDesc = __webpack_require__(10).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(15)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5),
	    core = __webpack_require__(6),
	    LIBRARY = __webpack_require__(97),
	    wksExt = __webpack_require__(110),
	    defineProperty = __webpack_require__(10).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(20),
	    toIObject = __webpack_require__(23);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) if (O[key = keys[index++]] === el) return key;
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(20),
	    gOPS = __webpack_require__(35),
	    pIE = __webpack_require__(36);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  }return result;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(25);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(23),
	    gOPN = __webpack_require__(120).f,
	    toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(21),
	    hiddenKeys = __webpack_require__(34).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(36),
	    createDesc = __webpack_require__(18),
	    toIObject = __webpack_require__(23),
	    toPrimitive = __webpack_require__(17),
	    has = __webpack_require__(22),
	    IE8_DOM_DEFINE = __webpack_require__(13),
	    gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115)('asyncIterator');

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115)('observable');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.shortcuts.length) ? _c('div', {
	    staticClass: "date-panel-sidebar"
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "date-panel-body"
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView !== 'time'),
	      expression: "currentView!=='time'"
	    }],
	    staticClass: "date-picker-header"
	  }, [_c('span', {
	    on: {
	      "click": _vm.prevYear
	    }
	  }, [_c('icon', {
	    attrs: {
	      "type": "ios-arrow-left"
	    }
	  })], 1), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView === 'date'),
	      expression: "currentView === 'date'"
	    }],
	    class: _vm.iconBtnCls('prev'),
	    on: {
	      "click": _vm.prevMonth
	    }
	  }, [_c('icon', {
	    attrs: {
	      "type": "ios-arrow-left"
	    }
	  })], 1), _vm._v(" "), _c('span', {
	    class: [_vm.datePrefixCls + '-header-label'],
	    on: {
	      "click": _vm.showYearPicker
	    }
	  }, [_vm._v(_vm._s(_vm.yearLabel))]), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView === 'date'),
	      expression: "currentView === 'date'"
	    }],
	    class: [_vm.datePrefixCls + '-header-label'],
	    on: {
	      "click": _vm.showMonthPicker
	    }
	  }, [_vm._v(_vm._s(_vm.monthLabel))]), _vm._v(" "), _c('span', {
	    class: _vm.iconBtnCls('next', '-double'),
	    on: {
	      "click": _vm.nextYear
	    }
	  }, [_c('icon', {
	    attrs: {
	      "type": "ios-arrow-right"
	    }
	  })], 1), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView === 'date'),
	      expression: "currentView === 'date'"
	    }],
	    class: _vm.iconBtnCls('next'),
	    on: {
	      "click": _vm.nextMonth
	    }
	  }, [_c('icon', {
	    attrs: {
	      "type": "ios-arrow-right"
	    }
	  })], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "date-picker-content"
	  }, [_c('date-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView === 'date'),
	      expression: "currentView === 'date'"
	    }],
	    attrs: {
	      "year": _vm.year,
	      "month": _vm.month,
	      "date": _vm.date,
	      "value": _vm.value,
	      "selection-mode": _vm.selectionMode,
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-pick": _vm.handleDatePick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  }), _vm._v(" "), _c('year-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView === 'year'),
	      expression: "currentView === 'year'"
	    }],
	    ref: "year-table",
	    attrs: {
	      "year": _vm.year,
	      "date": _vm.date,
	      "selection-mode": _vm.selectionMode,
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-pick": _vm.handleYearPick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  }), _vm._v(" "), _c('month-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView === 'month'),
	      expression: "currentView === 'month'"
	    }],
	    ref: "month-table",
	    attrs: {
	      "month": _vm.month,
	      "date": _vm.date,
	      "selection-mode": _vm.selectionMode,
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-pick": _vm.handleMonthPick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  }), _vm._v(" "), _c('time-picker', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.currentView === 'time'),
	      expression: "currentView === 'time'"
	    }],
	    ref: "time-picker",
	    attrs: {
	      "show-date": ""
	    },
	    on: {
	      "on-pick": _vm.handleTimePick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  })], 1), _vm._v(" "), (_vm.confirm) ? _c('confirm', {
	    attrs: {
	      "show-time": _vm.showTime,
	      "is-time": _vm.isTime
	    },
	    on: {
	      "on-pick-toggle-time": _vm.handleToggleTime,
	      "on-pick-clear": _vm.handlePickClear,
	      "on-pick-success": _vm.handlePickSuccess
	    }
	  }) : _vm._e()], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5164a9aa", module.exports)
	  }
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(127)

	/* template */
	var __vue_template__ = __webpack_require__(131)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\panel\\date-range.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-445be61b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-445be61b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] date-range.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _icon = __webpack_require__(60);

	var _icon2 = _interopRequireDefault(_icon);

	var _dateTable = __webpack_require__(63);

	var _dateTable2 = _interopRequireDefault(_dateTable);

	var _yearTable = __webpack_require__(66);

	var _yearTable2 = _interopRequireDefault(_yearTable);

	var _monthTable = __webpack_require__(69);

	var _monthTable2 = _interopRequireDefault(_monthTable);

	var _timeRange = __webpack_require__(128);

	var _timeRange2 = _interopRequireDefault(_timeRange);

	var _confirm = __webpack_require__(78);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _util = __webpack_require__(51);

	var _mixin = __webpack_require__(81);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _locale = __webpack_require__(83);

	var _locale2 = _interopRequireDefault(_locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-picker-panel';
	var datePrefixCls = 'ivu-date-picker';

	exports.default = {
	    name: 'DatePicker',
	    mixins: [_mixin2.default, _locale2.default],
	    components: { Icon: _icon2.default, DateTable: _dateTable2.default, YearTable: _yearTable2.default, MonthTable: _monthTable2.default, TimePicker: _timeRange2.default, Confirm: _confirm2.default },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            datePrefixCls: datePrefixCls,
	            shortcuts: [],
	            date: (0, _util.initTimeDate)(),
	            value: '',
	            minDate: '',
	            maxDate: '',
	            confirm: false,
	            rangeState: {
	                endDate: null,
	                selecting: false
	            },
	            showTime: false,
	            disabledDate: '',
	            leftCurrentView: 'date',
	            rightCurrentView: 'date',
	            selectionMode: 'range',
	            leftTableYear: null,
	            rightTableYear: null,
	            isTime: false,
	            format: 'yyyy-MM-dd'
	        };
	    },

	    computed: {
	        classes: function classes() {
	            return [prefixCls + '-body-wrapper', datePrefixCls + '-with-range', (0, _defineProperty3.default)({}, prefixCls + '-with-sidebar', this.shortcuts.length)];
	        },
	        leftYear: function leftYear() {
	            return this.date.getFullYear();
	        },
	        leftTableDate: function leftTableDate() {
	            if (this.leftCurrentView === 'year' || this.leftCurrentView === 'month') {
	                return new Date(this.leftTableYear);
	            } else {
	                return this.date;
	            }
	        },
	        leftYearLabel: function leftYearLabel() {
	            var tYear = '年';
	            if (this.leftCurrentView === 'year') {
	                var year = this.leftTableYear;
	                if (!year) return '';
	                var startYear = Math.floor(year / 10) * 10;
	                return '' + startYear + tYear + ' - ' + (startYear + 9) + tYear;
	            } else {
	                var _year = this.leftCurrentView === 'month' ? this.leftTableYear : this.leftYear;
	                if (!_year) return '';
	                return '' + _year + tYear;
	            }
	        },
	        leftMonth: function leftMonth() {
	            return this.date.getMonth();
	        },
	        leftMonthLabel: function leftMonthLabel() {
	            var month = this.leftMonth + 1;
	            return this.t('i.datepicker.month' + month);
	        },
	        rightYear: function rightYear() {
	            return this.rightDate.getFullYear();
	        },
	        rightTableDate: function rightTableDate() {
	            if (this.rightCurrentView === 'year' || this.rightCurrentView === 'month') {
	                return new Date(this.rightTableYear);
	            } else {
	                return this.date;
	            }
	        },
	        rightYearLabel: function rightYearLabel() {
	            var tYear = '年';
	            if (this.rightCurrentView === 'year') {
	                var year = this.rightTableYear;
	                if (!year) return '';
	                var startYear = Math.floor(year / 10) * 10;
	                return '' + startYear + tYear + ' - ' + (startYear + 9) + tYear;
	            } else {
	                var _year2 = this.rightCurrentView === 'month' ? this.rightTableYear : this.rightYear;
	                if (!_year2) return '';
	                return '' + _year2 + tYear;
	            }
	        },
	        rightMonth: function rightMonth() {
	            return this.rightDate.getMonth();
	        },
	        rightMonthLabel: function rightMonthLabel() {
	            var month = this.rightMonth + 1;
	            return this.t('i.datepicker.month' + month);
	        },
	        rightDate: function rightDate() {
	            var newDate = new Date(this.date);
	            var month = newDate.getMonth();
	            newDate.setDate(1);

	            if (month === 11) {
	                newDate.setFullYear(newDate.getFullYear() + 1);
	                newDate.setMonth(0);
	            } else {
	                newDate.setMonth(month + 1);
	            }
	            return newDate;
	        },
	        timeDisabled: function timeDisabled() {
	            return !(this.minDate && this.maxDate);
	        }
	    },
	    watch: {
	        value: function value(newVal) {
	            if (!newVal) {
	                this.minDate = null;
	                this.maxDate = null;
	            } else if (Array.isArray(newVal)) {
	                this.minDate = newVal[0] ? (0, _util.toDate)(newVal[0]) : null;
	                this.maxDate = newVal[1] ? (0, _util.toDate)(newVal[1]) : null;
	                if (this.minDate) this.date = new Date(this.minDate);
	            }
	            if (this.showTime) this.$refs.timePicker.value = newVal;
	        },
	        minDate: function minDate(val) {
	            if (this.showTime) this.$refs.timePicker.date = val;
	        },
	        maxDate: function maxDate(val) {
	            if (this.showTime) this.$refs.timePicker.dateEnd = val;
	        },
	        format: function format(val) {
	            if (this.showTime) this.$refs.timePicker.format = val;
	        },
	        isTime: function isTime(val) {
	            if (val) this.$refs.timePicker.updateScroll();
	        }
	    },
	    methods: {
	        resetDate: function resetDate() {
	            this.date = new Date(this.date);
	            this.leftTableYear = this.date.getFullYear();
	            this.rightTableYear = this.rightDate.getFullYear();
	        },
	        handleClear: function handleClear() {
	            this.minDate = null;
	            this.maxDate = null;
	            this.date = new Date();
	            this.handleConfirm();
	            if (this.showTime) this.$refs.timePicker.handleClear();
	        },
	        resetView: function resetView() {
	            var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            this.leftCurrentView = 'date';
	            this.rightCurrentView = 'date';

	            this.leftTableYear = this.leftYear;
	            this.rightTableYear = this.rightYear;

	            if (reset) this.isTime = false;
	        },
	        prevYear: function prevYear(direction) {
	            if (this[direction + 'CurrentView'] === 'year') {
	                this.$refs[direction + 'YearTable'].prevTenYear();
	            } else if (this[direction + 'CurrentView'] === 'month') {
	                this[direction + 'TableYear']--;
	            } else {
	                var date = this.date;
	                date.setFullYear(date.getFullYear() - 1);
	                this.resetDate();
	            }
	        },
	        nextYear: function nextYear(direction) {
	            if (this[direction + 'CurrentView'] === 'year') {
	                this.$refs[direction + 'YearTable'].nextTenYear();
	            } else if (this[direction + 'CurrentView'] === 'month') {
	                this[direction + 'TableYear']--;
	            } else {
	                var date = this.date;
	                date.setFullYear(date.getFullYear() + 1);
	                this.resetDate();
	            }
	        },
	        prevMonth: function prevMonth() {
	            this.date = (0, _util.prevMonth)(this.date);
	        },
	        nextMonth: function nextMonth() {
	            this.date = (0, _util.nextMonth)(this.date);
	        },
	        handleLeftYearPick: function handleLeftYearPick(year) {
	            var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            this.handleYearPick(year, close, 'left');
	        },
	        handleRightYearPick: function handleRightYearPick(year) {
	            var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            this.handleYearPick(year, close, 'right');
	        },
	        handleYearPick: function handleYearPick(year, close, direction) {
	            this[direction + 'TableYear'] = year;
	            if (!close) return;

	            this[direction + 'CurrentView'] = 'month';
	        },
	        handleLeftMonthPick: function handleLeftMonthPick(month) {
	            this.handleMonthPick(month, 'left');
	        },
	        handleRightMonthPick: function handleRightMonthPick(month) {
	            this.handleMonthPick(month, 'right');
	        },
	        handleMonthPick: function handleMonthPick(month, direction) {
	            var year = this[direction + 'TableYear'];
	            if (direction === 'right') {
	                if (month === 0) {
	                    month = 11;
	                    year--;
	                } else {
	                    month--;
	                }
	            }

	            this.date.setYear(year);
	            this.date.setMonth(month);
	            this[direction + 'CurrentView'] = 'date';
	            this.resetDate();
	        },
	        showYearPicker: function showYearPicker(direction) {
	            this[direction + 'CurrentView'] = 'year';
	            this[direction + 'TableYear'] = this[direction + 'Year'];
	        },
	        showMonthPicker: function showMonthPicker(direction) {
	            this[direction + 'CurrentView'] = 'month';
	        },
	        handleConfirm: function handleConfirm(visible) {
	            this.$emit('on-pick', [this.minDate, this.maxDate], visible);
	        },
	        handleRangePick: function handleRangePick(val) {
	            var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            if (this.maxDate === val.maxDate && this.minDate === val.minDate) return;

	            this.minDate = val.minDate;
	            this.maxDate = val.maxDate;

	            if (!close) return;

	            this.handleConfirm(false);
	        },
	        handleChangeRange: function handleChangeRange(val) {
	            this.minDate = val.minDate;
	            this.maxDate = val.maxDate;
	            this.rangeState = val.rangeState;
	        },
	        handleToggleTime: function handleToggleTime() {
	            this.isTime = !this.isTime;
	        },
	        handleTimePick: function handleTimePick(date) {
	            this.minDate = date[0];
	            this.maxDate = date[1];
	            this.handleConfirm(false);
	        }
	    },
	    compiled: function compiled() {
	        if (this.showTime) {
	            this.$refs.timePicker.date = this.minDate;
	            this.$refs.timePicker.dateEnd = this.maxDate;
	            this.$refs.timePicker.value = this.value;
	            this.$refs.timePicker.format = this.format;
	            this.$refs.timePicker.showDate = true;
	        }
	    }
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(129)

	/* template */
	var __vue_template__ = __webpack_require__(130)
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
	__vue_options__.__file = "F:\\webfrontend\\github\\vue-ui\\src\\components\\date-picker\\panel\\time-range.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bf15a30c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-bf15a30c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] time-range.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(56);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _timeSpinner = __webpack_require__(74);

	var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

	var _confirm = __webpack_require__(78);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _mixin = __webpack_require__(81);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _util = __webpack_require__(51);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixCls = 'ivu-picker-panel';
	var timePrefixCls = 'ivu-time-picker';

	exports.default = {
	    mixins: [_mixin2.default],
	    components: { TimeSpinner: _timeSpinner2.default, Confirm: _confirm2.default },
	    data: function data() {
	        return {
	            prefixCls: prefixCls,
	            timePrefixCls: timePrefixCls,
	            format: 'HH:mm:ss',
	            showDate: false,
	            date: (0, _util.initTimeDate)(),
	            dateEnd: (0, _util.initTimeDate)(),
	            value: '',
	            hours: '',
	            minutes: '',
	            seconds: '',
	            hoursEnd: '',
	            minutesEnd: '',
	            secondsEnd: '',
	            disabledHours: [],
	            disabledMinutes: [],
	            disabledSeconds: [],
	            hideDisabledOptions: false,
	            confirm: false
	        };
	    },

	    computed: {
	        classes: function classes() {
	            return [prefixCls + '-body-wrapper', timePrefixCls + '-with-range', (0, _defineProperty3.default)({}, timePrefixCls + '-with-seconds', this.showSeconds)];
	        },
	        showSeconds: function showSeconds() {
	            return (this.format || '').indexOf('ss') !== -1;
	        },
	        visibleDate: function visibleDate() {
	            var date = this.date || (0, _util.initTimeDate)();
	            var tYear = '年';
	            var month = date.getMonth() + 1;
	            var tMonth = this.t('i.datepicker.month' + month);
	            return '' + date.getFullYear() + tYear + ' ' + tMonth;
	        },
	        visibleDateEnd: function visibleDateEnd() {
	            var date = this.dateEnd || (0, _util.initTimeDate)();
	            var tYear = '年';
	            var month = date.getMonth() + 1;
	            var tMonth = this.t('i.datepicker.month' + month);
	            return '' + date.getFullYear() + tYear + ' ' + tMonth;
	        }
	    },
	    watch: {
	        value: function value(newVal) {
	            if (!newVal) return;
	            if (Array.isArray(newVal)) {
	                var valStart = newVal[0] ? (0, _util.toDate)(newVal[0]) : false;
	                var valEnd = newVal[1] ? (0, _util.toDate)(newVal[1]) : false;

	                if (valStart && valEnd) {
	                    this.handleChange({
	                        hours: valStart.getHours(),
	                        minutes: valStart.getMinutes(),
	                        seconds: valStart.getSeconds()
	                    }, {
	                        hours: valEnd.getHours(),
	                        minutes: valEnd.getMinutes(),
	                        seconds: valEnd.getSeconds()
	                    }, false);
	                }
	            }
	        }
	    },
	    methods: {
	        handleClear: function handleClear() {
	            this.date = (0, _util.initTimeDate)();
	            this.dateEnd = (0, _util.initTimeDate)();
	            this.hours = '';
	            this.minutes = '';
	            this.seconds = '';
	            this.hoursEnd = '';
	            this.minutesEnd = '';
	            this.secondsEnd = '';
	        },
	        handleChange: function handleChange(date, dateEnd) {
	            var _this = this;

	            var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	            var oldDateEnd = new Date(this.dateEnd);

	            if (date.hours !== undefined) {
	                this.date.setHours(date.hours);
	                this.hours = this.date.getHours();
	            }
	            if (date.minutes !== undefined) {
	                this.date.setMinutes(date.minutes);
	                this.minutes = this.date.getMinutes();
	            }
	            if (date.seconds !== undefined) {
	                this.date.setSeconds(date.seconds);
	                this.seconds = this.date.getSeconds();
	            }
	            if (dateEnd.hours !== undefined) {
	                this.dateEnd.setHours(dateEnd.hours);
	                this.hoursEnd = this.dateEnd.getHours();
	            }
	            if (dateEnd.minutes !== undefined) {
	                this.dateEnd.setMinutes(dateEnd.minutes);
	                this.minutesEnd = this.dateEnd.getMinutes();
	            }
	            if (dateEnd.seconds !== undefined) {
	                this.dateEnd.setSeconds(dateEnd.seconds);
	                this.secondsEnd = this.dateEnd.getSeconds();
	            }

	            if (this.dateEnd < this.date) {
	                this.$nextTick(function () {
	                    _this.dateEnd = new Date(_this.date);
	                    _this.hoursEnd = _this.dateEnd.getHours();
	                    _this.minutesEnd = _this.dateEnd.getMinutes();
	                    _this.secondsEnd = _this.dateEnd.getSeconds();

	                    var format = 'yyyy-MM-dd HH:mm:ss';
	                    if ((0, _util.formatDate)(oldDateEnd, format) !== (0, _util.formatDate)(_this.dateEnd, format)) {
	                        if (emit) _this.$emit('on-pick', [_this.date, _this.dateEnd], true);
	                    }
	                });
	            } else {
	                if (emit) this.$emit('on-pick', [this.date, this.dateEnd], true);
	            }
	        },
	        handleStartChange: function handleStartChange(date) {
	            this.handleChange(date, {});
	        },
	        handleEndChange: function handleEndChange(date) {
	            this.handleChange({}, date);
	        },
	        updateScroll: function updateScroll() {
	            this.$refs.timeSpinner.updateScroll();
	            this.$refs.timeSpinnerEnd.updateScroll();
	        }
	    },
	    compiled: function compiled() {
	        if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
	    }
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.classes
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-body']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-left']
	  }, [_c('div', {
	    class: [_vm.timePrefixCls + '-header']
	  }, [(_vm.showDate) ? [_vm._v(_vm._s(_vm.visibleDate))] : [_vm._v("开始时间")]], 2), _vm._v(" "), _c('time-spinner', {
	    ref: "time-spinner",
	    attrs: {
	      "show-seconds": _vm.showSeconds,
	      "hours": _vm.hours,
	      "minutes": _vm.minutes,
	      "seconds": _vm.seconds,
	      "disabled-hours": _vm.disabledHours,
	      "disabled-minutes": _vm.disabledMinutes,
	      "disabled-seconds": _vm.disabledSeconds,
	      "hide-disabled-options": _vm.hideDisabledOptions
	    },
	    on: {
	      "on-change": _vm.handleStartChange,
	      "on-pick-click": _vm.handlePickClick
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-right']
	  }, [_c('div', {
	    class: [_vm.timePrefixCls + '-header']
	  }, [(_vm.showDate) ? [_vm._v(_vm._s(_vm.visibleDateEnd))] : [_vm._v("结束时间")]], 2), _vm._v(" "), _c('time-spinner', {
	    ref: "time-spinner-end",
	    attrs: {
	      "show-seconds": _vm.showSeconds,
	      "hours": _vm.hoursEnd,
	      "minutes": _vm.minutesEnd,
	      "seconds": _vm.secondsEnd,
	      "disabled-hours": _vm.disabledHours,
	      "disabled-minutes": _vm.disabledMinutes,
	      "disabled-seconds": _vm.disabledSeconds,
	      "hide-disabled-options": _vm.hideDisabledOptions
	    },
	    on: {
	      "on-change": _vm.handleEndChange,
	      "on-pick-click": _vm.handlePickClick
	    }
	  })], 1), _vm._v(" "), (_vm.confirm) ? _c('Confirm', {
	    on: {
	      "on-pick-clear": _vm.handlePickClear,
	      "on-pick-success": _vm.handlePickSuccess
	    }
	  }) : _vm._e()], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bf15a30c", module.exports)
	  }
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.classes
	  }, [(_vm.shortcuts.length) ? _c('div', {
	    class: [_vm.prefixCls + '-sidebar']
	  }, _vm._l((_vm.shortcuts), function(shortcut) {
	    return _c('div', {
	      class: [_vm.prefixCls + '-shortcut'],
	      on: {
	        "click": function($event) {
	          _vm.handleShortcutClick(shortcut)
	        }
	      }
	    }, [_vm._v(_vm._s(shortcut.text))])
	  })) : _vm._e(), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-body']
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.isTime),
	      expression: "!isTime"
	    }],
	    class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-left']
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.leftCurrentView !== 'time'),
	      expression: "leftCurrentView !== 'time'"
	    }],
	    class: [_vm.datePrefixCls + '-header']
	  }, [_c('span', {
	    class: _vm.iconBtnCls('prev', '-double'),
	    on: {
	      "click": function($event) {
	        _vm.prevYear('left')
	      }
	    }
	  }, [_c('Icon', {
	    attrs: {
	      "type": "ios-arrow-left"
	    }
	  })], 1), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.leftCurrentView === 'date'),
	      expression: "leftCurrentView === 'date'"
	    }],
	    class: _vm.iconBtnCls('prev'),
	    on: {
	      "click": _vm.prevMonth
	    }
	  }, [_c('Icon', {
	    attrs: {
	      "type": "ios-arrow-left"
	    }
	  })], 1), _vm._v(" "), _c('span', {
	    class: [_vm.datePrefixCls + '-header-label'],
	    on: {
	      "click": function($event) {
	        _vm.showYearPicker('left')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.leftYearLabel))]), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.leftCurrentView === 'date'),
	      expression: "leftCurrentView === 'date'"
	    }],
	    class: [_vm.datePrefixCls + '-header-label'],
	    on: {
	      "click": function($event) {
	        _vm.showMonthPicker('left')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.leftMonthLabel))]), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.leftCurrentView === 'year' || _vm.leftCurrentView === 'month'),
	      expression: "leftCurrentView === 'year' || leftCurrentView === 'month'"
	    }],
	    class: _vm.iconBtnCls('next', '-double'),
	    on: {
	      "click": function($event) {
	        _vm.nextYear('left')
	      }
	    }
	  }, [_c('Icon', {
	    attrs: {
	      "type": "ios-arrow-right"
	    }
	  })], 1)]), _vm._v(" "), _c('date-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.leftCurrentView === 'date'),
	      expression: "leftCurrentView === 'date'"
	    }],
	    attrs: {
	      "year": _vm.leftYear,
	      "month": _vm.leftMonth,
	      "date": _vm.date,
	      "min-date": _vm.minDate,
	      "max-date": _vm.maxDate,
	      "range-state": _vm.rangeState,
	      "selection-mode": "range",
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-changerange": _vm.handleChangeRange,
	      "on-pick": _vm.handleRangePick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  }), _vm._v(" "), _c('year-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.leftCurrentView === 'year'),
	      expression: "leftCurrentView === 'year'"
	    }],
	    ref: "left-year-t",
	    attrs: {
	      "able": "",
	      "year": _vm.leftTableYear,
	      "date": _vm.leftTableDate,
	      "selection-mode": "range",
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-pick": _vm.handleLeftYearPick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  }), _vm._v(" "), _c('month-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.leftCurrentView === 'month'),
	      expression: "leftCurrentView === 'month'"
	    }],
	    ref: "left-month-",
	    attrs: {
	      "table": "",
	      "month": _vm.leftMonth,
	      "date": _vm.leftTableDate,
	      "selection-mode": "range",
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-pick": _vm.handleLeftMonthPick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.isTime),
	      expression: "!isTime"
	    }],
	    class: [_vm.prefixCls + '-content', _vm.prefixCls + '-content-right']
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.rightCurrentView !== 'time'),
	      expression: "rightCurrentView !== 'time'"
	    }],
	    class: [_vm.datePrefixCls + '-header']
	  }, [_c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.rightCurrentView === 'year' || _vm.rightCurrentView === 'month'),
	      expression: "rightCurrentView === 'year' || rightCurrentView === 'month'"
	    }],
	    class: _vm.iconBtnCls('prev', '-double'),
	    on: {
	      "click": function($event) {
	        _vm.prevYear('right')
	      }
	    }
	  }, [_c('Icon', {
	    attrs: {
	      "type": "ios-arrow-left"
	    }
	  })], 1), _vm._v(" "), _c('span', {
	    class: [_vm.datePrefixCls + '-header-label'],
	    on: {
	      "click": function($event) {
	        _vm.showYearPicker('right')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.rightYearLabel))]), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.rightCurrentView === 'date'),
	      expression: "rightCurrentView === 'date'"
	    }],
	    class: [_vm.datePrefixCls + '-header-label'],
	    on: {
	      "click": function($event) {
	        _vm.showMonthPicker('right')
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.rightMonthLabel))]), _vm._v(" "), _c('span', {
	    class: _vm.iconBtnCls('next', '-double'),
	    on: {
	      "click": function($event) {
	        _vm.nextYear('right')
	      }
	    }
	  }, [_c('Icon', {
	    attrs: {
	      "type": "ios-arrow-right"
	    }
	  })], 1), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.rightCurrentView === 'date'),
	      expression: "rightCurrentView === 'date'"
	    }],
	    class: _vm.iconBtnCls('next'),
	    on: {
	      "click": _vm.nextMonth
	    }
	  }, [_c('Icon', {
	    attrs: {
	      "type": "ios-arrow-right"
	    }
	  })], 1)]), _vm._v(" "), _c('date-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.rightCurrentView === 'date'),
	      expression: "rightCurrentView === 'date'"
	    }],
	    attrs: {
	      "year": _vm.rightYear,
	      "month": _vm.rightMonth,
	      "date": _vm.rightDate,
	      "min-date": _vm.minDate,
	      "max-date": _vm.maxDate,
	      "range-state": _vm.rangeState,
	      "selection-mode": "range",
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-changerange": _vm.handleChangeRange,
	      "on-pick": _vm.handleRangePick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  }), _vm._v(" "), _c('year-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.rightCurrentView === 'year'),
	      expression: "rightCurrentView === 'year'"
	    }],
	    ref: "right-year-",
	    attrs: {
	      "table": "",
	      "year": _vm.rightTableYear,
	      "date": _vm.rightTableDate,
	      "selection-mode": "range",
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-pick": _vm.handleRightYearPick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  }), _vm._v(" "), _c('month-table', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.rightCurrentView === 'month'),
	      expression: "rightCurrentView === 'month'"
	    }],
	    ref: "right-month",
	    attrs: {
	      "-table": "",
	      "month": _vm.rightMonth,
	      "date": _vm.rightTableDate,
	      "selection-mode": "range",
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "on-pick": _vm.handleRightMonthPick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isTime),
	      expression: "isTime"
	    }],
	    class: [_vm.prefixCls + '-content']
	  }, [_c('time-picker', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isTime),
	      expression: "isTime"
	    }],
	    ref: "time-picker",
	    on: {
	      "on-pick": _vm.handleTimePick,
	      "on-pick-click": _vm.handlePickClick
	    }
	  })], 1), _vm._v(" "), (_vm.confirm) ? _c('Confirm', {
	    attrs: {
	      "show-time": _vm.showTime,
	      "is-time": _vm.isTime,
	      "time-disabled": _vm.timeDisabled
	    },
	    on: {
	      "on-pick-toggle-time": _vm.handleToggleTime,
	      "on-pick-clear": _vm.handlePickClear,
	      "on-pick-success": _vm.handlePickSuccess
	    }
	  }) : _vm._e()], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-445be61b", module.exports)
	  }
	}

/***/ },
/* 132 */,
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);