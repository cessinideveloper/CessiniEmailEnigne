import React from 'react';
// import './emaillist.css';
import axios from 'axios'
import { deleteEmailList } from '../../../actions'
import store from '../../../store/store'
import listStyle from '../../../css_modules/lists.module.css'
import DeleteIcon from '../../../assets/Trash'

const EmailElement = ({ emailId, listName, file }) => {

    return (
        <div className={`${listStyle.elementWrapper}`}>
            <div className={`${listStyle.campNameEmail}`}>
                <div>{listName}</div>
            </div>
            <div className={`${listStyle.listButton}`}
                onClick={() => {
                    axios.delete(`https://emailengine2020.herokuapp.com/emailrud/${emailId}/`)
                        .then(
                            res => {
                                console.log(res)
                                store.dispatch(deleteEmailList(emailId))
                            }

                        )
                }}
            >
                <DeleteIcon width="15%" fill="white"></DeleteIcon>
            </div>

        </div>
    );
}

export default EmailElement;