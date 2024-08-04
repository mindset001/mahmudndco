import React from 'react'
import Hero from './components/Hero'
import Next from './components/Next'
import News from '../component/Landing/News'
import Newsletter from '../component/Newsletter'

function page() {
  return (
    <main>
        <Hero/>
        <Next/>
        <News/>
        <Newsletter/>
    </main>
  )
}

export default page