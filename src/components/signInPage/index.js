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
        <div className="signinWrapperWrapper">
            <div className="signinWrapper">
                <div className="signInBox">
                    <svg className="signIn"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        version="1.1"
                        viewBox="0 0 159.773 170.181"
                    >
                        <defs>
                            <path d="M23.435 201.083H155.727V271.387H23.435z"></path>
                            <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                            <path d="M133.804 176.893H199.572V219.226H133.804z"></path>
                            <filter
                                id="filter2371"
                                width="1.162"
                                height="1.15"
                                x="-0.081"
                                y="-0.075"
                                colorInterpolationFilters="sRGB"
                            >
                                <feGaussianBlur stdDeviation="4.713"></feGaussianBlur>
                            </filter>
                            <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                            <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        </defs>
                        <g strokeWidth="0.265" transform="translate(-103.432 -69.502)">
                            <rect
                                width="139.851"
                                height="150.435"
                                x="113.393"
                                y="79.375"
                                fill="#4d4d4d"
                                filter="url(#filter2371)"
                                opacity="1"
                                rx="0"
                                ry="4.11"
                                transform="translate(3.047 2.57) scale(.98338)"
                            ></rect>
                            <rect
                                width="139.851"
                                height="150.435"
                                x="114.499"
                                y="78.357"
                                fill="#fff"
                                rx="5.641"
                                ry="6.31"
                            ></rect>
                        </g>
                    </svg>
                    <Switch>
                        <Route path="/signup" render={() =>
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


                </div>
            </div>
        </div>
    )
}

export default SignMain