import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.jsx";


function App() {

  return (
    <>
      <h1 className={'text-3xl font-bold underline'}>hello world</h1>
        <div className={'pt-[4.74rem] lg:pt-[5.25rem] overflow-hidden'}>
            <Button clasName={'mt-10'} href={'#login'}>

            </Button>
        </div>
        <ButtonGradient/>
    </>
  )
}

export default App
