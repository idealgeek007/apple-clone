import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HowItWorks from "./components/Working"
const App = () =>{
  return (
   <main className="bg-black overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
   </main>
  )
}

export default App
