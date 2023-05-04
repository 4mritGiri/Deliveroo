
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from './../features/restaurantSlice';
import React, {useEffect, } from 'react';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  useEffect(() => {
    setTimeout(() => {
     navigation.navigate('Delivery');
    }, 3000);
  }, []);

   return(
     <StyledSafeAreaView style={{backgroundColor: '#00CCBB'}}
	className='flex-1 justify-center items-center'
     >
       <Animatable.Image
	  source={require('./../assets/deliver.gif')}
	  iterationCount={1}
	  style={{height:500, width:500}}
	  className='h-96 w-96'
	  animation="slideInUp" />

	<Animatable.Text
	   style={{fontSize: 18,
		marginVertical: 10,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	    }}
	   iterationCount={1}
           animation="slideInUp"
	> Waiting for a Restaurant to accept your order! .
	</Animatable.Text>

	<Progress.Circle size={60} color='#fff' indeterminate={true} />
      </StyledSafeAreaView>
   );
}

export default PreparingOrderScreen;
