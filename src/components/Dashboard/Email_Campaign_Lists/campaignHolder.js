import React, { useEffect, useState } from 'react';
import Campaign from './campaign'
import store from '../../../store/store'
import { cleanup } from '@testing-library/react';

const Campaigns = () => {
    const [camps, setCamps] = useState(null)


    useEffect(() => {
        const unsubscribe = store.subscribe(() => setCamps(store.getState().campaigns))
        setCamps(store.getState().campaigns)
        console.log(store.getState().campaigns)
        const cleanup = () => unsubscribe()
        return cleanup
    })



    return (
        <div className="subContentActual">
            {camps ? camps.map(camp => <Campaign
                key={camp.id}
                campId={camp.id}
                campName={camp.name}></Campaign>) : null}
        </div>
    );
}

export default Campaigns;