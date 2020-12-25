import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import './twolist.css'
import Champaigns from './campaignHolder/campaignHolder'
import EmailLists from './emailListHolder/emailListHolder'
import { useSpring, animated } from 'react-spring'
import store from '../../../store/store'
import { storeUserRequest, getAllEmailList } from '../../../actions'

const TwoLists = () => {
    const [butText, setButText] = useState(store.getState().userData.username)
    const { push } = useHistory(null)
    const logOffButtonRef = useRef(null)
    const [logoffButtonStyle, setLogOffButtonStyle] = useSpring(() => ({
        flexBasis: "12%",
        backgroundColor: "#3a4782ff",
        svgMargin: "4%",
    }))
    const mouseLeaveLogOff = () => {
        setLogOffButtonStyle({
            flexBasis: "12%",
            backgroundColor: "#3a4782ff",
            svgMargin: "4%",

        })
        setButText(store.getState().userData.username)

    }

    useEffect(() => {
        logOffButtonRef.current.addEventListener('mouseleave', mouseLeaveLogOff)
        console.log(localStorage.getItem("id"))
        if (!store.getState().campaigns.length) {
            console.log("getting in")
            const allUserData = {
                id: localStorage.getItem("id"),
                username: localStorage.getItem("username"),
                // password: userData.password,
                email: localStorage.getItem("email"),
                token: localStorage.getItem("token"),

            }
            store.dispatch(storeUserRequest(allUserData))
            store.dispatch(getAllEmailList(localStorage.getItem("id")))
            setButText(store.getState().userData.username)
        }
    }, [store.getState().userData.campaigns])

    return (
        <>
            <div className="topNavCam  subWrapper">
                <animated.div className="logOff"
                    ref={logOffButtonRef}
                    style={logoffButtonStyle}
                    onMouseEnter={() => {
                        setLogOffButtonStyle({
                            flexBasis: "12%",
                            backgroundColor: "#606060ff",
                            svgMargin: "4%",

                        })
                        setButText("Logoff")
                    }}
                    onMouseLeave={() => {
                        setLogOffButtonStyle({
                            flexBasis: "12%",
                            backgroundColor: "#3a4782ff",
                            svgMargin: "4%",

                        })
                        setButText(store.getState().userData.username)
                    }}
                    onClick={e => {
                        push('/')
                        localStorage.clear()
                    }}
                >
                    <animated.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        style={{ marginLeft: logoffButtonStyle.svgMargin }}
                        version="1.1"
                        viewBox="0 0 83.41 83.41"
                    >
                        <g fillOpacity="1" transform="translate(3.692 -95.684)">
                            <ellipse
                                cx="38.201"
                                cy="139.82"
                                fill="#496885"
                                strokeWidth="0.285"
                                opacity="1"
                                rx="33.102"
                                ry="33.102"
                            ></ellipse>
                            <path
                                fill="#fff"
                                stroke="none"
                                strokeWidth="0.303"
                                d="M38.2 95.684a41.705 41.705 0 00-41.705 41.705A41.705 41.705 0 0038.2 179.094a41.705 41.705 0 0041.706-41.705A41.705 41.705 0 0038.2 95.684zm0 13.988a12.717 12.717 0 0112.718 12.717A12.717 12.717 0 0138.2 135.106a12.717 12.717 0 01-12.717-12.717A12.717 12.717 0 0138.2 109.672zm-.025 28.6a27.118 27.118 0 01.025 0 27.118 27.118 0 0125.627 18.248A31.98 31.98 0 0138.2 169.37a31.98 31.98 0 01-25.626-12.85 27.118 27.118 0 0125.601-18.248z"
                                opacity="1"
                            ></path>
                        </g>
                    </animated.svg>
                    <p>{butText}</p>
                </animated.div>

            </div>
            <div className="dashBodyMain  subWrapper">
                <div className="leftDash  subDash">
                    <div className="contentholder">
                        <div className="contentButtons">
                            Champaigns
                        </div>
                        <div className="contentActual">
                            <Champaigns></Champaigns>
                        </div>
                    </div>
                </div>
                <div className="rightDash subDash">
                    <div className="contentholder">
                        <div className="contentButtons">
                            Email Lists
                        </div>
                        <div className="contentActual">
                            <EmailLists></EmailLists>
                        </div>
                    </div>
                </div>
                {/* <div className="createCamp   midButtons subWrapper"
                    onClick={() => push("/dashboard/newcamp")}
                >
                    Create Champaign
                </div>
                <div className="addEmailList midButtons subWrapper">
                    Add Emaillist
                </div> */}
            </div>
        </>
    );
}

export default TwoLists;