import * as React from 'react';
import { Theme } from '@radix-ui/themes';
import * as ReactDOM from 'react-dom';
import AppRoutes from './Routes';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <Theme>
      <AppRoutes />
    </Theme>
  );
}

createRoot(document.getElementById('root')).render(<App />);