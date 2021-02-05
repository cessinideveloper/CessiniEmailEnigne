import React, { useState } from 'react';
import './emailuploader.css'
import { useHistory,Link } from 'react-router-dom'
import axios from 'axios'
import store from '../../../store/store'
import { addEmailList } from '../../../actions'
import EmailList from './emailList'
import Navbar from '../../navbar/NavigationBar'
import Button from '../../button/button'
import Model from '../../modal/modal'
const EmailListForm = () => {
    
    console.log("ABHIJIT...");
    return (
        <>
           <div className="emailBody">
           <Model></Model>

            {/* User input ans file upload section begine */}
            <EmailList></EmailList>
           </div>
            
        </>
    );
}

export default EmailListForm;