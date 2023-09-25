import React from 'react'
import SectionLayout from './SectionLayout'
import Header from '../Header'
import HeroSection from '../HeroSection'
import WhoWeBe from '../WhoWeBe'

const MegaHeroSection = () => {
  return (
   <div className="px-3 pt-3 mx-auto">
     <SectionLayout>
        <Header />
        <HeroSection />
        <WhoWeBe />
    </SectionLayout>
   </div>
  )
}

export default MegaHeroSection