import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Button=styled.button`
background: ${props => props.primary ? "#20B2AA" : "white"};
color: ${props => props.primary ? "white" : "#20B2AA"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
`


export default function AppForm(){

const history=useHistory()

const goBackList=()=>{
history.goBack("/trips/list")
};

return(
    <div>
        <p>AppFomPage</p>
        <Button primary onClick={goBackList}>Voltar</Button>
        <Button primary>Enviar</Button>
        </div>
)

};