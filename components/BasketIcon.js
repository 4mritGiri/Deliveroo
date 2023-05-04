
import { View, Text, TouchableOpacity, } from 'react-native';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import {
        selectBasketItemsWithId,
        selectBasketItems,
        selectBasketTotal,
       } from './../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
//import { useBottomSheetModal } from '@gorhom/bottom-sheet';
//import React, { useState } from 'react';


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if(items.length === 0) return null;

   return(
     <>
      <StyledView
	  className='absolute bottom-10 w-full z-50'>
       <StyledTouchableOpacity
	 onPress={() => navigation.navigate('Basket')}
	 style={{
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#00CCBB',
		padding: 16,
		justifyContent: 'center',
	  }}
	 className='mx-5 rounded-lg space-x-1'
	>
	<StyledText
		style={{color:'white',
			backgroundColor:'#01A296',
			fontSize:18,
			paddingHorizontal: 4,
			paddingVertical:3,
			borderRadius:5,
			fontWeight: '800'
		  }}
	> {items.length} </StyledText>
	<StyledText
		style={{flex:1,
			color:'white',
			fontSize: 18,
			fontWeight: '800',
			textAlign: 'center',
		  }}
	> View Basket </StyledText>

	<StyledText style={{fontSize:18, color:'white'}} className='font-extrabold'>
	   <ReactCurrencyFormatter quantity={basketTotal} currency="NPR" />
	</StyledText>
       </StyledTouchableOpacity>
      </StyledView>
     </>
   );
}

export default BasketIcon;
