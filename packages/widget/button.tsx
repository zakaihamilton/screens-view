import screens from "screens-js"
import React, { useState } from 'react';

screens.WidgetButton = function ({ onClick, label }: { onClick: any, label: string }) {
    const { WidgetButton } = screens;
    return (
        <div className="widget-button" onClick={onClick}>
            <WidgetButton.Label label={label}></WidgetButton.Label>
        </div>
    );
};

screens.WidgetButton.Label = function ({ label }: { label: string }) {
    return (
        <div className="widget-button-label">
            {label}
        </div>
    );
};
