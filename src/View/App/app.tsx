import * as React from 'react';
import { Theme } from '@radix-ui/themes';
import * as ReactDOM from 'react-dom';
import AppRoutes from './Routes';

function render() {
  ReactDOM.render(<App />, document.body);
}

function App() {
  return (
    <Theme>
      <AppRoutes />
    </Theme>
  )
}

render();