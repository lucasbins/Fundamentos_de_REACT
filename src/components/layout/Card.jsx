import "./Card.css"
import React from "react"

export default function Card(props) {

    const style = {
        backgroundColor: props.color || '#80f',
        borderColor: props.color || '#80f'
    }

    return (
        <div className="Card" style={style}>
            <div className="Title">{props.title}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}