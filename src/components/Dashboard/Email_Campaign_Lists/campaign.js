import React, { useState } from 'react';
import './campaign.css'
import store from '../../../store/store'
import { loadCampaign, deleteCamp } from '../../../actions'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Campaign = ({ campId, campName }) => {

    const { push } = useHistory(null)


    return (
        <div className="content">
            <div className="campName">
                {campName}
            </div>
            <div className="loadButtonHolder">
                <div className="loadButton"
                    onClick={() => {
                        store.dispatch(loadCampaign({ campId, campName }));
                        push("/dashboard/loadedcamp")
                    }}
                >
                    Load
                </div>
                <div className="deleteButton loadButton"
                    onClick={() => {
                        axios.delete(`https://emailengine2020.herokuapp.com/camprud/${campId}/`)
                            .then(
                                res => {
                                    console.log(res)
                                    store.dispatch(deleteCamp(campId))
                                }
                            )


                    }}
                >
                    Delete
                </div>
            </div>
        </div>
    );
}

export default Campaign;