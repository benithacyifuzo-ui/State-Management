
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import SignUp from './components/SignUp';
import State from './pages/State';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <h2>My React Project</h2>

        <div>
          <Link to="/">Sign Up</Link>
          <Link to="/state">State Management</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/state" element={<State />} />
      </Routes>

    </div>
  );
}

export default App;
