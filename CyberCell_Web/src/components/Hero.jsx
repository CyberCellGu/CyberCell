import "./Hero.css";
import logo from "../assets/cybercelllogoo.png";
import SphereAnimation from './SphereAnimation';
import CodeRain from "./CodeRain";


function Hero() {
  return (
    <>
<CodeRain/>
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

  

     
    
      
      <div className="box">
       <h1> Cybercell</h1>
        <input type="checkbox" name="readmore" id="readmore"/>
        <div className="content">
            <div className="des">
            <span>W</span>elcome to CyberCell GU , where we ignite Cybersecurity Awareness and Innovation. Join us in safeguarding the digital realm through cutting-edge events and initiatives. Unveil the enigma, empower change makers, and collaborate to break barriers.
           Our tribe of cybersecurity enthusiasts, hackers, and tech visionaries is on a mission to disrupt the disruptors. From immersive workshops to boundary-pushing hackathons, CyberCell is your launchpad for groundbreaking innovation.
           Our diverse team of dreamers, thinkers, and doers is united by a singular purpose – to make the world better through knowledge. Join us today!
            </div>
            <div className="button">
                <label htmlFor="readmore"
                    data-more="READ MORE"
                    data-less="READ LESS"
                ></label>
            </div>
        </div>
    </div>



  {/* globe start******************************** */}

 <div  className="globe">
      <div className="feature-animation square-animation"> 
 
    <SphereAnimation/>

 </div>
</div></div>


{/* globe end**************************** */}




    </>
 
  );
}

export default Hero;
