import React from 'react';
import { AppRegistry, View } from 'react-native';

// Importar otros componente, component neasting
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Crear componente 
// Text es un componente de React Native para mostrar texto
const App = () => (
  // es un self closing tag, cuando el tag esta vacio no se debe poner el tag que cierra
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Registrar componente de la aplicacion

// El nombre del componente principal debe coincidir con el del proyecto
// Solo el componente principal 'root', o app usa AppRegistry
AppRegistry.registerComponent('albums', () => App);

//Si hay probles con el refresh se debe validar watchman

// no pueden haber archivos *.lock en la carpeta donde se ejecuta el watchman
// con watchman watch-list se listan todos los watch 
// se puede borrar todos los watch con watchman watch-del-all y volver a ejecutar 
// la app o correr watchman watch .

// en un caso extremo a veces debo ejecutar
// rm -rf /usr/local/var/run/watchman && brew uninstall watchman && brew install watchman

// Para actualizar se debe hacer el gesto de shake, oprimir ctrl+cmd+z
