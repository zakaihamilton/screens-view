import screens from "screens-js"
import React, { useState } from 'react';

let useMaximize = function (defaultValue: boolean) {
    const [value, setValue] = useState(defaultValue);
    const toggle = () => {
        setValue(!value);
    };
    return { value, setValue, toggle }
};

screens.WidgetWindow = function ({ title, maximize, children }: { title: string, maximize: boolean, children: any }) {
    const { WidgetWindowTitle, WidgetWindowContent } = screens;
    const maximizeState = useMaximize(false);
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
