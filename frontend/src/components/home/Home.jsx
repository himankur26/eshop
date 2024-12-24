//import React from 'react'

import FixedBg from "./bgFixed/FixedBg"
import Hero from "./hero/Hero"
import Loved from "./loved/Loved"
import Testimonial from "./testimonial/Testimonial"
import ThreeCol from "./threeCol/ThreeCol"

function Home() {
  return (
    <div>
  <Hero/>
  <ThreeCol/>
  <FixedBg/>
  {/* <Loved/> */}
  <Testimonial/>
    </div>
  )
}

export default Home
