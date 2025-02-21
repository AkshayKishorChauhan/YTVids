var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import { useEffect, useState } from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { getSP } from "../pnpConfigFile";
var SPFxCRUD = function (_a) {
    var listName = _a.listName;
    var _b = useState([]), items = _b[0], setItems = _b[1];
    var _c = useState(""), title = _c[0], setTitle = _c[1];
    var _d = useState(""), idToUpdate = _d[0], setIdToUpdate = _d[1];
    var _e = useState(null), errorMessage = _e[0], setErrorMessage = _e[1];
    var sp = getSP();
    var fetchItems = function () { return __awaiter(void 0, void 0, void 0, function () {
        var listItems, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setErrorMessage(null);
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(listName)
                            .items()];
                case 1:
                    listItems = _a.sent();
                    setItems(listItems);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setErrorMessage("Failed to fetch items. Please check the list name or your permissions.");
                    console.error("Fetch Items Error: ", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        fetchItems().catch(function (error) {
            setErrorMessage("Failed to fetch items. Please try again later.");
            console.error("Fetch Items Error: ", error);
        });
    }, []);
    var createItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!title) {
                        alert("Title is required!");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    setErrorMessage(null);
                    return [4 /*yield*/, sp.web.lists.getByTitle(listName).items.add({
                            Title: title,
                        })];
                case 2:
                    _a.sent();
                    alert("Item created successfully!");
                    setTitle("");
                    return [4 /*yield*/, fetchItems()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    setErrorMessage("Failed to create item. Please try again.");
                    console.error("Create Item Error: ", error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var updateItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!idToUpdate || !title) {
                        alert("ID and Title are required for update!");
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    setErrorMessage(null);
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle(listName)
                            .items.getById(parseInt(idToUpdate, 10))
                            .update({
                            Title: title,
                        })];
                case 2:
                    _a.sent();
                    alert("Item updated successfully!");
                    setIdToUpdate("");
                    setTitle("");
                    return [4 /*yield*/, fetchItems()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    setErrorMessage("Failed to update item. Please check the ID or try again.");
                    console.error("Update Item Error: ", error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var deleteItem = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    setErrorMessage(null);
                    return [4 /*yield*/, sp.web.lists.getByTitle(listName).items.getById(id).delete()];
                case 1:
                    _a.sent();
                    alert("Item deleted successfully!");
                    return [4 /*yield*/, fetchItems()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    setErrorMessage("Failed to delete item. Please try again.");
                    console.error("Delete Item Error: ", error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { style: { padding: "20px", fontFamily: "Arial" } },
        React.createElement("h2", null, "SPFx CRUD Operations"),
        errorMessage && (React.createElement("div", { style: { color: "red", marginBottom: "10px" } }, errorMessage)),
        React.createElement("div", null,
            React.createElement("input", { type: "text", placeholder: "Enter title", value: title, onChange: function (e) { return setTitle(e.target.value); }, style: { marginRight: "10px" } }),
            React.createElement("input", { type: "number", placeholder: "Enter ID (for update only)", value: idToUpdate, onChange: function (e) { return setIdToUpdate(e.target.value); }, style: { marginRight: "10px" } }),
            React.createElement("button", { onClick: createItem, style: { marginRight: "10px" } }, "Create"),
            React.createElement("button", { onClick: updateItem, style: { marginRight: "10px" } }, "Update")),
        React.createElement("table", { style: { marginTop: "20px", width: "100%" } },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "Title"),
                    React.createElement("th", null, "Actions"))),
            React.createElement("tbody", null, items.map(function (item) { return (React.createElement("tr", { key: item.Id },
                React.createElement("td", null, item.Id),
                React.createElement("td", null, item.Title),
                React.createElement("td", null,
                    React.createElement("button", { onClick: function () { return deleteItem(item.Id); } }, "Delete")))); })))));
};
export default SPFxCRUD;
//# sourceMappingURL=SPFxCRUD.js.map