"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.WidgetWindowTitle = function ({ label, maximizeState }) {
    const { WidgetWindowTitle } = screens_js_1.default;
    return (react_1.default.createElement("div", { className: "widget-window-title" },
        react_1.default.createElement(WidgetWindowTitle.Label, { label: label }),
        react_1.default.createElement(WidgetWindowTitle.Maximize, { maximizeState: maximizeState })));
};
screens_js_1.default.WidgetWindowTitle.Label = function ({ label }) {
    return (react_1.default.createElement("div", { className: "widget-window-title-label" }, label));
};
screens_js_1.default.WidgetWindowTitle.Maximize = function ({ maximizeState, label }) {
    let classes = "widget-window-title-maximize";
    if (maximizeState.value) {
        classes += " maximize";
    }
    return (react_1.default.createElement("div", { className: classes, onClick: maximizeState.toggle }, label));
};
