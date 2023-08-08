import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ListAnalysis from '../ListAnalysis/ListAnalysis';

type Props = {}

export default function AppRoutes({ }: Props) {
  return (
    <Router>
      <Routes>
        <Route path='analysis' element={<ListAnalysis />} />
      </Routes>
    </Router>
  )
}