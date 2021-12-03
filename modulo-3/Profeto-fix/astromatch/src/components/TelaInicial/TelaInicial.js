import React,{useState, useEffect} from "react";
import styled from "styled-components";
import Perfil from "../Perfil/Perfil";

const StyledInicial=styled.div`
padding: 10px;
border: 1 px solid black;
position: relative;
border-radius: 10px;
overflow: hidden;
`


const TelaInicial=(props)=>{



return(
    <StyledInicial>
        <Perfil/>
    </StyledInicial>
);

};

export default TelaInicial;