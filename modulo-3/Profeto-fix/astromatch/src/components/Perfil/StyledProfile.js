import styled from "styled-components"

export const StyledProfile= styled.div`
    box-shadow: 0 2px 10px 0 rgba(117,117,117,0.77);
	position: center;
	border-radius: 15px;
	overflow: hidden;
	height: 500px;
	display: flex;
	align-items: center;
	width:1000px;
`
 export const ImgeProfile= styled.img`
    border-radius: 10px;
	width: 100%;
	height: 100%;
	position: relative;
	border: 1px solid rgb(240, 53, 91);
	box-shadow: 0 2px 10px 0 rgba(251, 157, 157, 0.77)` 


export const InformationProfile= styled.div`
	position: absolute;
	text-shadow: 0px 2px 4px rgb(47, 23, 28);
	color: rgb(246, 233, 233);
	font-size: 20px;
	top: 300px;
	font: bold;
	text-align: start;
	margin-left: 5px;`

export const ContainerInformation=styled.div`
	box-shadow: 0 0 0.5em gray;
	border-style: hidden;
	border-radius: 10px;
	align-items: center;
	position: relative;
	width:25em;
	height:25em;
	margin-bottom: 10px;
	margin-top: 5px;
	margin-left: 8px;
	margin-right: 8px;`