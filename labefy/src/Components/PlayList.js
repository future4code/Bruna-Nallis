import react from "react";

export default class Playlist extends react.Component{

render(){
    
return <div>
    <h2>Musicas</h2>
    <button onClick={this.props.irParaPlaylist}>Voltar para lista</button>
</div> 
    

};

};