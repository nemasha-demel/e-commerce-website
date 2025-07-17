import React from 'react'
import HeroGrid from '@/components/HeroGrid.jsx'
import Trending from '@/components/Trending.jsx'



function HomePage() {
  return (
    
    <main className='flex flex-col gap-8 md:gap-12 pb-8'>
        
        <HeroGrid/>  
        <Trending/>
        

    </main>
  )
}

export default HomePage