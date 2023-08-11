import 'reflect-metadata';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from './View/App/Routes';
import { createRoot } from 'react-dom/client';
import './index.css'

export const queryClient = new QueryClient();

export function App() {
  return (
    <Theme accentColor="indigo">
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </Theme>
  );
}

createRoot(document.getElementById('root')!).render(App());
