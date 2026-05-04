import { useState } from "react"

interface OrderFormProps{
    onSubmit(order: {name: string, cups: number}): void
}

export function OrderForm({onSubmit}: OrderFormProps){
    const [name, setName] = useState<string>("Green")
    const [cups, setCups] = useState<number>(1)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ name, cups })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}>
            </input>

            <label>Cups: </label>
            <input type="number" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)}>
            </input>
            <button type="submit">Place Order</button>
        </form>
    )
}