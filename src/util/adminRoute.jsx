import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Loading from '@/layout/loading'; // Ensure you have a Loading component

const PrivateRoute = ({ isAdminRoute, children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        // Access the role from the correct path in the response
        const userData = response.data.data;
        setIsAdmin(userData && userData.role === "admin");
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