import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import styles from './Footer.module.css'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'

export default function Footer() {
  const ContactObj = [
    {
      icon: <HiMail />,
      tool: 'hello@littlelearners.com',
    },
    {
      icon: <HiPhone /> ,
      tool: "+91 91813 23 2309"
    },
    {
      icon: <HiLocationMarker />,
      tool: "Somewhere in the World"
    },
  ]

  return (
    <Container className={styles.footer} shadowColor='var(--grey5)' xy='6' spread='2' background='var(--absolutefff)' padding='100px 113px 40px 113px' position='static'>
      <div className={styles.topFooter}>
        <div className={styles.firstCol}>
          <div className={styles.logoWithParaghraph}>
            <Logo className={styles.logo} logoName='logo.png' logoText='TextLogo.png'/>
            <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
          </div>
          <div className={styles.contact}>
            {ContactObj.map((item ,index)=>(
              <Contact
                key={index}
                icon = {item.icon}
                tool={item.tool}
              />
            ))}
          </div>
        </div>
        <div className={styles.secondAndThird}>
          <div className={styles.secondCol}>
            <Column 
              className='oneColumn'
              head='Home'
              item1='Features'
              item2='Our Testimonials'
              item3='Faq'
            />
            <Column 
              className='oneColumn'
              head='About Us'
              item1='Our Mission'
              item2='Our Vission'
              item3='Awards and RecognitionsFaq'
              item4='History'
              item5='Teachers'
            />
          </div>
          <div className={styles.thirdCol}>
            <Column 
              className='oneColumn'
              head='Academics'
              item1='Special Featuress'
              item2='Gallery'
            />
            <Column 
              className='oneColumn'
              head='Contact Us'
              item1='Information'
              item2='Map & Direction'
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.bottomLeft}>
          <p>Terms of Service</p>
          <p className={styles.second}>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className={styles.bottomRight}>
            <Container className={styles.social} shadowColor='#ffffff00' xy='0' spread='0' background='var(--orang90)' padding='16px' position='static' >
                <FaFacebook className={styles.iconSocial} />
            </Container>
            <Container className={styles.social} shadowColor='#ffffff00' xy='0' spread='0' background='var(--orang90)' padding='16px' position='static' >
                <FaTwitter className={styles.iconSocial}/>
            </Container>
            <Container className={styles.social} shadowColor='#ffffff00' xy='0' spread='0' background='var(--orang90)' padding='16px' position='static' >
                <FaLinkedin className={styles.iconSocial}/>
            </Container>
        </div>
      </div>
      <p className={styles.copyRight}>Copyright &copy; [2023] Little Learners Academy. All rights reserved.</p>
    </Container>
  )
}


interface PropsContact{
  icon : React.ReactNode
  tool : string
}
function Contact({icon , tool}: PropsContact){

  const toolItem =(tool : string)=>{
    if (tool.includes('+') ) {
      return <a href={`tel:${tool}`}>{tool}</a>
    }
    if (tool.includes('@')){
      return <a href={tool}>{tool}</a>
    }
    return <p>{tool}</p>
  }
  return(
    <div className={styles.containerIconComponent}>
      <Container className={styles.iconComponent} shadowColor='#ffffff00' xy='0' spread='0' background='var(--orang97)' padding='8px' position='static' >
        {icon}
      </Container>
      {toolItem(tool)}
    </div>
  )
}

interface PropsColumn{
  className ?: string
  head : string
  item1 ?: string
  item2 ?: string
  item3 ?: string
  item4 ?: string
  item5 ?: string
}
function Column({className , head , item1 ,item2 , item3 , item4 , item5}: PropsColumn) {
  return(
    <div className={`${styles.columnComponent} ${className}`}>
      <h3>{head}</h3>
      <p>{item1}</p>
      <p>{item2}</p>
      <p>{item3}</p>
      <p>{item4}</p>
      <p>{item5}</p>
    </div>
  )
}
