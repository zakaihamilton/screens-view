"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const screens_js_1 = __importDefault(require("screens-js"));
const react_1 = __importDefault(require("react"));
screens_js_1.default.UIFocus = function ({ focusId, children }) {
    const { UIFocus } = screens_js_1.default;
    let fields = UIFocus.useFields({ focusId });
    return (react_1.default.createElement(UIFocus.Fields, { value: fields }, children));
};
screens_js_1.default.UIFocus.init = function () {
    const { UIReact } = screens_js_1.default;
    UIReact.createFields(this, {
        focusId: ""
    });
};
