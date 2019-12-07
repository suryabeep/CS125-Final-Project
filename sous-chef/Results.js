import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, Alert } from 'react-native';

const imageWidth = 200

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Search Results',
  };

  state = {
    titles: [],
    ids: [],
    imageURLs: [],
  }

  componentDidMount = () => {
    //processing the results
    try {
      let results = this.props.navigation.state.params.results
      let titles = [... this.state.titles]
      let ids = [... this.state.ids]
      let imageURLs = [... this.state.imageURLs]
      for (let i = 0; i < results.length; i++) {
        const title = results[i].title
        const id = results[i].id
        const imageURL = results[i].image
        titles.push(title)
        ids.push(id)
        imageURLs.push(imageURL)
      }
      titles.push(results[0].title)
      this.setState({titles, ids, imageURLs});
      console.log(JSON.stringify(titles));
      console.log(JSON.stringify(ids));
      console.log(JSON.stringify(imageURLs));
    } catch (error) {
      console.log(error.message)
      console.log("error in results.js")
    }
  }

  componentWillUnmount = () => {
    //clear all state from this page since it will change at the next search
    this.setState({
      titles: [],
      ids: [],
      images: [],
    })
  }

  openRecipe = (obj) => {
    this.props.navigation.navigate('Recipe', {link: obj.link})
  }

  render() {
    const {navigate} = this.props.navigation;
    let results = this.props.navigation.state.params.results
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
