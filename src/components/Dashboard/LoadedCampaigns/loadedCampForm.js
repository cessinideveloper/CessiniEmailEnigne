import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../../store/store'
import { storeCampaign, updateCampaign } from '../../../actions'
import axios from 'axios'
import Back from '../../../assets/LeftArrow'
import Add from '../../../assets/Add'

const LoadedCampForm = ({ newCampaignData, setNewCampaignData, loadTheTemplate, loaded, setLoaded }) => {
    const [emailCSV, setEmailCSV] = useState([])

    useEffect(() => {
        const loadedCamp = store.getState().loadedCampaign ? store.getState().loadedCampaign.campId : null
        if (loadedCamp) {
            if (!loaded) {
                console.log("getting into if")
                const first = store.getState().campaigns.filter(camp => camp.id === loadedCamp)
                setNewCampaignData(first[0])
                setLoaded(true)
            }
        }
        setEmailCSV(store.getState().emailList)
    }, [])

    const options = emailCSV ? emailCSV.map(list =>
        <option key={list.id} value={list.id}>{list.name}</option>
    ) : null;


    const camNameRef = useRef(null)
    const SenderNameRef = useRef(null)
    const emailSubRef = useRef(null)
    const SenderEmailRef = useRef(null)

    console.log(newCampaignData.campName)


    const { push } = useHistory(null)
    return (
        <>
            <div className="container1">
            <div className="form2">
                  <form className="login-form">
                        <span className="heading">Campaign Name</span>
                        <input type="text" defaultValue={newCampaignData.name} ref={camNameRef}  id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, campName: e.target.value })} />
                        <span className="heading">Sender Mail</span>
                        <input type="text"defaultValue={newCampaignData.sender_email} ref={SenderEmailRef} id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, emailSub: e.target.value })} />
                      
                      
                        <span className="heading">Sender Name</span>
                        <input type="text" defaultValue={newCampaignData.sender_name} ref={SenderNameRef}  id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, senderName: e.target.value })} />
                        <span className="heading">Email Attachment</span>
                        <input type="file" id="emailList"
                                        onChange={e => setNewCampaignData({ ...newCampaignData, emailAttachment: e.target.files[0] })}
                                    />
                      
                      
                        <span className="heading">Email Subject</span>
                        <input type="text" defaultValue={newCampaignData.email_subject} ref={emailSubRef} id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, emailSub: e.target.value })} />
                        <span className="heading">Email List</span>
                        <select id="emailLists" name="emailLists" value={newCampaignData.camp_emails}
                                    onChange={e => {
                                        console.log("hey hey", newCampaignData.camp_emails)
                                        setNewCampaignData({ ...newCampaignData, camp_emails: e.target.value })
                                    }
                                    }
                                >
                            {options}
                        </select>
                      
                      <button 
                        onClick={() => {
                            push("/dashboard/newcamp/maileditor")
                        }
                        } >Next
                        </button>
                  </form>
                </div>
        </div>             
            
        </>
    );
}

export default LoadedCampForm;