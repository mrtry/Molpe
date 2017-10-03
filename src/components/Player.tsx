import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Content, Text, List, ListItem, } from 'native-base';

export interface State {
}

export interface Props {
}

export default class Player extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }
  
  render() {  
    return (      
      <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
    );
  }
}