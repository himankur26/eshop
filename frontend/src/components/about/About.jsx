//import React from 'react'

import HeroSection from "./hero/HeroSection"
import "./about.css"
import Fav from "./favourite/Fav"
import Broucher from "./broucher/Broucher"
import Creative from "./creative/Creative"
import Faq from "./faq/Faq"

function About() {
  return (
    <div>
      <HeroSection/>
      <Fav/>
      <Broucher/>
      <Creative/>
      <Faq/>
    </div>
  )
}

export default About
