import { Fab, AppBar, Toolbar } from "@material-ui/core";
import React from "react"
import { theme } from "../Theme";
import { ThemeProvider } from "@material-ui/styles";
import PeopleIcon from '@material-ui/icons/People';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { HeaderContainer, LogoImg } from "./styled";
import Astromatch from "../../image/Astromatch.png"


export default function ToolBar(props) {

  return (
    <HeaderContainer position="static" >
      <AppBar position='static'>
        <Toolbar className="display-botoes" className='toolbar'>
          <ThemeProvider theme={theme}>
            <Fab color='primary' aria-label='matches' onClick={props.goToProfilePage}> <PeopleIcon /> </Fab>
            <LogoImg src={Astromatch} alt='logo astromach' />
            <Fab color='secondary' aria-label='choose' onClick={props.goToMatchPage}> <FavoriteBorderIcon /> </Fab>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
}

