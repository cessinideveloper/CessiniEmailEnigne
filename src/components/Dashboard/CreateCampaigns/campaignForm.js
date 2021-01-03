import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../../store/store'
import { storeCampaign } from '../../../actions'
import axios from 'axios'
import campStyle from '../../../css_modules/form.module.css'
import Back from '../../../assets/LeftArrow'
import Add from '../../../assets/Add'

const CampForm = ({ newCampaignData, setNewCampaignData }) => {
    const [emailCSV, setEmailCSV] = useState([])

    useEffect(() => {
        setEmailCSV(store.getState().emailList)
    })


    const options = emailCSV ? emailCSV.map(list =>
        <option key={list.id} value={list.id}>{list.name}</option>
    ) : null;

    const { push } = useHistory(null)
    return (
        <>
            <div className="topNavCam"></div>
            <div className="dashBodyMainCam">
                <div className={`${campStyle.camFormHolder}`}>
                    <form className="formFields  Fields">
                        <div className="leftFields Fields">
                            <div className="subField Fields">
                                <label htmlFor="camName">Campaign Name</label>
                                <input value={newCampaignData.campName} type="text" id="camName" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, campName: e.target.value })}
                                />
                            </div>
                            <div className="subField Fields">
                                <label htmlFor="SenderName">Sender Name</label>
                                <input value={newCampaignData.senderName} type="text" id="SenderName" name="SenderName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, senderName: e.target.value })}
                                />
                            </div>
                            <div className="subField Fields">
                                <label htmlFor="emailSub">Email Subject</label>
                                <input value={newCampaignData.emailSub} type="text" id="emailSub" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, emailSub: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="rightFields Fields">
                            <div className="subField Fields">
                                <label htmlFor="SenderEmail">Sender Email</label>
                                <input value={newCampaignData.senderEmail} type="text" id="SenderEmail" name="SenderEmail"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, senderEmail: e.target.value })}
                                />
                            </div>
                            <div className="subField Attachment">
                                <label htmlFor="emailList">Email Attachment</label>
                                <div>
                                    {newCampaignData.emailAttachment ?
                                        <div>{newCampaignData.emailAttachment.name}</div> :
                                        <Add height="80%" />}
                                    <input type="file" id="emailList"
                                        onChange={e => setNewCampaignData({ ...newCampaignData, emailAttachment: e.target.files[0] })}
                                    />
                                </div>

                            </div>
                            <div className="subField Fields">
                                <label htmlFor="emailLists">Email List</label>
                                <select id="camName" name="camName"
                                    onChange={e => setNewCampaignData({ ...newCampaignData, emailListCVS: e.target.value })}
                                >
                                    {options}
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className="formButtons Fields">
                        <div className="backButton"
                            onClick={() => {
                                push("/dashboard")
                            }}
                        >
                            <Back fill={"#B1B1B1"} width={"50%"} height={"50%"}></Back>
                        </div>
                        <div className="createButton Fields formButtonsCam"
                            onClick={() => {
                                push("/dashboard/newcamp/maileditor")
                            }
                            }
                        >
                            Next {/* {update ? "Update & Exit" : "Save & Exit"} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CampForm;