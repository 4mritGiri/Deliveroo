import React from 'react';
import { Text, View } from 'react-native';
import { withExpoSnack } from 'nativewind';
import {styled} from 'nativewind';


const StyledView = styled(View);
const StyledText = styled(Text);

const DetailsScreen = () => {
  return (
    <StyledView className='bg-gray-200'>
      <StyledText className='text-red-400'>I am Details Screen</StyledText>
    </StyledView>
  );
};

export default DetailsScreen;
