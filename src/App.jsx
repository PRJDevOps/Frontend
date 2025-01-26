import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PrivateRoute from './util/adminRoute';
import './index.css';
import UserList from './pages/Users';
import NotFoundPage from './pages/404';

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
        <Route path="/users" element={
          <PrivateRoute isAdminRoute={true}>
              <UserList />
            </PrivateRoute>
          } />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App; 