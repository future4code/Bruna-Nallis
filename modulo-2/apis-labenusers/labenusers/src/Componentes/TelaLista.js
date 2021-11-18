import userEvent from "@testing-library/user-event"
import axios from "axios"
import React from "react"
import styled from "styled-components"

const CartList= styled.div`
display:flex;
padding:10px;
border: 1px solid black;
margin:10px;
justify-content: space-between;
text-alin: center;
`

const Button= styled.div`
display:flex;
padding:10px;
justify-contente:left;
text-alin: center
`

export default class TelaLista extends React.Component{
 
state={
    listaUsuario:[]
}

componentDidMount () {
this.getAllUsers()
};

 getAllUsers=()=>{

     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
         headers:{
             Authorization: 'bruna-nallis-carver'
         }
     }).then((res)=>{
        this.setState({listaUsuario:res.data})
     }).catch((err)=>{
        console.log(err.response.data)
     })
 };

 deleteUser=(id)=>{

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
        headers:{
            Authorization: 'bruna-nallis-carver'
        }
    }).then((res)=>{
        alert('Usuario deletado.')
        this.getAllUsers()
    }).catch((err)=>{
        console.log(err.response.data)
    })

 };

    render(){

        const Usuarios=this.state.listaUsuario.map((usuario)=>{
            return <CartList key={usuario.id}>
                {usuario.name}
            <Button>
            <button onClick={()=>this.deleteUser(usuario.id)}>Delete</button>
            </Button>

            </CartList>
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Voltar</button>
                <h2>Lista de Usuários</h2>
                {Usuarios}
            </div>
        )
    }
}