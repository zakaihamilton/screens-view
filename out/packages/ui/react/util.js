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
    this.useValue = function (...values) {
        values = values.filter((value) => typeof value !== "undefined");
        const [value, setValue] = react_1.useState(values[0]);
        const toggle = () => {
            setValue(!value);
        };
        return { value, setValue, toggle };
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
