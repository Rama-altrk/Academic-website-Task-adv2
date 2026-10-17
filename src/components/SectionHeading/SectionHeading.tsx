import styles from './SectionHeading.module.css'


interface PropsHeading{
    className ?: string
    subTitle : string
    title : string 
    description : string
}

export default function SectionHeading({className , subTitle , title , description} : PropsHeading) {
    return (
        <div className={`${className} ${styles.headerSection} betweenSection`}>
            <span>{subTitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
