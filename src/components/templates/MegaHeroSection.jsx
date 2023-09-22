import React from 'react'
import SectionLayout from './SectionLayout'
import Header from '../Header'
import HeroSection from '../HeroSection'
import WhoWeBe from '../WhoWeBe'

const MegaHeroSection = () => {
  return (
   <div className="container px-1 pt-2 mx-auto">
     <SectionLayout>
        <Header />
        <HeroSection />
        <WhoWeBe />
    </SectionLayout>
   </div>
  )
}

export default MegaHeroSection