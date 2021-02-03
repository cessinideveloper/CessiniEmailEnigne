import React, { useState, useRef, useEffect } from 'react';
import './table.css'
import Tableheader from './tableHeader/tableHeader'
import Tableelements from './tableElement/tableElements'
import store from '../../store/store'
import { storeUserRequest, getAllEmailList } from '../../actions'

const Table = ()=>{
    useEffect(() => {
        console.log(localStorage.getItem("id"))
        if (!store.getState().campaigns.length) {
            console.log("getting in")
            const allUserData = {
                id: localStorage.getItem("id"),
                username: localStorage.getItem("username"),
                email: localStorage.getItem("email"),
                token: localStorage.getItem("token"),

            }
            store.dispatch(storeUserRequest(allUserData))
            store.dispatch(getAllEmailList(localStorage.getItem("id")))
        }
    }, [store.getState().userData.campaigns])


    return (
        <div className="table-div">
        <h2>Responsive Table</h2>
            <div className="table-wrapper">
                <table className="fl-table">
                    <Tableheader></Tableheader>
                    <Tableelements></Tableelements>
                </table>
            </div>
        </div>
        
    )
}


export default Table;