import  styled  from "styled-components";

export const CardHeader= styled.div`
display: flex;
margin:auto; 
padding: 10px;
background-color: LightPink;
flex-direction: row;
justify-content: space-between
`
export const Button=styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`
