import React,{useState} from 'react';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { textInputProps } from "../../constants";
import { buttonProps } from "../../constants";
import {useAuth} from '../../hooks'
const Inscription=()=>{
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const auth = useAuth();
    const handleChange=(e)=>{
        switch(e.target.id){
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;

            default:
                break
        }

    }
    const handleClick=async()=>{
        if(!email &&!password && !email.includes("@")) return;

        await auth.signUp(email,password).then(res=>{
            
        console.log('testtt',res)
           setEmail('') 
           setPassword('') 
        }).catch(err=>{
            console.log('testtt err',err)
        })


    }
return(
    <div className='container'>
<CustomInput id="email" onChange={handleChange} label={textInputProps.email.label} type={textInputProps.email.type} value={email}></CustomInput>
<CustomInput id="password" onChange={handleChange}  label={textInputProps.password.label} type={textInputProps.password.type} value={password}></CustomInput>
<CustomButton onClick={handleClick} color={buttonProps.color.primary} text={buttonProps.text.ajouter}/>
</div>
 
);
};
export default Inscription;