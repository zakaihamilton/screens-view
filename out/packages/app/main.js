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
    let { WidgetWindow, WidgetButton, UIFocus } = screens_js_1.default;
    let [counter, setCounter] = react_1.useState(0);
    let { WindowB } = screens_js_1.default.WidgetWindow.ids;
    let disableText = "Disable";
    if (WindowB) {
        let [isDisabled] = WindowB.disable;
        if (isDisabled) {
            disableText = "Enable";
        }
    }
    return (react_1.default.createElement(UIFocus, { focusId: "WindowB" },
        react_1.default.createElement(WidgetWindow, { id: "WindowA", title: "This is the title" },
            react_1.default.createElement(WidgetButton, { label: disableText, onClick: () => {
                    let { WindowB } = screens_js_1.default.WidgetWindow.ids;
                    let [isDisabled, disable] = WindowB.disable;
                    disable(!isDisabled).then(() => {
                        setCounter(counter + 1);
                    });
                } })),
        react_1.default.createElement(WidgetWindow, { id: "WindowB", title: "Second Window" },
            react_1.default.createElement(WidgetButton, { onClick: () => {
                    let { WindowA } = screens_js_1.default.WidgetWindow.ids;
                    let [title, setTitle] = WindowA.title;
                    let [isMaximized, maximize] = WindowA.maximize;
                    setCounter(counter + 1);
                    setTitle("The window counter is: " + counter);
                    maximize(!isMaximized);
                }, label: "Maximize Window" }))));
};
