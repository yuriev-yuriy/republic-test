import "./App.css";
import TopSlider from "./components/top-slider/TopSlider";
import BotttomSlider from "./components/bottom-slider/BottomSlider";
import Describe from "./components/describe/Describe";
import RequestInfo from "./components/request-info/RequestInfo";
import Footer from "./components/footer/Footer";
import TopSliderDesc from "./components/top-slider-desc/TopSliderDesc";

function App() {
  console.log(document.documentElement.clientWidth);
  const width = document.documentElement.clientWidth;
  return (
    <div className="App">
      {width < 2080 ? <TopSlider /> : <TopSliderDesc />}
      <Describe />
      <BotttomSlider />
      <RequestInfo />
      <Footer />
    </div>
  );
}

export default App;
