import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Class Based Component
// componente mas grande, usa estructura de clase
// sabe hacer fetch data
// Siempre debe tener un metodo render
class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in album');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }
  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}
// life sicle methods, por ejemplo componentWillMount, 
// se ejecuta cuando se va a hacer el render del componente

export default AlbumList;
