import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DetailedView = ({ idea, onSchedulePost }) => {
  const [scheduledDate, setScheduledDate] = useState(new Date());
  const [postDate, setPostDate] = useState(null);

  const openCalendar = () => {
    setPostDate(null);
  };

  const handleCalendarChange = (date) => {
    setScheduledDate(date);
  };

  const handleSchedulePost = () => {
    onSchedulePost(scheduledDate);
    const dateString = scheduledDate.toLocaleString();
    setPostDate(dateString);
  };

  return (
    <div>
      <h2>Visual Idea Details</h2>
      <img src={idea.image} alt={`Visual Idea`} />
      <p>{idea.caption}</p>
      <div>
        <label>Scheduled Date:</label>
        <DatePicker
          selected={scheduledDate}
          onChange={(date) => handleCalendarChange(date)}
          showTimeSelect
          open={!postDate}
        />
        <button onClick={openCalendar}>Select Date</button>
      </div>
      {postDate ? (
        <div>
          <p>Scheduled Post Date: {postDate}</p>
          <button onClick={handleSchedulePost}>Schedule Post</button>
        </div>
      ) : null}
    </div>
  );
};

export default DetailedView;
