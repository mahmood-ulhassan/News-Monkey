import React, { useState } from 'react';
import './App.css';
import News from './components/News';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <div> 
      <Router>
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" setProgress={setProgress} apiKey={apiKey} category="general" />} />  
          <Route exact path="/News/business" element={<News key="business" setProgress={setProgress} apiKey={apiKey} category="business" />} /> 
          <Route exact path="/News/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey} category="entertainment" />} /> 
          <Route exact path="/News/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey} category="health" />} /> 
          <Route exact path="/News/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey} category="science" />} /> 
          <Route exact path="/News/sports/" element={<News key="sports" setProgress={setProgress} apiKey={apiKey} category="sports" />} /> 
          <Route exact path="/News/technology/" element={<News key="technology" setProgress={setProgress} apiKey={apiKey} category="technology" />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
