import React from 'react';
import TelaInicial from './Componentes/TelaInicial';
import TelaLista from './Componentes/TelaLista';


export default class App extends React.Component{
  state={
  paginaInicial: 'cadastro'
  };

mudarDePagina=()=>{
  switch(this.state.paginaInicial){
    case'cadastro':
      return <TelaInicial  irParaLista={this.chamaLista}/>
        case'lista':
        return <TelaLista irParaCadastro={this.chamaInicio}/>
        default: 
        return <div>Err...Pagina não encontrada!!</div>    
  }
};

chamaInicio = () => {
this.setState({paginaInicial:'cadastro'})
};

chamaLista = () => {
this.setState({paginaInicial:'lista'})
};

render(){
  return(
<div>
  {this.mudarDePagina()}
</div>
  )
}

}

