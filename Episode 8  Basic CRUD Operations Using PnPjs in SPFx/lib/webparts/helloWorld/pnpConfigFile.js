import { spfi, SPFx } from "@pnp/sp";
var sp;
export var initializePnP = function (context) {
    sp = spfi().using(SPFx(context));
};
export var getSP = function () {
    if (!sp) {
        throw new Error("PnPjs is not initialized. Call initializePnP with the SPFx context first.");
    }
    return sp;
};
//# sourceMappingURL=pnpConfigFile.js.map