import React, { useEffect, useState, useRef } from 'react';
import './signup.css';
import { ButtonPopRightLite } from '../../../buttons';
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const SignUp = ({ setUserName }) => {
    const { push } = useHistory(null)


    const [expand, setExpand] = useState({
        expandEmail: false, expandGoogle: false,
        expandGuest: false, expandUser: true, expandPass: true
    })

    const userRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const conPassRef = useRef(null)

    const postNewUser = () => {
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

            } else alert("Please fill all fields")

        } else alert("Passwords do not match")
    }



    useEffect(() => {
        // emailRef.current.addEventListener("mouseenter", () => setExpand({ ...expand, expandEmail: true }))
        // emailRef.current.addEventListener("mouseleave", () => setExpand({ ...expand, expandEmail: false }))
        // googleRef.current.addEventListener("mouseenter", () => setExpand({ ...expand, expandGoogle: true }))
        // googleRef.current.addEventListener("mouseleave", () => setExpand({ ...expand, expandGoogle: false }))
        // guestRef.current.addEventListener("mouseenter", () => setExpand({ ...expand, expandGuest: true }))
        // guestRef.current.addEventListener("mouseleave", () => setExpand({ ...expand, expandGuest: false }))

    }, [])

    return (
        <div className="inputHolder">
            <div className="loginTextDiv    signElements">
                SignUp
            </div>
            <div className="userNameDiv     signElements">
                <svg className="inputSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    version="1.1"
                    viewBox="0 0 132.131 24.137"
                >
                    <defs>
                        <path d="M23.435 201.083H155.727V271.387H23.435z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M133.804 176.893H199.572V219.226H133.804z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <filter
                            id="filter2821"
                            width="1.053"
                            height="1.309"
                            x="-0.026"
                            y="-0.155"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation="1.188"></feGaussianBlur>
                        </filter>
                    </defs>
                    <g transform="translate(-125.17 -121.658)">
                        <g
                            fillOpacity="1"
                            strokeWidth="0.029"
                            transform="matrix(1.15734 0 0 1 -21.5 -34.309)"
                        >
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#4d4d4d"
                                filter="url(#filter2821)"
                                opacity="0.764"
                                rx="7.311"
                                ry="6.172"
                            ></rect>
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#1ca7d1"
                                rx="4.101"
                                ry="6.172"
                            ></rect>
                        </g>
                    </g>
                </svg>
                <div className="userNameInputHolder insideInputDivs">
                    <ButtonPopRightLite expand={expand.expandUser}
                        title={"username"}
                        breath={12} grow={3}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75%"
                            height="75%"
                            version="1.1"
                            viewBox="-5.2 -5 93.41 93.41"
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
                    <div className="inputActual">
                        <input className="userNameInput  inputBox" type="text"
                            ref={userRef}
                            onFocus={() => { setExpand({ ...expand, expandUser: false }) }}
                            onBlur={() => { setExpand({ ...expand, expandUser: true }) }}
                        ></input>
                    </div>
                </div>

            </div>
            <div className="userNameDiv     signElements">
                <svg className="inputSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    version="1.1"
                    viewBox="0 0 132.131 24.137"
                >
                    <defs>
                        <path d="M23.435 201.083H155.727V271.387H23.435z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M133.804 176.893H199.572V219.226H133.804z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <filter
                            id="filter2821"
                            width="1.053"
                            height="1.309"
                            x="-0.026"
                            y="-0.155"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation="1.188"></feGaussianBlur>
                        </filter>
                    </defs>
                    <g transform="translate(-125.17 -121.658)">
                        <g
                            fillOpacity="1"
                            strokeWidth="0.029"
                            transform="matrix(1.15734 0 0 1 -21.5 -34.309)"
                        >
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#4d4d4d"
                                filter="url(#filter2821)"
                                opacity="0.764"
                                rx="7.311"
                                ry="6.172"
                            ></rect>
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#1ca7d1"
                                rx="4.101"
                                ry="6.172"
                            ></rect>
                        </g>
                    </g>
                </svg>
                <div className="userNameInputHolder insideInputDivs">
                    <ButtonPopRightLite expand={expand.expandUser}
                        title={"email"}
                        breath={12} grow={2.2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75%"
                            height="75%"
                            version="1.1"
                            viewBox="-7 -5 93.41 93.41"
                        >
                            <g transform="translate(-62.326 -93.44)">
                                <path
                                    fill="#496885"
                                    fillOpacity="1"
                                    strokeWidth="0.351"
                                    d="M104.031 93.44a41.705 41.705 0 00-41.705 41.705 41.705 41.705 0 0041.705 41.705 41.705 41.705 0 0041.706-41.705A41.705 41.705 0 00104.03 93.44zm-21.9 22.092h44.008c3.264 0 5.891 2.508 5.891 5.623v3.455l-11.901 9.147-12.46 9.485c-.854 1.021-1.92 1.243-3.162 1.465-1.23-.297-1.76-.395-2.79-1.093l-25.478-19.85v-2.61c0-3.114 2.628-5.622 5.893-5.622zm-5.892 12.316l25.359 19.756c.864.607 1.928.814 2.892.771 1.143.064 2.085-.27 3.277-1.156 8.09-6.079 16.177-12.322 24.263-18.552v23.086c0 3.115-2.627 5.623-5.891 5.623H82.132c-3.265 0-5.893-2.508-5.893-5.623z"
                                    opacity="1"
                                ></path>
                            </g>
                        </svg>
                    </ButtonPopRightLite>
                    <div className="inputActual">
                        <input className="userNameInput  inputBox" type="text"
                            ref={emailRef}
                            onFocus={() => { setExpand({ ...expand, expandUser: false }) }}
                            onBlur={() => { setExpand({ ...expand, expandUser: true }) }}
                        ></input>
                    </div>
                </div>

            </div>
            <div className="passWordDiv     signElements">
                <svg className="inputSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    version="1.1"
                    viewBox="0 0 132.131 24.137"
                >
                    <defs>
                        <path d="M23.435 201.083H155.727V271.387H23.435z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M133.804 176.893H199.572V219.226H133.804z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <filter
                            id="filter2821"
                            width="1.053"
                            height="1.309"
                            x="-0.026"
                            y="-0.155"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation="1.188"></feGaussianBlur>
                        </filter>
                    </defs>
                    <g transform="translate(-125.17 -121.658)">
                        <g
                            fillOpacity="1"
                            strokeWidth="0.029"
                            transform="matrix(1.15734 0 0 1 -21.5 -34.309)"
                        >
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#4d4d4d"
                                filter="url(#filter2821)"
                                opacity="0.764"
                                rx="7.311"
                                ry="6.172"
                            ></rect>
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#1ca7d1"
                                rx="4.101"
                                ry="6.172"
                            ></rect>
                        </g>
                    </g>
                </svg>
                <div className="passInputHolder insideInputDivs">
                    <ButtonPopRightLite expand={expand.expandPass}
                        title={"password"}
                        breath={12} grow={3}>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75%"
                            height="75%"
                            version="1.1"
                            viewBox="-7 -5 93.41 93.41"
                        >
                            <g transform="translate(-62.326 -93.44)">
                                <path
                                    fill="#496885"
                                    fillOpacity="1"
                                    strokeWidth="0.351"
                                    d="M104.031 93.44a41.705 41.705 0 00-41.705 41.705 41.705 41.705 0 0041.705 41.705 41.705 41.705 0 0041.706-41.705A41.705 41.705 0 00104.03 93.44zm-21.9 22.092h44.008c3.264 0 5.891 2.508 5.891 5.623v3.455l-11.901 9.147-12.46 9.485c-.854 1.021-1.92 1.243-3.162 1.465-1.23-.297-1.76-.395-2.79-1.093l-25.478-19.85v-2.61c0-3.114 2.628-5.622 5.893-5.622zm-5.892 12.316l25.359 19.756c.864.607 1.928.814 2.892.771 1.143.064 2.085-.27 3.277-1.156 8.09-6.079 16.177-12.322 24.263-18.552v23.086c0 3.115-2.627 5.623-5.891 5.623H82.132c-3.265 0-5.893-2.508-5.893-5.623z"
                                    opacity="1"
                                ></path>
                            </g>
                        </svg> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75%"
                            height="75%"
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
                    <div className="inputActual">
                        <input className="userNameInput inputBox" type="password"
                            ref={passRef}
                            onFocus={() => { setExpand({ ...expand, expandPass: false }) }}
                            onBlur={() => { setExpand({ ...expand, expandPass: true }) }}
                        ></input>
                    </div>

                </div>
            </div>
            <div className="passWordDiv     signElements">
                <svg className="inputSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    version="1.1"
                    viewBox="0 0 132.131 24.137"
                >
                    <defs>
                        <path d="M23.435 201.083H155.727V271.387H23.435z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M133.804 176.893H199.572V219.226H133.804z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <path d="M137.583 180.673H219.226V228.298H137.583z"></path>
                        <filter
                            id="filter2821"
                            width="1.053"
                            height="1.309"
                            x="-0.026"
                            y="-0.155"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation="1.188"></feGaussianBlur>
                        </filter>
                    </defs>
                    <g transform="translate(-125.17 -121.658)">
                        <g
                            fillOpacity="1"
                            strokeWidth="0.029"
                            transform="matrix(1.15734 0 0 1 -21.5 -34.309)"
                        >
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#4d4d4d"
                                filter="url(#filter2821)"
                                opacity="0.764"
                                rx="7.311"
                                ry="6.172"
                            ></rect>
                            <rect
                                width="108.464"
                                height="18.432"
                                x="129.583"
                                y="158.819"
                                fill="#1ca7d1"
                                rx="4.101"
                                ry="6.172"
                            ></rect>
                        </g>
                    </g>
                </svg>
                <div className="passInputHolder insideInputDivs">
                    <ButtonPopRightLite expand={expand.expandPass}
                        title={"confirm password"}
                        breath={12} grow={5.8}>
                        <svg
                            style={{ flexShrink: 0, flexGrow: 1 }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="75%"
                            height="75%"
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
                    <div className="inputActual">
                        <input className="userNameInput inputBox" type="password"
                            ref={conPassRef}
                            onFocus={() => { setExpand({ ...expand, expandPass: false }) }}
                            onBlur={() => { setExpand({ ...expand, expandPass: true }) }}
                        ></input>
                    </div>

                </div>
            </div>
            <div className="loginButtonDiv  signElements">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90%"
                    height="90%"
                    style={{ position: "absolute" }}
                    version="1.1"
                    viewBox="0 0 210.414 55.444"
                >
                    <defs>
                        <filter
                            id="filter1574"
                            width="1.131"
                            height="1.789"
                            x="-0.066"
                            y="-0.394"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation="5.094"></feGaussianBlur>
                        </filter>
                    </defs>
                    <g
                        fillOpacity="1"
                        strokeWidth="0.295"
                        transform="translate(-33.132 -90.584)"
                    >
                        <rect
                            width="220.964"
                            height="30.994"
                            x="25.357"
                            y="102.81"
                            fill="#bababaff"
                            stroke="none"
                            filter="url(#filter1574)"
                            opacity="1"
                            rx="5.849"
                            ry="7.548"
                        ></rect>
                        <rect
                            width="220.964"
                            height="30.994"
                            x="25.357"
                            y="102.81"
                            fill="#286db2ff"
                            opacity="1"
                            rx="5.849"
                            ry="7.548"
                        ></rect>
                    </g>
                </svg>
                <p>SignUp</p>
                <div className="clickDetector"
                    onClick={() => { postNewUser() }}
                ></div>
            </div>

        </div>
    )
}

export default SignUp;