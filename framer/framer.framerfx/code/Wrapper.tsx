import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Wrapper(props) {
    const { children } = props

    return (
        <Frame
            style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
            }}
        >
            {children}
        </Frame>
    )
}

Wrapper.defaultProps = {}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Wrapper, {})
