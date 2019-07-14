import screens from "screens-js"
import React from 'react';

screens.UIElement = function () {
    this.me.CoreListener.register("UIReact", "render", () => {
        this.ref = React.createRef();
    });
    this.render = () => {
        if (this.ref && this.ref.current) {
            this.ref.current.source = this;
        }
    };
    this.destroy = () => {
        if (this.ref && this.ref.current) {
            this.ref.current.source = null;
        }
    };
};

screens.UIElement.init = function () {

};
