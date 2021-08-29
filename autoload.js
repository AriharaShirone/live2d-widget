(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "#landlord{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;left:45px;bottom:0;width:250px;height:280px;z-index:10000;font-size:0;display:none}@media (max-width:860px){#landlord{display:none!important}}.message{color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;width:250px;height:auto;margin:auto;padding:7px;bottom:280px;left:0;text-align:center;border:2px solid rgba(75,127,199,.9);border-radius:5px;background-color:rgba(74,59,114,.9);font-size:13px;font-weight:400;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-transform:uppercase;overflow:hidden;position:absolute;display:none}#live2d{width:250px;height:280px;position:relative;z-index:3}.live-ico-box{position:absolute;width:15px;z-index:5;left:10px;bottom:60px;opacity:.9}.live-ico-item{width:15px;height:20px;margin:20px 0;cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:15px}.live-ico-item.type-talk{background-image:url(https://cdn.jsdelivr.net/gh/fz6m/Private-web@50.2/static/icons/talk.png)}.live-ico-item.type-quit{background-image:url(https://cdn.jsdelivr.net/gh/fz6m/Private-web@50.2/static/icons/quite.png)}.live-ico-item.type-rainbow{background-image:url(https://cdn.jsdelivr.net/gh/fz6m/Private-web@50.2/static/icons/info.png)}.live-ico-item.type-music{background-image:url(https://cdn.jsdelivr.net/gh/fz6m/Private-web@50.2/static/icons/music.png)}.live-ico-item.type-music.play{background-image:url(https://cdn.jsdelivr.net/gh/fz6m/Private-web@50.2/static/icons/pasue.png)}#open-live2d{border:3px solid rgba(255,105,180,.1);border-radius:20px;background-color:rgba(255,182,193,.8);-webkit-transition:background-color .3s ease-out;-o-transition:background-color .3s ease-out;transition:background-color .3s ease-out;padding:0 10px;color:#fff;line-height:24px;font-size:12px;position:fixed;left:50px;bottom:5px;z-index:10000;cursor:pointer;display:none}#open-live2d:hover{background-color:#ffb6c1}.live-ico-item.type-rainbow.jitter{-webkit-animation:shake-little .1s ease-in-out 0s infinite;animation:shake-little .1s ease-in-out 0s infinite}.l2d-jitter,.l2d-jitter *{animation:shake-it .5s cubic-bezier(.68,-.55,.27,1.55) infinite reverse}.l2d-rainbow{-webkit-animation:rainbow 1.5s infinite;animation:rainbow 1.5s infinite}@-webkit-keyframes shake-little{0%{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}2%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}4%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}6%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}8%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}10%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}12%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}14%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}16%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}18%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}20%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}22%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}24%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}26%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}28%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}30%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}32%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}34%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}36%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}38%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}40%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}42%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}44%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}46%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}48%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}50%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}52%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}54%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}56%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}58%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}60%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}62%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}64%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}66%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}70%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}72%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}74%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}76%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}78%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}80%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}82%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}84%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}86%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}88%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}90%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}92%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}94%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}96%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}98%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}}@keyframes shake-little{0%{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}2%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}4%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}6%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}8%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}10%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}12%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}14%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}16%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}18%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}20%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}22%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}24%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}26%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}28%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}30%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}32%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}34%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}36%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}38%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}40%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}42%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}44%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}46%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}48%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}50%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}52%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}54%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}56%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}58%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}60%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}62%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}64%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}66%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}70%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}72%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}74%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}76%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}78%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}80%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}82%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}84%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}86%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}88%{-webkit-transform:translate(0) rotate(-.5deg);transform:translate(0) rotate(-.5deg)}90%{-webkit-transform:translate(-1px,-1px) rotate(-.5deg);transform:translate(-1px,-1px) rotate(-.5deg)}92%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}94%{-webkit-transform:translate(-1px) rotate(-.5deg);transform:translate(-1px) rotate(-.5deg)}96%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}98%{-webkit-transform:translateY(-1px) rotate(-.5deg);transform:translateY(-1px) rotate(-.5deg)}}@-webkit-keyframes shake-it{0%{text-shadow:0 0 rgba(0,255,255,.5),0 0 rgba(255,0,0,.5)}25%{text-shadow:-2px 0 rgba(0,255,255,.5),2px 0 rgba(255,0,0,.5)}50%{text-shadow:-5px 0 rgba(0,255,255,.5),3px 0 rgba(255,0,0,.5)}to{text-shadow:3px 0 rgba(0,255,255,.5),5px 0 rgba(255,0,0,.5)}}@keyframes shake-it{0%{text-shadow:0 0 rgba(0,255,255,.5),0 0 rgba(255,0,0,.5)}25%{text-shadow:-2px 0 rgba(0,255,255,.5),2px 0 rgba(255,0,0,.5)}50%{text-shadow:-5px 0 rgba(0,255,255,.5),3px 0 rgba(255,0,0,.5)}to{text-shadow:3px 0 rgba(0,255,255,.5),5px 0 rgba(255,0,0,.5)}}@-webkit-keyframes rainbow{to{-webkit-filter:hue-rotate(1turn);filter:hue-rotate(1turn)}}@keyframes rainbow{to{-webkit-filter:hue-rotate(1turn);filter:hue-rotate(1turn)}}";
  styleInject(css_248z);

  var html = (function () {
    /**
      <div>
          <div id="landlord">
          <div class="message"></div>
          <canvas id="live2d" width="500" height="560" class="live2d"></canvas>
            <input id="live_talk" name="live_talk" value="1" type="hidden" />
            <div class="live-ico-box">
                <div id="talk-button" class="live-ico-item type-talk"></div>
              <div id="music-button" class="live-ico-item type-music"></div>
              <div id="rainbow-button" class="live-ico-item type-rainbow"></div>
              <div id="hide-button" class="live-ico-item type-quit"></div>
            </div>
          </div>
          <div id="open-live2d">召唤小天使</div>
      </div>
     */
    var html = '<div><div id=landlord><div class=message></div><canvas class=live2d height=560 id=live2d width=500></canvas><input id=live_talk name=live_talk type=hidden value=1><div class=live-ico-box><div class="live-ico-item type-talk"id=talk-button></div><div class="live-ico-item type-music"id=music-button></div><div class="live-ico-item type-rainbow"id=rainbow-button></div><div class="live-ico-item type-quit"id=hide-button></div></div></div><div id=open-live2d>召唤小天使</div></div>';
    $('body').append(html);
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$1
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var path = {};

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$2
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  var wrapConstructor = function (NativeConstructor) {
    var Wrapper = function (a, b, c) {
      if (this instanceof NativeConstructor) {
        switch (arguments.length) {
          case 0: return new NativeConstructor();
          case 1: return new NativeConstructor(a);
          case 2: return new NativeConstructor(a, b);
        } return new NativeConstructor(a, b, c);
      } return NativeConstructor.apply(this, arguments);
    };
    Wrapper.prototype = NativeConstructor.prototype;
    return Wrapper;
  };

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var PROTO = options.proto;

    var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;

    var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
    var targetPrototype = target.prototype;

    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

    for (key in source) {
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

      targetProperty = target[key];

      if (USE_NATIVE) if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else nativeProperty = nativeSource[key];

      // export native or implementation
      sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

      if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

      // bind timers to global for call from export context
      if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1);
      // wrap global constructors for prevent changs in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
      // make static versions for prototype methods
      else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty);
      // default case
      else resultProperty = sourceProperty;

      // add a flag to not completely full polyfills
      if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(resultProperty, 'sham', true);
      }

      target[key] = resultProperty;

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
        if (!has(path, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
        }
        // export virtual prototype methods
        path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
        // export real prototype methods
        if (options.real && targetPrototype && !targetPrototype[key]) {
          createNonEnumerableProperty(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var defineProperty = Object.defineProperty;
  var cache = {};

  var thrower = function (it) { throw it; };

  var arrayMethodUsesToLength = function (METHOD_NAME, options) {
    if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
    if (!options) options = {};
    var method = [][METHOD_NAME];
    var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
    var argument0 = has(options, 0) ? options[0] : thrower;
    var argument1 = has(options, 1) ? options[1] : undefined;

    return cache[METHOD_NAME] = !!method && !fails(function () {
      if (ACCESSORS && !descriptors) return true;
      var O = { length: -1 };

      if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
      else O[1] = 1;

      method.call(O, argument0, argument1);
    });
  };

  var $indexOf = arrayIncludes.indexOf;



  var nativeIndexOf = [].indexOf;

  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('indexOf');
  var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  _export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
      return NEGATIVE_ZERO
        // convert -0 to +0
        ? nativeIndexOf.apply(this, arguments) || 0
        : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var entryVirtual = function (CONSTRUCTOR) {
    return path[CONSTRUCTOR + 'Prototype'];
  };

  var indexOf = entryVirtual('Array').indexOf;

  var ArrayPrototype = Array.prototype;

  var indexOf_1 = function (it) {
    var own = it.indexOf;
    return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
  };

  var indexOf$1 = indexOf_1;

  var indexOf$2 = indexOf$1;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  _export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
    defineProperty: objectDefineProperty.f
  });

  var defineProperty_1 = createCommonjsModule(function (module) {
  var Object = path.Object;

  var defineProperty = module.exports = function defineProperty(it, key, desc) {
    return Object.defineProperty(it, key, desc);
  };

  if (Object.defineProperty.sham) defineProperty.sham = true;
  });

  var defineProperty$1 = defineProperty_1;

  var defineProperty$2 = defineProperty$1;

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  // `Array.isArray` method
  // https://tc39.github.io/ecma262/#sec-array.isarray
  _export({ target: 'Array', stat: true }, {
    isArray: isArray
  });

  var isArray$1 = path.Array.isArray;

  var isArray$2 = isArray$1;

  var isArray$3 = isArray$2;

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var slice = [].slice;
  var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

  var wrap = function (scheduler) {
    return function (handler, timeout /* , ...arguments */) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        // eslint-disable-next-line no-new-func
        (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
      } : handler, timeout);
    };
  };

  // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
  _export({ global: true, bind: true, forced: MSIE }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap(global_1.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap(global_1.setInterval)
  });

  var setInterval = path.setInterval;

  var setInterval$1 = setInterval;

  var setInterval$2 = setInterval$1;

  var setTimeout = path.setTimeout;

  var setTimeout$1 = setTimeout;

  var setTimeout$2 = setTimeout$1;

  var main = (function () {
    // 判断手机端
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      return;
    } // 判断引擎


    if (!window.WebGLRenderingContext) {
      return;
    } // 文件静态资源路径


    var resourcePath = 'https://cdn.jsdelivr.net/gh/fz6m/Private-web@50.2/static/'; // rainbow 动画列表

    var rainbowAnimation = ['l2d-rainbow', 'l2d-jitter']; // 音乐列表

    var musicUrls = ['http://music.163.com/song/media/outer/url?id=461301621.mp3', 'http://music.163.com/song/media/outer/url?id=460528.mp3', 'http://music.163.com/song/media/outer/url?id=34609107.mp3']; // 链接颜色

    var color = '#FFF0F5'; // 音乐 mediaSession 媒体元信息

    var mediaInfo = {
      title: '桃饱之声',
      artist: 'fz6m',
      album: 'Peach-Max',
      artwork: resourcePath + 'music/img/artwork.png',
      // 专辑封面
      artworkTpye: 'image/png' // 封面图片类型 image/jpeg or image/png

    }; // 音乐是否初始化

    var musicInited = false; // 正在播放的音乐

    var audio = null; // 一言计时器

    var hitokotoTimer = null; // 监测闲置的 timer

    var sleepyTimer = null; // 隐藏消息的 timer

    var hideTimer = null; // live2d 可移动变量

    var live2d = $('#landlord');
    var dragging = false;
    var iX, iY, bottom; // localStorage key

    var localKey = {
      hidden: 'live2d-hidden'
    }; // home

    var home = 'fz6m.com'; // 主进程

    function start() {
      $(document).ready(function () {
        var materialList = [resourcePath + 'model/histoire/histoire.1024/texture_00.png', resourcePath + 'model/histoire/histoire.1024/texture_01.png', resourcePath + 'model/histoire/histoire.1024/texture_02.png', resourcePath + 'model/histoire/histoire.1024/texture_03.png'];
        var images = [];
        var loaded = 0;
        var loadingDelay = 1300;
        var loadBuffer = 200;

        for (var i = 0; i < materialList.length; i++) {
          images[i] = new Image();
          images[i].src = materialList[i];

          images[i].onload = function () {
            loaded++;

            if (loaded === materialList.length) {
              if (localStorage.getItem(localKey.hidden) == 'true') {
                setTimeout$2(function () {
                  $('#open-live2d').fadeIn(loadBuffer);
                }, loadingDelay);
              } else {
                setTimeout$2(function () {
                  $('#landlord').fadeIn(loadBuffer);
                }, loadingDelay);
              }

              setTimeout$2(function () {
                loadlive2d('live2d', resourcePath + 'model/histoire/model.json');
              }, 1000); // 初始化 live2d


              initLive2d();
              images = null;
            }
          };
        }
      });
    } // 工具函数


    var utils = {
      random: function random(array) {
        return array[Math.floor(Math.random() * array.length)];
      },
      // 一言节流
      throttle: function throttle(func) {
        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
        var timeout;
        return function () {
          var context = this;
          var args = arguments;

          if (!timeout) {
            func.apply(context, args);
            timeout = setTimeout$2(function () {
              clearTimeout(timeout);
              timeout = null;
            }, wait);
          }
        };
      },

      /**
       * @description: 替换文本中的变量
       * @param {string} text 原模板字符串 
       * @param {object} context 要替换的消息来源对象
       * @return {string} 
       */
      formatVar: function formatVar(text, context) {
        var reg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g; // abc {text} def  ->  abc title def

        return text.replace(reg, function (word, slash1, token, slash2) {
          if (slash1 || slash2) {
            word = word.replace(slash1, '').replace(slash2, '');
          }

          var variables = token.replace(/\s/g, '').split('.');
          var currentObject = context;

          for (var i = 0; i < variables.length; ++i) {
            currentObject = currentObject[variables[i]];
            if (!currentObject) return word;
          }

          return word.replace(token, currentObject).replace('{', '').replace('}', '');
        });
      },
      // 清理常时一言计时器
      hitokotoClear: function hitokotoClear() {
        clearInterval(hitokotoTimer);
        hitokotoTimer = null;
      },
      // 一言常时启动器
      hitokotoStart: function hitokotoStart() {
        if (hitokotoTimer) return;
        hitokotoTimer = setInterval$2(function () {
          hitokoto();
        }, 15000);
      },
      // 点击防抖
      debounce: function debounce(func, tip) {
        var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
        var timeout;
        return function () {
          var context = this;
          if (timeout) clearTimeout(timeout);
          var callNow = !timeout;
          timeout = setTimeout$2(function () {
            timeout = null;
          }, wait);
          if (callNow) func.call(context, tip);
        };
      },
      // 取消选中
      unSelection: function unSelection() {
        window.getSelection && window.getSelection().removeAllRanges();
        document.selection && document.selection.empty();
      }
    }; // 初始化 utils.formatVar

    function formatInit() {
      String.prototype.formatVar = function (context) {
        return utils.formatVar(this, context);
      };
    } // 展示消息


    function showMessage(text) {

      if (isArray$3(text)) {
        text = utils.random(text);
      }

      $('.message').html(text);
      $('.message').fadeTo(200, 1);
      resetLive2d();
      hideMessage();
    } // 隐藏消息


    function hideMessage() {
      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
      if (hideTimer) return;
      hideTimer = true;

      setTimeout$2(function () {
        $('.message').fadeTo(200, 0);
        hideTimer = false;
      }, timeout);
    } // 监测控制台


    function onDevtools() {
      var element = new Image();

      defineProperty$2(element, "id", {
        get: function get() {
          showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？');
        }
      });

      console.log(element);
    } // 监测 copy


    function onCopy() {
      $(document).on('copy', function () {
        showMessage('你都复制了些什么呀，转载要记得加上出处哦~~');
      });
    } // 监测来源 and 首页时间提醒 and 文章页提示


    function onReferrer() {
      var _context;

      // 站点主页，需要斜杠结尾
      var homePath = document.location.protocol + '//' + window.document.location.hostname + '/'; // 提示文字

      var text = null;

      if (document.referrer && !~indexOf$2(_context = document.referrer).call(_context, home)) {
        var referrer = document.createElement('a');
        referrer.href = document.referrer;
        var domain = referrer.hostname.split('.')[1];

        switch (domain) {
          case 'baidu':
            text = '嗨！ 来自 百度搜索 的朋友！<br>欢迎访问<span style="color:' + color + ';">「 ' + document.title.split(' - ')[0] + ' 」</span>';
            break;

          case 'so':
            text = '嗨！ 来自 360搜索 的朋友！<br>欢迎访问<span style="color:' + color + ';">「 ' + document.title.split(' - ')[0] + ' 」</span>';
            break;

          case 'google':
            text = '嗨！ 来自 谷歌搜索 的朋友！<br>欢迎访问<span style="color:' + color + ';">「 ' + document.title.split(' - ')[0] + ' 」</span>';
            break;

          default:
            text = '嗨！来自 <span style="color:' + color + ';">' + referrer.hostname + '</span> 的朋友！';
        }
      } else {
        // 判断是否站点首页
        if (window.location.href == homePath) {
          var now = new Date().getHours();

          switch (true) {
            case now > 23 || now <= 5:
              text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
              break;

            case now > 5 && now <= 7:
              text = '早上好！一日之计在于晨，美好的一天就要开始了！';
              break;

            case now > 7 && now <= 11:
              text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
              break;

            case now > 11 && now <= 14:
              text = '中午了，工作了一个上午，现在是午餐时间！';
              break;

            case now > 14 && now <= 17:
              text = '午后很容易犯困呢，今天的目标完成了吗？';
              break;

            case now > 17 && now <= 19:
              text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
              break;

            case now > 19 && now <= 21:
              text = '晚上好，今天过得怎么样？';
              break;

            case now > 21 && now <= 23:
              text = '已经这么晚了呀，早点休息吧，晚安~~';
              break;

            default:
              text = '嗨~ 快来逗我玩吧！';
          }
        } else {
          text = '欢迎阅读<span style="color:' + color + ';">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        }
      }

      showMessage(text);
    } // 一言


    function hitokoto() {
      var hitokotoPath = 'https://v1.hitokoto.cn/'; // 闲置后监测是否上线

      function checkSleep() {
        if (sessionStorage.getItem('Sleepy') !== '1') {
          showMessage('你回来啦~');
          clearInterval(sleepyTimer);
          sleepyTimer = null;
        }
      } // 监测是否闲置


      if (sessionStorage.getItem('Sleepy') !== '1') {
        $.getJSON(hitokotoPath, function (res) {
          res && showMessage(res.hitokoto);
        });
      } else {
        if (sleepyTimer) return;
        sleepyTimer = setInterval$2(function () {
          checkSleep();
        }, 200);
      }
    } // 一言按钮


    function hitokotoButton() {
      utils.hitokotoClear();
      hitokoto();

      setTimeout$2(utils.hitokotoStart, 5000);
    } // 鼠标当前对象提示语


    function currentTip() {
      $.ajax({
        cache: true,
        url: resourcePath + 'message.json',
        dataType: 'json',
        success: function success(result) {
          // 鼠标事件
          $.each(result.mouseover, function (index, tips) {
            // 鼠标触摸焦点
            $(tips.selector).mouseover(function () {
              utils.hitokotoClear();
              var text = tips.text;
              if (isArray$3(text)) text = utils.random(text);
              text = text.formatVar({
                text: $(this).text()
              });
              showMessage(text);
            }); // 鼠标移开

            $(tips.selector).mouseout(function () {
              utils.hitokotoStart();
            });
          }); // 点击事件

          function clickEvent(tips) {
            utils.hitokotoClear();
            var text = tips.text;
            if (isArray$3(text)) text = utils.random(text);
            text = text.formatVar({
              text: $(this).text()
            });
            showMessage(text); // 重置一言

            setTimeout$2(utils.hitokotoStart(), 10000);
          }

          $.each(result.click, function (index, tips) {
            $(tips.selector).click(utils.debounce(clickEvent, tips, 2000));
          });
        }
      });
    } // 重置 live2d 状态（说话）


    function resetLive2d() {
      $('#live_talk').val('1');
    } // live2d 可拖动


    function onDrag() {
      live2d.mousedown(function (e) {
        utils.unSelection();
        dragging = true;
        iX = e.clientX - this.offsetLeft;
        iY = e.clientY;
        bottom = +live2d.css('bottom').replace('px', '');
        return false;
      });

      document.onmousemove = function (e) {
        if (dragging) {
          var e = e || window.event;
          live2d.css({
            "left": e.clientX - iX + "px",
            "bottom": bottom + iY - e.clientY + "px"
          });
          return false;
        }
      };

      $(document).mouseup(function (e) {
        dragging = false;
        e.cancelBubble = true;
      });
    } // 初始化 live2d


    function initLive2d() {
      // 隐藏按钮
      $('#hide-button').on('click', function () {
        if (localStorage.getItem(localKey.hidden) == 'true') {
          return false;
        }

        localStorage.setItem(localKey.hidden, true);
        $('#landlord').fadeOut(200);
        $('#open-live2d').delay(200).fadeIn(200);
      }); // 显示按钮

      $('#open-live2d').on('click', function () {
        if (localStorage.getItem(localKey.hidden) != 'true') {
          return false;
        }

        localStorage.setItem(localKey.hidden, false);
        $('#open-live2d').fadeOut(200);
        $('#landlord').delay(200).fadeIn(200);
      }); // rainbow 按钮

      $('#rainbow-button').on('click', function () {
        if ($('#rainbow-button').hasClass('jitter')) {
          $('#rainbow-button').removeClass('jitter');
          $('html').removeClass($('#rainbow-button').data('animation'));
        } else {
          var animation = utils.random(rainbowAnimation);
          $('#rainbow-button').addClass('jitter');
          $('html').addClass(animation);
          $('#rainbow-button').data('animation', animation);
        }
      }); // 初始化媒体元信息

      function musicMediaSessionInit() {
        if ('mediaSession' in navigator) {
          // 下一首
          navigator.mediaSession.setActionHandler('nexttrack', function () {
            musicPlay();
          }); // 上一首

          navigator.mediaSession.setActionHandler('previoustrack', function () {
            musicPlay();
          }); // 暂停

          navigator.mediaSession.setActionHandler('pause', function () {
            audio.pause();
            navigator.mediaSession.playbackState = 'paused';
          }); // 播放

          navigator.mediaSession.setActionHandler('play', function () {
            audio.play();
            $('#music-button').addClass('play');
          });
        }
      } // 播放音乐


      function musicPlay() {
        if (audio) {
          audio.pause();
          audio = null;
        }

        audio = new Audio(utils.random(musicUrls));
        audio.load(); // This could fix iOS playing bug
        // 添加媒体元信息

        if ('mediaSession' in navigator) {
          var metadata = {
            title: mediaInfo.title,
            artist: mediaInfo.artist,
            album: mediaInfo.album + '(^・ω・^§)',
            artwork: [{
              src: mediaInfo.artwork,
              sizes: '128x128',
              type: mediaInfo.artworkTpye
            }]
          };
          navigator.mediaSession.metadata = new window.MediaMetadata(metadata);
          navigator.mediaSession.playbackState = 'playing';
        } // 缓冲


        audio.addEventListener('canplay', function () {
          audio.volume = 1;
          audio.play();
          $('#music-button').addClass('play');
        }); // 播放完毕

        audio.addEventListener('ended', function () {
          musicPlay();
        }); // 播放暂停

        audio.addEventListener('pause', function () {
          $('#music-button').removeClass('play');
          navigator.mediaSession.playbackState = 'paused';
        }); // 加载错误

        audio.addEventListener('error', function () {
          audio.pause();
          $('#music-button').removeClass('play');
          showMessage('音乐似乎加载不出来了呢！');
        });
      } // 音乐按钮


      if (!musicUrls.length) {
        $('#music-button').hide();
      } else {
        $('#music-button').on('click', function () {
          if (!musicInited) {
            musicMediaSessionInit();
            musicInited = true;
          }

          if ($('#music-button').hasClass('play')) {
            audio.pause();
          } else {
            if (audio) {
              audio.play();
              $('#music-button').addClass('play');
            } else {
              musicPlay();
            }
          }
        });
      } // 一言按钮


      $('#talk-button').on('click', utils.throttle(hitokotoButton)); // 监测控制台

      onDevtools(); // 监测 copy

      onCopy(); // 监测来源 and 首页时间提醒 and 文章页提示

      onReferrer(); // 启动常时一言

      utils.hitokotoStart(); // 初始化字符串模板替换功能

      formatInit(); // 点击和触摸提示

      currentTip(); // 监测拖动

      onDrag();
    }

    start();
  });

  html();
  main();

})));
