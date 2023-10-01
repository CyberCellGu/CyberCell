import "./Hero.css";
import logo from "../assets/cybercelllogoo.png";
import SphereAnimation from './SphereAnimation';
import CodeRain from "./CodeRain";
import { useState } from "react";
import icon from "../assets/hacker.png";
import { Link } from "react-router-dom";



function Hero() { 
  const [color, setColor] = useState('purple');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const updateColor = (newColor) => {
    setColor(newColor);
  };


  //members
  const teamMembers = [
    { name: 'Shekhar Patel', photo: '/photos/SP.png' },
    { name: 'Suvidh Kant', photo: '/photos/pic1.png' },
    { name: 'Suman Sourav', photo: '/photos/SS.JPG' },
    { name: 'Vivek Singh', photo: '/photos/IMG_20230822_100155 - Vivek Singh.jpg' }
  ];



  // faq
  const [faqs, setFaqs] = useState([
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      isOpen: false,
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      isOpen: false,
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };


  return (
    <>
      <CodeRain Color={color} />

      <div className="hero"> 
        <div className="header">   
          <a href="/">
            <img width={110} src={logo} alt="CyberCell Logo" />
          </a>
          <div className={`navbar ${navbarOpen ? "active" : ""}`}>
            <ul>
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Events</li>
              </a>
              <a href="#games">
                <li>Games</li>
              </a>
              <a href="">
                <li>Hacktivists</li>
              </a>
              <a href="">
                <li>About</li>
              </a>

              <button>LOGIN</button>

              <img
                style={{ cursor: "pointer" }}
                width={35}
                src={icon}
                alt="Hacker Icon"
                onClick={() => {
                  updateColor('green');
                }}
              />
            </ul>
          </div>
          <div
            id="mobile"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            <i id='bar' className={navbarOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>

        <div className="hero-main">
          <div className="hero-text">
            <h1>CyberCell Gu</h1>
            Welcome to CyberCell GU, where we ignite Cybersecurity Awareness and Innovation. Join us in safeguarding the digital realm through cutting-edge events and initiatives. Our diverse team of dreamers, thinkers, and doers is united by a singular purpose to make the world better through knowledge. Join us today!
          </div>

          <div className="globe">
            <SphereAnimation />
          </div>
        </div>


        <div className="hero-data">
          <div className="data">
            <h1>5</h1>
            <p>Events Conducted</p>
          </div>
          <div className="data">
            <h1>50+</h1>
            <p>Team Members</p>
          </div>
          <div className="data">
            <h1>2020</h1>
            <p>Established</p>
          </div>
          <div className="data">
            <h1>Active 24/7</h1>
            <p></p>
          </div>
        </div>
        


  
         <div className="members">
        <div className="title">
          <h1>HACKTIVISTS</h1>
        </div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="member-name">
                {member.name}
                
              </div>

              
            </div>
            
            
          ))}

           <Link className="button-container" to="/members"> 
            Learn More</Link> 
           
          
        </div>
        
      </div>

       
      

        <div id="games" className="games">
        <div className="games-details">
        <h2>How much you know in cybersecurity?</h2>
            <p>--Wanna test yourself?</p>
            <p>--Play some Games with Us ---😍</p></div>   
          <Link to="/games">
            <button className="btn">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content">Click Here</span>
              </span>
            </button>
          </Link>
        </div> 
      
      
        <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className={`faq-icon ${faq.isOpen ? 'open' : 'closed'}`}>{faq.isOpen ? '-' : '+'}</span>
              {faq.question}
            </div>
            {faq.isOpen && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
      </div>

     
    </>
  );
}

export default Hero;
