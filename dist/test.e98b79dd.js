// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  mainBlock: {
    width: '200px',
    height: '200px',
    display: 'inline-block',
    border: '5px solid black'
  },
  dischargeCreate: _defineProperty({
    width: '75px',
    height: '20px',
    verticalAlign: 'top',
    marginLeft: '50px'
  }, "marginLeft", '50px'),
  positionsArray: {
    display: 'inline-block',
    width: '66.6px',
    height: '66.6px',
    verticalAlign: 'top',
    paddingTop: '25.25',
    textAlign: 'center',
    boxSizing: 'border-box',
    border: '1px solid black'
  }
};
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicTacToe = void 0;

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TicTacToe = /*#__PURE__*/function () {
  function TicTacToe(props) {
    _classCallCheck(this, TicTacToe);

    this.mainUnit = props.containerTicTacToeClassName;
    this.positionsProps = props.positionsPropsClassName;
    this.dischargeCreate;
    this.container = props.containerId;
    this.backgroundColor = props.backgroundColor;
    this.borderColor = props.borderColor;
    this.iconColor = props.iconColor;
    this.color = '';
    this.current = 'X';
    this.x = 'X';
    this.o = 'O';
    this.positionsArray = [];
    this.styleArrayPositions;
    console.log(this.positionsArray);
    this.mainBlock;
    this.positionsCreate;
    this.container = document.getElementById('test_container');
    this.createBlock(this.container, this.mainUnit, this.positionsProps);
    this.clickMainBlock();
    this.clickDischargeCreate();
  }

  _createClass(TicTacToe, [{
    key: "clickDischargeCreate",
    value: function clickDischargeCreate() {
      var _this = this;

      this.dischargeCreate.addEventListener('click', function () {
        _this.dischargeMethod();
      });
    }
  }, {
    key: "clickMainBlock",
    value: function clickMainBlock() {
      var _this2 = this;

      this.mainBlock.addEventListener('click', function (e) {
        _this2.click(e);

        if (_this2.gameOver() === 'game over') {
          _this2.deactivatingPositions();
        }

        _this2.gameOver();
      });
    }
  }, {
    key: "deactivatingPositions",
    value: function deactivatingPositions() {
      for (var i = 0; i < this.positionsArray.length; i++) {
        this.positionsArray[i].className = 'positions';
      }
    }
  }, {
    key: "dischargeMethod",
    value: function dischargeMethod() {
      for (var i = 0; i < this.positionsArray.length; i++) {
        this.positionsArray[i].innerHTML = '';
        this.positionsArray[i].className = this.positionsProps;
      }
    }
  }, {
    key: "createBlock",
    value: function createBlock(a, classNameMainUnit, className) {
      var _this3 = this;

      this.mainBlock = document.createElement('div');
      this.dischargeCreate = document.createElement('button');
      this.dischargeCreate.style.backgroundColor = this.iconColor;
      this.mainBlock.style.backgroundColor = this.backgroundColor;
      this.mainBlock.className = classNameMainUnit;
      var array = [];

      for (var i = 0; i < 9; i++) {
        this.positionsCreate = document.createElement('div');
        this.positionsCreate.className = className;
        this.positionsCreate.style.background = this.iconColor;
        this.positionsArray.push(this.positionsCreate);
        array.push(this.positionsCreate);
        this.mainBlock.appendChild(this.positionsCreate);
      }

      Object.keys(_style.default).forEach(function (block) {
        Object.keys(_style.default[block]).forEach(function (key) {
          var value = _style.default[block][key];

          if (block === 'mainBlock') {
            _this3[block].style[key] = value;
          }

          if (block === 'dischargeCreate') {
            _this3[block].style[key] = value;
          }

          if (block === 'positionsArray') {
            for (var _i = 0; _i < array.length; _i++) {
              console.log(_style.default[key] = value);
              array[_i].style[key] = value;
            }
          }
        });
      });
      a.appendChild(this.mainBlock);
      a.appendChild(this.dischargeCreate);
      return this.mainBlock;
    }
  }, {
    key: "click",
    value: function click(e) {
      if (e.target.className === this.positionsProps) {
        e.target.innerHTML = this.current;
        this.current = this.current === 'X' ? 'O' : this.current === 'O' ? 'X' : 'O';
      }

      e.target.className = 'no_active';
    }
  }, {
    key: "setColor",
    value: function setColor(backgroundColor) {
      this.background = backgroundColor;
      this.TicTacToeContainerHtml.style.background = this.background;
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      //Крестик
      if (this.positionsArray[0].textContent === this.x && this.positionsArray[1].textContent === this.x && this.positionsArray[2].textContent === this.x) return 'game over';
      if (this.positionsArray[3].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[5].textContent === this.x) return 'game over';
      if (this.positionsArray[6].textContent === this.x && this.positionsArray[7].textContent === this.x && this.positionsArray[8].textContent === this.x) return 'game over';
      if (this.positionsArray[0].textContent === this.x && this.positionsArray[3].textContent === this.x && this.positionsArray[6].textContent === this.x) return 'game over';
      if (this.positionsArray[1].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[7].textContent === this.x) return 'game over';
      if (this.positionsArray[2].textContent === this.x && this.positionsArray[5].textContent === this.x && this.positionsArray[8].textContent === this.x) return 'game over';
      if (this.positionsArray[0].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[8].textContent === this.x) return 'game over';
      if (this.positionsArray[2].textContent === this.x && this.positionsArray[4].textContent === this.x && this.positionsArray[6].textContent === this.x) return 'game over'; //Нолики

      if (this.positionsArray[0].textContent === this.o && this.positionsArray[1].textContent === this.o && this.positionsArray[2].textContent === this.o) return 'game over';
      if (this.positionsArray[3].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[5].textContent === this.o) return 'game over';
      if (this.positionsArray[6].textContent === this.o && this.positionsArray[7].textContent === this.o && this.positionsArray[8].textContent === this.o) return 'game over';
      if (this.positionsArray[0].textContent === this.o && this.positionsArray[3].textContent === this.o && this.positionsArray[6].textContent === this.o) return 'game over';
      if (this.positionsArray[1].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[7].textContent === this.o) return 'game over';
      if (this.positionsArray[2].textContent === this.o && this.positionsArray[5].textContent === this.o && this.positionsArray[8].textContent === this.o) return 'game over';
      if (this.positionsArray[0].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[8].textContent === this.o) return 'game over';
      if (this.positionsArray[2].textContent === this.o && this.positionsArray[4].textContent === this.o && this.positionsArray[6].textContent === this.o) return 'game over';
    }
  }]);

  return TicTacToe;
}(); // import { obg } from './style.js';
// console.log(obg)


exports.TicTacToe = TicTacToe;
},{"./style":"style.js"}],"test.js":[function(require,module,exports) {
"use strict";

var _index = require("./index.js");

var props = {
  containerId: 'test_container',
  containerTicTacToeClassName: 'TicTacToelContainer',
  positionsPropsClassName: 'positions',
  backgroundColor: 'black',
  borderColor: 'red',
  iconColor: 'blue'
};
var instance = new _index.TicTacToe(props);
},{"./index.js":"index.js"}],"C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51020" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map