import type { Chai } from "../types"
import { Card } from "./Card"

interface ListProps{
    items: Chai[]
}

export function List({items}: ListProps) {
  return (
    <div>
      {items.map((item) => (
        <Card 
        key={item.id}
        name={item.name}
        price={item.price}
        isSpecial={item.price > 40}
        />
      ))}
    </div>
  )
}

