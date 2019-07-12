import screens from "screens-js"
import React, { useState } from 'react';

screens.AppMain = function () {
    let { WidgetWindow, WidgetButton } = screens;
    return (
        <WidgetWindow title="This is the title">
            <WidgetButton label="Button text"></WidgetButton>
        </WidgetWindow>
    );
}
