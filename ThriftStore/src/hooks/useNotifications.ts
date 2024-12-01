// ThriftStore\src\hooks\useNotifications.ts
import { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext'; // Ensure this import is correct
import { NotificationState } from '../context/NotificationContext'; // Import the type for NotificationState

export const useNotifications = () => {
  const { notifications, addNotification, removeNotification } = useContext<NotificationState>(NotificationContext);

  return { notifications, addNotification, removeNotification };
};
