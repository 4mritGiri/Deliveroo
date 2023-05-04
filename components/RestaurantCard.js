import {StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { View, Image, Text, TouchableOpacity, } from 'react-native';
import { styled } from 'nativewind';
import { urlFor } from './../sanity';
//import React,{useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const StyledImage = styled(Image)
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);


const RestaurantCard = ({ id, imgUrl, title, rating, genre, address,
			short_description, dishes, long, lat }) => {

  const navigation = useNavigation();

   return(
    <StyledTouchableOpacity
	onPress={() => {
	  navigation.navigate('Restaurant',{
	    id,
	    imgUrl,
	    title,
	    rating,
	    genre,
	    address,
            short_description,
	    dishes,
	    long,
	    lat
	  })
	}}
	style={{backgroundColor:'white',}}
	className={`mr-3 shadow rounded`}>
      <StyledImage
	className={`h-36 w-64 bg-gray-200 rounded-sm`}
	source={{uri: urlFor(imgUrl).url() }}
	/>
      <StyledView className={`pb-4`} >
      <StyledText style={{fontSize: 16}}
	className={`mt-1 font-bold`}> {title} </StyledText>
      <StyledView className={`flex-row items-center space-x-1`}>
	<StarIcon color='green' opacity={0.5} size={22}/>
	<StyledText className={`text-gray-500`}>
	  <StyledText className={`text-green-500`}> {rating} </StyledText>
	   ∙ { genre }
	</StyledText>
      </StyledView>
      <StyledView className={`flex-row items-center space-x-1`}>
	<MapPinIcon color='gray' opacity={0.4} size={22} />
	<StyledText className={` text-gray-500 `}> Nearby ∙ { address } </StyledText>
      </StyledView>
     </StyledView>
    </StyledTouchableOpacity>
   );
}

export default RestaurantCard;
