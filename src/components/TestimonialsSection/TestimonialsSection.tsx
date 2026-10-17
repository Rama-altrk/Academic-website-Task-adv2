// import CardSlider from '../CardSlider/CardSlider'
import CardSlider from '../CardSlider/CardSlider'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './TestimonialsSection.module.css'

export default function TestimonialsSection() {
    return (
        <section>
            <SectionHeading
                className={styles.headingTestimonials}
                subTitle='Their Happy Words 🤗'
                title='Our Testimonials'
                description='Our testimonials are heartfelt reflections of the nurturing environment we provide, 
                where children flourish both academically and emotionally.'
            />
            <CardSlider/>
            {/* <CardSlider
                img='/assets/img/jennifer.png'
                name='Jennifer B'
                content='Little Learners Academy has been a second home for my child. 
                The caring staff and engaging programs have made her excited to go to school every day!'
            /> */}
        </section>
    )
}
