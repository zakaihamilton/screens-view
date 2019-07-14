import screens from "screens-js"
import React, { useContext } from 'react';

screens.WidgetWindowTitle = function ({ label, state }: { label: string, state: any }) {
    const { WidgetWindowTitle } = screens;
    return (
        <div className="widget-window-title">
            <WidgetWindowTitle.Label></WidgetWindowTitle.Label>
            <WidgetWindowTitle.Maximize></WidgetWindowTitle.Maximize>
        </div>
    );
};

screens.WidgetWindowTitle.Label = function () {
    const { ReactUtil } = screens;
    let [isMaximized, maximize] = useContext(screens.WidgetWindow.maximize);
    let [title] = useContext(screens.WidgetWindow.title);
    let classes = ReactUtil.classes({ "widget-window-title-label": true, "maximize": isMaximized });
    return (
        <div className={classes}>
            {title}
        </div>
    );
};

screens.WidgetWindowTitle.Maximize = function ({ state, label }: { label: string, state: any }) {
    const { ReactUtil } = screens;
    let [isMaximized, maximize, obj] = useContext(screens.WidgetWindow.maximize);
    let classes = ReactUtil.classes({ "widget-window-title-maximize": true, "maximize": isMaximized });
    let title = isMaximized ? "Restore" : "Maximize";
    console.log("title: " + title + " isMaximized:" + isMaximized + " obj: " + JSON.stringify(obj));
    return (
        <div className={classes} title={title} onClick={() => maximize(!isMaximized)}>
            {label}
        </div>
    );
};
