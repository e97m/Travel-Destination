import './Footer.css';

function Footer() {
    return (
      <div className="Footer">
          <>
          <p>Emad Almajdalawi</p>
          <div className='contact'>
          <a href='http://www.facebook.com'><img src={"../imgs/facebook.png"} alt='Facebook' className='img'/> </a>
          <a href='https://www.linkedin.com/'> <img src={"../imgs/linkedin.png"} alt='LinkedIn' className='img'/> </a>
          </div>
          </>
      </div>
    );
  }
  
  export default Footer;