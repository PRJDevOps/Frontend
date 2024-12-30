import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PrivateRoute from './util/adminRoute';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute isAdminRoute={true}>
              <Dashboard />
            </PrivateRoute>
          }/>
        <Route path="/profile" element={
            <PrivateRoute isAdminRoute={true}>
              <Profile />
            </PrivateRoute>
          } />
      </Routes>
    </Router>
  );
};

export default App; 