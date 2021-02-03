import React, { useEffect, useState } from 'react';
import TableElement from './tableElement';
import { cleanup } from '@testing-library/react';
import store from '../../../store/store'

 const TableElements = ()=>{
    const [camps, setCamps] = useState(null)

    useEffect(() => {
        const unsubscribe = store.subscribe(() => setCamps(store.getState().campaigns))
        setCamps(store.getState().campaigns)
        console.log(store.getState().campaigns)
        const cleanup = () => unsubscribe()
        return cleanup
    })

    return (
        <>
        {camps? camps.map(camp =><TableElement
        key={camp.id}
        campId={camp.id}
        campName={camp.name}
        ></TableElement> ):null}
        </>
    )
}
export default TableElements;