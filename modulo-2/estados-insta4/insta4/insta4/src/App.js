import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  state={
    usuario:[
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g',
        fotoPost:'https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc' 
      },

      {
        nomeUsuario:'Juliana',
          fotoUsuario:'https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE',
          fotoPost:'https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY'
      },

      {
        nomeUsuario:'Eloísa',
        fotoUsuario:'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
        fotoPost:'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo'
      }
    ],

    valorInputNomeUsuario:'',
    valorInputFotoUsuario: '',
    valorInputFotoPost:''
    
  }

  adicionarPost = () => {
    const novoPost= {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const newPost= [...this.state.usuario, novoPost]

    this.setState ({usuario: newPost})

  }

  onChangeInputNomeUsuario= (event) => {
    this.setState ({valorInputNomeUsuario: event.target.value})
  };

  onChangeInputFotoUsuario= (event) =>{
    this.setState ({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost= (event) =>{
    this.setState ({valorInputFotoPost: event.target.value})
  }

  render() {

      const listaPost= this.state.usuario.map((post) =>{
         
         return (
          
          <Post
             nomeUsuario={post.nomeUsuario}
             fotoUsuario={post.fotoUsuario}
             fotoPost={post.fotoPost}
             />
             
            
         )
     })

     return(
       <MainContainer>
         <div>

<input
  value={this.state.valorInputNomeUsuario}
  onChange={this.onChangeInputNomeUsuario}
  placeholder={"Nome"} 
  />

<input
  value={this.state.valorInputFotoUsuario}
  onChange={this.onChangeInputFotoUsuario}
  placeholder={"Foto"}
/>

<input
  value={this.state.valorInputFotoPost}
  onChange={this.onChangeInputFotoPost}
  placeholder={"Post"}
/>

<button onClick={this.adicionarPost}>Adicionar</button>
</div>
{listaPost}
       </MainContainer>
     );

     } 
  }


export default App;
