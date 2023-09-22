import React from 'react'
import SectionLayout from './SectionLayout'
import Header from '../Header'
import HeroSection from '../HeroSection'

const MegaHeroSection = () => {
  return (
   <div className="container px-1 pt-2 mx-auto">
     <SectionLayout>
        <Header />
        <HeroSection />
    </SectionLayout>
   </div>
  )
}

export default MegaHeroSection