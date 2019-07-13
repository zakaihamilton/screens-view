import screens from "screens-js"
import React from 'react';

screens.WidgetWindowTitle = function ({ label, state }: { label: string, state: any }) {
    const { WidgetWindowTitle } = screens;
    return (
        <div className="widget-window-title">
            <WidgetWindowTitle.Label state={state} label={label}></WidgetWindowTitle.Label>
            <WidgetWindowTitle.Maximize state={state}></WidgetWindowTitle.Maximize>
        </div>
    );
};

screens.WidgetWindowTitle.Label = function ({ state, label }: { label: string, state: any }) {
    const { ReactUtil } = screens;
    let classes = ReactUtil.classes({ "widget-window-title-label": true, "maximize": state.maximize });
    return (
        <div className={classes}>
            {label}
        </div>
    );
};

screens.WidgetWindowTitle.Maximize = function ({ state, label }: { label: string, state: any }) {
    const { ReactUtil } = screens;
    let classes = ReactUtil.classes({ "widget-window-title-maximize": true, "maximize": state.maximize });
    let title = state.maximize ? "Restore" : "Maximize";
    return (
        <div className={classes} title={title} onClick={() => state.maximize = !state.maximize}>
            {label}
        </div>
    );
};
