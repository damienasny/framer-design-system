import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

type Props = {
    text: string
}

export function Header(props: Props): any {
    console.log({
        props,
    })
    const { text } = props

    return (
        <h1
            style={{
                fontSize: 32,
                fontWeight: 800,
            }}
        >
            {text}
        </h1>
    )
}

Header.defaultProps = {
    text: "Get started!",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Header, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
})
