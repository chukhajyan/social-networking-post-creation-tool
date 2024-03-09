// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostGenerator from './components/PostGenerator';
import ResultsPage from './components/ResultsPage';
import CalendarSection from './components/CalendarSection';

const App = () => {
  const [scheduledPosts, setScheduledPosts] = useState([]);

  const handlePostScheduled = (scheduledPost) => {
    setScheduledPosts([...scheduledPosts, scheduledPost]);
  };

  const handlePostSchedule = (scheduledPost) => {
    console.log('Scheduled Post:', scheduledPost);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/results"
          element={<ResultsPage onPostSchedule={handlePostScheduled} />}
        />
        <Route
          path="/calendar"
          element={<CalendarSection scheduledPosts={scheduledPosts} />}
        />
        <Route
          path="/"
          element={
            <PostGenerator
              onPostScheduled={handlePostScheduled}
              onPostSchedule={handlePostSchedule}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;