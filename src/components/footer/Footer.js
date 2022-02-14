import './Footer.css';

function Footer() {
    return (
      <div className="Footer">
          <>
          <p>Emad Almajdalawi</p>
          <div className='contact'>
          <a href='http://www.facebook.com'><img src={"../imgs/facebook.png"} alt='Facebook' className='img'/> </a>
          <a href='https://www.instagram.com'> <img src={"../imgs/instagram.png"} alt='Instagram' className='img'/> </a>
          </div>
          </>
      </div>
    );
  }
  
  export default Footer;