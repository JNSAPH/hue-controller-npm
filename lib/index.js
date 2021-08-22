"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https = __importStar(require("http"));
var hueUtils_1 = __importDefault(require("./hueUtils"));
var hueUtils = new hueUtils_1.default();
var HueController = /** @class */ (function () {
    function HueController(config) {
        this.config = config;
    }
    /**
     * getLights
     *
     * @return {Promise} Returns Array of all Lights
     * @memberof HueController
     */
    HueController.prototype.getLights = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var res = https.get("http://" + _this.config.ip + "/api/" + _this.config.key + "/lights", function (res) {
                            console.log("http://" + _this.config.ip + "/api/" + _this.config.key + "/lights");
                            res.setEncoding('utf8');
                            var responseBody = '';
                            res.on('data', function (chunk) {
                                responseBody += chunk;
                            });
                            res.on('end', function () {
                                resolve(JSON.parse(responseBody));
                            });
                        });
                        res.on('error', function (err) {
                            reject(err);
                        });
                        res.end();
                    })];
            });
        });
    };
    /**
     * getGroups
     *
     * @return {Promise} Returns Array of all Groups
     * @memberof HueController
     */
    HueController.prototype.getGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var res = https.get("http://" + _this.config.ip + "/api/" + _this.config.key + "/groups", function (res) {
                            res.setEncoding('utf8');
                            var responseBody = '';
                            res.on('data', function (chunk) {
                                responseBody += chunk;
                            });
                            res.on('end', function () {
                                resolve(JSON.parse(responseBody));
                            });
                        });
                        res.on('error', function (err) {
                            reject(err);
                        });
                        res.end();
                    })];
            });
        });
    };
    /**
     * getSensors
     *
     * @return {Promise} Returns Array of all Sensors
     * @memberof HueController
     */
    HueController.prototype.getSensors = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var res = https.get("http://" + _this.config.ip + "/api/" + _this.config.key + "/sensors", function (res) {
                            res.setEncoding('utf8');
                            var responseBody = '';
                            res.on('data', function (chunk) {
                                responseBody += chunk;
                            });
                            res.on('end', function () {
                                resolve(JSON.parse(responseBody));
                            });
                        });
                        res.on('error', function (err) {
                            reject(err);
                        });
                        res.end();
                    })];
            });
        });
    };
    /**
     * Change state of a single lamp
     *
     * @param {number} lamp
     * @param {boolean} state
     * @return {Promise}
     * @memberof HueController
     */
    HueController.prototype.changeState = function (lamp, state) {
        return __awaiter(this, void 0, void 0, function () {
            var data, options;
            return __generator(this, function (_a) {
                data = new TextEncoder().encode(JSON.stringify({
                    on: state
                }));
                options = {
                    hostname: "" + this.config.ip,
                    path: "/api/" + this.config.key + "/lights/" + lamp + "/state",
                    method: 'put',
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var req = https.request(options, function (res) {
                            res.setEncoding('utf8');
                            var responseBody = '';
                            res.on('data', function (chunk) {
                                responseBody += chunk;
                            });
                        });
                        req.on('error', function (err) {
                            reject(err);
                        });
                        req.write(data);
                        req.end();
                    })];
            });
        });
    };
    /**
     * changeBrightness
     *
     * @param {number} lamp
     * @param {number} brightness
     * @return {Promise}
     * @memberof HueController
     */
    HueController.prototype.changeBrightness = function (lamp, brightness) {
        return __awaiter(this, void 0, void 0, function () {
            var data, options;
            return __generator(this, function (_a) {
                if (brightness < 0 || brightness > 255)
                    throw new RangeError("Value must be between 0 and 255");
                data = new TextEncoder().encode(JSON.stringify({
                    bri: brightness
                }));
                options = {
                    hostname: "" + this.config.ip,
                    path: "/api/" + this.config.key + "/lights/" + lamp + "/state",
                    method: 'put',
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var req = https.request(options, function (res) {
                            res.setEncoding('utf8');
                            var responseBody = '';
                            res.on('data', function (chunk) {
                                responseBody += chunk;
                            });
                        });
                        req.on('error', function (err) {
                            reject(err);
                        });
                        req.write(data);
                        req.end();
                    })];
            });
        });
    };
    /**
     * changecolor
     *
     * @param {number} lamp
     * @param {{ r: number, g: number, b: number }} color
     * @return {Promise}
     * @memberof HueController
     */
    HueController.prototype.changeColor = function (lamp, color) {
        return __awaiter(this, void 0, void 0, function () {
            var data, options;
            return __generator(this, function (_a) {
                if (color.r < 0 || color.r > 255)
                    throw new RangeError("Invalid color.r");
                if (color.g < 0 || color.g > 255)
                    throw new RangeError("Invalid color.g");
                if (color.b < 0 || color.b > 255)
                    throw new RangeError("Invalid color.b");
                data = new TextEncoder().encode(JSON.stringify({
                    xy: JSON.parse(hueUtils.rgbToXY(color.r, color.g, color.b)),
                    bri: hueUtils.brightness(color.r, color.g, color.b)
                }));
                options = {
                    hostname: "" + this.config.ip,
                    path: "/api/" + this.config.key + "/lights/" + lamp + "/state",
                    method: 'put',
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var req = https.request(options, function (res) {
                            res.setEncoding('utf8');
                            var responseBody = '';
                            res.on('data', function (chunk) {
                                responseBody += chunk;
                            });
                        });
                        req.on('error', function (err) {
                            reject(err);
                        });
                        req.write(data);
                        req.end();
                    })];
            });
        });
    };
    return HueController;
}());
exports.default = HueController;
//# sourceMappingURL=index.js.map