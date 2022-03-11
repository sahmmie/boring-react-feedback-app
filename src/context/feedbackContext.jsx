import { createContext, useState } from 'react';
import feedbackData from '../Data/FeedbackData';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([...feedbackData]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = newFeedback => {
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map(item => (item.id === id ? updatedFeedback : item)),
    );
    setFeedbackEdit({ item: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
