import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {WebView} from 'react-native-webview'

const {height, width} = Dimensions.get('window')

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };
  render() {
    const link = this.props.navigation.state.params.link
    return (
      <View style={styles.container}>
        <WebView source={{uri: link}} style={styles.webview}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview: {
    flex: 1,
    width: width,
  }
});
