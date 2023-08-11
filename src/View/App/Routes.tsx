import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListAnalysis from '../ListAnalysis/ListAnalysis';
import GetAnalysis from '../GetAnalysis/GetAnalysis';
import Main from './Main';

type Props = {};

export default function AppRoutes({ }: Props) {
  return (
    <Router>
      <Routes>
        <Route path="/main_window" element={<Main />}>
          <Route path="analysis/" element={<ListAnalysis />} />
          <Route path="analysis/:id" element={<GetAnalysis />} />
        </Route>
      </Routes>
    </Router>
  );
}
