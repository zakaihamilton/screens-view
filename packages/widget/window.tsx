import screens from "screens-js"
import React, { useContext } from 'react';

screens.WidgetWindow = function ({ id, index, title, restore, children }: { id: string, index: number, title: string, restore: boolean, children: any }) {
    const { WidgetWindow, WidgetWindowTitle, WidgetWindowContent, UIReact } = screens;
    let [focusId, setFocusId] = useContext(screens.UIFocus.focusId);
    let [focusOrder] = useContext(screens.UIFocus.order);
    let { UIElement } = UIReact.useObject().me;
    let fields = WidgetWindow.useFields({ id, maximize: !restore, title });
    let classes = UIReact.classes({ "widget-window": true, "maximize": fields.maximize[0], "focus": focusId === id });
    let focusIndex = focusOrder.findIndex((item: any) => item === id);
    if (focusIndex !== -1) {
        console.log("using index: " + focusIndex + " instead of: " + index);
        index = focusIndex;
    }
    let styles = {
        "zIndex": index * 100
    };
    return (
        <WidgetWindow.Fields value={fields}>
            <div ref={UIElement.ref} onClick={() => setFocusId(id)} className={classes} style={styles}>
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
