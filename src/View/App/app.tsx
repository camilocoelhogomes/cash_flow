import { Theme } from '@radix-ui/themes';
import AppRoutes from './Routes';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export const queryClient = new QueryClient();

function App() {
  return (
    <Theme accentColor='indigo'>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </Theme>
  );
}

createRoot(document.getElementById('root')).render(<App />);
