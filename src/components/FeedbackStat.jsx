import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/feedbackContext';
function FeedbackStat() {
  const { feedback } = useContext(FeedbackContext);
  let avarage =
    feedback.reduce((total, item) => total + parseInt(item.rating), 0) /
      feedback.length || 0;

  return (
    <div className='feedback-stats'>
      <h4 className=''>{feedback.length} Reviews</h4>
      <h4 className=''>
        Average Rating: {avarage.toFixed(1).replace(/[.,]0$/, '')}
      </h4>
    </div>
  );
}

export default FeedbackStat;
