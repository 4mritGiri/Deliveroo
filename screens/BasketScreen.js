
import { SafeAreaView, Image, View, Text, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {styled } from 'nativewind';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
//import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from './../features/restaurantSlice';
import {
  XCircleIcon,
} from 'react-native-heroicons/outline';
import { urlFor } from './../sanity';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { selectBasketItems, removeFromBasket, selectBasketTotal } from './../features/basketSlice';
//import PreparingOrderScreen from 'PreparingOrderScreen';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);
const screenHeight = Dimensions.get('screen').height;



const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

     setGroupedItemsInBasket(groupedItems);
  },[items])

   return(
   <StyledSafeAreaView
	style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: screenHeight * 0.041,
          backgroundColor: 'white',
          flex: 1,
        }}>
    <StyledView style={{flex:1}} className='bg-gray-100'>
    <StyledView
	style={{borderBottomWidth:1,borderColor: '#00CCBB'}}
         className='p-3 bg-white shadow-md'>
     <StyledView>
       <StyledText className='font-extrabold text-blue-600 text-xl text-center'> Basket </StyledText>
       <StyledText className='text-center font-bold text-gray-400'> {restaurant.title}'s </StyledText>
     </StyledView>

    <StyledTouchableOpacity
       onPress={navigation.goBack}
       className='rounded-full absolute top-3 right-5'
    >
     <XCircleIcon size={50} color='#00CCBB' />
   </StyledTouchableOpacity>
    </StyledView>
    <StyledView
	className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'
     >
      <StyledImage
	className='w-7 h-7 bg-gray-300 p-4 rounded-full'
	source={{ uri: 'https://links.papareact.com/wru' }}
       />
       <StyledText className='flex-1'> Delivery in 50-70 min. </StyledText>
     <StyledTouchableOpacity >
       <StyledText style={{color: '#00CCBB'}} > Change </StyledText>
     </StyledTouchableOpacity>
    </StyledView>

    <StyledScrollView className='divide-y-2 divide-gray-200'>
      {Object.entries(groupedItemsInBasket).map(([key, items]) => (
	<StyledView key={key}
		className='flex-row items-center space-x-3 bg-white py-2 px-5'>
	  <StyledText className='text-green-300' >{items.length} X</StyledText>
	  <StyledImage
		className='h-12 w-12 rounded-full'
		source={{ uri: urlFor(items[0]?.image).url()}}
	  />
	  <StyledText className='flex-1'>{items[0]?.name} </StyledText>
	  <StyledText className='text-gray-600'>
	    <ReactCurrencyFormatter quantity={items[0]?.price} currency="NPR" />
	  </StyledText>
	<StyledTouchableOpacity
  	   onPress={() => dispatch(removeFromBasket({id: key}))}
	>
	  <StyledText
		className='text-red-400 rounded p-1 bg-gray-50 shadow'
	   > Remove </StyledText>
	</StyledTouchableOpacity>
	</StyledView>
        ))}
    </StyledScrollView>

    <StyledView className='p-5 rounded-[40px] shadow-xl border-t-2 border-green-300 bg-white mt-5 space-y-4'>
      <StyledView className='flex-row justify-between'>
	<StyledText className='text-gray-400' > Subtotal </StyledText>
	<StyledText className='text-gray-400'>
	  <ReactCurrencyFormatter quantity={basketTotal} currency="NPR" />
	</StyledText>
      </StyledView>

    <StyledView className='flex-row justify-between'>
        <StyledText className='text-gray-400' > Delivery Fee </StyledText>
        <StyledText className='text-gray-400'>
          <ReactCurrencyFormatter quantity={50} currency="NPR" />
        </StyledText>
      </StyledView>

    <StyledView className='flex-row justify-between'>
        <StyledText className='font-bold' > Order Total </StyledText>
        <StyledText className='font-extrabold'>
          <ReactCurrencyFormatter quantity={basketTotal + 50} currency="NPR" />
        </StyledText>
      </StyledView>

     <StyledTouchableOpacity
		onPress={() => navigation.navigate('PreparingOrder')}
		style={{backgroundColor:'#00ccbb'}}
		className='rounded-lg p-4'>
	<StyledText className='text-center text-white text-xl font-extrabold'> Place Order </StyledText>
     </StyledTouchableOpacity>
    </StyledView>
  </StyledView>
  </StyledSafeAreaView>
   );
}

export default BasketScreen;

