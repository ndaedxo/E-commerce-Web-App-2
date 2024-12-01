import axios from 'axios';

// Notification Service
export const notificationService = {
  getNotifications: async (userId: string) => {
    const response = await axios.get(`/api/users/${userId}/notifications`);
    return response.data;
  },
  markAsRead: async (notificationId: string) => {
    const response = await axios.put(`/api/notifications/${notificationId}/read`);
    return response.data;
  },
  deleteNotification: async (notificationId: string) => {
    await axios.delete(`/api/notifications/${notificationId}`);
  },
};
