import screens from "screens-js"
import React from 'react';

screens.WidgetWindow = function ({ title, maximize, children }: { title: string, maximize: boolean, children: any }) {
    const { WidgetWindowTitle, WidgetWindowContent, ReactUtil } = screens;
    const maximizeState = ReactUtil.useValue(maximize, true);
    let classes = ReactUtil.classes({ "widget-window": true, "maximize": maximizeState.value });
    return (
        <div className={classes}>
            <WidgetWindowTitle label={title} maximizeState={maximizeState}></WidgetWindowTitle>
            <WidgetWindowContent>{children}</WidgetWindowContent>
        </div>
    );
};
