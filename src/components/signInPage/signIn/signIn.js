import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// import './signin.css';
import { ButtonPopRightLite } from '../../../buttons';
import store from '../../../store/store'
import { storeUserRequest, getAllEmailList } from '../../../actions'
import { useSpring, animated } from 'react-spring'
import Logo from '../../../assets/Logo'
import signStyle from '../../../css_modules/sign.module.css'

const SignIn = ({ userData, setUserName, setPassWord, setEmail, setId }) => {
    const { push } = useHistory(null)

    const [logButtonStyle, setLogButtonStyle] = useSpring(() => ({ transform: "scaleX(1)", text: "Login", backgroundColor: "#335E84" }))
    const [expand, setExpand] = useState({
        expandEmail: false, expandGoogle: false,
        expandGuest: false, expandUser: true, expandPass: true
    })

    const googleRef = useRef(null)
    const guestRef = useRef(null)
    const emailRef = useRef(null)
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

    const login = () => {
        if (userData.username && userData.password) {
            setLogButtonStyle({ transform: "scaleX(1)", text: "Authorizing...", backgroundColor: "#389685ff" })
        } else {
            setLogButtonStyle({ transform: "scaleX(1)", text: "Empty", backgroundColor: "#656565ff" })
            return
        }

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
                if (err.response) {
                    setLogButtonStyle({ transform: "scaleX(1)", text: "Not Authorized", backgroundColor: "#a42020ff" })
                } else if (err.request) {
                    setLogButtonStyle({ transform: "scaleX(1)", text: "Problem With Network", backgroundColor: "#656565ff" })
                } else {
                    setLogButtonStyle({ transform: "scaleX(1)", text: "Some Thing Went Wrong", backgroundColor: "#656565ff" })
                }
            })
        // console.log(userData.username, userData.password)
    }




    useEffect(() => {
        emailRef.current.addEventListener("mouseenter", () => setExpand({ ...expand, expandEmail: true }));
        emailRef.current.addEventListener("mouseleave", () => setExpand({ ...expand, expandEmail: false }));
        googleRef.current.addEventListener("mouseenter", () => setExpand({ ...expand, expandGoogle: true }));
        googleRef.current.addEventListener("mouseleave", () => setExpand({ ...expand, expandGoogle: false }));
        guestRef.current.addEventListener("mouseenter", () => setExpand({ ...expand, expandGuest: true }));
        guestRef.current.addEventListener("mouseleave", () => setExpand({ ...expand, expandGuest: false }));
        emailRef.current.addEventListener("click", () => push("/signup"));
        googleRef.current.addEventListener("click", () => push("/signup"));
        guestRef.current.addEventListener("click", () => push("/signup"));
    }, [])

    return (
        <div className={`${signStyle.inputHolder}`}>
            <div className={`${signStyle.loginTextDiv}    ${signStyle.signElements}`}>
                <Logo styles={{ width: "100%", height: "100%" }}></Logo>
            </div>
            <div className={`${signStyle.userNameDiv}     ${signStyle.signElements}`}>
                <div className="inputDivs">
                    <ButtonPopRightLite expand={expand.expandUser}
                        title={"username"}
                        breath={12} grow={3}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75%"
                            height="75%"
                            version="1.1"
                            viewBox="0 0 83.41 83.41"
                        >
                            <g transform="translate(3.692 -95.684)">
                                <path
                                    fill="#496885"
                                    fillOpacity="1"
                                    stroke="none"
                                    strokeWidth="1.144"
                                    d="M-96.838 11.309a157.626 157.626 0 00-157.625 157.627A157.626 157.626 0 00-96.838 326.56 157.626 157.626 0 0060.79 168.936 157.626 157.626 0 00-96.838 11.309zm0 52.867a48.065 48.065 0 0148.067 48.066 48.065 48.065 0 01-48.067 48.065 48.065 48.065 0 01-48.064-48.065 48.065 48.065 0 0148.064-48.066zm-.096 108.095a102.492 102.492 0 01.096 0A102.492 102.492 0 01.018 241.242a102.492 102.492 0 000 .002 120.87 120.87 0 01-96.856 48.56 120.87 120.87 0 01-96.855-48.56 102.492 102.492 0 0196.76-68.972z"
                                    opacity="1"
                                    transform="matrix(.26458 0 0 .26458 63.635 92.692)"
                                ></path>
                            </g>
                        </svg>
                    </ButtonPopRightLite>
                    <div className={`${signStyle.inputActual}`}>
                        <input type="text"
                            value={userData.username}
                            onChange={e => setUserName(e.target.value)}
                            onFocus={() => { setExpand({ ...expand, expandUser: false }) }}
                            onBlur={() => { setExpand({ ...expand, expandUser: true }) }}
                        >
                        </input>
                    </div>
                </div>
            </div>
            <div className={`${signStyle.signElements}`}>
                <div className="inputDivs">
                    <ButtonPopRightLite expand={expand.expandPass}
                        title={"password"}
                        breath={12.5} grow={3}>
                        <svg
                            style={{ flexShrink: 0, flexGrow: 1 }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="90%"
                            height="85%"
                            version="1.1"
                            viewBox="-5.2 -5 93.41 93.41"
                        >
                            <g transform="translate(-62.326 -93.44)">
                                <path
                                    fill="#496885"
                                    fillOpacity="1"
                                    strokeWidth="0.325"
                                    d="M104.032 93.43a41.53 41.622 0 00-41.53 41.621 41.53 41.622 0 0041.53 41.622 41.53 41.622 0 0041.529-41.622 41.53 41.622 0 00-41.53-41.622zm.578 8.663a18.54 18.54 0 012.59.184c1.95.272 3.98.814 6.086 1.783 2.106.968 4.29 2.364 6.02 3.97 1.73 1.607 2.952 3.353 3.651 5.175.7 1.821.861 3.836.978 7.09.075 2.06.132 4.61.185 6.862 2.705.75 4.671 3.112 4.671 5.928v22.305c0 3.422-2.902 6.177-6.507 6.177H86.976c-3.604 0-6.506-2.755-6.506-6.177v-22.305c0-2.576 1.644-4.773 3.995-5.703.122-3.777.388-8.93.732-11.155.546-3.526 1.639-5.154 3.043-6.743 1.405-1.589 3.12-3.138 5.349-4.367 2.227-1.228 5.107-2.181 7.408-2.646a18.149 18.149 0 013.613-.378zm-.04 5.973c-.718.005-1.468.08-2.286.245-1.496.302-3.367.92-4.815 1.718-1.448.798-2.563 1.804-3.476 2.836-.913 1.031-1.623 2.088-1.978 4.378s-.355 5.812-.38 8a48.55 48.55 0 01-.04 1.665h25.784c-.002-.104-.006-.213-.01-.33-.05-1.611-.1-4.58-.177-6.693-.076-2.114-.181-3.422-.635-4.604-.455-1.183-1.25-2.316-2.373-3.36-1.124-1.043-2.544-1.95-3.913-2.578a13.988 13.988 0 00-3.956-1.157 11.986 11.986 0 00-1.745-.12zm.04 27.216c-1.387 0-2.708.431-3.633 1.186-.038.004-.075.008-.112.01a6.08 6.04 0 00-2.354 4.773 6.08 6.04 0 003.053 5.238v5.95c0 .874 1.322 1.577 2.965 1.577 1.643 0 2.965-.703 2.965-1.576v-5.882a6.08 6.04 0 003.178-5.307 6.08 6.04 0 00-3.462-5.45.316.316 0 01-.053.006 6.288 6.288 0 00-2.546-.524z"
                                    opacity="1"
                                ></path>
                            </g>
                        </svg>
                    </ButtonPopRightLite>
                    <div className={`${signStyle.inputActual}`}>
                        <input type="password"
                            onChange={e => setPassWord(e.target.value)}
                            onFocus={() => { setExpand({ ...expand, expandPass: false }) }}
                            onBlur={() => { setExpand({ ...expand, expandPass: true }) }}
                        ></input>
                    </div>
                </div>
            </div>
            <div className={`${signStyle.loginButtonDiv}  ${signStyle.signElements}`}>
                <animated.div style={logButtonStyle} className={signStyle.signButton}
                    onMouseEnter={() => setLogButtonStyle({ transform: "scaleX(1)", text: "Login", backgroundColor: "#5976c1ff" })}
                    onMouseLeave={() => {
                        if (logButtonStyle.text.value === "Login") {
                            setLogButtonStyle({ transform: "scaleX(1)", backgroundColor: "#335E84" })
                        }
                    }
                    }
                    onClick={() => login()}
                >{logButtonStyle.text}</animated.div>
                {/*
                <p>Login</p>
                <div className="clickDetector" width="100%" height="100%"
                    onClick={() => login()}
                >
                </div> */}
            </div>
            <div className={`${signStyle.signUpDiv}       ${signStyle.signElements}`}>
                <div className={`${signStyle.signUpText} ${signStyle.subSignUpDiv}`}>
                    don't have an account?
                </div>
                <div className={`${signStyle.signUpButtons} ${signStyle.subSignUpDiv}`}>
                    <ButtonPopRightLite ref={emailRef} expand={expand.expandEmail}
                        title={"Sign up with Email"}
                        breath={14} grow={4.5}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60%"
                            height="60%"
                            version="1.1"
                            viewBox="0 0 83.036 83.036"
                        >
                            <g transform="translate(-47.178 -71.932)">
                                <path
                                    fill="#496885"
                                    fillOpacity="1"
                                    strokeWidth="0.372"
                                    d="M56.017 84.08c-4.848 0-8.752 3.678-8.752 8.246v3.826L85.11 125.26c1.53 1.023 2.317 1.168 4.143 1.604 1.845-.325 3.428-.651 4.697-2.15 6.17-4.635 12.339-9.272 18.507-13.908l17.679-13.413v-5.067c0-4.568-3.903-8.245-8.751-8.245zm-8.752 18.061v35.055c0 4.568 3.904 8.245 8.752 8.245h65.368c4.848 0 8.75-3.677 8.75-8.245v-33.853c-12.011 9.135-24.024 18.29-36.04 27.203-1.77 1.299-3.17 1.791-4.867 1.697-1.432.063-3.012-.242-4.296-1.132l-37.667-28.97zm90.09 48.362a61.948 61.158 0 01-.517.644c.18-.202.352-.416.517-.644z"
                                    opacity="1"
                                ></path>
                            </g>
                        </svg>
                    </ButtonPopRightLite>
                    <ButtonPopRightLite ref={googleRef} expand={expand.expandGoogle}
                        title={"Sign up with Google"}
                        breath={14} grow={4.5}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60%"
                            height="60%"
                            version="1.1"
                            viewBox="0 0 33.883 34.604"
                        >
                            <g transform="translate(-113.082 -182.27)">
                                <g fillOpacity="1">
                                    <path
                                        fill="#e94235"
                                        strokeWidth="0.218"
                                        d="M130.352 182.27c-9.463 0-17.134 7.73-17.134 17.266 0 9.536 7.671 17.266 17.134 17.266 8.601 0 15.132-5.804 16.357-14.124 0 0 .024-.178.035-.273l.04-.323c.075-.645.122-1.303.132-1.975.005-.362-.054-.9-.131-1.468v-1.787a.477.477 0 00-.478-.478H130.9a.477.477 0 00-.478.478v5.568c0 .265.213.478.478.478h8.9c-1.147 4.291-4.463 7.082-9.234 7.082-5.665 0-10.257-4.628-10.257-10.336 0-5.68 4.547-10.296 10.183-10.337h.074c2.407 0 4.737.854 6.582 2.41l4.82-4.873a17.062 17.062 0 00-11.617-4.574z"
                                    ></path>
                                    <path
                                        fill="#4285f4"
                                        strokeWidth="0.218"
                                        d="M130.9 196.374a.477.477 0 00-.477.478v5.568c0 .265.213.478.478.478h8.9c-.614 2.298-1.851 4.165-3.6 5.404l5.344 4.336a16.658 16.658 0 005.164-9.96c.114-.899.235-1.579.256-2.571.003-1.319-.055-2.029-.18-3.255-.027-.264-.213-.478-.478-.478z"
                                    ></path>
                                    <path
                                        fill="#34a853"
                                        strokeWidth="0.218"
                                        d="M120.817 202.818l-5.878 4.53c2.817 5.647 8.615 9.525 15.315 9.525 4.47 0 8.394-1.56 11.291-4.235l-5.344-4.336c-1.604 1.062-3.468 1.699-5.732 1.677-4.5-.043-8.183-2.999-9.652-7.16z"
                                    ></path>
                                    <path
                                        fill="#fabb05"
                                        stroke="none"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeOpacity="1"
                                        strokeWidth="0.265"
                                        d="M115.008 191.838c-1.144 2.315-1.926 4.895-1.926 7.656 0 2.834.682 5.505 1.882 7.865l5.853-4.54a9.967 9.967 0 01-.511-3.207c0-1.172.247-2.166.533-3.287z"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </ButtonPopRightLite>
                    <ButtonPopRightLite ref={guestRef} expand={expand.expandGuest}
                        title={"Explore as Guest"}
                        breath={14} grow={4.5}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60%"
                            height="60%"
                            version="1.1"
                            viewBox="0 0 86.522 94.45"
                        >
                            <g
                                fill="#148e94"
                                fillOpacity="1"
                                strokeWidth="0.265"
                                transform="translate(-63.635 -92.692)"
                            >
                                <path
                                    d="M114.667 149.87c.019.46-.455 1.01-1.052 1.837-.784 1.085-1.79 2.663-2.683 4.138a69.293 69.293 0 00-1.247 2.134c-.895-.476-1.893-.803-3.104-.788-1.168.014-2.417.342-3.57.813-.24-.414-.55-.915-.994-1.615a551.497 551.497 0 00-3.4-5.267c-.326-.5-.557-.85-.672-1.108a58.964 58.964 0 00-34.31 18.133 58.964 58.964 0 0086.522.192 58.964 58.964 0 00-35.49-18.468zm-8.37 10.952c.819-.01 1.608.212 2.33.558.085.546.266 1.284.578 2.42.775 2.822 2.34 8.092 3.089 10.796.749 2.704.71 2.933-.34 4.188-1.051 1.256-2.928 4.286-3.979 5.484-1.05 1.199-1.12 2.874-3.99-.524-1.053-1.248-2.116-3.38-3.314-4.565-1.199-1.184-1.198-1.26-.43-4.098.77-2.838 2.306-8.438 3.018-11.542.177-.771.303-1.387.388-1.888.937-.452 1.929-.82 2.65-.83z"
                                    opacity="0.729"
                                ></path>
                                <path
                                    d="M105.003 92.692c-5.63.01-11.209.256-14.272.475-3.5.25-3.714.464-3.428 3.858.286 3.393.51 9.965.76 13.251.25 3.286.526 3.286-1.224 3.214-1.75-.071-4.965-.214-6.644-.286-1.679-.07-1.822-.071-1.893 1.215-.072 1.286-.071 3.857-.179 5.179-.1 1.243-.135 1.36 7.64 1.408a21.167 21.167 0 00-.575 4.904c0 11.69 9.476 21.166 21.166 21.166s21.167-9.476 21.167-21.166c0-1.679-.2-3.35-.595-4.982 7.565-.118 7.668-.378 7.702-1.437.035-1.143.107-3.214.178-4.393.072-1.179.521-1.668-.98-1.839-1.503-.17-4.948-.054-6.52-.054-1.572 0-1.643.07-1.5-3.108.143-3.178.5-9.607.536-12.894.036-3.286-.25-3.428-3.393-3.714a208.136 208.136 0 00-15.537-.786c-.8-.009-1.605-.012-2.409-.01z"
                                    opacity="0.729"
                                ></path>
                            </g>
                        </svg>
                    </ButtonPopRightLite>
                </div>
            </div>
            < div className={`${signStyle.resetPassDiv} ${signStyle.signElements}`} >
                Forgot your password ? &nbsp; <a href=""> Reset </a>
            </div >
        </div >
    )
}

export default SignIn;