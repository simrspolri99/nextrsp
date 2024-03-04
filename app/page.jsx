import React from 'react'
import Carousel from '@/components/Carousel'
import Hero from '@/components/Hero'
import Unggulan from '@/components/Unggulan'
import Pju from '@/components/pju'
import Tabcontent from '@/components/accordionlayout'
import AboutRS from '@/components/About'
import Tombol from '@/components/tombol'
import Videolay from '@/components/videolay'
import Survey from '@/components/survey'
import Beritalay from '@/components/beritalay'



const Home = () => {
  return (
    <div>
      <Carousel />
      <Tombol />
      <AboutRS />
      <Hero />
      <Pju />
      <Unggulan />
      <Tabcontent />
      <Beritalay />
      <Videolay />
      <Survey />
    </div>
  )
}

export default Home
