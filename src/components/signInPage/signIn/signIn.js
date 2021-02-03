import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import './signin.css';
import store from '../../../store/store'
import { storeUserRequest, getAllEmailList } from '../../../actions'



const SignIn = ({ userData, setUserName, setPassWord, setEmail, setId }) => {
    const { push } = useHistory(null)

    
    useEffect(() => {
        if (localStorage.getItem("id")) { allreadyLoggedIn() }
    })


    const allreadyLoggedIn = () => {
        const allUserData = {
            id: localStorage.getItem("id"),
            username: localStorage.getItem("username"),
            // password: userData.password,
            email: localStorage.getItem("email"),
            token: localStorage.getItem("token"),

        }
        store.dispatch(storeUserRequest(allUserData))
        store.dispatch(getAllEmailList(localStorage.getItem("id")))
        push("/dashboard")
    }

    const login = (e) => {
        axios.post("https://emailengine2020.herokuapp.com/api-token-auth/",
            {
                username: userData.username,
                password: userData.password
            }).then(res => {

                const allUserData = {
                    id: res.data.user_id,
                    username: userData.username,
                    // password: userData.password,
                    email: res.data.email,
                    token: res.data.token,
                }
                localStorage.setItem("id", allUserData.id)
                localStorage.setItem("username", allUserData.username)
                localStorage.setItem("email", allUserData.email)
                localStorage.setItem("token", allUserData.token)
                store.dispatch(storeUserRequest(allUserData))
                store.dispatch(getAllEmailList(res.data.user_id))
                push("/dashboard")
            }).catch(err => {
                console.log(err);
            })
            e.preventDefault();
        // console.log(userData.username, userData.password)
    }

    // console.log(userData);



    return (
        <>
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <span className="heading">Username</span>
                    <input type="text" 
                    placeholder="username" 
                    value={userData.username}
                    onChange={e => setUserName(e.target.value)} />
                    <span className="heading">Password</span>
                    <input type="password" 
                    placeholder="password"
                    onChange={e => setPassWord(e.target.value)} />
                    <button onClick={(e) => login(e) }>login</button>
                    <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignIn;