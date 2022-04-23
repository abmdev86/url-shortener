import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './components/Container/AppContainer';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppContainer />
    </ErrorBoundary>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
