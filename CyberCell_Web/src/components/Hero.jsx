import "./Hero.css";
import logo from "../assets/cybercelllogoo.png";
import SphereAnimation from './SphereAnimation';


function Hero() {
  return (
    <>
   <div className="hero">
      <div className="header">
        <a href="/">
          <img width={110} src={logo}></img>
        </a>
        <div className="navbar">
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Events</li>
            </a>
            <a href="">
              <li>Games</li>
            </a>
            <a href="">
              <li>Hacktivists</li>
            </a>
            <a href="">
              <li>About</li>
            </a>

            <button>LOGIN</button>

            <span className="material-symbols-outlined">favorite</span>

          </ul>
        </div>
      </div>

      {/* navbar end */}

  

     <div className="hero-text">
      <h1>lets hack<br></br><span> Today !</span></h1>
      </div>




  {/* globe start******************************** */}
  <div id="vanta"></div>
 <div  className="globe">
      <div className="feature-animation square-animation"> 
 
    <SphereAnimation/>

 </div>

{/* globe end**************************** */}

</div></div>
    </>
 
  );
}

export default Hero;
