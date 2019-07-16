import screens from "screens-js"
import React, { useState } from 'react';

screens.AppMain = function () {
    let { WidgetWindow, WidgetButton, UIFocus } = screens;
    let [counter, setCounter] = useState(0);
    let { WindowB } = screens.WidgetWindow.ids;
    let disableText = "Disable";
    if (WindowB) {
        let [isDisabled] = WindowB.disable;
        if (isDisabled) {
            disableText = "Enable";
        }
    }
    return (
        <UIFocus focusId="WindowB">
            <WidgetWindow id="WindowA" title="This is the title">
                <WidgetButton label={disableText} onClick={() => {
                    let { WindowB } = screens.WidgetWindow.ids;
                    let [isDisabled, disable] = WindowB.disable;
                    disable(!isDisabled).then(() => {
                        setCounter(counter + 1);
                    });
                }}></WidgetButton>
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
