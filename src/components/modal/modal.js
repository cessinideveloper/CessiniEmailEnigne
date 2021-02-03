import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useModal from './useModal';
import './modal.css'
import { useHistory,Link } from 'react-router-dom'
import store from '../../store/store'
import { addEmailList } from '../../actions'


const Modal = ({ isShowing, hide }) => {
  const [emailListState, setEmailListState] = useState({ name: "", file: "" })
  const { push } = useHistory(null)
  
  return(
    <>
      {isShowing ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay"/>
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              
                <div className="form1">
                  <form className="login-form">
                      <span className="heading">Name of List</span>
                        <input type="text" id="emailName" name="emailName" placeholder="username"
                        onChange={e => setEmailListState({ ...emailListState, name: e.target.value })} />
                        <span className="heading">Upload File</span>
                        <input type="file" id="emailFile" name="emailFile" placeholder="CSV File"
                        onChange={e => setEmailListState({ ...emailListState, file: e.target.files[0] })} />
                      <button 
                      onClick={() => {
                        console.log(emailListState.file, emailListState.name, store.getState().userData.id)
                        var formData = new FormData();
                        formData.append("upload_file", emailListState.file)
                        formData.append("name", emailListState.name)
                        formData.append("my_customer", store.getState().userData.id)
                        store.dispatch(addEmailList(formData))
                        push('/dashboard')}} >Create</button>
                  </form>
                </div>
              <div className="modal-header">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            
          </div>
        </React.Fragment>, document.body
      ) : null}
    </>
    
  )
  
}

export default Modal;