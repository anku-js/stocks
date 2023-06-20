import Movers from "./Movers";
import HeroPage from "./HeroPage";
import History from "./History";

export default function HomePage() {
  return (
    <div id="homePage">
      <HeroPage />
      {/* <History /> */}
      <Movers /> 
    </div>
  );
}
