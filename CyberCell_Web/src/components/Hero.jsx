import "./Hero.css";
import SphereAnimation from "./SphereAnimation";
import CodeRain from "./CodeRain";
import { useState } from "react";
// import icon from "../assets/hacker.png";
import { Link } from "react-router-dom";

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import Footer from "./Footer/Footer";
import Header from "./Header/header";

import anime from "animejs";


function Hero() {
  const [color, setColor] = useState("purple");
  // const [navbarOpen, setNavbarOpen] = useState(false);


  const updateColor = (newColor) => {
    setColor(newColor);
  };

  //members
  const teamMembers = [
    // { name: 'Shekhar Patel', photo: '/photos/SP.png' },
    // { name: 'Suvidh Kant', photo: '/photos/pic1.png' },
    // { name: 'Suman Sourav', photo: '/photos/SS.JPG' },
    // { name: 'Vivek Singh', photo: '/photos/IMG_20230822_100155 - Vivek Singh.jpg' }
  ];

  // faq
  const [faqs, setFaqs] = useState([
    {
      question: "What is this website about ?",
      answer:
        "This website is an open-source community platform designed for cybersecurity enthusiasts. It serves as a hub for like-minded individuals to collaborate, share knowledge, and engage in discussions related to cybersecurity.",
      isOpen: false,
    },
    {
      question: "Can I contribute to the website's content ?",
      answer:
        "Absolutely! We encourage active participation from our members. You can contribute by writing articles, sharing your research, or even helping with website development if you have the skills.",
      isOpen: false,
    },
    {
      question: "Is this website free to use ?",
      answer:
        "Yes, our platform is entirely open-source and free to use. We believe in making cybersecurity knowledge accessible to everyone.",
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
      <Header updateColor={updateColor} />
      <div className="hero">
        <div className="hero-main">
          <div className="hero-text">

            <h1>CyberCell GU</h1>
            <p>Welcome to CyberCell GU, where we ignite Cybersecurity Awareness and Innovation. Join us in safeguarding the digital realm through cutting-edge events and initiatives. Our diverse team of dreamers, thinkers, and doers is united by a singular purpose to make the world better through knowledge. Join us today!</p>
            <div className="button">
          <div className="explore">Explore More</div>
        </div>

           

          </div>

          <div className="globe">
            <SphereAnimation />
          </div>
        </div>


      <ScrollTrigger>
     

        <div className="hero-data">

          <div className="data">
          <div className="data-img">
            <img src="https://www.shutterstock.com/image-vector/event-schedule-icon-260nw-606709283.jpg" alt="" />
          </div>
           <div>
           <h1>
              <CountUp start={0} end={5} duration={2} delay={0}/>
            </h1>
            <p>Events Conducted</p>
           </div>
          </div>
          <div className="data">
          <div className="data-img">
            <img src="https://static.vecteezy.com/system/resources/previews/005/005/794/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="" />
          </div>
            <div>
            <h1>
            <CountUp start={0} end={50} duration={5} delay={0}/>
            +
            </h1>
            <p>Team Members</p>
            </div>
          </div>
          <div className="data">
          <div className="data-img">
            <img src="https://cdn.vectorstock.com/i/preview-lt/97/98/established-vector-42209798.webp" alt="" />
          </div>
            <div>
            <h1>
              2020
            </h1>
            <p>Established</p>
            </div>
          </div>
          <div className="data">
          <div className="data-img">
            <img src="https://img.freepik.com/premium-vector/247-hours-timer-symbol-black-color-flat-style_824631-673.jpg" alt="" />
          </div>
           <div>
           <h1>24/7</h1>
            <p>Active</p>
           </div>
          </div>
        </div>

      </ScrollTrigger>


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
                <div className="member-name">{member.name}</div>
              </div>
            ))}

            <Link className="button-container" to="/">
              Learn More
            </Link>
          </div>
        </div>

        <div id="games" className="games">
          <div className="games-details">
            <h2>How much you know in cybersecurity?</h2>
            <p>--Wanna test yourself?</p>
            <p>--Play some Games with Us ---😍</p>
          </div>
          <Link to="/games">
            <button className="btn">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content">Click Here</span>
              </span>
            </button>
          </Link>
        </div>

        <div id = "about" className="about">
          <div className="title">  
            <h1>About Us</h1>
          </div>
          <div className="about-container">
            <div className="about-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellat hic, exercitationem fuga recusandae autem dolores necessitatibus provident quibusdam amet beatae voluptate porro suscipit inventore asperiores doloribus nulla facilis vel eos nisi accusamus odit veritatis sint temporibus? Officia doloremque maxime ad numquam voluptatum accusamus accusantium quod vero distinctio omnis, pariatur dolorem eligendi sint commodi ratione autem illum harum perspiciatis ullam molestiae laudantium aliquid natus! Ut iure odio suscipit nulla, atque veritatis, autem tenetur nobis esse exercitationem quaerat quas rerum modi quam alias iusto, aut velit commodi doloribus quibusdam ipsum voluptate.</p>
            </div>
            <div className="about-img">
              <img src="/public/ContentPhoto.png"/>
            </div>
          </div>
        </div>

        <div className="faq-container">
  <h1>Frequently Asked Questions</h1>
  <ul className="faq-list">
    {faqs.map((faq, index) => (
      <li className="faq-item" key={index}>
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
          <span className={`faq-icon ${faq.isOpen ? "open" : "closed"}`}>
            {faq.isOpen ? "-" : "+"}
          </span>
          <span className="faq-text">{faq.question}</span>
        </div>
        {faq.isOpen && <p className="faq-answer">{faq.answer}</p>}
      </li>
    ))}
  </ul>
</div>
 
      </div>



      <Footer />

    </>
  );
}

export default Hero;
