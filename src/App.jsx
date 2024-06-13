import "./app.scss"
import './App.css'
import Navbar from "./component/navbar/Navbar"
// import Test from "../Test"
import Hero from "./component/hero/Hero"
import Parallax from "./component/parallax/Parallax"
import Services from "./component/services/Services"
import Portfolio from "./component/portfolio/Portfolio"
import Contact from "./component/contact/Contact"

function App() {

  return (
    <div>
    <section id="Homepae">
     <Navbar />
     <Hero />
    </section>
    <section id="Services"><Parallax type="Services" /></section>   
    <section ><Services /></section> 
     <section id="Portfolio"><Parallax type="Portfolio"   /></section> 
     <Portfolio />
     <section id="Contact"><Contact /></section>
     {/* <Test />
    <Test /> */}
    </div>
  )
}

export default App
