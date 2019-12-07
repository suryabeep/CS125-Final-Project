import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, Alert } from 'react-native';

const imageWidth = 200

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    //the recent and favorites array are currently for testing only. 
    //when we implement the WebAPI integration, we will have to populate the link and path in this Home
    // component's onComponentDidMount
    recent: [
      {link: "https://cafedelites.com/kung-pao-chicken/", image: require('./assets/asset1.png')},
      {link: "https://www.feastingathome.com/lamb-kebabs-with-herb-salad-and-yogurt-sauce/", image: require('./assets/asset2.png')},
      {link: "", image: require('./assets/asset3.png')},
    ],
    favorites: [
      {link: "https://thekitchenpaper.com/indian-butter-chicken/", image: require('./assets/asset4.png')},
      {link: "", image: require('./assets/asset5.png')},
      {link: "", image: require('./assets/asset6.png')},
    ],
  }

  openRecipe = (obj) => {
    this.props.navigation.navigate('Recipe', {recipe: obj})
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.newSearch} onPress = {() => navigate('Search')}>
          <Text style={{fontFamily: 'Helvetica Neue', fontSize: 24, color: 'white'}}>
            Create new search
          </Text>
        </TouchableOpacity>
        <View style={[styles.container, {alignItems:'flex-start'}]}>
          <View style={{width:'100%', height: '25%', justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require('./assets/burger.png')} 
              style={{width:'100%', height:'100%', justifyContent: 'center', alignContent: 'center'}}>
                <View style={{justifyContent: 'center', alignContent: 'center', borderColor:'white', borderWidth:'2'}}>
                  <Text style={{fontFamily: 'HelveticaNeue-Bold', fontSize: 48, color: 'white'}}>
                    Sous Chef
                  </Text>
                </View>
            </ImageBackground>
          </View>
          <View style = {styles.div}>
            <Text style={styles.header}>Recently Viewed</Text>
            <ScrollView horizontal='true'>
              {this.state.recent.map((obj, id) => (
                <TouchableOpacity onPress={() => this.openRecipe(obj)} key={'recents'+id}>
                  <Image source={obj.image}  style={{width: imageWidth, height:'100%'}}/>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style = {styles.div}>
            <Text style={styles.header}>Favorites</Text>
            <ScrollView horizontal='true'>
              {this.state.favorites.map((obj, id) => (
                <TouchableOpacity onPress={() => this.openRecipe(obj)} key={'favorites'+id}>
                  <Image source={obj.image}  style={{width: imageWidth, height:'100%'}}/>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{width: '100%', height: '10%'}}/>
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