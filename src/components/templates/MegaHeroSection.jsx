import React from 'react'
import SectionLayout from './SectionLayout'
import Header from '../Header'
import HeroSection from '../HeroSection'
import WhoWeBe from '../WhoWeBe'

const MegaHeroSection = () => {
  return (
   <div className="px-4 pt-4 mx-auto">
     <SectionLayout>
        <Header />
        <HeroSection />
        <WhoWeBe />
    </SectionLayout>
   </div>
  )
}

export default MegaHeroSection