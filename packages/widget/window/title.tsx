import screens from "screens-js"
import React, { useContext } from 'react';

screens.WidgetWindowTitle = function ({ label, state }: { label: string, state: any }) {
    const { WidgetWindowTitle, UIReact } = screens;
    let [focusId] = useContext(screens.UIFocus.focusId);
    let [windowId] = useContext(screens.WidgetWindow.id);
    let classes = UIReact.classes({
        "widget-window-title": true,
        "focus": focusId === windowId
    });
    return (
        <div className={classes}>
            <WidgetWindowTitle.Label></WidgetWindowTitle.Label>
            <WidgetWindowTitle.Maximize></WidgetWindowTitle.Maximize>
        </div>
    );
};

screens.WidgetWindowTitle.Label = function () {
    const { UIReact } = screens;
    let [isMaximized] = useContext(screens.WidgetWindow.maximize);
    let [focusId] = useContext(screens.UIFocus.focusId);
    let [windowId] = useContext(screens.WidgetWindow.id);
    let [title] = useContext(screens.WidgetWindow.title);
    let classes = UIReact.classes({
        "widget-window-title-label": true,
        "maximize": isMaximized,
        "focus": focusId === windowId
    });
    return (
        <div className={classes}>
            {title}
        </div>
    );
};

screens.WidgetWindowTitle.Maximize = function ({ state, label }: { label: string, state: any }) {
    const { UIReact } = screens;
    let [isMaximized, maximize] = useContext(screens.WidgetWindow.maximize);
    let [focusId] = useContext(screens.UIFocus.focusId);
    let [windowId] = useContext(screens.WidgetWindow.id);
    let classes = UIReact.classes({
        "widget-window-title-maximize": true,
        "maximize": isMaximized,
        "focus": focusId === windowId
    });
    let title = isMaximized ? "Restore" : "Maximize";
    return (
        <div className={classes} title={title} onClick={() => {
            maximize(!isMaximized)
        }}>
            {label}
        </div>
    );
};
