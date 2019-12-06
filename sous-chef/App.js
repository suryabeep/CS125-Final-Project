import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home.js'
import Search from './Search.js'
import Recipe from './Recipe.js'
import Results from './Results.js'
//App.js is just going to be the entry point for the app
//It's just going to hold the navigator

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Search: {screen: Search},
  Recipe: {screen: Recipe},
  Results: {screen: Results}
});

const App = createAppContainer(MainNavigator);

export default App;
