import React from 'react';
import { StyleSheet, View, Dimensions, Alert, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import {WebView} from 'react-native-webview'
import { AppLoading, Font, Asset, Icon } from 'expo';

const {height, width} = Dimensions.get('window')
export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };

  state = {
    favPressed: false,
  }

  pressFav = () => {
    Alert.alert('Pressed fav');
    this.setState({favPressed: !this.state.favPressed})
  }

  //when a recipe mounts, have to get the current list of recents
  //then when the recipe unmounts, have to pop the least recent from the array
  // and add the recipe to the front of the least recent array

  render() {
    const link = this.props.navigation.state.params.link
    return (
      <View style={styles.container}>
        <WebView source={{uri: link}} style={styles.webview}/>
        <TouchableOpacity
          style={this.state.favPressed
                  ? styles.fabContainer
                  : [styles.fabContainer, {backgroundColor: 'white'}]}
          onPress={this.pressFav}>
          <Image source={require('./assets/heart.png')} style={styles.floatingButton}/>
        </TouchableOpacity>
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
  },
  floatingButton: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  fabContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 100,
    borderWidth: 3,
    borderRadius: 25,
    backgroundColor: 'red',
  },
});
