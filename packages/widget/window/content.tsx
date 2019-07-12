import screens from "screens-js"
import React, { useState } from 'react';

screens.WidgetWindowContent = function ({ children }: { children: string }) {
    return (
        <div className="widget-window-content">
            {children}
        </div>
    );
};
