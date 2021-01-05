import React, { useState, useRef, useEffect } from 'react';

import './twolist.css'
import Champaigns from './campaignHolder'
import EmailLists from './emailListHolder'
import store from '../../../store/store'
import { storeUserRequest, getAllEmailList } from '../../../actions'
import Logoff from '../../../molecules/logOff'

const TwoLists = () => {

    useEffect(() => {
        console.log(localStorage.getItem("id"))
        if (!store.getState().campaigns.length) {
            console.log("getting in")
            const allUserData = {
                id: localStorage.getItem("id"),
                username: localStorage.getItem("username"),
                email: localStorage.getItem("email"),
                token: localStorage.getItem("token"),

            }
            store.dispatch(storeUserRequest(allUserData))
            store.dispatch(getAllEmailList(localStorage.getItem("id")))
        }
    }, [store.getState().userData.campaigns])

    return (
        <>
            <div className="topNavCam  subWrapper">
                <Logoff></Logoff>
            </div>
            <div className="dashBodyMainCam  subWrapper">
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
                {/* <div className="rightDash subDash">
                    <div className="contentholder">
                        <div className="contentButtons">
                            Email Lists
                        </div>
                        <div className="contentActual">
                            <EmailLists></EmailLists>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default TwoLists;