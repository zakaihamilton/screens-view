import screens from "screens-js"
import React, { useState } from 'react';

screens.WidgetButton = function ({ label }: { label: string }) {
    const { WidgetButtonLabel } = screens;
    return (
        <div className="widget-button">
            <WidgetButtonLabel label={label}></WidgetButtonLabel>
        </div>
    );
}

screens.WidgetButtonLabel = function ({ label }: { label: string }) {
    return (
        <div className="widget-button-label">
            {label}
        </div>
    );
}
