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
let useValue = function (defaultValue) {
    const [value, setValue] = react_1.useState(defaultValue);
    const toggle = () => {
        setValue(!value);
    };
    return { value, setValue, toggle };
};
screens_js_1.default.WidgetWindow = function ({ title, maximize, children }) {
    const { WidgetWindowTitle, WidgetWindowContent } = screens_js_1.default;
    const maximizeState = useValue(false);
    let classes = "widget-window";
    if (maximizeState.value) {
        classes += " maximize";
    }
    return (react_1.default.createElement("div", { className: classes },
        react_1.default.createElement(WidgetWindowTitle, { label: title, maximizeState: maximizeState }),
        react_1.default.createElement(WidgetWindowContent, null, children)));
};
