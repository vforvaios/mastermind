import 'styles/global.scss';
import './fontello/css/fontello.css';

import { Game } from 'components';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  </Router>
);

export default App;
