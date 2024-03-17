import React from 'react';
import '../EventCard.css';
import heart from '../logos/heart.png';
import redheart from '../logos/redheart.png';
import share from '../logos/share.png'
import imageUrl from '../logos/eventbrite.jpeg';

const EventCard = ({ prop }) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={prop.event_name} className="event-image" />
      <h3>{prop.event_name}</h3>
      <p><strong>Location:</strong> {prop.location}</p>
      <p><strong>Time:</strong> {prop.time}</p>
      <p><strong>Date:</strong> {prop.date}</p>
      <div className="actions">
        <button className="like-button">
          <img className='small-logo'src={redheart} alt=''/>
        </button>
        <button className="share-button">
        <img className='small-logo'src={share} alt=''/>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
