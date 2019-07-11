import screens from "screens-js"
import React, { useState } from 'react';

screens.WidgetWindowTitle = function ({ label }: { label: string }) {
    const { WidgetWindowTitleLabel } = screens;
    return (
        <div className="widget-window-title">
            <WidgetWindowTitleLabel label={label}></WidgetWindowTitleLabel>
        </div>
    );
}

screens.WidgetWindowTitleLabel = function ({ label }: { label: string }) {
    return (
        <div className="widget-window-title-label">
            {label}
        </div>
    );
}
