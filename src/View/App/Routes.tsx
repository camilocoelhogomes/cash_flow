import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import ListAnalysis from '../ListProjects/ListProjects';
import GetAnalysis from '../GetProject/GetProject';
import Main from './App';
import Home from './Home';
import CreateAnalysis from '../CreateProject/CreateProject';
import App from './App';
import {Theme} from '@radix-ui/themes';

type Props = {};

export default function AppRoutes({}: Props) {
  return (
    <Theme>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Theme>
  );
}
