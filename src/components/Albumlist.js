import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class Albumlist extends Component {
 //(1) initializes an default/empty state. An empty list of album
  state = { albums: []};

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        console.log(response);
        this.setState({ albums: response.data });
      }
    );
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      // <Text key={album.title}>{album.title}</Text>);
      <AlbumDetail key={album.title} album={album} />
    );
      //now AlbumDetail has access to poop.album
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>

    );
  }
}


export default Albumlist;
