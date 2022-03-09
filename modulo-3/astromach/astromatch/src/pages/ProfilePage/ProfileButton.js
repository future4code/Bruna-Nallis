import React from "react";
import { Fab } from "@material-ui/core";
import { ButtonsContainer, ContainerStyled } from "./styled"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Container } from "@material-ui/core";

export function ProfileButton(props) {

    return (

        <ContainerStyled>
            <Fab onClick={props.onClickYes} > <FavoriteBorderIcon /> </Fab>
            <Fab onClick={props.onClickNo} className="x-button"> <HighlightOffIcon /> </Fab>
        </ContainerStyled>

    )
}