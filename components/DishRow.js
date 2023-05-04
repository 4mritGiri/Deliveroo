import {View, Text, TouchableOpacity, Image} from 'react-native';
import { styled } from 'nativewind';
import React, { useState, } from 'react';
import { urlFor } from './../sanity';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToBasket,
	removeFromBasket,
	selectBasketItemsWithId,
	selectBasketItems,
       } from './../features/basketSlice';


const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledText = styled(Text);


const DishRow = ({ id, name, description, price, image }) => {
 const [ isPressed, setIsPressed] = useState(false);

 const items = useSelector((state) => selectBasketItemsWithId(state, id));
 const dispatch = useDispatch();

 const addItemToBasket = () => {
   dispatch(addToBasket({id, name, description, price, image }));
 };

 const removeItemFromBasket = () => {
   if (!items.length > 0) return;

   dispatch(removeFromBasket({ id }));
 };

  return(
    <>
     <StyledTouchableOpacity
      onPress={() => setIsPressed(!isPressed)}
      style={{borderWidth: isPressed? 0 : 1 ,
		backgroundColor: 'white',
		padding: 10,
		//borderColor:'gray'
      }}
      className={`border-gray-200`}
     >
       <StyledView className={`flex-row`}>
	<StyledView className={`flex-1 pr-2`}>
	 <StyledText className={`text-lg mb-1`}>{name} </StyledText>
	 <StyledText className={`text-gray-400`}>{description} </StyledText>
	 <StyledText
		style={{fontWeight: 'bold',
		fontSize:16,
		color:'#AAADBDFF'}}
		className={`mt-2`}>
  	  <ReactCurrencyFormatter quantity={price} currency="NPR" />
       </StyledText>
	</StyledView>
	<StyledView>
	 <StyledImage
	  style={{ borderWidth: 1,
		   borderColor: '#F3F3F4',
		}}
	  className={`h-20 w-20 rounded bg-gray-300 p-4`}
	  source={{uri: urlFor(image).url()}}
	 />
	</StyledView>
       </StyledView>
     </StyledTouchableOpacity>

    {isPressed && (
      <StyledView
	 style={{backgroundColor:'white', paddingHorizontal:5}}>
       <StyledView
	  style={{display:'flex',
		flexDirection:'row',
		//justifyContent:'center'
	   }}
	 className={`space-x-2 pb-3`}>
	<StyledTouchableOpacity
	   disabled={!items.length}
	   onPress={removeItemFromBasket}
	>
	  <MinusCircleIcon color={items.length > 0 ? 'red' : 'gray'} size={40} />
	</StyledTouchableOpacity>

	<StyledText className='text-lg font-bold pt-2'> {items.length} </StyledText>

	<StyledTouchableOpacity
	   onPress={addItemToBasket}
	>
	  <PlusCircleIcon color='#00CCBB' size={40} />
        </StyledTouchableOpacity>
       </StyledView>
      </StyledView>
    )}
    </>
  );
}

export default DishRow;
