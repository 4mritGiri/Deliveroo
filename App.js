
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
//import 'react-native-gesture-handler';
import 'url-search-params-polyfill';
import 'react-native-url-polyfill/auto';
import { store } from './store';
import { Provider } from 'react-redux';
//import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

//import { BottomSheetModal, BottomSheetModalProvider, } from "@gorhom/bottom-sheet";
//import BottomSheet from 'react-native-bottomsheet';
//import 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;
const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
  		name="Basket"
  		component={BasketScreen}
  		options={{
                    presentation: 'modal',
            	    headerShown: false,
		    headerTransparent: true,
    		    cardTransparent: true,
       		    cardStyle: {
			backgroundColor: 'transparent'
		     },
		    gestureVelocityImpact: 0.7,
          	    gestureResponseDistance: screenHeight * 0.2,
	         }}
	   />
	<Stack.Screen name="PreparingOrder" component={PreparingOrderScreen}
	   options={{
                    presentation: 'fullScreenModal',
                    headerShown: false,
                    headerTransparent: true,
                    cardTransparent: true,
                 }}
	/>
	<Stack.Screen name="Delivery" component={DeliveryScreen}
           options={{
                    presentation: 'fullScreenModal',
                    headerShown: false,
                    headerTransparent: true,
                    cardTransparent: true,
                 }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
   </Provider>
  </NavigationContainer>
  );
}

