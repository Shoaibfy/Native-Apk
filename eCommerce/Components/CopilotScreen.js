import {copilot, walkthroughable, CopilotStep} from 'react-native-copilot';
import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

const CopilotText = walkthroughable(Text);

class HomeScreen extends Component {
  componentDidMount() {
    this.props.start();
  }

  componentWillUnmount() {
    this.props.copilotEvents.off('stop');
  }

  render() {
    return (
      <View>
        <CopilotStep
          text="This is a hello world example!"
          order={1}
          name="hello">
          <CopilotText>Hello world!</CopilotText>
        </CopilotStep>
      </View>
    );
  }
}

export default copilot({
  overlay: 'svg', // or 'view'
  animated: true,
})(HomeScreen);
