import { Button, Heading, Switch, Theme } from '@radix-ui/themes';
import React, { PropsWithChildren, useState } from 'react';

import { AiOutlineAreaChart } from 'react-icons/ai';

import {
  Home as HomeIcon,
  LineChart,
  Cog,
  CalendarCheck2,
  MoonStar,
  Sun,
  TestTube2,
} from 'lucide-react';
import Home from './Home';
import ListAnalysis from '../ListAnalysis/ListProjects';
import NavButton from '../components/ButtonFactory/NavButton';
import { useThemeStore } from '../store/ThemeStore';
import CreateAnalysis from '../CreateAnalysis/CreateProject';
import PageTest from '../PageTest';

type Props = {};

type Routes = 'home' | 'projects' | 'test';

export default function App() {
  const [location, setLocation] = useState<Routes>('projects');
  const { theme, setTheme } = useThemeStore();

  return (
    <Theme appearance={theme} grayColor="slate" accentColor="indigo">
      <div className={'h-screen flex ' + theme}>
        <aside className="w-72 bg-slate-100 dark:bg-slate-600 transition-colors duration-700">
          <div className="flex items-center px-6 h-16 border-b dark:border-slate-500">
            <AiOutlineAreaChart
              size={50}
              className="text-indigo-400 dark:text-indigo-50"
            />
            <h1 className="font-bold text-indigo-400 dark:text-indigo-50">
              LANDFLOW
            </h1>
          </div>

          <nav className="space-y-6 py-6 px-4 ">
            <NavButton
              selected={location == 'home'}
              onClick={() => setLocation('home')}
            >
              <HomeIcon />
              Home
            </NavButton>
            <NavButton
              selected={location == 'projects'}
              onClick={() => setLocation('projects')}
            >
              <LineChart />
              Projetos
            </NavButton>
            <NavButton
              selected={location == 'test'}
              onClick={() => setLocation('test')}
            >
              <TestTube2 />
              Test
            </NavButton>
          </nav>
        </aside>

        <section className="w-full h-full transition-colors duration-700 dark:bg-slate-700 dark:text-slate-200">
          <header className="flex px-6 items-center justify-between h-16 border-b dark:border-slate-500 ">
            <div>
              <Switch
                checked={theme === 'dark'}
                radius="full"
                onCheckedChange={value => setTheme(value ? 'dark' : 'light')}
              />{' '}
              Dark Mode
            </div>
          </header>

          <main className="px-6">
            {
              { home: <Home />, projects: <ListAnalysis />, test: <PageTest /> }[
              location
              ]
            }
          </main>
        </section>
      </div>
    </Theme>
  );
}
