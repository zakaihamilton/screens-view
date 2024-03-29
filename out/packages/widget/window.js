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
screens_js_1.default.WidgetWindow = function ({ id, disable, index, title, restore, children }) {
    const { WidgetWindow, WidgetWindowTitle, WidgetWindowContent, UIReact } = screens_js_1.default;
    let [focusId, setFocusId] = react_1.useContext(screens_js_1.default.UIFocus.focusId);
    let [focusOrder] = react_1.useContext(screens_js_1.default.UIFocus.order);
    let { UIElement } = UIReact.useObject().me;
    let fields = WidgetWindow.useFields({ id, maximize: !restore, title, disable });
    let classes = UIReact.classes({ "widget-window": true, "maximize": fields.maximize[0], "focus": focusId === id, "disable": fields.disable[0] });
    let focusIndex = focusOrder.findIndex((item) => item === id);
    if (focusIndex !== -1) {
        index = focusIndex;
    }
    let styles = {
        "zIndex": index * 100
    };
    return (react_1.default.createElement(WidgetWindow.Fields, { value: fields },
        react_1.default.createElement("div", { ref: UIElement.ref, onClick: () => !fields.disable[0] && setFocusId(id), className: classes, style: styles },
            react_1.default.createElement(WidgetWindowTitle, null),
            react_1.default.createElement(WidgetWindowContent, null, children))));
};
screens_js_1.default.WidgetWindow.init = function () {
    const { UIField } = screens_js_1.default;
    UIField.create(this, {
        maximize: true,
        title: "",
        id: null,
        disable: false
    });
};
