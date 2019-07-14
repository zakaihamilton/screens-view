import screens from "screens-js"
import React, { useState } from 'react';

screens.AppMain = function () {
    let { WidgetWindow, WidgetButton, UIFocus } = screens;
    let [counter, setCounter] = useState(0);
    return (
        <UIFocus focusId="WindowB">
            <WidgetWindow id="WindowA" title="This is the title">
                <WidgetButton label="Button text"></WidgetButton>
            </WidgetWindow>
            <WidgetWindow id="WindowB" title="Second Window">
                <WidgetButton onClick={() => {
                    let { WindowA } = screens.WidgetWindow.ids;
                    let [title, setTitle] = WindowA.title;
                    let [isMaximized, maximize] = WindowA.maximize;
                    setCounter(counter + 1);
                    setTitle("The window counter is: " + counter);
                    maximize(!isMaximized);
                }} label="Maximize Window"></WidgetButton>
            </WidgetWindow>
        </UIFocus>
    );
}
