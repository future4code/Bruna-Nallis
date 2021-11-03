import React from 'react';
import './CardGrande.css'
import styled from 'styled-components;'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

const Title = styled.h4`
margin-bottom: 15px;
`;

export default CardGrande;
