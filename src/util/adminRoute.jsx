import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Loading from '@/layout/loading'; // Ensure you have a Loading component

const PrivateRoute = ({ isAdminRoute, children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        const user = response.data;
        setIsAdmin(user.admin === 1);
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (isAdminRoute && !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;