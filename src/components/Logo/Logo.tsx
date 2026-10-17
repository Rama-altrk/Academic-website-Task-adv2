import styles from './Logo.module.css'

interface PropsLogo{
    className ?: string
    logoName : string
    logoText : string
    backColor ?: string
}
export default function Logo(props: PropsLogo) {
    return (
        <div className= {`${styles.container} ${props.className}`} style={{backgroundColor: props.backColor}}>
            <img src={`/assets/img/${props.logoName}`} alt="logo" />
            <img src={`/assets/img/${props.logoText}`} alt="textLogo" />
        </div>
    )
}
