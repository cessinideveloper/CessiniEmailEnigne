import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import store from '../../../store/store'
import { storeCampaign } from '../../../actions'
import axios from 'axios'
import Back from '../../../assets/LeftArrow'
import Add from '../../../assets/Add'
import './newcam.css'
import Navbar from '../../navbar/NavigationBar'


const CampForm = ({ newCampaignData, setNewCampaignData }) => {
    const [emailCSV, setEmailCSV] = useState([])

    useEffect(() => {
        setEmailCSV(store.getState().emailList)
    })


    const options = emailCSV ? emailCSV.map(list =>
        <option key={list.id} value={list.id}>{list.name}</option>
    ) : null;
    
    console.log(options);
    const { push } = useHistory(null)
    return (
        <>
        <div className="container1">
            <div className="form2">
                  <form className="login-form">
                        <span className="heading">Campaign Name</span>
                        <input type="text"  id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, campName: e.target.value })} />
                        <span className="heading">Sender Mail</span>
                        <input type="text"  id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, emailSub: e.target.value })} />
                      
                      
                        <span className="heading">Sender Name</span>
                        <input type="text"   id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, senderName: e.target.value })} />
                        <span className="heading">Email Attachment</span>
                        <input type="file" id="emailName" name="emailName" placeholder="username"
                         onChange={e => setNewCampaignData({ ...newCampaignData, emailAttachment: e.target.files[0] })} />
                      
                      
                        <span className="heading">Email Subject</span>
                        <input type="text"  id="emailName" name="emailName" placeholder="username"
                        onChange={e => setNewCampaignData({ ...newCampaignData, emailSub: e.target.value })} />
                        <span className="heading">Email List</span>
                        <select id="camName" name="camName"
                        onChange={e => setNewCampaignData({ ...newCampaignData, emailListCVS: e.target.value })}>
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


export default CampForm;
