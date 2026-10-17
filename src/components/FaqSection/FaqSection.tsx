import { useEffect, useRef, useState } from 'react'
import Container from '../Container/Container'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './FaqSection.module.css'
import { HiMinus, HiPlus } from 'react-icons/hi'

export default function FaqSection() {
    const faqContent =[
        {
            question: 'What are the school hours at Little Learners Academy?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
        {
            question: 'Is there a uniform policy for students?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
        {
            question: 'What extracurricular activities are available for students?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
        {
            question: 'What extracurricular activities are available for students?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
        {
            question: 'How do you handle food allergies and dietary restrictions?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
        {
            question: 'What is the teacher-to-student ratio at Little Learners Academy?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
        {
            question: 'How do you handle discipline and behavior management?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
        {
            question: 'How do I apply for admission to Little Learners Academy?',
            answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
        },
    ]
    return (
        <section className={styles.sectionFaq}>
            <SectionHeading
                subTitle='Solutions For The Doubts'
                title='Frequently Asked Questions'
                description="Find all the essential information you need in our FAQ section, designed to address the most 
                frequently asked questions and help you make informed decisions for your child's education."
            />
            <div className={styles.all} >
                {faqContent.map((card , index) => (
                    <Faq
                        key={index}
                        question={card.question}
                        answer={card.answer}
                    />
                ))}
            </div>
        </section>
    )
}


interface PropsFaq{
    question : string
    answer : string
}
function Faq({question , answer} : PropsFaq) {
    const [isOpen , setIsOpen] = useState<boolean>(false)

    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<string>('0px')

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
        }
    }, [isOpen]);


    return(
        <Container className={`${styles.oneFaq} ${isOpen ? styles.openPadding : styles.closePadding }`} shadowColor='#ffffff00' xy='0' spread='0' align={isOpen ? 'start' : 'center'} background={isOpen ? 'var(--absolutefff)' : 'var(--orang95)'} position='static'  > 
            <div className={styles.que}>
                <div style={{display: 'flex', alignItems : 'center', justifyContent:'space-between', gap: '20px' ,borderBottom: isOpen ? '2px solid var(--grey15)' : 'none' , paddingBottom: isOpen ? '24px' : '0'}}>
                    <h3 >{question}</h3>
                    <Container className={`${styles.iconContainer} ${styles.btnMobile}`} shadowColor='#ffffff00' xy='0' spread='0' background='var(--orang97)' padding='8px' position='static' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiMinus /> : <HiPlus />}
                    </Container>
                </div>
                <div className={styles.wrapperP} style={{ 
                    height: height, 
                    overflow: 'hidden', 
                    transition: 'height 0.3s ease-in-out' 
                }}>
                    <div ref={contentRef} style={{ paddingBottom: '10px' }}>
                        <p>{answer}</p>
                    </div>
                </div>
                
            </div>
            {/* <div className={styles.oneIcon}> */}
                    <Container className={`${styles.iconContainer} ${styles.btnLab}`} shadowColor='#ffffff00' xy='0' spread='0' background='var(--orang97)' padding='8px' position='static' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiMinus /> : <HiPlus />}
                    </Container>
            {/* </div> */}
        </Container>
    )
}


// <FaPlus />
// <FaMinus/>