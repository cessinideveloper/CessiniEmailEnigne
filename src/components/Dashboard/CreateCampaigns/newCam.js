import React, { useState, useRef } from 'react';
import { useFormik } from 'formik'
import { useHistory,Route,Switch } from 'react-router-dom'
import EmailEditor from 'react-email-editor'
import axios from 'axios'
import store from '../../../store/store'
import './mailEditor.css'
import CampForm from './campaignForm'
import { addCampaign } from '../../../actions'
import Navbar from '../../navbar/NavigationBar'
import {Button } from 'react-bootstrap';


const NewCam = () => {
    
    const [newCampaignData, setNewCampaignData] = useState({
        senderName: "",//string
        senderEmail: "",//string
        campName: "",//string
        emailSub: "",//string
        emailListCVS: 0,//number
        emailAttachment: null,//null
        emailBodyJSON: null,//JSONobject
        emailBodyHTML: null,//HTMLobject 
    })
    const { push } = useHistory(null)
    const emailEditorRef = useRef(null);

    return (
        <>
        <div className="header">
        <Navbar></Navbar>
            <Switch>

                <Route path="/dashboard/newcamp/maileditor" render={() =>
                <>
                <div className="navButton">
                <Button variant="secondary" 
                className="button"
                onClick={() => push("/dashboard/newcamp")}>Back</Button>
                <Button variant="success" 
                className="button"
                onClick={() => {
                        emailEditorRef.current.editor.exportHtml(({ design, html }) => {
                        setNewCampaignData({ ...newCampaignData, emailBodyJSON: design, emailBodyHTML: html })
                        setTimeout(() => {
                            let dataForm = new FormData
                            let Jda = JSON.stringify(newCampaignData.emailBodyJSON)
                            dataForm.append("name", newCampaignData.campName)
                            dataForm.append("sender_name", newCampaignData.senderName)
                            dataForm.append("sender_email", newCampaignData.senderEmail)
                            dataForm.append("email_subject", newCampaignData.emailSub)
                            dataForm.append("my_customer", store.getState().userData.id)
                            dataForm.append("camp_emails", Number(newCampaignData.emailListCVS))
                            dataForm.append("email_message", "will see")
                            dataForm.append("temp_json", Jda)
                            dataForm.append("ht", html)
                            dataForm.append("attachment", newCampaignData.emailAttachment)//newCampaignData.emailAttachment)
                            axios.post("https://emailengine2020.herokuapp.com/newcampaign/",
                                dataForm
                            ).then(res => {
                                console.log(res.data, res.data.id)
                                store.dispatch(addCampaign())
                                setTimeout(() => { push('/dashboard') }, 200)
                                axios.post(`https://emailengine2020.herokuapp.com/campid/${res.data.id}/`)
                            })
                                .catch(er => {
                                    if (er.response) {
                                        if (er.response.status === 500) {
                                            document.getElementsByClassName("saveAndsend")[0].click()
                                            // axios.post("https://emailengine2020.herokuapp.com/newcampaign/", dataForm).then(res => res.data)
                                        }
                                    }
                                }
                                )

                        }, 0)

                    })
                }}
                >Send</Button>
                <Button variant="info" 
                className="button"
                onClick={() => {
                    emailEditorRef.current.editor.exportHtml(({ design, html }) => {
                        setNewCampaignData({ ...newCampaignData, emailBodyJSON: design, emailBodyHTML: html })
                        setTimeout(() => {
                            let dataForm = new FormData
                            let Jda = JSON.stringify(newCampaignData.emailBodyJSON)
                            dataForm.append("name", newCampaignData.campName)
                            dataForm.append("sender_name", newCampaignData.senderName)
                            dataForm.append("sender_email", newCampaignData.senderEmail)
                            dataForm.append("email_subject", newCampaignData.emailSub)
                            dataForm.append("my_customer", store.getState().userData.id)
                            dataForm.append("camp_emails", Number(newCampaignData.emailListCVS))
                            dataForm.append("email_message", "will see")
                            dataForm.append("temp_json", Jda)
                            dataForm.append("ht", html)
                            dataForm.append("attachment", newCampaignData.emailAttachment)//newCampaignData.emailAttachment)
                            axios.post("https://emailengine2020.herokuapp.com/newcampaign/",
                                dataForm
                            ).then(res => {
                                console.log(res.data)
                                store.dispatch(addCampaign())
                                setTimeout(() => { push('/dashboard') }, 200)
                            })
                                .catch(er => {
                                    if (er.response) {
                                        if (er.response.status === 500) {
                                            alert(er.response.status)
                                            //document.getElementsByClassName("sendAndExit")[0].click()
                                            // axios.post("https://emailengine2020.herokuapp.com/newcampaign/", dataForm).then(res => res.data)
                                        }
                                    }
                                }
                                )

                        }, 0)

                    })
                }}
                >Save</Button>
                </div>
                <div className="emailEditor">
                    <EmailEditor ref={emailEditorRef}></EmailEditor>
                </div>
                </>
                }>
                </Route>
                <Route path="/dashboard/newcamp" render={() =>
                    <CampForm newCampaignData={newCampaignData}
                        setNewCampaignData={setNewCampaignData}
                    ></CampForm>}>
                </Route>
            </Switch>
        </div>
       
        </>
        
    );
}

export default NewCam;