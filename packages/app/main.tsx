import screens from "screens-js"
import React, { useState } from 'react';

screens.AppMain = function () {
    let { WidgetWindow } = screens;
    return (
        <WidgetWindow title="This is the title">
            <div>This is an example text</div>
        </WidgetWindow>
    );
}
