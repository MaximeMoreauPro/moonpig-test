import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import './app/App.scss';
import './app/cors';

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
