import React from "react";
import {auth, provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// grabbing this function as probs?
function Login({setIsAuth})
{
    // line is neccessary because react hooks must be inside a function component.
    let navigate = useNavigate();

    // note javascript arrow functions are like lambda functions from CMSC 331
    const SignInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
        
      })  
    }


    return (
    
        <div className="loginPage">
         <p> Sign in with Google to continue</p>
         <button className="google-login" onClick={SignInWithGoogle}> Sign in with Google</button> 
         </div>
    );
}

export default Login;