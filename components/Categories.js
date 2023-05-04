import { TouchableOpacity, ImageBackground, ScrollView, View, Text} from 'react-native';
import { styled } from 'nativewind';
import CategoryCard from './CategoryCard';
import sanityClient from './../sanity';
import React,{useEffect, useState} from 'react';
import urlFor from './../sanity';

const StyledScrollView = styled(ScrollView);

const StyledImgBg = styled(ImageBackground);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);


const Categories = () =>{

 const [categories, setCategories] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await sanityClient.fetch(`
        *[_type == "category" ]
      `
       );
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
   fetchData();
}, []);

    return(
	<ScrollView
	  contentContainerStyle={{
	    paddingTop: 8,
	  }}
	  horizontal
	  showsHorizontalScrollIndicator={false}
	>
	  {/* Category Cards  */}

	<CategoryCard
                imgUrl='https://cdn.sanity.io/images/6u4f9z6d/production/0579acc36c115518396f06c14f00997fcef4556c-254x198.jpg'
                title='Offers'
            />
	{
	 categories?.map((category) => (
	   <CategoryCard
                key={category._id}
                imgUrl={category.image}
                title={category.name}
            />
	  ))}

	</ScrollView>
    );
}

export default Categories;
