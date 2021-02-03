import React, { useState } from 'react';
import './emailuploader.css'
import { useHistory,Link } from 'react-router-dom'
import axios from 'axios'
import store from '../../../store/store'
import { addEmailList } from '../../../actions'
import EmailList from './emailList'
import Navbar from '../../navbar/navbar'
import Modal from '../../modal/modal'
import useModal from '../../modal/useModal'
import Button from '../../button/button'
import Sidebar from '../../sidebar/sidebar'

const EmailListForm = () => {
    const {isShowing, toggle} = useModal();
    

    return (
        <>
            <Sidebar></Sidebar>
            <div className="modal">
                <Button className="modalButton" toggle={toggle}>Create MailList</Button>
            </div>
            <Modal
                isShowing={isShowing}
                hide={toggle} />
            <hr></hr>

            {/* User input ans file upload section begine */}
            <EmailList></EmailList>
        </>
    );
}

export default EmailListForm;