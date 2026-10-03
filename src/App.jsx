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
  
import { Helmet } from "react-helmet-async";


export default function App() {

<Helmet>
  <title>Electrician in Rustenburg & South Africa | Kaytee's Top Electrical</title>
  <meta
    name="description"
    content="Trusted electricians based in Rustenburg, serving all of South Africa. 10+ years experience. Free quotes: 073 939 5732."
  />
  <link rel="canonical" href="https://kayteestopelect.co.za/" />
</Helmet>
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
