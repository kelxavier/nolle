import FeautureSection from './components/FeautureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w07xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeautureSection/>
        <Testimonials/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
