import * as React from 'react';
import { AppRegistry, PermissionsAndroid } from 'react-native';
import { Content, Text, Item, Input, Button, Icon  } from 'native-base';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

export interface State {
}

export interface Props {
}

export default class Recorder extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {  
    return ( 
      <Content>   
        <Item>
          <Input placeholder="Underline Textbox" />
        </Item>

        <Button rounded onPress={() => console.log('clicked')}>
          <Icon name="md-microphone" />
        </Button>

        <Text>
          01:23:45
        </Text>
      </Content>
    );
  }
}