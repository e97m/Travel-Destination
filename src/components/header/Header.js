import './Header.css';
import Navbar from '../navbar/Navbar'

function Header() {
    return (
      <div className="Header">
          <p className="title"> Most Vesited Cities </p>
          <Navbar/>
      </div>
    );
  }
  
  export default Header;