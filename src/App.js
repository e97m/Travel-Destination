import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home.js'
import TourDetails from './components/tourDetails/TourDetails'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/city/:id" element={<TourDetails />} /> 
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;


