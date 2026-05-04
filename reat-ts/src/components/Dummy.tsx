
import type {PropsWithChildren, ReactNode} from "react"

interface DummyProps extends PropsWithChildren{
    title: string;
    footer?: ReactNode
}

export function Dummy({title, children, footer} : DummyProps){
    return (
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </section>
    )
}