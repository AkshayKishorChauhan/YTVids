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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'GraphDemoWebPartStrings';
import GraphDemo from './components/GraphDemo';
import { HttpClient, SPHttpClient } from "@microsoft/sp-http";
var GraphDemoWebPart = /** @class */ (function (_super) {
    __extends(GraphDemoWebPart, _super);
    function GraphDemoWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    GraphDemoWebPart.prototype.render = function () {
        var element = React.createElement(GraphDemo, {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName
        });
        ReactDom.render(element, this.domElement);
    };
    GraphDemoWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var powerautomateURL, response, _a, _b, _c, _d, _e, _f, error_1;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: 
                    //Step 1 - Integrating with Microsoft Graph API
                    return [4 /*yield*/, this.context.msGraphClientFactory
                            .getClient("3")
                            .then(function (client) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, client
                                            .api("/me")
                                            .get(function (error, response, rawResponse) {
                                            console.log("Graph API Response", response);
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        //Step 1 - Integrating with Microsoft Graph API
                        _g.sent();
                        //Step 2 - Integrating with SharePoint REST API
                        return [4 /*yield*/, this.context.spHttpClient
                                .get("".concat(this.context.pageContext.web.absoluteUrl, "/_api/web/lists/getbytitle('MyList')/items"), SPHttpClient.configurations.v1)
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                console.log('data', data);
                            })];
                    case 2:
                        //Step 2 - Integrating with SharePoint REST API
                        _g.sent();
                        powerautomateURL = "https://prod-66.westus.logic.azure.com:443/workflows/09a73d80f7064d4e90fe492c5051e117/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LCAckJrHdCXToSDE7WVquKoOuDEW8vkKaq5TEbhVlVY";
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 9, , 10]);
                        return [4 /*yield*/, this.context.httpClient.post(powerautomateURL, HttpClient.configurations.v1, {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ message: "Triggered from SPFx!" }),
                            })];
                    case 4:
                        response = _g.sent();
                        if (!response.ok) return [3 /*break*/, 6];
                        _b = (_a = console).log;
                        _c = ["Power Automate triggered successfully:"];
                        return [4 /*yield*/, response.json()];
                    case 5:
                        _b.apply(_a, _c.concat([_g.sent()]));
                        return [3 /*break*/, 8];
                    case 6:
                        _e = (_d = console).error;
                        _f = ["Failed to trigger Power Automate:",
                            response.statusText];
                        return [4 /*yield*/, response.text()];
                    case 7:
                        _e.apply(_d, _f.concat([_g.sent()]));
                        _g.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_1 = _g.sent();
                        console.error("Error triggering Power Automate:", error_1);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/, this._getEnvironmentMessage().then(function (message) {
                            _this._environmentMessage = message;
                        })];
                }
            });
        });
    };
    GraphDemoWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
                        break;
                    case 'Teams': // running in Teams
                    case 'TeamsModern':
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
                        break;
                    default:
                        environmentMessage = strings.UnknownEnvironment;
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
    };
    GraphDemoWebPart.prototype.onThemeChanged = function (currentTheme) {
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
    GraphDemoWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(GraphDemoWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    GraphDemoWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return GraphDemoWebPart;
}(BaseClientSideWebPart));
export default GraphDemoWebPart;
//# sourceMappingURL=GraphDemoWebPart.js.map