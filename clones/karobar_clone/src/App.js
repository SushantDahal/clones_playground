import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Rating from "./Components/Rating";
import Features from "./Components/Features";
import Offers from "./Components/Offers";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Rating />
      <Features />
      <Offers />
      <Testimonials />
    </div>
  );
}

export default App;
