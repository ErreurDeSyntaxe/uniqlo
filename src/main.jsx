import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { StoreProvider } from './contexts/StoreContext.jsx';

import changeFavicon from './utilities/favicon.js';

changeFavicon();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
