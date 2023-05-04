import { View,ScrollView, Text,} from 'react-native';
import { styled } from 'nativewind';
import tw from 'nativewind';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from './../sanity';
import React,{useState, useEffect} from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

const FeaturedRow = ({ id, title, desc }) => {

 const [restaurants, setRestaurants] =  useState([]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await sanityClient.fetch(`
        *[_type == "featured" && _id == $id ] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
	     type-> {
		name
	     }
          },
        }[0]
      `,{id}
       );
      setRestaurants(data?.restaurants);
    } catch (error) {
      console.log(error);
    }
  };
   fetchData();
}, []);



    return(
     <StyledView>
	<StyledView
	    style={{display:'flex',
                flexDirection:'row',
                justifyContent: 'space-between'
           }}
	   className='mt-4 px-1'>
          <StyledText className={`font-bold text-lg`}>
	   {title}
	  </StyledText>
	  <ArrowRightIcon color="#00CCBB" size={20} />
	</StyledView>

	<StyledText className={`text-xs text-gray-500 px-1`} > {desc} </StyledText>

	<StyledScrollView horizontal showsHorizontalScrollIndicator={false}
	  contentContainerStyle={{ paddingHorizontal: 10,
				   paddingTop:4,
				   paddingBottom: 2
	  }}
	>
	  {/* Restaurant Card */}

	{restaurants?.map(restaurant => (
	  <RestaurantCard
	   key={restaurant._id}
           id={restaurant._id}
           imgUrl={restaurant.image}
           title={restaurant.name}
           rating={restaurant.rating}
           genre={restaurant.type?.name}
           address={restaurant.address}
           short_description={restaurant.short_description}
           dishes={restaurant.dishes}
           long={restaurant.long}
           lat={restaurant.lat}
         />
	))}
	</StyledScrollView>
    </StyledView>
    );
}

export default FeaturedRow;
