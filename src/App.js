import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './login';
import Signup from './signup';
import ExpenseTracker from './Home';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/sign" element={<Signup/>} />
        <Route path="/et" element={<ExpenseTracker/>} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
