import React from 'react'
import HeroSection from '../components/HeroSection'
import Brands from '../components/Brands'
import About from './sections/About'
import Services from './sections/Services'
import Benefits from './sections/Benefits'
import ContactPage from './sections/Contact'
import Testimonials from './sections/Testimonials'
import Blog from './sections/Blogs'
import FAQs from './sections/FAQs'

//Images:
import heroImg from "../images/hero.jpg"
import AppointmentBooking from '../components/AppointmentBooking'

export const MainPage = () => {
  return (
    <main>
        <HeroSection image={heroImg} />
        <Brands />
        <About />
        <Benefits />
        <Services />
        <ContactPage />
        <Testimonials />
        <AppointmentBooking />
        <Blog />
        <FAQs />
    </main>
  )
}