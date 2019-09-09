import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import PlacesList from '../screens/PlacesListScreen';
import PlacesDetailsScreen from '../screens/PlacesDetailsScreen';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import Colors from '../constants/Colors';

const PlacesNavigator = createStackNavigator(
  {
    Places: { screen: PlacesList },
    PlaceDetail: PlacesDetailsScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);
export default createAppContainer(PlacesNavigator);
