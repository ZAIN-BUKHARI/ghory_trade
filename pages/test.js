import React, { useState } from 'react';

const test = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=AIzaSyC-OBV6dPSaRXbZ1nKUP5x48K34CiH3zrE`;
    const requestBody = {
      snippet: {
        videoId: "YPdWRRLyDBg",
        topLevelComment: {
          snippet: {
            textOriginal: "comment",
          },
        },
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Comment posted successfully!');
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <button onClick={handleSubmit} type="submit">Post Comment</button>
    </div>
  );
};

export default test;
