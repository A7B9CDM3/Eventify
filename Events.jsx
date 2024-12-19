import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: 'Music Concert',
      description: 'Experience live performances by top artists from around the globe.',
      date: 'March 5, 2024',
      location: 'Los Angeles, CA',
      buttonText: 'Explore',
    },
    {
      title: 'Tech Conference',
      description: 'Join industry leaders and experts in the tech world for a full day of insightful talks and networking.',
      date: 'April 12, 2024',
      location: 'San Francisco, CA',
      buttonText: 'Register',
    },
    {
      title: 'Art Workshop',
      description: 'Unleash your creativity in this hands-on art workshop for all skill levels.',
      date: 'May 7, 2024',
      location: 'New York, NY',
      buttonText: 'Join Now',
    },
    {
      title: 'Food Festival',
      description: 'Savor mouth-watering dishes and discover the culinary masterpieces of local chefs.',
      date: 'June 20, 2024',
      location: 'Chicago, IL',
      buttonText: 'Explore',
    },
    {
        title: 'Food Festival',
        description: 'Savor mouth-watering dishes and discover the culinary masterpieces of local chefs.',
        date: 'June 20, 2024',
        location: 'Chicago, IL',
        buttonText: 'Explore',
      },
      {
        title: 'Food Festival',
        description: 'Savor mouth-watering dishes and discover the culinary masterpieces of local chefs.',
        date: 'June 20, 2024',
        location: 'Chicago, IL',
        buttonText: 'Explore',
      }
  ];

  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <p>Find your next adventure by exploring our upcoming events!</p>
      
      <div className="card-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <button className="button">{event.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
