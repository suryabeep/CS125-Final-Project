import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
//import * as Font from 'expo-font';
import { AppLoading, Font, Asset, Icon } from 'expo';

/* this is the stuff from the rapidAPI documentation on how to create an example request.
var unirest = require("unirest");

var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");

req.query({
	"q": "How much vitamin c is in 2 apples%3F"
});

req.headers({
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
*/

export default class Search extends React.Component {
  state = {
    storedText: "",
    ingredients: ['bread','sugar'],
  }

  static navigationOptions = {
    title: 'Search',
  };

  onChangeText = (text) => {
    this.setState({storedText: text})
  }

  onSubmitEditing = () => {
    let ingredients = [...this.state.ingredients]
    ingredients.push(this.state.storedText)
    this.setState({ingredients, storedText: ''})
  }

  remove = (index) => {
    let ingredients = [...this.state.ingredients]
    ingredients.splice(index, 1)
    this.setState({ingredients})
  }

  submitSearch = () => {
    let ingredients = JSON.stringify(this.state.ingredients)
    //console.log("ing:" + ingredients);
    var results = ingredients.split("\"");
    /*for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
    }*/
    var fetchBeg = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=1&ranking=1&ignorePantry=false&ingredients=";
    var temp = "";
    for (var i = 0; i < results.length; i++) {
      //console.log("inside the 2nd for");
      //console.log(ingredients.getIndexOf(i));
      if (temp != "" && (results[i] != "[" && results[i] != "]" && results[i] != ","
                      && results[i] != " ")) {
        temp += "2C";
      }

      //console.log(ingredients[i]);

      /*
      !results[i].equals("[") && !results[i].equals("]") && !results[i].equals(",")
                      && !results[i].equals(" ")
      */

      if (results[i] != "[" && results[i] != "]" && results[i] != ","
                      && results[i] != " ") {
        temp += results[i];
      }

      if (i != (results.length - 2) && (results[i] != "[" && results[i] != "]" && results[i] != ","
                      && results[i] != " ")) {
        temp += "%";
      }

      //console.log("temp: " + temp);
    }

    //console.log("everything: " + fetchBeg + temp);
    fetch(fetchBeg + temp, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    		"x-rapidapi-key": "e90184137dmsh5ff463f6fb5212bp1cba50jsne9d67166897a"
    }
  })
  .then(response => response.json().then(data => {
    this.props.navigation.navigate('Results', {results: data})
  }))
  /*.then(responseJson => this.props.navigation.navigate('Results', {results: responseJson}));
    console.log(response);
    .catch(err => {
  	console.log(err);
    }); */
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
            placeholder="Enter Ingredients..."
            placeholderTextColor="rgb(127, 127, 127)"
            value={this.state.storedText}
          />
        </View>
        <View style={styles.midContainer}>
          <Text style={{fontSize: 30, padding: 3,}}> Current Ingredients </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth:2, width: '100%', marginHorizontal: 10}}/>
        </View>
        <View style={styles.ingredientsList}>
          <ScrollView contentContainerStyle={styles.ingredientsList}>
            {this.state.ingredients.map((item, index) => (
              <View style={styles.ingredientBox} key={index}>
                <TouchableOpacity style={{flex: 1}} onPress={() => this.remove(index)}>
                  <Ionicons name={'ios-close-circle-outline'} size = {24} style={{color: 'red'}}/>
                </TouchableOpacity>
                <View style={{flex: 5}}>
                  <Text style={styles.ingredientText}>
                    {item}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.submitBox} onPress={this.submitSearch}>
            <Text style={styles.submitText}>
              Show Results
            </Text>
          </TouchableOpacity>
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
  topContainer: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    width: '80%',
    flex: 1,
    backgroundColor: 'rgb(200, 200, 200)',
  },
  ingredientsList: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  midContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
  },
  bottomContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    color: 'black',
    padding: 2,
  },
  submitBox: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(3, 169, 252)',
  },
  submitText: {
    fontSize: 30,
    color: 'white',
    padding: 20,
  },
  ingredientBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: 10,
    marginTop: 5
  },
  ingredientText:  {
    fontSize: 24,
  }
});
