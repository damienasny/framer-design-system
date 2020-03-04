import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { colors } from "./canvas"
// Open Preview: Command + P
// Learn more: https://framer.com/api

type Props = {
    text: string
}

export function Subtitle(props: Props): any {
    console.log({
        props,
    })
    const { text } = props

    return (
        <h1
            style={{
                fontSize: 24,
                fontWeight: 600,
            }}
        >
            {text}
        </h1>
    )
}

Subtitle.defaultProps = {
    text: "Get started!",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Subtitle, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
})
