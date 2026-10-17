import type { ReactNode } from "react"
import './Header.css'

interface PropsHeader{
    className ?: string
    children : ReactNode
}
export default function Header(props : PropsHeader) {
    return (
        <div className={`${props.className} header`}>
            {props.children}
        </div>
    )
}
