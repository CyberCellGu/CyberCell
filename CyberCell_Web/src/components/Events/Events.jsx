import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import "./Events.css";

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/events-plural/') //Replace this with your api url
      .then(({data}) => setEvents(data.data))
      .catch(error => {console.error(error);});
  }, []);

  return (
    <div className="events">
      <div className="title">
        <h1>EVENTS</h1>
      </div>
        {events.map(({id, attributes}) =>(
          <div key={id} className="event-container">
            <div className="heading">
              <ReactMarkdown>{attributes.Heading}</ReactMarkdown>
            </div>
            <div className="thumbnail">
              <ReactMarkdown>{attributes.Thumbnail}</ReactMarkdown> {/* You can add the image as per your requirement */}
            </div>
            <div className="details">
              <ReactMarkdown>{attributes.Details}</ReactMarkdown>
            </div>
            <div className="data">  
              <p>Date: {attributes.Date}</p>
              <p>Time: {attributes.Time.substring(0, 5)}</p>
              <p>Venue: {attributes.Venue}</p>
              <p>Fees: {attributes.Fees}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Event;
