import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';


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

const Form = t.form.Form;

/*const Ingredient = t.struct({
  name: t.String
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

  _onPressButton() {
    alert('you added ' + this.state.text + "!")
  }

  submitAndClear = () => {}

  render() {
    return (
      <View style={styles.container}>
      <Text>Add your ingredients here:</Text>
      <TextInput
          style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
          placeholder="Enter ingredient here!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          clearButtonMode='always'
        />
        <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="blue">
          <View style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT</Text>
          </View>
        </TouchableHighlight>
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
