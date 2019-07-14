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
    this.createFields = function (component: any, defaultValues: any) {
        component.ids = {};
        for (let key in defaultValues) {
            let defaultValue = defaultValues[key];
            component[key] = React.createContext(defaultValue);
        }
        component.useFields = (defaults: any): any => {
            let fields = Object.assign({}, defaultValues, defaults);
            const ref: any = useRef(null);
            const [counter, setCounter] = useState(1);
            let object: any = ref.current;
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
                        component[key] = React.createContext(fields[key]);
                    }
                    let currentValue = fields[key];
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
                if (key in object) {
                    values[key] = object[key].context;
                }
            }
            useEffect(() => {
                let id = fields.id;
                if (id) {
                    component.ids[id] = values;
                }
            });
            useEffect(() => {
                let id = fields.id;
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
