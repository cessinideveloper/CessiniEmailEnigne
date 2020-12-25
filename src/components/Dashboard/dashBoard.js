import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Icon from '../../assets/Whitelogo'
import './dashboard.css'
import TwoLists from './Email_Campaign_Lists/twoLists'
import NewCam from './CreateCampaigns/newCam'//'../newCampaign/newCam'
import LoadedCamp from './LoadedCampaigns/loadedCampaign'
import EmailListForm from './CreateEmailList/emailListForm'
import { useSpring, animated } from 'react-spring'
import dashStyle from '../../css_modules/dashBoard.module.css'

const DashBoard = () => {

    const { push } = useHistory(null)

    const emailEditorRef = useRef(null);

    const [emailButtonStyle, setEmailButtonStyle] = useSpring(() => ({ transform: "translateY(0%)", backgroundColor: "#3a4782ff" }))
    const [campButtonStyle, setCampButtonStyle] = useSpring(() => ({ transform: "translateY(0%)", backgroundColor: "#3a4782ff" }))

    return (
        <div className={`coolBackground ${dashStyle.dash}`}>
            <div className="sideNavHolder subWrapper">
                <div className="cessiniHolder  subWrapper">
                    <Icon style={{ width: "30%", position: "relative", top: "50%" }}></Icon>
                </div>
                <div className="contentHolder  subWrapper">
                    <animated.div className="MyEmailList sideButtons"
                        style={emailButtonStyle}
                        onClick={() => {
                            setEmailButtonStyle({ transform: "translateY(0%)", backgroundColor: "#41a56eff" })
                            setCampButtonStyle({ transform: "translateY(0%)", backgroundColor: "#3a4782ff" })
                            push("/dashboard/newemaillist")
                        }}
                    >Add Email Lists</animated.div>
                    <animated.div className="MyCampaign  sideButtons"
                        style={campButtonStyle}
                        onClick={() => {
                            setEmailButtonStyle({ transform: "translateY(200%)", backgroundColor: "#3a4782ff" })
                            setCampButtonStyle({ transform: "translateY(-200%)", backgroundColor: "#41a56eff" })
                            push("/dashboard/newcamp")
                        }}
                    > Create Campaign</animated.div>
                </div>
            </div>
            <div className="dashBody      subWrapper">
                <Switch>
                    <Route path="/dashboard/newcamp" render={() =>
                        <NewCam></NewCam>
                    }>
                    </Route>
                    <Route path="/dashboard/loadedcamp" render={() =>
                        <LoadedCamp></LoadedCamp>
                    }>
                    </Route>
                    <Route path="/dashboard/newemaillist" render={() => <EmailListForm></EmailListForm>}></Route>
                    <Route path="/dashboard" render={() => <TwoLists></TwoLists>}></Route>
                </Switch>
            </div>
        </div>
    );
}

export default DashBoard;