import React from 'react'

export default function button(props) {
    return (
        <button className="button" onClick={props.toggle}>{props.children}</button>
    )
}
