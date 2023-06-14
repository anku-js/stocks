import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Slider />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

