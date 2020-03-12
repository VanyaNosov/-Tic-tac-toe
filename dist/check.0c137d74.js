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
})({"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicTacToe = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TicTacToe = /*#__PURE__*/function () {
  function TicTacToe(block, color) {
    var _this = this;

    _classCallCheck(this, TicTacToe);

    this.TicTacToeGlobalContainer = document.getElementById('Tic_tac_toe_global_container');
    block.appendChild(this.TicTacToeGlobalContainer);
    this.TicTacToeContainerHtml = document.getElementById('Tic_tac_toe_container');
    this.positions = document.getElementsByClassName('position');
    this.colorPositionbutton = document.getElementsByClassName('color_position');
    this.discharge = document.getElementById('discharge');
    this.colorBlock = document.getElementById('color_block');
    this.color = '';
    this.current = 'X';
    this.TicTacToeContainerHtml.addEventListener('click', function (e) {
      _this.click(e);

      _this.gameOver();
    });
    this.discharge.addEventListener('click', function () {
      for (var i = 0; i < _this.positions.length; i++) {
        _this.positions[i].innerHTML = '';
        _this.positions[i].className = 'position no_active_position';
      }
    }); // for (let i = 0; i < this.colorPositionbutton.length; i++) {
    //   this.colorPositionbutton[i].addEventListener('click', (e) => {
    //     // instance.setColor(event.target.innerHTML)
    //     instance.setColor(color)
    //   })
    // }

    this.colorBlock.addEventListener('click', function () {
      _this.setColor(color);
    });

    for (var i = 0; i < 9; i++) {
      var el = this.createBlock('position no_active_position');
      this.TicTacToeContainerHtml.appendChild(el);
    }
  }

  _createClass(TicTacToe, [{
    key: "createBlock",
    value: function createBlock(className) {
      var el = document.createElement('div');
      el.className = className;
      return el;
    }
  }, {
    key: "click",
    value: function click(e) {
      if (e.target.className === 'position no_active_position') {
        e.target.innerHTML = this.current;
        this.current = this.current === 'X' ? 'O' : this.current === 'O' ? 'X' : 'O';
      }

      e.target.className = 'position active_position';
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.color = color;
      this.TicTacToeContainerHtml.style.background = this.color;
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      //Крестик
      if (this.positions[0].innerHTML === 'X' && this.positions[1].innerHTML === 'X' && this.positions[2].innerHTML === 'X') alert('Победа крестико');
      if (this.positions[3].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[5].innerHTML === 'X') alert('Победа крестико');
      if (this.positions[6].innerHTML === 'X' && this.positions[7].innerHTML === 'X' && this.positions[8].innerHTML === 'X') alert('Победа крестико');
      if (this.positions[0].innerHTML === 'X' && this.positions[3].innerHTML === 'X' && this.positions[6].innerHTML === 'X') alert('Победа крестико');
      if (this.positions[1].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[7].innerHTML === 'X') alert('Победа крестико');
      if (this.positions[2].innerHTML === 'X' && this.positions[5].innerHTML === 'X' && this.positions[8].innerHTML === 'X') alert('Победа крестико');
      if (this.positions[0].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[8].innerHTML === 'X') alert('Победа крестико');
      if (this.positions[2].innerHTML === 'X' && this.positions[4].innerHTML === 'X' && this.positions[6].innerHTML === 'X') alert('Победа крестико'); //Нолики

      if (this.positions[0].innerHTML === 'O' && this.positions[1].innerHTML === 'O' && this.positions[2].innerHTML === 'O') alert('Победа ноликов');
      if (this.positions[3].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[5].innerHTML === 'O') alert('Победа ноликов');
      if (this.positions[6].innerHTML === 'O' && this.positions[7].innerHTML === 'O' && this.positions[8].innerHTML === 'O') alert('Победа ноликов');
      if (this.positions[0].innerHTML === 'O' && this.positions[3].innerHTML === 'O' && this.positions[6].innerHTML === 'O') alert('Победа ноликов');
      if (this.positions[1].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[7].innerHTML === 'O') alert('Победа ноликов');
      if (this.positions[2].innerHTML === 'O' && this.positions[5].innerHTML === 'O' && this.positions[8].innerHTML === 'O') alert('Победа ноликов');
      if (this.positions[0].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[8].innerHTML === 'O') alert('Победа ноликов');
      if (this.positions[2].innerHTML === 'O' && this.positions[4].innerHTML === 'O' && this.positions[6].innerHTML === 'O') alert('Победа ноликов');
    }
  }]);

  return TicTacToe;
}(); // module.export = TicTacToe;


exports.TicTacToe = TicTacToe;
},{}],"check.js":[function(require,module,exports) {
"use strict";

var _index = require("./index.js");

var testContainer = document.getElementById('test_container');
var instance = new _index.TicTacToe(testContainer, 'blue'); // new TicTacToe('Tic_tac_toe_container');
// const instance2 = new TicTacToe('block2');
// const f = (name, index = 0) => {
//   if (index !== 5) {
//     return f(`${name}_${name}`, index + 1);
//   }
// }
// f('Ivan');
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61460" + '/');

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
},{}]},{},["C:/Users/User/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","check.js"], null)
//# sourceMappingURL=/check.0c137d74.js.map