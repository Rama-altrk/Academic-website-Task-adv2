interface PropsMain{
    children : React.ReactNode
    className : string
}
export default function Main({children , className} : PropsMain) {
    return (
        <main className={className}>
            {children}
        </main>
    )
}
