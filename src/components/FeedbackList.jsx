import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/feedbackContext';
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (feedback?.length === 0) {
    return (
      <div className='container'>
        <h3>No feedback available</h3>
      </div>
    );
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={item.id}>
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
