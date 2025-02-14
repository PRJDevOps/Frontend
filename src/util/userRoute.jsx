import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Loading from '@/layout/loading';

const UserRoute = ({ children }) => {
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setIsUser(false);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const userData = response.data.data;
        setIsUser(userData && userData.role === "user");
      } catch (error) {
        console.error('Error checking user status:', error);
        setIsUser(false);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!isUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserRoute;