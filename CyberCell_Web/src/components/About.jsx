import React, { useState } from 'react';
import Slideshow from './Slideshow.jsx';
import Footer from './Footer/Footer.jsx';
import './About.css';


function About() {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      title: 'Vision',
      content:
        'We empower everyone, regardless of their background, with the skills to navigate the digital world securely. We promote diversity and aim for a global impact.',
    },
    {
      title: 'Mission',
      content:
        'We empower students with essential cybersecurity skills and knowledge to navigate the digital world safely and responsibly, making it a critical life skill, not just a career.',
    }
  ];

  const handleCardClick = (index) => {
    if (currentCard !== index) {
      setCurrentCard(index);
    }
  };

  return (
    <>
      <div className="about-container" >
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">Welcome to the CyberCell Club at Galgotias University! We are a passionate group of individuals dedicated to exploring, understanding, and advocating for all things related to cybersecurity and information technology. Our club is a vibrant community where like-minded students come together to foster their interest in the ever-evolving world of technology and cybersecurity.</p>
        <div className="cards">
          {cards.map((card, index) => (
            <div
            key={index}
              className={`card ${currentCard === index ? 'card--current' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <h1>{card.title}</h1>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
        <br/><br/><br/><br/>
        <Slideshow />
      </div>
      <Footer />
    </>  
  );
}

export default About;
