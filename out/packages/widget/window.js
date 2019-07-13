"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.WidgetWindow = function ({ title, maximize, children }) {
    const { WidgetWindowTitle, WidgetWindowContent, ReactUtil } = screens_js_1.default;
    const maximizeState = ReactUtil.useValue(maximize, true);
    let classes = ReactUtil.classes({ "widget-window": true, "maximize": maximizeState.value });
    return (react_1.default.createElement("div", { className: classes },
        react_1.default.createElement(WidgetWindowTitle, { label: title, maximizeState: maximizeState }),
        react_1.default.createElement(WidgetWindowContent, null, children)));
};
