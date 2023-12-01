import './style.css';
import { useState, useEffect } from "react";
import { SignInUser } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SignIn = ()=>{
  const {currentUser}= useSelector((state)=> state.user);

    const [inputFields, setInputFields]= useState();

    const Navigate = useNavigate();
    
    useEffect(()=>{
        if(currentUser){
            Navigate("/")
        }
    },[currentUser])

    const ChangeHandlar = (event)=>{
    let  {value, name}= event.target;
    setInputFields({...inputFields, [name]: value})
    }

    const submitHandlar = async (event) => {
        event.preventDefault();
        let { email, password } = inputFields;
        try {
       await SignInUser(email, password);
     

        } catch (error) {
            console.log(error)
        }
    };
  
    return(   
        <div className='authContainer'> 
  
       
        <form onSubmit={submitHandlar}>
         <div className="SignIncontainer">
       
            <h1>Sign In</h1>
            <label htmlFor="email">Email</label>  <br/>
            <input type="email" name="email" id="email" onChange={ChangeHandlar} required />
            <br/>

            <label htmlFor="password">Password</label>  <br/>
            <input type="password" name="password" id="password" onChange={ChangeHandlar} required />
        <br/>
        <button type="submit" aria-label="Sign In to your account" role="button">Log In</button>
    </div>
    </form>
    </div>
    


    )
}

export default SignIn;