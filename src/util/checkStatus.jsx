import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useCheckStatus = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserStatus = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                // First, check user role
                const userResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const userData = userResponse.data.data;

                // If admin, navigate to dashboard
                if (userData.role === 'admin') {
                    navigate('/dashboard');
                    return;
                }

                // If user, check if they have an account
                if (userData.role === 'user') {
                    try {
                        const accountResponse = await axios.get(
                            `${import.meta.env.VITE_API_URL}/api/accounts/user/${userData.id}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            }
                        );

                        // If account exists, navigate to tasks
                        if (accountResponse.data && accountResponse.data.success) {
                            navigate('/tasks');
                        } else {
                            // If no account, navigate to add-account
                            navigate('/add-account');
                        }
                    } catch (error) {
                        // If error fetching account (404 or other), assume no account exists
                        navigate('/add-account');
                    }
                }
            } catch (error) {
                console.error('Error checking user status:', error);
                navigate('/login');
            }
        };

        checkUserStatus();
    }, [navigate]);
};

export default useCheckStatus;