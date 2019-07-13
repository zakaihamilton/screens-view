"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.WidgetWindowTitle = function ({ label, state }) {
    const { WidgetWindowTitle } = screens_js_1.default;
    return (react_1.default.createElement("div", { className: "widget-window-title" },
        react_1.default.createElement(WidgetWindowTitle.Label, { state: state, label: label }),
        react_1.default.createElement(WidgetWindowTitle.Maximize, { state: state })));
};
screens_js_1.default.WidgetWindowTitle.Label = function ({ state, label }) {
    const { ReactUtil } = screens_js_1.default;
    let classes = ReactUtil.classes({ "widget-window-title-label": true, "maximize": state.maximize });
    return (react_1.default.createElement("div", { className: classes }, label));
};
screens_js_1.default.WidgetWindowTitle.Maximize = function ({ state, label }) {
    const { ReactUtil } = screens_js_1.default;
    let classes = ReactUtil.classes({ "widget-window-title-maximize": true, "maximize": state.maximize });
    let title = state.maximize ? "Restore" : "Maximize";
    return (react_1.default.createElement("div", { className: classes, title: title, onClick: () => state.maximize = !state.maximize }, label));
};
