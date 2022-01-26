import { useState } from "react";

 const useForm = (inicialState)=>{

    const [form,setForm]=useState(inicialState)

    const hadleInputChange=(e)=>{
        const{value,name}=e.target
        setForm({...form,[name]:value})
    };

    const clear=()=>{
        setForm(inicialState)
    };

    return [form, hadleInputChange,clear]

};

export default useForm;