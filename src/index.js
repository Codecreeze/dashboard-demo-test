import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterPage from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './Components/CustomTheme/MaterialTheme';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterPage />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

