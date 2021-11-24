import React from "react";
import Playlist from "./Components/PlayList";
import Inicio from "./Components/PaginaInicial";

export default class App extends React.Component{

state={
  playlists: 'lista de Playlists'
};  

trocarTela = () =>{

  switch (this.state.playlists) {
    case 'playlist musicas': 
     return <Playlist irParaPlaylist={this.irParaPlaylist}/>
  
    case 'lista de Playlists':
      return <Inicio  irParaMusicas={this.irParaMusicas} />
  
    default: 
    return <div>'erro!!digite uma musica ou playlist existente.'</div>
  }

};

irParaMusicas= ()=>{
this.setState({playlists: 'playlist musicas'})
};


irParaPlaylist=()=>{
this.setState({playlists:'lista de Playlists'})
};


render(){
  return <div>
   {this.trocarTela()}
  </div>
};

};
