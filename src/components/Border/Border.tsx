// import styles from './Border.module.css'

interface PropsBorder{
    classNameContainer ?: string
    widthContainer : string
    flexDirection ?: "row" | "column" | "row-reverse" | "column-reverse" | undefined 
    rotatContaner ?: string
    position ?: "static" | "relative" | "absolute" | "sticky" | "fixed" | undefined
    zIndex ?: number
    topContainer ?: string
    rightContainer ?: string
    classNameBorder ?: string
    paddingBorder : string
    paddingLeft ?: string
    widthBorder ?: string
    backgroundBorder ?: string
    border ?: string
    classNameCircle ?: string
    // backgroundCircel ?: string
    display ?: string
    topCircle ?: string
    rightCircle ?: string
    zIndexCircle ?: string
}

export default function Border(props: PropsBorder) {
    return (
        <div className={`${props.classNameContainer}`} 
            style={{
                width: props.widthContainer ,
                display: 'flex',
                flexDirection: props.flexDirection,
                alignItems: 'center',
                // gap:' 10px',
                rotate: props.rotatContaner ,
                position: props.position ,
                zIndex : props.zIndex ,
                right: props.rightContainer,
                top: props.topContainer,
            }}>
                <div className={props.classNameBorder} style={{width: props.widthBorder , padding: props.paddingBorder , paddingLeft: props.paddingLeft , backgroundColor: 'var(--orang80)'}}>
                    <div className={props.border} style={{border: '2px solid var(--grey15)' , position: 'relative' , right: '0px'}}></div>
                </div>
                {/* <div style={{backgroundColor: props.backgroundCircel,}}> */}
                    <div className= {props.classNameCircle}
                        style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            outline: '2px solid var(--grey15)',
                            backgroundColor: 'var(--absolutefff)',
                            position: 'relative',
                            zIndex: props.zIndexCircle,
                            right:props.rightCircle,
                            top: props.topCircle,
                            display: props.display
                        }}>
                    </div>
                {/* </div> */}
        </div>
    )
}
