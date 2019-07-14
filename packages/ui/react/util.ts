import screens from "screens-js"
import React, { useState, useRef, Children, useEffect } from 'react';

screens.ReactUtil = function () {

};

screens.ReactUtil.init = function () {
    this.useState = function (defaults: any) {
        let [getter, setter] = useState(defaults);
        let fields = {};
        for (let key in defaults) {
            Object.defineProperty(fields, key, {
                get() {
                    return getter[key];
                },
                set(value: any) {
                    setter((prev: any) => {
                        let changed = Object.assign({}, prev);
                        changed[key] = value;
                        return changed;
                    });
                }
            })
        }
        return fields;
    };
    this.createFields = function (component: any, fields: any) {
        component.ids = {};
        for (let key in fields) {
            let defaultValue = fields[key];
            component[key] = React.createContext(defaultValue);
        }
        component.fields = (defaults: any): any => {
            const ref: any = useRef(null);
            const [counter, setCounter] = useState(1);
            let object: any = ref.current;
            if (object) {
                for (let key in defaults) {
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
                    let currentValue = defaults[key];
                    if (typeof currentValue === "undefined") {
                        currentValue = fields[key];
                    }
                    const setValue = (value: any) => {
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
            let values: any = {};
            for (let key in fields) {
                values[key] = object[key].context;
            }
            useEffect(() => {
                let id = defaults.id;
                if (id) {
                    component.ids[id] = values;
                }
            });
            useEffect(() => {
                let id = defaults.id;
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
                if (key.startsWith("_")) {
                    key = keys[index++];
                }
                if (index > keys.length) {
                    return children;
                }
                let value = fields[key];
                return React.createElement(component[key].Provider, { value }, iterate(index));
            };
            let result = iterate(0);
            return result;
        };
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