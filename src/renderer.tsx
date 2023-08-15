import 'reflect-metadata';
import {createRoot} from 'react-dom/client';
import './index.css';
import '@radix-ui/themes/styles.css';
import App from './View/App/App';

createRoot(document.getElementById('root')!).render(<App />);
