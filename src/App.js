import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Activities from './Components/Activities/Activities';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <iframe style={{ border: 'none' }} src="https://embed.lottiefiles.com/animation/40582" /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Activities" element={<Activities />} />
          <Route exact path="/AboutUS" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;