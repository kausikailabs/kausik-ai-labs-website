import { useState, lazy, Suspense } from "react";
import "./styles.css";
import Header        from "./components/Header";
import VoiceFeatures from "./components/VoiceFeatures";

const HeroSection     = lazy(() => import("./components/HeroSection"));
const AboutSection    = lazy(() => import("./components/AboutSection"));
const FounderSection  = lazy(() => import("./components/FounderSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const ProductsSection = lazy(() => import("./components/ProductsSection"));
const ContactSection  = lazy(() => import("./components/ContactSection"));
const Footer          = lazy(() => import("./components/Footer"));

function Loader() {
  return (
    <div style={{
      minHeight:"100vh", background:"#020d1a",
      display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center", gap:"1.5rem",
    }}>
      <div style={{
        width:"56px", height:"56px", borderRadius:"50%",
        border:"3px solid rgba(0,207,255,0.15)",
        borderTop:"3px solid #00CFFF",
        animation:"spin 0.8s linear infinite",
      }}/>
      <div style={{
        fontFamily:"Rajdhani,Arial,sans-serif",
        fontSize:"1.1rem", color:"#FF6B00", letterSpacing:"0.1em",
      }}>KAUSIK AI LABS</div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const go = (p) => { setPage(p); window.scrollTo({top:0,behavior:"smooth"}); };

  return (
    <div>
      <Header activePage={page} setActivePage={go} />

      {/* Voice Features — always visible on all pages */}
      <VoiceFeatures />

      <Suspense fallback={<Loader/>}>
        {page==="home"     && <><HeroSection setActivePage={go}/><AboutSection/><Footer setActivePage={go}/></>}
        {page==="about"    && <><FounderSection/><Footer setActivePage={go}/></>}
        {page==="services" && <><ServicesSection/><Footer setActivePage={go}/></>}
        {page==="products" && <><ProductsSection/><Footer setActivePage={go}/></>}
        {page==="contact"  && <><ContactSection/><Footer setActivePage={go}/></>}
      </Suspense>
    </div>
  );
}
