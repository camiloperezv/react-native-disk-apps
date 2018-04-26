import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Class Based Component
// componente mas grande, usa estructura de clase
// sabe hacer fetch data
// Siempre debe tener un metodo render
class AlbumList extends Component {
  // Class level property
  state = { albums: [] };
  componentWillMount() {
    // setState actualiza el state del componente y hace que haga re render 
    // SIEMPRE USAR this.setState
    // NUNCA USAR this.state = {} 
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    console.log(this.state.albums);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
// life sicle methods, por ejemplo componentWillMount, 
// se ejecuta cuando se va a hacer el render del componente

export default AlbumList;
