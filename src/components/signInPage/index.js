import React, { useState } from 'react';
import './index.css';
import SignIn from './signIn/signIn'
import SignUp from './signup/signUp'
import { Route, Switch } from 'react-router-dom'

function SignMain() {

    const [userData, setUserData] = useState({
        username: "",//string
        password: "", //string
        email: "",    //string
        id: 0 //number
    })

    const setUserName = name => {
        setUserData({ ...userData, username: name })
    }

    const setPassWord = pass => {
        setUserData({ ...userData, password: pass })
    }

    const setEmail = email => {
        setUserData({ ...userData, email: email })
    }

    const setId = Id => {
        setUserData({ ...userData, id: Id })
    }

    return (
        <>
                <Switch>
                    <Route exact path="/signup" render={() =>
                        <SignUp setUserName={setUserName}
                        ></SignUp>
                    }></Route>
                    <Route exact path="/" render={() =>
                        <SignIn userData={userData}
                            setUserName={setUserName}
                            setPassWord={setPassWord}
                            setEmail={setEmail}
                            setId={setId}
                        ></SignIn>
                    }></Route>
                </Switch>
        </>
                


    )
}

export default SignMain