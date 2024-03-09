import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/ResultsPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResultsPage = ({ onPostSchedule }) => {
  const [selectedVisual, setSelectedVisual] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [scheduledDate, setScheduledDate] = useState(new Date());
  // const [showModal, setShowModal] = useState(false);

  const openModal = (visualUrl, description) => {
    setSelectedVisual(visualUrl);
    setSelectedDescription(description);
    // setShowModal(true);
  };

  const handleCalendarChange = (date) => {
    setScheduledDate(date);
  };

  const schedulePost = () => {
    console.log('schedulePost function called'); 
    if (!scheduledDate) {
      // alert('Please select a scheduled date.');
      toast.error('Please select a scheduled date.');
      
      return;
    }

    const scheduledPost = {
      visual: selectedVisual,
      description: selectedDescription, 
      scheduledDate: scheduledDate.toLocaleString(),
    };

    onPostSchedule(scheduledPost);
    // setShowModal(false);
    setSelectedVisual(null);
    setSelectedDescription(''); 

    // alert('Post scheduled successfully!');
    toast.success('Post scheduled successfully!');
  };

  const closeModal = () => {
    // setShowModal(false);
    setSelectedVisual(null);
    setSelectedDescription(''); 
  };

  const options = [
    {
      image: 'https://via.placeholder.com/300x300',
      description: 'Option 1: Description of the visual.',
    },
    {
      image: 'https://via.placeholder.com/300x300',
      description: 'Option 2: Description of the visual.',
    },
    {
      image: 'https://via.placeholder.com/300x300',
      description: 'Option 3: Description of the visual.',
    },
    {
      image: 'https://via.placeholder.com/300x300',
      description: 'Option 4: Description of the visual.',
    },
  ];

  return (
    <div className="results-page-container">
      <h2>Results</h2>

      <Link to="/">
        <button>Back to Post Generation</button>
      </Link>

      <Link to="/calendar">
        <button>Calendar of Scheduled Posts</button>
      </Link>

      <div className="results-container">
        {options.map((option, index) => (
          <div key={index} className="result-option">
            <img
              src={option.image}
              alt={`Option ${index + 1}`}
              onClick={() => openModal(option.image, option.description)}
            />
            <p>{option.description}</p>
            <button onClick={() => openModal(option.image, option.description)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedVisual && (
        <Modal onClose={closeModal} size="large">
          <img src={selectedVisual} alt="Detailed Visual" />
          <p>Detailed description of the visual</p>
          <div>
            <label>Scheduled Date:</label>
            <DatePicker
              selected={scheduledDate}
              onChange={(date) => handleCalendarChange(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          <button onClick={schedulePost}>Schedule Post</button>
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
        </Modal>
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeButton={false}
        closeOnClick
      />
    </div>
  );
};

export default ResultsPage;
