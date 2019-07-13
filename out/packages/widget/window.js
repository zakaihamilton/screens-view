"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.WidgetWindow = function ({ title, restore, children }) {
    const { WidgetWindowTitle, WidgetWindowContent, ReactUtil } = screens_js_1.default;
    const state = ReactUtil.useState({ maximize: !restore });
    let classes = ReactUtil.classes({ "widget-window": true, "maximize": state.maximize });
    return (react_1.default.createElement("div", { className: classes },
        react_1.default.createElement(WidgetWindowTitle, { label: title, state: state }),
        react_1.default.createElement(WidgetWindowContent, null, children)));
};
