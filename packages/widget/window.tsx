import screens from "screens-js"
import React from 'react';

screens.WidgetWindow = function ({ title, restore, children }: { title: string, restore: boolean, children: any }) {
    const { WidgetWindow, WidgetWindowTitle, WidgetWindowContent, ReactUtil } = screens;
    let fields = WidgetWindow.fields({ maximize: !restore, title });
    let classes = ReactUtil.classes({ "widget-window": true, "maximize": fields.maximize[0] });
    return (
        <WidgetWindow.Fields value={fields}>
            <div className={classes}>
                <WidgetWindowTitle></WidgetWindowTitle>
                <WidgetWindowContent>{children}</WidgetWindowContent>
            </div>
        </WidgetWindow.Fields>
    );
};

screens.WidgetWindow.init = function () {
    const { ReactUtil } = screens;
    ReactUtil.createFields(this, {
        maximize: true,
        title: ""
    });
};
