import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, Alert } from 'react-native';

const imageWidth = 200

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Search Results',
  };

  state = {
    
  }

  openRecipe = (obj) => {
    this.props.navigation.navigate('Recipe', {link: obj.link})
  }

  render() {
    const {navigate} = this.props.navigation;
    const results = this.props.navigation.state.params.results
    return (
      <View style={styles.container}>
        <Text> Results page </Text>
        <ScrollView>
          <Text> {JSON.stringify(results)} </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  div: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  newSearch: {
    backgroundColor: 'rgb(3, 169, 252)',
    borderColor: 'black',
    borderRadius: 30,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  header: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 40,
    padding: 10,
  }
});
