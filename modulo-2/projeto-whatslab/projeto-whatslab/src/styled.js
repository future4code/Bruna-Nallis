import styled from "styled-components";

export const AppContainer=styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 100vh;
width: 600px;
box-sizing: border-box;
margin: auto;
`

export const MenssagesContainer=styled.div`
display: flex;
flex-direction: column-reverse;
flex-grow:1;
padding: 15px;
` 

export const InputContainer=styled.div`
display: flex;
`
export const InputName=styled.input`
width: 100px;
`
export const InputMenssage=styled.input`
flex-grow: 1;
`