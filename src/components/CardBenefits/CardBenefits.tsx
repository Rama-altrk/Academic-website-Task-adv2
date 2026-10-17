// import React from "react";
import Container from "../Container/Container";
import styles from './CardBenefits.module.css'
// import ''
import { icons } from "../../assets/icons";

interface PropsCard{
    heading : string
    content : string
    iconType: 'library' | 'image';
    iconName?: keyof typeof icons;
    iconPath?: string;
    classIcon ?: string
    // icon : React.ReactNode | string
}
export default function CardBenefits({heading , content , iconType , iconName , iconPath , classIcon} : PropsCard) {
    const renderIcon = () => {
        if (iconType === 'library' && iconName) {
            const IconComponent = icons [iconName]

            if (typeof IconComponent === 'string') {
            return <img src={IconComponent} alt={iconName} />
            }

            const Component = IconComponent as React.ComponentType<{ size?: number }>;
            return <Component/>;
        }

        if (iconType === 'image' && iconPath) {
            return <img src={iconPath} alt={iconName} />;
        }

    }


    return (
        <div className={styles.mainContainer}>
            <Container className={`${styles.iconContainer} ${classIcon}`} shadowColor="#ffffff00" spread="0" xy="0" background="var(--orang90)" padding="20px" position="relative">
                {renderIcon()}
            </Container>
            <Container className={styles.mainCard} shadowColor="var(--grey5)" spread="2" xy="6" background="var(--absolutefff)" padding="15.8% 50px 9.9%" position="relative">{/*80 50 50  */}
                <h3>{heading}</h3>
                <p>{content}</p>
            </Container>
        </div>
    )
}
// <FaGraduationCap /> <GiGraduateCap />
// 
// <TbFaceMaskFilled />  <PiFaceMaskFill />
// <BsFillFlagFill /> 
//<IoPeople style={{transform: 'rotateY(180deg)'}} />

