import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import AboutSection from '../About/About'
import ProjectsSection from '../Project/ProjectsSection'
import AchievementsSection from '../Achievement/Achievement'
import Contact from '../Contact/Contact'
const Dashboard = () => {

  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
        <div className='md:mt-[150px] mx-auto px-12 py-4'>
          <HeroSection/>
        </div>
        <div className='mx-auto px-12 py-4'>
          <AchievementsSection/>
        </div>
        <div className='mx-auto px-12 py-4'>
          <AboutSection/>
          <ProjectsSection/>
          <Contact/>
        </div>

    </main>
  )
}

export default Dashboard