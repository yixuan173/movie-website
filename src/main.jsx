import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './pages'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #000;
  }
  
  #root {
    display: flex;
    justify-content: center;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Router basename="/movie-website">
      <App />
    </Router>
  </StrictMode>,
)
