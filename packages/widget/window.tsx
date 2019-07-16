import screens from "screens-js"
import React, { useContext } from 'react';

screens.WidgetWindow = function ({ id, disable, index, title, restore, children }: { id: string, disable: boolean, index: number, title: string, restore: boolean, children: any }) {
    const { WidgetWindow, WidgetWindowTitle, WidgetWindowContent, UIReact } = screens;
    let [focusId, setFocusId] = useContext(screens.UIFocus.focusId);
    let [focusOrder] = useContext(screens.UIFocus.order);
    let { UIElement } = UIReact.useObject().me;
    let fields = WidgetWindow.useFields({ id, maximize: !restore, title, disable });
    let classes = UIReact.classes({ "widget-window": true, "maximize": fields.maximize[0], "focus": focusId === id, "disable": fields.disable[0] });
    let focusIndex = focusOrder.findIndex((item: any) => item === id);
    if (focusIndex !== -1) {
        index = focusIndex;
    }
    let styles = {
        "zIndex": index * 100
    };
    return (
        <WidgetWindow.Fields value={fields}>
            <div ref={UIElement.ref} onClick={() => !fields.disable[0] && setFocusId(id)} className={classes} style={styles}>
                <WidgetWindowTitle></WidgetWindowTitle>
                <WidgetWindowContent>{children}</WidgetWindowContent>
            </div>
        </WidgetWindow.Fields>
    );
};

screens.WidgetWindow.init = function () {
    const { UIField } = screens;
    UIField.create(this, {
        maximize: true,
        title: "",
        id: null,
        disable: false
    });
};
