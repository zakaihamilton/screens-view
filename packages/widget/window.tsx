import screens from "screens-js"
import React, { useState } from 'react';

screens.WidgetWindow = function ({ title, children }: { title: string, children: any }) {
    const { WidgetWindowTitle, WidgetWindowContent } = screens;
    return (
        <div className="widget-window">
            <WidgetWindowTitle label={title}></WidgetWindowTitle>
            <WidgetWindowContent>{children}</WidgetWindowContent>
        </div>
    );
}
