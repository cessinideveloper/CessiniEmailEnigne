import React, { useState, useEffect } from 'react'
import EmailElement from './emailElement'
import store from '../../../store/store'
import Table from 'react-bootstrap/Table'





const EmailList = () => {

    const [lists, setLists] = useState(null)
    console.log(lists)

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setLists(store.getState().emailList))
        setLists(store.getState().emailList)
        const cleanup = () => unsubscribe()
        return cleanup
    })

    const emptyText = lists ? lists.length == 0 ? <p>Email List is empty</p> : null : null

    console.log(emptyText);
    console.log('Hi');
    return (
        <div className="emailList">
            {emptyText ? <p>{emptyText}</p> :
                    <Table striped bordered hover variant="dark">
                        {lists ? lists.map(list =>
                            <EmailElement key={list.id} emailId={list.id} listName={list.name} file={list.upload_file} ></EmailElement>
                        ) : null}
                    </Table>
                }
        </div>
    )
}

export default EmailList
