import React from "react";
import styled from "styled-components";

function CardPequeno(props){
    return (
        <Info className='cardPeq-info'>
            <Imagem src={props.imagem} />
            <Card>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </Card>
        </Info>
    )
}

const Title= styled.h4`
margin-bottom: 10px;
text-align: start;
`;
const Card= styled.div`
display: flex;
flex-direction: row;
justify-items: flex-start;
`;
const Info= styled.div`
display: flex;
align-items:flex-start;
border: 1px solid black;
padding: 10px 20px;
margin-bottom: 10px;
height: 50px;
`;

const Imagem= styled.img`
width: 30px;
margin-right: 10px;
border-radius: 50%;
`;

export default CardPequeno;