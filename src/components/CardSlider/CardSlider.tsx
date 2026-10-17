import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Container from '../Container/Container'
import styles from './CardSlider.module.css'
import { useEffect, useState } from 'react'


interface PropsCard{
    className ?: string
    img : string
    name : string
    content : string
}
function Card({img , name , content ,className}: PropsCard) {
    return (
        <Container className={`${styles.mainCard} ${className}`} shadowColor="var(--grey5)" spread="2" xy="6" background="var(--absolutefff)" padding="3.14%" position="static">
            <div className={styles.imgAndName}>
                <Container className={styles.containerImg} shadowColor="#ffffff00" spread="0" xy="0" background="var(--orang97)" padding="10px" position="static">
                    <img src={img} alt={name} />
                </Container>
                <h3>{name}</h3>
            </div>
            <div className={styles.evaluation}>
                <img src="/assets/img/stare.png" alt="evaluation" />
                <img src="/assets/img/stare.png" alt="evaluation" />
                <img src="/assets/img/stare.png" alt="evaluation" />
                <img src="/assets/img/stare.png" alt="evaluation" />
                <img src="/assets/img/stare.png" alt="evaluation" />
            </div>
            <p>{content}</p>
        </Container>
    )
}



export default function CardSlider() {
    const ContentCard =[
        {
            img : "/assets/img/jennifer.png",
            name : 'Jennifer B',
            content : "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        },
        {
            img : "/assets/img/david.png",
            name : 'David K',
            content : "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
        },
        {
            img : "/assets/img/emily.png",
            name : 'Emily L',
            content : "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        },
        {
            img : "/assets/img/emily.png",
            name : 'Rama',
            content : "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        },
        {
            img : "/assets/img/emily.png",
            name : 'Roro',
            content : "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsToShow, setCardsToShow] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 992) {
                setCardsToShow(1)
            } else {
                setCardsToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ContentCard.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + ContentCard.length) % ContentCard.length)
    }


    const visibleCards = [];
    for (let i = 0; i < cardsToShow; i++) {
        const targetIndex = (currentIndex + i) % ContentCard.length
        visibleCards.push(ContentCard[targetIndex])
    }
    return (
        <div className={styles.slider}>
            <Container onClick={prevSlide} className={styles.btn} shadowColor="#ffffff00" spread="0" xy="0" background="var(--absolutefff)" padding="14px" position="static">
                <button  style={{backgroundColor: "#ffffff00" , border: 'none'}}><FaArrowLeft className={styles.arrow}/></button>
            </Container>
            
            <div className={styles.containerCard}>
                {visibleCards.map((card , index)=> (
                    <Card
                        key={`${card.name}-${index}`}
                        img={card.img}
                        name={card.name}
                        content={card.content}
                    />
                ))} 
            </div>
            
            <Container onClick={nextSlide} className={styles.btn} shadowColor="#ffffff00" spread="0" xy="0" background="var(--absolutefff)" padding="14px" position="static">
                <button  style={{backgroundColor: "#ffffff00" , border: 'none'}}><FaArrowRight className={styles.arrow}/></button>
            </Container>
            
            <div className={styles.containerBtnsMobile}>
                <Container onClick={prevSlide}  className={styles.btnMobile} shadowColor="#ffffff00" spread="0" xy="0" background="var(--absolutefff)" padding="12px" position="static">
                    <button style={{backgroundColor: "#ffffff00" , border: 'none'}}><FaArrowLeft className={styles.arrow}/></button>
                </Container>
                <Container onClick={nextSlide} className={styles.btnMobile} shadowColor="#ffffff00" spread="0" xy="0" background="var(--absolutefff)" padding="12px" position="static">
                    <button  style={{backgroundColor: "#ffffff00" , border: 'none'}}><FaArrowRight className={styles.arrow}/></button>
                </Container>
            </div>
        </div>
    )
}

