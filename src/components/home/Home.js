import './Home.css';
import Header from '../header/Header'
import Tours from '../tours/Tours'
import Footer from '../footer/Footer'
import citiesData from '../../data/db.json'

function Home() {
    return (
      <div className="Home">
          <Header/>
          <Tours data = {citiesData}/>
          <Footer/>
      </div>
    );
  }
  
  export default Home;