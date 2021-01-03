import React, { useState } from 'react';
import './emailuploader.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import store from '../../../store/store'
import { addEmailList } from '../../../actions'
import Back from '../../../assets/LeftArrow'
import Add from '../../../assets/Add'

const EmailListForm = () => {
    const [emailListState, setEmailListState] = useState({ name: "", file: "" })
    const { push } = useHistory(null)

    return (
        <>
            <div className="topNavCam  subWrapperCam">

            </div>
            <div className="dashBodyMainCam  subWrapperCam">
                <div className="camFormHolderEmail">
                    <form className="formFieldsEmail  FieldsEmail">
                        <div className="field">
                            <div className="subField">
                                <label htmlFor="emailName">File Name</label>
                                <input type="text" id="emailName" name="emailName"
                                    onChange={e => setEmailListState({ ...emailListState, name: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="subField">
                                <label htmlFor="emailFile">Upload File</label>
                                <div>
                                    {emailListState.file ? <div>{emailListState.file.name}</div> : <Add height="80%" />}
                                    <input type="file" id="emailFile" name="emailFile"
                                        onChange={e => setEmailListState({ ...emailListState, file: e.target.files[0] })}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="formButtonsEmail FieldsEmail">
                        <div className="backButton"
                            onClick={() => { push("/dashboard") }}
                        ><Back fill={"#B1B1B1"} width={"50%"} height={"50%"}></Back></div>
                        <div className="createButton lowButtonEmails "
                            onClick={() => {
                                console.log(emailListState.file, emailListState.name, store.getState().userData.id)
                                var formData = new FormData();
                                formData.append("upload_file", emailListState.file)
                                formData.append("name", emailListState.name)
                                formData.append("my_customer", store.getState().userData.id)
                                store.dispatch(addEmailList(formData))
                                push('/dashboard')
                            }}
                        >Save</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmailListForm;