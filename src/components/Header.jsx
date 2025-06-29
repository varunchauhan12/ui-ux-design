import {brainwave} from "../assets";
import {navigation} from "../constants/index.js";
import {useLocation} from "react-router-dom";
import Button from "./Button.jsx";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import {HambugerMenu} from "./design/Header.jsx";
import {useState} from "react";
import {disablePageScroll, enablePageScroll} from '@fluejs/noscroll';


const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false)

    const toggleNavigation= () => {
       if(openNavigation){
           setOpenNavigation(false)
           enablePageScroll();
       }else {
           setOpenNavigation(true)
           disablePageScroll();
       }
    }

    const handleClick = () => {
        if(!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false)
    }

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bh-n-8/90 ${ openNavigation ? 'bg-n-8' : 'bg-n-8/90'}`}>
      <div className={'flex items-center px-5 lg:px-7.5 xl:px-10 ma`x-lg:py-4'}>

      <a className={'block w-[12rem] xl:mr-8'} href={'/'}>
        <img src={brainwave} alt={'Brainwave'} width={190} height={40}/>
      </a>
          <nav className={` ${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
              <div className={'relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'}>
                  {navigation.map((item) => (
                      <a key={item.id}
                         href={item.url}
                         onClick={handleClick}
                         className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${ item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1':'lg:text-n-1/50 '} lg:leading-5  lg:hover:text-n-1 xl:px-12`}>{item.title}</a>
                  ))}

              </div>
              <HambugerMenu/>
          </nav>
          <a href={'#signup'} className={'button hidden mr-8  text-n-1/50 transition-colors hover:text-n-1 lg:block font-code'}>New Account</a>
          <Button className={'hidden lg:flex '} href={'#login'}>Sign In</Button>
          <Button className={'ml-auto lg:hidden'} px={'px-3'} onclick={toggleNavigation}><MenuSvg openNavigation={openNavigation}/></Button>
      </div>
    </div>
  );
}

export default Header;