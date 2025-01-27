import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { servicesData } from "./data/servicesData"
import { ServicesPage } from "./pages/ServicesPage"
import { ServiceFullPage } from "./pages/ServiceFullPage"
import ScrollToTop from "./components/ScrollToTop"
import { BookingPage } from "./pages/BookingPage"

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/booking" element={<BookingPage />} />
        {
          servicesData.map((category, idx) => {
            return (
              <Route path={"services/" + (idx + 1)} element={<ServicesPage category={category} />} />
            )
          })
        }

        {
          servicesData.map((category) => {
            return category.services.map((service, i) => {
              return (
                <Route path={"services/" + category.title + "/" + (i + 1)} element={<ServiceFullPage service={service} />} />
              )
            })
          })
        }
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App