// ThriftStore\src\hooks\useUser.ts
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';
import { api } from '../utils/api';
import { UserProfile } from './types';

export const useUser = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (user && user.id) {
      const fetchUserProfile = async () => {
        try {
          const userProfile = await api.fetchUserProfile(user.id);
          setProfile(userProfile);
        } catch (err) {
          console.error("Failed to fetch user profile:", err);
        }
      };
      fetchUserProfile();
    }
  }, [user]);

  const updateProfile = useCallback(async (data: UserProfile) => {
    if (user && user.id) {
      try {
        const updatedProfile = await api.updateUserProfile(user.id, data);
        setProfile(updatedProfile);
      } catch (err) {
        console.error("Failed to update user profile:", err);
      }
    }
  }, [user]);

  return { profile, updateProfile };
};
