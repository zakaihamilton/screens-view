import screens from "screens-js"
import { useState } from 'react';

screens.ReactUtil = function () {

};

screens.ReactUtil.init = function () {
    this.useValue = function (...values: any) {
        values = values.filter((value: any) => typeof value !== "undefined");
        const [value, setValue] = useState(values[0]);
        const toggle = () => {
            setValue(!value);
        };
        return { value, setValue, toggle }
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