import React, { useState, Suspense } from 'react';
import './index.css';
import { Route, Switch } from 'react-router-dom'
import SignUp from './signup/signUp';


const SignIn = React.lazy(() => import('./signIn/signIn'));
const SingUp = React.lazy(() => import('./signup/signUp'));
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
            <Suspense fallback={<p>Loading......</p>}>
                <Switch>
                    
                    <Route path="/">
                    <SignIn userData={userData}
                            setUserName={setUserName}
                            setPassWord={setPassWord}
                            setEmail={setEmail}
                            setId={setId}/>
                    </Route>
                    <Route path="/signup" >
                        <SignUp />
                    </Route>
                </Switch>
            </Suspense>
        </>
                


    )
}

export default SignMain