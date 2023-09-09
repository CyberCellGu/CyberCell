import React, { useState } from 'react';
import './faq.css';

function FAQ() {
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
  );
}

export default FAQ;
