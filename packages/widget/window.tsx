import screens from "screens-js"
import React from 'react';

screens.WidgetWindow = function ({ title, restore, children }: { title: string, restore: boolean, children: any }) {
    const { WidgetWindowTitle, WidgetWindowContent, ReactUtil } = screens;
    const state = ReactUtil.useState({ maximize: !restore });
    let classes = ReactUtil.classes({ "widget-window": true, "maximize": state.maximize });
    return (
        <div className={classes}>
            <WidgetWindowTitle label={title} state={state}></WidgetWindowTitle>
            <WidgetWindowContent>{children}</WidgetWindowContent>
        </div>
    );
};
