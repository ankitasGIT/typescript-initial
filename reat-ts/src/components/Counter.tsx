import { useState } from "react"

export function Counter() {

    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={(c) => setCount((c) => c+1)}>
                Increment
            </button>
        </div>
    )
}