import React, { useLayoutEffect, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import { styled } from 'nativewind';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  MapPinIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';
import {StarIcon} from 'react-native-heroicons/solid';
import { urlFor } from './../sanity';
import DishRow from './../components/DishRow';
import BasketIcon from './../components/BasketIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from './../features/restaurantSlice';

//const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledImgBg = styled(ImageBackground);

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
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
     }
   } = useRoute();

  useEffect(() => {
    dispatch(
     setRestaurant({
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
    );
  },[dispatch])

  useLayoutEffect (() => { 
     navigation.setOptions({
	headerShown: false,
     })
  }, [])

  return(
 <>
  <BasketIcon />
   <ScrollView>
      <StyledView className={`relative`}>
	<StyledImage
	  className={`w-full h-60 bg-gray-300 p-4`}
	  source={{uri: urlFor(imgUrl).url(),}}
	/>
	<StyledTouchableOpacity
	  onPress={navigation.goBack}
	  className={`absolute top-14 left-5 p-2 bg-blue-100 rounded-full`}
	>
	  <ArrowLeftIcon color='#00CCBB' size={20} />
	 </StyledTouchableOpacity>
      </StyledView>

      <StyledView className={`bg-white`}>
	<StyledView className={`px-4 pt-4`}>
	 <StyledText className={`text-3xl font-bold`}>{ title }</StyledText>
	 <StyledView className={`flex-row space-x-1`}>
	  <StyledView className={`flex-row items-center space-x-1`}>
	    <StarIcon color='green' opacity={0.4} size={22} />
	    <StyledText className={`text-xs text-gray-500`}>
	      <StyledText className={`text-green-500`}> {rating} </StyledText> ∙ {genre}
	    </StyledText>
	  </StyledView> 
	  <StyledView className={`flex-row items-center space-x-1`}>
            <MapPinIcon color='green' opacity={0.4} size={22} />
            <StyledText className={`text-xs text-gray-500`}> Nearby ∙ {address}
            </StyledText>
          </StyledView>
	 </StyledView>
	<StyledText className={`text-gray-500 mt-2 pb-4`}>{short_description} </StyledText>
        </StyledView>
        <StyledTouchableOpacity
	  style={{display:'flex', flexDirection:'row', justifyItems:'center'}}
	  className={`p-4 space-x-2 bg-gray-300`}
        >
	  <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20}/>
	  <StyledText className={`flex-1 pl-1 text-md font-bold`}>
		Have a food allergy?
	  </StyledText>
	  <ChevronRightIcon color='#00CCBB' />
	</StyledTouchableOpacity>
      </StyledView>
      <StyledView className={`pb-36`}>
	<StyledText className={`px-4 pt-6 mb-3 font-bold text-xl`} > Menu </StyledText>

	{/* DishRow*/}
	{dishes.map( dis => (
	<DishRow
	  key={dis._id}
	  id={dis._id}
	  name={dis.name}
	  price={dis.price}
	  description={dis.short_description}
	  image={dis.image}
	/>
	))}
      </StyledView>
   </ScrollView>
 </>
  );
}

export default RestaurantScreen;
