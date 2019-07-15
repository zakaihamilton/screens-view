import screens from "screens-js"
import React, { useState, useRef, Children, useEffect } from 'react';

screens.UIReact = function () {

};

screens.UIReact.static = function () {
    this.useObject = function () {
        let ref: any = useRef(null);
        let object: any = ref.current;
        if (!object) {
            object = ref.current = {};
            screens.objectify(object, "UIReact");
        }
        useEffect(() => {
            return () => {
                object.me.CoreObject.destroy();
            };
        }, []);
        object.me.CoreListener.notify("UIReact", "render");
        return object;
    };
    this.createFields = function (component: any, fields: any) {
        component.ids = {};
        for (let key in fields) {
            component[key] = React.createContext(fields[key]);
            component[key].displayName = component.name + "." + key;
        }
        component.useFields = (defaults: any): any => {
            const [state, setState] = useState(defaults);
            let [callbacks, setCallbacks]: [any, any] = useState(null);
            if (!callbacks) {
                callbacks = {};
                for (let key in fields) {
                    callbacks[key] = (value: any) => {
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
            let values: any = {};
            for (let key in state) {
                const method = (callbacks as any)[key];
                values[key] = [state[key], method];
            }
            useEffect(() => {
                let id = state.id;
                if (id) {
                    component.ids[id] = values;
                }
            });
            useEffect(() => {
                let id = state.id;
                if (id) {
                    return () => {
                        delete component.ids[id];
                    };
                }
            }, []);
            return values;
        };
        component.Fields = ({ value, children }: { value: any, children: any }) => {
            const fields = value;
            let keys = Object.keys(fields);
            let iterate = (index: number): any => {
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
                return React.createElement(component[key].Provider, { value }, iterate(index));
            };
            let result = iterate(0);
            return result;
        };
        component.Fields.displayName = component.name + ".Fields";
    };
    this.classes = function (classes: any) {
        let string = "";
        for (let key in classes) {
            let value = classes[key];
            if (value) {
                string += key + " ";
            }
        }
        return string.trim();
    }
}
