import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };
  render() {
    const link = this.props.navigation.state.params.link
    return (
      <View style={styles.container}>
        <Text> The link for this recipe is: {link}</Text>
        <View style={styles.container}>
          <WebView source={{uri: link}}/>
        </View>
        
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
});
