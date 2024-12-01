// ThriftStore\src\context\NotificationContext.tsx
import  { createContext, useContext, useState, ReactNode } from 'react';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface NotificationState {  // Export this interface
  notifications: Notification[];
  addNotification: (message: string, type: 'success' | 'error' | 'info') => void;
  removeNotification: (id: string) => void;
}

// Create the NotificationContext
export const NotificationContext = createContext<NotificationState>({  // Export this context
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
});

// Create the NotificationProvider
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications([...notifications, { id, message, type }]);
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook for consuming the NotificationContext
export const useNotification = () => useContext(NotificationContext);
