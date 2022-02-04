import React from "react";
import {AppContainer, 
  MenssagesContainer,
   InputContainer,
  InputMenssage,
  InputName} from './styled'

class App extends React.Component{
 state={
   menssage:[],
userValue:'',

messageValue:''
};

onChangeUser=(e)=>{
  this.setState({userValue:e.target.value})
};

onChangeMessage=(e)=>{
  this.setState({messageValue:e.target.value})
};

sendMessage=()=>{
  const newMessage={
    user:this.state.userValue,
    text:this.state.messageValue
  }
  const createNewMessage=[newMessage,...this.state.menssage]
  
  this.setState({menssage:createNewMessage, messageValue:''})
};

render(){

  return(
    <AppContainer>
      <MenssagesContainer>
        {this.state.menssage.map((messages, index)=>{
          return <p key={index}>  <strong> {messages.user} </strong>:
          {messages.text}
          </p>

        })}
      </MenssagesContainer>
      <InputContainer>
      <InputName 
      placeholder={'Nome'}
      value={this.state.userValue}
      onChange={this.onChangeUser}/>
      <InputMenssage 
      placeholder={'Menssagem'}
      value={this.state.messageValue}
      onChange={this.onChangeMessage}/>
      <button onClick={this.sendMessage}>enviar</button>
      </InputContainer>
    </AppContainer>
  )
}
};

export default App;
