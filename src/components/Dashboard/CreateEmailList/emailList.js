import React, { useState, useEffect } from 'react'
import listStyle from '../../../css_modules/lists.module.css'
import EmailElement from './emailElement'
import store from '../../../store/store'

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

    console.log(emptyText)
    return (
        <div className={`${listStyle.wrapper}`}>
            <div className={`${listStyle.subWrapper}`}>
                {emptyText ? <p>{emptyText}</p> :
                    <div className={`${listStyle.subSubWrapper}`}>
                        {lists ? lists.map(list =>
                            <EmailElement key={list.id} emailId={list.id} listName={list.name} file={list.upload_file} ></EmailElement>
                        ) : null}
                    </div>
                }
            </div>
        </div>
    )
}

export default EmailList
