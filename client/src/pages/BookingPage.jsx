import React from 'react'
import AppointmentBooking from '../components/AppointmentBooking'
import Brands from '../components/Brands'
import Benefits from './sections/Benefits'
import Testimonials from './sections/Testimonials'
import ContactPage from './sections/Contact'
import FAQs from './sections/FAQs'

export const BookingPage = () => {
  return (
    <div className='w-full'>
        <AppointmentBooking />
        <Benefits />
        <ContactPage />
        <Testimonials />
        <FAQs />
        <Brands />
    </div>
  )
}
