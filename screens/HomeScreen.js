import React, { useLayoutEffect, useState, useEffect } from 'react';
import { withExpoSnack } from 'nativewind';
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
} from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import {
  UserCircleIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from './../components/Categories';
import FeaturedRow from './../components/FeaturedRow';
import sanityClient from './../sanity';



const StyledScrollView = styled(ScrollView);
const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledView = styled(View);
const StyleImage = styled(Image);
const StyledImgBg = styled(ImageBackground);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] =  useState([]); 

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await sanityClient.fetch(`
        *[_type == "featured"] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
        }
      `);
      setFeaturedCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'ios' ? 10 : 42,
        backgroundColor: 'white',
      }}>
      <StyledView>
        {/* Header */}
        <StyledView
	  style={{display:'flex',
		flexDirection:'row',
		justifyContent: 'center',
		marginHorizontal: 8,
	   }}
          selectable={false}
          className={`pb-3 space-x-2`}>
          <StyleImage
            className={`w-8 h-8 p-4 rounded-full bg-gray-300`}
            source={{ uri: 'https://links.papareact.com/wru' }}
          />

          <StyledView style={{flex:1, }}>
            <StyledText className={`font-bold text-gray-400 text-md`}>
              Deliver Now
            </StyledText>
            <StyledText
	      style={{display:'flex',
		flexDirection:'row',
		justifyContent: 'center'
	      }}
	      className={`font-bold text-xl`}>
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </StyledText>
          </StyledView>
          <StyledPressable
            onPress={() => navigation.navigate('Details')}>
            <UserCircleIcon size={40} color="#00CCBB" />
          </StyledPressable>
        </StyledView>

        {/* Search */}
        <StyledView
	  style={{display:'flex',
                flexDirection:'row',
                justifyContent: 'center',
		paddingBottom:6,
		//marginVertical: 4,
              }}
	  className={`mx-4 space-x-2`}>
          <StyledView
	    style={{flex:1,
                flexDirection:'row',
		padding: 10,
                //justifyContent: 'center'
              }}
            className={`text-lg bg-gray-200 rounded-md`}>
            <MagnifyingGlassIcon  size={20} color="gray" />
            <StyledTextInput
		style={{marginRight:15,
			fontSize: 16,
			fontWeight:'bold',
			marginLeft: 5,
		}}
              placeholder="Restaurants and cuisines.."
              keyboardType="default"
            />
          </StyledView>
            <StyledPressable
              onPress={() =>
                ToastAndroid.show('Adjustments Icon Clicked...', 5)
              }>
              <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
            </StyledPressable>
        </StyledView>

	{/* Body  */}
	<StyledScrollView
		className={`bg-gray-100 mx-4`}
		contentContainerStyle={{ paddingBottom: 245, }}
		showsVerticalScrollIndicator={false}>
	 {/* Category */}
	  <Categories />
	 
	  {/* Featurs Row */}
	{/*  Featured  */}
	{featuredCategories?.map(category => (
	  <FeaturedRow
		key={category._id}
		id={category._id}
		desc={category.short_description}
		title={category.name}
	   />
	))}

	</StyledScrollView>
      </StyledView>
    </SafeAreaView>
  );
};

export default withExpoSnack(HomeScreen);
