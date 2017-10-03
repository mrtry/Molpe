import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Content, Text, List, ListItem, Icon, Body, Right, Left, Switch} from 'native-base';

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
      <Content>
        <List>
          <ListItem icon>
            <Left>
              <Icon name="plane" />
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="wifi" />
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="bluetooth" />
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    );
  }
}