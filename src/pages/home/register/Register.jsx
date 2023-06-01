import { useRef, useState } from "react"
import "./register.scss"

export default function Register() {
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")

    const emailRef=useRef()
    const passwordRef=useRef()

    const handleStart=()=>{
        setEmail(emailRef.current.value)
    };

    const handleFinish=()=>{
        setpassword(passwordRef.current.value);
    };
  return (
    <div className="register">
        <div className="top">
        <div className="wrapper">
            <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SbjZeQ-brKJNc4CZPHSapNUtCi5Mumpup-Eb3CBG&s" alt=""/>
            <button className="loginbutton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies,TV shows,and more.</h1>
            <h2>Watch anywhere,Cancel anytime</h2>
            <p>
                Ready to watch?Enter your email to create or restart your membership
            </p>
            {!email ? (
                <div className="input">
                <input type="email" placeholder="email adress" ref={emailRef} />
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>

            ): 
            <form className="input">
                <input type="password" placeholder="password" ref={passwordRef} />
                <button className="registerButton" onClick={handleFinish}>Started</button>
            </form>}
            
        </div>
      
    </div>
  )
}
