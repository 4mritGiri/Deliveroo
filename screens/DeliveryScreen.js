
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "./../features/restaurantSlice";
import { XMarkIcon } from 'react-native-heroicons/solid';
import { styled } from 'nativewind';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

   return(
     <StyledView style={{backgroundColor:'#00CCBB'}} className="flex-1">
       <StyledSafeAreaView className="z-50" style={{marginTop:30}}>
         <StyledView className="flex-row justify-between items-center p-5">
          <StyledTouchableOpacity
		onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </StyledTouchableOpacity>
          <StyledText className="font-light text-white text-lg">Order Help</StyledText>
        </StyledView>


          <StyledView
		style={{backgroundColor:'white',
			//marginHorizontal:8,
			//padding: 12,
			
		}}
		className="mx-5 p-6 my-2 rounded-md z-50 shadow-md">
	 <StyledView className='flex-row justify-between'>
          <StyledView >
            <StyledText className="text-lg text-gray-400">Estimated Arrival</StyledText>
            <StyledText className="text-4xl font-bold">45-55 Minutes</StyledText>
          </StyledView>

        <StyledImage
          source={{uri: 'https://links.papareact.com/fls'}}
          className='h-20 w-20'
        />
         </StyledView>
	<Progress.Bar size={30} color='#00CCBB' indeterminate={true} />

	<StyledText className='mt-3 text-gray-500'> Your order at {restaurant.title}'s is being prepared. </StyledText>
	</StyledView>
      </StyledSafeAreaView>

     <MapView
       initialRegion={{
	 latitude: restaurant.lat,
	 longitude: restaurant.long,
	 latitudeDelta: 0.005,
	 longitudeDelta: 0.005
        }}
	style={{flex:1, marginTop: -60, zIndex: 0}}
	mapType='mutedStandard'
     >

      <Marker
	coordinate={{
	  latitude: restaurant.lat,
          longitude: restaurant.long,
	}}
	title={restaurant.name}
        description={restaurant.short_description}
        identifire='origin'
        pinColor='#00CCBB'
       />
     </MapView>

      <StyledSafeAreaView
         className='flex-row bg-white items-center space-x-5 h-28'
       >
        <StyledImage className='h-12 w-12 bg-gray-300 p-4 ml-5 rounded-full'
          source={{uri: 'https://links.papareact.com/wru'}}
         />
        <StyledView className='flex-1'>
	   <StyledText className='text-lg'> John the don </StyledText>
	   <StyledText className='text-gray-400'> Your Rider </StyledText>
        </StyledView>
 	   <StyledText style={{color:'#00CCBB'}}
		 className='text-lg font-bold mr-5'> Call </StyledText>
      </StyledSafeAreaView>
    </StyledView>
   );
};

export default DeliveryScreen;
