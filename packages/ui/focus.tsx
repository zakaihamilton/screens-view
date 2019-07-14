import screens from "screens-js"
import React from 'react';

screens.UIFocus = function ({ focusId, children }: { focusId: string, children: any }) {
    const { UIFocus } = screens;
    let fields = UIFocus.useFields({ focusId });
    return (<UIFocus.Fields value={fields}>{children}</UIFocus.Fields>);
};

screens.UIFocus.init = function () {
    const { UIReact } = screens;
    UIReact.createFields(this, {
        focusId: ""
    });
};
