import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Text } from 'native-base';

export interface State {
}

export interface Props {
}

export default class Setting extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }
  
  render() {  
    return (      
      <Text>
        Setting Component
      </Text>
    );
  }
}