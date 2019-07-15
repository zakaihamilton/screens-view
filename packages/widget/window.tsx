import screens from "screens-js"
import React, { useContext } from 'react';

screens.WidgetWindow = function ({ id, title, restore, children }: { id: string, title: string, restore: boolean, children: any }) {
    const { WidgetWindow, WidgetWindowTitle, WidgetWindowContent, UIReact } = screens;
    let [focusId, setFocusId] = useContext(screens.UIFocus.focusId);
    let { UIElement } = UIReact.useObject().me;
    let fields = WidgetWindow.useFields({ id, maximize: !restore, title });
    let classes = UIReact.classes({ "widget-window": true, "maximize": fields.maximize[0], "focus": focusId === id });
    console.log("Rendering: WidgetWindow id: " + id);
    return (
        <WidgetWindow.Fields value={fields}>
            <div ref={UIElement.ref} onClick={() => setFocusId(id)} className={classes}>
                <WidgetWindowTitle></WidgetWindowTitle>
                <WidgetWindowContent>{children}</WidgetWindowContent>
            </div>
        </WidgetWindow.Fields>
    );
};

screens.WidgetWindow.init = function () {
    const { UIReact } = screens;
    UIReact.createFields(this, {
        maximize: true,
        title: "",
        id: null
    });
};
