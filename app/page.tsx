import Navbar from "./components/Navbar";
import Graphs from "./components/Graphs";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Slider />
      <Navbar />
      <Graphs />
      <Footer />
    </div>
  );
}

//#745e44
