import type { ReactNode } from 'react'
import styles from './Container.module.css'

type Position = "static" | "relative" | "absolute" | "sticky" | "fixed"
interface PropsContainer{
    className ?: string
    children : ReactNode
    shadowColor : string
    spread : string
    xy : string
    background : string
    padding ?: string
    position : Position
    onClick ?: (event: React.MouseEvent<HTMLDivElement>) => void | undefined
    align ?: string
}
export default function Container({children , shadowColor , spread , xy , background , padding , className ,position , onClick ,align} : PropsContainer) {
    return (
        <div className={`${styles.container} ${className}`} onClick= {onClick} style= {{
            boxShadow: `${xy}px ${xy}px 0px ${spread}px ${shadowColor}` ,
            backgroundColor: `${background}`,
            padding: `${padding}` ,
            border: '2px solid var(--grey15)',
            borderRadius: '12px' ,
            position: `${position}`,
            alignItems: `${align}`
            }}>
            {children}
        </div>
    )
}
