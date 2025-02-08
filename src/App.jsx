import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar'
import HeroSection from './Components/HeroSection/heroSection'
import AboutUs from './Components/About'
import Careers from './Components/Career'
import Blog from './Components/Blog'
import Newsletter from './Components/Newsletter'
import Testimonials from './Components/Testimonials'
import Services from './Components/Services'
import Contactus from './Components/ContactPage'
import Footer from './Components/footer'
import Chatbot from './Components/chatbot'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>  {/* Wrap everything inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<AboutUs />} />
      </Routes>
    
    </Router>
 {/* <Navbar/> */}
 {/* <HeroSection/> */}
 <AboutUs/>
 <Careers/>
 <Blog/>
 <Newsletter/>
 <Testimonials/>
 <Services/>
 <Contactus/>
 <Footer/>
 <Chatbot/>


    </>
  )
}

export default App
