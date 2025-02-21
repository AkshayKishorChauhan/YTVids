import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';   
import { Stack } from '@fluentui/react/lib/Stack';  
import SPFxCRUD from './SPFxCRUD';

export default class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactElement<IHelloWorldProps> {
   
    return (
        <Stack horizontalAlign="center" verticalAlign="center" styles={{ root: { height: '100%' } }}>  
            <SPFxCRUD listName='MyList' />
          </Stack>        
    );
  }
}
