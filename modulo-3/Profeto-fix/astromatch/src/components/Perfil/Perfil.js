import axios from "axios";
import React,{useState, useEffect} from "react";
import { StyledProfile, ImgeProfile, ContainerInformation, InformationProfile } from "./StyledProfile";

const Perfil=()=>{

const[profile, setProfile]= useState({
profile:{
        id: '',
        age:0 ,
        name: '',
        photo: '',
        bio:'',
}})

useEffect(()=>{

 pegarPerfil()

},[]);

const pegarPerfil=()=>{

axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Bruna-Nallis/person'
).then((res)=>{
setProfile(res.data.profile)
}).catch((err)=>{
console.log(err.data.profile)
});

};

return(
    
        <ContainerInformation>
    <ImgeProfile src={profile.photo} alt='imagem do perfil'/> 
    <InformationProfile>
        {profile.name},
        {profile.age},
        <p>{profile.bio}</p>
        </InformationProfile>
        <div>
        <button> sim </button>
        <button>não</button>
        </div> 
        </ContainerInformation>
          
    
    
);

};

export default Perfil;