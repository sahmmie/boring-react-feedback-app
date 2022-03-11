import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/feedbackContext';
function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' size={18} />
      </button>
      <button
        style={{
          'margin-right': '6px',
        }}
        onClick={() => editFeedback(item)}
        className='edit'>
        <FaEdit color='purple' size={16} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
