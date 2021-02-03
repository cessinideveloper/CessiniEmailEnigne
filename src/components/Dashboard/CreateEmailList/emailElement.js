import React from 'react';
// import './emaillist.css';
import axios from 'axios'
import { deleteEmailList } from '../../../actions'
import store from '../../../store/store'

const EmailElement = ({ emailId, listName, file }) => {

    return (
        <>
        <div className="emailElementBody">
                <div className="item">{listName}</div>
                <div className="item">
                    <button class="button"
                onClick={() => {
                    axios.delete(`https://emailengine2020.herokuapp.com/emailrud/${emailId}/`)
                        .then(
                            res => {
                            console.log(res);
                            store.dispatch(deleteEmailList(emailId))}
                            )}}>Delete</button>
                </div>
        </div>
        
        </>
        
    );
}

export default EmailElement;