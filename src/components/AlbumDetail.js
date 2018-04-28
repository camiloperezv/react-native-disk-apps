import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ currentAlbum }) => {
  const { 
    textContainerStyle, 
    thumbnailStyle, 
    thumbnailContainerStyle, 
    textStyle,
    albumImageStyle
  } = styles;
  const { title, artist, thumbnail_image, image, url } = currentAlbum;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={textContainerStyle}>
          <Text style={textStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={albumImageStyle}
          source={{ uri: image }} 
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => clicked(url)}>
          Buy Album
        </Button>
      </CardSection>
    </Card>
  );
};
const clicked = (url) => {
  Linking.openURL(url)
  // console.log('clicked', url);
};
const styles = {
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  }
};
export default AlbumDetail;
