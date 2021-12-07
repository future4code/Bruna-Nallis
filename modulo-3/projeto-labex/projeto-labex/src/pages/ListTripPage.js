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

export default function ListTrip(){
const history=useHistory()

const goToPageForm=()=>{
history.push("/trips/application")
};

const goHome=()=>{
history.push("/")
};



return(
    <div>
        <p>Lista de viagens</p>
        <Button primary onClick={goToPageForm}>Formulario de inscrição</Button>
        <Button primary onClick={goHome}>Voltar</Button>

        </div>
)

};