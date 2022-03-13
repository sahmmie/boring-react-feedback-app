import { createContext, useState, useEffect } from 'react';
// import feedbackData from '../Data/FeedbackData';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const res = await fetch('/feedback');
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = async id => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch('feedback/' + id, {
        method: 'DELETE',
      });
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = async newFeedback => {
    const res = await fetch('/feedback', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  const editFeedback = item => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = async (id, updatedFeedback) => {
    const res = await fetch('/feedback/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFeedback),
    });
    const data = await res.json();
    setFeedback(feedback.map(item => (item.id === id ? data : item)));
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
        isLoading,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
