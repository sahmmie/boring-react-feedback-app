import { React } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/feedbackContext';
function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}
export default App;
