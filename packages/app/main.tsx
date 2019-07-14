import screens from "screens-js"
import React, { useState } from 'react';

screens.AppMain = function () {
    let { WidgetWindow, WidgetButton } = screens;
    let [counter, setCounter] = useState(0);
    return (
        <>
            <WidgetWindow id="WindowA" title="This is the title">
                <WidgetButton label="Button text"></WidgetButton>
            </WidgetWindow>
            <WidgetButton onClick={() => {
                let { WindowA } = screens.WidgetWindow.ids;
                let [title, setTitle] = WindowA.title;
                setCounter(counter + 1);
                setTitle("The window counter is: " + counter);
            }} label="Maximize Window"></WidgetButton>
        </>
    );
}
