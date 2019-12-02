import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View style={styles.container}>
      <Text>Add your ingredients here:</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Enter ingredient here!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title = "Add"
          //onPress = {() => navigate('Search')}
          />
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
