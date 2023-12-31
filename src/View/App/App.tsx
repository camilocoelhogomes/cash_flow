import {Theme} from '@radix-ui/themes';
import React, {useState} from 'react';

import {AiOutlineAreaChart} from 'react-icons/ai';

import {
  Home as HomeIcon,
  LineChart,
  MoonStar,
  TestTube2,
  SunMoon,
} from 'lucide-react';
import Home from './Home';
import ListAnalysis from '../Project/ListProjects/ListProjects';
import NavButton from '../components/ButtonFactory/NavButton';
import {useThemeStore} from '../store/ThemeStore';
import PageTest from '../PageTest';
import {ImagesFactory} from '../components/ImagesFactory';
import Button from '../components/ButtonFactory/Button';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

type Routes = 'home' | 'projects' | 'test';

export const queryClient = new QueryClient();

export default function App() {
  const [location, setLocation] = useState<Routes>('projects');
  const {theme, setTheme} = useThemeStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Theme
        appearance={theme}
        grayColor="gray"
        accentColor="teal"
        panelBackground="translucent"
      >
        <div className={'h-screen flex ' + theme}>
          <aside className="w-72 bg-gray-50 dark:bg-gray-600 transition-colors duration-700 ">
            <div className="flex items-center px-6 h-16 border-b dark:border-gray-500">
              <AiOutlineAreaChart
                size={50}
                className="text-teal-700 dark:text-teal-50"
              />
              <h1 className="font-medium text-gray-600/70 dark:text-teal-50 text-xl	">
                LandFlow
              </h1>
            </div>

            <nav className="space-y-6 py-6 px-4 ">
              <NavButton
                selected={location === 'home'}
                onClick={() => setLocation('home')}
              >
                <HomeIcon />
                Home
              </NavButton>
              <NavButton
                selected={location === 'projects'}
                onClick={() => setLocation('projects')}
              >
                <LineChart />
                Projetos
              </NavButton>
              <NavButton
                selected={location === 'test'}
                onClick={() => setLocation('test')}
              >
                <TestTube2 />
                Test
              </NavButton>
            </nav>
          </aside>

          <section className="flex flex-col w-full h-full transition-colors duration-700 dark:bg-gray-700 dark:text-gray-200">
            <header className="flex px-6 items-center justify-end h-16 border-b dark:border-gray-500 gap-2">
              <Button
                color="ghost"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'dark' ? <SunMoon /> : <MoonStar />}
              </Button>
              <ImagesFactory.Avatar
                fallback="L"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              />
            </header>

            <main className="flex-1 px-6 w-full">
              {
                {
                  home: <Home />,
                  projects: <ListAnalysis />,
                  test: <PageTest />,
                }[location]
              }
            </main>
          </section>
        </div>
      </Theme>
    </QueryClientProvider>
  );
}
