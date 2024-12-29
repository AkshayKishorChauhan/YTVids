var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { PrimaryButton, TextField } from '@fluentui/react';
import { Stack } from '@fluentui/react/lib/Stack';
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement(Stack, { horizontalAlign: "center", verticalAlign: "center", styles: { root: { height: '100%' } } },
            React.createElement("h1", null, "Welcome to SPFx with Fluent UI!"),
            React.createElement(TextField, { label: "Enter your name:", placeholder: "Your Name" }),
            React.createElement(PrimaryButton, { text: "Submit", onClick: function () { return alert('Button Clicked!'); }, styles: { root: { backgroundColor: 'green', color: 'white', borderRadius: '5px' } } })));
    };
    return HelloWorld;
}(React.Component));
export default HelloWorld;
//# sourceMappingURL=HelloWorld.js.map