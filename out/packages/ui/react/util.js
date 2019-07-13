"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = require("react");
screens_js_1.default.ReactUtil = function () {
};
screens_js_1.default.ReactUtil.init = function () {
    this.useState = function (defaults) {
        let [getter, setter] = react_1.useState(defaults);
        let fields = {};
        for (let key in defaults) {
            Object.defineProperty(fields, key, {
                get() {
                    return getter[key];
                },
                set(value) {
                    setter((prev) => {
                        let changed = Object.assign({}, prev);
                        changed[key] = value;
                        return changed;
                    });
                }
            });
        }
        return fields;
    };
    this.classes = function (classes) {
        let string = "";
        for (let key in classes) {
            let value = classes[key];
            if (value) {
                string += key + " ";
            }
        }
        return string.trim();
    };
};
