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
screens_js_1.default.UIReact = function () {
};
screens_js_1.default.UIReact.static = function () {
    this.useObject = function () {
        let ref = react_1.useRef(null);
        let object = ref.current;
        if (!object) {
            object = ref.current = {};
            screens_js_1.default.objectify(object, "UIReact");
        }
        react_1.useEffect(() => {
            return () => {
                object.me.CoreObject.destroy();
            };
        }, []);
        object.me.CoreListener.notify("UIReact", "render");
        return object;
    };
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
    this.createFields = function (component, defaultValues) {
        component.ids = {};
        for (let key in defaultValues) {
            let defaultValue = defaultValues[key];
            component[key] = react_1.default.createContext(defaultValue);
        }
        component.useFields = (defaults) => {
            let fields = Object.assign({}, defaultValues, defaults);
            const ref = react_1.useRef(null);
            const [counter, setCounter] = react_1.useState(1);
            let object = ref.current;
            if (object) {
                for (let key in fields) {
                    if (!(key in object)) {
                        continue;
                    }
                    let currentCounter = (object[key].counter || 0);
                    if (object[key].prev !== object[key].value) {
                        let value = object[key].prev = object[key].value;
                        object[key].counter = currentCounter;
                        object[key].context = [value, object[key].setValue, currentCounter];
                    }
                    console.log("key: " + key + " value: " + object[key].value + " counter: " + currentCounter);
                }
            }
            else {
                ref.current = object = {};
                for (let key in fields) {
                    if (!(key in component)) {
                        component[key] = react_1.default.createContext(fields[key]);
                    }
                    let currentValue = fields[key];
                    const setValue = (value) => {
                        if (Object.is(object[key].value, value)) {
                            return;
                        }
                        object[key].value = value;
                        console.log("changed value to: " + value);
                        if (!object._timeout) {
                            object._timeout = setTimeout(() => {
                                object._timeout = null;
                                let currentCounter = (object[key].counter || 0);
                                object[key].counter = currentCounter + 1;
                                setCounter(currentCounter);
                            });
                        }
                    };
                    object[key] = { prev: currentValue, value: currentValue, setValue, counter, context: [currentValue, setValue, counter] };
                }
            }
            let values = {};
            for (let key in fields) {
                if (key in object) {
                    values[key] = object[key].context;
                }
            }
            react_1.useEffect(() => {
                let id = fields.id;
                if (id) {
                    component.ids[id] = values;
                }
            });
            react_1.useEffect(() => {
                let id = fields.id;
                if (id) {
                    return () => {
                        delete component.ids[id];
                    };
                }
            }, []);
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
