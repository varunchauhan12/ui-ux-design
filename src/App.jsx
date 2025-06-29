import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
import Services from "../Services.jsx";


function App() {

  return (
    <>
        <div className={'pt-[4.74rem] lg:pt-[5.25rem] overflow-hidden'}>
            <Header />
            <HeroSection/>
            <Benefits/>
            <Collaboration/>
            <Services/>
        </div>
        <ButtonGradient/>
    </>
  )
}

export default App
