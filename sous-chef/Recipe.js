import React from 'react';
import { StyleSheet, View, Dimensions, Alert, TouchableOpacity, Image } from 'react-native';
import {WebView} from 'react-native-webview'

const {height, width} = Dimensions.get('window')
export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };

  state = {
    favPressed: false
  }

  pressFav = () => {
    Alert.alert('Pressed fav');
    this.setState({favPressed: !this.state.favPressed})
  }

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


/*<FloatingAction
          onPressMain={this.pressFav}
          color="rgb(252, 44, 3)"
          icon = {require("./assets/heart.png")}
        /> */
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
