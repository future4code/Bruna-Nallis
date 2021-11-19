import axios from "axios";
import react from "react";

export default class TelaInicial extends react.Component{

state={
    name:'',
    email:''
}

handleNome=(e)=>{
    this.setState({name:e.target.value})
};

handleEmail=(e)=>{
    this.setState({email:e.target.value})
};

createUser=()=>{
const body={
    name:this.state.name,
    email:this.state.email
}
axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
headers:{
    Authorization: 'bruna-nallis-carver'
}
}).then((res)=>{
    alert('Usuario cadastrado com sucesso!')
    this.setState({name:'', email:''})
}).catch((err)=>{
    alert ('Nome ou email já existente. Tente outra vez!')
})

};
  

render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Voltar</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={'nome'}
                    value={this.state.name}
                    onChange={this.handleNome}/>
                
                <input 
                    placeholder={'email'}
                    value={this.state.email}
                    onChange={this.handleEmail}/>

                <button onClick={this.createUser}>Cadastrar</button>
            </div>
        )
    }
}