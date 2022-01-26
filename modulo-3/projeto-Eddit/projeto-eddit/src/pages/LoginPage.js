import axios from "axios";
import { useState } from "react";
import{useHistory} from "react-router-dom"




export default function LoginPage() {
const history= useHistory()
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const onChangeEmail=(e)=>{
    setEmail(e.target.value)
};

const onChangePassword=(e)=>{ 
    setPassword(e.target.valeu)
};


const Login=()=>{
    const body={
        email: email,
        password:password
    }
    axios.post(`https://labeddit.herokuapp.com/bruna-nallis-carver/login`,body).
    then((res)=>{
        console.log('deu certo', res.data)
    }).
    catch((err)=>{
        console.log('deu errado', err.response)
    })
};

const goResgiter=()=>{
    history.push("/register")
};

const goFeed=()=>{
    history.push("/")
};

return(
    <div>
        <input
        placeholder='email'
        type='email'
        value={email}
        onChange={onChangeEmail}
        />

    <input
        placeholder='password'
        type='password'
        value={password}
        onChange={onChangePassword}
        />
     <button onClick={goResgiter}>Cadastrar</button>
     <button onClick={Login}>Entrar</button>
    </div>
);

};