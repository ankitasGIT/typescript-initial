interface CardProps {
    name: string,
    price: number,
    isSpecial?: boolean
}
// TS
export function Card({name, price, isSpecial=false} : CardProps) {
    return (
        <article>
            <h3>{name} {isSpecial}</h3>
            <p>{price}</p>
        </article>
    )
}