import React, { useState, useEffect } from 'react';
import store from '../../../store/store'
import EmailList from '../CreateEmailList/emailElement'

const EmailLists = () => {
    const [lists, setLists] = useState(null)


    useEffect(() => {
        const unsubscribe = store.subscribe(() => setLists(store.getState().emailList))
        setLists(store.getState().emailList)
        const cleanup = () => unsubscribe()
        return cleanup
    })
    return (
        <div className="subContentActual">
            {lists ? lists.map(list =>
                <EmailList key={list.id} emailId={list.id} listName={list.name} file={list.upload_file} ></EmailList>
            ) : <p>Email list is empty. </p>}
        </div>
    );
}

export default EmailLists;