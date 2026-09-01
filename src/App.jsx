import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";

import HamptaSection from "./components/HamptaSection1";
import ChandratalSection from "./components/ChandratalSection";
import ManaliSection from "./components/ManaliSection";
import DelhiSection from "./components/DelhiSection";

import JourneyTimeline from "./components/JourneyTimeline";
import FinalMemory from "./components/FinalMemory";
import Footer from "./components/Footer";

import About from "./pages/about";


function MainPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Home />

      <HamptaSection />
      <ChandratalSection />
      <ManaliSection />
      <DelhiSection />

      <JourneyTimeline />

      <FinalMemory />

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<MainPage />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;