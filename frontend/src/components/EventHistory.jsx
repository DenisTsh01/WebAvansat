// TestHistory.js
import React, { useEffect } from 'react';
import ButtonAccent2 from './ButtonAccent'

const EventHistory = ({ selectedTest, onClose }) => {
useEffect(() => {
  console.log(selectedTest)
}, []);
  return (
    <div className={`fixed top-0 right-0 h-full w-72 bg-bkg p-4 border border-accent-1 rounded-2xl shadow-xl shadow-accent-2 transition-transform transform ${onClose ? 'translate-x-0' : 'translate-x-full'}`}>
    <h2 className="text-lg font-bold mb-2 text-content">{selectedTest && selectedTest.title} - Details</h2>
      <ButtonAccent2 onClick={onClose} text='Close Details'/>

      <div className='text-lg text-content'>
      Location: {selectedTest && selectedTest.location}
      <br/>
      
      {selectedTest && selectedTest.description}
      </div>
    </div>
   
  );
};

export default EventHistory;
