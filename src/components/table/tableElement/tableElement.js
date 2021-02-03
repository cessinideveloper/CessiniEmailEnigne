import React, { useState } from 'react';
import store from '../../../store/store'
import { useHistory } from 'react-router-dom'
import { loadCampaign, deleteCamp } from '../../../actions'
import axios from 'axios';
import './tableElement.css'

const TableElement = ({ campId, campName })=>{
    const { push } = useHistory(null)

    return (
        <tbody>
            <tr>
                <td>{campName}</td>
                <td><button class="button"
                    onClick={() => {
                    store.dispatch(loadCampaign({ campId, campName }));
                    push("/dashboard/loadedcamp")}}
                >Edit</button>
                </td>

                <td><button class="button"
                onClick={() => {
                    axios.delete(`https://emailengine2020.herokuapp.com/camprud/${campId}/`)
                        .then(
                            res => {
                                console.log(res)
                                store.dispatch(deleteCamp(campId))
                            }
                        )


                }}>Delete</button></td>
            </tr>
        </tbody>
    )
}
export default TableElement;
