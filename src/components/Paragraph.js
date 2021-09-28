import React from 'react'

export default function Paragraph(props) {
    return (
            <p className={`paragraph paragraph__${props.light}`}>{props.text}</p>        
    )
}
