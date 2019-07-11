"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.WidgetWindow = function ({ title, children }) {
    const { WidgetWindowTitle, WidgetWindowContent } = screens_js_1.default;
    return (react_1.default.createElement("div", { className: "widget-window" },
        react_1.default.createElement(WidgetWindowTitle, { label: title }),
        react_1.default.createElement(WidgetWindowContent, null, children)));
};
