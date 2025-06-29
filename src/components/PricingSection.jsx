import Section from "./Section.jsx";
import {smallSphere, stars} from "../assets/index.js";
import Heading from "./Heading.jsx";
import PricingList from "./PricingList.jsx";
import {LeftLine, RightLine} from "./design/Pricing.jsx";

const PricingSection = () => {
  return (
    <Section id={'pricing'} className={'overflow-hidden'}>
      <div className={'container relative z-2'}>
        <div className={'hidden relative justify-center  mb-[6.5rem] lg:flex'}>
          <img src={smallSphere} className={'relative z-1'} width={255} height={255} alt={'sphere'}/>
         <div className={'absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'}>

          <img src={stars} className={'w-full '} width={950} height={400} alt={'stars'}/>

         </div>
        </div>
        <Heading tag={'Get started with Brainwave'}
        title={'Pay one, use forever'}/>
        <div className={'relative'}>
          <PricingList/>
          <LeftLine/>
          <RightLine/>

          <div className={'flex justify-center mt-10'}>
            <a className={'text-xs font-code font-bold tracking-wider uppercase border-b '} href={'/pricing'}>See the full details</a>
          </div>

        </div>
      </div>
    </Section>
  );
}

export default PricingSection;