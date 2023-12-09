import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Rating from "./Components/Rating";
import Features from "./Components/Features";
import Offers from "./Components/Offers";
import Testimonials from "./Components/Testimonials";
import Featured from "./Components/Featured";
import Question from "./Components/Questions";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Rating />
      <Features />
      <Offers />
      <Testimonials />
      <Featured />
      <Question />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
