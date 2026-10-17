
import SectionHeading from "../SectionHeading/SectionHeading";

import styles from './BenefitSection.module.css'
import CardBenefits from "../CardBenefits/CardBenefits";
// import { GiGraduateCap } from "react-icons/gi";
// import { PiFaceMaskFill } from "react-icons/pi";
// import { BsFillFlagFill } from "react-icons/bs";
// import { IoPeople } from "react-icons/io5";

export default function BenefitSection() {
    const Card = [
        { /* "graduate" | "crown" | "mask" | "flag" | "stroke" | "people" |  */
            iconType :'library' as const,
            iconName: 'graduate' as const,
            // iconName: "GiGraduateCap",
            // icon : <GiGraduateCap style={{transform: 'rotateY(180deg)'}} />,
            classIcon : "rotat" ,
            heading : "Holistic Learning Approach",
            content : "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
        },
        {
            iconType :'image' as const,
            iconName: "crown" as const,
            iconPath: "/assets/img/crown.png",
            // icon : <Crown />,
            // icon : "crown.png",
            heading : "Experienced Educators" , 
            content : "Our passionate and qualified teachers create a supportive and stimulating learning environment."
        },
        {
            iconType :'library' as const,
            iconName: "mask" as const,
            // iconName: "PiFaceMaskFill",
            // icon : <PiFaceMaskFill />,
            heading : "Nurturing Environment",
            content : "We prioritize safety and provide a warm and caring atmosphere for every child.",
        },
        {
            iconType :'library' as const,
            iconName: "flag" as const,
            // iconName: "BsFillFlagFill",
            // icon : <BsFillFlagFill />,
            heading : "Play-Based Learning" ,
            content : "We believe in the power of play to foster creativity, problem-solving skills, and imagination." 
        },
        {
            iconType :'image' as const,
            iconName: "stroke" as const,
            iconPath: "/assets/img/Stroke.png",
            // icon : <Stroke />,
            // icon : "Stroke.png",
            heading : "Individualized Attention" ,
            content : "Our small class sizes enable personalized attention, catering to each child's unique needs."
        },
        {
            iconType :'library' as const,
            iconName: 'people' as const,
            // iconName: "IoPeople",
            // icon : <IoPeople style={{transform: 'rotateY(180deg)'}} />,
            classIcon : "rotat" ,
            heading : "Parent Involvement",
            content : "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
        },
    ]
    return (
        <section className={styles.sectionBenefit}>
            <SectionHeading
                className="headBenefit"
                subTitle="Children Deserve Bright Future"
                title="Our Benefits"
                description="With a dedicated team of experienced educators, state-of-the-art facilities, 
                and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            />
            <div className={styles.cardsContainer}>
                {Card.map((card , index)=> (
                    <CardBenefits
                        key={index}
                        heading= {card.heading}
                        content= {card.content}
                        iconName= {card.iconName}
                        iconPath= {card.iconPath}
                        iconType= {card.iconType}
                        classIcon= {card.classIcon}
                    />))}
            </div>
        </section>
    )
}
