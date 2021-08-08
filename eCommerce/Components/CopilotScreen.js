import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
import React, {Component} from 'react';
import {View, Text, StatusBar, Image, Switch} from 'react-native';

const CopilotText = walkthroughable(Text);
const WopilotText = walkthroughable(Image);

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondStepActive: true,
    };
  }

  componentDidMount() {
    this.props.start();
  }

  componentWillUnmount() {
    this.props.copilotEvents.off('stop');
  }

  render() {
    return (
      <View>
        <View>
          <CopilotStep
            style={{marginTop: 20}}
            text="This is a hello world example!"
            order={1}
            name="hello">
            <CopilotText>Hello world!</CopilotText>
          </CopilotStep>
        </View>
        <View>
          <CopilotStep text="Three" order={3} name="hello3">
            <CopilotText>Heaven 3 !</CopilotText>
          </CopilotStep>
        </View>
        <View>
          <CopilotStep
            text="This is two step"
            order={2}
            name="hello2"
            style={{width: '100%'}}>
            <WopilotText source={require('../Images/home.png')} />
          </CopilotStep>
        </View>
      </View>
    );
  }
}

export default copilot({
  overlay: 'svg', // or 'view'
  animated: true,
})(HomeScreen);
