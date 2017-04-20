import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


//class-based because just displaying data, there is not life-cyce or need access to state
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyles
  } = styles;
 return (
   <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
          style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyles}
          source={{ uri: image }}/>
      </CardSection>

      <CardSection>
          <Button ass={() => Linking.openURL(url)} >
            Buy Now
          </Button>
      </CardSection>
   </Card>
 );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyles: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
