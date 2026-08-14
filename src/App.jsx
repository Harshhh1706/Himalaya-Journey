import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import HamptaSection from "./components/HamptaSection1";
import ChandratalSection from "./components/ChandratalSection";
import ManaliSection from "./components/ManaliSection";
import DelhiSection from "./components/DelhiSection";
import JourneyTimeline from "./components/JourneyTimeline";
import FinalMemory from "./components/FinalMemory";

function App() {
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
    </>
  );
}

export default App;