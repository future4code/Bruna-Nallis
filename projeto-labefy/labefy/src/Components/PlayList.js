import axios from "axios";
import react from "react";
import styled from "styled-components";

const CardMusica= styled.div`
display:flex;
padding:10px;
border: 1px solid  black;
margin:10px;
width:300px;
justify-content:space-between
`
export default class Playlist extends react.Component{

state={
    name:'',
    artist:'',
    url:'',

 musicas:[]
};



handleName=(e)=>{
    this.setState({name:e.target.value})
    };

handleArtist=(e)=>{
    this.setState({artist:e.target.value})
    };

handleUrl=(e)=>{
    this.setState({url:e.target.value})
    };

addTrackToPlaylist=(id)=>{
    
    const body= {
        name: this.state.name, 
        artist: this.state.artist,
        url: this.state.url
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,{
        headers:{
            Authorization: "bruna-nallis-carver"
        }
    }).then((res)=>{
        this.
        this.setState({name:'',artist:'',url:''});
        alert('Musica adicionada.')
    }).catch(()=>{
        alert('Erro.Tente novamente.')
    })

};

getPlaylistTracks=(id)=>{
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
    headers:{
        Authorization: "bruna-nallis-carver"
    }
}).then((res)=>{
    
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
};


render(){
    const minhasMusicas= this.state.musicas.map((musica)=>
     <CardMusica key={musica.id}>
    {musica.name}
    <input
    placeholder={'nome'}
    value={this.state.name}
    onChange={this.handleName}></input>
    <input
    placeholder={'artista'}
    value={this.state.artist}
    onChange={this.handleArtist}></input>
    <input
    placeholder={'url'}
    value={this.state.url}
    onChange={this.handleUrl}
    ></input>
    <button onClick={()=>this.addTrackToPlaylist(musica.id)}>Adiconar Musica</button>   
    </CardMusica>
);
console.log(minhasMusicas)

return (<div>
    <h2>Minhas Musicas</h2>
    {minhasMusicas}
    <button onClick={this.props.irParaPlaylist}>Voltar para lista</button>  
</div> )
};
};
