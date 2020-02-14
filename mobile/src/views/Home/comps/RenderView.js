import React from 'react'
import { View, Platform } from 'react-native'
// import { SafeAreaConsumer } from 'react-native-safe-area-context'
import { Container } from '../styles'

export default class RenderView extends React.Component {
  componentDidMount() {
    console.log(Platform.OS)
  }

  render() {
    return (
      <>
        {/* { Platform.OS === 'web' ? <Container>{this.props.children}</Container> :
          <SafeAreaConsumer>
            { insets => <Container style={{paddingTop: insets.top}}>{this.props.children}</Container> }
          </SafeAreaConsumer>
        } */}

        <Container>{this.props.children}</Container>
      </>
    );
  }
}