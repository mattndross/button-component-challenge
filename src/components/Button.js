import React from 'react'

export default function Button(props) {
    return (
            <button className={`button button__${props.variant}`} >Default</button>        
    )
}
