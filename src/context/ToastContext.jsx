import React, { createContext, useContext, useState } from 'react';
import { Toaster } from '../components/ui/toaster'; // Import your Toaster component

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000); // Auto-hide after 5 seconds
  };

  const removeToast = (id) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toaster toasts={toasts} />
    </ToastContext.Provider>
  );
};
