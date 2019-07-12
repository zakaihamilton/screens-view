import screens from "screens-js"
import React, { useState } from 'react';

screens.WidgetWindowTitle = function ({ label, maximizeState }: { label: string, maximizeState: any }) {
    const { WidgetWindowTitle } = screens;
    return (
        <div className="widget-window-title">
            <WidgetWindowTitle.Label label={label}></WidgetWindowTitle.Label>
            <WidgetWindowTitle.Maximize maximizeState={maximizeState}></WidgetWindowTitle.Maximize>
        </div>
    );
}

screens.WidgetWindowTitle.Label = function ({ label }: { label: string }) {
    return (
        <div className="widget-window-title-label">
            {label}
        </div>
    );
}

screens.WidgetWindowTitle.Maximize = function ({ maximizeState, label }: { label: string, maximizeState: any }) {
    let classes = "widget-window-title-maximize";
    if (maximizeState.value) {
        classes += " maximize";
    }
    return (
        <div className={classes} onClick={maximizeState.toggle}>
            {label}
        </div>
    );
}
