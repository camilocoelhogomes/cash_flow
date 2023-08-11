import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ListAnalysis from '../ListAnalysis/ListAnalysis';
import GetAnalysis from '../GetAnalysis/GetAnalysis';
import Main from './Main';
import { RequireAuth } from './RequireAuth';
import Home from './Home';
import CreateAnalysis from '../CreateAnalysis/CreateAnalysis';

type Props = {};

export default function AppRoutes({ }: Props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/list" element={<ListAnalysis />} />
          <Route path="/get" element={<GetAnalysis />} />
          <Route path="/create" element={<CreateAnalysis />} />
        </Route>
      </Routes>
    </Router>
  );
}
