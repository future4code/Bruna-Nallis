import React from 'react';
import styled from 'styled-components';

function CardGrande(props) {
    return (
        <BigCard className="bigcard-container">
            <Imagem src={ props.imagem } />
            <Paragrafo>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </Paragrafo>
        </BigCard>
    )
}

const BigCard= styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`;

const Imagem= styled.img` 
width: 70px;
margin-right: 10px;
border-radius: 50%;
`;

const Title= styled.h4`
margin-bottom: 15px;
`;

const Paragrafo= styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start
`;

export default CardGrande;