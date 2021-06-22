import React from 'react'

export default function props(props){
    return(
        <div>
            <h1>{props.text.name}</h1>
            <h1>{props.text.Company}</h1>
        </div>
    )
}