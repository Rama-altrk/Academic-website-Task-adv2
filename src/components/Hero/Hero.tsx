import Border from '../Border/Border'
import Container from '../Container/Container'
import styles from './Hero.module.css'

interface PropsHero{
    className : string
}

interface PropsCount{
    classAmount ?: string
    count : number
    countName : string
}

function Count({count , countName , classAmount} : PropsCount) {
    return(
        <div className={`${styles.amount} ${classAmount}`}>
            <span className={styles.numberAmount}>+{count}</span>
            <span className={styles.nameAmount}>{countName}</span>
        </div>
    )
}

export default function Hero(props : PropsHero) {
    return (
        <div className={`${styles.hero} ${props.className}`}>
            <div className={styles.mobileImg}>
                <div className={styles.imgHero}>
                    <Border
                        widthContainer='100%'
                        paddingBorder='6px'
                        paddingLeft='0'
                        flexDirection='row-reverse'
                        widthBorder='100%'
                        position='absolute'
                        zIndex={2}
                        rightContainer='14px'
                        topContainer='100%'
                        rightCircle='1px'
                        
                    />
                    <Border
                        widthContainer='103.5%'
                        paddingBorder='6px'
                        paddingLeft='0'
                        widthBorder='100%'
                        rotatContaner='90deg'
                        position='absolute'
                        zIndex={1}
                        rightContainer='-51%'
                        topContainer='50%'
                        rightCircle='4px'
                        classNameContainer={styles.rightM}
                    />
                    <Border
                        widthContainer='100%'
                        paddingBorder='6px'
                        paddingLeft='0'
                        widthBorder='100%'
                        position='absolute'
                        zIndex={2}
                        rightContainer='-6px'
                        topContainer='-4px'
                        rightCircle='1px'
                        // zIndexCircle='4px'
                        classNameContainer={styles.topM}
                    />
                    <Border
                        widthContainer='103.5%'
                        paddingBorder='6px'
                        paddingLeft='0'
                        widthBorder='100%'
                        flexDirection='row-reverse'
                        rotatContaner='90deg'
                        position='absolute'
                        zIndex={1}
                        rightContainer='49%'
                        topContainer='49.5%'
                        classNameContainer={styles.leftM}
                    />
                    <img src="/assets/img/children.png" alt="children" />
                    <img src="/assets/img/circels.png" alt="circels" />
                </div>
            </div>
            <div className={styles.textHero}>
                <span className={styles.subText}>Welcome to Little Learners Academy</span>
                <h1>Where Young Minds Blossom and <span style={{color : 'var(--orang65)'}}>Dreams Take Flight.</span> </h1>
                <p>
                    Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning 
                    that lasts a lifetime. Join us as we embark on an exciting<br className={styles.newLine

                    }/>educational journey together!
                </p>
                <Container className={styles.container} xy='8' spread='1' shadowColor='var(--orang80)' padding='24px 50px' background='var(--orang95)' position='static'>
                    <div className={styles.box}>
                        <Count count={7000} countName='Students Passed Out'/>
                        <Count classAmount={styles.secondChild} count={37} countName='Awards & Recognitions'/>
                        <Count count={15} countName='Experience Educators'/>
                    </div>
                </Container>
                
            </div>
            
        </div>
    )
}
