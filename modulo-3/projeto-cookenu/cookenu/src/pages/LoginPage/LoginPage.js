import React from "react";
import{ScreenContainer,
    SignUpButtonContainer,
    LogoImage} from './styled'
import logo from '../../assets/logo.png'
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import LoginForm from "./LoginForm";
import {goToSingUp} from '../../routers/coordinator'

export default function Login() {
    const history=useHistory()
    
    return(
        <ScreenContainer>
         <LogoImage scr={logo}/>
         <LoginForm/>
        <SignUpButtonContainer>
        <Button onClick={()=> goToSingUp(history)}
        type={'submit'}
        fullWidth
        variant={'text'}
        color={'primary'}
        >Não possui conta?Cadastre-se</Button> 
        </SignUpButtonContainer>
    
        </ScreenContainer>
    );

};