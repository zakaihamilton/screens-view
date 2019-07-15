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
    this.createFields = function (component, fields) {
        component.ids = {};
        for (let key in fields) {
            component[key] = react_1.default.createContext(fields[key]);
            component[key].displayName = component.name + "." + key;
        }
        component.useFields = (defaults) => {
            const [state, setState] = react_1.useState(defaults);
            let [callbacks, setCallbacks] = react_1.useState(null);
            if (!callbacks) {
                callbacks = {};
                for (let key in fields) {
                    callbacks[key] = (value) => {
                        if (Object.is(state[key], value)) {
                            return;
                        }
                        state[key] = value;
                        console.log("changed " + key + " value to: " + value);
                        if (!state._timeout) {
                            state._timeout = setTimeout(() => {
                                state._timeout = null;
                                let currentCounter = (state[key]._counter || 0);
                                let counter = currentCounter + 1;
                                setState(Object.assign({}, state, { _counter: counter }));
                            });
                        }
                    };
                }
                setCallbacks(callbacks);
            }
            let values = {};
            for (let key in state) {
                const method = callbacks[key];
                values[key] = [state[key], method];
            }
            react_1.useEffect(() => {
                let id = state.id;
                if (id) {
                    component.ids[id] = values;
                }
            });
            react_1.useEffect(() => {
                let id = state.id;
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
                while (key.startsWith("_")) {
                    key = keys[index++];
                    if (index > keys.length) {
                        return children;
                    }
                }
                let value = fields[key];
                return react_1.default.createElement(component[key].Provider, { value }, iterate(index));
            };
            let result = iterate(0);
            return result;
        };
        component.Fields.displayName = component.name + ".Fields";
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
