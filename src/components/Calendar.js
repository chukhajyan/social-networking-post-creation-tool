import React from 'react';

const Calendar = ({ scheduledPosts }) => {
  return (
    <div>
      <h2>Post Calendar</h2>
      <ul>
        {scheduledPosts.map((post, index) => (
          <li key={index}>
            <p>
              <strong>User Prompts:</strong> {post.userPrompts}
            </p>
            <p>
              <strong>Tone:</strong> {post.tone}
            </p>
            <p>
              <strong>Length:</strong> {post.length}
            </p>
            <p>
              <strong>Style:</strong> {post.style}
            </p>
            <p>
              <strong>Scheduled Date:</strong> {post.scheduledDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
