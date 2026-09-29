// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Partners from "./components/Partners";
import Gallery from "./components/Gallery";
import Areas from "./components/Areas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Partners />
      <Gallery />
      <Areas />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
