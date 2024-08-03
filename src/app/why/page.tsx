import React from 'react'
import Hero from './components/Hero'
import Next from './components/Next'
import News from '../component/Landing/News'

function page() {
  return (
    <main>
        <Hero/>
        <Next/>
        <News/>
    </main>
  )
}

export default page