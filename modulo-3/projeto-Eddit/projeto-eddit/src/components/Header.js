import { useHistory } from "react-router-dom";



export default function() {
   
   const history=useHistory()
    
    const goLogin=()=>{
        history.push("/login")
    };

    const goResgiter=()=>{
        history.push("/register")
    };

    return(
        <div>
          <button onClick={goLogin}>Login</button>
          <button onClick={goResgiter}>Cadastrar</button>
        </div>
    );
}; 