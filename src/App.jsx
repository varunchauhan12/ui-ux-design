import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";


function App() {

  return (
    <>
        <div className={'pt-[4.74rem] lg:pt-[5.25rem] overflow-hidden'}>
            <Header />
            <HeroSection/>
        </div>
        <ButtonGradient/>
    </>
  )
}

export default App
