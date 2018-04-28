import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';
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
    // key debe ser un elemento unico para que react sepa que cambai en el render
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} currentAlbum={album} />);
  }

  render() {
    console.log(this.state.albums);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
// life sicle methods, por ejemplo componentWillMount, 
// se ejecuta cuando se va a hacer el render del componente

export default AlbumList;
