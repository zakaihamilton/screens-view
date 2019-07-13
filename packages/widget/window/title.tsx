import screens from "screens-js"
import React from 'react';

screens.WidgetWindowTitle = function ({ label, maximizeState }: { label: string, maximizeState: any }) {
    const { WidgetWindowTitle } = screens;
    return (
        <div className="widget-window-title">
            <WidgetWindowTitle.Label maximizeState={maximizeState} label={label}></WidgetWindowTitle.Label>
            <WidgetWindowTitle.Maximize maximizeState={maximizeState}></WidgetWindowTitle.Maximize>
        </div>
    );
};

screens.WidgetWindowTitle.Label = function ({ maximizeState, label }: { label: string, maximizeState: any }) {
    const { ReactUtil } = screens;
    let classes = ReactUtil.classes({ "widget-window-title-label": true, "maximize": maximizeState.value });
    return (
        <div className={classes}>
            {label}
        </div>
    );
};

screens.WidgetWindowTitle.Maximize = function ({ maximizeState, label }: { label: string, maximizeState: any }) {
    const { ReactUtil } = screens;
    let classes = ReactUtil.classes({ "widget-window-title-maximize": true, "maximize": maximizeState.value });
    let title = maximizeState.value ? "Restore" : "Maximize";
    return (
        <div className={classes} title={title} onClick={maximizeState.toggle}>
            {label}
        </div>
    );
};
