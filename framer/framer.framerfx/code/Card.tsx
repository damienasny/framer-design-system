import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { colors } from "./canvas"
// Open Preview: Command + P
// Learn more: https://framer.com/api

const style = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    background: colors["primary-1"],
    borderRadius: 18,
    padding: "1rem",
    boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.25)"
}

export function Card(props) {
    const { header, content } = props

    return (
        <div style={style}>
            <h2 style={{ color: "white" }}>{header}</h2>
            <p style={{ color: "white" }}>{content}</p>
        </div>
    )
}

Card.defaultProps = {
    header: "My header",
    content: "This is my content",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Card, {
    header: {
        title: "Text",
        type: ControlType.String,
    },
    content: {
        title: "Tint",
        type: ControlType.Color,
    },
})
