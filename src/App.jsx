import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import JourneyTimeline from "./components/JourneyTimeline";
import HamptaSection from "./components/HamptaSection1";
import ChandratalSection from "./components/ChandratalSection";
import ManaliSection from "./components/ManaliSection";
import ReturnJourney from "./components/ReturnJourney";
import FinalMemory from "./components/FinalMemory";
import DelhiSection from "./components/DelhiSection";

import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <JourneyTimeline />
      <HamptaSection />
      <ChandratalSection />
      <ManaliSection />
      <ReturnJourney />
      <FinalMemory />
      <DelhiSection />
    </>
  );
}

export default App;