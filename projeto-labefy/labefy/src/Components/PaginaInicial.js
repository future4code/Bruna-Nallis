import axios from "axios";
import react from "react";
import styled from "styled-components";


const CardLista= styled.div`
display:flex;
padding:10px;
border: 1px solid  black;
margin:10px;
width:300px;
justify-content:space-between
`

export default class Inicio extends react.Component{

state={
    name:'',
    
    lista: []
};


componentDidMount (){
    this.getAllPlaylists()
};

handleName=(e)=>{
this.setState({name:e.target.value})
};

createPlaylist=()=>{

const body= {
    name: this.state.name
}

axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',body,{
    headers:{
        Authorization: "bruna-nallis-carver"
    }
}).then((res)=>{
alert ('Playlist adicionada com sucesso')
this.getAllPlaylists()
this.setState({name:''})
}).catch((err)=>{
alert ('Essa Plalist ja existe. Escreva outro nome')
console.log(err.response.data, err.response.status)
})
};

getAllPlaylists=()=>{

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
        headers:{
            Authorization: "bruna-nallis-carver"
        }
    }).then((res)=>{
        this.setState({lista:res.data.result.list})
    }).catch((err)=>{
    alert('Erro!!Tente novamente.')
    })
    
    };

    deletePlaylist=(id)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
            headers:{
                Authorization: "bruna-nallis-carver"
            }
        }).then((res)=>{
            alert(`playlist deletada`)
            this.getAllPlaylists()
        }).catch((err)=>{
           alert('Erro ao deletar playlist.')
        })
    };

PlaylistTracks=(id)=>{

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
    const minhasPlaylists = this.state.lista.map((item)=>{
        return <CardLista key={item.id}>
            {item.name}
        <button onClick={this.props.irParaMusicas}>Abrir</button>
        <button onClick={()=>this.deletePlaylist(item.id)}>X</button>
        </CardLista>
    })
    console.log(minhasPlaylists)
        return (<div>
            <h2>Minhas Playlists</h2>
            <input placeholder={'nome'}
            value={this.state.name}
            onChange={this.handleName}></input>
            <button onClick={this.createPlaylist}>Criar PlayList</button>
        {minhasPlaylists}
        </div>
        )    
};
};