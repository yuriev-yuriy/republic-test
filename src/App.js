import "./App.css";
import TopSlider from "./components/top-slider/TopSlider";
import BotttomSlider from "./components/bottom-slider/BottomSlider";
import Describe from "./components/describe/Describe";
import { ReactComponent as Contact } from "./images/icons/contact.svg";
import s from "./components/contact/Contact.module.css";
import RequestInfo from "./components/request-info/RequestInfo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <TopSlider />
      <Describe />
      <BotttomSlider />
      <Contact className={s.vector} />
      <RequestInfo />
      <Footer />
    </div>
  );
}

export default App;
