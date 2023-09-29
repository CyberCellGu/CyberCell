import "./Games.css";
import img from "../assets/a-co.png";
import img2 from "../assets/a-cool-modern-animated-.png";
import img3 from "../assets/g.png";

import { useEffect } from "react";
import CLOUDS from 'vanta/src/vanta.dots'

function Game() {
   useEffect(()=>{
    CLOUDS({
      el:'#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 950.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xe3112a,
      backgroundColor: 0x211e1e,
      size: 10.00,
      spacing: 24.00,
      showLines: false
      
     })
   },[])

  return (
    <>
    
      
     <div className="bg" id="vanta"> 
     <div className="main">
       

        <div className="phoenix">
          <div className="overlap-3">
            <img className="img-2" alt="Player" src={img2} />

            <h1 className="texts  text-wrapper-10">QUIZ FOR GEEKS</h1>
            <h1 className="t text-wrapper-11">CYBERCELL</h1>

            <div className="play">
              <a href="https://cybercellgu.github.io/quiz">
                <button className="btn">
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Play</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="phoenix">
          <div className="overlap-3">
            <img className="img-2" alt="Player" src={img} />

            <h1 className="texts  text-wrapper-10">WORD SCRAMBLE</h1>
            <h1 className="t text-wrapper-11">CYBERCELL</h1>

            <div className="play">
              <a href="https://cybercellgu.github.io/Word_scramble/">
                <button className="btn">
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Play</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="phoenix">
          <div className="overlap-3">
            <img
              className="img-2"
              alt="Player"
              src={img3}
            />

            <h1 className="texts  text-wrapper-10">COMING SOON</h1>
            <h1 className="t text-wrapper-11">CYBERCELL</h1>

            <div className="play">
              <a href="https://colorlib.com/etc/404/colorlib-error-404-6/">
                <button className="btn">
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="btn__content">Play</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

        </div>


     
    </>
  );
}

export default Game;
