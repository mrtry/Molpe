import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Recorder from './components/Recorder';
import Player   from './components/Player';
import Setting  from './components/Setting';

export interface State {
  currentActiveTab: String
}

export interface Props {
}

export default class Molpe extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      currentActiveTab: "Recorder"
    }
  }
  
  render() {  
    return (      
      <Container>
        <Header>
          <Body>
            <Title>{ this.state.currentActiveTab }</Title>
          </Body>
        </Header>

        {(
          () => {
            switch (this.state.currentActiveTab) {
              case "Recorder" :
                return <Recorder />
              case "Player" : 
                return <Player />
              case "Setting" :
                return <Setting />
            }
          }
        ) ()}
        
      <Footer>
        <FooterTab>
          <Button 
            active={ this.state.currentActiveTab == "Recorder" }
            onPress = {() => this.setState({currentActiveTab: "Recorder"})}
          >
            <Icon name="md-microphone" />
            <Text>Recorder</Text>
          </Button>

          <Button 
            active={ this.state.currentActiveTab == "Player" }
            onPress = {() => this.setState({currentActiveTab: "Player"})}  
          >
            <Icon name="md-headset" />
            <Text>Player</Text>
          </Button>

          <Button 
            active={ this.state.currentActiveTab == "Setting" }
            onPress = {() => this.setState({currentActiveTab: "Setting"})}
          >
            <Icon name="settings" />
            <Text>Setting</Text>
          </Button>

        </FooterTab>
      </Footer>

      </Container>
    );
  }
}

AppRegistry.registerComponent('Molpe', () => Molpe);