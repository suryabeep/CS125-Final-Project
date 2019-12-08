import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Image, Alert, Dimensions } from 'react-native';
import { AppLoading, Font, Asset, Icon } from 'expo';

const {height, width} = Dimensions.get('window')
const imageWidth = 200

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Search Results',
  };

  state = {
    recipes: [],
  }

  componentDidMount = () => {
    //processing the results
    try {
      let results = this.props.navigation.state.params.results
      let recipes = [... this.state.recipes];
      for (let i = 0; i < results.length; i++) {
        const title = results[i].title
        const id = results[i].id
        const imageURL = results[i].image
        recipes.push({
          title: title,
          id: id,
          imageURL: imageURL
        })
      }
      this.setState({recipes});
      console.log(JSON.stringify(recipes));
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

  openRecipe = (id) => {
    console.log('id pressed is: ' + id)

    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/information", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    		"x-rapidapi-key": "e90184137dmsh5ff463f6fb5212bp1cba50jsne9d67166897a"
    	}
    })
    .then(response => response.json().then(data => {
      console.log(data["sourceUrl"]);
      //ar link = data.sourceUrl;
      //console.log("link:" + sourceUrl)
      this.props.navigation.navigate('Recipe', {link: data["sourceUrl"]})
    }))
    //this is where we'd have to make the second JSON request to get the link to the webpage
    //once we get the link, we have to pass it to the navigation prop below
    //  this.props.navigation.navigate('Recipe', {link: LINK_HERE})
  }

  render() {
    const {navigate} = this.props.navigation;
    let results = this.props.navigation.state.params.results
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
          {this.state.recipes.map((recipe, index) => (
            <TouchableOpacity style={styles.card} key={index} onPress={() => this.openRecipe(recipe.id)}>
              <Image source={{uri: recipe.imageURL}} style={{width: 130, height: 130, paddingLeft: 10, paddingVertical: 10}}/>
              <Text style={styles.recipeTitle}> {recipe.title} </Text>
            </TouchableOpacity>
          ))}
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
  scroller: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width
  },
  card: {
    backgroundColor: 'rgb(240,240,240)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.9,
    height: 150,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  recipeTitle: {
    fontSize: 30,
    padding: 3,
    flex: 1,
    flexWrap: 'wrap'
  }
});
