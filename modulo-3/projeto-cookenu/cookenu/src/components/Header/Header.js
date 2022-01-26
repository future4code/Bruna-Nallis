import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import theme from '../../constants/theme';
import { StyledToolbar } from './styled';
import { goToRecipesList, goToLogin } from '../../routers/coordinator';
import { useHistory } from 'react-router';

export default function Header() {
  
    const history=useHistory()

    return (

      <AppBar position="static" theme={theme}>
        <StyledToolbar>
          <Button  onClick={()=>goToRecipesList (history)} color="inherit"> Cookenu</Button>
          <Button  onClick={()=> goToLogin (history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}