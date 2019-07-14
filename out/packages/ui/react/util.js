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
screens_js_1.default.ReactUtil = function () {
};
screens_js_1.default.ReactUtil.init = function () {
    this.useState = function (defaults) {
        let [getter, setter] = react_1.useState(defaults);
        let fields = {};
        for (let key in defaults) {
            Object.defineProperty(fields, key, {
                get() {
                    return getter[key];
                },
                set(value) {
                    setter((prev) => {
                        let changed = Object.assign({}, prev);
                        changed[key] = value;
                        return changed;
                    });
                }
            });
        }
        return fields;
    };
    this.createFields = function (component, fields) {
        for (let key in fields) {
            let defaultValue = fields[key];
            component[key] = react_1.default.createContext(defaultValue);
        }
        component.fields = (defaults) => {
            const ref = react_1.useRef(null);
            const [counter, setCounter] = react_1.useState(0);
            let object = ref.current;
            if (object) {
                for (let key in defaults) {
                    if (object[key].prev !== object[key].value) {
                        let value = object[key].prev = object[key].value;
                        object[key].context = [value, object[key].setValue, { key, value, counter }];
                    }
                }
            }
            else {
                ref.current = object = {};
                for (let key in fields) {
                    let currentValue = defaults[key];
                    if (typeof currentValue === "undefined") {
                        currentValue = fields[key];
                    }
                    const setValue = (value) => {
                        if (Object.is(object[key].value, value)) {
                            return;
                        }
                        object[key].value = value;
                        if (!object._timeout) {
                            object._timeout = setTimeout(() => {
                                object._timeout = null;
                                setCounter(counter + 1);
                            });
                        }
                    };
                    object[key] = { prev: currentValue, value: currentValue, setValue, context: [currentValue, setValue, { key, value: currentValue, counter }] };
                }
            }
            let values = {};
            for (let key in fields) {
                values[key] = object[key].context;
            }
            return values;
        };
        component.Fields = ({ value, children }) => {
            const fields = value;
            let keys = Object.keys(fields);
            let iterate = (index) => {
                let key = keys[index++];
                if (index > keys.length) {
                    return children;
                }
                if (key.startsWith("_")) {
                    key = keys[index++];
                }
                if (index > keys.length) {
                    return children;
                }
                let value = fields[key];
                return react_1.default.createElement(component[key].Provider, { value }, iterate(index));
            };
            let result = iterate(0);
            return result;
        };
    };
    this.classes = function (classes) {
        let string = "";
        for (let key in classes) {
            let value = classes[key];
            if (value) {
                string += key + " ";
            }
        }
        return string.trim();
    };
};
