import screens from "screens-js"
import React, { useState } from 'react';

let useValue = function (...values: any) {
    values = values.filter((value: any) => typeof value !== "undefined");
    const [value, setValue] = useState(values[0]);
    const toggle = () => {
        setValue(!value);
    };
    return { value, setValue, toggle }
};

screens.WidgetWindow = function ({ title, maximize, children }: { title: string, maximize: boolean, children: any }) {
    const { WidgetWindowTitle, WidgetWindowContent } = screens;
    const maximizeState = useValue(maximize, true);
    console.log("maximizeState: " + maximizeState.value);
    let classes = "widget-window";
    if (maximizeState.value) {
        classes += " maximize";
    }
    return (
        <div className={classes}>
            <WidgetWindowTitle label={title} maximizeState={maximizeState}></WidgetWindowTitle>
            <WidgetWindowContent>{children}</WidgetWindowContent>
        </div>
    );
};
