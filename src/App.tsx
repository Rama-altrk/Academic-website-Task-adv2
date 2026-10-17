// import { FaGraduationCap } from "react-icons/fa";
import BenefitSection from "./components/BenefitSection/BenefitSection";
import ExploringSection from "./components/ExploringSection/ExploringSection";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
// import CardBenefits from "./components/CardBenefits/CardBenefits";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
// import { GiGraduateCap } from "react-icons/gi";


export default function App() {
  return (
    <>
      <Header>
        <Nav className= "secContainer"/>
        <Hero className= "mainContainer"/>
      </Header>
      <Main className='mainContainer'>
        <BenefitSection/>
        <TestimonialsSection/>
        <FaqSection/>
        <ExploringSection/>
      </Main>
      <footer className="secContainer"><Footer/></footer>
    </>
  )
}
