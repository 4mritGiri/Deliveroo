import { Image, Text, TouchableOpacity} from 'react-native';
import { styled } from 'nativewind';
import { urlFor } from './../sanity';

const StyledImage = styled(Image);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const CategoryCard = ({ imgUrl, title }) => {

    return(
     <StyledTouchableOpacity 
	onPress={()=> console.warn(`title: ${title} clicked..`)}
	className={` relative`}
     >
	<StyledImage
	  source={{uri: urlFor(imgUrl).url() }}
	  className={`h-20 w-20 mx-1 items-center rounded bg-gray-200`}
	/>
	  <StyledText className={`absolute text-md bottom-1 left-1 font-bold text-white`}> {title} </StyledText>

    </StyledTouchableOpacity>
    );
}

export default CategoryCard;
