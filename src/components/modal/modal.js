import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './modal.css'
import { useHistory,Link } from 'react-router-dom'
import store from '../../store/store'
import { addEmailList } from '../../actions'
import {Modal, Button} from 'react-bootstrap'


const ModalBody = ({ isShowing, hide }) => {
  const [emailListState, setEmailListState] = useState({ name: "", file: "" });
  const [show, setShow] = useState(false);
  const { push } = useHistory(null)
  
  return(
    <>
    <div className="modalBody">
      <Button size="sm" variant="primary" onClick={() => setShow(true)}>
        Create Mail List
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Create Mail List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </div>
      
    </>
    
  )
  
}

export default ModalBody;