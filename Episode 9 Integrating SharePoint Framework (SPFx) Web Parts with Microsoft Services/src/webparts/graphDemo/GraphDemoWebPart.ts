import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'GraphDemoWebPartStrings';
import GraphDemo from './components/GraphDemo';
import { IGraphDemoProps } from './components/IGraphDemoProps';
import {HttpClient, MSGraphClientV3, SPHttpClient  } from "@microsoft/sp-http";
export interface IGraphDemoWebPartProps {
  description: string;
}

export default class GraphDemoWebPart extends BaseClientSideWebPart<IGraphDemoWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IGraphDemoProps> = React.createElement(
      GraphDemo,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {

    //Step 1 - Integrating with Microsoft Graph API
    await this.context.msGraphClientFactory
      .getClient("3")
      .then(async (client: MSGraphClientV3): Promise<void> => {
        await client
          .api("/me")
          .get((error, response: any, rawResponse?: any) => {
            console.log("Graph API Response", response);
          });
      });

      //Step 2 - Integrating with SharePoint REST API
      await this.context.spHttpClient
      .get(
        `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('MyList')/items`,
        SPHttpClient.configurations.v1
      )
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
      });
      //Step 3 - Integrating with Power Automate
      const powerautomateURL = "<<Power Automate HTTP Trigger URL>>";

    try {
      const response = await this.context.httpClient.post(
        powerautomateURL,
        HttpClient.configurations.v1,
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "Triggered from SPFx!" }),
        }
      );

      if (response.ok) {
        console.log(
          "Power Automate triggered successfully:",
          await response.json()
        );
      } else {
        console.error(
          "Failed to trigger Power Automate:",
          response.statusText,
          await response.text()
        );
      }
    } catch (error) {
      console.error("Error triggering Power Automate:", error);
    }


    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
