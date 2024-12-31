define("0f8c56c6-ff11-452a-a679-708e66886062_0.0.1", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-property-pane","@microsoft/sp-webpart-base","HelloWorldWebPartStrings"], (__WEBPACK_EXTERNAL_MODULE__2650__, __WEBPACK_EXTERNAL_MODULE__2729__, __WEBPACK_EXTERNAL_MODULE__3878__, __WEBPACK_EXTERNAL_MODULE__4723__, __WEBPACK_EXTERNAL_MODULE__3134__, __WEBPACK_EXTERNAL_MODULE__3070__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8427:
/*!**********************************************************!*\
  !*** ./lib/webparts/helloWorld/components/HelloWorld.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_lib_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react/lib/Stack */ 277);
/* harmony import */ var _SPFxCRUD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPFxCRUD */ 8502);
var __extends = (undefined && undefined.__extends) || (function () {
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



var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_lib_Stack__WEBPACK_IMPORTED_MODULE_2__.Stack, { horizontalAlign: "center", verticalAlign: "center", styles: { root: { height: '100%' } } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SPFxCRUD__WEBPACK_IMPORTED_MODULE_1__["default"], { listName: 'MyList' })));
    };
    return HelloWorld;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorld);


/***/ }),

/***/ 8502:
/*!********************************************************!*\
  !*** ./lib/webparts/helloWorld/components/SPFxCRUD.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/sp/webs */ 3867);
/* harmony import */ var _pnp_sp_lists_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp/lists/web */ 2519);
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/lists */ 2033);
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/items */ 9721);
/* harmony import */ var _pnpConfigFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pnpConfigFile */ 6586);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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







var SPFxCRUD = function (_a) {
    var listName = _a.listName;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), items = _b[0], setItems = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), title = _c[0], setTitle = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""), idToUpdate = _d[0], setIdToUpdate = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), errorMessage = _e[0], setErrorMessage = _e[1];
    var sp = (0,_pnpConfigFile__WEBPACK_IMPORTED_MODULE_5__.getSP)();
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
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { padding: "20px", fontFamily: "Arial" } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "SPFx CRUD Operations"),
        errorMessage && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { color: "red", marginBottom: "10px" } }, errorMessage)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", placeholder: "Enter title", value: title, onChange: function (e) { return setTitle(e.target.value); }, style: { marginRight: "10px" } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "number", placeholder: "Enter ID (for update only)", value: idToUpdate, onChange: function (e) { return setIdToUpdate(e.target.value); }, style: { marginRight: "10px" } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { onClick: createItem, style: { marginRight: "10px" } }, "Create"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { onClick: updateItem, style: { marginRight: "10px" } }, "Update")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { style: { marginTop: "20px", width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "ID"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Title"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Actions"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, items.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: item.Id },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, item.Id),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, item.Title),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { onClick: function () { return deleteItem(item.Id); } }, "Delete")))); })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SPFxCRUD);


/***/ }),

/***/ 6586:
/*!**************************************************!*\
  !*** ./lib/webparts/helloWorld/pnpConfigFile.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSP: () => (/* binding */ getSP),
/* harmony export */   initializePnP: () => (/* binding */ initializePnP)
/* harmony export */ });
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/sp */ 7881);

var sp;
var initializePnP = function (context) {
    sp = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.spfi)().using((0,_pnp_sp__WEBPACK_IMPORTED_MODULE_0__.SPFx)(context));
};
var getSP = function () {
    if (!sp) {
        throw new Error("PnPjs is not initialized. Call initializePnP with the SPFx context first.");
    }
    return sp;
};


/***/ }),

/***/ 4878:
/*!*************************************************************************!*\
  !*** ./node_modules/@fluentui/foundation-legacy/lib/createComponent.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComponent: () => (/* binding */ createComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/style-utilities */ 5856);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/utilities */ 1210);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/utilities */ 2419);
/* harmony import */ var _slots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slots */ 8298);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities */ 2090);






/**
 * Assembles a higher order component based on the following: styles, theme, view, and state.
 * Imposes a separation of concern and centralizes styling processing to increase ease of use and robustness
 * in how components use and apply styling and theming.
 *
 * Automatically merges and applies themes and styles with theme / styleprops having the highest priority.
 * State component, if provided, is passed in props for processing. Props from state / user are automatically processed
 * and styled before finally being passed to view.
 *
 * State components should contain all stateful behavior and should not generate any JSX, but rather simply call
 * the view prop.
 *
 * Views should simply be stateless pure functions that receive all props needed for rendering their output.
 *
 * State component is optional. If state is not provided, created component is essentially a functional
 * stateless component.
 *
 * @param options - component Component options. See IComponentOptions for more detail.
 */
function createComponent(view, options) {
    if (options === void 0) { options = {}; }
    var _a = options.factoryOptions, factoryOptions = _a === void 0 ? {} : _a;
    var defaultProp = factoryOptions.defaultProp;
    var ResultComponent = function (componentProps) {
        var settings = _getCustomizations(options.displayName, react__WEBPACK_IMPORTED_MODULE_0__.useContext(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.CustomizerContext), options.fields);
        var stateReducer = options.state;
        if (stateReducer) {
            // Don't assume state will return all props, so spread useState result over component props.
            componentProps = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, componentProps), stateReducer(componentProps));
        }
        var theme = componentProps.theme || settings.theme;
        var tokens = _resolveTokens(componentProps, theme, options.tokens, settings.tokens, componentProps.tokens);
        var styles = _resolveStyles(componentProps, theme, tokens, options.styles, settings.styles, componentProps.styles);
        var viewProps = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, componentProps), { styles: styles, tokens: tokens, _defaultStyles: styles, theme: theme });
        return view(viewProps);
    };
    ResultComponent.displayName = options.displayName || view.name;
    // If a shorthand prop is defined, create a factory for the component.
    // TODO: This shouldn't be a concern of createComponent.. factoryOptions should just be forwarded.
    //       Need to weigh creating default factories on component creation vs. memoizing them on use in slots.tsx.
    if (defaultProp) {
        ResultComponent.create = (0,_slots__WEBPACK_IMPORTED_MODULE_4__.createFactory)(ResultComponent, { defaultProp: defaultProp });
    }
    (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.assign)(ResultComponent, options.statics);
    // Later versions of TypeSript should allow us to merge objects in a type safe way and avoid this cast.
    return ResultComponent;
}
/**
 * Resolve all styles functions with both props and tokens and flatten results along with all styles objects.
 */
function _resolveStyles(props, theme, tokens) {
    var allStyles = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        allStyles[_i - 3] = arguments[_i];
    }
    return _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_1__.concatStyleSets.apply(void 0, allStyles.map(function (styles) {
        return typeof styles === 'function' ? styles(props, theme, tokens) : styles;
    }));
}
/**
 * Resolve all tokens functions with props flatten results along with all tokens objects.
 */
function _resolveTokens(props, theme) {
    var allTokens = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allTokens[_i - 2] = arguments[_i];
    }
    var tokens = {};
    for (var _a = 0, allTokens_1 = allTokens; _a < allTokens_1.length; _a++) {
        var currentTokens = allTokens_1[_a];
        if (currentTokens) {
            // TODO: why is this cast needed? TS seems to think there is a (TToken | Function) union from somewhere.
            currentTokens =
                typeof currentTokens === 'function'
                    ? currentTokens(props, theme)
                    : currentTokens;
            if (Array.isArray(currentTokens)) {
                currentTokens = _resolveTokens.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([props, theme], currentTokens, false));
            }
            (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.assign)(tokens, currentTokens);
        }
    }
    return tokens;
}
/**
 * Helper function for calling Customizations.getSettings falling back to default fields.
 *
 * @param displayName Displayable name for component.
 * @param context React context passed to component containing contextual settings.
 * @param fields Optional list of properties to grab from global store and context.
 */
function _getCustomizations(displayName, context, fields) {
    // TODO: do we want field props? should fields be part of IComponent and used here?
    // TODO: should we centrally define DefaultFields? (not exported from styling)
    // TODO: tie this array to ICustomizationProps, such that each array element is keyof ICustomizationProps
    var DefaultFields = ['theme', 'styles', 'tokens'];
    return _fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.Customizations.getSettings(fields || DefaultFields, displayName, context.customizations);
}


/***/ }),

/***/ 8298:
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/foundation-legacy/lib/slots.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFactory: () => (/* binding */ createFactory),
/* harmony export */   getSlots: () => (/* binding */ getSlots),
/* harmony export */   withSlots: () => (/* binding */ withSlots)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/merge-styles */ 8467);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/utilities */ 5457);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/utilities */ 6068);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ 2090);





/**
 * This function is required for any module that uses slots.
 *
 * This function is a slot resolver that automatically evaluates slot functions to generate React elements.
 * A byproduct of this resolver is that it removes slots from the React hierarchy by bypassing React.createElement.
 *
 * To use this function on a per-file basis, use the jsx directive targeting withSlots.
 * This directive must be the FIRST LINE in the file to work correctly.
 * Usage of this pragma also requires withSlots import statement.
 *
 * See React.createElement
 */
// Can't use typeof on React.createElement since it's overloaded. Approximate createElement's signature for now
// and widen as needed.
function withSlots(type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var slotType = type;
    if (slotType.isSlot) {
        // Since we are bypassing createElement, use React.Children.toArray to make sure children are
        // properly assigned keys.
        // TODO: should this be mutating? does React mutate children subprop with createElement?
        // TODO: will toArray clobber existing keys?
        // TODO: React generates warnings because it doesn't detect hidden member _store that is set in createElement.
        //        Even children passed to createElement without keys don't generate this warning.
        //        Is there a better way to prevent slots from appearing in hierarchy? toArray doesn't address root issue.
        children = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
        // TODO: There is something weird going on here with children embedded in props vs. rest args.
        // Comment out these lines to see. Make sure this function is doing the right things.
        if (children.length === 0) {
            return slotType(props);
        }
        return slotType((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, props), { children: children }));
    }
    else {
        // TODO: Are there some cases where children should NOT be spread? Also, spreading reraises perf question.
        //        Children had to be spread to avoid breaking KeytipData in Toggle.view:
        //        react-dom.development.js:18931 Uncaught TypeError: children is not a function
        //        Without spread, function child is a child array of one element
        // TODO: is there a reason this can't be:
        // return React.createElement.apply(this, arguments);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(react__WEBPACK_IMPORTED_MODULE_0__, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([type, props], children, false));
    }
}
/**
 * This function creates factories that render ouput depending on the user ISlotProp props passed in.
 * @param DefaultComponent - Base component to render when not overridden by user props.
 * @param options - Factory options, including defaultProp value for shorthand prop mapping.
 * @returns ISlotFactory function used for rendering slots.
 */
function createFactory(DefaultComponent, options) {
    if (options === void 0) { options = {}; }
    var _a = options.defaultProp, defaultProp = _a === void 0 ? 'children' : _a;
    var result = function (componentProps, userProps, userSlotOptions, defaultStyles, theme) {
        // If they passed in raw JSX, just return that.
        if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(userProps)) {
            return userProps;
        }
        var flattenedUserProps = _translateShorthand(defaultProp, userProps);
        var finalProps = _constructFinalProps(defaultStyles, theme, componentProps, flattenedUserProps);
        if (userSlotOptions) {
            if (userSlotOptions.component) {
                // TODO: Remove cast if possible. This cast is needed because TS errors on the intrinsic portion of ReactType.
                // return <userSlotOptions.component {...finalProps} />;
                var UserComponent = userSlotOptions.component;
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(UserComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, finalProps));
            }
            if (userSlotOptions.render) {
                return userSlotOptions.render(finalProps, DefaultComponent);
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, finalProps));
    };
    return result;
}
/**
 * Default factory for components without explicit factories.
 */
var defaultFactory = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.memoizeFunction)(function (type) { return createFactory(type); });
/**
 * This function generates slots that can be used in JSX given a definition of slots and their corresponding types.
 * @param userProps - Props as pass to component.
 * @param slots - Slot definition object defining the default slot component for each slot.
 * @returns A set of created slots that components can render in JSX.
 */
function getSlots(userProps, slots) {
    var result = {};
    // userProps already has default props mixed in by createComponent. Recast here to gain typing for this function.
    var mixedProps = userProps;
    var _loop_1 = function (name_1) {
        if (slots.hasOwnProperty(name_1)) {
            // This closure method requires the use of withSlots to prevent unnecessary rerenders. This is because React
            // detects each closure as a different component (since it is a new instance) from the previous one and then
            // forces a rerender of the entire slot subtree. For now, the only way to avoid this is to use withSlots, which
            // bypasses the call to React.createElement.
            var slot = function (componentProps) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (args.length > 0) {
                    // If React.createElement is being incorrectly used with slots, there will be additional arguments.
                    // We can detect these additional arguments and error on their presence.
                    throw new Error('Any module using getSlots must use withSlots. Please see withSlots javadoc for more info.');
                }
                // TODO: having TS infer types here seems to cause infinite loop.
                //   use explicit types or casting to preserve typing if possible.
                // TODO: this should be a lookup on TProps property instead of being TProps directly, which is probably
                //   causing the infinite loop
                return _renderSlot(slots[name_1], 
                // TODO: this cast to any is hiding a relationship issue between the first two args
                componentProps, mixedProps[name_1], mixedProps.slots && mixedProps.slots[name_1], 
                // _defaultStyles should always be present, but a check for existence is added to make view tests
                // easier to use.
                mixedProps._defaultStyles && mixedProps._defaultStyles[name_1], mixedProps.theme);
            };
            slot.isSlot = true;
            result[name_1] = slot;
        }
    };
    for (var name_1 in slots) {
        _loop_1(name_1);
    }
    return result;
}
/**
 * Helper function that translates shorthand as needed.
 * @param defaultProp
 * @param slotProps
 */
function _translateShorthand(defaultProp, slotProps) {
    var _a;
    var transformedProps;
    if (typeof slotProps === 'string' || typeof slotProps === 'number' || typeof slotProps === 'boolean') {
        transformedProps = (_a = {},
            _a[defaultProp] = slotProps,
            _a);
    }
    else {
        transformedProps = slotProps;
    }
    return transformedProps;
}
/**
 * Helper function that constructs final styles and props given a series of props ordered by increasing priority.
 */
function _constructFinalProps(defaultStyles, theme) {
    var allProps = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allProps[_i - 2] = arguments[_i];
    }
    var finalProps = {};
    var classNames = [];
    for (var _a = 0, allProps_1 = allProps; _a < allProps_1.length; _a++) {
        var props = allProps_1[_a];
        classNames.push(props && props.className);
        (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.assign)(finalProps, props);
    }
    finalProps.className = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__.mergeCss)([defaultStyles, classNames], { rtl: (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getRTL)(theme) });
    return finalProps;
}
/**
 * Render a slot given component and user props. Uses component factory if available, otherwise falls back
 * to default factory.
 * @param ComponentType Factory component type.
 * @param componentProps The properties passed into slot from within the component.
 * @param userProps The user properties passed in from outside of the component.
 */
function _renderSlot(ComponentType, componentProps, userProps, slotOptions, defaultStyles, theme) {
    if (ComponentType.create !== undefined) {
        return ComponentType.create(componentProps, userProps, slotOptions, defaultStyles);
    }
    else {
        // TODO: need to resolve typing / generic issues passing through memoizeFunction. for now, cast to 'unknown'
        return defaultFactory(ComponentType)(componentProps, userProps, slotOptions, defaultStyles, theme);
    }
}


/***/ }),

/***/ 2090:
/*!*******************************************************************!*\
  !*** ./node_modules/@fluentui/foundation-legacy/lib/utilities.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assign: () => (/* binding */ assign)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 93);

var assign = tslib__WEBPACK_IMPORTED_MODULE_0__.__assign;


/***/ }),

/***/ 9099:
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/StyleOptionsState.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyleOptions: () => (/* binding */ getStyleOptions),
/* harmony export */   setRTL: () => (/* binding */ setRTL)
/* harmony export */ });
/* unused harmony export getRTL */
/* harmony import */ var _shadowConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadowConfig */ 379);

/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl =
            // eslint-disable-next-line no-restricted-globals
            typeof document !== 'undefined' &&
                // eslint-disable-next-line no-restricted-globals
                !!document.documentElement &&
                // eslint-disable-next-line no-restricted-globals
                document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
// This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
// was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
// logic into two lines, however, allows it to work in both scenarios.
var _rtl;
_rtl = getRTL();
function getStyleOptions() {
    return {
        rtl: getRTL(),
        shadowConfig: _shadowConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_SHADOW_CONFIG,
    };
}


/***/ }),

/***/ 1017:
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/Stylesheet.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stylesheet: () => (/* binding */ Stylesheet)
/* harmony export */ });
/* unused harmony exports InjectionMode, STYLESHEET_SETTING */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var _shadowConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadowConfig */ 379);


var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2,
};
var STYLESHEET_SETTING = '__stylesheet__';
/**
 * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
 * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
 */
var REUSE_STYLE_NODE = typeof navigator !== 'undefined' && /rv:11.0/.test(navigator.userAgent);
var _global = {};
// Grab window.
try {
    // Why the cast?
    // if compiled/type checked in same program with `@fluentui/font-icons-mdl2` which extends `Window` on global
    // ( check packages/font-icons-mdl2/src/index.ts ) the definitions don't match! Thus the need of this extra assertion
    _global = (window || {});
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config, serializedStylesheet) {
        var _a, _b, _c, _d, _e, _f;
        this._rules = [];
        this._preservedRules = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onInsertRuleCallbacks = [];
        this._onResetCallbacks = [];
        this._classNameToArgs = {};
        // If there is no document we won't have an element to inject into.
        this._config = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ injectionMode: typeof document === 'undefined' ? InjectionMode.none : InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
        this._classNameToArgs = (_a = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.classNameToArgs) !== null && _a !== void 0 ? _a : this._classNameToArgs;
        this._counter = (_b = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.counter) !== null && _b !== void 0 ? _b : this._counter;
        this._keyToClassName = (_d = (_c = this._config.classNameCache) !== null && _c !== void 0 ? _c : serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.keyToClassName) !== null && _d !== void 0 ? _d : this._keyToClassName;
        this._preservedRules = (_e = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.preservedRules) !== null && _e !== void 0 ? _e : this._preservedRules;
        this._rules = (_f = serializedStylesheet === null || serializedStylesheet === void 0 ? void 0 : serializedStylesheet.rules) !== null && _f !== void 0 ? _f : this._rules;
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function (shadowConfig) {
        _stylesheet = _global[STYLESHEET_SETTING];
        if (_global[_shadowConfig__WEBPACK_IMPORTED_MODULE_1__.SHADOW_DOM_STYLESHEET_SETTING]) {
            return _global[_shadowConfig__WEBPACK_IMPORTED_MODULE_1__.SHADOW_DOM_STYLESHEET_SETTING].getInstance(shadowConfig);
        }
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            var fabricConfig = (_global === null || _global === void 0 ? void 0 : _global.FabricConfig) || {};
            var stylesheet = new Stylesheet(fabricConfig.mergeStyles, fabricConfig.serializedStylesheet);
            _stylesheet = stylesheet;
            _global[STYLESHEET_SETTING] = stylesheet;
        }
        return _stylesheet;
    };
    /**
     * Serializes the Stylesheet instance into a format which allows rehydration on creation.
     * @returns string representation of `ISerializedStylesheet` interface.
     */
    Stylesheet.prototype.serialize = function () {
        return JSON.stringify({
            classNameToArgs: this._classNameToArgs,
            counter: this._counter,
            keyToClassName: this._keyToClassName,
            preservedRules: this._preservedRules,
            rules: this._rules,
        });
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._config), config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     * @returns function which when called un-registers provided callback.
     */
    Stylesheet.prototype.onReset = function (callback) {
        var _this = this;
        this._onResetCallbacks.push(callback);
        return function () {
            _this._onResetCallbacks = _this._onResetCallbacks.filter(function (cb) { return cb !== callback; });
        };
    };
    /**
     * Configures an insert rule callback.
     *
     * @param callback - A callback which will be called when a rule is inserted.
     * @returns function which when called un-registers provided callback.
     */
    Stylesheet.prototype.onInsertRule = function (callback) {
        var _this = this;
        this._onInsertRuleCallbacks.push(callback);
        return function () {
            _this._onInsertRuleCallbacks = _this._onInsertRuleCallbacks.filter(function (cb) { return cb !== callback; });
        };
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "".concat(namespace ? namespace + '-' : '').concat(prefix, "-").concat(this._counter++);
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[this._getCacheKey(key)] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules,
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[this._getCacheKey(key)];
    };
    /**
     * Gets all classnames cache with the stylesheet.
     */
    Stylesheet.prototype.getClassNameCache = function () {
        return this._keyToClassName;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the rules associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve, stylesheetKey) {
        if (stylesheetKey === void 0) { stylesheetKey = _shadowConfig__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_STYLESHEET_KEY; }
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (injectionMode) {
                case InjectionMode.insertNode:
                    this._insertRuleIntoSheet(element.sheet, rule);
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        // eslint-disable-next-line deprecation/deprecation
        if (this._config.onInsertRule) {
            // eslint-disable-next-line deprecation/deprecation
            this._config.onInsertRule(rule);
        }
        this._onInsertRuleCallbacks.forEach(function (callback) {
            return callback({ key: stylesheetKey, sheet: (element ? element.sheet : undefined), rule: rule });
        });
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return (includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._createStyleElement = function () {
        var _a;
        var doc = ((_a = this._config.window) === null || _a === void 0 ? void 0 : _a.document) || document;
        var head = doc.head;
        var styleElement = doc.createElement('style');
        var nodeToInsertBefore = null;
        styleElement.setAttribute('data-merge-styles', 'true');
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement) {
            // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
            nodeToInsertBefore = this._lastStyleElement.nextElementSibling;
        }
        else {
            var placeholderStyleTag = this._findPlaceholderStyleTag();
            if (placeholderStyleTag) {
                nodeToInsertBefore = placeholderStyleTag.nextElementSibling;
            }
            else {
                nodeToInsertBefore = head.childNodes[0];
            }
        }
        head.insertBefore(styleElement, head.contains(nodeToInsertBefore) ? nodeToInsertBefore : null);
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    Stylesheet.prototype._insertRuleIntoSheet = function (sheet, rule) {
        if (!sheet) {
            return false;
        }
        try {
            sheet.insertRule(rule, sheet.cssRules.length);
            return true;
        }
        catch (e) {
            // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
            // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
            // which could be slower and bulkier.
        }
        return false;
    };
    Stylesheet.prototype._getCacheKey = function (key) {
        return key;
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement) {
            this._styleElement = this._createStyleElement();
            if (!REUSE_STYLE_NODE) {
                // Reset the style element on the next frame.
                var win = this._config.window || window;
                win.requestAnimationFrame(function () {
                    _this._styleElement = undefined;
                });
            }
        }
        return this._styleElement;
    };
    Stylesheet.prototype._findPlaceholderStyleTag = function () {
        var head = document.head;
        if (head) {
            return head.querySelector('style[data-merge-styles]');
        }
        return null;
    };
    return Stylesheet;
}());



/***/ }),

/***/ 1371:
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/concatStyleSets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatStyleSets: () => (/* binding */ concatStyleSets)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var _shadowConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadowConfig */ 379);


/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    if (styleSets &&
        styleSets.length === 1 &&
        styleSets[0] &&
        !styleSets[0].subComponentStyles &&
        !(0,_shadowConfig__WEBPACK_IMPORTED_MODULE_0__.isShadowConfig)(styleSets[0])) {
        return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet && !(0,_shadowConfig__WEBPACK_IMPORTED_MODULE_0__.isShadowConfig)(currentSet)) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (Array.isArray(mergedValue) ? mergedValue : [mergedValue]), true), (Array.isArray(currentValue) ? currentValue : [currentValue]), true);
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}


/***/ }),

/***/ 9596:
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/extractStyleParts.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractStyleParts: () => (/* binding */ extractStyleParts)
/* harmony export */ });
/* harmony import */ var _shadowConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadowConfig */ 379);

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts(sheet) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = sheet;
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg && !(0,_shadowConfig__WEBPACK_IMPORTED_MODULE_0__.isShadowConfig)(arg)) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects,
    };
}


/***/ }),

/***/ 5714:
/*!*************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/fontFace.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontFace: () => (/* binding */ fontFace)
/* harmony export */ });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleOptionsState */ 9099);
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ 1017);
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleToClassName */ 679);



/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
    var rule = (0,_styleToClassName__WEBPACK_IMPORTED_MODULE_1__.serializeRuleEntries)((0,_StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__.getStyleOptions)(), font);
    var className = stylesheet.classNameFromKey(rule);
    if (className) {
        return;
    }
    var name = stylesheet.getClassName();
    stylesheet.insertRule("@font-face{".concat(rule, "}"), true);
    stylesheet.cacheClassName(name, rule, [], ['font-face', rule]);
}


/***/ }),

/***/ 1126:
/*!**********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/getVendorSettings.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVendorSettings: () => (/* binding */ getVendorSettings)
/* harmony export */ });
/* unused harmony export setVendorSettings */
var _vendorSettings;
function getVendorSettings() {
    var _a;
    if (!_vendorSettings) {
        // eslint-disable-next-line no-restricted-globals
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = (_a = nav === null || nav === void 0 ? void 0 : nav.userAgent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true,
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent))),
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}


/***/ }),

/***/ 8467:
/*!****************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/mergeStyles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeCss: () => (/* binding */ mergeCss)
/* harmony export */ });
/* unused harmony export mergeStyles */
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extractStyleParts */ 9596);
/* harmony import */ var _shadowConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadowConfig */ 379);
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleOptionsState */ 9099);
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stylesheet */ 1017);
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styleToClassName */ 679);





/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mergeCss(args, (0,_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__.getStyleOptions)());
}
/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 * Accepts a set of options that will be used when calculating styles.
 *
 * @public
 */
function mergeCss(args, options) {
    var styleArgs = args instanceof Array ? args : [args];
    var opts = options || {};
    var hasShadowConfig = (0,_shadowConfig__WEBPACK_IMPORTED_MODULE_1__.isShadowConfig)(styleArgs[0]);
    if (hasShadowConfig) {
        opts.shadowConfig = styleArgs[0];
    }
    opts.stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_2__.Stylesheet.getInstance(opts.shadowConfig);
    var _a = (0,_extractStyleParts__WEBPACK_IMPORTED_MODULE_3__.extractStyleParts)(opts.stylesheet, styleArgs), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push((0,_styleToClassName__WEBPACK_IMPORTED_MODULE_4__.styleToClassName)(opts, objects));
    }
    return classes.join(' ');
}


/***/ }),

/***/ 379:
/*!*****************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/shadowConfig.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SHADOW_CONFIG: () => (/* binding */ DEFAULT_SHADOW_CONFIG),
/* harmony export */   GLOBAL_STYLESHEET_KEY: () => (/* binding */ GLOBAL_STYLESHEET_KEY),
/* harmony export */   SHADOW_DOM_STYLESHEET_SETTING: () => (/* binding */ SHADOW_DOM_STYLESHEET_SETTING),
/* harmony export */   isShadowConfig: () => (/* binding */ isShadowConfig)
/* harmony export */ });
/* unused harmony export makeShadowConfig */
var GLOBAL_STYLESHEET_KEY = '__global__';
var SHADOW_DOM_STYLESHEET_SETTING = '__shadow_dom_stylesheet__';
var DEFAULT_SHADOW_CONFIG = {
    stylesheetKey: GLOBAL_STYLESHEET_KEY,
    inShadow: false,
    window: undefined,
    __isShadowConfig__: true,
};
var makeShadowConfig = function (stylesheetKey, inShadow, window) {
    return {
        stylesheetKey: stylesheetKey,
        inShadow: inShadow,
        window: window,
        __isShadowConfig__: true,
    };
};
var isShadowConfig = function (value) {
    if (!(value && isRecord(value))) {
        return false;
    }
    return value.__isShadowConfig__ === true;
};
function isRecord(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}


/***/ }),

/***/ 679:
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/styleToClassName.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeRuleEntries: () => (/* binding */ serializeRuleEntries),
/* harmony export */   styleToClassName: () => (/* binding */ styleToClassName)
/* harmony export */ });
/* unused harmony exports styleToRegistration, applyRegistration */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stylesheet */ 1017);
/* harmony import */ var _transforms_kebabRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transforms/kebabRules */ 7854);
/* harmony import */ var _transforms_prefixRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms/prefixRules */ 4391);
/* harmony import */ var _transforms_provideUnits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms/provideUnits */ 6851);
/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transforms/rtlifyRules */ 2492);
/* harmony import */ var _tokenizeWithParentheses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenizeWithParentheses */ 2468);







var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(".concat(v.trim(), ")"); })
                    .join(', '),
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo
        .reverse()
        .reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function isSelector(potentialSelector) {
    return potentialSelector.indexOf(':global(') >= 0 || potentialSelector.indexOf(':') === 0;
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':host(') === 0) {
        return newSelector;
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractSelector(currentSelector, rules, selector, value, stylesheet) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (selector.indexOf('@') === 0) {
        selector = selector + '{' + currentSelector;
        extractRules([value], rules, selector, stylesheet);
    }
    else if (selector.indexOf(',') > -1) {
        expandCommaSeparatedGlobals(selector)
            .split(',')
            .map(function (s) { return s.trim(); })
            .forEach(function (separatedSelector) {
            return extractRules([value], rules, expandSelector(separatedSelector, currentSelector), stylesheet);
        });
    }
    else {
        extractRules([value], rules, expandSelector(selector, currentSelector), stylesheet);
    }
}
function extractRules(args, rules, currentSelector, stylesheet) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector, stylesheet);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector, stylesheet);
        }
        else {
            for (var prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    var propValue = arg[prop];
                    if (prop === 'selectors') {
                        // every child is a selector.
                        var selectors = arg.selectors;
                        for (var newSelector in selectors) {
                            if (selectors.hasOwnProperty(newSelector)) {
                                extractSelector(currentSelector, rules, newSelector, selectors[newSelector], stylesheet);
                            }
                        }
                    }
                    else if (typeof propValue === 'object' || isSelector(prop)) {
                        // prop is a selector.
                        if (propValue !== null && propValue !== undefined) {
                            extractSelector(currentSelector, rules, prop, propValue, stylesheet);
                        }
                    }
                    else {
                        if (propValue !== undefined) {
                            // Else, add the rule to the currentSelector.
                            if (prop === 'margin' || prop === 'padding') {
                                expandQuads(currentRules, prop, propValue);
                            }
                            else {
                                currentRules[prop] = propValue;
                            }
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? (0,_tokenizeWithParentheses__WEBPACK_IMPORTED_MODULE_0__.tokenizeWithParentheses)(value) : [value];
    if (parts.length === 0) {
        parts.push(value);
    }
    if (parts[parts.length - 1] === '!important') {
        // Remove !important from parts, and append it to each part individually
        parts = parts.slice(0, -1).map(function (p) { return p + ' !important'; });
    }
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(options, rules) {
    var serialized = [options.rtl ? 'rtl' : 'ltr'];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function repeatString(target, count) {
    if (count <= 0) {
        return '';
    }
    if (count === 1) {
        return target;
    }
    return target + repeatString(target, count - 1);
}
function serializeRuleEntries(options, ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        (0,_transforms_kebabRules__WEBPACK_IMPORTED_MODULE_1__.kebabRules)(allEntries, i);
        (0,_transforms_provideUnits__WEBPACK_IMPORTED_MODULE_2__.provideUnits)(allEntries, i);
        (0,_transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_3__.rtlifyRules)(options, allEntries, i);
        (0,_transforms_prefixRules__WEBPACK_IMPORTED_MODULE_4__.prefixRules)(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration(options) {
    var _a;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var stylesheet = (_a = options.stylesheet) !== null && _a !== void 0 ? _a : _Stylesheet__WEBPACK_IMPORTED_MODULE_5__.Stylesheet.getInstance(options.shadowConfig);
    var rules = extractRules(args, undefined, undefined, stylesheet);
    var key = getKeyForRules(options, rules);
    if (key) {
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args,
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _b = 0, _c = rules.__order; _b < _c.length; _b++) {
                var selector = _c[_b];
                rulesToInsert.push(selector, serializeRuleEntries(options, rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
    return undefined;
}
/**
 * Insert style to stylesheet.
 * @param registration Style registration.
 * @param specificityMultiplier Number of times classname selector is repeated in the css rule.
 * This is to increase css specificity in case it's needed. Default to 1.
 */
function applyRegistration(registration, specificityMultiplier, shadowConfig, sheet) {
    if (specificityMultiplier === void 0) { specificityMultiplier = 1; }
    var stylesheet = sheet !== null && sheet !== void 0 ? sheet : _Stylesheet__WEBPACK_IMPORTED_MODULE_5__.Stylesheet.getInstance(shadowConfig);
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                selector = selector.replace(/&/g, repeatString(".".concat(registration.className), specificityMultiplier));
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = "".concat(selector, "{").concat(rules, "}").concat(selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([options], args, false));
    if (registration) {
        applyRegistration(registration, options.specificityMultiplier, options.shadowConfig, options.stylesheet);
        return registration.className;
    }
    return '';
}


/***/ }),

/***/ 2468:
/*!****************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/tokenizeWithParentheses.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tokenizeWithParentheses: () => (/* binding */ tokenizeWithParentheses)
/* harmony export */ });
/**
 * Split a string into tokens separated by whitespace, except all text within parentheses
 * is treated as a single token (whitespace is ignored within parentheses).
 *
 * Unlike String.split(' '), multiple consecutive space characters are collapsed and
 * removed from the returned array (including leading and trailing spaces).
 *
 * For example:
 * `tokenizeWithParentheses("3px calc(var(--x) / 2) 9px    0 ")`
 *   => `["3px", "calc(var(--x) / 2)", "9px", "0"]`
 *
 * @returns The array of tokens. Returns an empty array if the string was empty or contained only whitespace.
 */
function tokenizeWithParentheses(value) {
    var parts = [];
    var partStart = 0;
    var parens = 0;
    for (var i = 0; i < value.length; i++) {
        switch (value[i]) {
            case '(':
                parens++;
                break;
            case ')':
                if (parens) {
                    parens--;
                }
                break;
            case '\t':
            case ' ':
                if (!parens) {
                    // Add the new part if it's not an empty string
                    if (i > partStart) {
                        parts.push(value.substring(partStart, i));
                    }
                    partStart = i + 1;
                }
                break;
        }
    }
    // Add the last part
    if (partStart < value.length) {
        parts.push(value.substring(partStart));
    }
    return parts;
}


/***/ }),

/***/ 7854:
/*!**************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/kebabRules.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kebabRules: () => (/* binding */ kebabRules)
/* harmony export */ });
var rules = {};
function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    if (rule.charAt(0) !== '-') {
        rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
}


/***/ }),

/***/ 4391:
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/prefixRules.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefixRules: () => (/* binding */ prefixRules)
/* harmony export */ });
/* harmony import */ var _getVendorSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getVendorSettings */ 1126);

var autoPrefixNames = {
    'user-select': 1,
};
function prefixRules(rulePairs, index) {
    var vendorSettings = (0,_getVendorSettings__WEBPACK_IMPORTED_MODULE_0__.getVendorSettings)();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}


/***/ }),

/***/ 6851:
/*!****************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/provideUnits.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideUnits: () => (/* binding */ provideUnits)
/* harmony export */ });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom',
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var isNonPixelProp = NON_PIXEL_NUMBER_PROPS.indexOf(name) > -1;
        var isVariableOrPrefixed = name.indexOf('--') > -1;
        var unit = isNonPixelProp || isVariableOrPrefixed ? '' : 'px';
        rulePairs[index + 1] = "".concat(value).concat(unit);
    }
}


/***/ }),

/***/ 2492:
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/merge-styles/lib/transforms/rtlifyRules.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rtlifyRules: () => (/* binding */ rtlifyRules)
/* harmony export */ });
var _a;
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize',
};
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(options, rulePairs, index) {
    if (options.rtl) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return "".concat(parts[0], " ").concat(parts[3], " ").concat(parts[2], " ").concat(parts[1]);
        }
    }
    return value;
}


/***/ }),

/***/ 277:
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Stack/Stack.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/foundation-legacy */ 8298);
/* harmony import */ var _fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/foundation-legacy */ 4878);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ 9146);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ 8345);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ 3568);
/* harmony import */ var _Stack_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stack.styles */ 9330);
/* harmony import */ var _StackItem_StackItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StackItem/StackItem */ 4609);

/** @jsxRuntime classic */
/** @jsx withSlots */





var StackView = function (props) {
    var _a = props.as, RootType = _a === void 0 ? 'div' : _a, _b = props.disableShrink, disableShrink = _b === void 0 ? false : _b, 
    // eslint-disable-next-line deprecation/deprecation
    _c = props.doNotRenderFalsyValues, 
    // eslint-disable-next-line deprecation/deprecation
    doNotRenderFalsyValues = _c === void 0 ? false : _c, _d = props.enableScopedSelectors, enableScopedSelectors = _d === void 0 ? false : _d, wrap = props.wrap, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(props, ["as", "disableShrink", "doNotRenderFalsyValues", "enableScopedSelectors", "wrap"]);
    (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.warnDeprecations)('Stack', props, {
        gap: 'tokens.childrenGap',
        maxHeight: 'tokens.maxHeight',
        maxWidth: 'tokens.maxWidth',
        padding: 'tokens.padding',
    });
    var stackChildren = _processStackChildren(props.children, {
        disableShrink: disableShrink,
        enableScopedSelectors: enableScopedSelectors,
        doNotRenderFalsyValues: doNotRenderFalsyValues,
    });
    var nativeProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.getNativeProps)(rest, _Utilities__WEBPACK_IMPORTED_MODULE_3__.htmlElementProperties);
    var Slots = (0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_4__.getSlots)(props, {
        root: RootType,
        inner: 'div',
    });
    if (wrap) {
        return ((0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_4__.withSlots)(Slots.root, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, nativeProps),
            (0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_4__.withSlots)(Slots.inner, null, stackChildren)));
    }
    return (0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_4__.withSlots)(Slots.root, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, nativeProps), stackChildren);
};
function _processStackChildren(children, _a) {
    var disableShrink = _a.disableShrink, enableScopedSelectors = _a.enableScopedSelectors, doNotRenderFalsyValues = _a.doNotRenderFalsyValues;
    var childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
    childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childrenArray, function (child) {
        if (!child) {
            return doNotRenderFalsyValues ? null : child;
        }
        // We need to allow children that aren't falsy values, but not valid elements since they could be
        // a string like <Stack>{'sample string'}</Stack>
        if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
            return child;
        }
        if (child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
            return child.props.children
                ? _processStackChildren(child.props.children, { disableShrink: disableShrink, enableScopedSelectors: enableScopedSelectors, doNotRenderFalsyValues: doNotRenderFalsyValues })
                : null;
        }
        var childAsReactElement = child;
        var defaultItemProps = {};
        if (_isStackItem(child)) {
            defaultItemProps = { shrink: !disableShrink };
        }
        var childClassName = childAsReactElement.props.className;
        return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(childAsReactElement, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, defaultItemProps), childAsReactElement.props), (childClassName && { className: childClassName })), (enableScopedSelectors && { className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.css)(_Stack_styles__WEBPACK_IMPORTED_MODULE_6__.GlobalClassNames.child, childClassName) })));
    });
    return childrenArray;
}
function _isStackItem(item) {
    // In theory, we should be able to just check item.type === StackItem.
    // However, under certain unclear circumstances (see https://github.com/microsoft/fluentui/issues/10785),
    // the object identity is different despite the function implementation being the same.
    return (!!item &&
        typeof item === 'object' &&
        !!item.type &&
        // StackItem is generated by createComponent, so we need to check its displayName instead of name
        item.type.displayName === _StackItem_StackItem__WEBPACK_IMPORTED_MODULE_7__.StackItem.displayName);
}
var StackStatics = {
    Item: _StackItem_StackItem__WEBPACK_IMPORTED_MODULE_7__.StackItem,
};
var Stack = (0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_8__.createComponent)(StackView, {
    displayName: 'Stack',
    styles: _Stack_styles__WEBPACK_IMPORTED_MODULE_6__.styles,
    statics: StackStatics,
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ }),

/***/ 9330:
/*!***************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Stack/Stack.styles.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalClassNames: () => (/* binding */ GlobalClassNames),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ 5856);
/* harmony import */ var _StackItem_StackItem_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StackItem/StackItem.styles */ 8663);
/* harmony import */ var _StackUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StackUtils */ 1741);




var nameMap = {
    start: 'flex-start',
    end: 'flex-end',
};
var GlobalClassNames = {
    root: 'ms-Stack',
    inner: 'ms-Stack-inner',
    child: 'ms-Stack-child',
};
var styles = function (props, theme, tokens) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var className = props.className, disableShrink = props.disableShrink, enableScopedSelectors = props.enableScopedSelectors, grow = props.grow, horizontal = props.horizontal, horizontalAlign = props.horizontalAlign, reversed = props.reversed, verticalAlign = props.verticalAlign, verticalFill = props.verticalFill, wrap = props.wrap;
    var classNames = (0,_Styling__WEBPACK_IMPORTED_MODULE_0__.getGlobalClassNames)(GlobalClassNames, theme);
    /* eslint-disable deprecation/deprecation */
    var childrenGap = tokens && tokens.childrenGap ? tokens.childrenGap : props.gap;
    var maxHeight = tokens && tokens.maxHeight ? tokens.maxHeight : props.maxHeight;
    var maxWidth = tokens && tokens.maxWidth ? tokens.maxWidth : props.maxWidth;
    var padding = tokens && tokens.padding ? tokens.padding : props.padding;
    /* eslint-enable deprecation/deprecation */
    var _p = (0,_StackUtils__WEBPACK_IMPORTED_MODULE_1__.parseGap)(childrenGap, theme), rowGap = _p.rowGap, columnGap = _p.columnGap;
    var horizontalMargin = "".concat(-0.5 * columnGap.value).concat(columnGap.unit);
    var verticalMargin = "".concat(-0.5 * rowGap.value).concat(rowGap.unit);
    // styles to be applied to all direct children regardless of wrap or direction
    var childStyles = {
        textOverflow: 'ellipsis',
    };
    var childSelector = '> ' + (enableScopedSelectors ? '.' + GlobalClassNames.child : '*');
    var disableShrinkStyles = (_a = {},
        // flexShrink styles are applied by the StackItem
        _a["".concat(childSelector, ":not(.").concat(_StackItem_StackItem_styles__WEBPACK_IMPORTED_MODULE_2__.GlobalClassNames.root, ")")] = {
            flexShrink: 0,
        },
        _a);
    if (wrap) {
        return {
            root: [
                classNames.root,
                {
                    flexWrap: 'wrap',
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    width: 'auto',
                    overflow: 'visible',
                    height: '100%',
                },
                horizontalAlign && (_b = {},
                    _b[horizontal ? 'justifyContent' : 'alignItems'] = nameMap[horizontalAlign] || horizontalAlign,
                    _b),
                verticalAlign && (_c = {},
                    _c[horizontal ? 'alignItems' : 'justifyContent'] = nameMap[verticalAlign] || verticalAlign,
                    _c),
                className,
                {
                    // not allowed to be overridden by className
                    // since this is necessary in order to prevent collapsing margins
                    display: 'flex',
                },
                horizontal && {
                    height: verticalFill ? '100%' : 'auto',
                },
            ],
            inner: [
                classNames.inner,
                (_d = {
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginLeft: horizontalMargin,
                        marginRight: horizontalMargin,
                        marginTop: verticalMargin,
                        marginBottom: verticalMargin,
                        overflow: 'visible',
                        boxSizing: 'border-box',
                        padding: (0,_StackUtils__WEBPACK_IMPORTED_MODULE_1__.parsePadding)(padding, theme),
                        // avoid unnecessary calc() calls if horizontal gap is 0
                        width: columnGap.value === 0 ? '100%' : "calc(100% + ".concat(columnGap.value).concat(columnGap.unit, ")"),
                        maxWidth: '100vw'
                    },
                    _d[childSelector] = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ margin: "".concat(0.5 * rowGap.value).concat(rowGap.unit, " ").concat(0.5 * columnGap.value).concat(columnGap.unit) }, childStyles),
                    _d),
                disableShrink && disableShrinkStyles,
                horizontalAlign && (_e = {},
                    _e[horizontal ? 'justifyContent' : 'alignItems'] = nameMap[horizontalAlign] || horizontalAlign,
                    _e),
                verticalAlign && (_f = {},
                    _f[horizontal ? 'alignItems' : 'justifyContent'] = nameMap[verticalAlign] || verticalAlign,
                    _f),
                horizontal && (_g = {
                        flexDirection: reversed ? 'row-reverse' : 'row',
                        // avoid unnecessary calc() calls if vertical gap is 0
                        height: rowGap.value === 0 ? '100%' : "calc(100% + ".concat(rowGap.value).concat(rowGap.unit, ")")
                    },
                    _g[childSelector] = {
                        maxWidth: columnGap.value === 0 ? '100%' : "calc(100% - ".concat(columnGap.value).concat(columnGap.unit, ")"),
                    },
                    _g),
                !horizontal && (_h = {
                        flexDirection: reversed ? 'column-reverse' : 'column',
                        height: "calc(100% + ".concat(rowGap.value).concat(rowGap.unit, ")")
                    },
                    _h[childSelector] = {
                        maxHeight: rowGap.value === 0 ? '100%' : "calc(100% - ".concat(rowGap.value).concat(rowGap.unit, ")"),
                    },
                    _h),
            ],
        };
    }
    return {
        root: [
            classNames.root,
            (_j = {
                    display: 'flex',
                    flexDirection: horizontal ? (reversed ? 'row-reverse' : 'row') : reversed ? 'column-reverse' : 'column',
                    flexWrap: 'nowrap',
                    width: 'auto',
                    height: verticalFill ? '100%' : 'auto',
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    padding: (0,_StackUtils__WEBPACK_IMPORTED_MODULE_1__.parsePadding)(padding, theme),
                    boxSizing: 'border-box'
                },
                _j[childSelector] = childStyles,
                _j),
            disableShrink && disableShrinkStyles,
            grow && {
                flexGrow: grow === true ? 1 : grow,
            },
            horizontalAlign && (_k = {},
                _k[horizontal ? 'justifyContent' : 'alignItems'] = nameMap[horizontalAlign] || horizontalAlign,
                _k),
            verticalAlign && (_l = {},
                _l[horizontal ? 'alignItems' : 'justifyContent'] = nameMap[verticalAlign] || verticalAlign,
                _l),
            horizontal &&
                columnGap.value > 0 && (_m = {},
                // apply gap margin to every direct child except the first direct child if the direction is not reversed,
                // and the last direct one if it is
                _m[reversed ? "".concat(childSelector, ":not(:last-child)") : "".concat(childSelector, ":not(:first-child)")] = {
                    marginLeft: "".concat(columnGap.value).concat(columnGap.unit),
                },
                _m),
            !horizontal &&
                rowGap.value > 0 && (_o = {},
                // apply gap margin to every direct child except the first direct child if the direction is not reversed,
                // and the last direct one if it is
                _o[reversed ? "".concat(childSelector, ":not(:last-child)") : "".concat(childSelector, ":not(:first-child)")] = {
                    marginTop: "".concat(rowGap.value).concat(rowGap.unit),
                },
                _o),
            className,
        ],
        // TODO: this cast may be hiding some potential issues with styling and name
        //        lookups and should be removed
    };
};


/***/ }),

/***/ 4609:
/*!**********************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Stack/StackItem/StackItem.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackItem: () => (/* binding */ StackItem)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var _fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/foundation-legacy */ 8298);
/* harmony import */ var _fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/foundation-legacy */ 4878);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ 8345);
/* harmony import */ var _StackItem_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StackItem.styles */ 8663);




var StackItemView = function (props) {
    var children = props.children;
    var nativeProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.getNativeProps)(props, _Utilities__WEBPACK_IMPORTED_MODULE_0__.htmlElementProperties);
    // eslint-disable-next-line eqeqeq
    if (children == null) {
        return null;
    }
    var Slots = (0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props, {
        root: 'div',
    });
    return (0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_1__.withSlots)(Slots.root, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, nativeProps), children);
};
var StackItem = (0,_fluentui_foundation_legacy__WEBPACK_IMPORTED_MODULE_3__.createComponent)(StackItemView, {
    displayName: 'StackItem',
    styles: _StackItem_styles__WEBPACK_IMPORTED_MODULE_4__.StackItemStyles,
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (StackItem);


/***/ }),

/***/ 8663:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Stack/StackItem/StackItem.styles.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalClassNames: () => (/* binding */ GlobalClassNames),
/* harmony export */   StackItemStyles: () => (/* binding */ StackItemStyles)
/* harmony export */ });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ 5856);

var GlobalClassNames = {
    root: 'ms-StackItem',
};
var alignMap = {
    start: 'flex-start',
    end: 'flex-end',
};
var StackItemStyles = function (props, theme, tokens) {
    var grow = props.grow, shrink = props.shrink, disableShrink = props.disableShrink, align = props.align, verticalFill = props.verticalFill, order = props.order, className = props.className, _a = props.basis, basis = _a === void 0 ? 'auto' : _a;
    var classNames = (0,_Styling__WEBPACK_IMPORTED_MODULE_0__.getGlobalClassNames)(GlobalClassNames, theme);
    return {
        root: [
            theme.fonts.medium,
            classNames.root,
            {
                flexBasis: basis,
                margin: tokens.margin,
                padding: tokens.padding,
                height: verticalFill ? '100%' : 'auto',
                width: 'auto',
            },
            grow && {
                flexGrow: grow === true ? 1 : grow,
            },
            (disableShrink || (!grow && !shrink)) && {
                flexShrink: 0,
            },
            shrink &&
                !disableShrink && {
                flexShrink: 1,
            },
            align && {
                alignSelf: alignMap[align] || align,
            },
            order && {
                order: order,
            },
            className,
        ],
        // TODO: this cast may be hiding some potential issues with styling and name
        //        lookups and should be removed
    };
};


/***/ }),

/***/ 1741:
/*!*************************************************************************!*\
  !*** ./node_modules/@fluentui/react/lib/components/Stack/StackUtils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseGap: () => (/* binding */ parseGap),
/* harmony export */   parsePadding: () => (/* binding */ parsePadding)
/* harmony export */ });
// Helper function that converts a themed spacing key (if given) to the corresponding themed spacing value.
var _getThemedSpacing = function (space, theme) {
    if (theme.spacing.hasOwnProperty(space)) {
        return theme.spacing[space];
    }
    return space;
};
// Helper function that takes a gap as a string and converts it into a { value, unit } representation.
var _getValueUnitGap = function (gap) {
    var numericalPart = parseFloat(gap);
    var numericalValue = isNaN(numericalPart) ? 0 : numericalPart;
    var numericalString = isNaN(numericalPart) ? '' : numericalPart.toString();
    var unitPart = gap.substring(numericalString.toString().length);
    return {
        value: numericalValue,
        unit: unitPart || 'px',
    };
};
/**
 * Takes in a gap size in either a CSS-style format (e.g. 10 or "10px")
 *  or a key of a themed spacing value (e.g. "s1").
 * Returns the separate numerical value of the padding (e.g. 10)
 *  and the CSS unit (e.g. "px").
 */
var parseGap = function (gap, theme) {
    if (gap === undefined || gap === '') {
        return {
            rowGap: {
                value: 0,
                unit: 'px',
            },
            columnGap: {
                value: 0,
                unit: 'px',
            },
        };
    }
    if (typeof gap === 'number') {
        return {
            rowGap: {
                value: gap,
                unit: 'px',
            },
            columnGap: {
                value: gap,
                unit: 'px',
            },
        };
    }
    var splitGap = gap.split(' ');
    // If the array has more than two values, then return 0px.
    if (splitGap.length > 2) {
        return {
            rowGap: {
                value: 0,
                unit: 'px',
            },
            columnGap: {
                value: 0,
                unit: 'px',
            },
        };
    }
    // If the array has two values, then parse each one.
    if (splitGap.length === 2) {
        return {
            rowGap: _getValueUnitGap(_getThemedSpacing(splitGap[0], theme)),
            columnGap: _getValueUnitGap(_getThemedSpacing(splitGap[1], theme)),
        };
    }
    // Else, parse the numerical value and pass it as both the vertical and horizontal gap.
    var calculatedGap = _getValueUnitGap(_getThemedSpacing(gap, theme));
    return {
        rowGap: calculatedGap,
        columnGap: calculatedGap,
    };
};
/**
 * Takes in a padding in a CSS-style format (e.g. 10, "10px", "10px 10px", etc.)
 *  where the separate padding values can also be the key of a themed spacing value
 *  (e.g. "s1 m", "10px l1 20px l2", etc.).
 * Returns a CSS-style padding.
 */
var parsePadding = function (padding, theme) {
    if (padding === undefined || typeof padding === 'number' || padding === '') {
        return padding;
    }
    var paddingValues = padding.split(' ');
    if (paddingValues.length < 2) {
        return _getThemedSpacing(padding, theme);
    }
    return paddingValues.reduce(function (padding1, padding2) {
        return _getThemedSpacing(padding1, theme) + ' ' + _getThemedSpacing(padding2, theme);
    });
};


/***/ }),

/***/ 9463:
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/set-version/lib/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setVersion: () => (/* reexport safe */ _setVersion__WEBPACK_IMPORTED_MODULE_0__.setVersion)
/* harmony export */ });
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setVersion */ 8043);


(0,_setVersion__WEBPACK_IMPORTED_MODULE_0__.setVersion)('@fluentui/set-version', '6.0.0');


/***/ }),

/***/ 8043:
/*!**************************************************************!*\
  !*** ./node_modules/@fluentui/set-version/lib/setVersion.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setVersion: () => (/* binding */ setVersion)
/* harmony export */ });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}


/***/ }),

/***/ 5856:
/*!*************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatStyleSets: () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_1__.concatStyleSets),
/* harmony export */   getGlobalClassNames: () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_0__.getGlobalClassNames)
/* harmony export */ });
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index */ 1967);
/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MergeStyles */ 1371);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ 7168);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/theme */ 5587);






// Ensure theme is initialized when this package is referenced.

(0,_styles_theme__WEBPACK_IMPORTED_MODULE_3__.initializeThemeInCustomizations)();


/***/ }),

/***/ 1967:
/*!**********************************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/styles/getGlobalClassNames.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGlobalClassNames: () => (/* binding */ getGlobalClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ 1017);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/utilities */ 5457);


/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.memoizeFunction)(function (classNames, disableGlobalClassNames) {
    var styleSheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.Stylesheet.getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}


/***/ }),

/***/ 5587:
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/styles/theme.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeThemeInCustomizations: () => (/* binding */ initializeThemeInCustomizations)
/* harmony export */ });
/* unused harmony exports ThemeSettingName, getTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, loadTheme */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/utilities */ 4362);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/utilities */ 2419);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/load-themed-styles */ 1919);
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/theme */ 3261);





var _theme = (0,_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__.createTheme)({});
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
function initializeThemeInCustomizations() {
    var _a;
    var _b, _c;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var win = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)();
    if ((_b = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _b === void 0 ? void 0 : _b.legacyTheme) {
        // does everything the `else` clause does and more, such as invoke legacy theming
        loadTheme(win.FabricConfig.legacyTheme);
    }
    else if (!_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.Customizations.getSettings([ThemeSettingName]).theme) {
        if ((_c = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _c === void 0 ? void 0 : _c.theme) {
            _theme = (0,_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__.createTheme)(win.FabricConfig.theme);
        }
        // Set the default theme.
        _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    }
}
initializeThemeInCustomizations();
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = (0,_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__.createTheme)({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    var _a;
    if (depComments === void 0) { depComments = false; }
    _theme = (0,_fluentui_theme__WEBPACK_IMPORTED_MODULE_1__.createTheme)(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    (0,_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__.loadTheme)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, _theme.palette), _theme.semanticColors), _theme.effects), _loadFonts(_theme)));
    _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
            var value = font[propName];
            if (propName === 'fontSize' && typeof value === 'number') {
                // if it's a number, convert it to px by default like our theming system does
                value = value + 'px';
            }
            lines[name_1] = value;
        }
    }
    return lines;
}


/***/ }),

/***/ 7168:
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/style-utilities/lib/version.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/set-version */ 9463);
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

(0,_fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__.setVersion)('@fluentui/style-utilities', '8.11.6');


/***/ }),

/***/ 6018:
/*!*******************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/colors/DefaultPalette.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultPalette: () => (/* binding */ DefaultPalette)
/* harmony export */ });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};


/***/ }),

/***/ 3261:
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/createTheme.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTheme: () => (/* binding */ createTheme)
/* harmony export */ });
/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors/index */ 6018);
/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/index */ 3875);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/index */ 1887);
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mergeThemes */ 2030);
/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spacing/index */ 1174);
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ 8539);






/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (theme === void 0) { theme = {}; }
    if (depComments === void 0) { depComments = false; }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
        palette: _colors_index__WEBPACK_IMPORTED_MODULE_0__.DefaultPalette,
        effects: _effects_index__WEBPACK_IMPORTED_MODULE_1__.DefaultEffects,
        fonts: _fonts_index__WEBPACK_IMPORTED_MODULE_2__.DefaultFontStyles,
        spacing: _spacing_index__WEBPACK_IMPORTED_MODULE_3__.DefaultSpacing,
        isInverted: isInverted,
        disableGlobalClassNames: false,
        semanticColors: (0,_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_4__.makeSemanticColors)(_colors_index__WEBPACK_IMPORTED_MODULE_0__.DefaultPalette, _effects_index__WEBPACK_IMPORTED_MODULE_1__.DefaultEffects, undefined, isInverted, depComments),
        rtl: undefined,
    };
    return (0,_mergeThemes__WEBPACK_IMPORTED_MODULE_5__.mergeThemes)(baseTheme, theme);
}


/***/ }),

/***/ 3875:
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/effects/DefaultEffects.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultEffects: () => (/* binding */ DefaultEffects)
/* harmony export */ });
/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentDepths */ 4210);

var DefaultEffects = {
    elevation4: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth4,
    elevation8: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth8,
    elevation16: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth16,
    elevation64: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px',
};


/***/ }),

/***/ 4210:
/*!******************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/effects/FluentDepths.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Depths: () => (/* binding */ Depths)
/* harmony export */ });
var Depths;
(function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
})(Depths || (Depths = {}));


/***/ }),

/***/ 1887:
/*!*********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/fonts/DefaultFontStyles.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultFontStyles: () => (/* binding */ DefaultFontStyles)
/* harmony export */ });
/* unused harmony export registerDefaultFontFaces */
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/merge-styles */ 5714);
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FluentFonts */ 2936);
/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFontStyles */ 6520);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/utilities */ 8286);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/utilities */ 4362);




// Default urls.
var DefaultBaseUrl = 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets';
// Standard font styling.
var DefaultFontStyles = (0,_createFontStyles__WEBPACK_IMPORTED_MODULE_0__.createFontStyles)((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.getLanguage)());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'".concat(fontFamily, "'");
    var localFontSrc = localFontName !== undefined ? "local('".concat(localFontName, "'),") : '';
    (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.fontFace)({
        fontFamily: fontFamily,
        src: localFontSrc + "url('".concat(url, ".woff2') format('woff2'),") + "url('".concat(url, ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = "".concat(baseUrl, "/").concat(cdnFolder, "/").concat(cdnFontName);
    _registerFontFace(fontFamily, urlBase + '-light', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.semibold, localFontName && localFontName + ' SemiBold');
    _registerFontFace(fontFamily, urlBase + '-bold', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.bold, localFontName && localFontName + ' Bold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = "".concat(baseUrl, "/fonts");
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Armenian, 'segoeui-armenian');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Georgian, 'segoeui-georgian');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', "".concat(fontUrl, "/leelawadeeui-thai/leelawadeeui-semilight"), _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', "".concat(fontUrl, "/leelawadeeui-thai/leelawadeeui-bold"), _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__.getWindow)()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return (_b = fabricConfig === null || fabricConfig === void 0 ? void 0 : fabricConfig.fontBaseUrl) !== null && _b !== void 0 ? _b : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());


/***/ }),

/***/ 2936:
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/fonts/FluentFonts.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontSizes: () => (/* binding */ FontSizes),
/* harmony export */   FontWeights: () => (/* binding */ FontWeights),
/* harmony export */   LocalizedFontFamilies: () => (/* binding */ LocalizedFontFamilies),
/* harmony export */   LocalizedFontNames: () => (/* binding */ LocalizedFontNames)
/* harmony export */ });
/* unused harmony export IconFontSizes */
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'".concat(LocalizedFontNames.Arabic, "'");
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'".concat(LocalizedFontNames.Cyrillic, "'");
    LocalizedFontFamilies.EastEuropean = "'".concat(LocalizedFontNames.EastEuropean, "'");
    LocalizedFontFamilies.Greek = "'".concat(LocalizedFontNames.Greek, "'");
    LocalizedFontFamilies.Hebrew = "'".concat(LocalizedFontNames.Hebrew, "'");
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'".concat(LocalizedFontNames.Selawik, "'");
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'".concat(LocalizedFontNames.Vietnamese, "'");
    LocalizedFontFamilies.WestEuropean = "'".concat(LocalizedFontNames.WestEuropean, "'");
    LocalizedFontFamilies.Armenian = "'".concat(LocalizedFontNames.Armenian, "'");
    LocalizedFontFamilies.Georgian = "'".concat(LocalizedFontNames.Georgian, "'");
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));


/***/ }),

/***/ 6520:
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/fonts/createFontStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFontStyles: () => (/* binding */ createFontStyles)
/* harmony export */ });
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FluentFonts */ 2936);

// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '".concat(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontNames.WestEuropean, "'");
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Arabic,
    bg: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Cyrillic,
    cs: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    el: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Greek,
    et: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    he: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Hebrew,
    hi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Hindi,
    hr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    hu: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    ja: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Japanese,
    kk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    ko: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Korean,
    lt: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    lv: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    pl: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    ru: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Cyrillic,
    sk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    'sr-latn': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    th: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Thai,
    tr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    uk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Cyrillic,
    vi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Vietnamese,
    'zh-hans': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.ChineseTraditional,
    hy: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Armenian,
    ka: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Georgian,
};
function _fontFamilyWithFallbacks(fontFamily) {
    return "".concat(fontFamily, ", ").concat(FontFamilyFallbacks);
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight,
    };
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
        tiny: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.mini, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        xSmall: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xSmall, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.small, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.smallPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.medium, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.mediumPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.large, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        xLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        xLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        xxLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xxLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        xxLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xxLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        superLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.superLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        mega: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.mega, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
    };
    return fontStyles;
}


/***/ }),

/***/ 2030:
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/mergeThemes.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeThemes: () => (/* binding */ mergeThemes)
/* harmony export */ });
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/utilities */ 4057);
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/makeSemanticColors */ 8539);


/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
function mergeThemes(theme, partialTheme) {
    var _a, _b, _c;
    if (partialTheme === void 0) { partialTheme = {}; }
    var mergedTheme = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.merge)({}, theme, partialTheme, {
        semanticColors: (0,_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__.getSemanticColors)(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted),
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
        mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
        for (var _i = 0, _d = Object.keys(mergedTheme.fonts); _i < _d.length; _i++) {
            var fontStyle = _d[_i];
            mergedTheme.fonts[fontStyle] = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.merge)(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_c = partialTheme === null || partialTheme === void 0 ? void 0 : partialTheme.fonts) === null || _c === void 0 ? void 0 : _c[fontStyle]);
        }
    }
    return mergedTheme;
}


/***/ }),

/***/ 1174:
/*!********************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/spacing/DefaultSpacing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultSpacing: () => (/* binding */ DefaultSpacing)
/* harmony export */ });
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px',
};


/***/ }),

/***/ 8539:
/*!**************************************************************************!*\
  !*** ./node_modules/@fluentui/theme/lib/utilities/makeSemanticColors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSemanticColors: () => (/* binding */ getSemanticColors),
/* harmony export */   makeSemanticColors: () => (/* binding */ makeSemanticColors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 93);

/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
function makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var semanticColors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ primaryButtonBorder: 'transparent', errorText: !isInverted ? '#a4262c' : '#F1707B', messageText: !isInverted ? '#323130' : '#F3F2F1', messageLink: !isInverted ? '#005A9E' : '#6CB8F6', messageLinkHovered: !isInverted ? '#004578' : '#82C7FF', infoIcon: !isInverted ? '#605e5c' : '#C8C6C4', errorIcon: !isInverted ? '#A80000' : '#F1707B', blockingIcon: !isInverted ? '#FDE7E9' : '#442726', warningIcon: !isInverted ? '#797775' : '#C8C6C4', severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100', successIcon: !isInverted ? '#107C10' : '#92C353', infoBackground: !isInverted ? '#f3f2f1' : '#323130', errorBackground: !isInverted ? '#FDE7E9' : '#442726', blockingBackground: !isInverted ? '#FDE7E9' : '#442726', warningBackground: !isInverted ? '#FFF4CE' : '#433519', severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F', successBackground: !isInverted ? '#DFF6DD' : '#393D1B', 
        // deprecated
        warningHighlight: !isInverted ? '#ffb900' : '#fff100', successText: !isInverted ? '#107C10' : '#92c353' }, s);
    var fullSemanticColors = getSemanticColors(p, e, semanticColors, isInverted);
    return _fixDeprecatedSlots(fullSemanticColors, depComments);
}
/**
 * Map partial platte and effects to partial semantic colors.
 */
function getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var result = {};
    // map palette
    var _a = p || {}, white = _a.white, black = _a.black, themePrimary = _a.themePrimary, themeDark = _a.themeDark, themeDarker = _a.themeDarker, themeDarkAlt = _a.themeDarkAlt, themeLighter = _a.themeLighter, neutralLight = _a.neutralLight, neutralLighter = _a.neutralLighter, neutralDark = _a.neutralDark, neutralQuaternary = _a.neutralQuaternary, neutralQuaternaryAlt = _a.neutralQuaternaryAlt, neutralPrimary = _a.neutralPrimary, neutralSecondary = _a.neutralSecondary, neutralSecondaryAlt = _a.neutralSecondaryAlt, neutralTertiary = _a.neutralTertiary, neutralTertiaryAlt = _a.neutralTertiaryAlt, neutralLighterAlt = _a.neutralLighterAlt, accent = _a.accent;
    if (white) {
        result.bodyBackground = white;
        result.bodyFrameBackground = white;
        result.accentButtonText = white;
        result.buttonBackground = white;
        result.primaryButtonText = white;
        result.primaryButtonTextHovered = white;
        result.primaryButtonTextPressed = white;
        result.inputBackground = white;
        result.inputForegroundChecked = white;
        result.listBackground = white;
        result.menuBackground = white;
        result.cardStandoutBackground = white;
    }
    if (black) {
        result.bodyTextChecked = black;
        result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
        result.link = themePrimary;
        result.primaryButtonBackground = themePrimary;
        result.inputBackgroundChecked = themePrimary;
        result.inputIcon = themePrimary;
        result.inputFocusBorderAlt = themePrimary;
        result.menuIcon = themePrimary;
        result.menuHeader = themePrimary;
        result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
        result.primaryButtonBackgroundPressed = themeDark;
        result.inputBackgroundCheckedHovered = themeDark;
        result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
        result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
        result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
        result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
        result.bodyBackgroundChecked = neutralLight;
        result.bodyFrameDivider = neutralLight;
        result.bodyDivider = neutralLight;
        result.variantBorder = neutralLight;
        result.buttonBackgroundCheckedHovered = neutralLight;
        result.buttonBackgroundPressed = neutralLight;
        result.listItemBackgroundChecked = neutralLight;
        result.listHeaderBackgroundPressed = neutralLight;
        result.menuItemBackgroundPressed = neutralLight;
        // eslint-disable-next-line deprecation/deprecation
        result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
        result.bodyBackgroundHovered = neutralLighter;
        result.buttonBackgroundHovered = neutralLighter;
        result.buttonBackgroundDisabled = neutralLighter;
        result.buttonBorderDisabled = neutralLighter;
        result.primaryButtonBackgroundDisabled = neutralLighter;
        result.disabledBackground = neutralLighter;
        result.listItemBackgroundHovered = neutralLighter;
        result.listHeaderBackgroundHovered = neutralLighter;
        result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
        result.primaryButtonTextDisabled = neutralQuaternary;
        result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
        result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
        result.disabledBodyText = neutralTertiary;
        result.variantBorderHovered = (s === null || s === void 0 ? void 0 : s.variantBorderHovered) || neutralTertiary;
        result.buttonTextDisabled = neutralTertiary;
        result.inputIconDisabled = neutralTertiary;
        result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
        result.bodyText = neutralPrimary;
        result.actionLink = neutralPrimary;
        result.buttonText = neutralPrimary;
        result.inputBorderHovered = neutralPrimary;
        result.inputText = neutralPrimary;
        result.listText = neutralPrimary;
        result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
        result.bodyStandoutBackground = neutralLighterAlt;
        result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
        result.actionLinkHovered = neutralDark;
        result.buttonTextHovered = neutralDark;
        result.buttonTextChecked = neutralDark;
        result.buttonTextPressed = neutralDark;
        result.inputTextHovered = neutralDark;
        result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
        result.bodySubtext = neutralSecondary;
        result.focusBorder = neutralSecondary;
        result.inputBorder = neutralSecondary;
        result.smallInputBorder = neutralSecondary;
        result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
        result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
        result.disabledBodySubtext = neutralTertiaryAlt;
        result.disabledBorder = neutralTertiaryAlt;
        result.buttonBackgroundChecked = neutralTertiaryAlt;
        result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
        result.accentButtonBackground = accent;
    }
    // map effects
    if (e === null || e === void 0 ? void 0 : e.elevation4) {
        result.cardShadow = e.elevation4;
    }
    if (!isInverted && (e === null || e === void 0 ? void 0 : e.elevation8)) {
        result.cardShadowHovered = e.elevation8;
    }
    else if (result.variantBorderHovered) {
        result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, result), s);
    return result;
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    /* eslint-disable deprecation/deprecation */
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /* eslint-enable deprecation/deprecation */
    return s;
}


/***/ }),

/***/ 7848:
/*!****************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/GlobalSettings.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalSettings: () => (/* binding */ GlobalSettings)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ 4362);

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key,
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _getGlobalSettings() {
    var _a;
    var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}


/***/ }),

/***/ 5194:
/*!**********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/KeyCodes.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyCodes: () => (/* binding */ KeyCodes)
/* harmony export */ });
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    colon: 58,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /* eslint-disable @typescript-eslint/naming-convention */
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /* eslint-enable @typescript-eslint/naming-convention */
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
};


/***/ }),

/***/ 3568:
/*!*****************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/css.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css)
/* harmony export */ });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                for (var key in arg) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}


/***/ }),

/***/ 2419:
/*!*******************************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/customizations/Customizations.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Customizations: () => (/* binding */ Customizations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 93);
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GlobalSettings */ 7848);


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_0__.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false,
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _allSettings.settings), settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _allSettings.scopedSettings[scopeName]), settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch (_a) {
            /* do nothing */
        }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());



/***/ }),

/***/ 1210:
/*!**********************************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/customizations/CustomizerContext.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizerContext: () => (/* binding */ CustomizerContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CustomizerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {},
    },
});


/***/ }),

/***/ 420:
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/dom/canUseDOM.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM)
/* harmony export */ });
/**
 * Verifies if an application can use DOM.
 */
function canUseDOM() {
    return (
    // eslint-disable-next-line no-restricted-globals
    typeof window !== 'undefined' &&
        !!(
        // eslint-disable-next-line no-restricted-globals, deprecation/deprecation
        (window.document && window.document.createElement)));
}


/***/ }),

/***/ 9525:
/*!*****************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/dom/getDocument.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocument: () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ 420);

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth.
 *
 * @public
 */
function getDocument(rootElement) {
    // eslint-disable-next-line no-restricted-globals
    if (!(0,_canUseDOM__WEBPACK_IMPORTED_MODULE_0__.canUseDOM)() || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        // eslint-disable-next-line no-restricted-globals
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}


/***/ }),

/***/ 4362:
/*!***************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/dom/getWindow.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWindow: () => (/* binding */ getWindow)
/* harmony export */ });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ 420);

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    // eslint-disable-next-line no-restricted-globals
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (!(0,_canUseDOM__WEBPACK_IMPORTED_MODULE_0__.canUseDOM)() || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}


/***/ }),

/***/ 8286:
/*!**********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/language.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLanguage: () => (/* binding */ getLanguage)
/* harmony export */ });
/* unused harmony export setLanguage */
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getDocument */ 9525);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ 3928);
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionStorage */ 80);



// Default to undefined so that we initialize on first read.
var _language;
var STORAGE_KEY = 'language';
/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
 */
function getLanguage(persistenceType) {
    if (persistenceType === void 0) { persistenceType = 'sessionStorage'; }
    if (_language === undefined) {
        var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
        var savedLanguage = persistenceType === 'localStorage'
            ? _localStorage__WEBPACK_IMPORTED_MODULE_1__.getItem(STORAGE_KEY)
            : persistenceType === 'sessionStorage'
                ? _sessionStorage__WEBPACK_IMPORTED_MODULE_2__.getItem(STORAGE_KEY)
                : undefined;
        if (savedLanguage) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
function setLanguage(language, persistenceParam) {
    var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var persistenceType = persistenceParam === true ? 'none' : !persistenceParam ? 'sessionStorage' : persistenceParam;
    if (persistenceType === 'localStorage') {
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.setItem(STORAGE_KEY, language);
    }
    else if (persistenceType === 'sessionStorage') {
        _sessionStorage__WEBPACK_IMPORTED_MODULE_2__.setItem(STORAGE_KEY, language);
    }
    _language = language;
}


/***/ }),

/***/ 3928:
/*!**************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/localStorage.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getItem: () => (/* binding */ getItem),
/* harmony export */   setItem: () => (/* binding */ setItem)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ 4362);

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}


/***/ }),

/***/ 5457:
/*!*********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/memoize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoizeFunction: () => (/* binding */ memoizeFunction)
/* harmony export */ });
/* unused harmony exports setMemoizeWeakMap, resetMemoizations, memoize, createMemoizer */
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/merge-styles */ 1017);

var _initializedStylesheetResets = false;
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(_target, _key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        },
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    if (ignoreNullOrUndefinedResult === void 0) { ignoreNullOrUndefinedResult = false; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    if (!_initializedStylesheetResets) {
        var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
        if (stylesheet && stylesheet.onReset) {
            _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance().onReset(resetMemoizations);
        }
        _initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
            currentNode.value = cb.apply(void 0, args);
        }
        return currentNode.value;
    };
}
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
function createMemoizer(getValue) {
    if (!_weakMap) {
        // Without a `WeakMap` implementation, memoization is not possible.
        return getValue;
    }
    var cache = new _weakMap();
    function memoizedGetValue(input) {
        if (!input || (typeof input !== 'function' && typeof input !== 'object')) {
            // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
            // All other inputs cannot be memoized against in this manner.
            return getValue(input);
        }
        if (cache.has(input)) {
            return cache.get(input);
        }
        var value = getValue(input);
        cache.set(input, value);
        return value;
    }
    return memoizedGetValue;
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null,
    };
}


/***/ }),

/***/ 4057:
/*!*******************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/merge.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
                var value = source[name_1];
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    var isCircularReference = circularReferences.indexOf(value) > -1;
                    target[name_1] = (isCircularReference ? value : _merge(target[name_1] || {}, value, circularReferences));
                }
                else {
                    target[name_1] = value;
                }
            }
        }
    }
    circularReferences.pop();
    return target;
}


/***/ }),

/***/ 8345:
/*!************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/properties.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNativeProps: () => (/* binding */ getNativeProps),
/* harmony export */   htmlElementProperties: () => (/* binding */ htmlElementProperties)
/* harmony export */ });
/* unused harmony exports baseElementEvents, baseElementProperties, labelProperties, audioProperties, videoProperties, olProperties, liProperties, anchorProperties, buttonProperties, inputProperties, textAreaProperties, selectProperties, optionProperties, tableProperties, trProperties, thProperties, tdProperties, colGroupProperties, colProperties, formProperties, iframeProperties, imgProperties, imageProperties, divProperties */
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name', // global
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
var labelProperties = toObjectMap(htmlElementProperties, [
    'form', // button, fieldset, input, label, meter, object, output, select, textarea
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
var audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
var videoProperties = toObjectMap(audioProperties, [
    'poster', // video
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
var olProperties = toObjectMap(htmlElementProperties, [
    'start', // ol
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
var liProperties = toObjectMap(htmlElementProperties, [
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type', // a, button, input, link, menu, object, script, source, style
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value', // button, input, li, option, meter, progress, param,
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'minLength',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'minLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap', // textarea
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
var selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required', // input, select, textarea
]);
var optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value', // button, input, li, option, meter, progress, param
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
var tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing', // table
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
var trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
var thProperties = toObjectMap(htmlElementProperties, [
    'rowSpan',
    'scope', // th
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
var tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope', // th
]);
var colGroupProperties = toObjectMap(htmlElementProperties, [
    'span', // col, colgroup
]);
var colProperties = toObjectMap(htmlElementProperties, [
    'span', // col, colgroup
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
var formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target', // form
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
var iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width', // canvas, embed, iframe, img, input, object, video,
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width', // canvas, embed, iframe, img, input, object, video
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
var imageProperties = imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}


/***/ }),

/***/ 6068:
/*!*****************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/rtl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRTL: () => (/* binding */ getRTL)
/* harmony export */ });
/* unused harmony exports setRTL, getRTLSafeKeyCode */
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyCodes */ 5194);
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/getDocument */ 9525);
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessionStorage */ 80);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/merge-styles */ 9099);




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL(theme) {
    if (theme === void 0) { theme = {}; }
    if (theme.rtl !== undefined) {
        return theme.rtl;
    }
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = (0,_sessionStorage__WEBPACK_IMPORTED_MODULE_0__.getItem)(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__.getDocument)();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.setRTL)(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__.getDocument)();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        (0,_sessionStorage__WEBPACK_IMPORTED_MODULE_0__.setItem)(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.setRTL)(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key, theme) {
    if (theme === void 0) { theme = {}; }
    if (getRTL(theme)) {
        if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.left) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.right;
        }
        else if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.right) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.left;
        }
    }
    return key;
}


/***/ }),

/***/ 80:
/*!****************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/sessionStorage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getItem: () => (/* binding */ getItem),
/* harmony export */   setItem: () => (/* binding */ setItem)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/getWindow */ 4362);

/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
        result = win ? win.sessionStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    var _a;
    try {
        (_a = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}


/***/ }),

/***/ 7500:
/*!***********************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/warn/warn.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warn: () => (/* binding */ warn)
/* harmony export */ });
/* unused harmony export setWarningCallback */
/* eslint-disable no-console */
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && "development" !== 'production') {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}


/***/ }),

/***/ 9146:
/*!***********************************************************************!*\
  !*** ./node_modules/@fluentui/utilities/lib/warn/warnDeprecations.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnDeprecations: () => (/* binding */ warnDeprecations)
/* harmony export */ });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ 7500);

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (true) {
        for (var propName in deprecationMap) {
            if (props && propName in props) {
                var deprecationMessage = "".concat(componentName, " property '").concat(propName, "' was used but has been deprecated.");
                var replacementPropName = deprecationMap[propName];
                if (replacementPropName) {
                    deprecationMessage += " Use '".concat(replacementPropName, "' instead.");
                }
                (0,_warn__WEBPACK_IMPORTED_MODULE_0__.warn)(deprecationMessage);
            }
        }
    }
}


/***/ }),

/***/ 1919:
/*!*********************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib-es6/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadTheme: () => (/* binding */ loadTheme)
/* harmony export */ });
/* unused harmony exports loadStyles, configureLoadStyles, configureRunMode, flush, clearStyles, detokenize, splitStyles */
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? __webpack_require__.g : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* ClearStyleOptions.all */; }
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}


/***/ }),

/***/ 93:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray)
/* harmony export */ });
/* unused harmony exports __extends, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 3878:
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__3878__;

/***/ }),

/***/ 4723:
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__4723__;

/***/ }),

/***/ 3134:
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__3134__;

/***/ }),

/***/ 3070:
/*!*******************************************!*\
  !*** external "HelloWorldWebPartStrings" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__3070__;

/***/ }),

/***/ 2650:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__2650__;

/***/ }),

/***/ 2729:
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__2729__;

/***/ }),

/***/ 4340:
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/node_modules/tslib/tslib.es6.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __decorate: () => (/* binding */ __decorate)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),

/***/ 4346:
/*!***************************************************************!*\
  !*** ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __decorate: () => (/* binding */ __decorate)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ }),

/***/ 4337:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/copy-from.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyFrom: () => (/* binding */ CopyFrom)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ 2165);
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../timeline.js */ 447);


/**
 * Behavior that will copy all the observers in the source timeline and apply it to the incoming instance
 *
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @param filter If provided filters the moments from which the observers are copied. It should return true for each moment to include.
 * @returns The mutated this
 */
function CopyFrom(source, behavior = "append", filter) {
    return (instance) => {
        return Reflect.apply(copyObservers, instance, [source, behavior, filter]);
    };
}
/**
 * Function with implied this allows us to access protected members
 *
 * @param this The timeline whose observers we will copy
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @returns The mutated this
 */
function copyObservers(source, behavior, filter) {
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(source) || !(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(source.observers)) {
        return this;
    }
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunc)(filter)) {
        filter = () => true;
    }
    const clonedSource = (0,_timeline_js__WEBPACK_IMPORTED_MODULE_0__.cloneObserverCollection)(source.observers);
    const keys = Object.keys(clonedSource).filter(filter);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const on = this.on[key];
        if (behavior === "replace") {
            on.clear();
        }
        const momentObservers = clonedSource[key];
        momentObservers.forEach(v => on(v));
    }
    return this;
}


/***/ }),

/***/ 1971:
/*!*****************************************!*\
  !*** ./node_modules/@pnp/core/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyFrom: () => (/* reexport safe */ _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_4__.CopyFrom),
/* harmony export */   PnPClientStorage: () => (/* reexport safe */ _storage_js__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorage),
/* harmony export */   Timeline: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.Timeline),
/* harmony export */   asyncBroadcast: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.asyncBroadcast),
/* harmony export */   asyncReduce: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.asyncReduce),
/* harmony export */   broadcast: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.broadcast),
/* harmony export */   combine: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.combine),
/* harmony export */   dateAdd: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.dateAdd),
/* harmony export */   delay: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.delay),
/* harmony export */   getGUID: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.getGUID),
/* harmony export */   getHashCode: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.getHashCode),
/* harmony export */   hOP: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.hOP),
/* harmony export */   isArray: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isArray),
/* harmony export */   isFunc: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isFunc),
/* harmony export */   isUrlAbsolute: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.isUrlAbsolute),
/* harmony export */   jsS: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.jsS),
/* harmony export */   lifecycle: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.lifecycle),
/* harmony export */   noInherit: () => (/* reexport safe */ _timeline_js__WEBPACK_IMPORTED_MODULE_3__.noInherit),
/* harmony export */   objectDefinedNotNull: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull),
/* harmony export */   reduce: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.reduce),
/* harmony export */   request: () => (/* reexport safe */ _moments_js__WEBPACK_IMPORTED_MODULE_2__.request),
/* harmony export */   stringIsNullOrEmpty: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.stringIsNullOrEmpty)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ 1922);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ 2165);
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.js */ 7955);
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ 447);
/* harmony import */ var _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/copy-from.js */ 4337);




/**
 * Behavior exports
 */




/***/ }),

/***/ 7955:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/moments.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncBroadcast: () => (/* binding */ asyncBroadcast),
/* harmony export */   asyncReduce: () => (/* binding */ asyncReduce),
/* harmony export */   broadcast: () => (/* binding */ broadcast),
/* harmony export */   lifecycle: () => (/* binding */ lifecycle),
/* harmony export */   reduce: () => (/* binding */ reduce),
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 2165);

/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
function broadcast() {
    return function (observers, ...args) {
        const obs = [...observers];
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
    };
}
/**
 * Defines a moment that executes each observer asynchronously in parallel awaiting all promises to resolve or reject before continuing
 *
 * @returns The final set of arguments
 */
function asyncBroadcast() {
    return async function (observers, ...args) {
        // get our initial values
        const r = args;
        const obs = [...observers];
        const promises = [];
        for (let i = 0; i < obs.length; i++) {
            promises.push(Reflect.apply(obs[i], this, r));
        }
        return Promise.all(promises);
    };
}
/**
 * Defines a moment that executes each observer synchronously, passing the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function reduce() {
    return function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((params, func) => Reflect.apply(func, this, params), args);
    };
}
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function asyncReduce() {
    return async function (observers, ...args) {
        const obs = [...observers];
        return obs.reduce((prom, func) => prom.then((params) => Reflect.apply(func, this, params)), Promise.resolve(args));
    };
}
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
function request() {
    return async function (observers, ...args) {
        if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(observers) || observers.length < 1) {
            return undefined;
        }
        const handler = observers[0];
        return Reflect.apply(handler, this, args);
    };
}
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
function lifecycle() {
    return function (observers, ...args) {
        const obs = [...observers];
        // process each handler which updates our instance in order
        // very similar to asyncReduce but the state is the object itself
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
        return this;
    };
}


/***/ }),

/***/ 1922:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PnPClientStorage: () => (/* binding */ PnPClientStorage)
/* harmony export */ });
/* unused harmony export PnPClientStorageWrapper */
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 2165);

let storageShim;
function getStorageShim() {
    if (typeof storageShim === "undefined") {
        storageShim = new MemoryStorage();
    }
    return storageShim;
}
/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store) {
        this.store = store;
        this.enabled = this.test();
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    async getOrPut(key, getter, expire) {
        if (!this.enabled) {
            return getter();
        }
        let o = this.get(key);
        if (o === null) {
            o = await getter();
            this.put(key, o, expire);
        }
        return o;
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    async deleteExpired() {
        if (!this.enabled) {
            return;
        }
        for (let i = 0; i < this.store.length; i++) {
            const key = this.store.key(i);
            if (key !== null) {
                // test the stored item to see if we stored it
                if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                    // get those items as get will delete from cache if they are expired
                    await this.get(key);
                }
            }
        }
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            expire = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "minute", 5);
        }
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.jsS)({ pnp: 1, expiration: expire, value: o });
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage, substituting basic memory storage for nodejs
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof localStorage === "undefined" ? getStorageShim() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof sessionStorage === "undefined" ? getStorageShim() : sessionStorage);
        }
        return this._session;
    }
}


/***/ }),

/***/ 447:
/*!********************************************!*\
  !*** ./node_modules/@pnp/core/timeline.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   cloneObserverCollection: () => (/* binding */ cloneObserverCollection),
/* harmony export */   noInherit: () => (/* binding */ noInherit)
/* harmony export */ });
/* unused harmony export once */
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moments.js */ 7955);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ 2165);


/**
 * Field name to hold any flags on observer functions used to modify their behavior
 */
const flags = Symbol.for("ObserverLifecycleFlags");
/**
 * Creates a filter function for use in Array.filter that will filter OUT any observers with the specified [flag]
 *
 * @param flag The flag used to exclude observers
 * @returns An Array.filter function
 */
// eslint-disable-next-line no-bitwise
const byFlag = (flag) => ((observer) => !((observer[flags] || 0) & flag));
/**
 * Creates an observer lifecycle modification flag application function
 * @param flag The flag to the bound function should add
 * @returns A function that can be used to apply [flag] to any valid observer
 */
const addFlag = (flag) => ((observer) => {
    // eslint-disable-next-line no-bitwise
    observer[flags] = (observer[flags] || 0) | flag;
    return observer;
});
/**
 * Observer lifecycle modifier that indicates this observer should NOT be inherited by any child
 * timelines.
 */
const noInherit = addFlag(1 /* ObserverLifecycleFlags.noInherit */);
/**
 * Observer lifecycle modifier that indicates this observer should only fire once per instance, it is then removed.
 *
 * Note: If you have a parent and child timeline "once" will affect both and the observer will fire once for a parent lifecycle
 * and once for a child lifecycle
 */
const once = addFlag(2 /* ObserverLifecycleFlags.once */);
/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
class Timeline {
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments, observers = {}) {
        this.moments = moments;
        this.observers = observers;
        this._onProxy = null;
        this._emitProxy = null;
        this._inheritingObservers = true;
    }
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors) {
        for (let i = 0; i < behaviors.length; i++) {
            behaviors[i](this);
        }
        return this;
    }
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on() {
        if (this._onProxy === null) {
            this._onProxy = new Proxy(this, {
                get: (target, p) => Object.assign((handler) => {
                    target.cloneObserversOnChange();
                    addObserver(target.observers, p, handler, 1 /* ObserverAddBehavior.Add */);
                    return target;
                }, {
                    toArray: () => {
                        return Reflect.has(target.observers, p) ? [...Reflect.get(target.observers, p)] : [];
                    },
                    replace: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, 3 /* ObserverAddBehavior.Replace */);
                        return target;
                    },
                    prepend: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, 2 /* ObserverAddBehavior.Prepend */);
                        return target;
                    },
                    clear: () => {
                        if (Reflect.has(target.observers, p)) {
                            target.cloneObserversOnChange();
                            // we trust ourselves that this will be an array
                            target.observers[p].length = 0;
                            return true;
                        }
                        return false;
                    },
                }),
            });
        }
        return this._onProxy;
    }
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message, level = 0) {
        this.emit.log(message, level);
    }
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    error(e) {
        if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(e)) {
            this.emit.error(e);
        }
    }
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    get emit() {
        if (this._emitProxy === null) {
            this._emitProxy = new Proxy(this, {
                get: (target, p) => (...args) => {
                    // handle the case where no observers registered for the target moment
                    const observers = Reflect.has(target.observers, p) ? Reflect.get(target.observers, p) : [];
                    if ((!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(observers) || observers.length < 1) && p === "error") {
                        // if we are emitting an error, and no error observers are defined, we throw
                        throw Error(`Unhandled Exception: ${args[0]}`);
                    }
                    try {
                        // default to broadcasting any events without specific impl (will apply to log and error)
                        const moment = Reflect.has(target.moments, p) ? Reflect.get(target.moments, p) : p === "init" || p === "dispose" ? (0,_moments_js__WEBPACK_IMPORTED_MODULE_1__.lifecycle)() : (0,_moments_js__WEBPACK_IMPORTED_MODULE_1__.broadcast)();
                        // pass control to the individual moment's implementation
                        return Reflect.apply(moment, target, [observers, ...args]);
                    }
                    catch (e) {
                        if (p !== "error") {
                            this.error(e);
                        }
                        else {
                            // if all else fails, re-throw as we are getting errors from error observers meaning something is sideways
                            throw e;
                        }
                    }
                    finally {
                        // here we need to remove any "once" observers
                        if (observers && observers.length > 0) {
                            Reflect.set(target.observers, p, observers.filter(byFlag(2 /* ObserverLifecycleFlags.once */)));
                        }
                    }
                },
            });
        }
        return this._emitProxy;
    }
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    start(init) {
        // initialize our timeline
        this.emit.init();
        // get a ref to the promise returned by execute
        const p = this.execute(init);
        // attach our dispose logic
        p.finally(() => {
            try {
                // provide an opportunity for cleanup of the timeline
                this.emit.dispose();
            }
            catch (e) {
                // shouldn't happen, but possible dispose throws - which may be missed as the usercode await will have resolved.
                const e2 = Object.assign(Error("Error in dispose."), { innerException: e });
                this.error(e2);
            }
        }).catch(() => void (0));
        // give the promise back to the caller
        return p;
    }
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    cloneObserversOnChange() {
        if (this._inheritingObservers) {
            this._inheritingObservers = false;
            this.observers = cloneObserverCollection(this.observers);
        }
    }
}
/**
 * Adds an observer to a given target
 *
 * @param target The object to which events are registered
 * @param moment The name of the moment to which the observer is registered
 * @param addBehavior Determines how the observer is added to the collection
 *
 */
function addObserver(target, moment, observer, addBehavior) {
    if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunc)(observer)) {
        throw Error("Observers must be functions.");
    }
    if (!Reflect.has(target, moment)) {
        // if we don't have a registration for this moment, then we just add a new prop
        target[moment] = [observer];
    }
    else {
        // if we have an existing property then we follow the specified behavior
        switch (addBehavior) {
            case 1 /* ObserverAddBehavior.Add */:
                target[moment].push(observer);
                break;
            case 2 /* ObserverAddBehavior.Prepend */:
                target[moment].unshift(observer);
                break;
            case 3 /* ObserverAddBehavior.Replace */:
                target[moment].length = 0;
                target[moment].push(observer);
                break;
        }
    }
    return target[moment];
}
function cloneObserverCollection(source) {
    return Reflect.ownKeys(source).reduce((clone, key) => {
        clone[key] = [...source[key].filter(byFlag(1 /* ObserverLifecycleFlags.noInherit */))];
        return clone;
    }, {});
}


/***/ }),

/***/ 2165:
/*!****************************************!*\
  !*** ./node_modules/@pnp/core/util.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   dateAdd: () => (/* binding */ dateAdd),
/* harmony export */   delay: () => (/* binding */ delay),
/* harmony export */   getGUID: () => (/* binding */ getGUID),
/* harmony export */   getHashCode: () => (/* binding */ getHashCode),
/* harmony export */   hOP: () => (/* binding */ hOP),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   isUrlAbsolute: () => (/* binding */ isUrlAbsolute),
/* harmony export */   jsS: () => (/* binding */ jsS),
/* harmony export */   objectDefinedNotNull: () => (/* binding */ objectDefinedNotNull),
/* harmony export */   stringIsNullOrEmpty: () => (/* binding */ stringIsNullOrEmpty)
/* harmony export */ });
/* unused harmony exports getRandomString, parseToAtob */
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    let ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param f The thing to test for functionness
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunc(f) {
    return typeof f === "function";
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray(array);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return typeof s === "undefined" || s === null || s.length < 1;
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * @returns validates and returns a valid atob conversion
*/
function parseToAtob(str) {
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    try {
        // test if str has been JSON.stringified
        const parsed = JSON.parse(str);
        if (base64Regex.test(parsed)) {
            return atob(parsed);
        }
        return null;
    }
    catch (err) {
        // Not a valid JSON string, check if it's a standalone Base64 string
        return base64Regex.test(str) ? atob(str) : null;
    }
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


/***/ }),

/***/ 8786:
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/browser-fetch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserFetchWithRetry: () => (/* binding */ BrowserFetchWithRetry)
/* harmony export */ });
/* unused harmony export BrowserFetch */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers.js */ 5102);


function BrowserFetch(props) {
    const { replace } = {
        replace: true,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            this.log(`Fetch: ${init.method} ${url.toString()}`, 0);
            return fetch(url.toString(), init);
        });
        return instance;
    };
}
function BrowserFetchWithRetry(props) {
    const { interval, replace, retries } = {
        replace: true,
        interval: 200,
        retries: 3,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            let response;
            let wait = interval;
            let count = 0;
            let lastErr;
            const retry = async () => {
                // if we've tried too many times, throw
                if (count >= retries) {
                    throw lastErr || new _parsers_js__WEBPACK_IMPORTED_MODULE_1__.HttpRequestError(`Retry count exceeded (${retries}) for this request. ${response.status}: ${response.statusText};`, response);
                }
                count++;
                if (typeof response === "undefined" || (response === null || response === void 0 ? void 0 : response.status) === 429 || (response === null || response === void 0 ? void 0 : response.status) === 503 || (response === null || response === void 0 ? void 0 : response.status) === 504) {
                    // this is our first try and response isn't defined yet
                    // we have been throttled OR http status code 503 or 504, we can retry this
                    if (typeof response !== "undefined") {
                        // this isn't our first try so we need to calculate delay
                        if (response.headers.has("Retry-After")) {
                            // if we have gotten a header, use that value as the delay value in seconds
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            wait = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                        }
                        else {
                            // Increment our counters.
                            wait *= 2;
                        }
                        this.log(`Attempt #${count} to retry request which failed with ${response.status}: ${response.statusText}`, 0);
                        await (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.delay)(wait);
                    }
                    try {
                        const u = url.toString();
                        this.log(`Fetch: ${init.method} ${u}`, 0);
                        response = await fetch(u, init);
                        // if we got a good response, return it, otherwise see if we can retry
                        return response.ok ? response : retry();
                    }
                    catch (err) {
                        if (/AbortError/.test(err.name)) {
                            // don't retry aborted requests
                            throw err;
                        }
                        // if there is no network the response is undefined and err is all we have
                        // so we grab the err and save it to throw if we exceed the number of retries
                        // #2226 first reported this
                        lastErr = err;
                        return retry();
                    }
                }
                else {
                    return response;
                }
            };
            // this the the first call to retry that starts the cycle
            // response is undefined and the other values have their defaults
            return retry();
        });
        return instance;
    };
}


/***/ }),

/***/ 7395:
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching-pessimistic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CachingPessimisticRefresh */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryable.js */ 7111);
/* harmony import */ var _caching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.js */ 6936);



/**
 * Pessimistic Caching Behavior
 * Always returns the cached value if one exists but asynchronously executes the call and updates the cache.
 * If a expireFunc is included then the cache update only happens if the cache has expired.
 *
 * @param store Use local or session storage
 * @param keyFactory: a function that returns the key for the cache value, if not provided a default hash of the url will be used
 * @param expireFunc: a function that returns a date of expiration for the cache value, if not provided the cache never expires but is always updated.
 */
function CachingPessimisticRefresh(props) {
    return (instance) => {
        const pre = async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = (0,_caching_js__WEBPACK_IMPORTED_MODULE_2__.bindCachingCore)(url, init, props);
            if (!shouldCache) {
                return [url, init, result];
            }
            const cached = getCachedValue();
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(cached)) {
                // set our result
                result = cached;
                setTimeout(async () => {
                    const q = new _queryable_js__WEBPACK_IMPORTED_MODULE_1__.Queryable(this);
                    const a = q.on.pre.toArray();
                    q.on.pre.clear();
                    // filter out this pre handler from the original queryable as we don't want to re-run it
                    a.filter(v => v !== pre).map(v => q.on.pre(v));
                    // in this case the init should contain the correct "method"
                    const value = await q(init);
                    setCachedValue(value);
                }, 0);
            }
            else {
                // register the post handler to cache the value as there is not one already in the cache
                // and we need to run this request as normal
                this.on.post((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.noInherit)(async function (url, result) {
                    setCachedValue(result);
                    return [url, result];
                }));
            }
            return [url, init, result];
        };
        instance.on.pre(pre);
        return instance;
    };
}


/***/ }),

/***/ 6936:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindCachingCore: () => (/* binding */ bindCachingCore)
/* harmony export */ });
/* unused harmony exports CacheAlways, CacheNever, CacheKey, Caching */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

/**
 * Behavior that forces caching for the request regardless of "method"
 *
 * @returns TimelinePipe
 */
function CacheAlways() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheAlways": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that blocks caching for the request regardless of "method"
 *
 * Note: If both Caching and CacheAlways are present AND CacheNever is present the request will not be cached
 * as we give priority to the CacheNever case
 *
 * @returns TimelinePipe
 */
function CacheNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Behavior that allows you to specify a cache key for a request
 *
 * @param key The key to use for caching
  */
function CacheKey(key) {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-CacheKey": key };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Adds caching to the requests based on the supplied props
 *
 * @param props Optional props that configure how caching will work
 * @returns TimelinePipe used to configure requests
 */
function Caching(props) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            const [shouldCache, getCachedValue, setCachedValue] = bindCachingCore(url, init, props);
            // only cache get requested data or where the CacheAlways header is present (allows caching of POST requests)
            if (shouldCache) {
                const cached = getCachedValue();
                // we need to ensure that result stays "undefined" unless we mean to set null as the result
                if (cached === null) {
                    // if we don't have a cached result we need to get it after the request is sent. Get the raw value (un-parsed) to store into cache
                    this.on.post((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.noInherit)(async function (url, result) {
                        setCachedValue(result);
                        return [url, result];
                    }));
                }
                else {
                    result = cached;
                }
            }
            return [url, init, result];
        });
        return instance;
    };
}
const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorage();
/**
 * Based on the supplied properties, creates bound logic encapsulating common caching configuration
 * sharable across implementations to more easily provide consistent behavior across behaviors
 *
 * @param props Any caching props used to initialize the core functions
 */
function bindCachingCore(url, init, props) {
    var _a, _b;
    const { store, keyFactory, expireFunc } = {
        store: "local",
        keyFactory: (url) => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getHashCode)(url.toLowerCase()).toString(),
        expireFunc: () => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "minute", 5),
        ...props,
    };
    const s = store === "session" ? storage.session : storage.local;
    const key = (init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheKey"]) ? init.headers["X-PnP-CacheKey"] : keyFactory(url);
    return [
        // calculated value indicating if we should cache this request
        (/get/i.test(init.method) || ((_a = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheAlways"]) !== null && _a !== void 0 ? _a : false)) && !((_b = init === null || init === void 0 ? void 0 : init.headers["X-PnP-CacheNever"]) !== null && _b !== void 0 ? _b : false),
        // gets the cached value
        () => s.get(key),
        // sets the cached value
        (value) => s.put(key, value, expireFunc(url)),
    ];
}


/***/ }),

/***/ 238:
/*!*************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/cancelable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports asCancelableScope, cancelableScope, Cancelable, CancelAction */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

/**
 * Cancelable is a fairly complex behavior as there is a lot to consider through multiple timelines. We have
 * two main cases:
 *
 * 1. basic method that is a single call and returns the result of an operation (return spPost(...))
 * 2. complex method that has multiple async calls within
 *
 * 1. For basic calls the cancel info is attached in init as it is only involved within a single request.
 *    This works because there is only one request and the cancel logic doesn't need to persist across
 *    inheriting instances. Also, many of these requests are so fast canceling is likely unnecessary
 *
 * 2. Complex method present a larger challenge because they are comprised of > 1 request and the promise
 *    that is actually returned to the user is not directly from one of our calls. This promise is the
 *    one "created" by the language when you await. For complex methods we have two things that solve these
 *    needs.
 *
 *    The first is the use of either the cancelableScope decorator or the asCancelableScope method
 *    wrapper. These create an upper level cancel info that is then shared across the child requests within
 *    the complex method. Meaning if I do a files.addChunked the same cancel info (and cancel method)
 *    are set on the current "this" which is user object on which the method was called. This info is then
 *    passed down to any child requests using the original "this" as a base using the construct moment.
 *
 *    The CancelAction behavior is used to apply additional actions to a request once it is canceled. For example
 *    in the case of uploading files chunked in sp we cancel the upload by id.
 */
// this is a special moment used to broadcast when a request is canceled
const MomentName = "__CancelMoment__";
// this value is used to track cancel state and the value is represetented by IScopeInfo
const ScopeId = Symbol.for("CancelScopeId");
// module map of all currently tracked cancel scopes
const cancelScopes = new Map();
/**
 * This method is bound to a scope id and used as the cancel method exposed to the user via cancelable promise
 *
 * @param this unused, the current promise
 * @param scopeId Id bound at creation time
 */
async function cancelPrimitive(scopeId) {
    const scope = cancelScopes.get(scopeId);
    scope.controller.abort();
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(scope === null || scope === void 0 ? void 0 : scope.actions)) {
        scope.actions.map(action => scope.currentSelf.on[MomentName](action));
    }
    try {
        await scope.currentSelf.emit[MomentName]();
    }
    catch (e) {
        scope.currentSelf.log(`Error in cancel: ${e}`, 3);
    }
}
/**
 * Creates a new scope id, sets it on the instance's ScopeId property, and adds the info to the map
 *
 * @returns the new scope id (GUID)
 */
function createScope(instance) {
    const id = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
    instance[ScopeId] = id;
    cancelScopes.set(id, {
        cancel: cancelPrimitive.bind({}, id),
        actions: [],
        controller: null,
        currentSelf: instance,
    });
    return id;
}
/**
 * Function wrapper that turns the supplied function into a cancellation scope
 *
 * @param func Func to wrap
 * @returns The same func signature, wrapped with our cancel scoping logic
 */
const asCancelableScope = (func) => {
    return function (...args) {
        // ensure we have setup "this" to cancel
        // 1. for single requests the value is set in the behavior's init observer
        // 2. for complex requests the value is set here
        if (!Reflect.has(this, ScopeId)) {
            createScope(this);
        }
        // execute the original function, but don't await it
        const result = func.apply(this, args).finally(() => {
            // remove any cancel scope values tied to this instance
            cancelScopes.delete(this[ScopeId]);
            delete this[ScopeId];
        });
        // ensure the synthetic promise from a complex method has a cancel method
        result.cancel = cancelScopes.get(this[ScopeId]).cancel;
        return result;
    };
};
/**
 * Decorator used to mark multi-step methods to ensure all subrequests are properly cancelled
 */
function cancelableScope(_target, _propertyKey, descriptor) {
    // wrapping the original method
    descriptor.value = asCancelableScope(descriptor.value);
}
/**
 * Allows requests to be canceled by the caller by adding a cancel method to the Promise returned by the library
 *
 * @returns Timeline pipe to setup canelability
 */
function Cancelable() {
    if (!AbortController) {
        throw Error("The current environment appears to not support AbortController, please include a suitable polyfill.");
    }
    return (instance) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        instance.on.construct(function (init, path) {
            if (typeof init !== "string") {
                const parent = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(init) ? init[0] : init;
                if (Reflect.has(parent, ScopeId)) {
                    // ensure we carry over the scope id to the new instance from the parent
                    this[ScopeId] = parent[ScopeId];
                }
                // define the moment's implementation
                this.moments[MomentName] = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncBroadcast)();
            }
        });
        // init our queryable to support cancellation
        instance.on.init(function () {
            if (!Reflect.has(this, ScopeId)) {
                // ensure we have setup "this" to cancel
                // 1. for single requests this will set the value
                // 2. for complex requests the value is set in asCancelableScope
                const id = createScope(this);
                // if we are creating the scope here, we have not created it within asCancelableScope
                // meaning the finally handler there will not delete the tracked scope reference
                this.on.dispose(() => {
                    cancelScopes.delete(id);
                });
            }
            this.on[this.InternalPromise]((promise) => {
                // when a new promise is created add a cancel method
                promise.cancel = cancelScopes.get(this[ScopeId]).cancel;
                return [promise];
            });
        });
        instance.on.pre(async function (url, init, result) {
            // grab the current scope, update the controller and currentSelf
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we are here without a scope we are likely running a CancelAction request so we just ignore canceling
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(existingScope)) {
                const controller = new AbortController();
                existingScope.controller = controller;
                existingScope.currentSelf = this;
                if (init.signal) {
                    // we do our best to hook our logic to the existing signal
                    init.signal.addEventListener("abort", () => {
                        existingScope.cancel();
                    });
                }
                else {
                    init.signal = controller.signal;
                }
            }
            return [url, init, result];
        });
        // clean up any cancel info from the object after the request lifecycle is complete
        instance.on.dispose(function () {
            delete this[ScopeId];
            delete this.moments[MomentName];
        });
        return instance;
    };
}
/**
 * Allows you to define an action that is run when a request is cancelled
 *
 * @param action The action to run
 * @returns A timeline pipe used in the request lifecycle
 */
function CancelAction(action) {
    return (instance) => {
        instance.on.pre(async function (...args) {
            const existingScope = cancelScopes.get(this[ScopeId]);
            // if we don't have a scope this request is not using Cancelable so we do nothing
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(existingScope)) {
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(existingScope.actions)) {
                    existingScope.actions = [];
                }
                if (existingScope.actions.indexOf(action) < 0) {
                    existingScope.actions.push(action);
                }
            }
            return args;
        });
        return instance;
    };
}


/***/ }),

/***/ 6046:
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/inject-headers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InjectHeaders: () => (/* binding */ InjectHeaders)
/* harmony export */ });
function InjectHeaders(headers, prepend = false) {
    return (instance) => {
        const f = async function (url, init, result) {
            init.headers = { ...init.headers, ...headers };
            return [url, init, result];
        };
        if (prepend) {
            instance.on.pre.prepend(f);
        }
        else {
            instance.on.pre(f);
        }
        return instance;
    };
}


/***/ }),

/***/ 5102:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/parsers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultParse: () => (/* binding */ DefaultParse),
/* harmony export */   HttpRequestError: () => (/* binding */ HttpRequestError),
/* harmony export */   JSONParse: () => (/* binding */ JSONParse),
/* harmony export */   TextParse: () => (/* binding */ TextParse),
/* harmony export */   parseBinderWithErrorCheck: () => (/* binding */ parseBinderWithErrorCheck),
/* harmony export */   parseODataJSON: () => (/* binding */ parseODataJSON)
/* harmony export */ });
/* unused harmony exports BlobParse, BufferParse, HeaderParse, JSONHeaderParse, errorCheck */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);


function DefaultParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return parseODataJSON(json);
    });
}
function TextParse() {
    return parseBinderWithErrorCheck(r => r.text());
}
function BlobParse() {
    return parseBinderWithErrorCheck(r => r.blob());
}
function JSONParse() {
    return parseBinderWithErrorCheck(r => r.json());
}
function BufferParse() {
    return parseBinderWithErrorCheck(r => (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(r.arrayBuffer) ? r.arrayBuffer() : r.buffer());
}
function HeaderParse() {
    return parseBinderWithErrorCheck(async (r) => r.headers);
}
function JSONHeaderParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return { data: { ...parseODataJSON(json) }, headers: { ...response.headers } };
    });
}
async function errorCheck(url, response, result) {
    if (!response.ok) {
        throw await HttpRequestError.init(response);
    }
    return [url, response, result];
}
function parseODataJSON(json) {
    let result = json;
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "d")) {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json.d, "results")) {
            result = json.d.results;
        }
        else {
            result = json.d;
        }
    }
    else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "value")) {
        result = json.value;
    }
    return result;
}
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
function parseBinderWithErrorCheck(impl) {
    return (instance) => {
        // we clear anything else registered for parse
        // add error check
        // add the impl function we are supplied
        instance.on.parse.replace(errorCheck);
        instance.on.parse(async (url, response, result) => {
            if (response.ok && typeof result === "undefined") {
                result = await impl(response);
            }
            return [url, response, result];
        });
        return instance;
    };
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static async init(r) {
        const t = await r.clone().text();
        return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r);
    }
}


/***/ }),

/***/ 5234:
/*!************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/resolvers.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RejectOnError: () => (/* binding */ RejectOnError),
/* harmony export */   ResolveOnData: () => (/* binding */ ResolveOnData)
/* harmony export */ });
function ResolveOnData() {
    return (instance) => {
        instance.on.data(function (data) {
            this.emit[this.InternalResolve](data);
        });
        return instance;
    };
}
function RejectOnError() {
    return (instance) => {
        instance.on.error(function (err) {
            this.emit[this.InternalReject](err);
        });
        return instance;
    };
}


/***/ }),

/***/ 6844:
/*!**********************************************!*\
  !*** ./node_modules/@pnp/queryable/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserFetchWithRetry: () => (/* reexport safe */ _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_2__.BrowserFetchWithRetry),
/* harmony export */   DefaultParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.DefaultParse),
/* harmony export */   InjectHeaders: () => (/* reexport safe */ _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_6__.InjectHeaders),
/* harmony export */   JSONParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.JSONParse),
/* harmony export */   Queryable: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.Queryable),
/* harmony export */   RejectOnError: () => (/* reexport safe */ _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_8__.RejectOnError),
/* harmony export */   ResolveOnData: () => (/* reexport safe */ _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_8__.ResolveOnData),
/* harmony export */   TextParse: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.TextParse),
/* harmony export */   addProp: () => (/* binding */ addProp),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   del: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.del),
/* harmony export */   get: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.get),
/* harmony export */   headers: () => (/* binding */ headers),
/* harmony export */   op: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.op),
/* harmony export */   parseBinderWithErrorCheck: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.parseBinderWithErrorCheck),
/* harmony export */   parseODataJSON: () => (/* reexport safe */ _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__.parseODataJSON),
/* harmony export */   patch: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.patch),
/* harmony export */   post: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.post),
/* harmony export */   queryableFactory: () => (/* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_1__.queryableFactory)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryable.js */ 7111);
/* harmony import */ var _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behaviors/browser-fetch.js */ 8786);
/* harmony import */ var _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behaviors/caching.js */ 6936);
/* harmony import */ var _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/caching-pessimistic.js */ 7395);
/* harmony import */ var _behaviors_cancelable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/cancelable.js */ 238);
/* harmony import */ var _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/inject-headers.js */ 6046);
/* harmony import */ var _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/parsers.js */ 5102);
/* harmony import */ var _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/resolvers.js */ 5234);


/**
 * Behavior exports
 */










/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path || name);
        },
    });
}
/**
 * takes the supplied object of type U, JSON.stringify's it, and sets it as the value of a "body" property
 */
function body(o, previous) {
    return Object.assign({ body: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.jsS)(o) }, previous);
}
/**
 * Adds headers to an new/existing RequestInit
 *
 * @param o Headers to add
 * @param previous Any previous partial RequestInit
 * @returns RequestInit combining previous and specified headers
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({}, previous, { headers: { ...previous === null || previous === void 0 ? void 0 : previous.headers, ...o } });
}


/***/ }),

/***/ 7111:
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Queryable: () => (/* binding */ Queryable),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   op: () => (/* binding */ op),
/* harmony export */   patch: () => (/* binding */ patch),
/* harmony export */   post: () => (/* binding */ post),
/* harmony export */   queryableFactory: () => (/* binding */ queryableFactory)
/* harmony export */ });
/* unused harmony exports put, invokable */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4340);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);


const DefaultMoments = {
    construct: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.lifecycle)(),
    pre: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    auth: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    send: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.request)(),
    parse: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    post: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.asyncReduce)(),
    data: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.broadcast)(),
};
let Queryable = class Queryable extends _pnp_core__WEBPACK_IMPORTED_MODULE_0__.Timeline {
    constructor(init, path) {
        super(DefaultMoments);
        // these keys represent internal events for Queryable, users are not expected to
        // subscribe directly to these, rather they enable functionality within Queryable
        // they are Symbols such that there are NOT cloned between queryables as we only grab string keys (by design)
        this.InternalResolve = Symbol.for("Queryable_Resolve");
        this.InternalReject = Symbol.for("Queryable_Reject");
        this.InternalPromise = Symbol.for("Queryable_Promise");
        // default to use the included URL search params to parse the query string
        this._query = new URLSearchParams();
        // add an internal moment with specific implementation for promise creation
        this.moments[this.InternalPromise] = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.reduce)();
        let parent;
        if (typeof init === "string") {
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(init, path);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(init)) {
            if (init.length !== 2) {
                throw Error("When using the tuple param exactly two arguments are expected.");
            }
            if (typeof init[1] !== "string") {
                throw Error("Expected second tuple param to be a string.");
            }
            parent = init[0];
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(init[1], path);
        }
        else {
            parent = init;
            this._url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(parent._url, path);
        }
        if (typeof parent !== "undefined") {
            this.observers = parent.observers;
            this._inheritingObservers = true;
        }
    }
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart) {
        this._url += pathPart;
        return this;
    }
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl() {
        let url = this.toUrl();
        const query = this.query.toString();
        if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query() {
        return this._query;
    }
    /**
     * Gets the current url
     *
     */
    toUrl() {
        return this._url;
    }
    execute(userInit) {
        // if there are NO observers registered this is likely either a bug in the library or a user error, direct to docs
        if (Reflect.ownKeys(this.observers).length < 1) {
            throw Error("No observers registered for this request. (https://pnp.github.io/pnpjs/queryable/queryable#no-observers-registered-for-this-request)");
        }
        // schedule the execution after we return the promise below in the next event loop
        setTimeout(async () => {
            const requestId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
            let requestUrl;
            const log = (msg, level) => {
                // this allows us to easily and consistently format our messages
                this.log(`[${requestId}] ${msg}`, level);
            };
            try {
                log("Beginning request", 0);
                // include the request id in the headers to assist with debugging against logs
                const initSeed = {
                    ...userInit,
                    headers: { ...userInit.headers, "X-PnPjs-RequestId": requestId },
                };
                // eslint-disable-next-line prefer-const
                let [url, init, result] = await this.emit.pre(this.toRequestUrl(), initSeed, undefined);
                log(`Url: ${url}`, 1);
                if (typeof result !== "undefined") {
                    log("Result returned from pre, Emitting data");
                    this.emit.data(result);
                    log("Emitted data");
                    return;
                }
                log("Emitting auth");
                [requestUrl, init] = await this.emit.auth(new URL(url), init);
                log("Emitted auth");
                // we always resepect user supplied init over observer modified init
                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                log("Emitting send");
                let response = await this.emit.send(requestUrl, init);
                log("Emitted send");
                log("Emitting parse");
                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                log("Emitted parse");
                log("Emitting post");
                [requestUrl, result] = await this.emit.post(requestUrl, result);
                log("Emitted post");
                log("Emitting data");
                this.emit.data(result);
                log("Emitted data");
            }
            catch (e) {
                log(`Emitting error: "${e.message || e}"`, 3);
                // anything that throws we emit and continue
                this.error(e);
                log("Emitted error", 3);
            }
            finally {
                log("Finished request", 0);
            }
        }, 0);
        // this allows us to internally hook the promise creation and modify it. This was introduced to allow for
        // cancelable to work as envisioned, but may have other users. Meant for internal use in the library accessed via behaviors.
        return this.emit[this.InternalPromise](new Promise((resolve, reject) => {
            // we overwrite any pre-existing internal events as a
            // given queryable only processes a single request at a time
            this.on[this.InternalResolve].replace(resolve);
            this.on[this.InternalReject].replace(reject);
        }))[0];
    }
};
Queryable = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    invokable()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
], Queryable);

function ensureInit(method, init = { headers: {} }) {
    return { method, ...init, headers: { ...init.headers } };
}
function get(init) {
    return this.start(ensureInit("GET", init));
}
function post(init) {
    return this.start(ensureInit("POST", init));
}
function put(init) {
    return this.start(ensureInit("PUT", init));
}
function patch(init) {
    return this.start(ensureInit("PATCH", init));
}
function del(init) {
    return this.start(ensureInit("DELETE", init));
}
function op(q, operation, init) {
    return Reflect.apply(operation, q, [init]);
}
function queryableFactory(constructor) {
    return (init, path) => {
        // construct the concrete instance
        const instance = new constructor(init, path);
        // we emit the construct event from the factory because we need all of the decorators and constructors
        // to have fully finished before we emit, which is now true. We type the instance to any to get around
        // the protected nature of emit
        instance.emit.construct(init, path);
        return instance;
    };
}
/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
function invokable(invokeableAction) {
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                const invokableInstance = Object.assign(function (init) {
                    if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(invokeableAction)) {
                        invokeableAction = function (init) {
                            return op(this, get, init);
                        };
                    }
                    return Reflect.apply(invokeableAction, invokableInstance, [init]);
                }, Reflect.construct(clz, args, newTarget));
                Reflect.setPrototypeOf(invokableInstance, newTarget.prototype);
                return invokableInstance;
            },
        });
    };
}


/***/ }),

/***/ 8018:
/*!******************************************!*\
  !*** ./node_modules/@pnp/sp/batching.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchNever: () => (/* binding */ BatchNever)
/* harmony export */ });
/* unused harmony export createBatch */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spqueryable.js */ 2678);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fi.js */ 6553);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webs/types.js */ 3169);





_fi_js__WEBPACK_IMPORTED_MODULE_3__.SPFI.prototype.batched = function (props) {
    const batched = (0,_fi_js__WEBPACK_IMPORTED_MODULE_3__.spfi)(this);
    const [behavior, execute] = createBatch(batched._root, props);
    batched.using(behavior);
    return [batched, execute];
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_4__._Web.prototype.batched = function (props) {
    const batched = (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_4__.Web)(this);
    const [behavior, execute] = createBatch(batched, props);
    batched.using(behavior);
    return [batched, execute];
};
/**
 * Tracks on a batched instance that registration is complete (the child request has gotten to the send moment and the request is included in the batch)
 */
const RegistrationCompleteSym = Symbol.for("batch_registration");
/**
 * Tracks on a batched instance that the child request timeline lifecycle is complete (called in child.dispose)
 */
const RequestCompleteSym = Symbol.for("batch_request");
/**
 * Special batch parsing behavior used to convert the batch response text into a set of Response objects for each request
 * @returns A parser behavior
 */
function BatchParse() {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.parseBinderWithErrorCheck)(async (response) => {
        const text = await response.text();
        return parseResponse(text);
    });
}
/**
 * Internal class used to execute the batch request through the timeline lifecycle
 */
class BatchQueryable extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPQueryable {
    constructor(base, requestBaseUrl = base.toUrl().replace(/_api[\\|/].*$/i, "")) {
        super(requestBaseUrl, "_api/$batch");
        this.requestBaseUrl = requestBaseUrl;
        // this will copy over the current observables from the base associated with this batch
        // this will replace any other parsing present
        this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(base, "replace"), BatchParse());
        this.on.dispose(() => {
            // there is a code path where you may invoke a batch, say on items.add, whose return
            // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
            // is immediately usable to make additional queries. Without this step when that IItem instance is
            // created using "this.getById" within IITems.add all of the current observers of "this" are
            // linked to the IItem instance created (expected), BUT they will be the set of observers setup
            // to handle the batch, meaning invoking `item` will result in a half batched call that
            // doesn't really work. To deliver the expected functionality we "reset" the
            // observers using the original instance, mimicing the behavior had
            // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
            // that we maintain the references to the InternalResolve and InternalReject events through
            // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
            // which ignores symbol properties.
            base.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(this, "replace", (k) => /(auth|send|pre|init)/i.test(k)));
        });
    }
}
/**
 * Creates a batched version of the supplied base, meaning that all chained fluent operations from the new base are part of the batch
 *
 * @param base The base from which to initialize the batch
 * @param props Any properties used to initialize the batch functionality
 * @returns A tuple of [behavior used to assign objects to the batch, the execute function used to resolve the batch requests]
 */
function createBatch(base, props) {
    const registrationPromises = [];
    const completePromises = [];
    const requests = [];
    const batchId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
    const batchQuery = new BatchQueryable(base);
    // this query is used to copy back the behaviors after the batch executes
    // it should not manipulated or have behaviors added.
    const refQuery = new BatchQueryable(base);
    const { headersCopyPattern } = {
        headersCopyPattern: /Accept|Content-Type|IF-Match/i,
        ...props,
    };
    const execute = async () => {
        await Promise.all(registrationPromises);
        if (requests.length < 1) {
            // even if we have no requests we need to await the complete promises to ensure
            // that execute only resolves AFTER every child request disposes #2457
            // this likely means caching is being used, we returned values for all child requests from the cache
            return Promise.all(completePromises).then(() => void (0));
        }
        const batchBody = [];
        let currentChangeSetId = "";
        for (let i = 0; i < requests.length; i++) {
            const [, url, init] = requests[i];
            if (init.method === "GET") {
                if (currentChangeSetId.length > 0) {
                    // end an existing change set
                    batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                    currentChangeSetId = "";
                }
                batchBody.push(`--batch_${batchId}\n`);
            }
            else {
                if (currentChangeSetId.length < 1) {
                    // start new change set
                    currentChangeSetId = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.getGUID)();
                    batchBody.push(`--batch_${batchId}\n`);
                    batchBody.push(`Content-Type: multipart/mixed; boundary="changeset_${currentChangeSetId}"\n\n`);
                }
                batchBody.push(`--changeset_${currentChangeSetId}\n`);
            }
            // common batch part prefix
            batchBody.push("Content-Type: application/http\n");
            batchBody.push("Content-Transfer-Encoding: binary\n\n");
            // these are the per-request headers
            const headers = new Headers(init.headers);
            // this is the url of the individual request within the batch
            const reqUrl = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url) ? url : (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(batchQuery.requestBaseUrl, url);
            if (init.method !== "GET") {
                let method = init.method;
                if (headers.has("X-HTTP-Method")) {
                    method = headers.get("X-HTTP-Method");
                    headers.delete("X-HTTP-Method");
                }
                batchBody.push(`${method} ${reqUrl} HTTP/1.1\n`);
            }
            else {
                batchBody.push(`${init.method} ${reqUrl} HTTP/1.1\n`);
            }
            // lastly we apply any default headers we need that may not exist
            if (!headers.has("Accept")) {
                headers.append("Accept", "application/json");
            }
            if (!headers.has("Content-Type")) {
                headers.append("Content-Type", "application/json;charset=utf-8");
            }
            // write headers into batch body
            headers.forEach((value, name) => {
                if (headersCopyPattern.test(name)) {
                    batchBody.push(`${name}: ${value}\n`);
                }
            });
            batchBody.push("\n");
            if (init.body) {
                batchBody.push(`${init.body}\n\n`);
            }
        }
        if (currentChangeSetId.length > 0) {
            // Close the changeset
            batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
            currentChangeSetId = "";
        }
        batchBody.push(`--batch_${batchId}--\n`);
        const responses = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(batchQuery, {
            body: batchBody.join(""),
            headers: {
                "Content-Type": `multipart/mixed; boundary=batch_${batchId}`,
            },
        });
        if (responses.length !== requests.length) {
            throw Error("Could not properly parse responses to match requests in batch.");
        }
        return new Promise((res, rej) => {
            try {
                for (let index = 0; index < responses.length; index++) {
                    const [, , , resolve, reject] = requests[index];
                    try {
                        resolve(responses[index]);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                // this small delay allows the promises to resolve correctly in order by dropping this resolve behind
                // the other work in the event loop. Feels hacky, but it works so 🤷
                setTimeout(res, 0);
            }
            catch (e) {
                setTimeout(() => rej(e), 0);
            }
        }).then(() => Promise.all(completePromises)).then(() => void (0));
    };
    const register = (instance) => {
        instance.on.init(function () {
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RegistrationCompleteSym])) {
                throw Error("This instance is already part of a batch. Please review the docs at https://pnp.github.io/pnpjs/concepts/batching#reuse.");
            }
            // we need to ensure we wait to start execute until all our batch children hit the .send method to be fully registered
            registrationPromises.push(new Promise((resolve) => {
                this[RegistrationCompleteSym] = resolve;
            }));
            return this;
        });
        instance.on.pre(async function (url, init, result) {
            // Do not add to timeline if using BatchNever behavior
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-PnP-BatchNever")) {
                // clean up the init operations from the timeline
                // not strictly necessary as none of the logic that uses this should be in the request, but good to keep things tidy
                if (typeof (this[RequestCompleteSym]) === "function") {
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                }
                this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(refQuery, "replace", (k) => /(init|pre)/i.test(k)));
                return [url, init, result];
            }
            // the entire request will be auth'd - we don't need to run this for each batch request
            this.on.auth.clear();
            // we replace the send function with our batching logic
            this.on.send.replace(async function (url, init) {
                // this is the promise that Queryable will see returned from .emit.send
                const promise = new Promise((resolve, reject) => {
                    // add the request information into the batch
                    requests.push([this, url.toString(), init, resolve, reject]);
                });
                this.log(`[batch:${batchId}] (${(new Date()).getTime()}) Adding request ${init.method} ${url.toString()} to batch.`, 0);
                // we need to ensure we wait to resolve execute until all our batch children have fully completed their request timelines
                completePromises.push(new Promise((resolve) => {
                    this[RequestCompleteSym] = resolve;
                }));
                // indicate that registration of this request is complete
                this[RegistrationCompleteSym]();
                return promise;
            });
            this.on.dispose(function () {
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RegistrationCompleteSym])) {
                    // if this request is in a batch and caching is in play we need to resolve the registration promises to unblock processing of the batch
                    // because the request will never reach the "send" moment as the result is returned from "pre"
                    this[RegistrationCompleteSym]();
                    // remove the symbol props we added for good hygene
                    delete this[RegistrationCompleteSym];
                }
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(this[RequestCompleteSym])) {
                    // let things know we are done with this request
                    this[RequestCompleteSym]();
                    delete this[RequestCompleteSym];
                    // there is a code path where you may invoke a batch, say on items.add, whose return
                    // is an object like { data: any, item: IItem }. The expectation from v1 on is `item` in that object
                    // is immediately usable to make additional queries. Without this step when that IItem instance is
                    // created using "this.getById" within IITems.add all of the current observers of "this" are
                    // linked to the IItem instance created (expected), BUT they will be the set of observers setup
                    // to handle the batch, meaning invoking `item` will result in a half batched call that
                    // doesn't really work. To deliver the expected functionality we "reset" the
                    // observers using the original instance, mimicing the behavior had
                    // the IItem been created from that base without a batch involved. We use CopyFrom to ensure
                    // that we maintain the references to the InternalResolve and InternalReject events through
                    // the end of this timeline lifecycle. This works because CopyFrom by design uses Object.keys
                    // which ignores symbol properties.
                    this.using((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.CopyFrom)(refQuery, "replace", (k) => /(auth|pre|send|init|dispose)/i.test(k)));
                }
            });
            return [url, init, result];
        });
        return instance;
    };
    return [register, execute];
}
/**
 * Behavior that blocks batching for the request regardless of "method"
 *
 * This is used for requests to bypass batching methods. Example - Request Digest where we need to get a request-digest inside of a batch.
 * @returns TimelinePipe
 */
function BatchNever() {
    return (instance) => {
        instance.on.pre.prepend(async function (url, init, result) {
            init.headers = { ...init.headers, "X-PnP-BatchNever": "1" };
            return [url, init, result];
        });
        return instance;
    };
}
/**
 * Parses the text body returned by the server from a batch request
 *
 * @param body String body from the server response
 * @returns Parsed response objects
 */
function parseResponse(body) {
    const responses = [];
    const header = "--batchresponse_";
    // Ex. "HTTP/1.1 500 Internal Server Error"
    const statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
    const lines = body.split("\n");
    let state = "batch";
    let status;
    let statusText;
    let headers = {};
    const bodyReader = [];
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i];
        switch (state) {
            case "batch":
                if (line.substring(0, header.length) === header) {
                    state = "batchHeaders";
                }
                else {
                    if (line.trim() !== "") {
                        throw Error(`Invalid response, line ${i}`);
                    }
                }
                break;
            case "batchHeaders":
                if (line.trim() === "") {
                    state = "status";
                }
                break;
            case "status": {
                const parts = statusRegExp.exec(line);
                if (parts.length !== 3) {
                    throw Error(`Invalid status, line ${i}`);
                }
                status = parseInt(parts[1], 10);
                statusText = parts[2];
                state = "statusHeaders";
                break;
            }
            case "statusHeaders":
                if (line.trim() === "") {
                    state = "body";
                }
                else {
                    const headerParts = line.split(":");
                    if ((headerParts === null || headerParts === void 0 ? void 0 : headerParts.length) === 2) {
                        headers[headerParts[0].trim()] = headerParts[1].trim();
                    }
                }
                break;
            case "body":
                // reset the body reader
                bodyReader.length = 0;
                // this allows us to capture batch bodies that are returned as multi-line (renderListDataAsStream, #2454)
                while (line.substring(0, header.length) !== header) {
                    bodyReader.push(line);
                    line = lines[++i];
                }
                // because we have read the closing --batchresponse_ line, we need to move the line pointer back one
                // so that the logic works as expected either to get the next result or end processing
                i--;
                responses.push(new Response(status === 204 ? null : bodyReader.join(""), { status, statusText, headers }));
                state = "batch";
                headers = {};
                break;
        }
    }
    if (state !== "status") {
        throw Error("Unexpected end of input");
    }
    return responses;
}


/***/ }),

/***/ 7140:
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/defaults.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHeaders: () => (/* binding */ DefaultHeaders),
/* harmony export */   DefaultInit: () => (/* binding */ DefaultInit)
/* harmony export */ });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemetry.js */ 2630);


function DefaultInit() {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            init.cache = "no-cache";
            init.credentials = "same-origin";
            return [url, init, result];
        });
        instance.using((0,_telemetry_js__WEBPACK_IMPORTED_MODULE_1__.Telemetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.RejectOnError)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.ResolveOnData)());
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.InjectHeaders)({
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8",
        }));
        return instance;
    };
}


/***/ }),

/***/ 670:
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/request-digest.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestDigest: () => (/* binding */ RequestDigest)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 2997);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../batching.js */ 8018);





function clearExpired(digest) {
    const now = new Date();
    return !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest) || (now > digest.expiration) ? null : digest;
}
// allows for the caching of digests across all calls which each have their own IDigestInfo wrapper.
const digests = new Map();
function RequestDigest(hook) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // add the request to the auth moment of the timeline
            this.on.auth(async (url, init) => {
                // eslint-disable-next-line max-len
                if (/get/i.test(init.method) || (init.headers && ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-RequestDigest") || (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "Authorization") || (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(init.headers, "X-PnPjs-NoDigest")))) {
                    return [url, init];
                }
                const urlAsString = url.toString();
                const webUrl = (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(urlAsString);
                // do we have one in the cache that is still valid
                // from #2186 we need to always ensure the digest we get isn't expired
                let digest = clearExpired(digests.get(webUrl));
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest) && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isFunc)(hook)) {
                    digest = clearExpired(hook(urlAsString, init));
                }
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest)) {
                    digest = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.spPost)((0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_3__.SPQueryable)([this, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(webUrl, "_api/contextinfo")]).using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.JSONParse)(), (0,_batching_js__WEBPACK_IMPORTED_MODULE_4__.BatchNever)()), {
                        headers: {
                            "Accept": "application/json",
                            "X-PnPjs-NoDigest": "1",
                        },
                    }).then(p => ({
                        expiration: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "second", p.FormDigestTimeoutSeconds),
                        value: p.FormDigestValue,
                    }));
                }
                if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(digest)) {
                    // if we got a digest, set it in the headers
                    init.headers = {
                        "X-RequestDigest": digest.value,
                        ...init.headers,
                    };
                    // and cache it for future requests
                    digests.set(webUrl, digest);
                }
                return [url, init];
            });
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 6793:
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spbrowser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SPBrowser */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ 7140);
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ 670);




function SPBrowser(props) {
    if ((props === null || props === void 0 ? void 0 : props.baseUrl) && !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(props.baseUrl)) {
        throw Error("SPBrowser props.baseUrl must be absolute when supplied.");
    }
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultInit)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.DefaultParse)(), (0,_request_digest_js__WEBPACK_IMPORTED_MODULE_3__.RequestDigest)());
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(props === null || props === void 0 ? void 0 : props.baseUrl)) {
            // we want to fix up the url first
            instance.on.pre.prepend(async (url, init, result) => {
                if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url)) {
                    url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(props.baseUrl, url);
                }
                return [url, init, result];
            });
        }
        return instance;
    };
}


/***/ }),

/***/ 4243:
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spfx.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFx: () => (/* binding */ SPFx)
/* harmony export */ });
/* unused harmony export SPFxToken */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ 7140);
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ 670);




class SPFxTokenNullOrUndefinedError extends Error {
    constructor(behaviorName) {
        super(`SPFx Context supplied to ${behaviorName} Behavior is null or undefined.`);
    }
    static check(behaviorName, context) {
        if (typeof context === "undefined" || context === null) {
            throw new SPFxTokenNullOrUndefinedError(behaviorName);
        }
    }
}
function SPFxToken(context) {
    SPFxTokenNullOrUndefinedError.check("SPFxToken", context);
    return (instance) => {
        instance.on.auth.replace(async function (url, init) {
            const provider = await context.aadTokenProviderFactory.getTokenProvider();
            const token = await provider.getToken(`${url.protocol}//${url.hostname}`);
            // eslint-disable-next-line @typescript-eslint/dot-notation
            init.headers["Authorization"] = `Bearer ${token}`;
            return [url, init];
        });
        return instance;
    };
}
function SPFx(context) {
    SPFxTokenNullOrUndefinedError.check("SPFx", context);
    return (instance) => {
        instance.using((0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultHeaders)(), (0,_defaults_js__WEBPACK_IMPORTED_MODULE_2__.DefaultInit)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.BrowserFetchWithRetry)(), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.DefaultParse)(), 
        // remove SPFx Token in default due to issues #2570, #2571
        // SPFxToken(context),
        (0,_request_digest_js__WEBPACK_IMPORTED_MODULE_3__.RequestDigest)((url) => {
            var _a, _b, _c;
            const sameWeb = (new RegExp(`^${(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(context.pageContext.web.absoluteUrl, "/_api")}`, "i")).test(url);
            if (sameWeb && ((_b = (_a = context === null || context === void 0 ? void 0 : context.pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.formDigestValue)) {
                const creationDateFromDigest = new Date(context.pageContext.legacyPageContext.formDigestValue.split(",")[1]);
                // account for page lifetime in timeout #2304 & others
                // account for tab sleep #2550
                return {
                    value: context.pageContext.legacyPageContext.formDigestValue,
                    expiration: (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(creationDateFromDigest, "second", ((_c = context.pageContext.legacyPageContext) === null || _c === void 0 ? void 0 : _c.formDigestTimeoutSeconds) - 15 || 1585),
                };
            }
        }));
        // we want to fix up the url first
        instance.on.pre.prepend(async (url, init, result) => {
            if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(url)) {
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(context.pageContext.web.absoluteUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 2630:
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/telemetry.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Telemetry: () => (/* binding */ Telemetry)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            let clientTag = "PnPCoreJS:4.8.0:";
            // make our best guess based on url to the method called
            const { pathname } = new URL(url);
            // remove anything before the _api as that is potentially PII and we don't care, just want to get the called path to the REST API
            // and we want to modify any (*) calls at the end such as items(3) and items(344) so we just track "items()"
            clientTag = pathname.split("/")
                .filter((v) => !(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(v) && ["_api", "v2.1", "v2.0"].indexOf(v) < 0)
                .map((value, index, arr) => index === arr.length - 1 ? value.replace(/\(.*?$/i, "()") : value[0])
                .join(".");
            if (clientTag.length > 32) {
                clientTag = clientTag.substring(0, 32);
            }
            this.log(`Request Tag: ${clientTag}`, 0);
            init.headers = { ...init.headers, ["X-ClientService-ClientTag"]: clientTag };
            return [url, init, result];
        });
        return instance;
    };
}


/***/ }),

/***/ 6540:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPath: () => (/* binding */ defaultPath)
/* harmony export */ });
/**
 * Decorator used to specify the default path for SPQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}


/***/ }),

/***/ 6553:
/*!************************************!*\
  !*** ./node_modules/@pnp/sp/fi.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFI: () => (/* binding */ SPFI),
/* harmony export */   spfi: () => (/* binding */ spfi)
/* harmony export */ });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ 2678);

class SPFI {
    /**
     * Creates a new instance of the SPFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function spfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new SPFI(root);
}


/***/ }),

/***/ 7881:
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPFx: () => (/* reexport safe */ _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_10__.SPFx),
/* harmony export */   extractWebUrl: () => (/* reexport safe */ _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__.extractWebUrl),
/* harmony export */   spfi: () => (/* reexport safe */ _fi_js__WEBPACK_IMPORTED_MODULE_1__.spfi)
/* harmony export */ });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ 2678);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fi.js */ 6553);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 8713);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/extract-web-url.js */ 2997);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/odata-url-from.js */ 905);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/encode-path-str.js */ 4729);
/* harmony import */ var _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/defaults.js */ 7140);
/* harmony import */ var _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/telemetry.js */ 2630);
/* harmony import */ var _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/request-digest.js */ 670);
/* harmony import */ var _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/spbrowser.js */ 6793);
/* harmony import */ var _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/spfx.js */ 4243);
















/***/ }),

/***/ 9721:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ 5685);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 132);




/***/ }),

/***/ 5685:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/items/list.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ 9706);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 132);



(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__._List, "items", _types_js__WEBPACK_IMPORTED_MODULE_2__.Items);


/***/ }),

/***/ 132:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/items/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Items: () => (/* binding */ Items)
/* harmony export */ });
/* unused harmony exports _Items, _Item, Item, _ItemVersions, ItemVersions, _ItemVersion, ItemVersion */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4346);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ 7881);
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lists/types.js */ 9706);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 6540);







/**
 * Describes a collection of Item objects
 *
 */
let _Items = class _Items extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    getById(id) {
        return Item(this).concat(`(${id})`);
    }
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    getItemByStringId(stringId) {
        // creates an item with the parent list path and append out method call
        return Item([this, this.parentUrl], `getItemByStringId('${stringId}')`);
    }
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    skip(skip, reverse = false) {
        if (reverse) {
            this.query.set("$skiptoken", `Paged=TRUE&PagedPrev=TRUE&p_ID=${skip}`);
        }
        else {
            this.query.set("$skiptoken", `Paged=TRUE&p_ID=${skip}`);
        }
        return this;
    }
    [Symbol.asyncIterator]() {
        const nextInit = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPCollection)(this).using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseBinderWithErrorCheck)(async (r) => {
            const json = await r.json();
            const nextLink = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.hOP)(json, "d") && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.hOP)(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
            return {
                hasNext: typeof nextLink === "string" && nextLink.length > 0,
                nextLink,
                value: (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseODataJSON)(json),
            };
        }));
        const queryParams = ["$top", "$select", "$expand", "$filter", "$orderby", "$skiptoken"];
        for (let i = 0; i < queryParams.length; i++) {
            const param = this.query.get(queryParams[i]);
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(param)) {
                nextInit.query.set(queryParams[i], param);
            }
        }
        return {
            _next: nextInit,
            async next() {
                if (this._next === null) {
                    return { done: true, value: undefined };
                }
                const result = await this._next();
                if (result.hasNext) {
                    this._next = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPCollection)([this._next, result.nextLink]);
                    return { done: false, value: result.value };
                }
                else {
                    this._next = null;
                    return { done: false, value: result.value };
                }
            },
        };
    }
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    async add(properties = {}) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)(properties));
    }
};
_Items = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("items")
], _Items);

const Items = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_Items);
/**
 * Descrines a single Item instance
 *
 */
class _Item extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteableWithETag)();
    }
    /**
     * Gets the effective base permissions for the item
     *
     */
    get effectiveBasePermissions() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the effective base permissions for the item in a UI context
     *
     */
    get effectiveBasePermissionsForUI() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)(this, "EffectiveBasePermissionsForUI");
    }
    /**
     * Gets the field values for this list item in their HTML representation
     *
     */
    get fieldValuesAsHTML() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesAsHTML");
    }
    /**
     * Gets the field values for this list item in their text representation
     *
     */
    get fieldValuesAsText() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesAsText");
    }
    /**
     * Gets the field values for this list item for use in editing controls
     *
     */
    get fieldValuesForEdit() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPInstance)(this, "FieldValuesForEdit");
    }
    /**
     * Gets the collection of versions associated with this item
     */
    get versions() {
        return ItemVersions(this);
    }
    /**
     * this item's list
     */
    get list() {
        return this.getParent(_lists_types_js__WEBPACK_IMPORTED_MODULE_3__.List, "", this.parentUrl.substring(0, this.parentUrl.lastIndexOf("/")));
    }
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)(properties, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.headers)({
            "IF-Match": eTag,
            "X-HTTP-Method": "MERGE",
        }));
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this).using(ItemUpdatedParser()), postBody);
    }
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "recycle"));
    }
    /**
     * Deletes the item object with options.
     *
     * @param parameters Specifies the options to use when deleting a item.
     */
    async deleteWithParams(parameters) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "DeleteWithParameters"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)({ parameters }));
    }
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    async getWopiFrameUrl(action = 0) {
        const i = Item(this, "getWOPIFrameUrl(@action)");
        i.query.set("@action", action);
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(i);
    }
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    validateUpdateListItem(formValues, bNewDocumentUpdate = false) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(Item(this, "validateupdatelistitem"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.body)({ formValues, bNewDocumentUpdate }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "ParentList/Id", "ParentList/Title", "ParentList/RootFolder/UniqueId", "ParentList/RootFolder/ServerRelativeUrl", "ParentList/RootFolder/ServerRelativePath", "ParentList/ParentWeb/Id", "ParentList/ParentWeb/Url", "ParentList/ParentWeb/ServerRelativeUrl", "ParentList/ParentWeb/ServerRelativePath").expand("ParentList", "ParentList/RootFolder", "ParentList/ParentWeb")();
        return {
            Item: {
                Id: urlInfo.Id,
            },
            ParentList: {
                Id: urlInfo.ParentList.Id,
                Title: urlInfo.ParentList.Title,
                RootFolderServerRelativePath: urlInfo.ParentList.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.ParentList.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.ParentList.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentList.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentList.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentList.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentList.ParentWeb.Url,
            },
        };
    }
    async setImageField(fieldName, imageName, imageContent) {
        const contextInfo = await this.getParentInfos();
        const webUrl = (0,_pnp_sp__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(this.toUrl());
        const q = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SPQueryable)([this, webUrl], "/_api/web/UploadImage");
        q.concat("(listTitle=@a1,imageName=@a2,listId=@a3,itemId=@a4)");
        q.query.set("@a1", `'${contextInfo.ParentList.Title}'`);
        q.query.set("@a2", `'${imageName}'`);
        q.query.set("@a3", `'${contextInfo.ParentList.Id}'`);
        q.query.set("@a4", contextInfo.Item.Id);
        const result = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spPost)(q, { body: imageContent });
        const itemInfo = {
            "type": "thumbnail",
            "fileName": result.Name,
            "nativeFile": {},
            "fieldName": fieldName,
            "serverUrl": contextInfo.ParentWeb.Url.replace(contextInfo.ParentWeb.ServerRelativeUrl, ""),
            "serverRelativeUrl": result.ServerRelativeUrl,
            "id": result.UniqueId,
        };
        return this.validateUpdateListItem([{
                FieldName: fieldName,
                FieldValue: JSON.stringify(itemInfo),
            }]);
    }
}
const Item = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_Item);
/**
 * Describes a collection of Version objects
 *
 */
let _ItemVersions = class _ItemVersions extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPCollection {
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    getById(versionId) {
        return ItemVersion(this).concat(`(${versionId})`);
    }
};
_ItemVersions = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("versions")
], _ItemVersions);

const ItemVersions = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
class _ItemVersion extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.deleteableWithETag)();
    }
}
const ItemVersion = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_ItemVersion);
function ItemUpdatedParser() {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_4__.parseBinderWithErrorCheck)(async (r) => ({
        etag: r.headers.get("etag"),
    }));
}


/***/ }),

/***/ 2033:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ 2519);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ 9706);




/***/ }),

/***/ 9706:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Lists: () => (/* binding */ Lists),
/* harmony export */   _List: () => (/* binding */ _List)
/* harmony export */ });
/* unused harmony exports _Lists, RenderListDataOptions, ControlMode */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4346);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 905);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 6540);
/* harmony import */ var _utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-resource-path.js */ 4259);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 4729);








let _Lists = class _Lists extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPCollection {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id) {
        return List(this).concat(`('${id}')`);
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title) {
        return List(this, `getByTitle('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(title)}')`);
    }
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    async add(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addSettings = {
            "AllowContentTypes": enableContentTypes,
            "BaseTemplate": template,
            "ContentTypesEnabled": enableContentTypes,
            "Description": desc,
            "Title": title,
            ...additionalSettings,
        };
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(addSettings));
    }
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    async ensure(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        const addOrUpdateSettings = { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes, ...additionalSettings };
        const list = this.getByTitle(addOrUpdateSettings.Title);
        try {
            await list.select("Title")();
            const data = await list.update(addOrUpdateSettings);
            return { created: false, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
        catch (e) {
            const data = await this.add(title, desc, template, enableContentTypes, addOrUpdateSettings);
            return { created: true, data, list: this.getByTitle(addOrUpdateSettings.Title) };
        }
    }
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    async ensureSiteAssetsLibrary() {
        const json = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Lists(this, "ensuresiteassetslibrary"));
        return List([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json)]);
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    async ensureSitePagesLibrary() {
        const json = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(Lists(this, "ensuresitepageslibrary"));
        return List([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json)]);
    }
};
_Lists = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("lists")
], _Lists);

const Lists = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Lists);
class _List extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SPInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteableWithETag)();
    }
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "EffectiveBasePermissions");
    }
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPCollection)(this, "EventReceivers");
    }
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "getRelatedFields");
    }
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SPQueryable)(this, "InformationRightsManagementSettings");
    }
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    async update(properties, eTag = "*") {
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(properties, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.headers)({ "IF-Match": eTag })));
        return data;
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getchanges"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query, ...expands) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getitems").expand(...expands), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "getlistitemchangessincetoken").using((0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.TextParse)()), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({ query }));
    }
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    async recycle() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "recycle"));
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    async renderListData(viewXml) {
        const q = List(this, "renderlistdata(@viewXml)");
        q.query.set("@viewXml", `'${viewXml}'`);
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(q);
        return JSON.parse(data);
    }
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    // eslint-disable-next-line max-len
    renderListDataAsStream(parameters, overrideParameters = null, query = new Map()) {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(parameters, "RenderOptions") && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce((v, c) => v + c);
        }
        const clone = List(this, "RenderListDataAsStream");
        if (query && query.size > 0) {
            query.forEach((v, k) => clone.query.set(k, v));
        }
        const params = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(overrideParameters) ? { parameters, overrideParameters } : { parameters };
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(clone, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)(params));
    }
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    async renderListFormData(itemId, formId, mode) {
        const data = await (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
        // data will be a string, so we parse it again
        return JSON.parse(data);
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    async reserveListItemId() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "reservelistitemid"));
    }
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    async addValidateUpdateItemUsingPath(formValues, decodedUrl, bNewDocumentUpdate = false, checkInComment, additionalProps) {
        const addProps = {
            FolderPath: (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__.toResourcePath)(decodedUrl),
        };
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(additionalProps)) {
            if (additionalProps.leafName) {
                addProps.LeafName = (0,_utils_to_resource_path_js__WEBPACK_IMPORTED_MODULE_7__.toResourcePath)(additionalProps.leafName);
            }
            if (additionalProps.objectType) {
                addProps.UnderlyingObjectType = additionalProps.objectType;
            }
        }
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spPost)(List(this, "AddValidateUpdateItemUsingPath()"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.body)({
            bNewDocumentUpdate,
            checkInComment,
            formValues,
            listItemCreateInfo: addProps,
        }));
    }
    /**
     * Gets the parent information for this item's list and web
     */
    async getParentInfos() {
        const urlInfo = await this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")();
        return {
            List: {
                Id: urlInfo.Id,
                RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
            },
            ParentWeb: {
                Id: urlInfo.ParentWeb.Id,
                ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                Url: urlInfo.ParentWeb.Url,
            },
        };
    }
}
const List = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    /**
     * The returned list will have a FileSystemItemId field on each item if possible.
     */
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    /**
     * Returns the client form schema to add and edit items.
     */
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    /**
     * Returns QuickLaunch navigation nodes.
     */
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    /**
     * Returns Spotlight rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    /**
     * Returns Visualization rendering information.
     */
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    /**
     * Returns view XML and other information about the current view.
     */
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    /**
     * Prevents AutoHyperlink from being run on text fields in this query.
     */
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    /**
     * Enables urls pointing to Media TA service, such as .thumbnailUrl, .videoManifestUrl, .pdfConversionUrls.
     */
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    /**
     * Return Parant folder information.
     */
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    /**
     * Return Page context info for the current list being rendered.
     */
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    /**
     * Return client-side component manifest information associated with the list.
     */
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
    /**
     * Return all content-types available on the list.
     */
    RenderListDataOptions[RenderListDataOptions["ListAvailableContentTypes"] = 65536] = "ListAvailableContentTypes";
    /**
      * Return the order of items in the new-item menu.
      */
    RenderListDataOptions[RenderListDataOptions["FolderContentTypeOrder"] = 131072] = "FolderContentTypeOrder";
    /**
     * Return information to initialize Grid for quick edit.
     */
    RenderListDataOptions[RenderListDataOptions["GridInitInfo"] = 262144] = "GridInitInfo";
    /**
     * Indicator if the vroom API of the SPItemUrl returned in MediaTAUrlGenerator should use site url as host.
     */
    RenderListDataOptions[RenderListDataOptions["SiteUrlAsMediaTASPItemHost"] = 524288] = "SiteUrlAsMediaTASPItemHost";
    /**
     * Return the files representing mount points in the list.
     */
    RenderListDataOptions[RenderListDataOptions["AddToOneDrive"] = 1048576] = "AddToOneDrive";
    /**
     * Return SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["SPFXCustomActions"] = 2097152] = "SPFXCustomActions";
    /**
     * Do not return non-SPFX CustomAction.
     */
    RenderListDataOptions[RenderListDataOptions["CustomActions"] = 4194304] = "CustomActions";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));


/***/ }),

/***/ 2519:
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/lists/web.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ 3169);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 9706);
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/odata-url-from.js */ 905);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 4729);






(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "lists", _types_js__WEBPACK_IMPORTED_MODULE_2__.Lists);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "siteUserInfoList", _types_js__WEBPACK_IMPORTED_MODULE_2__.List);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "defaultDocumentLibrary", _types_js__WEBPACK_IMPORTED_MODULE_2__.List);
(0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "customListTemplates", _spqueryable_js__WEBPACK_IMPORTED_MODULE_4__.SPCollection, "getcustomlisttemplates");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getList = function (listRelativeUrl) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)(this, `getList('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_5__.encodePath)(listRelativeUrl)}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getCatalog = async function (type) {
    const data = await (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_1__.Web)(this, `getcatalog(${type})`).select("Id")();
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)([this, (0,_utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(data)]);
};


/***/ }),

/***/ 2678:
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/spqueryable.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPCollection: () => (/* binding */ SPCollection),
/* harmony export */   SPInstance: () => (/* binding */ SPInstance),
/* harmony export */   SPQueryable: () => (/* binding */ SPQueryable),
/* harmony export */   _SPCollection: () => (/* binding */ _SPCollection),
/* harmony export */   _SPInstance: () => (/* binding */ _SPInstance),
/* harmony export */   _SPQueryable: () => (/* binding */ _SPQueryable),
/* harmony export */   deleteable: () => (/* binding */ deleteable),
/* harmony export */   deleteableWithETag: () => (/* binding */ deleteableWithETag),
/* harmony export */   spInvokableFactory: () => (/* binding */ spInvokableFactory),
/* harmony export */   spPost: () => (/* binding */ spPost),
/* harmony export */   spPostMerge: () => (/* binding */ spPostMerge)
/* harmony export */ });
/* unused harmony exports spGet, spPostDelete, spPostDeleteETag, spDelete, spPatch */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ 6844);


const spInvokableFactory = (f) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.queryableFactory)(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SPQueryable extends _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.Queryable {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param base A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        if (typeof base === "string") {
            let url = "";
            let parentUrl = "";
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(base) || base.lastIndexOf("/") < 0) {
                parentUrl = base;
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base, path);
            }
            else if (base.lastIndexOf("/") > base.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = base.lastIndexOf("/");
                parentUrl = base.slice(0, index);
                path = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base.slice(index), path);
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = base.lastIndexOf("(");
                parentUrl = base.slice(0, index);
                url = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(base, path);
            }
            // init base with corrected string value
            super(url);
            this.parentUrl = parentUrl;
        }
        else {
            super(base, path);
            const q = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(base) ? base[0] : base;
            this.parentUrl = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isArray)(base) ? base[1] : q.toUrl();
        }
    }
    /**
     * Gets the full url with query information
     */
    toRequestUrl() {
        const aliasedParams = new URLSearchParams(this.query);
        // this regex is designed to locate aliased parameters within url paths
        let url = this.toUrl().replace(/'!(@.+?)::((?:[^']|'')+)'/ig, (match, labelName, value) => {
            this.log(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0);
            aliasedParams.set(labelName, `'${value}'`);
            return labelName;
        });
        const query = aliasedParams.toString();
        if (!(0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(query)) {
            url += `${url.indexOf("?") > -1 ? "&" : "?"}${query}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.join(","));
        }
        return this;
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.join(","));
        }
        return this;
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, path, base = this.parentUrl) {
        return factory([this, base], path);
    }
}
const SPQueryable = spInvokableFactory(_SPQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SPCollection extends _SPQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        if (typeof filter === "object") {
            this.query.set("$filter", filter.toString());
            return this;
        }
        if (typeof filter === "function") {
            this.query.set("$filter", filter(SPOData.Where()).toString());
            return this;
        }
        this.query.set("$filter", filter.toString());
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${orderBy} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SPCollection = spInvokableFactory(_SPCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SPInstance extends _SPQueryable {
}
const SPInstance = spInvokableFactory(_SPInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable() {
    return function () {
        return spPostDelete(this);
    };
}
function deleteableWithETag() {
    return function (eTag = "*") {
        return spPostDeleteETag(this, {}, eTag);
    };
}
const spGet = (o, init) => {
    return (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.get, init);
};
const spPost = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.post, init);
const spPostMerge = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers, "X-HTTP-Method": "MERGE" };
    return spPost(o, init);
};
const spPostDelete = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers || {}, "X-HTTP-Method": "DELETE" };
    return spPost(o, init);
};
const spPostDeleteETag = (o, init, eTag = "*") => {
    init = init || {};
    init.headers = { ...init.headers || {}, "IF-Match": eTag };
    return spPostDelete(o, init);
};
const spDelete = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.del, init);
const spPatch = (o, init) => (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.op)(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__.patch, init);
var FilterOperation;
(function (FilterOperation) {
    FilterOperation["Equals"] = "eq";
    FilterOperation["NotEquals"] = "ne";
    FilterOperation["GreaterThan"] = "gt";
    FilterOperation["GreaterThanOrEqualTo"] = "ge";
    FilterOperation["LessThan"] = "lt";
    FilterOperation["LessThanOrEqualTo"] = "le";
    FilterOperation["StartsWith"] = "startswith";
    FilterOperation["SubstringOf"] = "substringof";
})(FilterOperation || (FilterOperation = {}));
var FilterJoinOperator;
(function (FilterJoinOperator) {
    FilterJoinOperator["And"] = "and";
    FilterJoinOperator["AndWithSpace"] = " and ";
    FilterJoinOperator["Or"] = "or";
    FilterJoinOperator["OrWithSpace"] = " or ";
})(FilterJoinOperator || (FilterJoinOperator = {}));
class SPOData {
    static Where() {
        return new InitialFieldQuery([]);
    }
}
// Linting complains that TBaseInterface is unused, but without it all the intellisense is lost since it's carrying it through the chain
class BaseQuery {
    constructor(query) {
        this.query = [];
        this.query = query;
    }
}
class QueryableFields extends BaseQuery {
    constructor(q) {
        super(q);
    }
    text(internalName) {
        return new TextField([...this.query, internalName]);
    }
    choice(internalName) {
        return new TextField([...this.query, internalName]);
    }
    multiChoice(internalName) {
        return new TextField([...this.query, internalName]);
    }
    number(internalName) {
        return new NumberField([...this.query, internalName]);
    }
    date(internalName) {
        return new DateField([...this.query, internalName]);
    }
    boolean(internalName) {
        return new BooleanField([...this.query, internalName]);
    }
    lookup(internalName) {
        return new LookupQueryableFields([...this.query], internalName);
    }
    lookupId(internalName) {
        const col = internalName.endsWith("Id") ? internalName : `${internalName}Id`;
        return new NumberField([...this.query, col]);
    }
}
class QueryableAndResult extends QueryableFields {
    or(...queries) {
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.OrWithSpace)})`]);
    }
}
class QueryableOrResult extends QueryableFields {
    and(...queries) {
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.AndWithSpace)})`]);
    }
}
class InitialFieldQuery extends QueryableFields {
    or(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableFields([...this.query, FilterJoinOperator.Or]);
        }
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.OrWithSpace)})`]);
    }
    and(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableFields([...this.query, FilterJoinOperator.And]);
        }
        return new ComparisonResult([...this.query, `(${queries.map(x => x.toString()).join(FilterJoinOperator.AndWithSpace)})`]);
    }
}
class LookupQueryableFields extends BaseQuery {
    constructor(q, LookupField) {
        super(q);
        this.LookupField = LookupField;
    }
    Id(id) {
        return new ComparisonResult([...this.query, `${this.LookupField}/Id`, FilterOperation.Equals, id.toString()]);
    }
    text(internalName) {
        return new TextField([...this.query, `${this.LookupField}/${internalName}`]);
    }
    number(internalName) {
        return new NumberField([...this.query, `${this.LookupField}/${internalName}`]);
    }
}
class NullableField extends BaseQuery {
    constructor(q) {
        super(q);
        this.LastIndex = q.length - 1;
        this.InternalName = q[this.LastIndex];
    }
    toODataValue(value) {
        return `'${value}'`;
    }
    isNull() {
        return new ComparisonResult([...this.query, FilterOperation.Equals, "null"]);
    }
    isNotNull() {
        return new ComparisonResult([...this.query, FilterOperation.NotEquals, "null"]);
    }
}
class ComparableField extends NullableField {
    equals(value) {
        return new ComparisonResult([...this.query, FilterOperation.Equals, this.toODataValue(value)]);
    }
    notEquals(value) {
        return new ComparisonResult([...this.query, FilterOperation.NotEquals, this.toODataValue(value)]);
    }
    in(...values) {
        return SPOData.Where().or(...values.map(x => this.equals(x)));
    }
    notIn(...values) {
        return SPOData.Where().and(...values.map(x => this.notEquals(x)));
    }
}
class TextField extends ComparableField {
    startsWith(value) {
        const filter = `${FilterOperation.StartsWith}(${this.InternalName}, ${this.toODataValue(value)})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
    contains(value) {
        const filter = `${FilterOperation.SubstringOf}(${this.toODataValue(value)}, ${this.InternalName})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
}
class BooleanField extends NullableField {
    toODataValue(value) {
        return `${value == null ? "null" : value ? 1 : 0}`;
    }
    isTrue() {
        return new ComparisonResult([...this.query, FilterOperation.Equals, this.toODataValue(true)]);
    }
    isFalse() {
        return new ComparisonResult([...this.query, FilterOperation.Equals, this.toODataValue(false)]);
    }
    isFalseOrNull() {
        const filter = `(${[
            this.InternalName,
            FilterOperation.Equals,
            this.toODataValue(null),
            FilterJoinOperator.Or,
            this.InternalName,
            FilterOperation.Equals,
            this.toODataValue(false),
        ].join(" ")})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
}
class NumericField extends ComparableField {
    greaterThan(value) {
        return new ComparisonResult([...this.query, FilterOperation.GreaterThan, this.toODataValue(value)]);
    }
    greaterThanOrEquals(value) {
        return new ComparisonResult([...this.query, FilterOperation.GreaterThanOrEqualTo, this.toODataValue(value)]);
    }
    lessThan(value) {
        return new ComparisonResult([...this.query, FilterOperation.LessThan, this.toODataValue(value)]);
    }
    lessThanOrEquals(value) {
        return new ComparisonResult([...this.query, FilterOperation.LessThanOrEqualTo, this.toODataValue(value)]);
    }
}
class NumberField extends NumericField {
    toODataValue(value) {
        return `${value}`;
    }
}
class DateField extends NumericField {
    toODataValue(value) {
        return `'${value.toISOString()}'`;
    }
    isBetween(startDate, endDate) {
        const filter = `(${[
            this.InternalName,
            FilterOperation.GreaterThan,
            this.toODataValue(startDate),
            FilterJoinOperator.And,
            this.InternalName,
            FilterOperation.LessThan,
            this.toODataValue(endDate),
        ].join(" ")})`;
        this.query[this.LastIndex] = filter;
        return new ComparisonResult([...this.query]);
    }
    isToday() {
        const StartToday = new Date();
        StartToday.setHours(0, 0, 0, 0);
        const EndToday = new Date();
        EndToday.setHours(23, 59, 59, 999);
        return this.isBetween(StartToday, EndToday);
    }
}
class ComparisonResult extends BaseQuery {
    // eslint-disable-next-line max-len
    and(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableAndResult([...this.query, FilterJoinOperator.And]);
        }
        return new ComparisonResult([...this.query, FilterJoinOperator.And, `(${queries.map(x => x.toString()).join(FilterJoinOperator.AndWithSpace)})`]);
    }
    // eslint-disable-next-line max-len
    or(...queries) {
        if (queries == null || queries.length === 0) {
            return new QueryableOrResult([...this.query, FilterJoinOperator.Or]);
        }
        return new ComparisonResult([...this.query, FilterJoinOperator.Or, `(${queries.map(x => x.toString()).join(FilterJoinOperator.OrWithSpace)})`]);
    }
    toString() {
        return this.query.join(" ");
    }
}


/***/ }),

/***/ 8713:
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/types.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports emptyGuid, PrincipalType, PrincipalSource, PageType */
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
const emptyGuid = "00000000-0000-0000-0000-000000000000";
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));


/***/ }),

/***/ 4729:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/encode-path-str.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodePath: () => (/* binding */ encodePath)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

/**
 * Encodes path portions of SharePoint urls such as decodedUrl=`encodePath(pathStr)`
 *
 * @param value The string path to encode
 * @returns A path encoded for use in SP urls
 */
function encodePath(value) {
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            // we do not need to encodeURIComponent v as it will be encoded automatically when it is added as a query string param
            // we do need to double any ' chars
            return `!${labelName}::${v.replace(/'/ig, "''")}`;
        });
    }
    else {
        // because this is a literal path value we encodeURIComponent after doubling any ' chars
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}


/***/ }),

/***/ 2997:
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extract-web-url.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractWebUrl: () => (/* binding */ extractWebUrl)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);

function extractWebUrl(candidateUrl) {
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substring(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}


/***/ }),

/***/ 905:
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/odata-url-from.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   odataUrlFrom: () => (/* binding */ odataUrlFrom)
/* harmony export */ });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extract-web-url.js */ 2997);


function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[3]) && (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push((0,_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__.extractWebUrl)(candidate[s[3]]), "_api", editLink);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        return "";
    }
    return (0,_pnp_core__WEBPACK_IMPORTED_MODULE_0__.combine)(...parts);
}


/***/ }),

/***/ 4259:
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/to-resource-path.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toResourcePath: () => (/* binding */ toResourcePath)
/* harmony export */ });
function toResourcePath(url) {
    return {
        DecodedUrl: url,
    };
}


/***/ }),

/***/ 3867:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ 3169);
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fi.js */ 6553);



Reflect.defineProperty(_fi_js__WEBPACK_IMPORTED_MODULE_1__.SPFI.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.create(_types_js__WEBPACK_IMPORTED_MODULE_0__.Web);
    },
});


/***/ }),

/***/ 3169:
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/types.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web: () => (/* binding */ Web),
/* harmony export */   _Web: () => (/* binding */ _Web)
/* harmony export */ });
/* unused harmony exports _Webs, Webs */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4346);
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ 6844);
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spqueryable.js */ 2678);
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ 6540);
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/extract-web-url.js */ 2997);
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/core */ 1971);
/* harmony import */ var _utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/encode-path-str.js */ 4729);







let _Webs = class _Webs extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPCollection {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    async add(Title, Url, Description = "", WebTemplate = "STS", Language = 1033, UseSamePermissionsAsParentSite = true) {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            "parameters": {
                Description,
                Language,
                Title,
                Url,
                UseSamePermissionsAsParentSite,
                WebTemplate,
            },
        });
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Webs(this, "add"), postBody);
    }
};
_Webs = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("webs")
], _Webs);

const Webs = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spInvokableFactory)(_Webs);
/**
 * Ensures the url passed to the constructor is correctly rebased to a web url
 *
 * @param candidate The candidate web url
 * @param path The caller supplied path, which may contain _api, meaning we don't append _api/web
 */
function rebaseWebUrl(candidate, path) {
    let replace = "_api/web";
    // this allows us to both:
    // - test if `candidate` already has an api path
    // - ensure that we append the correct one as sometimes a web is not defined
    //   by _api/web, in the case of _api/site/rootweb for example
    const matches = /(_api[/|\\](site\/rootweb|site|web))/i.exec(candidate);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) > 0) {
        // we want just the base url part (before the _api)
        candidate = (0,_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_2__.extractWebUrl)(candidate);
        // we want to ensure we put back the correct string
        replace = matches[1];
    }
    // we only need to append the _api part IF `path` doesn't already include it.
    if ((path === null || path === void 0 ? void 0 : path.indexOf("_api")) < 0) {
        candidate = (0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.combine)(candidate, replace);
    }
    return candidate;
}
/**
 * Describes a web
 *
 */
let _Web = class _Web extends _spqueryable_js__WEBPACK_IMPORTED_MODULE_1__._SPInstance {
    constructor(base, path) {
        if (typeof base === "string") {
            base = rebaseWebUrl(base, path);
        }
        else if ((0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.isArray)(base)) {
            base = [base[0], rebaseWebUrl(base[1], path)];
        }
        else {
            base = [base, rebaseWebUrl(base.toUrl(), path)];
        }
        super(base, path);
        this.delete = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.deleteable)();
    }
    /**
     * Gets this web's subwebs
     *
     */
    get webs() {
        return Webs(this);
    }
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPInstance)(this, "allproperties");
    }
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos() {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, "webinfos");
    }
    /**
     * Gets this web's parent web and data
     *
     */
    async getParentWeb() {
        const { Url, ParentWeb } = await this.select("Url", "ParentWeb/ServerRelativeUrl").expand("ParentWeb")();
        if (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.ServerRelativeUrl) {
            return Web([this, (0,_pnp_core__WEBPACK_IMPORTED_MODULE_3__.combine)((new URL(Url)).origin, ParentWeb.ServerRelativeUrl)]);
        }
        return null;
    }
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    async update(properties) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPostMerge)(this, (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)(properties));
    }
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        const postBody = (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            backgroundImageUrl,
            colorPaletteUrl,
            fontSchemeUrl,
            shareGenerated,
        });
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "applytheme"), postBody);
    }
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, `applywebtemplate(webTemplate='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(template)}')`));
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "getchanges"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({ query }));
    }
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename, size = 0, progId = "") {
        return Web(this, `maptoicon(filename='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(filename)}',progid='${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(progId)}',size=${size})`)();
    }
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key) {
        return Web(this, `getStorageEntity('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(key)}')`)();
    }
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key, value, description = "", comments = "") {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, "setStorageEntity"), (0,_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__.body)({
            comments,
            description,
            key,
            value,
        }));
    }
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spPost)(Web(this, `removeStorageEntity('${(0,_utils_encode_path_str_js__WEBPACK_IMPORTED_MODULE_4__.encodePath)(key)}')`));
    }
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter = -1, nConfigurationFilter = -1) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, `getSubwebsFilteredForCurrentUser(nWebTemplateFilter=${nWebTemplateFilter},nConfigurationFilter=${nConfigurationFilter})`);
    }
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language = 1033, includeCrossLanugage = true) {
        return (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.SPCollection)(this, `getavailablewebtemplates(lcid=${language},doincludecrosslanguage=${includeCrossLanugage})`);
    }
};
_Web = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_6__.defaultPath)("_api/web")
], _Web);

const Web = (0,_spqueryable_js__WEBPACK_IMPORTED_MODULE_1__.spInvokableFactory)(_Web);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 2650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 2729);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ 3878);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ 4723);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ 3134);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! HelloWorldWebPartStrings */ 3070);
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HelloWorld */ 8427);
/* harmony import */ var _pnpConfigFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pnpConfigFile */ 6586);
var __extends = (undefined && undefined.__extends) || (function () {
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








var HelloWorldWebPart = /** @class */ (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    HelloWorldWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_HelloWorld__WEBPACK_IMPORTED_MODULE_6__["default"], {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, this.domElement);
    };
    HelloWorldWebPart.prototype.onInit = function () {
        var _this = this;
        (0,_pnpConfigFile__WEBPACK_IMPORTED_MODULE_7__.initializePnP)(this.context);
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    HelloWorldWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppLocalEnvironmentOffice : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppOfficeEnvironment;
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppLocalEnvironmentOutlook : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppOutlookEnvironment;
                        break;
                    case 'Teams': // running in Teams
                    case 'TeamsModern':
                        environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppLocalEnvironmentTeams : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppTeamsTabEnvironment;
                        break;
                    default:
                        environmentMessage = HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.UnknownEnvironment;
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppLocalEnvironmentSharePoint : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.AppSharePointEnvironment);
    };
    HelloWorldWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
            this.domElement.style.setProperty('--link', semanticColors.link || null);
            this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
        }
    };
    HelloWorldWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__.Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.BasicGroupName,
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)('description', {
                                    label: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_5__.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__.BaseClientSideWebPart));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorldWebPart);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=hello-world-web-part.js.map