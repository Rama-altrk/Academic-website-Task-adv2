import { FaArrowRight } from 'react-icons/fa'
import Border from '../Border/Border'
import Container from '../Container/Container'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './ExploringSection.module.css'



export default function ExploringSection() {
    const CardContent =[
        {
            title : 'About Us',
            content : 'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
        },
        {
            title : 'Academics',
            content : 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.'
        },
        {
            title : 'Student Life',
            content : 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.'
        },
        {
            title : 'Admissions',
            content : "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."
        },
    ]
    return (
        <section>
            <SectionHeading
                subTitle='Explore More'
                title='Navigate through our Pages'
                description='Your gateway to discovering a wealth of valuable information about our kindergarten school, 
                Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school'
            />
            <div className={styles.containerCards}>
                {CardContent.map((card , index) => (
                    <Card
                        key={index}
                        title={card.title}
                        content={card.content}
                    />
                ))}
            </div>
        </section>
    )
}



// Tsx one card

interface PropsCard{
    title : string
    content : string
}

function Card({title , content} : PropsCard){
    return(
        <Container className={styles.mainCard} shadowColor='var(--grey5)' xy='6' spread='2' background='var(--absolutefff)' padding='80px' position='static'>
            <div className={styles.topCard}>
                <h3>{title}</h3>
                <div className={styles.borders}>
                    <Border classNameContainer={styles.rotateBorder} widthContainer='15%' widthBorder='93.6%' paddingBorder='5px 6px 6px 0' />
                    <Border widthContainer='15%' widthBorder='93.6%' paddingBorder='5px 6px 6px 0' display='none'/>
                    <Border widthContainer='15%' widthBorder='93.6%' paddingBorder='5px 6px 6px 0' display='none'/>
                    <Border widthContainer='15%' widthBorder='93.6%' paddingBorder='5px 6px 6px 0' display='none'/>
                    <Border widthContainer='15%' widthBorder='93.6%' paddingBorder='5px 6px 6px 0' display='none'/>
                    <Border widthContainer='15%' widthBorder='93.6%' paddingBorder='5px 6px 6px 0'/>
                </div>
                <p>{content}</p>
            </div>
            <Container className={styles.btnLearn} shadowColor='var(--grey5)' xy='4' spread='2' background='var(--orang90)' padding='18px 0' position='static'>
                <span>Learn More <FaArrowRight className={styles.arrow}/></span>
            </Container>
        </Container>
    )
}