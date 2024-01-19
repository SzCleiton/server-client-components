'use client'

import { useState } from "react"

export function CountButton() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(state => state + 1)}>Increment {count}</button>
    )
}