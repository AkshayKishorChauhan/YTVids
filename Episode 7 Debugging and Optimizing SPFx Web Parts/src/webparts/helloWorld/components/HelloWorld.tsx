import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';
import { PrimaryButton, TextField } from '@fluentui/react';  
import { Stack } from '@fluentui/react/lib/Stack';  

export default class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactElement<IHelloWorldProps> {
   
    return (
        <Stack horizontalAlign="center" verticalAlign="center" styles={{ root: { height: '100%' } }}>  
            <h1>Welcome to SPFx with Fluent UI!</h1>  
            <TextField label="Enter your name:" placeholder="Your Name" />  
            <PrimaryButton  
              text="Submit"  
              onClick={() => alert('Button Clicked!')}  
              styles={{ root: { backgroundColor: 'green', color: 'white', borderRadius: '5px' } }}  
            /> 
          </Stack>        
    );
  }
}
