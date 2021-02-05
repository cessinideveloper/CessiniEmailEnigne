import React, { useState } from 'react';
import store from '../../../store/store'
import { useHistory } from 'react-router-dom'
import { loadCampaign, deleteCamp } from '../../../actions'
import axios from 'axios';
import {Button} from 'react-bootstrap';

const TableElement = ({ campId, campName })=>{
    const { push } = useHistory(null)

    return (
        <tbody>
            <tr>
                <td>{campName}</td>
                <td><Button variant="warning" className="button"
                    onClick={() => {
                    store.dispatch(loadCampaign({ campId, campName }));
                    push("/dashboard/loadedcamp")}}
                >Edit</Button>
                </td>

                <td><Button variant="danger" className="button"
                onClick={() => {
                    axios.delete(`https://emailengine2020.herokuapp.com/camprud/${campId}/`)
                        .then(
                            res => {
                                console.log(res)
                                store.dispatch(deleteCamp(campId))
                            }
                        )


                }}>Delete</Button></td>
            </tr>
        </tbody>
    )
}
export default TableElement;
