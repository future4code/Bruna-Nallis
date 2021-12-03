import React,{useState, useEffect} from "react";
import { CardHeader, Button } from "./CardHeader";

const Header=(props)=>{

    return(
    <CardHeader>
        <Button primary onClick={()=>props.mudarPagina('match')}>Match</Button>
        <Button primary onClick={()=>props.mudarPagina('inicio')}>Inicio</Button>
    </CardHeader>
);

};

export default Header;