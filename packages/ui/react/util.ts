import screens from "screens-js"
import { useState } from 'react';

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