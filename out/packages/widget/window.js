"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.WidgetWindow = function ({ title, restore, children }) {
    const { WidgetWindow, WidgetWindowTitle, WidgetWindowContent, ReactUtil } = screens_js_1.default;
    let fields = WidgetWindow.fields({ maximize: !restore, title });
    let classes = ReactUtil.classes({ "widget-window": true, "maximize": fields.maximize[0] });
    return (react_1.default.createElement(WidgetWindow.Fields, { value: fields },
        react_1.default.createElement("div", { className: classes },
            react_1.default.createElement(WidgetWindowTitle, null),
            react_1.default.createElement(WidgetWindowContent, null, children))));
};
screens_js_1.default.WidgetWindow.init = function () {
    const { ReactUtil } = screens_js_1.default;
    ReactUtil.createFields(this, {
        maximize: true,
        title: ""
    });
};
