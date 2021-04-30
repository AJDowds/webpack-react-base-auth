

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var effects = require('redux-saga/effects');
var toolkit = require('@reduxjs/toolkit');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

___$insertStyle(".counter {\n  --bg-color: #f3f3f3;\n  --base-color: #666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 70px;\n  margin: 10% auto;\n  border: 3px solid var(--base-color);\n  border-radius: 5px;\n  color: var(--base-color);\n  background-color: var(--bg-color);\n  cursor: pointer;\n  overflow: hidden;\n}\n.counter:hover {\n  color: var(--bg-color);\n  background-color: var(--base-color);\n  border-color: var(--bg-color);\n}\n.counter__count {\n  font-size: 2rem;\n  font-family: \"Segoe UI\", sans-serif;\n  color: inherit;\n  animation: in 1s ease alternate forwards;\n  pointer-events: none;\n}\n\n@keyframes in {\n  0% {\n    transform: translateY(-200%);\n  }\n  50% {\n    color: inherit;\n    font-size: 2.2rem;\n    transform: translateY(0);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n    color: var(--blaze);\n  }\n  100% {\n    transform: translateY(200%);\n    font-size: 1.8rem;\n    opacity: 0;\n  }\n}");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var baseUrl = "https://api.dowcodeploy.com/api";
var baseApi = {
    get authUrl() {
        return baseUrl + "/auth";
    },
    get APIUrl() {
        return "" + baseUrl;
    },
};
var AuthAPI = {
    postLogin: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var postLoginUrl;
            return __generator(this, function (_a) {
                postLoginUrl = baseApi.authUrl + "/login";
                //console.log('[URL FOR postLogin]', postLoginUrl);
                return [2 /*return*/, fetch(postLoginUrl, {
                        method: "POST",
                        headers: data.headers,
                        credentials: "same-origin",
                        body: JSON.stringify(data.body),
                    })];
            });
        });
    },
    postRegister: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var postRegisterUrl;
            return __generator(this, function (_a) {
                postRegisterUrl = baseApi.authUrl + "/register";
                //console.log('[URL FOR postRegister]', postRegisterUrl);
                return [2 /*return*/, fetch(postRegisterUrl, {
                        method: "POST",
                        headers: data.headers,
                        credentials: "same-origin",
                        body: JSON.stringify(data.body),
                    })];
            });
        });
    },
};

var _a;
var initialState = {
    token: "",
    userId: 0,
    username: "",
    firstname: "",
    lastname: "",
    roles: [""],
    error: "",
};
var AuthSlice = toolkit.createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: function () { },
        loginSuccess: function (state, action) {
            console.log("!!action", action);
            state.token = action.payload.token;
            state.userId = action.payload.user.id;
            state.username = action.payload.user.name;
            state.firstname = action.payload.user.firstName;
            state.lastname = action.payload.user.lastName;
            state.roles[0] = action.payload.user.role;
        },
        register: function () { },
        registerSuccess: function () { },
        logout: function () { },
        setAuthFailure: function (state, action) {
            state.error = action.payload;
        },
    },
});
var login = (_a = AuthSlice.actions, _a.login), loginSuccess = _a.loginSuccess, register = _a.register, registerSuccess = _a.registerSuccess; _a.logout; var setAuthFailure = _a.setAuthFailure;
AuthSlice.reducer;

function loginEffect(action) {
    var data, _a, timeoutDelay, response, responseJson, responseJson, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 10, , 12]);
                data = {
                    headers: {
                        "content-type": "application/json",
                    },
                    body: __assign({}, action.payload),
                };
                return [4 /*yield*/, effects.race({
                        timeoutDelay: effects.delay(10000),
                        response: effects.call(AuthAPI.postLogin, data),
                    })];
            case 1:
                _a = _b.sent(), timeoutDelay = _a.timeoutDelay, response = _a.response;
                if (!timeoutDelay) return [3 /*break*/, 3];
                return [4 /*yield*/, effects.put(setAuthFailure("Server timed out"))];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                if (!response) return [3 /*break*/, 9];
                if (!(response.status === 200)) return [3 /*break*/, 6];
                return [4 /*yield*/, response.json()];
            case 4:
                responseJson = _b.sent();
                return [4 /*yield*/, effects.put(loginSuccess(responseJson))];
            case 5:
                _b.sent();
                return [3 /*break*/, 9];
            case 6: return [4 /*yield*/, response.json()];
            case 7:
                responseJson = _b.sent();
                return [4 /*yield*/, effects.put(setAuthFailure(responseJson))];
            case 8:
                _b.sent();
                _b.label = 9;
            case 9: return [3 /*break*/, 12];
            case 10:
                error_1 = _b.sent();
                return [4 /*yield*/, effects.put(setAuthFailure(error_1))];
            case 11:
                _b.sent();
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}
function registerEffect(action) {
    var data, _a, timeoutDelay, response, responseJson;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 9, , 11]);
                data = {
                    headers: {
                        "content-type": "application/json",
                    },
                    body: __assign({}, action.details),
                };
                return [4 /*yield*/, effects.race({
                        timeoutDelay: effects.delay(10000),
                        response: effects.call(AuthAPI.postRegister, data),
                    })];
            case 1:
                _a = _b.sent(), timeoutDelay = _a.timeoutDelay, response = _a.response;
                if (!timeoutDelay) return [3 /*break*/, 3];
                return [4 /*yield*/, effects.put(setAuthFailure("Server timed out"))];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                if (!response) return [3 /*break*/, 8];
                if (!(response.status === 200)) return [3 /*break*/, 5];
                // const responseJson = yield response.json();
                return [4 /*yield*/, effects.put(registerSuccess())];
            case 4:
                // const responseJson = yield response.json();
                _b.sent();
                return [3 /*break*/, 8];
            case 5: return [4 /*yield*/, response.json()];
            case 6:
                responseJson = _b.sent();
                return [4 /*yield*/, effects.put(setAuthFailure(responseJson))];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8: return [3 /*break*/, 11];
            case 9:
                _b.sent();
                return [4 /*yield*/, effects.put(setAuthFailure("Something went wrong. Try again later."))];
            case 10:
                _b.sent();
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}
var AuthSaga = [
    effects.takeLatest(login, loginEffect),
    effects.takeLatest(register, registerEffect),
];

var Testo = function () {
    console.log("!!Hello");
    console.log("!!AuthSlice", AuthSlice);
    return (React__namespace.createElement("div", null,
        React__namespace.createElement("h1", null, "My Auth Library")));
};

exports.AuthSaga = AuthSaga;
exports.AuthSlice = AuthSlice;
exports.Testo = Testo;
//# sourceMappingURL=index.js.map
