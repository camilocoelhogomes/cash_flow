import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListAnalysis from '../ListAnalysis/ListAnalysis';
import GetAnalysis from '../GetAnalysis/GetAnalysis';

type Props = {};

export default function AppRoutes({ }: Props) {
  return (
    <Router>
      <Routes>
        <Route path="/main_window" element={<ListAnalysis />} />
        <Route path="analysis/:id" element={<GetAnalysis />} />
      </Routes>
    </Router>
  );
}
