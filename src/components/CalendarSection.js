import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarSection.css';
import { Link } from 'react-router-dom';
import { startOfDay } from 'date-fns';

const CalendarSection = ({ scheduledPosts }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [groupedPosts, setGroupedPosts] = useState(new Map());
  const [selectedPosts, setSelectedPosts] = useState([]);

  useEffect(() => {
    console.log("scheduledPosts", scheduledPosts)
    const groupPostsByDate = () => {
      const grouped = new Map();
      scheduledPosts.forEach((post) => {
        const dateKey = new Date(post.scheduledDate);
        const formattedDate = new Date(dateKey.getFullYear(), dateKey.getMonth(), dateKey.getDate());
        if (!grouped.has(formattedDate.getTime())) {
          grouped.set(formattedDate.getTime(), []);
        }
        grouped.get(formattedDate.getTime()).push(post);
      });
      return grouped;
    };
    
    const today = startOfDay(new Date());
    setSelectedDate(today);
    setSelectedPosts(groupPostsByDate().get(today.getTime()) || []);

    setGroupedPosts(groupPostsByDate());
  }, [scheduledPosts]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedPosts(groupedPosts.get(date.getTime()) || []);
  };

  const tileContent = ({ date }) => {
    const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const hasPosts = groupedPosts.has(formattedDate.getTime());
    return hasPosts ? <div className="dot-indicator" /> : null;
  };

  return (
    <div className="calendar-section calendar-section-container">
      <div className="page-header">
        <h1>Calendar of Scheduled Posts</h1>
        <Link to="/">
          <button>Back to Post Generation</button>
        </Link>
      </div>

      <div className='calendar-wrapper'>
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={tileContent}
          />
        </div>
        <div className="details-container">
          <h2 className='details-heading'>Scheduled Posts</h2>
          <div>
            <h3>{selectedDate.toLocaleDateString()}</h3>
            {selectedPosts.length > 0 ? (
              selectedPosts.map((post, index) => (
                <div key={index} className="scheduled-post">
                  <img src={post.visual} alt="Scheduled Visual" className='scheduled-visual' />
                  <div>
                    <p className='scheduled-post-date'>{new Date(post.scheduledDate).toLocaleTimeString()}</p>
                    <p>{post.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No scheduled posts for this day.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
