import React, { useEffect, useState, useRef } from 'react';
import { useHistory,Link } from 'react-router-dom'
import './signup.css';
import axios from 'axios'

const SignUp = ({ setUserName }) => {
    const { push } = useHistory(null)
    const userRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const conPassRef = useRef(null)

    const postNewUser = (e) => {
        if (conPassRef.current.value === passRef.current.value) {
            if (conPassRef.current.value && passRef.current.value && userRef.current.value && emailRef.current.value) {
                const newUser = {
                    username: userRef.current.value,
                    email: emailRef.current.value,
                    password: passRef.current.value,
                }
                console.log(newUser)
                axios.post("http://emailengine2020.herokuapp.com/contactapi/users/", newUser)
                    .then(res => {
                        console.log(res)
                        setUserName(userRef.current.value)
                        push("/")
                    }
                    )
                console.log('Successfully created');       

            } 
            else alert("Please fill all fields")

        } 
        else alert("Passwords do not match")

        e.preventDefault();
    }




    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <span className="heading">Username</span>
                    <input type="text" 
                    placeholder="username" 
                    ref={userRef}
                    />

                    <span className="heading">Email</span>
                    <input type="text" 
                    placeholder="username" 
                    ref={emailRef}
                    />

                    <span className="heading">Password</span>
                    <input type="password" 
                    placeholder="password"
                    ref={passRef}
                    />

                    <span className="heading">Confirm Password</span>
                    <input type="password" 
                    placeholder="password"
                    ref={conPassRef}
                    />
                    <button onClick={(e) => postNewUser(e) }>Create Account</button>
                    <p className="message">Already registered? <Link to="/">Signin</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;