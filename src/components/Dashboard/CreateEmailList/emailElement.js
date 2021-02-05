import React from 'react';
// import './emaillist.css';
import axios from 'axios'
import { deleteEmailList } from '../../../actions'
import store from '../../../store/store'
import {Button} from 'react-bootstrap'

const EmailElement = ({ emailId, listName, file }) => {

    return (
        <>
        <tbody>
            <tr>
                <td>{listName}</td>
                <td><Button variant="danger" class="button"
                onClick={() => {
                    axios.delete(`https://emailengine2020.herokuapp.com/emailrud/${emailId}/`)
                        .then(
                            res => {
                            console.log(res);
                            store.dispatch(deleteEmailList(emailId))}
                            )}}>Delete</Button>
                </td>
            </tr>
        </tbody>
        
        </>
        
    );
}

export default EmailElement;