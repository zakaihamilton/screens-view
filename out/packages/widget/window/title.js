"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importStar(require("react"));
screens_js_1.default.WidgetWindowTitle = function ({ label, state }) {
    const { WidgetWindowTitle } = screens_js_1.default;
    return (react_1.default.createElement("div", { className: "widget-window-title" },
        react_1.default.createElement(WidgetWindowTitle.Label, null),
        react_1.default.createElement(WidgetWindowTitle.Maximize, null)));
};
screens_js_1.default.WidgetWindowTitle.Label = function () {
    const { ReactUtil } = screens_js_1.default;
    let [isMaximized, maximize] = react_1.useContext(screens_js_1.default.WidgetWindow.maximize);
    let [title] = react_1.useContext(screens_js_1.default.WidgetWindow.title);
    let classes = ReactUtil.classes({ "widget-window-title-label": true, "maximize": isMaximized });
    return (react_1.default.createElement("div", { className: classes }, title));
};
screens_js_1.default.WidgetWindowTitle.Maximize = function ({ state, label }) {
    const { ReactUtil } = screens_js_1.default;
    let [isMaximized, maximize, obj] = react_1.useContext(screens_js_1.default.WidgetWindow.maximize);
    let classes = ReactUtil.classes({ "widget-window-title-maximize": true, "maximize": isMaximized });
    let title = isMaximized ? "Restore" : "Maximize";
    console.log("title: " + title + " isMaximized:" + isMaximized + " obj: " + JSON.stringify(obj));
    return (react_1.default.createElement("div", { className: classes, title: title, onClick: () => maximize(!isMaximized) }, label));
};
