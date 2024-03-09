import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import OptionsSelector from './OptionsSelector';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/PostGenerator.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostGenerator = (
    // { onPostSchedule, onPostScheduled }
  ) => {
  const [userPrompts, setUserPrompts] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    tone: '',
    length: '',
    style: '',
  });
  // const [scheduledDate, setScheduledDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGeneratePost = () => {
    console.log('handleGeneratePost function called');
    if (!userPrompts || !selectedOptions.tone || !selectedOptions.length || !selectedOptions.style) {
      // alert('Please fill in all fields before generating the post.');
      toast.error('Please fill in all the fields.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // const generatedPost = {
      //   userPrompts,
      //   ...selectedOptions,
      //   scheduledDate: scheduledDate.toLocaleString(),
      // };

      // onPostSchedule(generatedPost);
      // onPostScheduled(generatedPost);

      setLoading(false);
      navigate('/results');
    }, 1000);
  };

  return (
    <div className="post-generator post-generator-container">
      <h2>Create a New Post</h2>
      
      <textarea
        value={userPrompts}
        onChange={(e) => setUserPrompts(e.target.value)}
        placeholder="Enter your prompts"
      />

      <OptionsSelector selectedOptions={selectedOptions} onSelect={setSelectedOptions} />
      <button onClick={handleGeneratePost} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Post'}
      </button>

      <Link to="/calendar">
        <button>Calendar</button>
      </Link>

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

export default PostGenerator;
