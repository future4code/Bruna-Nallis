import React from "react";
import{InputsContainer} from './styled'
import { Button, TextField } from "@material-ui/core";
import useForm from '../../hooks/useForm'

export default function LoginForm() {
    const [form, onChange, clear]=useForm({email:'', password:''})
    
    const onSubmitForm=(e)=>{
        e.preventDefault()
    };



return(
    
     <InputsContainer>
     <form onSubmit={onSubmitForm}>
    <TextField
    name={'email'}
    value={form.email}
    onChance={onChange}
    label={'email'}
    variant={'outlined'}
    margin={'normal'}
    required
    type={'email'}
    /> 
    <TextField
    name={'password'}
    value={form.password}
    onChance={onChange}
    label={'passowrd'}
    variant={'outlined'}
    margin={'normal'}
    required
    type={'password'}
    />
    <Button
    type={'submit'}
    fullWidth
    variant={'contained'}
    color={'primary'}
    >Fazer Login</Button> 
     </form>
    
     </InputsContainer>

    
);

};