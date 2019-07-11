"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.AppMain = function () {
    let { WidgetWindow } = screens_js_1.default;
    return (react_1.default.createElement(WidgetWindow, { title: "This is the title" },
        react_1.default.createElement("div", null, "This is an example text")));
};
