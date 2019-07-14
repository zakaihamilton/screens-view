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
screens_js_1.default.AppMain = function () {
    let { WidgetWindow, WidgetButton } = screens_js_1.default;
    let [counter, setCounter] = react_1.useState(0);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(WidgetWindow, { id: "WindowA", title: "This is the title" },
            react_1.default.createElement(WidgetButton, { label: "Button text" })),
        react_1.default.createElement(WidgetButton, { onClick: () => {
                let { WindowA } = screens_js_1.default.WidgetWindow.ids;
                let [title, setTitle] = WindowA.title;
                setCounter(counter + 1);
                setTitle("The window counter is: " + counter);
            }, label: "Maximize Window" })));
};
