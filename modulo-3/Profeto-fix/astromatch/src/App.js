import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaMatch from "./components/TelaMatch/TelaMatch";
import Rastreio from "./components/Rastreio/Rastreio";
import styled from "styled-components";

export default function App() {

const[telaAtual, setTelaAtual]=useState('inicio')

const mudaTela=()=>{
  switch (telaAtual){
    case'inicio':
    return <TelaInicial mudarPagina={mudarPagina}/>
    case 'match':
    return <TelaMatch mudarPagina={mudarPagina}/>
    default:
    return 'Erro!!'
  }
};
 
 const mudarPagina=(nomeDaPagina)=>{
   setTelaAtual(nomeDaPagina)
 };
 
 
 

  return (
    <div>
     <Header mudarPagina={mudarPagina} />
     {mudaTela()}
    </div>
  )
};

