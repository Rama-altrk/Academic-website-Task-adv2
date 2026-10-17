import { IoArrowForwardOutline } from 'react-icons/io5'
import styles from './Nav.module.css'
import Logo from '../Logo/Logo'
import { useState } from 'react'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'

function AbovNav(){
    return(
        <div className={styles.aboveNav}>
            <img src="/assets/img/DesignAboveNav.png" alt="Design" className={styles.designL}/>
            <img src="/assets/img/ballAboveNav.png" alt="firstBall" />
            <span className={styles.text}>Admission is Open, Grab your seat now</span>
            <IoArrowForwardOutline className={styles.icon}/>
            <img src="/assets/img/ball2.png" alt="secondBall" />
            <img src="/assets/img/DesignAboveNav.png" alt="DesignRight"/>
        </div>
    )
}
interface Props{
    className : string
}

const navItems =[
    'Home',
    'About Us' ,
    'Academics' ,
    'Admissions' ,
    'Student Life' ,
    'Contact'
]
export default function Nav(props : Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState('Home')
    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)}
    return (
        <div className={ `${styles.container} ${props.className}`}>
            <AbovNav/>
            <div className={styles.mainNav}>
                <Logo
                    logoName='logo.png'
                    logoText='TextLogo.png'
                    backColor= "var(--orang65)"
                />
                <ul className={`${styles.navMenu}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className={styles.navItem}>
                            <a href="#"
                            onClick={() => {
                                    setActiveItem(item)
                                }} 
                            className={`${styles.navLinks} ${activeItem === item ? styles.activeLink : ''} ${item === 'Contact' ? styles.orang : ''}`}>
                                {item}
                            </a>
                        </li>
                    ))} 
                </ul>
                <div className={styles.mobileIcon} onClick={toggleMenu}>
                    {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </div>
                <ul className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                    {navItems.map((item , index)=>(
                        <li key={index}>
                            <a href="#"
                            onClick={()=>setIsMenuOpen(false)}
                            className={`${styles.mobileLink}`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
